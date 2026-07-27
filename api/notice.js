// api/notice.js — 운영진 공지 작성/삭제 + 권한 조회 엔드포인트
//
// 저장 방식: data_docs 의 'notice.js' 문서를 갱신한다 (Neon Postgres).
// 이전에는 GitHub Contents API 로 파일을 커밋해 재배포를 기다렸으나, DB 전환으로
// 공지 작성/수정/삭제가 즉시 반영된다. 문서는 여전히 `const NOTICE = […];` JS
// 텍스트 — 열람(READ)은 다른 데이터와 동일하게 /data/notice.js → api/data.js
// 게이트로 서빙되므로 프론트엔드는 무변경이다.
//
// 동시 편집: putDoc 의 content_hash 낙관적 가드로 감지 — 어긋나면 재조회 후
// 1회 재시도한다 (기존 GitHub sha 409 재시도의 등가물).
//
// 메서드:
//   GET    /api/notice            → { admin: bool }         (작성 UI 노출 판단용)
//   POST   /api/notice            → 공지 추가 (관리자 전용)  body: { title, body, author? }
//   PUT    /api/notice            → 공지 수정 (관리자 전용)  body: { id, title, body, author? }
//   DELETE /api/notice?id=<id>    → 공지 삭제 (관리자 전용)
//
// 필요한 환경변수(Vercel 프로젝트 설정):
//   ADMIN_KEY     — 운영진 로그인 비밀번호 (api/auth.js 에서 사용)
//   DATABASE_URL  — Neon Postgres 접속 문자열

const crypto = require('crypto');
const { verifyRequest } = require('./_lib/session');
const { getDocText, putDoc } = require('./_lib/db');

const DOC_KEY = 'notice.js';
const MAX_NOTICES = 100;
const LIMIT = { title: 100, body: 5000, author: 30 };

function readBody(req) {
  if (!req.body) return {};
  if (typeof req.body === 'string') { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

// JSON 을 <script src> 로 로드되는 .js 파일에 안전하게 임베드.
// (외부 스크립트라 </script> 는 무해하지만, ES5 에서 문자열을 끊는
//  U+2028/U+2029 는 방어적으로 이스케이프한다.)
function safeJson(v) {
  const LS = String.fromCharCode(0x2028), PS = String.fromCharCode(0x2029);
  return JSON.stringify(v, null, 2)
    .split(LS).join('\\u2028')
    .split(PS).join('\\u2029');
}

function serialize(list) {
  return '// data/notice.js — 유니온 운영진 공지 (api/notice.js 가 자동 관리)\n'
       + '// 공지 작성/삭제 시 서버가 data_docs 의 이 문서를 갱신한다.\n'
       + 'const NOTICE = ' + safeJson(list) + ';\n';
}

// notice.js 텍스트에서 배열만 추출해 파싱. 헤더 주석에는 대괄호가 없으므로
// 첫 '[' ~ 마지막 ']' 가 곧 배열 리터럴 범위.
// 파싱 불가(손상)면 null 을 반환한다 — 호출부에서 '빈 문서'와 구분해
// 손상된 문서를 빈 배열로 덮어써 기존 공지를 날리는 사고를 막는다.
function parseNotices(text) {
  try {
    const s = text.indexOf('[');
    const e = text.lastIndexOf(']');
    if (s < 0 || e < 0 || e < s) return null;
    const arr = JSON.parse(text.slice(s, e + 1));
    return Array.isArray(arr) ? arr : null;
  } catch {
    return null;
  }
}

// 문서 조회 → 변형 → 해시 가드 저장. 어긋나면(동시 편집) 1회 재시도.
async function commitList(mutate) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const doc = await getDocText(DOC_KEY);
    let list = [];
    if (doc) {
      list = parseNotices(doc.content);
      // 문서는 있으나 파싱 불가(손상) → 덮어쓰기 중단해 기존 공지 보호.
      if (list === null) throw new Error('notice.js 파싱 실패 — 손상된 문서 덮어쓰기 방지');
    }
    const next = mutate(list.slice());
    const ok = await putDoc(DOC_KEY, serialize(next), doc ? doc.hash : undefined);
    if (ok) return next;
    // 해시 불일치 → 다른 요청이 먼저 저장함 — 재조회 후 재시도
  }
  throw new Error('동시 편집 충돌 — 잠시 후 다시 시도하세요');
}

function cleanStr(v, max) {
  return String(v == null ? '' : v).replace(/\r\n/g, '\n').trim().slice(0, max);
}

module.exports = async function handler(req, res) {
  const auth = verifyRequest(req);

  // 권한 조회: 작성 UI 를 띄울지 프론트가 판단하는 용도.
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ admin: !!auth.admin });
  }

  // 쓰기 계열은 로그인 + 관리자 필수.
  if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
    if (!auth.valid) return res.status(401).json({ error: 'auth required' });
    if (!auth.admin) return res.status(403).json({ error: 'admin only' });
    if (!process.env.DATABASE_URL) return res.status(500).json({ error: 'server misconfig: DATABASE_URL 미설정' });
  }

  try {
    if (req.method === 'POST') {
      const b = readBody(req);
      const title  = cleanStr(b.title, LIMIT.title);
      const body   = cleanStr(b.body, LIMIT.body);
      const author = cleanStr(b.author, LIMIT.author) || '운영진';
      if (!title) return res.status(400).json({ error: '제목을 입력하세요' });
      if (!body)  return res.status(400).json({ error: '내용을 입력하세요' });

      const notice = {
        id: Date.now().toString(36) + '-' + crypto.randomBytes(3).toString('hex'),
        title, body, author,
        ts: Date.now(),
      };
      await commitList(list => [notice, ...list].slice(0, MAX_NOTICES));
      return res.status(200).json({ ok: true, notice });
    }

    if (req.method === 'PUT') {
      const b = readBody(req);
      const id     = cleanStr(b.id, 200);
      const title  = cleanStr(b.title, LIMIT.title);
      const body   = cleanStr(b.body, LIMIT.body);
      const author = cleanStr(b.author, LIMIT.author) || '운영진';
      if (!id)    return res.status(400).json({ error: 'id 필요' });
      if (!title) return res.status(400).json({ error: '제목을 입력하세요' });
      if (!body)  return res.status(400).json({ error: '내용을 입력하세요' });

      let updated = null;
      await commitList(list => list.map(n => {
        if (n.id !== id) return n;
        // 생성 시각(ts)·id 는 유지하고 수정 시각(editedTs) 을 남긴다.
        updated = Object.assign({}, n, { title: title, body: body, author: author, editedTs: Date.now() });
        return updated;
      }));
      if (!updated) return res.status(404).json({ error: '해당 공지를 찾을 수 없음' });
      return res.status(200).json({ ok: true, notice: updated });
    }

    if (req.method === 'DELETE') {
      const id = (req.query && req.query.id) || readBody(req).id;
      if (!id) return res.status(400).json({ error: 'id 필요' });
      let removed = false;
      await commitList(list => {
        const next = list.filter(n => n.id !== id);
        removed = next.length !== list.length;
        return next;
      });
      if (!removed) return res.status(404).json({ error: '해당 공지를 찾을 수 없음' });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(502).json({ error: '저장 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
