// api/_lib/compress.js — 게이트 데이터 응답 사전 압축 공용 모듈 (CommonJS)
//
// character.js(≈5.9MB) 등 데이터 파일이 Vercel 서버리스 응답 페이로드 한도
// (4.5MB)에 걸릴 위험이 있고, 모바일에서 전송량도 크다. 데이터는 긴 키가
// 반복되는 JSON 이라 gzip 으로 ~91% 줄어들므로(5.9MB → 0.5MB) 함수 안에서
// 미리 압축해 Content-Encoding: gzip 으로 서빙한다. Vercel 의 edge 압축은
// 함수 응답을 받은 '뒤'에 적용되므로 페이로드 한도 회피에는 소용이 없다 —
// 반드시 함수가 직접 압축본을 반환해야 한다.
//
// - 데이터 파일 자체는 무변경 (압축은 메모리에서만). 브라우저가 자동 해제
//   하므로 프런트엔드도 무변경.
// - gzip 본은 파일별로 최초 요청 시 1회 생성해 캐시 (level 9, 5.9MB 기준
//   ≈110ms — 콜드스타트를 전 파일 압축으로 지연시키지 않기 위한 lazy 처리).
// - ETag 는 표현(representation)별로 구분한다: 압축 응답은 "<hash>-gz".
//   If-None-Match 는 브라우저가 받은 값을 그대로 돌려보내므로 현재 협상
//   결과의 ETag 와 정확히 비교된다.

const zlib   = require('zlib');
const crypto = require('crypto');

// 원본 버퍼 → 응답 엔트리. 모듈 로드/최초 파일 로드 시 1회 호출.
function makeEntry(buf) {
  const etag = '"' + crypto.createHash('sha1').update(buf).digest('hex') + '"';
  return { raw: buf, gz: null, etag, etagGz: etag.slice(0, -1) + '-gz"' };
}

// 인증된 데이터 응답 공용 처리: Accept-Encoding 협상 + ETag 조건부 응답(304).
// Cache-Control 기본값(private, no-cache)은 기존 그대로 유지한다 (CLAUDE.md
// Caching 절 참고 — max-age 로 바꾸지 말 것). cacheControl 인자는 관리자
// 전용 응답(api/admin-data.js 의 문서 읽기)이 no-store 를 쓰기 위한 것 —
// 게이트 문서 원문이 디스크 캐시에 남지 않게 한다.
function sendEntry(req, res, entry, cacheControl) {
  const acceptsGzip = /\bgzip\b/i.test(req.headers['accept-encoding'] || '');
  const etag = acceptsGzip ? entry.etagGz : entry.etag;

  res.setHeader('ETag', etag);
  res.setHeader('Cache-Control', cacheControl || 'private, no-cache');
  res.setHeader('Vary', 'Accept-Encoding');

  if (req.headers['if-none-match'] === etag) {
    return res.status(304).end();
  }

  if (acceptsGzip) {
    if (!entry.gz) entry.gz = zlib.gzipSync(entry.raw, { level: 9 });
    res.setHeader('Content-Encoding', 'gzip');
    return res.status(200).send(entry.gz);
  }
  return res.status(200).send(entry.raw);
}

module.exports = { makeEntry, sendEntry };
