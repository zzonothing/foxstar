const fs     = require('fs');
const path   = require('path');
const crypto = require('crypto');

// 시뮬레이션 데이터: api/_data/sim/{meta.json, union.json, detail/<uid>.json}
const SIM_DIR = path.join(process.cwd(), 'api', '_data', 'sim');

// 경로 traversal 방지: 허용된 패턴만
function isAllowedPath(file) {
  if (file === 'meta.json' || file === 'union.json') return true;
  // detail/00646296.json 같은 형태만 허용 (영숫자 8자리 uid)
  if (/^detail\/[0-9a-zA-Z]{6,16}\.json$/.test(file)) return true;
  return false;
}

// 캐시: 파일 경로 → { buf, etag }
const CACHE = {};
function loadFile(file) {
  if (CACHE[file]) return CACHE[file];
  try {
    const buf = fs.readFileSync(path.join(SIM_DIR, file));
    const etag = '"' + crypto.createHash('sha1').update(buf).digest('hex') + '"';
    CACHE[file] = { buf, etag };
    return CACHE[file];
  } catch (e) {
    return null;
  }
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

function verifyToken(cookieHeader, secret) {
  const raw = parseCookies(cookieHeader)['fstar_session'];
  if (!raw) return false;
  const dot = raw.indexOf('.');
  if (dot < 0) return false;
  const ts  = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);

  const issued = parseInt(ts, 10);
  if (isNaN(issued)) return false;
  const age = Date.now() - issued;
  if (age < 0 || age > 24 * 60 * 60 * 1000) return false;

  const epoch = parseInt(process.env.SESSION_EPOCH || '0', 10);
  if (issued < epoch) return false;

  const secret_ = process.env.SESSION_SECRET || secret;
  const expected = crypto.createHmac('sha256', secret_).update(ts).digest('hex');
  try {
    return crypto.timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}

module.exports = function handler(req, res) {
  const file = req.query.file;
  if (!file || !isAllowedPath(file)) return res.status(404).end();

  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (!verifyToken(req.headers.cookie, process.env.ACCESS_KEY)) {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(401).json({ error: 'auth required' });
  }

  const entry = loadFile(file);
  if (!entry) return res.status(404).end();

  res.setHeader('ETag', entry.etag);
  res.setHeader('Cache-Control', 'private, no-cache');

  if (req.headers['if-none-match'] === entry.etag) {
    return res.status(304).end();
  }

  return res.status(200).send(entry.buf);
};
