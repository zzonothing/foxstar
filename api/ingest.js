// api/ingest.js — 스크래퍼 수집 엔드포인트 (데일리 히스토리 + 최신 문서 갱신)
//
// 별도 스크래퍼 저장소가 파일 수정 + git 커밋 대신 이 API 를 호출한다.
// 수분~몇 시간 단위로 반복 호출해도 히스토리는 KST 기준 '하루 1 row' 로
// 유지된다(같은 날 = update, 새 날짜 = insert — api/_lib/history.js upsert).
//
// 요청:
//   POST /api/ingest
//   Authorization: Bearer <INGEST_KEY>   (INGEST_KEY 미설정 시 ADMIN_KEY 겸용)
//   Content-Type: application/json (+ 선택: X-Doc-Gzip: 1 이면 gzip 압축 본문 —
//   characters 포함 시 필수에 가깝다. Vercel 요청 4.5MB 한도 회피)
//
//   본문(JSON — members/characters 는 부분 전송 가능):
//   {
//     "season": 44,                     // members 포함 시 필수 (member.js 문서 병합 키)
//     "members": [ { "name","uid","blaBlaLinkUId","syncroLevel","normal","hard",
//                    "tribeTower","overclock","outpost":{…} }, … ],
//     "characters": { "actionDate": "…", "<uid>": [ {character.js 와 동일 형태}, … ] }
//   }
//
// 처리 순서 (부분 실패 격리 — 히스토리 적재 성공은 문서 갱신 실패와 독립):
//   1. member_daily / character_daily 데일리 upsert (KST 오늘)
//   2. members 로스터 동기화 (name/active)
//   3. 최신 문서 재생성: member.js 는 해당 시즌 키만 병합(다른 시즌 보존),
//      character.js 는 전체 교체 — putDoc 해시 가드 + 1회 재시도
//   4. 오래된 히스토리 솎아내기(pruneHistory) — 별도 크론/서버리스 함수를 만들지
//      않고 여기에 얹는다(Hobby 12개 함수 한도 절약). 지울 날짜가 없으면 조회 1회.
//
// 응답: { ok, date, membersUpserted, charsUpserted, docsUpdated, roster, pruned, warnings }
//   pruned = { dates: 지운 날짜 수, kept: 남은 날짜 수 }

const zlib = require('zlib');
const crypto = require('crypto');
const { getDocText, putDoc, kstToday } = require('./_lib/db');
const { syncRoster, upsertMemberDaily, upsertCharacterDaily, pruneHistory } = require('./_lib/history');

const MAX_BODY_BYTES = 32 * 1024 * 1024;
const MAX_MEMBERS = 200;
const MAX_CHARS_PER_UID = 1000;

function safeEqual(a, b) {
  const ha = crypto.createHash('sha256').update(String(a)).digest();
  const hb = crypto.createHash('sha256').update(String(b)).digest();
  return crypto.timingSafeEqual(ha, hb);
}

function isIngestAuthed(req) {
  const key = process.env.INGEST_KEY || process.env.ADMIN_KEY;
  if (!key) return false;
  const m = (req.headers.authorization || '').match(/^Bearer\s+(.+)$/);
  return !!(m && safeEqual(m[1], key));
}

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

// <script src> 로 로드되는 .js 문서에 JSON 을 안전하게 임베드 (U+2028/2029 이스케이프)
function safeJson(v) {
  const LS = String.fromCharCode(0x2028), PS = String.fromCharCode(0x2029);
  return JSON.stringify(v).split(LS).join('\\u2028').split(PS).join('\\u2029');
}

// `const NAME = <JSON>;` 문서에서 JSON 본체 파싱 (없거나 손상 시 null)
function parseDocBody(text) {
  const m = text.match(/^(?:\/\/[^\n]*\n|\s)*const\s+[A-Za-z_$][\w$]*\s*=\s*/);
  if (!m) return null;
  const tail = text.slice(m[0].length).replace(/[\s;]+$/, '');
  try { return JSON.parse(tail); } catch { return null; }
}

// member.js 문서에 해당 시즌만 병합 (다른 시즌·기존 rank 보존). 해시 가드 + 1회 재시도.
async function mergeMemberDoc(season, members) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const doc = await getDocText('member.js');
    let union = {};
    if (doc) {
      union = parseDocBody(doc.content);
      if (union === null) throw new Error('member.js 문서 파싱 실패 — 덮어쓰기 중단');
    }
    const prev = union[String(season)] || {};
    const entry = { members };
    if (prev.rank != null) entry.rank = prev.rank; // 시즌 종료 후 기록된 순위 보존
    union[String(season)] = entry;
    const text = '// data/member.js - 시즌별 유니온 멤버 데이터 (api/ingest.js 가 자동 관리)\n'
      + 'const UNION = ' + safeJson(union) + ';\n';
    if (await putDoc('member.js', text, doc ? doc.hash : undefined)) return;
  }
  throw new Error('member.js 동시 갱신 충돌');
}

async function replaceCharacterDoc(characters) {
  const obj = Object.assign({}, characters);
  if (!obj.actionDate) {
    obj.actionDate = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 19).replace('T', ' ');
  }
  const text = '// data/character.js - 멤버별 캐릭터 데이터 (api/ingest.js 가 자동 관리)\n'
    + 'const CHARACTERS = ' + safeJson(obj) + ';\n';
  await putDoc('character.js', text);
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method not allowed' });

  if (!isIngestAuthed(req)) {
    await new Promise(r => setTimeout(r, 350 + Math.floor(Math.random() * 300)));
    return res.status(403).json({ error: 'ingest key required' });
  }

  // 본문 수신 + (선택) gzip 해제 + JSON 파싱
  let payload;
  try {
    let buf = await readRawBody(req);
    if (req.headers['x-doc-gzip'] === '1') {
      buf = zlib.gunzipSync(buf, { maxOutputLength: MAX_BODY_BYTES });
    }
    if (buf.length > MAX_BODY_BYTES) return res.status(413).json({ error: '본문이 너무 큼' });
    payload = JSON.parse(buf.toString('utf8'));
  } catch (e) {
    return res.status(400).json({ error: '본문 파싱 실패', detail: String(e.message || e).slice(0, 120) });
  }

  const members = payload.members;
  const characters = payload.characters;
  const season = parseInt(payload.season, 10);

  // 형태 검증
  if (members !== undefined) {
    if (!Array.isArray(members) || !members.length || members.length > MAX_MEMBERS) {
      return res.status(400).json({ error: 'members 는 1~' + MAX_MEMBERS + '개의 배열이어야 함' });
    }
    if (!members.every(m => m && typeof m.uid === 'string' && typeof m.name === 'string')) {
      return res.status(400).json({ error: 'members 항목에 uid/name 필요' });
    }
    if (!Number.isFinite(season)) {
      return res.status(400).json({ error: 'members 포함 시 season 숫자 필요' });
    }
  }
  if (characters !== undefined) {
    if (typeof characters !== 'object' || characters === null || Array.isArray(characters)) {
      return res.status(400).json({ error: 'characters 는 { "<uid>": [...] } 객체여야 함' });
    }
    for (const k of Object.keys(characters)) {
      if (k === 'actionDate') continue;
      if (!Array.isArray(characters[k]) || characters[k].length > MAX_CHARS_PER_UID) {
        return res.status(400).json({ error: 'characters["' + k.slice(0, 20) + '"] 형식 오류' });
      }
    }
  }
  if (members === undefined && characters === undefined) {
    return res.status(400).json({ error: 'members 또는 characters 중 하나는 필요' });
  }

  const date = kstToday();
  const out = { ok: true, date, membersUpserted: 0, charsUpserted: 0, docsUpdated: [], roster: null, warnings: [] };

  try {
    // 1) 데일리 히스토리 (실패 시 전체 실패 — 수집의 본체)
    if (members) out.membersUpserted = await upsertMemberDaily(members, date);
    if (characters) out.charsUpserted = await upsertCharacterDaily(characters, date);

    // 2) 로스터 동기화
    if (members) {
      try { out.roster = await syncRoster(members); }
      catch (e) { out.warnings.push('로스터 동기화 실패: ' + String(e.message || e).slice(0, 100)); }
    }

    // 3) 최신 문서 재생성 (실패해도 히스토리는 유지 — warning 으로 보고)
    if (members) {
      try { await mergeMemberDoc(season, members); out.docsUpdated.push('member.js'); }
      catch (e) { out.warnings.push('member.js 갱신 실패: ' + String(e.message || e).slice(0, 100)); }
    }
    if (characters) {
      try { await replaceCharacterDoc(characters); out.docsUpdated.push('character.js'); }
      catch (e) { out.warnings.push('character.js 갱신 실패: ' + String(e.message || e).slice(0, 100)); }
    }

    // 4) 오래된 히스토리 솎아내기 (별도 크론/함수 없이 수집 끝에 얹는다 —
    //    Hobby 12개 함수 한도를 아끼기 위함). 지울 날짜가 없으면 조회 1회로 끝나고,
    //    실패해도 수집 자체는 성공으로 둔다.
    try { out.pruned = await pruneHistory(date); }
    catch (e) { out.warnings.push('히스토리 정리 실패: ' + String(e.message || e).slice(0, 100)); }

    return res.status(200).json(out);
  } catch (e) {
    return res.status(502).json({ error: '수집 처리 실패', detail: String(e.message || e).slice(0, 200) });
  }
};
