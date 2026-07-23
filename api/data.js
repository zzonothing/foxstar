const fs   = require('fs');
const path = require('path');
const { verifyRequest, sessionCookie } = require('./_lib/session');
const { makeEntry, sendEntry } = require('./_lib/compress');
const { getDocEntry, jsonParseWrap, WRAP_MIN_BYTES } = require('./_lib/db');

// 슬라이딩 세션: 유효 토큰이 이 나이를 넘기면 재발급해 활동 중인 사용자의
// 로그인을 연장한다 (토큰 수명 24h 의 절반 — 매일 접속하는 멤버는 재로그인
// 없이 유지되고, 24h 이상 미접속 시에만 로그인 화면을 다시 본다).
const REFRESH_AFTER_MS = 12 * 60 * 60 * 1000;

const ALLOWED = new Set(['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']);

// ── 저장소: Neon Postgres (data_docs) ────────────────────────────
// 문서는 배포 번들이 아니라 DB 에 있다 — 데이터 갱신에 재배포가 필요 없다.
// 캐시/ETag/gzip/JSON.parse 래핑은 api/_lib/db.js 의 getDocEntry 가 처리
// (웜 인스턴스 캐시 + 요청당 1회 해시 검증. ETag 는 문서 내용 해시라 갱신
// 즉시 바뀌고, 인증 응답의 private no-cache 정책은 기존 그대로 유지된다).
//
// 디스크 폴백(과도기): DB 오류·행 없음 시 기존 api/_data/ 파일을 서빙한다.
// DB 시드 전 배포돼도 사이트가 정상 동작하기 위한 안전장치 — DB 운영이
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

module.exports = async function handler(req, res) {
  const file = req.query.file;
  if (!file || !ALLOWED.has(file)) return res.status(404).end();

  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');

  // 미인증: __AUTH_REQUIRED sentinel 반환. 절대 캐시 금지 — 캐시되면 추후
  // 인증된 요청이 stale sentinel 을 받아 무한 리다이렉트 루프 발생 가능.
  // DB 접근 '전'에 반환한다 — 미인증 → 로그인 리다이렉트 경로가 Neon
  // 콜드스타트(유휴 후 ~수백 ms)에 영향받지 않게 하기 위함.
  const auth = verifyRequest(req);
  if (!auth.valid) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).send('window.__AUTH_REQUIRED=true;');
  }

  // 슬라이딩 갱신: 모든 페이지가 데이터 파일을 이 함수로 로드하므로 여기서
  // 재발급하면 전 페이지에 적용된다. sendEntry 전에 헤더를 세팅해 200/304
  // 모두에 실린다. SESSION_EPOCH 강제 로그아웃은 새 토큰에도 그대로 적용.
  if (Date.now() - auth.issued > REFRESH_AFTER_MS) {
    res.setHeader('Set-Cookie', sessionCookie(auth.admin));
  }

  // 인증된 사용자: DB 문서 → gzip 협상 + ETag 조건부 응답 (compress.js 공용).
  // 두 번째 인자 true = 1MiB 이상 strict-JSON 문서에 JSON.parse 래핑 적용.
  let entry = null;
  try {
    entry = await getDocEntry(file, true);
  } catch (e) {
    entry = null; // DB 불가 → 디스크 폴백
  }
  if (!entry) entry = fallbackEntry(file);
  if (!entry) return res.status(404).end();

  return sendEntry(req, res, entry);
};
