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

// ── 멤버 식별 쿠키 (fstar_member) ────────────────────────────────
// 공용 비밀번호 세션(fstar_session) '위에' 얹히는 2차 식별 — 어떤 멤버인지를
// 나타낸다. 닉네임 클레임 + 개인 PIN 검증(api/member-auth.js)을 통과하면 발급.
//
// 토큰 포맷: "m1.<uid>.<ts>.<sig>", sig = HMAC(secret, "m1.<uid>.<ts>")
// 'm1.' 접두사가 세션 토큰(ts 로 시작)과 서명 도메인을 분리해, 한 토큰이
// 다른 쿠키로 재사용되는 것을 막는다. uid 는 영숫자라 '.' 이 값에 없음.
// 수명 30일 — api/member-auth.js 가 15일 경과 시 슬라이딩 재발급한다.
// DB 기반 강제 재인증(app_settings.member_epoch)은 api/_lib/member.js 가 검사.

const MEMBER_MAX_AGE_MS = 30 * DAY_MS;
const MEMBER_UID_RE = /^[0-9a-zA-Z]{1,32}$/;

function generateMemberToken(uid) {
  const payload = 'm1.' + uid + '.' + Date.now().toString();
  return payload + '.' + sign(payload);
}

function memberCookie(uid) {
  return 'fstar_member=' + generateMemberToken(uid) +
    '; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=' + (MEMBER_MAX_AGE_MS / 1000);
}

function clearMemberCookie() {
  return 'fstar_member=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0';
}

// 쿠키의 fstar_member 검증. 반환 { valid, uid, issued } (실패 시 uid null).
function verifyMemberCookie(cookieHeader) {
  const fail = { valid: false, uid: null, issued: 0 };
  if (!secretKey()) return fail; // fail-closed (세션 토큰과 동일)

  const raw = parseCookies(cookieHeader)['fstar_member'];
  if (!raw) return fail;

  const parts = raw.split('.');
  if (parts.length !== 4 || parts[0] !== 'm1') return fail;
  const uid = parts[1], ts = parts[2], sig = parts[3];
  if (!MEMBER_UID_RE.test(uid)) return fail;

  const issued = parseInt(ts, 10);
  if (isNaN(issued)) return fail;

  const age = Date.now() - issued;
  if (age < 0 || age > MEMBER_MAX_AGE_MS) return fail;

  // SESSION_EPOCH 는 멤버 쿠키에도 적용 (비밀키 회전 시 일괄 무효화)
  const epoch = parseInt(process.env.SESSION_EPOCH || '0', 10);
  if (issued < epoch) return fail;

  const expected = sign('m1.' + uid + '.' + ts);
  try {
    if (crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'))) {
      return { valid: true, uid, issued };
    }
  } catch {
    /* 길이 불일치 등 → 실패 처리 */
  }
  return fail;
}

function verifyMemberRequest(req) {
  return verifyMemberCookie(req.headers.cookie);
}

module.exports = {
  generateToken, sessionCookie, verifyCookie, verifyRequest,
  generateMemberToken, memberCookie, clearMemberCookie, verifyMemberCookie, verifyMemberRequest,
};
