// api/admin-data.js — 게이트 문서(data_docs) 관리자 업로드/조회
//
// 새 시즌 데이터 갱신을 git 커밋 + 재배포 없이 처리하는 경로.
// scripts/upload-doc.js 가 이 엔드포인트로 파일을 올린다 (curl 도 가능).
//
// 인증: 관리자 세션 쿠키 또는 `Authorization: Bearer <ADMIN_KEY>` —
// Bearer 경로는 스크립트/curl 이 쿠키 없이 쓰기 위한 것. 실패 시 api/auth.js
// 와 동일하게 350~650ms 지연 후 거부(브루트포스 감속).
//
// 메서드:
//   GET    /api/admin-data                → { docs: [{key, bytes, content_hash, updated_at}] }
//   GET    /api/admin-data?key=<docKey>   → 그 문서의 '저장된 원문' + ETag(=content_hash).
//                                           Accept-Encoding: gzip 이면 압축본을 준다
//                                           (character.js ≈5.9MB 는 비압축이면 응답 4.5MB 한도 초과)
//   PUT    /api/admin-data?key=<docKey>   → 본문 = 새 문서 전문. 헤더 X-Doc-Gzip: 1 이면
//                                           gzip 본문(대형 파일용 — Vercel 요청 4.5MB 한도 회피)
//                                           헤더 If-Match: <content_hash> 이면 낙관적 동시성 가드
//
// ★ GET ?key= 는 '읽고 고쳐 쓰는' 외부 도구를 위한 경로다. 게이트 문서는
//   /data/<파일> 로는 못 읽는다 — api/data.js 가 fstar_session + fstar_member
//   쿠키를 요구하고, 쿠키 없는 요청에는 200 + `window.__AUTH_REQUIRED=true;`
//   sentinel 을 돌려주기 때문이다(<script src> 가 실행돼야 해서 401 이 아니다).
//   그래서 쿠키 없는 스크립트가 그 URL 을 긁으면 HTTP 오류 없이 '엔벨로프가
//   없는 본문'을 받게 된다. 관리 도구는 이미 ADMIN_KEY 로 PUT 하므로, 같은
//   키로 읽게 해 읽기-수정-쓰기를 한 채널에서 끝낸다. 여기서는 api/data.js 와
//   달리 jsonParseWrap 을 적용하지 않는다 — 그대로 다시 PUT 할 수 있는
//   '저장된 원문'이어야 한다.
//
// 검증: api/_lib/db.js 의 DOC_RULES — js 문서는 `const <GLOBAL> = …` 엔벨로프
// (strict-JSON 문서는 JSON.parse 통과 필수).
// member.js 업로드 시 부수효과로 members 로스터를 동기화한다(실패해도 업로드는 유지).

const zlib = require('zlib');
const crypto = require('crypto');
const { verifyRequest } = require('./_lib/session');
const { makeEntry, sendEntry } = require('./_lib/compress');
const { query, getDocText, putDoc, sha1hex, isValidDocKey, validateDocContent, parseDocJson } = require('./_lib/db');
const { syncRoster } = require('./_lib/history');

const MAX_DOC_BYTES = 32 * 1024 * 1024; // gunzip 팽창 상한 (zip bomb 방어)

function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function delay() {
  return new Promise(r => setTimeout(r, 350 + Math.floor(Math.random() * 300)));
}

// 관리자 여부 판정: 세션 쿠키(admin) 또는 Bearer ADMIN_KEY
function isAdminRequest(req) {
  if (verifyRequest(req).admin) return true;
  const h = req.headers.authorization || '';
  const m = h.match(/^Bearer\s+(.+)$/);
  if (m && process.env.ADMIN_KEY && safeEqual(m[1], process.env.ADMIN_KEY)) return true;
  return false;
}

// If-Match 헤더 → 비교할 content_hash (없거나 '*' 면 null = 가드 없음).
// 따옴표·W/ 약한 검증자·gzip 표현 접미사(-gz)를 벗겨 저장된 해시와 직접 비교
// 가능한 형태로 만든다 — 클라이언트는 GET 응답의 ETag 를 그대로 돌려주면 된다.
function parseIfMatch(raw) {
  const v = String(raw || '').trim();
  if (!v || v === '*') return null;
  return v.replace(/^W\//, '').replace(/^"(.*)"$/, '$1').replace(/-gz$/, '');
}

// 본문을 Buffer 로 수집 (Vercel 이 content-type 에 따라 파싱해 주는 형태가
// 제각각이므로 전부 수용: Buffer / string / 미파싱 스트림)
function readRawBody(req) {
  if (Buffer.isBuffer(req.body)) return Promise.resolve(req.body);
  if (typeof req.body === 'string') return Promise.resolve(Buffer.from(req.body, 'utf8'));
  if (req.body && typeof req.body === 'object') {
    return Promise.resolve(Buffer.from(JSON.stringify(req.body), 'utf8'));
  }
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (!isAdminRequest(req)) {
    await delay();
    return res.status(403).json({ error: 'admin only' });
  }

  try {
    if (req.method === 'GET') {
      // ?key= 있으면 그 문서의 원문, 없으면 목록.
      const readKey = req.query.key;
      if (readKey) {
        if (!isValidDocKey(readKey)) return res.status(400).json({ error: '허용되지 않은 문서 키' });
        const doc = await getDocText(readKey);
        if (!doc) return res.status(404).json({ error: '문서 없음', key: readKey });
        // getDocText 는 DOC_CACHE 를 타지 않는다(쓰기 경로용 원문 조회) —
        // api/data.js 의 래핑된 캐시 엔트리와 섞이지 않는다.
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
        const entry = makeEntry(Buffer.from(doc.content, 'utf8')); // ETag = content_hash
        return sendEntry(req, res, entry, 'no-store');
      }
      const docs = await query(
        'SELECT key, length(content) AS bytes, content_hash, updated_at FROM data_docs ORDER BY key', []);
      return res.status(200).json({ docs });
    }

    if (req.method === 'PUT') {
      const key = req.query.key;
      if (!key || !isValidDocKey(key)) return res.status(400).json({ error: '허용되지 않은 문서 키' });

      let buf = await readRawBody(req);
      if (req.headers['x-doc-gzip'] === '1') {
        try {
          buf = zlib.gunzipSync(buf, { maxOutputLength: MAX_DOC_BYTES });
        } catch (e) {
          return res.status(400).json({ error: 'gzip 해제 실패', detail: String(e.message || e).slice(0, 120) });
        }
      }
      if (!buf.length) return res.status(400).json({ error: '본문이 비어 있음' });
      if (buf.length > MAX_DOC_BYTES) return res.status(413).json({ error: '문서가 너무 큼' });

      const text = buf.toString('utf8');
      const invalid = validateDocContent(key, text);
      if (invalid) return res.status(400).json({ error: '문서 검증 실패', detail: invalid });

      // 낙관적 동시성 가드. If-Match 를 준 요청은 현재 해시가 일치할 때만 반영한다 —
      // 읽고 고쳐 쓰는 도구(tools/set_rank.py 의 rank 기록 등)가 그 사이 들어온
      // ingest 의 시즌 병합을 통째로 되돌리는 사고를 막는다. 헤더가 없으면
      // 기존과 동일하게 무조건 덮어쓴다(scripts/upload-doc.js 등 전면 교체 경로).
      // ※ 문서 행이 아예 없을 때의 생성은 가드하지 않는다(upsert 의 INSERT 경로).
      const expected = parseIfMatch(req.headers['if-match']);
      if (expected) {
        if (!await putDoc(key, text, expected)) {
          return res.status(412).json({
            error: '문서가 그 사이 변경됨',
            detail: '다시 읽어(GET ?key=) 변경을 얹은 뒤 재시도하세요',
          });
        }
      } else {
        await putDoc(key, text);
      }

      // member.js 업로드 → 로스터 동기화 (best-effort: 실패해도 업로드는 유효)
      let roster = null;
      if (key === 'member.js') {
        try {
          const union = parseDocJson(text);
          const latest = Math.max(...Object.keys(union).map(Number));
          roster = await syncRoster((union[String(latest)] || {}).members || []);
        } catch (e) { roster = { error: '로스터 동기화 실패(업로드는 반영됨)' }; }
      }

      return res.status(200).json({ ok: true, key, bytes: buf.length, content_hash: sha1hex(text), roster });
    }

    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(502).json({ error: '처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
