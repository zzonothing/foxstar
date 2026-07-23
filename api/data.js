const fs   = require('fs');
const path = require('path');
const { verifyRequest, verifyMemberRequest, sessionCookie, memberCookie } = require('./_lib/session');
const { makeEntry, sendEntry } = require('./_lib/compress');
const { getDocEntry, jsonParseWrap, WRAP_MIN_BYTES } = require('./_lib/db');

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
// ── 저장소: Neon Postgres (data_docs) ────────────────────────────
// 문서는 배포 번들이 아니라 DB 에 있다 — 데이터 갱신에 재배포가 필요 없다.
// 캐시/ETag/gzip/JSON.parse 래핑은 api/_lib/db.js 의 getDocEntry 가 처리.
//
// 디스크 폴백(과도기): DB 오류·행 없음 시 기존 api/_data/ 파일을 서빙한다
// (이때 member_epoch 확인은 불가 — 가용성 우선으로 통과시킨다). DB 운영이
// 안정화되면 폴백과 vercel.json 의 includeFiles 를 함께 제거할 것.
const DATA_DIR = path.join(process.cwd(), 'api', '_data');
const FALLBACK = {};
function fallbackEntry(file) {
  if (!(file in FALLBACK)) {
    try {
      const raw = fs.readFileSync(path.join(DATA_DIR, file));
      const wrapped = raw.length >= WRAP_MIN_BYTES ? jsonParseWrap(raw) : null;
      FALLBACK[file] = makeEntry(wrapped || raw);
    } catch (e) {
      FALLBACK[file] = null; // 파일도 없음 — handler 가 404 처리
    }
  }
  return FALLBACK[file];
}

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
  let entry = null;
  let memberEpoch = null; // null = DB 불가로 확인 못 함 (폴백 시 통과)
  try {
    const doc = await getDocEntry(file, true);
    entry = doc.entry;
    memberEpoch = doc.memberEpoch;
  } catch (e) {
    entry = null; // DB 불가 → 디스크 폴백
  }

  // 전원 강제 재인증(member_epoch) 이전에 발급된 멤버 쿠키 거부 → 재로그인
  if (memberEpoch !== null && member.issued < memberEpoch) return sendSentinel(res);

  // 슬라이딩 갱신: 모든 페이지가 데이터 파일을 이 함수로 로드하므로 여기서
  // 재발급하면 전 페이지에 적용된다. sendEntry 전에 헤더를 세팅해 200/304
  // 모두에 실린다. SESSION_EPOCH/member_epoch 강제 로그아웃은 새 토큰에도 적용.
  const cookies = [];
  if (Date.now() - auth.issued > SESSION_REFRESH_AFTER_MS) cookies.push(sessionCookie(auth.admin));
  if (Date.now() - member.issued > MEMBER_REFRESH_AFTER_MS) cookies.push(memberCookie(member.uid));
  if (cookies.length) res.setHeader('Set-Cookie', cookies);

  if (!entry) entry = fallbackEntry(file);
  if (!entry) return res.status(404).end();

  return sendEntry(req, res, entry);
};
