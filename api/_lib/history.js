// api/_lib/history.js — 로스터 동기화 + 데일리 히스토리 upsert 공용 모듈 (CommonJS)
//
// scripts/seed.js(초기 백필)와 api/ingest.js(스크래퍼 주기 수집)가 공유한다.
//
// 데일리 모델: 멤버/캐릭터당 '하루 1 row'. 같은 KST 날짜의 재수집은 UPDATE,
// 날짜가 바뀌면 INSERT — INSERT … ON CONFLICT DO UPDATE 한 문장으로 처리되므로
// 호출부는 '오늘 첫 수집인지'를 판단할 필요가 없다. 각 row 는 그 날의 최종 상태를 담는다.
//
// no-op UPDATE 억제: DO UPDATE 에 `WHERE <값이 실제로 달라졌는가>` 가 붙어 있다.
// 스크래퍼가 6시간 간격으로 하루 4번 도는데 재수집 사이에 값이 바뀌는 행은 실측
// 0.45~16.7% 뿐이라(나머지는 완전히 동일), 무조건 UPDATE 하면 죽은 튜플·WAL 만
// 쌓인다. 가드가 붙은 뒤 updated_at 은 '마지막 수집 시각'이 아니라 '마지막으로
// 값이 바뀐 시각'을 뜻한다 — 읽는 곳은 없지만 의미가 다르니 주의.
//
// 보관: pruneHistory() 가 오래된 날짜를 솎아낸다(최근 PRUNE_DAILY_DAYS 일은 매일,
// 그 이전은 주당 1개, PRUNE_TOTAL_WEEKS 주 이전은 삭제). api/ingest.js 가 호출한다.
// 정책값을 고른 근거와 바꿀 때의 제약은 아래 '히스토리 솎아내기' 절 주석에 있다.
//
// 캐릭터 표시명: raid.js squad 의 name 표기와 동일하게 "이름" 또는
// "이름 : 서브명" — 페이지들의 이름 매칭·초상화(imgOf) 규칙과 맞춘다.

const { UNION_ID, query, kstToday } = require('./db');

function displayCharName(c) {
  return c.subName ? c.name + ' : ' + c.subName : c.name;
}

function intOrNull(v) {
  if (v === null || v === undefined || v === '') return null;
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : null;
}

function strOrNull(v) {
  const s = v === null || v === undefined ? '' : String(v).trim();
  return s ? s.slice(0, 100) : null;
}

// 로스터 동기화: 최신 시즌 members 배열 기준으로 upsert(name/active 갱신),
// 목록에 없는 uid 는 active=false (행 삭제 금지 — 제출/응답 기록이 참조).
// PIN 관련 컬럼은 건드리지 않는다.
async function syncRoster(members) {
  const list = dedupeBy((members || []).filter(m => m && m.uid && m.name), m => String(m.uid));
  if (!list.length) return { upserted: 0, deactivated: 0 };

  const values = [];
  const params = [UNION_ID];
  list.forEach((m, i) => {
    values.push('($1, $' + (i * 2 + 2) + ', $' + (i * 2 + 3) + ', true, now())');
    params.push(String(m.uid), String(m.name).slice(0, 50));
  });
  await query(
    'INSERT INTO members (union_id, uid, name, active, updated_at) VALUES ' + values.join(', ') +
    ' ON CONFLICT (union_id, uid) DO UPDATE SET name = EXCLUDED.name, active = true, updated_at = now()',
    params
  );

  const uidParams = [UNION_ID];
  const uidPh = list.map((m, i) => { uidParams.push(String(m.uid)); return '$' + (i + 2); });
  const deactivated = await query(
    'UPDATE members SET active = false, updated_at = now() ' +
    'WHERE union_id = $1 AND active AND uid NOT IN (' + uidPh.join(', ') + ') RETURNING uid',
    uidParams
  );
  return { upserted: list.length, deactivated: deactivated.length };
}

// 한 INSERT … ON CONFLICT 문 안에 같은 충돌 키가 두 번 들어가면 PG 가
// "cannot affect row a second time" 오류를 낸다 — 배치 전에 반드시 dedupe.
function dedupeBy(list, keyFn, pickFn) {
  const map = new Map();
  for (const item of list) {
    const k = keyFn(item);
    const prev = map.get(k);
    map.set(k, prev === undefined ? item : (pickFn ? pickFn(prev, item) : item));
  }
  return [...map.values()];
}

// ── 캐릭터 extra (장비 옵션 + 큐브명; JSON 문자열을 text 컬럼에 저장) ─────
// 컬럼 타입이 jsonb 가 아니라 text 인 이유: 같은 내용을 jsonb 는 파싱된 이진
// 형태로 담아 실측 365B, text 는 194B 로 1.88배 차이가 난다. 읽는 쪽은
// api/history.js 의 jsonOrNull() 이 문자열·객체 양쪽을 받으므로 영향이 없고,
// 유일하게 jsonb 연산자를 쓰던 diff 쿼리도 텍스트 비교로 바꿨다.
// 장비 옵션 변화 추적용 — 수집 시점부터의 데이터만 diff 가능하므로 가능한 한
// 일찍 적재를 시작한다. effect 명은 축약 코드로 저장해 용량을 줄인다
// (32명 기준 6천 row/일 × 매일 적재 — Neon 무료 티어 저장량 배려). 게임 업데이트로
// 새 effect 가 오면 코드맵에 없어도 원문을 그대로 저장한다(손실 방지).
//
// 슬롯 위치 보존: equipSlots 의 부위별 배열은 항상 3칸 고정이고 빈 칸은 null 인데,
// 실데이터에 [옵션, null, 옵션] 처럼 중간이 빈 경우가 존재한다(전체 보유 부위의
// 약 15%). 빈 칸을 버리고 압축하면 "2번 칸이 새로 열림"과 "2번 칸이 리롤됨"을
// 구분할 수 없어 api/history.js 의 장비 옵션 상세 diff 가 어긋난다 — 그래서
// 빈 칸을 null 로 남긴다. 뒤쪽 빈 칸만 잘라내 저장량 증가를 최소화한다.
const EFFECT_CODE = {
  increaseElementDamage: 'elem',
  increaseAtk: 'atk',
  increaseDef: 'def',
  increaseHitRate: 'hit',
  increaseChargeSpeed: 'chgSpd',
  increaseChargeDamage: 'chgDmg',
  increaseCriticalRate: 'critRate',
  increaseCriticalDamage: 'critDmg',
  increaseMaxAmmunitionCapacity: 'ammo',
};
const EQUIP_PARTS = ['head', 'torso', 'arm', 'leg'];

// 캐릭터 1명의 extra 직렬화 (JSON 문자열):
//   {"eq":{"head":[["ammo",68.93],null,["hit",11.81]],…},"cube":"큐브명"}
// 부위 배열의 인덱스 = 게임의 옵션 칸 번호, null = 빈 칸(뒤쪽 빈 칸은 잘라냄).
// 옵션이 하나도 없는 부위는 키 자체를 생략하고, 장비 옵션도 큐브명도 없으면
// null 반환 → 컬럼 NULL (미육성 캐릭터가 과반이라 저장량이 크게 준다).
function buildCharExtra(c) {
  const extra = {};
  const slots = c.equipSlots;
  if (slots && typeof slots === 'object') {
    const eq = {};
    for (const part of EQUIP_PARTS) {
      const arr = Array.isArray(slots[part]) ? slots[part] : [];
      const opts = [];
      let last = -1;
      for (let i = 0; i < arr.length; i++) {
        const o = arr[i];
        if (!o || typeof o.effect !== 'string' || !o.effect) { opts.push(null); continue; }
        const v = Number(o.value);
        opts.push([EFFECT_CODE[o.effect] || String(o.effect).slice(0, 40), Number.isFinite(v) ? v : null]);
        last = i;
      }
      if (last >= 0) eq[part] = opts.slice(0, last + 1); // 뒤쪽 빈 칸 제거
    }
    if (Object.keys(eq).length) extra.eq = eq;
  }
  const cube = strOrNull(c.harmonyCube);
  if (cube) extra.cube = cube;
  return Object.keys(extra).length ? JSON.stringify(extra) : null;
}

// 멤버 데일리 upsert. members = UNION 최신 시즌 members 배열, dateStr 미지정 시 KST 오늘.
async function upsertMemberDaily(members, dateStr) {
  const date = dateStr || kstToday();
  const list = dedupeBy((members || []).filter(m => m && m.uid), m => String(m.uid));
  if (!list.length) return 0;

  const values = [];
  const params = [UNION_ID, date];
  list.forEach((m, i) => {
    const base = i * 3 + 3;
    values.push('($1, $' + base + ', $2, $' + (base + 1) + ', $' + (base + 2) + '::jsonb, now())');
    params.push(
      String(m.uid),
      intOrNull(m.syncroLevel),
      JSON.stringify({
        normal: m.normal ?? null,
        hard: m.hard ?? null,
        tribeTower: m.tribeTower ?? null,
        overclock: m.overclock ?? null,
        outpost: m.outpost ?? null,
        role: m.role ?? null,
      })
    );
  });
  await query(
    'INSERT INTO member_daily (union_id, uid, snapshot_date, syncro_level, fields, updated_at) VALUES ' +
    values.join(', ') +
    ' ON CONFLICT (union_id, uid, snapshot_date) DO UPDATE SET ' +
    'syncro_level = EXCLUDED.syncro_level, fields = EXCLUDED.fields, updated_at = now() ' +
    'WHERE member_daily.syncro_level IS DISTINCT FROM EXCLUDED.syncro_level ' +
    'OR member_daily.fields IS DISTINCT FROM EXCLUDED.fields',
    params
  );
  return list.length;
}

// 캐릭터 데일리 upsert. charsByUid = CHARACTERS 형태 { "<uid>": [ {char}, … ], "actionDate": … }.
// 행이 많아(멤버 32 × 캐릭터 ~190) 배치 INSERT 로 왕복을 줄인다.
const CHAR_BATCH = 150;

// upsert 대상 값 컬럼 (키·updated_at 제외) — SET 절과 '변경 있음' 판정에 함께 쓴다
const CHAR_VALUE_COLS = ['character_level', 'skill1', 'skill2', 'skill3', 'upgrade',
  'item_grade', 'item_level', 'cube_level', 'atk', 'hp', 'def', 'extra'];
const CHAR_SET = CHAR_VALUE_COLS.map(c => c + ' = EXCLUDED.' + c).join(', ') + ', updated_at = now()';
const CHAR_CHANGED = CHAR_VALUE_COLS
  .map(c => 'character_daily.' + c + ' IS DISTINCT FROM EXCLUDED.' + c).join(' OR ');

async function upsertCharacterDaily(charsByUid, dateStr) {
  const date = dateStr || kstToday();
  let rows = [];
  for (const uid of Object.keys(charsByUid || {})) {
    const arr = charsByUid[uid];
    if (!Array.isArray(arr)) continue; // "actionDate" 등 비배열 키 제외
    for (const c of arr) {
      if (!c || !c.name) continue;
      rows.push([
        String(uid), displayCharName(c).slice(0, 100),
        intOrNull(c.characterLevel),
        intOrNull(c.skill1), intOrNull(c.skill2), intOrNull(c.skill3),
        strOrNull(c.upgrade), strOrNull(c.itemGrade), intOrNull(c.itemLevel),
        intOrNull(c.harmonyCubeLevel),
        intOrNull(c.atk), intOrNull(c.hp), intOrNull(c.def),
        buildCharExtra(c), // extra 는 맨 끝 고정 — 아래 dedupe 의 atk(r[10]) 인덱스 유지
      ]);
    }
  }
  // 표시명이 같은 별개 캐릭터가 실존한다 (예: subName 없는 '사쿠라' 2종 —
  // 전 멤버 공통). PK 가 (uid, 표시명, 날짜) 라 한 명만 남길 수 있으므로
  // 투자도가 높은 쪽(atk, 동률이면 레벨)을 남긴다.
  rows = dedupeBy(rows, r => r[0] + '\x00' + r[1],
    (a, b) => ((b[10] || 0) > (a[10] || 0) || ((b[10] || 0) === (a[10] || 0) && (b[2] || 0) > (a[2] || 0))) ? b : a);
  const COLS = 14; // union_id·date 제외한 per-row 파라미터 수 (마지막은 extra text)
  for (let off = 0; off < rows.length; off += CHAR_BATCH) {
    const batch = rows.slice(off, off + CHAR_BATCH);
    const values = [];
    const params = [UNION_ID, date];
    batch.forEach((r, i) => {
      const base = i * COLS + 3;
      const ph = [];
      for (let k = 0; k < COLS; k++) ph.push('$' + (base + k));
      values.push('($1, ' + ph[0] + ', ' + ph[1] + ', $2, ' + ph.slice(2).join(', ') + ', now())');
      params.push(...r);
    });
    await query(
      'INSERT INTO character_daily (union_id, uid, char_name, snapshot_date, character_level, ' +
      'skill1, skill2, skill3, upgrade, item_grade, item_level, cube_level, atk, hp, def, extra, updated_at) VALUES ' +
      values.join(', ') +
      ' ON CONFLICT (union_id, uid, char_name, snapshot_date) DO UPDATE SET ' + CHAR_SET +
      ' WHERE ' + CHAR_CHANGED,
      params
    );
  }
  return rows.length;
}

// ── 스냅샷 날짜 목록 ────────────────────────────────────────────
// member_daily·character_daily 에 실제로 존재하는 날짜(오름차순). api/history.js 의
// 기간 스냅과 pruneHistory 가 함께 쓴다.
//
// 재귀 CTE 로 'loose index scan(skip scan)' 을 한다 — 인덱스에서 min() 을 잡고
// 그보다 큰 다음 min() 으로 건너뛰기를 반복하므로, 비용이 누적 행 수가 아니라
// 고유 날짜 수에 비례한다. 단순 `SELECT snapshot_date … UNION` 은 인덱스 엔트리를
// 전부 훑어(1년 220만 개) 0.6~0.9초가 걸렸다. 기존 인덱스를 그대로 쓴다:
// character_daily_date_idx / member_daily_date_idx (union_id, snapshot_date).
const SNAPSHOT_DATES_SQL =
  'WITH RECURSIVE c AS (' +
  '  SELECT min(snapshot_date) AS d FROM character_daily WHERE union_id = $1' +
  '  UNION ALL' +
  '  SELECT (SELECT min(snapshot_date) FROM character_daily' +
  '          WHERE union_id = $1 AND snapshot_date > c.d) FROM c WHERE c.d IS NOT NULL' +
  '), m AS (' +
  '  SELECT min(snapshot_date) AS d FROM member_daily WHERE union_id = $1' +
  '  UNION ALL' +
  '  SELECT (SELECT min(snapshot_date) FROM member_daily' +
  '          WHERE union_id = $1 AND snapshot_date > m.d) FROM m WHERE m.d IS NOT NULL' +
  ') ' +
  'SELECT d FROM c WHERE d IS NOT NULL UNION SELECT d FROM m WHERE d IS NOT NULL ORDER BY d';

// date 값 → 'YYYY-MM-DD' (드라이버 파서 오버라이드로 보통은 문자열, Date 도 방어)
function ymd(v) {
  if (v instanceof Date) {
    const p = n => String(n).padStart(2, '0');
    return v.getFullYear() + '-' + p(v.getMonth() + 1) + '-' + p(v.getDate());
  }
  return String(v).slice(0, 10);
}

async function snapshotDates() {
  const rows = await query(SNAPSHOT_DATES_SQL, [UNION_ID]);
  return rows.map(r => ymd(r.d));
}

// ── 히스토리 솎아내기 ───────────────────────────────────────────
// 보관 정책: 최근 PRUNE_DAILY_DAYS 일은 매일 그대로, 그 이전은 '주당 마지막
// 스냅샷 1개'만, PRUNE_TOTAL_WEEKS 주보다 오래된 것은 삭제.
// 총량이 날짜 슬라이스 수 × 하루치로 고정되므로 무한 누적이 멈춘다.
//
// 정책값 선택 근거 (하루치 = 32명 6,098행 ≈ 1.68MiB — 두 데일리 테이블의 힙+인덱스
// 실측 289B/행 기준이며 data_docs 는 별도. Neon 무료 0.5GB 는 계정 합산이 아니라
// **프로젝트당**이라, 유니온마다 Neon 프로젝트를 따로 두면 각자 이 예산을 받는다):
//
//   일별/주   슬라이스   32명     64명    비고
//   30 / 52    78~79    133MiB   266MiB  이전 정책
//   30 / 26    52~53     89MiB   179MiB  ← 현재
//   7  / 26    32~33     56MiB   111MiB  UI '30일' 프리셋이 깨진다(아래)
//   (슬라이스가 ±1 흔들리는 것은 주 버킷이 일별 창 경계에 걸치는 요일 때문)
//
// * 일별 창을 30일로 두는 이유: history.html 의 기간 프리셋 최댓값과 같아야 한다.
//   7일로 줄이면 '30일' 버튼이 보내는 from=today-30 이 주간 구간 깊숙이 떨어져
//   snapLE 가 최대 6일 더 과거로 당기고, 같은 버튼이 오늘 요일에 따라 30~36일을
//   비교하게 된다(화면 표기는 정직하지만 버튼 이름이 거짓이 된다). 아끼는 양은
//   33MiB — 무료 한도의 7%뿐이라 수지가 맞지 않는다.
//   ★ 불변식: PRUNE_DAILY_DAYS >= history.html RANGES 의 최대 일수(현재 30).
//     줄이려면 그 프리셋도 같은 커밋에서 함께 줄일 것.
//     등호에서 성립하는 메커니즘이 미묘하다 — dailyFrom 은 today-29 라 today-30 은
//     이미 주간 구간이다. 그런데도 정확히 30일이 나오는 건 일별 창 경계에 걸친 주
//     버킷의 생존자가 항상 today-30(= dailyFrom-1)이기 때문이다. 이 생존자만은
//     일요일이 아니며, 그 덕에 '30일' 프리셋이 정확히 착지한다.
// * 상한을 26주(반년)로 줄인 이유는 용량 압박이 아니라 타이밍이다. 히스토리
//   테이블은 2026-07-23 부터 쌓기 시작해 지금 며칠치뿐이라 지금 낮추면 삭제되는
//   행이 0이고, 상한이 실제로 무는 것은 2027-01 이후다. 반대로 포화된 뒤에 낮추면
//   26개 날짜(64명 기준 약 32만 행)를 한 번의 ingest 안에서 지워야 한다 —
//   DELETE 문 수는 평소와 같지만 한 문장이 무는 행이 50배라 서버리스 실행 시간
//   한도가 위태롭다.
//
// ★ 두 테이블을 반드시 같은 날짜 집합으로 유지해야 한다. api/history.js 의
//   기간 스냅은 두 테이블 날짜의 합집합에서 고르는데, 한쪽에만 남은 날짜가 비교
//   시작점으로 뽑히면 다른 쪽에 행이 없어 캐릭터 변화가 통째로 비어 버린다.
//   HTTP 드라이버라 트랜잭션이 없어 아래 두 DELETE 는 원자적이지 않다. 삭제 판정이
//   단조(오늘이 지나도 뒤집히지 않음)라 다음 수집이 같은 날짜를 다시 잡아 자기
//   치유되지만, 그 사이 최대 한 수집 주기(약 6시간) 동안은 불변식이 깨진 채
//   서비스된다. 고아가 되는 날짜는 가장 오래된 날짜 = avail[0] 이고 그것이 곧
//   기본 프리셋 '전체'의 비교 시작점이라, 증상이 기본 화면에 그대로 드러난다.
//   (ingest 는 prune 실패를 warnings 로 삼키고 200 을 반환하므로 알림도 없다.)
//
// 날짜가 띄엄띄엄해져도 조회는 그대로 동작한다 — 요청 기간을 '실제 보유 스냅샷'
// 으로 스냅하는 구조라서, 화면에는 비교에 쓰인 날짜가 그대로 표시된다.
const PRUNE_DAILY_DAYS = 30;   // 이 기간 안은 매일 보관 (UI 의 7일·30일 프리셋을 온전히 덮는다)
const PRUNE_TOTAL_WEEKS = 26;  // 전체 보관 상한 (반년). api/history.js 의 DEFAULT_RANGE_DAYS 가 이 값에서 파생된다
const PRUNE_BATCH = 60;        // 한 DELETE 에 넣을 날짜 수

// 주 버킷의 시작 요일 보정. dayNum 은 에폭 기준 일 번호이고 에폭 day 0(1970-01-01)이
// 목요일이라, 보정 없이 floor(dayNum/7) 을 쓰면 버킷이 목~수로 끊겨 '그 주의 마지막'
// 이 수요일이 된다. 4를 빼면 버킷이 월~일이 되어 **일요일 스냅샷**이 남는다 —
// 니케의 주간 리셋 직전, 즉 '그 주에 최종적으로 도달한 상태'다.
// 다른 요일로 옮기려면 (남길 요일 - 3) mod 7 (0=일 … 6=토): 일 4 / 월 5 / 수 0 / 토 3.
// 바꿔도 비싸지 않다 — 주간 구간의 생존 날짜는 정확히 7일 등차수열이라 어떤 7일
// 분할로 다시 나눠도 버킷당 1개씩 들어간다(실측: 보정값 0~4 삭제 0건, 5~6 최대 1건).
const PRUNE_WEEK_OFFSET = 4;

const DAY_MS = 86400000;
const dayNum = d => Math.floor(Date.parse(d + 'T00:00:00Z') / DAY_MS);
const shiftDate = (d, days) =>
  new Date(Date.parse(d + 'T00:00:00Z') + days * DAY_MS).toISOString().slice(0, 10);

// 보관 규칙 → 지울 날짜 목록. 순수 함수(테스트 용이).
// dates: 오름차순 'YYYY-MM-DD' 배열, today: 기준일(KST)
function datesToPrune(dates, today) {
  const dailyFrom = shiftDate(today, -(PRUNE_DAILY_DAYS - 1));
  const totalFrom = shiftDate(today, -(PRUNE_TOTAL_WEEKS * 7 - 1));
  const keep = new Set();
  const weekLast = new Map(); // 주 버킷(월~일) → 그 주의 마지막 날짜 = 일요일
  for (const d of dates) {
    if (d < totalFrom) continue;                    // 보관 상한 밖 → 삭제
    if (d >= dailyFrom) { keep.add(d); continue; }  // 일별 창 안 → 보관
    const wk = Math.floor((dayNum(d) - PRUNE_WEEK_OFFSET) / 7);
    const prev = weekLast.get(wk);
    if (prev === undefined || d > prev) weekLast.set(wk, d);
  }
  for (const d of weekLast.values()) keep.add(d);
  return dates.filter(d => !keep.has(d));
}

// 솎아내기 실행. 반환 { dates: 지운 날짜 수, kept: 남은 날짜 수 }.
async function pruneHistory(dateStr) {
  const today = dateStr || kstToday();
  const dates = await snapshotDates();
  const drop = datesToPrune(dates, today);
  if (!drop.length) return { dates: 0, kept: dates.length };
  for (let off = 0; off < drop.length; off += PRUNE_BATCH) {
    const batch = drop.slice(off, off + PRUNE_BATCH);
    const ph = batch.map((_, i) => '$' + (i + 2)).join(', ');
    const params = [UNION_ID, ...batch];
    // 같은 날짜 집합을 유지하기 위해 두 테이블을 함께 지운다
    await query('DELETE FROM character_daily WHERE union_id = $1 AND snapshot_date IN (' + ph + ')', params);
    await query('DELETE FROM member_daily WHERE union_id = $1 AND snapshot_date IN (' + ph + ')', params);
  }
  return { dates: drop.length, kept: dates.length - drop.length };
}

module.exports = {
  syncRoster, upsertMemberDaily, upsertCharacterDaily, displayCharName,
  snapshotDates, pruneHistory, datesToPrune,
  PRUNE_DAILY_DAYS, PRUNE_TOTAL_WEEKS,
};
