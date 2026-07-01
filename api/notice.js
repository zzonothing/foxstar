// api/notice.js — 운영진 공지 작성/삭제 + 권한 조회 엔드포인트
//
// 저장 방식: 별도 DB 없이, 공지 데이터를 다른 데이터 파일처럼 git 에 커밋한다.
// 관리자가 공지를 쓰면 이 함수가 GitHub Contents API 로 api/_data/notice.js 를
// 갱신 커밋 → Vercel 자동 재배포 → 반영. (반영까지 수십 초~수 분 지연 가능)
//
// 열람(READ)은 다른 데이터와 동일하게 /data/notice.js → api/data.js 게이트로
// 처리되며, 이 함수는 쓰기(POST/DELETE)와 권한 조회(GET)만 담당한다.
//
// 메서드:
//   GET    /api/notice            → { admin: bool }         (작성 UI 노출 판단용)
//   POST   /api/notice            → 공지 추가 (관리자 전용)  body: { title, body, author? }
//   DELETE /api/notice?id=<id>    → 공지 삭제 (관리자 전용)
//
// 필요한 환경변수(Vercel 프로젝트 설정):
//   ADMIN_KEY  — 운영진 로그인 비밀번호 (api/auth.js 에서 사용)
//   GH_TOKEN   — 저장소 contents:read/write 권한의 GitHub 토큰(fine-grained PAT)
//   GH_REPO    — "owner/repo" (기본값: zzonothing/foxstar)
//   GH_BRANCH  — 커밋 대상 브랜치 (기본값: main)

const crypto = require('crypto');
const { verifyRequest } = require('./_lib/session');

const FILE_PATH = 'api/_data/notice.js';
const MAX_NOTICES = 100;
const LIMIT = { title: 100, body: 5000, author: 30 };

function repo()   { return process.env.GH_REPO   || 'zzonothing/foxstar'; }
function branch() { return process.env.GH_BRANCH || 'main'; }
function token()  { return process.env.GH_TOKEN  || process.env.GITHUB_TOKEN || ''; }

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
  return '// data/notice.js — 여우별 유니온 운영진 공지 (api/notice.js 가 자동 관리)\n'
       + '// 공지 작성/삭제 시 서버가 이 파일을 갱신 커밋한다. 필요하면 직접 편집도 가능.\n'
       + 'const NOTICE = ' + safeJson(list) + ';\n';
}

// notice.js 텍스트에서 배열만 추출해 파싱. 헤더 주석에는 대괄호가 없으므로
// 첫 '[' ~ 마지막 ']' 가 곧 배열 리터럴 범위.
function parseNotices(text) {
  try {
    const s = text.indexOf('[');
    const e = text.lastIndexOf(']');
    if (s < 0 || e < 0 || e < s) return [];
    const arr = JSON.parse(text.slice(s, e + 1));
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

function ghHeaders() {
  return {
    'Authorization': 'Bearer ' + token(),
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'foxstar-notice',
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

async function ghGetFile() {
  const url = 'https://api.github.com/repos/' + repo() + '/contents/' + FILE_PATH + '?ref=' + encodeURIComponent(branch());
  const r = await fetch(url, { headers: ghHeaders() });
  if (r.status === 404) return { list: [], sha: null };
  if (!r.ok) throw new Error('github get ' + r.status);
  const j = await r.json();
  const text = Buffer.from(j.content || '', 'base64').toString('utf8');
  return { list: parseNotices(text), sha: j.sha || null };
}

async function ghPutFile(list, sha, message) {
  const url = 'https://api.github.com/repos/' + repo() + '/contents/' + FILE_PATH;
  const payload = {
    message: message,
    content: Buffer.from(serialize(list), 'utf8').toString('base64'),
    branch: branch(),
  };
  if (sha) payload.sha = sha;
  return fetch(url, { method: 'PUT', headers: ghHeaders(), body: JSON.stringify(payload) });
}

// 동시 편집으로 sha 가 어긋나 409 가 나면 한 번만 재조회 후 재시도.
async function commitList(mutate, message) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const { list, sha } = await ghGetFile();
    const next = mutate(list.slice());
    const r = await ghPutFile(next, sha, message);
    if (r.ok) return next;
    if (r.status === 409 && attempt === 0) continue; // sha 충돌 → 재시도
    const detail = await r.text().catch(() => '');
    throw new Error('github put ' + r.status + ' ' + detail.slice(0, 200));
  }
  throw new Error('github put conflict');
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
  if (req.method === 'POST' || req.method === 'DELETE') {
    if (!auth.valid) return res.status(401).json({ error: 'auth required' });
    if (!auth.admin) return res.status(403).json({ error: 'admin only' });
    if (!token()) return res.status(500).json({ error: 'server misconfig: GH_TOKEN 미설정' });
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
      await commitList(
        list => [notice, ...list].slice(0, MAX_NOTICES),
        '공지 추가: ' + title.slice(0, 60)
      );
      return res.status(200).json({ ok: true, notice });
    }

    if (req.method === 'DELETE') {
      const id = (req.query && req.query.id) || readBody(req).id;
      if (!id) return res.status(400).json({ error: 'id 필요' });
      let removed = false;
      await commitList(
        list => { const next = list.filter(n => n.id !== id); removed = next.length !== list.length; return next; },
        '공지 삭제'
      );
      if (!removed) return res.status(404).json({ error: '해당 공지를 찾을 수 없음' });
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(502).json({ error: '저장소 반영 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
