// api/member-auth.js — 멤버 상태 조회 + 로그아웃/PIN 변경 + 관리자 복구 액션
//
// 로그인/최초 PIN 등록은 로그인 페이지(/api/auth)가 전담한다 — 이 엔드포인트는
// 페이지(submit.html)가 쓰는 상태 조회와 자기 관리·관리자 기능만 남긴다.
//
// 메서드:
//   GET  /api/member-auth → { admin, me: {uid,name}|null, roster: [{uid,name,claimed}] }
//                           (roster 는 관리자 PIN 초기화 드롭다운용; 세션 필수)
//   POST /api/member-auth   body: { action, … }
//     action=logout             — 이 기기에서 로그아웃 (멤버·세션 쿠키 모두 삭제)
//     action=changePin {pin}    — 로그인한 본인의 PIN 변경 (로그인 유지)
//     action=reset {uid}        — [관리자] PIN 초기화 (분실 복구; 이후 로그인 페이지에서 재등록).
//                                 자기 자신을 초기화하면 쿠키도 삭제되어 즉시 로그아웃된다({self:true})
//     action=forceReauth        — [관리자] member_epoch 갱신 → 전 멤버 쿠키 무효화.
//                                 데이터 게이트(api/data.js)가 epoch 를 검사하므로 열람도 함께 끊긴다

const crypto = require('crypto');
const { verifyRequest, verifyMemberRequest, clearSessionCookie, clearMemberCookie } = require('./_lib/session');
const { UNION_ID, query, setSetting } = require('./_lib/db');
const { verifyMemberIdentity, PIN_RE, hashPin } = require('./_lib/member');

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

    if (action === 'changePin') {
      const me = await verifyMemberIdentity(req);
      if (!me) return res.status(403).json({ error: '로그인이 만료되었습니다 — 다시 로그인해 주세요' });
      const pin = String(b.pin || '');
      if (!PIN_RE.test(pin)) return res.status(400).json({ error: 'PIN 은 숫자 4~8자리여야 합니다' });
      const salt = crypto.randomBytes(16).toString('hex');
      await query(
        'UPDATE members SET pin_hash = $3, pin_salt = $4, updated_at = now() WHERE union_id = $1 AND uid = $2',
        [UNION_ID, me.uid, hashPin(pin, salt), salt]);
      return res.status(200).json({ ok: true }); // 로그인(쿠키) 유지 — 다음 로그인부터 새 PIN
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
      // 자기 자신 초기화 → 즉시 로그아웃 (쿠키 삭제; 클라이언트가 로그인 페이지로 이동)
      const me = verifyMemberRequest(req);
      const isSelf = me.valid && me.uid === uid;
      if (isSelf) res.setHeader('Set-Cookie', [clearMemberCookie(), clearSessionCookie()]);
      return res.status(200).json({ ok: true, reset: rows[0].name, self: isSelf });
    }

    if (action === 'forceReauth') {
      if (!auth.admin) return res.status(403).json({ error: 'admin only' });
      // 이후 발급 쿠키만 유효 — 기존 멤버 쿠키는 전부 재인증 필요.
      // 데이터 게이트가 epoch 를 검사하므로 전 멤버의 '열람'도 다음 요청부터 끊긴다.
      await setSetting('member_epoch', String(Date.now()));
      // 누른 본인도 예외가 아니므로 쿠키를 지워 즉시 로그인 페이지로 보낸다
      res.setHeader('Set-Cookie', [clearMemberCookie(), clearSessionCookie()]);
      return res.status(200).json({ ok: true, self: true });
    }

    return res.status(400).json({ error: '알 수 없는 action' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
