const fs   = require('fs');
const path = require('path');
const { verifyRequest, sessionCookie } = require('./_lib/session');
const { makeEntry, sendEntry } = require('./_lib/compress');
const { UNION_ID, DATA_DIR } = require('./_lib/union');

// 슬라이딩 세션: 유효 토큰이 이 나이를 넘기면 재발급해 활동 중인 사용자의
// 로그인을 연장한다 (토큰 수명 24h 의 절반 — 매일 접속하는 멤버는 재로그인
// 없이 유지되고, 24h 이상 미접속 시에만 로그인 화면을 다시 본다).
const REFRESH_AFTER_MS = 12 * 60 * 60 * 1000;

const ALLOWED = new Set(['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']);

// ── JSON.parse 래핑 ──────────────────────────────────────────────
// 대형 데이터 파일은 JS 오브젝트 리터럴 대신 `const NAME = JSON.parse("…")`
// 형태로 변환해 서빙한다 — 브라우저 메인스레드 파싱이 빨라진다
// (character.js 실측 약 1.8배: 70ms → 39ms, 모바일 환산 100ms+ 절감).
// fail-safe: 파일이 `const NAME = <엄격 JSON 리터럴>;` 구조가 아니면
// (예: solo.js — 따옴표 없는 키·내부 주석이 있는 수동 편집 파일) null 을
// 반환해 원본을 그대로 서빙한다. U+2028/2029 는 구형 엔진의 문자열
// 리터럴에서 SyntaxError 를 내므로 반드시 이스케이프한다.
const WRAP_MIN_BYTES = 1024 * 1024; // 이 크기 미만은 파싱 이득이 없어 원본 유지

function jsonParseWrap(buf) {
  const src = buf.toString('utf8');
  const m = src.match(/^((?:\/\/[^\n]*\n|\s)*const\s+[A-Za-z_$][\w$]*\s*=\s*)/);
  if (!m) return null;
  const tail = src.slice(m[1].length).replace(/[\s;]+$/, '');
  if (!/^[\[{]/.test(tail)) return null;               // 객체/배열 리터럴만
  try { JSON.parse(tail); } catch (e) { return null; } // 엄격 JSON 이 아니면 원본 서빙
  const escaped = JSON.stringify(tail)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return Buffer.from(m[1] + 'JSON.parse(' + escaped + ');\n', 'utf8');
}

// 모듈 로드 시 각 데이터 파일의 콘텐츠 + 콘텐츠 해시(=ETag) 미리 계산.
// Vercel 은 배포마다 서버리스 함수 인스턴스를 새로 만들기 때문에 데이터
// 변경은 자동으로 반영됨. 인증 검증은 매 요청 서버에서 수행하면서, 인증된
// 응답의 본문만 ETag 로 조건부 전송하여 페이지 전환 속도 향상 (304).
// 본문은 gzip 사전 압축으로 서빙 (api/_lib/compress.js — 페이로드 한도
// 회피 + 모바일 전송량 절감. gzip 본은 파일별 최초 요청 시 생성).
const ENTRIES = {};
for (const file of ALLOWED) {
  try {
    const raw = fs.readFileSync(path.join(DATA_DIR, file));
    const wrapped = raw.length >= WRAP_MIN_BYTES ? jsonParseWrap(raw) : null;
    ENTRIES[file] = makeEntry(wrapped || raw);
  } catch (e) {
    // 파일이 아직 없을 수 있음 — handler 가 404 처리
  }
}
// UNION_ID 오설정 감지(형식은 유효하나 존재하지 않는 슬러그): 정상 유니온은
// 온보딩 체크리스트상 데이터 파일 5종이 항상 존재하므로, 하나도 못 읽었다면
// 데이터 미입력이 아니라 잘못된 배포다. 스켈레톤 유니온과 화면상 구분이
// 안 되는 조용한 404 대신 콜드스타트에서 요란하게(500) 실패시킨다.
// (이 검사는 api/_data/** 전체를 번들하는 이 함수에만 둔다 — sim 은 sim/
// 없는 유니온이 정상이고, notice 는 데이터 파일을 번들하지 않는다.)
if (Object.keys(ENTRIES).length === 0) {
  throw new Error('UNION_ID 오설정 의심: api/_data/' + UNION_ID + '/ 에 데이터 파일이 없음');
}

module.exports = function handler(req, res) {
  const file = req.query.file;
  if (!file || !ALLOWED.has(file)) return res.status(404).end();

  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');

  // 미인증: __AUTH_REQUIRED sentinel 반환. 절대 캐시 금지 — 캐시되면 추후
  // 인증된 요청이 stale sentinel 을 받아 무한 리다이렉트 루프 발생 가능.
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

  // 인증된 사용자: gzip 협상 + ETag 조건부 응답 (compress.js 공용 처리).
  const entry = ENTRIES[file];
  if (!entry) return res.status(404).end();

  return sendEntry(req, res, entry);
};
