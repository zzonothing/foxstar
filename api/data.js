const { verifyRequest, verifyMemberRequest, sessionCookie, memberCookie } = require('./_lib/session');
const { sendEntry } = require('./_lib/compress');
const { getDocEntry } = require('./_lib/db');

// 슬라이딩 갱신: 유효 토큰이 이 나이를 넘기면 재발급해 활동 중인 사용자의
// 로그인을 연장한다. 세션(수명 24h)은 12h, 멤버 쿠키(수명 30d)는 15d —
// 매일/매달 한 번이라도 접속하는 멤버는 재로그인 없이 유지된다.
const SESSION_REFRESH_AFTER_MS = 12 * 60 * 60 * 1000;
const MEMBER_REFRESH_AFTER_MS  = 15 * 24 * 60 * 60 * 1000;

const ALLOWED = new Set(['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']);

// ── 인증 모델 ────────────────────────────────────────────────────
// 로그인 = 멤버 로그인(닉네임+PIN)뿐이므로, 열람 권한도 '세션 + 멤버 신원'
// 둘 다 유효해야 한다. 로그아웃(쿠키 삭제)·전원 재인증(member_epoch) 시
// 다음 페이지 로드에서 즉시 sentinel → 로그인 페이지로 이동한다.
// member_epoch 는 문서 조회 쿼리에 실려 오므로(getDocEntry) 추가 왕복이 없다.
//
// ── 저장소: Neon Postgres (data_docs) — 유일한 출처 ──────────────
// 문서는 배포 번들이 아니라 DB 에 있다 — 데이터 갱신에 재배포가 필요 없다.
// 캐시/ETag/gzip/JSON.parse 래핑은 api/_lib/db.js 의 getDocEntry 가 처리.
//
// 과도기의 디스크 폴백(api/_data/)은 컷오버로 제거됐다. 폴백은 두 가지가
// 위험했다 — (a) member_epoch 를 확인할 수 없어 전원 강제 재인증을 무력화했고,
// (b) 사본이 저장소에 있어 두 유니온 배포에 똑같이 번들되므로, 한쪽 DB 가
// 흔들리면 '다른 유니온의' 실명·싱크로·장비를 서빙했다.
// 이제 DB 가 불가하면 폴백 없이 503, 문서 행이 없으면 404 를 반환한다.

function sendSentinel(res) {
  // 미인증: __AUTH_REQUIRED sentinel 반환. 절대 캐시 금지 — 캐시되면 추후
  // 인증된 요청이 stale sentinel 을 받아 무한 리다이렉트 루프 발생 가능.
  res.setHeader('Cache-Control', 'no-store');
  return res.status(200).send('window.__AUTH_REQUIRED=true;');
}

module.exports = async function handler(req, res) {
  const file = req.query.file;
  if (!file || !ALLOWED.has(file)) return res.status(404).end();

  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');

  // 세션 + 멤버 쿠키 HMAC 검증 — DB 접근 '전'에 끝난다. 미인증 → 로그인
  // 리다이렉트 경로가 Neon 콜드스타트에 영향받지 않게 하기 위함.
  const auth = verifyRequest(req);
  const member = verifyMemberRequest(req);
  if (!auth.valid || !member.valid) return sendSentinel(res);

  // 인증된 사용자: DB 문서 → gzip 협상 + ETag 조건부 응답 (compress.js 공용).
  // 두 번째 인자 true = 1MiB 이상 strict-JSON 문서에 JSON.parse 래핑 적용.
  // 문서 행이 없으면 { entry: null, memberEpoch: 0 } 을 반환하고, DB 자체가
  // 불가할 때만 throw 한다 — 아래에서 404 와 503 으로 갈라진다.
  let doc;
  try {
    doc = await getDocEntry(file, true);
  } catch (e) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(503).end();
  }

  // 전원 강제 재인증(member_epoch) 이전에 발급된 멤버 쿠키 거부 → 재로그인
  if (member.issued < doc.memberEpoch) return sendSentinel(res);

  // 슬라이딩 갱신: 모든 페이지가 데이터 파일을 이 함수로 로드하므로 여기서
  // 재발급하면 전 페이지에 적용된다. sendEntry 전에 헤더를 세팅해 200/304
  // 모두에 실린다. SESSION_EPOCH/member_epoch 강제 로그아웃은 새 토큰에도 적용.
  const cookies = [];
  if (Date.now() - auth.issued > SESSION_REFRESH_AFTER_MS) cookies.push(sessionCookie(auth.admin));
  if (Date.now() - member.issued > MEMBER_REFRESH_AFTER_MS) cookies.push(memberCookie(member.uid));
  if (cookies.length) res.setHeader('Set-Cookie', cookies);

  // 문서 행 없음 — 신규 유니온의 스텁 미업로드 등. 캐시되면 업로드 후에도
  // 한동안 404 가 남으므로 no-store.
  if (!doc.entry) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(404).end();
  }

  return sendEntry(req, res, doc.entry);
};
