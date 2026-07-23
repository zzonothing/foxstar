const fs   = require('fs');
const path = require('path');
const { verifyRequest } = require('./_lib/session');
const { makeEntry, sendEntry } = require('./_lib/compress');
const { getDocEntry } = require('./_lib/db');

// 시뮬레이션 데이터: data_docs 의 'sim/…' 키 (meta.json, union.json, detail/<uid>.json)
// 디스크 폴백(과도기): DB 오류·행 없음 시 기존 api/_data/sim/ 파일 서빙.
const SIM_DIR = path.join(process.cwd(), 'api', '_data', 'sim');

// 경로 traversal 방지: 허용된 패턴만
function isAllowedPath(file) {
  if (file === 'meta.json' || file === 'union.json') return true;
  // detail/00646296.json 같은 형태만 허용 (영숫자 8자리 uid)
  if (/^detail\/[0-9a-zA-Z]{6,16}\.json$/.test(file)) return true;
  return false;
}

// 디스크 폴백 캐시: 파일 경로 → 사전 압축 엔트리 (api/_lib/compress.js)
const FALLBACK = {};
function fallbackEntry(file) {
  if (!(file in FALLBACK)) {
    try {
      FALLBACK[file] = makeEntry(fs.readFileSync(path.join(SIM_DIR, file)));
    } catch (e) {
      FALLBACK[file] = null;
    }
  }
  return FALLBACK[file];
}

module.exports = async function handler(req, res) {
  const file = req.query.file;
  if (!file || !isAllowedPath(file)) return res.status(404).end();

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  // fetch() 소비라 sentinel 불필요 — 401 로 응답 (데이터 계열과 달리 캐시 금지만 유지).
  // DB 접근 전에 반환해 미인증 경로가 DB 콜드스타트에 영향받지 않게 한다.
  if (!verifyRequest(req).valid) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(401).json({ error: 'auth required' });
  }

  // DB 문서 키는 'sim/' 접두사 (JSON 이므로 JSON.parse 래핑 없음)
  let entry = null;
  try {
    entry = await getDocEntry('sim/' + file, false);
  } catch (e) {
    entry = null; // DB 불가 → 디스크 폴백
  }
  if (!entry) entry = fallbackEntry(file);
  if (!entry) return res.status(404).end();

  return sendEntry(req, res, entry);
};
