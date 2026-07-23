// api/_lib/member.js — 멤버 신원 검증 공용 모듈 (CommonJS)
//
// 쓰기 엔드포인트(api/submit.js, api/poll.js)와 api/member-auth.js 가 공유한다.
// 검증 체인: fstar_session 유효(공용 비밀번호 로그인) → fstar_member 유효(HMAC)
// → app_settings.member_epoch 이후 발급(관리자 강제 재인증 스위치) → members
// 행이 존재하고 active. 전부 통과해야 '어느 멤버인지'가 확정된다.
//
// epoch·active 확인을 위해 DB 1회 왕복이 필요하다 — 30명 규모의 쓰기 경로라
// 비용은 무시 가능. 세션/HMAC 검증은 DB 접근 전에 끝나므로 무효 요청은
// DB 를 건드리지 않는다.

const { verifyRequest, verifyMemberRequest, memberCookie } = require('./session');
const { UNION_ID, query } = require('./db');

// 15일 경과 시 재발급 → 한 달에 한 번만 접속해도 재인증 없이 유지
const RENEW_AFTER_MS = 15 * 24 * 60 * 60 * 1000;

// 반환: { uid, name, renewCookie|null } 또는 null(신원 미확정).
// renewCookie 가 있으면 호출부가 Set-Cookie 로 내려보내 슬라이딩 갱신한다.
async function verifyMemberIdentity(req) {
  if (!verifyRequest(req).valid) return null;
  const m = verifyMemberRequest(req);
  if (!m.valid) return null;

  const rows = await query(
    "SELECT m.name, m.active, " +
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
    renewCookie: Date.now() - m.issued > RENEW_AFTER_MS ? memberCookie(m.uid) : null,
  };
}

module.exports = { verifyMemberIdentity };
