const { generateToken } = require('./_lib/session');

module.exports = function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const { password } = body;

  // 관리자(운영진) 키를 먼저 확인 → 일치 시 관리 토큰 발급.
  // 그다음 일반 접근 키 확인 → 일반 토큰. (ADMIN_KEY 미설정 시 관리 로그인 비활성)
  const adminKey = process.env.ADMIN_KEY;
  let isAdmin;
  if (adminKey && password && password === adminKey) {
    isAdmin = true;
  } else if (password && password === process.env.ACCESS_KEY) {
    isAdmin = false;
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const token = generateToken(isAdmin);
  const maxAge = 24 * 60 * 60; // 1일
  res.setHeader('Set-Cookie',
    'fstar_session=' + token +
    '; Path=/; HttpOnly; SameSite=Strict; Max-Age=' + maxAge
  );
  return res.status(200).json({ ok: true, admin: isAdmin });
};
