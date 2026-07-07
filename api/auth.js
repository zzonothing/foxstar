const crypto = require('crypto');
const { sessionCookie } = require('./_lib/session');

// 타이밍 공격 방지: 해시 후 고정 길이 비교 (문자열 길이 정보도 새지 않음)
function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  const { password } = body;

  // 관리자(운영진) 키를 먼저 확인 → 일치 시 관리 토큰 발급.
  // 그다음 일반 접근 키 확인 → 일반 토큰. (ADMIN_KEY 미설정 시 관리 로그인 비활성)
  const adminKey = process.env.ADMIN_KEY;
  let isAdmin;
  if (adminKey && password && safeEqual(password, adminKey)) {
    isAdmin = true;
  } else if (process.env.ACCESS_KEY && password && safeEqual(password, process.env.ACCESS_KEY)) {
    isAdmin = false;
  } else {
    // 브루트포스 감속: 실패 응답을 350~650ms 지연 (공유 비밀번호 구조라
    // 무제한 고속 시도를 막는 것만으로도 의미가 있다)
    await new Promise(r => setTimeout(r, 350 + Math.floor(Math.random() * 300)));
    return res.status(401).json({ error: 'Unauthorized' });
  }

  res.setHeader('Set-Cookie', sessionCookie(isAdmin));
  return res.status(200).json({ ok: true, admin: isAdmin });
};
