// api/_lib/session.js — 세션 토큰 발급/검증 공용 모듈 (CommonJS)
//
// 기존에 api/auth.js(발급), api/data.js·api/sim.js(검증)에 중복 구현돼 있던
// 세션 로직을 한 곳으로 모은다. 관리자(운영진) 구분이 추가되면서 토큰 포맷을
// 확장했으나, 기존 일반 세션 쿠키와 하위호환된다.
//
// 토큰 포맷 (모두 '.' 로 구분, ts=숫자·role='a'·sig=hex 라 '.' 이 값에 없음):
//   일반 : "<ts>.<sig>"        sig = HMAC(secret, "<ts>")        ← 기존과 동일
//   관리 : "<ts>.a.<sig>"      sig = HMAC(secret, "<ts>.a")      ← 신규
//
// 관리자 여부는 서명 대상(payload)에 포함되므로 클라이언트가 위조할 수 없다.
// 서명 비밀키는 일반/관리 공통(SESSION_SECRET || ACCESS_KEY)이며, ADMIN_KEY 는
// 로그인 시점(api/auth.js)에 '관리 토큰을 발급할지' 판정에만 쓰인다.

const crypto = require('crypto');

const DAY_MS = 24 * 60 * 60 * 1000;

// 서명 비밀키. 미설정이면 빈 문자열 대신 '' 이 반환되며, 이 경우 검증은
// fail-closed 로 거부한다(빈 키로 HMAC 이 성립해 위조를 허용하는 것을 방지).
function secretKey() {
  return process.env.SESSION_SECRET || process.env.ACCESS_KEY || '';
}

function sign(payload) {
  return crypto.createHmac('sha256', secretKey()).update(payload).digest('hex');
}

// 세션 토큰 생성. isAdmin=true 면 관리 토큰.
function generateToken(isAdmin) {
  const ts = Date.now().toString();
  if (isAdmin) {
    const payload = ts + '.a';
    return payload + '.' + sign(payload);
  }
  return ts + '.' + sign(ts);
}

// Set-Cookie 헤더 값 직렬화 (발급 api/auth.js·슬라이딩 갱신 api/data.js 공용).
// HTTPS 전용 사이트이므로 Secure 고정. (vercel dev 의 http://localhost 도
// 크롬 계열은 localhost 를 secure context 로 취급해 Secure 쿠키를 저장한다.)
function sessionCookie(isAdmin) {
  return 'fstar_session=' + generateToken(isAdmin) +
    '; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=' + (DAY_MS / 1000);
}

function parseCookies(header) {
  const out = {};
  if (!header) return out;
  header.split(';').forEach(part => {
    const idx = part.indexOf('=');
    if (idx < 0) return;
    out[part.slice(0, idx).trim()] = part.slice(idx + 1).trim();
  });
  return out;
}

// 쿠키의 fstar_session 검증. 반환 { valid, admin, issued }
// (issued: 토큰 발급 시각 ms — 슬라이딩 갱신 판단용, 실패 시 0).
function verifyCookie(cookieHeader) {
  const fail = { valid: false, admin: false, issued: 0 };

  // 비밀키가 설정돼 있지 않으면 검증 불가 → 무조건 거부(fail-closed).
  // (빈 키 '' 로도 HMAC 은 성립하므로, 이 가드가 없으면 미설정 환경에서
  //  공격자가 스스로 서명한 관리자 토큰이 통과할 수 있다.)
  if (!secretKey()) return fail;

  const raw = parseCookies(cookieHeader)['fstar_session'];
  if (!raw) return fail;

  const parts = raw.split('.');
  let ts, sig, payload, isAdmin;
  if (parts.length === 2) {
    ts = parts[0]; sig = parts[1]; payload = ts; isAdmin = false;
  } else if (parts.length === 3 && parts[1] === 'a') {
    ts = parts[0]; sig = parts[2]; payload = ts + '.a'; isAdmin = true;
  } else {
    return fail;
  }

  const issued = parseInt(ts, 10);
  if (isNaN(issued)) return fail;

  // 만료 검증 (1일)
  const age = Date.now() - issued;
  if (age < 0 || age > DAY_MS) return fail;

  // SESSION_EPOCH 이전 발급 토큰 거부 (비밀키 회전 후 강제 로그아웃용)
  const epoch = parseInt(process.env.SESSION_EPOCH || '0', 10);
  if (issued < epoch) return fail;

  // HMAC 서명 검증 (timing-safe)
  const expected = sign(payload);
  try {
    if (crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'))) {
      return { valid: true, admin: isAdmin, issued };
    }
  } catch {
    /* 길이 불일치 등 → 실패 처리 */
  }
  return fail;
}

// req 편의 래퍼
function verifyRequest(req) {
  return verifyCookie(req.headers.cookie);
}

module.exports = { generateToken, sessionCookie, verifyCookie, verifyRequest };
