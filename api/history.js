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
//   ?kind=character&uid=&name=&from=&to= → { series: [{date, characterLevel, skill1..3,
//                                              upgrade, itemLevel, cubeLevel, atk, hp, def,
//                                              extra}] }  (extra: 장비 옵션·큐브명 —
//                                              api/_lib/history.js buildCharExtra 형식, 없으면 null)
//   ?kind=diff&from=&to=             → 기간 성장 diff (history.html 유니온 성장 요약용).
//       요청 날짜는 실제 보유 스냅샷으로 스냅된다: a = from 이전 마지막(없으면 첫)
//       스냅샷, b = to 이전 마지막 스냅샷. from/to 생략 시 전체 기간.
//       { requested:{from,to}, compared:{a,b}|null,
//         available:{count,first,last},
//         members: [{uid,name,syncro:[a,b],acct?,outpost?,hasA}],   (active 로스터 전원)
//         events:  [{uid,char,t,…}] }   t = acquire|upgrade|skill|item|cube|equip
//       스냅샷이 2개 미만이거나 a===b 면 members/events 는 빈 배열.
// from/to: YYYY-MM-DD (KST 날짜, 생략 시 최근 DEFAULT_RANGE_DAYS 일 — diff 는 전체 기간)

const { verifyRequest } = require('./_lib/session');
const { UNION_ID, query, kstToday } = require('./_lib/db');

const UID_RE = /^[0-9a-zA-Z]{1,32}$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const DEFAULT_RANGE_DAYS = 180;

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

// jsonb 컬럼 방어적 파싱 (드라이버가 객체/문자열 어느 쪽을 주든 수용)
function jsonOrNull(v) {
  if (v == null) return null;
  if (typeof v === 'object') return v;
  try { return JSON.parse(v); } catch { return null; }
}

// extra.eq 의 옵션 줄 수 합계 (장비 4부위 × 최대 3줄)
function eqLines(extra) {
  if (!extra || !extra.eq) return 0;
  let n = 0;
  for (const k of Object.keys(extra.eq)) n += Array.isArray(extra.eq[k]) ? extra.eq[k].length : 0;
  return n;
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
      return res.status(200).json({ members: rows });
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
        series: rows.map(r => ({ date: r.date, syncroLevel: r.syncro_level, fields: r.fields })),
      });
    }

    if (kind === 'characters') {
      if (!UID_RE.test(uid || '')) return res.status(400).json({ error: 'uid 필요' });
      const rows = await query(
        'SELECT char_name AS name, count(*) AS days, max(snapshot_date) AS last FROM character_daily ' +
        'WHERE union_id = $1 AND uid = $2 GROUP BY char_name ORDER BY max(atk) DESC NULLS LAST',
        [UNION_ID, uid]);
      return res.status(200).json({ characters: rows });
    }

    if (kind === 'character') {
      const name = req.query.name;
      if (!UID_RE.test(uid || '')) return res.status(400).json({ error: 'uid 필요' });
      if (!name || name.length > 100) return res.status(400).json({ error: 'name 필요' });
      const { from, to } = rangeOf(req);
      const rows = await query(
        'SELECT snapshot_date AS date, character_level, skill1, skill2, skill3, upgrade, ' +
        'item_grade, item_level, cube_level, atk, hp, def, extra FROM character_daily ' +
        'WHERE union_id = $1 AND uid = $2 AND char_name = $3 AND snapshot_date BETWEEN $4 AND $5 ORDER BY snapshot_date',
        [UNION_ID, uid, name, from, to]);
      return res.status(200).json({
        from, to,
        series: rows.map(r => ({
          date: r.date, characterLevel: r.character_level,
          skill1: r.skill1, skill2: r.skill2, skill3: r.skill3,
          upgrade: r.upgrade, itemGrade: r.item_grade, itemLevel: r.item_level,
          cubeLevel: r.cube_level, atk: r.atk, hp: r.hp, def: r.def,
          extra: r.extra || null,
        })),
      });
    }

    if (kind === 'diff') {
      const reqFrom = DATE_RE.test(req.query.from || '') ? req.query.from : null;
      const reqTo = DATE_RE.test(req.query.to || '') ? req.query.to : null;

      // 가용 스냅샷 날짜 (멤버·캐릭터 테이블 합집합, 오름차순)
      const dRows = await query(
        'SELECT snapshot_date AS d FROM member_daily WHERE union_id = $1 UNION ' +
        'SELECT snapshot_date FROM character_daily WHERE union_id = $1 ORDER BY d',
        [UNION_ID]);
      const avail = dRows.map(r => String(r.d).slice(0, 10));
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

      const [mrows, crows, aRows] = await Promise.all([
        // active 로스터 전원의 계정 지표 (양 시점 LEFT JOIN — 미수집 시 NULL)
        query(
          'SELECT m.uid, m.name, a.syncro_level AS sa, b.syncro_level AS sb, a.fields AS fa, b.fields AS fb ' +
          'FROM members m ' +
          'LEFT JOIN member_daily a ON a.union_id = m.union_id AND a.uid = m.uid AND a.snapshot_date = $2 ' +
          'LEFT JOIN member_daily b ON b.union_id = m.union_id AND b.uid = m.uid AND b.snapshot_date = $3 ' +
          'WHERE m.union_id = $1 AND m.active ORDER BY m.name',
          [UNION_ID, a, b]),
        // 변화 있는 캐릭터 행만 (atk/hp/def/레벨은 싱크로 연동 상시 변동이라 제외)
        query(
          'SELECT COALESCE(a.uid, b.uid) AS uid, COALESCE(a.char_name, b.char_name) AS name, ' +
          '(a.uid IS NULL) AS added, (b.uid IS NULL) AS removed, ' +
          'a.skill1 AS as1, a.skill2 AS as2, a.skill3 AS as3, b.skill1 AS bs1, b.skill2 AS bs2, b.skill3 AS bs3, ' +
          'a.upgrade AS au, b.upgrade AS bu, a.item_grade AS aig, a.item_level AS ail, ' +
          'b.item_grade AS big, b.item_level AS bil, a.cube_level AS ac, b.cube_level AS bc, ' +
          'a.extra AS ae, b.extra AS be ' +
          'FROM (SELECT * FROM character_daily WHERE union_id = $1 AND snapshot_date = $2) a ' +
          'FULL OUTER JOIN (SELECT * FROM character_daily WHERE union_id = $1 AND snapshot_date = $3) b ' +
          'ON a.uid = b.uid AND a.char_name = b.char_name ' +
          'WHERE a.uid IS NULL OR b.uid IS NULL ' +
          'OR a.skill1 IS DISTINCT FROM b.skill1 OR a.skill2 IS DISTINCT FROM b.skill2 ' +
          'OR a.skill3 IS DISTINCT FROM b.skill3 OR a.upgrade IS DISTINCT FROM b.upgrade ' +
          'OR a.item_grade IS DISTINCT FROM b.item_grade OR a.item_level IS DISTINCT FROM b.item_level ' +
          'OR a.cube_level IS DISTINCT FROM b.cube_level ' +
          "OR (a.extra -> 'eq') IS DISTINCT FROM (b.extra -> 'eq')",
          [UNION_ID, a, b]),
        // a 시점에 캐릭터 수집이 있던 uid — 신규 인원의 전 캐릭터가 '신규 보유'로 오인되는 것을 차단
        query('SELECT DISTINCT uid FROM character_daily WHERE union_id = $1 AND snapshot_date = $2', [UNION_ID, a]),
      ]);

      const activeUids = new Set(mrows.map(r => r.uid));
      const hadCharsA = new Set(aRows.map(r => r.uid));

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
        if (r.bc != null && (r.bc || 0) > (r.ac || 0)) base.events.push({ uid, char, t: 'cube', a: r.ac, b: r.bc });
        // 장비 옵션 — 양 시점 모두 extra 가 수집된 경우만 (수집 개시 이전과의 비교 노이즈 방지)
        const ae = jsonOrNull(r.ae), be = jsonOrNull(r.be);
        if (ae && be && JSON.stringify(ae.eq || null) !== JSON.stringify(be.eq || null)) {
          const parts = [];
          for (const p of ['head', 'torso', 'arm', 'leg']) {
            if (JSON.stringify((ae.eq || {})[p] || null) !== JSON.stringify((be.eq || {})[p] || null)) parts.push(p);
          }
          base.events.push({ uid, char, t: 'equip', a: eqLines(ae), b: eqLines(be), parts });
        }
      }

      return res.status(200).json(base);
    }

    return res.status(400).json({ error: '알 수 없는 kind' });
  } catch (e) {
    return res.status(502).json({ error: '조회 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
