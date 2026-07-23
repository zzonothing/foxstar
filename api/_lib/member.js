// api/_lib/member.js — 멤버 신원 검증 + PIN 공용 모듈 (CommonJS)
//
// 사용처: api/auth.js(로그인 페이지의 닉네임+PIN 로그인/등록/자동 로그인),
// api/member-auth.js(페이지 내 인증), api/submit.js·api/poll.js(쓰기 가드).
//
// 검증 체인(verifyMemberIdentity): fstar_session 유효 → fstar_member 유효(HMAC)
// → app_settings.member_epoch 이후 발급(관리자 강제 재인증 스위치) → members
// 행이 존재하고 active. 전부 통과해야 '어느 멤버인지'가 확정된다.
// is_admin 도 함께 반환한다 — SUM·유화 같은 운영진 멤버 판별(시드의 ADMIN_NAMES).
//
// epoch·active 확인을 위해 DB 1회 왕복이 필요하다 — 30명 규모의 쓰기 경로라
// 비용은 무시 가능. 세션/HMAC 검증은 DB 접근 전에 끝나므로 무효 요청은
// DB 를 건드리지 않는다.

const crypto = require('crypto');
const { verifyRequest, verifyMemberRequest, memberCookie } = require('./session');
const { UNION_ID, query } = require('./db');

// 15일 경과 시 재발급 → 한 달에 한 번만 접속해도 재인증 없이 유지
const RENEW_AFTER_MS = 15 * 24 * 60 * 60 * 1000;

const PIN_RE = /^\d{4,8}$/;

function hashPin(pin, saltHex) {
  return crypto.scryptSync(String(pin), Buffer.from(saltHex, 'hex'), 64).toString('hex');
}

function timingSafeHexEqual(aHex, bHex) {
  try {
    return crypto.timingSafeEqual(Buffer.from(aHex, 'hex'), Buffer.from(bHex, 'hex'));
  } catch {
    return false;
  }
}

// 반환: { uid, name, isAdmin, renewCookie|null } 또는 null(신원 미확정).
// renewCookie 가 있으면 호출부가 Set-Cookie 로 내려보내 슬라이딩 갱신한다.
async function verifyMemberIdentity(req) {
  if (!verifyRequest(req).valid) return null;
  const m = verifyMemberRequest(req);
  if (!m.valid) return null;

  const rows = await query(
    "SELECT m.name, m.active, m.is_admin, " +
    "(SELECT value FROM app_settings WHERE union_id = $1 AND key = 'member_epoch') AS epoch " +
    'FROM members m WHERE m.union_id = $1 AND m.uid = $2',
    [UNION_ID, m.uid]
  );
  if (!rows.length || !rows[0].active) return null;
  const epoch = parseInt(rows[0].epoch || '0', 10);
  if (m.issued < epoch) return null;

  return {
    uid: m.uid,
    name: rows[0].name,
    isAdmin: !!rows[0].is_admin,
    renewCookie: Date.now() - m.issued > RENEW_AFTER_MS ? memberCookie(m.uid) : null,
  };
}

module.exports = { verifyMemberIdentity, PIN_RE, hashPin, timingSafeHexEqual, RENEW_AFTER_MS };
