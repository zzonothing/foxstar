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
//                                              upgrade, itemLevel, cubeLevel, atk, hp, def}] }
// from/to: YYYY-MM-DD (KST 날짜, 생략 시 최근 DEFAULT_RANGE_DAYS 일)

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
        'item_grade, item_level, cube_level, atk, hp, def FROM character_daily ' +
        'WHERE union_id = $1 AND uid = $2 AND char_name = $3 AND snapshot_date BETWEEN $4 AND $5 ORDER BY snapshot_date',
        [UNION_ID, uid, name, from, to]);
      return res.status(200).json({
        from, to,
        series: rows.map(r => ({
          date: r.date, characterLevel: r.character_level,
          skill1: r.skill1, skill2: r.skill2, skill3: r.skill3,
          upgrade: r.upgrade, itemGrade: r.item_grade, itemLevel: r.item_level,
          cubeLevel: r.cube_level, atk: r.atk, hp: r.hp, def: r.def,
        })),
      });
    }

    return res.status(400).json({ error: '알 수 없는 kind' });
  } catch (e) {
    return res.status(502).json({ error: '조회 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
