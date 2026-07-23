// api/submit.js — 유니온 레이드 덱/모의전 점수 제출 CRUD
//
// 멤버당 시즌당 슬롯 1~3 (보스별 덱 1개 기준). (union_id, season, uid, slot)
// upsert 라 같은 슬롯 재제출은 덮어쓰기 — 시즌 내 갱신, 시즌 간 기록 보존.
// uid 는 항상 fstar_member 쿠키에서 얻는다(본문의 uid 는 신뢰하지 않음).
//
// 메서드:
//   GET    /api/submit?season=S44 → { me, admin, season, seasons, submissions: [...] }
//                                    (season 생략 시 제출이 있는 시즌 목록 + 최신 시즌 자동 선택)
//   POST   /api/submit            → body { season, slot, deck, damage?, note? } (멤버 인증 필수)
//   DELETE /api/submit?season=&slot=[&uid=] → 본인 행 삭제 (uid 파라미터는 관리자 중재용)
//
// deck 형태: { boss?: string, element?: string, characters: [{ name: string } ×≤5] }
// — 서버는 허용 필드만 남기고 재구성해 저장한다.

const { verifyRequest } = require('./_lib/session');
const { UNION_ID, query } = require('./_lib/db');
const { verifyMemberIdentity } = require('./_lib/member');

const SEASON_RE = /^S\d{1,3}$/;
const MAX_DECK_JSON = 8192;
const MAX_NOTE = 200;
const MAX_DAMAGE = 1e15;

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

// deck 입력을 허용 필드만으로 재구성. 형식 오류 시 null.
function sanitizeDeck(deck) {
  if (!deck || typeof deck !== 'object' || Array.isArray(deck)) return null;
  if (!Array.isArray(deck.characters) || deck.characters.length < 1 || deck.characters.length > 5) return null;
  const characters = [];
  for (const c of deck.characters) {
    if (!c || typeof c.name !== 'string' || !c.name.trim()) return null;
    characters.push({ name: c.name.trim().slice(0, 100) });
  }
  const out = { characters };
  if (typeof deck.boss === 'string' && deck.boss.trim()) out.boss = deck.boss.trim().slice(0, 50);
  if (typeof deck.element === 'string' && deck.element.trim()) out.element = deck.element.trim().slice(0, 20);
  if (JSON.stringify(out).length > MAX_DECK_JSON) return null;
  return out;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const auth = verifyRequest(req);
  if (!auth.valid) return res.status(401).json({ error: 'auth required' });

  try {
    const me = await verifyMemberIdentity(req);
    if (me && me.renewCookie) res.setHeader('Set-Cookie', me.renewCookie); // 슬라이딩 갱신

    if (req.method === 'GET') {
      const seasonRows = await query(
        'SELECT DISTINCT season FROM raid_submissions WHERE union_id = $1 ORDER BY season DESC', [UNION_ID]);
      const seasons = seasonRows.map(r => r.season);
      let season = req.query.season;
      if (season !== undefined && !SEASON_RE.test(season)) return res.status(400).json({ error: 'season 형식은 S<숫자>' });
      if (!season) season = seasons[0] || null;

      let submissions = [];
      if (season) {
        submissions = await query(
          'SELECT s.id, s.uid, m.name, s.slot, s.deck, s.damage, s.note, s.updated_at ' +
          'FROM raid_submissions s LEFT JOIN members m ON m.union_id = s.union_id AND m.uid = s.uid ' +
          'WHERE s.union_id = $1 AND s.season = $2 ORDER BY m.name, s.slot',
          [UNION_ID, season]);
      }
      return res.status(200).json({
        admin: !!auth.admin,
        me: me ? { uid: me.uid, name: me.name } : null,
        season, seasons, submissions,
      });
    }

    if (req.method === 'POST') {
      if (!me) return res.status(403).json({ error: '멤버 인증 필요 — 닉네임과 PIN 으로 먼저 인증하세요' });
      const b = readBody(req);

      const season = String(b.season || '');
      if (!SEASON_RE.test(season)) return res.status(400).json({ error: 'season 형식은 S<숫자>' });
      const slot = parseInt(b.slot, 10);
      if (!(slot >= 1 && slot <= 3)) return res.status(400).json({ error: 'slot 은 1~3' });

      const deck = sanitizeDeck(b.deck);
      if (!deck) return res.status(400).json({ error: '덱 형식 오류 (캐릭터 1~5명 필요)' });

      let damage = null;
      if (b.damage !== undefined && b.damage !== null && b.damage !== '') {
        damage = Math.floor(Number(b.damage));
        if (!Number.isFinite(damage) || damage < 0 || damage > MAX_DAMAGE) {
          return res.status(400).json({ error: '점수(damage)는 0 이상의 숫자' });
        }
      }
      const note = String(b.note == null ? '' : b.note).trim().slice(0, MAX_NOTE) || null;

      const rows = await query(
        'INSERT INTO raid_submissions (union_id, season, uid, slot, deck, damage, note, created_at, updated_at) ' +
        'VALUES ($1, $2, $3, $4, $5::jsonb, $6, $7, now(), now()) ' +
        'ON CONFLICT (union_id, season, uid, slot) DO UPDATE SET ' +
        'deck = EXCLUDED.deck, damage = EXCLUDED.damage, note = EXCLUDED.note, updated_at = now() ' +
        'RETURNING id, updated_at',
        [UNION_ID, season, me.uid, slot, JSON.stringify(deck), damage, note]);
      return res.status(200).json({ ok: true, id: rows[0].id, season, slot, updated_at: rows[0].updated_at });
    }

    if (req.method === 'DELETE') {
      const season = String(req.query.season || '');
      const slot = parseInt(req.query.slot, 10);
      if (!SEASON_RE.test(season) || !(slot >= 1 && slot <= 3)) {
        return res.status(400).json({ error: 'season/slot 파라미터 필요' });
      }
      // 기본은 본인 행. uid 파라미터는 관리자만(중재 삭제) 허용.
      let uid;
      if (req.query.uid) {
        if (!auth.admin) return res.status(403).json({ error: 'admin only' });
        uid = String(req.query.uid);
      } else {
        if (!me) return res.status(403).json({ error: '멤버 인증 필요' });
        uid = me.uid;
      }
      const rows = await query(
        'DELETE FROM raid_submissions WHERE union_id = $1 AND season = $2 AND uid = $3 AND slot = $4 RETURNING id',
        [UNION_ID, season, uid, slot]);
      if (!rows.length) return res.status(404).json({ error: '해당 제출 없음' });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
