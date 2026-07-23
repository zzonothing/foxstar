// api/poll.js — 일정/참여 폴 (관리자 생성, 멤버 응답)
//
// 용례: 유니온 레이드 오픈 시 "참여 가능 시간대" 수집. 시즌마다 관리자가 새
// 폴을 만들고, 멤버는 옵션(시간대)을 골라 응답 + 비고를 남긴다. 재응답은
// (poll_id, uid) upsert 로 덮어쓰기. 지난 폴은 닫아서(is_open=false) 보관.
//
// 메서드:
//   GET  /api/poll → { admin, me, polls: [{id,title,kind,options,multi,is_open,
//                       closes_at,created_at,responses:[{uid,name,selected,note,updated_at}]}] }
//        (열린 폴 전부 + 닫힌 폴 최근 10개 — 30명 규모라 전량 반환)
//   POST /api/poll   body { action, … }
//     action=respond {pollId, selected:[optionId], note?}  (멤버 인증 필수)
//     action=create  {title, options:[label…], multi?, kind?, closesAt?}   [관리자]
//     action=close / reopen / delete {pollId}                              [관리자]

const { verifyRequest } = require('./_lib/session');
const { UNION_ID, query } = require('./_lib/db');
const { verifyMemberIdentity } = require('./_lib/member');

const MAX_OPTIONS = 20;
const MAX_TITLE = 100;
const MAX_LABEL = 50;
const MAX_NOTE = 200;
const CLOSED_KEEP = 10;

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  const auth = verifyRequest(req);
  if (!auth.valid) return res.status(401).json({ error: 'auth required' });

  try {
    const me = await verifyMemberIdentity(req);
    if (me && me.renewCookie) res.setHeader('Set-Cookie', me.renewCookie); // 슬라이딩 갱신

    if (req.method === 'GET') {
      const polls = await query(
        '(SELECT * FROM polls WHERE union_id = $1 AND is_open ORDER BY created_at DESC) ' +
        'UNION ALL ' +
        '(SELECT * FROM polls WHERE union_id = $1 AND NOT is_open ORDER BY created_at DESC LIMIT $2)',
        [UNION_ID, CLOSED_KEEP]);
      const ids = polls.map(p => p.id);
      let responses = [];
      if (ids.length) {
        const ph = ids.map((_, i) => '$' + (i + 2)).join(', ');
        responses = await query(
          'SELECT r.poll_id, r.uid, m.name, r.response, r.updated_at ' +
          'FROM poll_responses r LEFT JOIN members m ON m.union_id = $1 AND m.uid = r.uid ' +
          'WHERE r.poll_id IN (' + ph + ') ORDER BY m.name',
          [UNION_ID, ...ids]);
      }
      const byPoll = {};
      for (const r of responses) {
        (byPoll[r.poll_id] = byPoll[r.poll_id] || []).push({
          uid: r.uid, name: r.name,
          selected: (r.response && r.response.selected) || [],
          note: (r.response && r.response.note) || null,
          updated_at: r.updated_at,
        });
      }
      return res.status(200).json({
        admin: !!auth.admin,
        me: me ? { uid: me.uid, name: me.name } : null,
        polls: polls.map(p => ({
          id: p.id, title: p.title, kind: p.kind, options: p.options, multi: p.multi,
          is_open: p.is_open, closes_at: p.closes_at, created_at: p.created_at,
          responses: byPoll[p.id] || [],
        })),
      });
    }

    if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
    const b = readBody(req);
    const action = String(b.action || '');

    if (action === 'respond') {
      if (!me) return res.status(403).json({ error: '로그인이 만료되었습니다 — 다시 로그인해 주세요' });
      const pollId = parseInt(b.pollId, 10);
      if (!Number.isFinite(pollId)) return res.status(400).json({ error: 'pollId 필요' });

      const polls = await query('SELECT options, multi, is_open, closes_at FROM polls WHERE union_id = $1 AND id = $2', [UNION_ID, pollId]);
      if (!polls.length) return res.status(404).json({ error: '해당 폴 없음' });
      const poll = polls[0];
      if (!poll.is_open) return res.status(409).json({ error: '마감된 폴입니다' });
      if (poll.closes_at && Date.now() > new Date(poll.closes_at).getTime()) {
        return res.status(409).json({ error: '마감 시각이 지났습니다' });
      }

      const validIds = new Set((poll.options || []).map(o => o.id));
      const selected = Array.isArray(b.selected) ? b.selected.map(String) : [];
      if (!selected.length || !selected.every(id => validIds.has(id))) {
        return res.status(400).json({ error: '선택 항목이 올바르지 않습니다' });
      }
      if (!poll.multi && selected.length !== 1) {
        return res.status(400).json({ error: '하나만 선택할 수 있습니다' });
      }
      const note = String(b.note == null ? '' : b.note).trim().slice(0, MAX_NOTE) || null;

      await query(
        'INSERT INTO poll_responses (poll_id, uid, response, updated_at) VALUES ($1, $2, $3::jsonb, now()) ' +
        'ON CONFLICT (poll_id, uid) DO UPDATE SET response = EXCLUDED.response, updated_at = now()',
        [pollId, me.uid, JSON.stringify({ selected: [...new Set(selected)], note })]);
      return res.status(200).json({ ok: true });
    }

    // 이하 관리자 전용
    if (!auth.admin) return res.status(403).json({ error: 'admin only' });

    if (action === 'create') {
      const title = String(b.title || '').trim().slice(0, MAX_TITLE);
      if (!title) return res.status(400).json({ error: '제목을 입력하세요' });
      const rawOptions = Array.isArray(b.options) ? b.options : [];
      const labels = rawOptions
        .map(o => String(typeof o === 'object' && o !== null ? o.label : o).trim().slice(0, MAX_LABEL))
        .filter(Boolean);
      if (labels.length < 2 || labels.length > MAX_OPTIONS) {
        return res.status(400).json({ error: '옵션은 2~' + MAX_OPTIONS + '개' });
      }
      const options = labels.map((label, i) => ({ id: 'o' + (i + 1), label })); // id 는 서버가 부여
      const multi = b.multi !== false;
      const kind = b.kind === 'choice' ? 'choice' : 'schedule';
      let closesAt = null;
      if (b.closesAt) {
        const t = new Date(b.closesAt);
        if (isNaN(t.getTime())) return res.status(400).json({ error: 'closesAt 형식 오류' });
        closesAt = t.toISOString();
      }
      const rows = await query(
        'INSERT INTO polls (union_id, title, kind, options, multi, is_open, created_by, closes_at, created_at) ' +
        'VALUES ($1, $2, $3, $4::jsonb, $5, true, $6, $7, now()) RETURNING id',
        [UNION_ID, title, kind, JSON.stringify(options), multi, me ? me.name : '운영진', closesAt]);
      return res.status(200).json({ ok: true, id: rows[0].id });
    }

    if (action === 'close' || action === 'reopen') {
      const pollId = parseInt(b.pollId, 10);
      if (!Number.isFinite(pollId)) return res.status(400).json({ error: 'pollId 필요' });
      const rows = await query(
        'UPDATE polls SET is_open = $3 WHERE union_id = $1 AND id = $2 RETURNING id',
        [UNION_ID, pollId, action === 'reopen']);
      if (!rows.length) return res.status(404).json({ error: '해당 폴 없음' });
      return res.status(200).json({ ok: true });
    }

    if (action === 'delete') {
      const pollId = parseInt(b.pollId, 10);
      if (!Number.isFinite(pollId)) return res.status(400).json({ error: 'pollId 필요' });
      const rows = await query('DELETE FROM polls WHERE union_id = $1 AND id = $2 RETURNING id', [UNION_ID, pollId]);
      if (!rows.length) return res.status(404).json({ error: '해당 폴 없음' });
      return res.status(200).json({ ok: true }); // poll_responses 는 FK CASCADE 로 함께 삭제
    }

    return res.status(400).json({ error: '알 수 없는 action' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
