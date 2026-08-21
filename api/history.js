// api/history.js — 데일리 히스토리 시계열 조회 (history.html 성장 기록용)
//
// member_daily / character_daily 는 api/ingest.js(스크래퍼 수집)가 KST 기준
// 하루 1 row 로 적재한다. 이 엔드포인트는 그 시계열을 그래프용 JSON 으로
// 돌려준다. 게이트 데이터와 동일하게 세션 필수(미인증 401 — fetch 소비).
//
// 메서드 (GET 전용):
//   ?kind=members                    → { members: [{uid, name, days, first, last}] }
//                                      (스냅샷 보유 현황 포함 로스터 — 멤버 선택 UI 용)
//   ?kind=member&uid=&from=&to=      → { series: [{date, syncroLevel, fields}] }
//   ?kind=characters&uid=            → { characters: [{name, days, last}] } (캐릭터 선택 UI 용)
//   ?kind=character&uid=&name=&from=&to= → { extraFrom, series: [{date, characterLevel,
//                                              skill1..3, upgrade, itemLevel, cubeLevel,
//                                              atk, hp, def, extra}], changes: [...] }
//       extra: 오버로드(장비) 옵션·큐브명 JSON 문자열 — api/_lib/history.js buildCharExtra
//       형식, 없으면 null. text 컬럼이라 객체가 아닌 문자열.
//       changes = 연속한 두 스냅샷 사이의 변화 이력(오름차순, 변화가 있는 날만):
//         { date, prev, skill?: [{n:1|2|3, a, b}], up?: {a,b}, item?: {a,b},
//           eq?: [{p, ch:[…]}], eqSum?: {코드:[이전합계,이후합계]} }
//         eq 의 ch 는 kind=diff 의 equip 이벤트와 같은 형식이고, eqSum 은 그 변화를
//         효과별 합계로 접은 것(총합이 달라진 효과만).
//       레벨·공격력·HP·방어력은 싱크로 연동으로 상시 변해 변화 이력에서 제외한다
//       (큐브 레벨도 재료 소모로 오르내려 제외 — kind=diff 와 같은 기준).
//       extraFrom = 오버로드 옵션 적재가 시작된 첫 스냅샷 날짜(없으면 null).
//   ?kind=diff&from=&to=             → 기간 성장 diff (history.html 유니온 성장 요약용).
//       요청 날짜는 실제 보유 스냅샷으로 스냅된다: a = from 이전 마지막(없으면 첫)
//       스냅샷, b = to 이전 마지막 스냅샷. from/to 생략 시 전체 기간.
//       { requested:{from,to}, compared:{a,b}|null,
//         available:{count,first,last},
//         members: [{uid,name,syncro:[a,b],acct?,outpost?,hasA}],   (active 로스터 전원)
//         events:  [{uid,char,t,…}] }   t = acquire|upgrade|skill|item|equip
//       큐브 레벨은 character_daily 에 계속 기록하되 이벤트로는 내보내지 않는다
//       (재료 소모로 수시 변동 — 성장 비교에서는 노이즈).
//       equip 이벤트는 옵션 칸 단위 상세 + 효과별 합계 변화를 함께 싣는다:
//         { t:'equip', a,b: 총 옵션 줄 수,
//           parts: [{ p:'head'|'torso'|'arm'|'leg', ch: [변화, …] }],
//           sum:   { 코드: [이전 합계, 이후 합계] }   (총합이 달라진 효과만;
//                   한쪽에만 있는 효과는 반대쪽이 0 — 신규 부착/완전 해제) }
//         변화 = { k:'up'|'down', s, e:코드, a:이전값, b:이후값 }   (옵션 강화)
//               | { k:'add',  s, e, b }                            (새 옵션)
//               | { k:'drop', s, e, a }                            (옵션 해제)
//               | { k:'swap', s, e:이전코드, a, e2:이후코드, b }     (리롤)
//         e/e2 는 api/_lib/history.js EFFECT_CODE 의 축약 코드.
//         s 는 정렬용 칸 번호 — 초기 수집 행은 칸이 밀려 있어 표시하지 않는다
//         (아래 diffPartSlots 주석 참고).
//       스냅샷이 2개 미만이거나 a===b 면 members/events 는 빈 배열.
//   ?kind=char-list                  → { date, characters: [{name, owners}] }
//       (최신 스냅샷 기준 유니온 보유 캐릭터 목록 — 캐릭터 보기 선택 UI 용, 보유자 많은 순)
//   ?kind=char-union&name=&from=&to= → 캐릭터 1종의 유니온 매트릭스 (history.html 캐릭터 보기).
//       { compared:{a|null,b}|null, available, rows: [{uid, member, isNew,
//         a: {up,s:[s1,s2,s3],item:[grade,lvl]|null,cube,atk,eq,eqSum}|null, b: 동일 }] }
//       b = 기간 끝 상태(항상), a = 비교 시작 상태(비교 불가 구간이면 null → 현재 상태만 표시).
//       eq 는 오버로드 옵션 줄 수, eqSum 은 효과별 합계 { 코드: 합계 } — 그 시점에
//       옵션 적재가 없었으면 둘 다 null(옵션이 하나도 없는 것과 '미수집'을 구분한다).
//       isNew 는 기간 내 신규 보유
//       (diff 와 동일하게 a 시점 수집이 있던 멤버만 true — 신규 인원 오인 방지).
// from/to: YYYY-MM-DD (KST 날짜, 생략 시 최근 DEFAULT_RANGE_DAYS 일 — diff/char-union 은 전체 기간)

const { verifyRequest } = require('./_lib/session');
const { UNION_ID, query, kstToday } = require('./_lib/db');
const { snapshotDates, PRUNE_TOTAL_WEEKS } = require('./_lib/history');

const UID_RE = /^[0-9a-zA-Z]{1,32}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
// from 미지정 시 기본 조회 범위. 보관 상한(pruneHistory)과 같게 두어 '전체 기록'이
// 실제로 전체가 되게 한다 — 이 값이 보관 기간보다 짧으면 성장 그래프가 "보관 중인
// 전체 기록"이라고 표시하면서 조용히 최근 일부만 그리게 된다. 반드시 상수에서
// 파생시킬 것(별도 상수·env 로 떼어내면 두 값이 어긋난다).
// 여유는 정확히 하루뿐이고 그 기준이 서로 다르다 — 보관 하한은 prune 이 돈 날 P 의
// P-181, 조회 하한은 조회일 Q 의 Q-182 라 Q <= P+1 일 때만 전부 덮는다. 수집이
// 이틀 이상 멈추면 그래프의 가장 오래된 점부터 조용히 빠진다.
const DEFAULT_RANGE_DAYS = PRUNE_TOTAL_WEEKS * 7;

function rangeOf(req) {
  let from = req.query.from, to = req.query.to;
  if (!DATE_RE.test(to || '')) to = kstToday();
  if (!DATE_RE.test(from || '')) {
    const d = new Date(to + 'T00:00:00Z');
    d.setUTCDate(d.getUTCDate() - DEFAULT_RANGE_DAYS);
    from = d.toISOString().slice(0, 10);
  }
  return { from, to };
}

// ── kind=diff 헬퍼 ──────────────────────────────────────────────
// 돌파 단계 서열 (character_daily.upgrade 실측 값 전수). 미지 값(게임 확장)은
// -1 — 방향을 판정할 수 없으므로 '변화 있음'으로만 취급한다.
const UPGRADE_ORDER = ['명함', '1돌', '2돌', '풀돌', '1코', '2코', '3코', '4코', '5코', '6코', '풀코'];
const GRADE_ORDER = { R: 1, SR: 2, SSR: 3 };

function upIdx(v) { return UPGRADE_ORDER.indexOf(String(v || '')); }

// avail(오름차순 날짜 배열)에서 d 이하의 마지막 날짜 (없으면 null)
function snapLE(avail, d) {
  let r = null;
  for (const x of avail) { if (x <= d) r = x; else break; }
  return r;
}

// snapshot_date 값 → 'YYYY-MM-DD' 정규화. 드라이버 파서 오버라이드(_lib/db.js)로
// 보통은 문자열이 오지만, 설정 누락·드라이버 변경으로 Date 객체가 와도 로컬 날짜
// 기준으로 안전하게 문자열화한다. String(Date).slice(0,10) 은 "Thu Jul 23" 이 되어
// 'YYYY-MM-DD' 와의 대소 비교·SQL 파라미터 재사용이 전부 깨지므로 금지.
function ymd(v) {
  if (v instanceof Date) {
    const p = n => String(n).padStart(2, '0');
    return v.getFullYear() + '-' + p(v.getMonth() + 1) + '-' + p(v.getDate());
  }
  return String(v).slice(0, 10);
}

// 가용 스냅샷 날짜 (멤버·캐릭터 테이블 합집합, 오름차순) — diff/char-union 공용.
// 구현은 api/_lib/history.js 의 snapshotDates() — 재귀 CTE loose index scan 이라
// 비용이 누적 행 수가 아니라 고유 날짜 수에 비례한다. 솎아내기(pruneHistory)와
// 같은 목록을 봐야 하므로 한 곳에 둔다.
const availDates = snapshotDates;

// jsonb 컬럼 방어적 파싱 (드라이버가 객체/문자열 어느 쪽을 주든 수용)
function jsonOrNull(v) {
  if (v == null) return null;
  if (typeof v === 'object') return v;
  try { return JSON.parse(v); } catch { return null; }
}

// extra.eq 의 옵션 줄 수 합계 (장비 4부위 × 최대 3칸; 빈 칸 null 은 제외)
function eqLines(extra) {
  if (!extra || !extra.eq) return 0;
  let n = 0;
  for (const k of Object.keys(extra.eq)) {
    const arr = extra.eq[k];
    if (Array.isArray(arr)) for (const o of arr) if (Array.isArray(o) && o[0]) n++;
  }
  return n;
}

// ── 장비 옵션 상세 diff ─────────────────────────────────────────
// extra.eq 의 부위 배열([[code,value]|null, …])을 비교해 "이 부위가 가진 옵션이
// 어떻게 달라졌는가"를 만든다. 짝짓는 순서는 좁은 조건부터:
//   ① 같은 칸 + 코드·값 동일   → 변화 없음
//   ② 다른 칸 + 코드·값 동일   → 변화 없음   (※ 구 형식 관용 — 아래 설명)
//   ③ 같은 칸 + 코드 동일      → up/down (옵션 강화)
//   ④ 다른 칸 + 코드 동일      → up/down    (※ 구 형식 관용)
//   ⑤ 같은 칸 + 코드 다름      → swap    (리롤 — 옵션 종류 교체)
//   ⑥ 남은 b 쪽 → add(새 옵션) / 남은 a 쪽 → drop(해제)
//
// ★ s(칸 번호)는 정렬용일 뿐이며 화면에 표시하지 않는다.
//   장비 옵션 적재를 시작한 2026-07-24~26 행은 빈 칸을 버리고 압축 저장해서
//   인덱스가 밀려 있다(실데이터 기준 보유 부위의 15.6% 가 [옵션,빈칸,옵션] 형태).
//   그 행과 비교하면 "2칸"이 실제로는 3칸이라 칸 번호는 날조가 된다. 이 구간은
//   '전체' 기간과 from=2026-07-24 지정에서 영구히 조회되므로 사라지지 않는다.
//   그래서 칸 번호를 버리고 부위 단위 옵션 집합의 변화로만 이야기한다 — 이 수준에서는
//   ①~⑥이 만드는 문장이 모두 참이다("공격력 9.7%→12.52%", "명중률 8.29% 추가" 등).
//   칸 번호를 되살리려면 buildCharExtra 가 형식 버전(extra.v)을 함께 적재하고
//   양쪽 v 가 신 형식일 때만 s 를 노출하면 된다.
//
// ④가 ⑤보다 먼저인 이유: 구 형식의 밀린 칸을 ⑤가 먼저 집으면, 실제로는 그대로인
// 옵션을 "리롤됐다"고 지어내고 멀쩡한 옵션에 drop 을 붙인다(예: a 구 형식
// [critRate 5.71, ammo 68.93] × b 신 형식 [critRate 5.71, atk 12.4, ammo 85.37]).
// 반대로 ④를 먼저 두면 그 경우가 "ammo 강화 + atk 추가"로 바르게 읽힌다.
const EQ_PARTS = ['head', 'torso', 'arm', 'leg'];

function eqSlots(extra, part) {
  const arr = extra && extra.eq && Array.isArray(extra.eq[part]) ? extra.eq[part] : [];
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    const o = arr[i];
    if (Array.isArray(o) && o[0]) out.push({ i, e: String(o[0]), v: o[1] == null ? null : Number(o[1]) });
  }
  return out;
}

function diffPartSlots(A, B) {
  const usedA = new Set(), usedB = new Set(), ch = [];
  // pass: 술어 match 를 만족하는 쌍을 소거. sameSlot=true 면 같은 칸만 짝짓는다.
  const pair = (match, sameSlot, emit) => {
    for (let x = 0; x < A.length; x++) {
      if (usedA.has(x)) continue;
      for (let y = 0; y < B.length; y++) {
        if (usedB.has(y)) continue;
        if (sameSlot && A[x].i !== B[y].i) continue;
        if (!match(A[x], B[y])) continue;
        usedA.add(x); usedB.add(y);
        if (emit) ch.push(emit(A[x], B[y]));
        break;
      }
    }
  };
  const same = (a, b) => a.e === b.e && a.v === b.v;
  const sameCode = (a, b) => a.e === b.e;
  pair(same, true, null);
  pair(same, false, null);
  pair(sameCode, true, (a, b) => ({ k: (b.v || 0) >= (a.v || 0) ? 'up' : 'down', s: b.i, e: b.e, a: a.v, b: b.v }));
  pair(sameCode, false, (a, b) => ({ k: (b.v || 0) >= (a.v || 0) ? 'up' : 'down', s: b.i, e: b.e, a: a.v, b: b.v }));
  pair(() => true, true, (a, b) => ({ k: 'swap', s: b.i, e: a.e, a: a.v, e2: b.e, b: b.v }));
  for (let y = 0; y < B.length; y++) if (!usedB.has(y)) ch.push({ k: 'add', s: B[y].i, e: B[y].e, b: B[y].v });
  for (let x = 0; x < A.length; x++) if (!usedA.has(x)) ch.push({ k: 'drop', s: A[x].i, e: A[x].e, a: A[x].v });
  return ch.sort((p, q) => p.s - q.s);
}

// 효과별 합계 { 코드: 합계 }. 같은 옵션이 4부위에 흩어져 붙으므로, 칸별 값보다
// 합계가 "이 캐릭터가 그 옵션을 얼마나 챙겼는가"를 바로 보여준다(shift.html 장비
// 모달 상단과 같은 관점). 소수 둘째 자리로 반올림 — 부동소수 누적으로
// 25.040000000000003 같은 값이 그대로 화면에 나가지 않게.
function eqTotals(extra) {
  const t = {};
  if (!extra || !extra.eq) return t;
  for (const p of EQ_PARTS) {
    const arr = Array.isArray(extra.eq[p]) ? extra.eq[p] : [];
    for (const o of arr) {
      if (!Array.isArray(o) || !o[0]) continue;
      const k = String(o[0]), v = Number(o[1]);
      t[k] = Math.round(((t[k] || 0) + (Number.isFinite(v) ? v : 0)) * 100) / 100;
    }
  }
  return t;
}

// 효과별 합계의 변화 { 코드: [이전, 이후] } — 실제로 총합이 달라진 효과만.
// 칸 단위 변화(eqDiff 의 parts)가 "무엇을 어떻게 굴렸나"라면 이쪽은 "그래서 총합이
// 얼마가 됐나"다. 오버로드는 같은 옵션이 4부위에 흩어져 붙고 리롤로 오르내림이
// 섞이므로, 칸만 봐서는 실제로 얼마나 끌어올렸는지가 보이지 않는다.
// 한쪽에만 있는 효과는 반대쪽을 0 으로 읽는다(신규 부착 / 완전 해제).
function eqSumDiff(ae, be) {
  const ta = eqTotals(ae), tb = eqTotals(be), out = {};
  const keys = Object.keys(ta);
  for (const k of Object.keys(tb)) if (keys.indexOf(k) < 0) keys.push(k);
  for (const k of keys) {
    const va = ta[k] || 0, vb = tb[k] || 0;
    if (va !== vb) out[k] = [va, vb];
  }
  return out;
}

// 오버로드 옵션(extra.eq) 적재가 시작된 첫 스냅샷 날짜 (아직 없으면 null).
//
// ★ 옵션 비교의 가부는 반드시 이 '스냅샷 단위' 경계로 판정해야 한다. 예전에는
//   캐릭터 행의 extra 가 양쪽 모두 NULL 이 아닐 때만 비교했는데, 그러면 옵션이
//   하나도 없던 캐릭터에 처음 옵션이 붙은 변화가 통째로 사라졌다(extra 는 옵션도
//   큐브도 없으면 NULL 이다) — 정확히 "오버로드 옵션 변경 건이 안 보인다"의 원인.
//   경계 이전 스냅샷은 전 캐릭터가 NULL 이라 비교하면 "전부 새로 추가됨"이 되므로,
//   양쪽 날짜가 모두 이 날짜 이상일 때만 비교하고 그 안에서는 NULL 을 '옵션 없음'
//   으로 읽는다.
//
// LIKE 패턴 주의: buildCharExtra 는 eq 를 cube 보다 먼저 넣고, jsonb→text 마이그레이션
// 으로 변환된 옛 행도 키 길이 순(eq→cube)이라 양쪽 다 '{"eq"' 로 시작한다(옛 행은
// 콜론 뒤에 공백이 있어 '{"eq":' 까지 묶으면 놓친다). 큐브명만 있는 행은 걸리지 않는다.
// 비용: min() + 필터라 적재 개시 이전 구간(현재 하루치)만 훑고 멈춘다. 그 구간은
// 솎아내기로 곧 사라지고, 사라지면 첫 행에서 바로 끝난다.
const EXTRA_SINCE_SQL =
  'SELECT min(snapshot_date) AS d FROM character_daily ' +
  'WHERE union_id = $1 AND extra LIKE \'{"eq"%\'';

async function extraSince() {
  const rows = await query(EXTRA_SINCE_SQL, [UNION_ID]);
  return rows.length && rows[0].d ? ymd(rows[0].d) : null;
}

// 두 시점의 extra → [{p, ch:[…]}] (변화 있는 부위만). 변화 없으면 빈 배열.
// ae/be 는 null 을 허용한다 — eqSlots 가 빈 배열을 돌려주므로 '옵션 없음'으로 읽힌다.
function eqDiff(ae, be) {
  const parts = [];
  for (const p of EQ_PARTS) {
    const ch = diffPartSlots(eqSlots(ae, p), eqSlots(be, p));
    if (ch.length) parts.push({ p, ch });
  }
  return parts;
}

// ── 캐릭터 1종의 변화 이력 (kind=character) ─────────────────────
// 연속한 두 스냅샷을 비교해 "언제 무엇이 바뀌었는가"를 만든다. 담는 항목은
// kind=diff 의 이벤트와 같은 기준: 레벨·공격력·HP·방어력은 싱크로 연동으로 상시
// 변하고, 큐브 레벨은 재료 소모로 오르내려 성장 판단에 쓸 수 없으므로 뺀다.
// 남는 것이 실제로 손이 간 것 — 스킬 1/2/3, 돌파, 소장품, 오버로드 옵션이다.
function charChanges(series, extraFrom) {
  const out = [];
  for (let i = 1; i < series.length; i++) {
    const p = series[i - 1], c = series[i];
    const ch = { date: c.date, prev: p.date };
    const sk = [];
    for (let n = 1; n <= 3; n++) {
      const va = p['skill' + n], vb = c['skill' + n];
      if (va != null && vb != null && va !== vb) sk.push({ n, a: va, b: vb });
    }
    if (sk.length) ch.skill = sk;
    if (p.upgrade !== c.upgrade) {
      // 하락은 데이터 노이즈로 보고 생략 (게임상 돌파는 되돌릴 수 없음) — kind=diff 와 동일
      const ia = upIdx(p.upgrade), ib = upIdx(c.upgrade);
      if (ia < 0 || ib < 0 || ib > ia) ch.up = { a: p.upgrade || null, b: c.upgrade || null };
    }
    const ga = GRADE_ORDER[p.itemGrade] || 0, gb = GRADE_ORDER[c.itemGrade] || 0;
    if (gb > ga || (gb > 0 && gb === ga && (c.itemLevel || 0) > (p.itemLevel || 0))) {
      ch.item = { a: ga ? [p.itemGrade, p.itemLevel] : null, b: [c.itemGrade, c.itemLevel] };
    }
    // 오버로드 옵션 — 이전 스냅샷이 적재 개시 이후일 때만 (경계를 넘으면 전부
    // '새로 추가됨'이 된다). 그 안에서는 extra NULL 을 '옵션 없음'으로 읽으므로,
    // 옵션이 처음 붙는 순간도 add 로 잡힌다.
    if (extraFrom && p.date >= extraFrom) {
      const pe = jsonOrNull(p.extra), ce = jsonOrNull(c.extra);
      const parts = eqDiff(pe, ce);
      if (parts.length) { ch.eq = parts; ch.eqSum = eqSumDiff(pe, ce); }
    }
    if (ch.skill || ch.up || ch.item || ch.eq) out.push(ch);
  }
  return out;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'GET') return res.status(405).json({ error: 'method not allowed' });

  if (!verifyRequest(req).valid) {
    return res.status(401).json({ error: 'auth required' });
  }

  const kind = req.query.kind;
  const uid = req.query.uid;

  try {
    if (kind === 'members') {
      const rows = await query(
        'SELECT m.uid, m.name, count(d.snapshot_date) AS days, min(d.snapshot_date) AS first, max(d.snapshot_date) AS last ' +
        'FROM members m LEFT JOIN member_daily d ON d.union_id = m.union_id AND d.uid = m.uid ' +
        'WHERE m.union_id = $1 AND m.active GROUP BY m.uid, m.name ORDER BY m.name',
        [UNION_ID]);
      return res.status(200).json({
        members: rows.map(r => ({
          uid: r.uid, name: r.name, days: r.days,
          first: r.first ? ymd(r.first) : null,
          last: r.last ? ymd(r.last) : null,
        })),
      });
    }

    if (kind === 'member') {
      if (!UID_RE.test(uid || '')) return res.status(400).json({ error: 'uid 필요' });
      const { from, to } = rangeOf(req);
      const rows = await query(
        'SELECT snapshot_date AS date, syncro_level, fields FROM member_daily ' +
        'WHERE union_id = $1 AND uid = $2 AND snapshot_date BETWEEN $3 AND $4 ORDER BY snapshot_date',
        [UNION_ID, uid, from, to]);
      return res.status(200).json({
        from, to,
        series: rows.map(r => ({ date: ymd(r.date), syncroLevel: r.syncro_level, fields: r.fields })),
      });
    }

    if (kind === 'characters') {
      if (!UID_RE.test(uid || '')) return res.status(400).json({ error: 'uid 필요' });
      const rows = await query(
        'SELECT char_name AS name, count(*) AS days, max(snapshot_date) AS last FROM character_daily ' +
        'WHERE union_id = $1 AND uid = $2 GROUP BY char_name ORDER BY max(atk) DESC NULLS LAST',
        [UNION_ID, uid]);
      return res.status(200).json({
        characters: rows.map(r => ({ name: r.name, days: r.days, last: r.last ? ymd(r.last) : null })),
      });
    }

    if (kind === 'character') {
      const name = req.query.name;
      if (!UID_RE.test(uid || '')) return res.status(400).json({ error: 'uid 필요' });
      if (!name || name.length > 100) return res.status(400).json({ error: 'name 필요' });
      const { from, to } = rangeOf(req);
      const [rows, extraFrom] = await Promise.all([
        query(
          'SELECT snapshot_date AS date, character_level, skill1, skill2, skill3, upgrade, ' +
          'item_grade, item_level, cube_level, atk, hp, def, extra FROM character_daily ' +
          'WHERE union_id = $1 AND uid = $2 AND char_name = $3 AND snapshot_date BETWEEN $4 AND $5 ORDER BY snapshot_date',
          [UNION_ID, uid, name, from, to]),
        extraSince(),
      ]);
      const series = rows.map(r => ({
        date: ymd(r.date), characterLevel: r.character_level,
        skill1: r.skill1, skill2: r.skill2, skill3: r.skill3,
        upgrade: r.upgrade, itemGrade: r.item_grade, itemLevel: r.item_level,
        cubeLevel: r.cube_level, atk: r.atk, hp: r.hp, def: r.def,
        extra: r.extra || null,
      }));
      return res.status(200).json({
        from, to, extraFrom, series, changes: charChanges(series, extraFrom),
      });
    }

    if (kind === 'diff') {
      const reqFrom = DATE_RE.test(req.query.from || '') ? req.query.from : null;
      const reqTo = DATE_RE.test(req.query.to || '') ? req.query.to : null;
      const avail = await availDates();
      const base = {
        requested: { from: reqFrom, to: reqTo },
        compared: null,
        available: { count: avail.length, first: avail[0] || null, last: avail[avail.length - 1] || null },
        members: [], events: [],
      };
      if (avail.length < 2) return res.status(200).json(base);

      // 요청 기간 → 실제 비교 스냅샷으로 스냅
      const b = reqTo ? (snapLE(avail, reqTo) || avail[0]) : avail[avail.length - 1];
      const a = reqFrom ? (snapLE(avail, reqFrom) || avail[0]) : avail[0];
      base.compared = { a, b };
      if (a >= b) return res.status(200).json(base); // 구간 내 스냅샷 1개 — 비교 불가

      const [mrows, crows, aRows, extraFrom] = await Promise.all([
        // active 로스터 전원의 계정 지표 (양 시점 LEFT JOIN — 미수집 시 NULL)
        query(
          'SELECT m.uid, m.name, a.syncro_level AS sa, b.syncro_level AS sb, a.fields AS fa, b.fields AS fb ' +
          'FROM members m ' +
          'LEFT JOIN member_daily a ON a.union_id = m.union_id AND a.uid = m.uid AND a.snapshot_date = $2 ' +
          'LEFT JOIN member_daily b ON b.union_id = m.union_id AND b.uid = m.uid AND b.snapshot_date = $3 ' +
          'WHERE m.union_id = $1 AND m.active ORDER BY m.name',
          [UNION_ID, a, b]),
        // 변화 있는 캐릭터 행만 (atk/hp/def/레벨은 싱크로 연동 상시 변동이라 제외;
        // 큐브 레벨은 기록만 하고 비교에서는 제외 — 재료 소모로 수시 변동해 노이즈)
        query(
          'SELECT COALESCE(a.uid, b.uid) AS uid, COALESCE(a.char_name, b.char_name) AS name, ' +
          '(a.uid IS NULL) AS added, (b.uid IS NULL) AS removed, ' +
          'a.skill1 AS as1, a.skill2 AS as2, a.skill3 AS as3, b.skill1 AS bs1, b.skill2 AS bs2, b.skill3 AS bs3, ' +
          'a.upgrade AS au, b.upgrade AS bu, a.item_grade AS aig, a.item_level AS ail, ' +
          'b.item_grade AS big, b.item_level AS bil, ' +
          'a.extra AS ae, b.extra AS be ' +
          'FROM (SELECT * FROM character_daily WHERE union_id = $1 AND snapshot_date = $2) a ' +
          'FULL OUTER JOIN (SELECT * FROM character_daily WHERE union_id = $1 AND snapshot_date = $3) b ' +
          'ON a.uid = b.uid AND a.char_name = b.char_name ' +
          'WHERE a.uid IS NULL OR b.uid IS NULL ' +
          'OR a.skill1 IS DISTINCT FROM b.skill1 OR a.skill2 IS DISTINCT FROM b.skill2 ' +
          'OR a.skill3 IS DISTINCT FROM b.skill3 OR a.upgrade IS DISTINCT FROM b.upgrade ' +
          'OR a.item_grade IS DISTINCT FROM b.item_grade OR a.item_level IS DISTINCT FROM b.item_level ' +
          // extra 는 text 지만 ::jsonb 로 파싱해 eq 부분만 비교한다. 문자열 그대로
          // 비교하면 (1) 큐브명만 바뀐 행이 딸려오고, (2) jsonb→text 마이그레이션으로
          // 변환된 옛 행은 공백이 들어간 형태({"eq": {…})라 내용이 같아도 전부 다르다고
          // 판정된다. 파싱 비용은 하루치 슬라이스(약 1.2만 행)에만 든다.
          "OR (a.extra::jsonb -> 'eq') IS DISTINCT FROM (b.extra::jsonb -> 'eq')",
          [UNION_ID, a, b]),
        // a 시점에 캐릭터 수집이 있던 uid — 신규 인원의 전 캐릭터가 '신규 보유'로 오인되는 것을 차단
        query('SELECT DISTINCT uid FROM character_daily WHERE union_id = $1 AND snapshot_date = $2', [UNION_ID, a]),
        extraSince(),
      ]);

      const activeUids = new Set(mrows.map(r => r.uid));
      const hadCharsA = new Set(aRows.map(r => r.uid));
      // 오버로드 옵션 비교 가부는 스냅샷 단위로 판정한다 (extraSince 주석 참고).
      // b > a 가 보장되므로 a 만 확인하면 양쪽 모두 적재 개시 이후임이 성립한다.
      const eqComparable = !!(extraFrom && a >= extraFrom);

      base.members = mrows.map(r => {
        const fa = jsonOrNull(r.fa), fb = jsonOrNull(r.fb);
        const acct = {};
        for (const k of ['normal', 'hard', 'tribeTower', 'overclock']) {
          const va = fa ? fa[k] : null, vb = fb ? fb[k] : null;
          if (va != null && vb != null && va !== vb) acct[k] = [va, vb];
        }
        const outpost = {};
        const oa = (fa && fa.outpost) || null, ob = (fb && fb.outpost) || null;
        if (oa && ob) {
          for (const k of Object.keys(ob)) {
            const va = Number(oa[k]), vb = Number(ob[k]);
            if (Number.isFinite(va) && Number.isFinite(vb) && va !== vb) outpost[k] = [oa[k], ob[k]];
          }
        }
        const m = { uid: r.uid, name: r.name, syncro: [r.sa, r.sb], hasA: r.sa != null || fa != null };
        if (Object.keys(acct).length) m.acct = acct;
        if (Object.keys(outpost).length) m.outpost = outpost;
        return m;
      });

      for (const r of crows) {
        if (!activeUids.has(r.uid)) continue; // 탈퇴(비활성) 멤버 제외
        if (r.removed) continue;              // b 시점 소실 — 스크랩 누락 노이즈, 미표시
        const uid = r.uid, char = r.name;
        if (r.added) {
          // a 시점 수집 자체가 없던 멤버(신규 합류/수집 개시)는 전 캐릭터가 added 로 잡힘 — 제외
          if (!hadCharsA.has(uid)) continue;
          base.events.push({ uid, char, t: 'acquire', b: r.bu || null });
          continue; // 신규 보유면 세부 변화 이벤트는 무의미
        }
        if (r.au !== r.bu) {
          const ia = upIdx(r.au), ib = upIdx(r.bu);
          // 하락(ib<ia)은 데이터 노이즈로 보고 생략 — 게임상 돌파는 되돌릴 수 없음
          if (ia < 0 || ib < 0 || ib > ia) base.events.push({ uid, char, t: 'upgrade', a: r.au, b: r.bu });
        }
        const d = Math.max(0, (r.bs1 || 0) - (r.as1 || 0)) + Math.max(0, (r.bs2 || 0) - (r.as2 || 0)) +
          Math.max(0, (r.bs3 || 0) - (r.as3 || 0));
        if (d > 0) base.events.push({ uid, char, t: 'skill', a: [r.as1, r.as2, r.as3], b: [r.bs1, r.bs2, r.bs3], d });
        const ga = GRADE_ORDER[r.aig] || 0, gb = GRADE_ORDER[r.big] || 0;
        if (gb > ga || (gb > 0 && gb === ga && (r.bil || 0) > (r.ail || 0))) {
          base.events.push({ uid, char, t: 'item', a: ga ? [r.aig, r.ail] : null, b: [r.big, r.bil] });
        }
        // 오버로드 옵션 — 적재 개시 이후 구간에서만. 캐릭터별 extra 가 NULL 이어도
        // 건너뛰지 않는다: NULL = '옵션 없음'이라 옵션이 처음 붙은 변화가 여기서 잡힌다.
        if (eqComparable) {
          const ae = jsonOrNull(r.ae), be = jsonOrNull(r.be);
          const parts = eqDiff(ae, be);
          if (parts.length) {
            base.events.push({
              uid, char, t: 'equip', a: eqLines(ae), b: eqLines(be),
              parts, sum: eqSumDiff(ae, be),
            });
          }
        }
      }

      return res.status(200).json(base);
    }

    if (kind === 'char-list') {
      // 최신 스냅샷 날짜의 보유 캐릭터 목록 (보유자 많은 순 → 인기 캐릭터가 앞에)
      const dRows = await query(
        'SELECT max(snapshot_date) AS d FROM character_daily WHERE union_id = $1', [UNION_ID]);
      const date = dRows.length && dRows[0].d ? ymd(dRows[0].d) : null;
      if (!date) return res.status(200).json({ date: null, characters: [] });
      const rows = await query(
        'SELECT char_name AS name, count(*) AS owners FROM character_daily ' +
        'WHERE union_id = $1 AND snapshot_date = $2 GROUP BY char_name ' +
        'ORDER BY count(*) DESC, char_name',
        [UNION_ID, date]);
      return res.status(200).json({ date, characters: rows.map(r => ({ name: r.name, owners: Number(r.owners) })) });
    }

    if (kind === 'char-union') {
      const name = req.query.name;
      if (!name || name.length > 100) return res.status(400).json({ error: 'name 필요' });
      const reqFrom = DATE_RE.test(req.query.from || '') ? req.query.from : null;
      const reqTo = DATE_RE.test(req.query.to || '') ? req.query.to : null;
      const avail = await availDates();
      const base = {
        requested: { from: reqFrom, to: reqTo },
        compared: null,
        available: { count: avail.length, first: avail[0] || null, last: avail[avail.length - 1] || null },
        rows: [],
      };
      if (!avail.length) return res.status(200).json(base);
      // b(기간 끝)는 항상 정하고, a 는 비교 가능한 구간일 때만 — a 없이도 현재 상태 매트릭스는 보여준다
      const b = reqTo ? (snapLE(avail, reqTo) || avail[0]) : avail[avail.length - 1];
      let a = reqFrom ? (snapLE(avail, reqFrom) || avail[0]) : avail[0];
      if (!(a < b)) a = null;
      base.compared = { a, b };

      const aDate = a || '0001-01-01'; // a 없음 → a 쪽 JOIN 이 자연히 비게 되는 안전값
      const [rows, aRows, extraFrom] = await Promise.all([
        query(
          'SELECT m.uid, m.name AS member, ' +
          'a.upgrade AS au, a.skill1 AS as1, a.skill2 AS as2, a.skill3 AS as3, a.item_grade AS aig, ' +
          'a.item_level AS ail, a.cube_level AS ac, a.atk AS aatk, a.extra AS ae, ' +
          'b.upgrade AS bu, b.skill1 AS bs1, b.skill2 AS bs2, b.skill3 AS bs3, b.item_grade AS big, ' +
          'b.item_level AS bil, b.cube_level AS bc, b.atk AS batk, b.extra AS be ' +
          'FROM members m ' +
          'LEFT JOIN character_daily a ON a.union_id = m.union_id AND a.uid = m.uid AND a.char_name = $2 AND a.snapshot_date = $3 ' +
          'LEFT JOIN character_daily b ON b.union_id = m.union_id AND b.uid = m.uid AND b.char_name = $2 AND b.snapshot_date = $4 ' +
          'WHERE m.union_id = $1 AND m.active AND (a.uid IS NOT NULL OR b.uid IS NOT NULL) ORDER BY m.name',
          [UNION_ID, name, aDate, b]),
        a ? query('SELECT DISTINCT uid FROM character_daily WHERE union_id = $1 AND snapshot_date = $2', [UNION_ID, a])
          : Promise.resolve([]),
        extraSince(),
      ]);
      const hadCharsA = new Set(aRows.map(r => r.uid));
      // 그 스냅샷에 오버로드 옵션 적재가 있었는가 (extraSince 주석 참고).
      // 적재 이전이면 eq/eqSum 을 null 로 두어 '옵션 없음'과 '미수집'을 구분한다.
      const eqOK = { a: !!(extraFrom && a && a >= extraFrom), b: !!(extraFrom && b >= extraFrom) };
      const pack = (r, p) => {
        if (r[p + 'u'] == null && r[p + 's1'] == null && r[p + 'atk'] == null) return null; // JOIN 미매치
        const extra = jsonOrNull(r[p + 'e']);
        return {
          up: r[p + 'u'] || null,
          s: [r[p + 's1'], r[p + 's2'], r[p + 's3']],
          item: r[p + 'ig'] ? [r[p + 'ig'], r[p + 'il']] : null,
          cube: r[p + 'c'],
          atk: r[p + 'atk'],
          eq: eqOK[p] ? eqLines(extra) : null,
          eqSum: eqOK[p] ? eqTotals(extra) : null,
        };
      };
      base.rows = rows.map(r => {
        const ra = pack(r, 'a'), rb = pack(r, 'b');
        return {
          uid: r.uid, member: r.member,
          isNew: !!(a && !ra && rb && hadCharsA.has(r.uid)),
          a: ra, b: rb,
        };
      });
      return res.status(200).json(base);
    }

    return res.status(400).json({ error: '알 수 없는 kind' });
  } catch (e) {
    return res.status(502).json({ error: '조회 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
