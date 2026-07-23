// api/member-auth.js — 멤버 상태 조회 + 로그아웃 + 관리자 복구 액션
//
// 로그인/PIN 등록은 로그인 페이지(/api/auth)가 전담한다 — 이 엔드포인트는
// 페이지(submit.html)가 쓰는 상태 조회와 관리 기능만 남긴다.
//
// 메서드:
//   GET  /api/member-auth → { admin, me: {uid,name}|null, roster: [{uid,name,claimed}] }
//                           (roster 는 관리자 PIN 초기화 드롭다운용; 세션 필수)
//   POST /api/member-auth   body: { action, … }
//     action=logout             — 이 기기에서 로그아웃 (멤버·세션 쿠키 모두 삭제)
//     action=reset {uid}        — [관리자] PIN 초기화 (분실 복구; 이후 로그인 페이지에서 재등록)
//     action=forceReauth        — [관리자] member_epoch 갱신 → 전 멤버 쿠키 무효화

const { verifyRequest, clearSessionCookie, clearMemberCookie } = require('./_lib/session');
const { UNION_ID, query, setSetting } = require('./_lib/db');
const { verifyMemberIdentity } = require('./_lib/member');

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
    if (req.method === 'GET') {
      const me = await verifyMemberIdentity(req);
      if (me && me.renewCookie) res.setHeader('Set-Cookie', me.renewCookie); // 슬라이딩 갱신
      const roster = await query(
        'SELECT uid, name, (pin_hash IS NOT NULL) AS claimed FROM members ' +
        'WHERE union_id = $1 AND active ORDER BY name',
        [UNION_ID]
      );
      return res.status(200).json({
        admin: !!auth.admin,
        me: me ? { uid: me.uid, name: me.name } : null,
        roster,
      });
    }

    if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });
    const b = readBody(req);
    const action = String(b.action || '');

    if (action === 'logout') {
      res.setHeader('Set-Cookie', [clearMemberCookie(), clearSessionCookie()]);
      return res.status(200).json({ ok: true });
    }

    if (action === 'reset') {
      if (!auth.admin) return res.status(403).json({ error: 'admin only' });
      const uid = String(b.uid || '');
      const rows = await query(
        'UPDATE members SET pin_hash = NULL, pin_salt = NULL, claimed_at = NULL, updated_at = now() ' +
        'WHERE union_id = $1 AND uid = $2 RETURNING name',
        [UNION_ID, uid]
      );
      if (!rows.length) return res.status(404).json({ error: '해당 멤버 없음' });
      return res.status(200).json({ ok: true, reset: rows[0].name });
    }

    if (action === 'forceReauth') {
      if (!auth.admin) return res.status(403).json({ error: 'admin only' });
      // 이후 발급 쿠키만 유효 — 기존 멤버 쿠키는 전부 재인증 필요
      await setSetting('member_epoch', String(Date.now()));
      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: '알 수 없는 action' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
