// api/_lib/db.js — Neon Postgres 접근 + 게이트 문서(data_docs) 공용 모듈 (CommonJS)
//
// 게이트 데이터(member/raid/character/solo/notice)는 배포 번들이 아니라
// data_docs 테이블에 '파일 원문 그대로' 저장된다 — 데이터 갱신에 재배포가 필요
// 없어진다. 서빙 계약은 기존과 동일: api/data.js 가 이 모듈로 문서를
// 읽어 makeEntry(ETag/gzip 엔트리)로 만들어 보낸다.
//
// 캐시 전략: 웜 인스턴스별 인메모리 캐시 + 요청당 1회의 해시 검증 쿼리.
//   SELECT 가 content_hash 만 비교해, 캐시와 같으면 content 를 내려받지 않는다
//   (character.js 5.8MB 를 매 요청 전송하지 않기 위함). 다르면 그때만 본문 수신.
//   putDoc 성공 시 로컬 캐시를 즉시 갱신한다. 다른 웜 인스턴스는 다음 요청의
//   해시 검증에서 따라잡는다(ETag 가 달라져 브라우저도 정상 재검증).
//
// 표준 SQL 만 사용 — Neon 이 아닌 다른 PostgreSQL 로 옮겨도 드라이버 교체만으로
// 동작한다(@neondatabase/serverless 는 서버리스 궁합(HTTP 1-shot) 때문에 선택).

const crypto = require('crypto');
const { makeEntry } = require('./compress');

// 유니온별 배포에서 env 로 구분. 유니온마다 Neon 프로젝트가 따로라 DB 안에는
// 유니온이 하나뿐이므로 값 자체는 뭐든 되지만, 배포마다 다르게 두면
// DATABASE_URL 오설정으로 남의 DB 를 보게 됐을 때 조용히 쓰는 대신 빈 유니온이
// 보인다(여우별 1 / 나증단 2). ★ data_docs 만 union_id 가 없어 DB 공유는 불가.
const UNION_ID = parseInt(process.env.UNION_ID || '1', 10);

let _sql = null;
function client() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL 미설정');
    const { neon, types } = require('@neondatabase/serverless');
    // date 컬럼(OID 1082)은 JS Date 로 변환하지 않고 'YYYY-MM-DD' 문자열 그대로 받는다.
    // 드라이버 기본 파서는 date → Date 객체를 만드는데, 이 코드베이스는 snapshot_date
    // 를 문자열로 비교·직렬화한다 — Date 가 오면 String() 결과가 "Thu Jul 23" 류가
    // 되어 api/history.js 의 스냅샷 날짜 스냅핑(성장 비교)이 전부 깨진다.
    types.setTypeParser(1082, v => v);
    _sql = neon(process.env.DATABASE_URL);
  }
  return _sql;
}

// 파라미터 쿼리 실행 → rows 배열
function query(text, params) {
  return client().query(text, params || []);
}

function sha1hex(bufOrStr) {
  return crypto.createHash('sha1').update(bufOrStr).digest('hex');
}

// KST 기준 오늘 날짜 'YYYY-MM-DD' (KST 는 UTC+9 고정, DST 없음).
// 데일리 upsert 의 날짜 키 — UTC CURRENT_DATE 를 쓰면 한국 기준 오전 9시에
// 날짜가 바뀌는 버그가 되므로 반드시 이 값을(또는 SQL 의
// (now() AT TIME ZONE 'Asia/Seoul')::date 를) 사용한다.
function kstToday() {
  return new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
}

// ── JSON.parse 래핑 (api/data.js 에서 이동) ─────────────────────
// 대형 데이터 파일은 JS 오브젝트 리터럴 대신 `const NAME = JSON.parse("…")`
// 형태로 변환해 서빙한다 — 브라우저 메인스레드 파싱이 빨라진다
// (character.js 실측 약 1.8배). fail-safe: `const NAME = <엄격 JSON 리터럴>;`
// 구조가 아니면(예: solo.js — 따옴표 없는 키·내부 주석) null 을 반환해 원본을
// 그대로 서빙한다. U+2028/2029 는 구형 엔진 문자열 리터럴에서 SyntaxError 를
// 내므로 반드시 이스케이프한다.
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

// ── 문서 키/내용 검증 규칙 (admin-data 업로드·시드 공용) ─────────
// strictJson=true: `const <GLOBAL> = <엄격 JSON>;` 여야 통과.
// strictJson=false(solo.js): 엔벨로프(const SOLO = [{ …)만 확인 — 수동 편집
// 파일이라 내용 검증은 관리자 신뢰.
const DOC_RULES = {
  'member.js':       { global: 'UNION',        strictJson: true },
  'raid.js':         { global: 'RAID',         strictJson: true },
  'character.js':    { global: 'CHARACTERS',   strictJson: true },
  'solo.js':         { global: 'SOLO',         strictJson: false },
  'notice.js':       { global: 'NOTICE',       strictJson: true },
  'char_details.js': { global: 'CHAR_DETAILS', strictJson: true },
};

function isValidDocKey(key) {
  return Object.prototype.hasOwnProperty.call(DOC_RULES, key);
}

// 업로드된 내용이 해당 키의 형식을 만족하는지 검사. 통과 시 null, 실패 시 사유.
function validateDocContent(key, text) {
  const rule = DOC_RULES[key];
  if (rule) {
    const re = new RegExp('^(?:\\/\\/[^\\n]*\\n|\\s)*const\\s+' + rule.global + '\\s*=\\s*([\\[{])');
    const m = text.match(re);
    if (!m) return 'const ' + rule.global + ' = … 형식이 아님';
    if (rule.strictJson) {
      const tail = text.slice(text.indexOf(m[1], m.index)).replace(/[\s;]+$/, '');
      try { JSON.parse(tail); } catch (e) {
        return '엄격 JSON 아님: ' + String(e.message || e).slice(0, 120);
      }
    }
    return null;
  }
  return '허용되지 않은 문서 키';
}

// `const NAME = <JSON>;` 문서에서 JSON 본체만 파싱해 반환 (실패 시 null).
// notice.js 편집·ingest 의 member.js 시즌 병합에 사용.
function parseDocJson(text) {
  const m = text.match(/^(?:\/\/[^\n]*\n|\s)*const\s+[A-Za-z_$][\w$]*\s*=\s*/);
  if (!m) return null;
  const tail = text.slice(m[0].length).replace(/[\s;]+$/, '');
  try { return JSON.parse(tail); } catch { return null; }
}

// ── 문서 서빙 캐시 ───────────────────────────────────────────────
// key → { hash, entry } (entry = makeEntry 결과, gzip 은 sendEntry 가 lazy 생성)
const DOC_CACHE = new Map();

// 게이트 문서 로드. 반환: { entry: Entry|null, memberEpoch: number }.
// wrap=true 면 1MiB 이상 문서에 jsonParseWrap 적용(api/data.js 경로 전용).
// member_epoch(전원 강제 재인증 스위치)를 같은 왕복에 서브쿼리로 실어 온다 —
// api/data.js 가 추가 쿼리 없이 '이 시각 이전 발급 멤버 쿠키'를 거부할 수 있다.
async function getDocEntry(key, wrap) {
  const cached = DOC_CACHE.get(key);
  const rows = await query(
    'SELECT content_hash, CASE WHEN content_hash = $2 THEN NULL ELSE content END AS content, ' +
    "(SELECT value FROM app_settings WHERE union_id = $3 AND key = 'member_epoch') AS member_epoch " +
    'FROM data_docs WHERE key = $1',
    [key, cached ? cached.hash : '', UNION_ID]
  );
  if (!rows.length) return { entry: null, memberEpoch: 0 };
  const row = rows[0];
  const memberEpoch = parseInt(row.member_epoch || '0', 10) || 0;
  if (row.content === null && cached) return { entry: cached.entry, memberEpoch }; // 해시 일치 → 캐시
  const raw = Buffer.from(row.content, 'utf8');
  const wrapped = wrap && raw.length >= WRAP_MIN_BYTES ? jsonParseWrap(raw) : null;
  const entry = makeEntry(wrapped || raw);
  DOC_CACHE.set(key, { hash: row.content_hash, entry });
  return { entry, memberEpoch };
}

// 문서 원문 조회 (쓰기 경로용 — notice 편집, ingest 병합). 반환 { content, hash } | null.
async function getDocText(key) {
  const rows = await query('SELECT content, content_hash FROM data_docs WHERE key = $1', [key]);
  return rows.length ? { content: rows[0].content, hash: rows[0].content_hash } : null;
}

// 문서 저장(upsert). expectedHash 를 주면 낙관적 동시성 가드 — 현재 해시가
// 일치할 때만 갱신하고, 어긋나면 false 를 반환한다(호출부가 재조회 후 재시도).
// 성공 시 로컬 캐시를 무효화하고 true 를 반환.
async function putDoc(key, content, expectedHash) {
  const hash = sha1hex(content);
  let rows;
  if (expectedHash !== undefined && expectedHash !== null) {
    rows = await query(
      'INSERT INTO data_docs (key, content, content_hash, updated_at) VALUES ($1, $2, $3, now()) ' +
      'ON CONFLICT (key) DO UPDATE SET content = EXCLUDED.content, content_hash = EXCLUDED.content_hash, updated_at = now() ' +
      'WHERE data_docs.content_hash = $4 RETURNING key',
      [key, content, hash, expectedHash]
    );
  } else {
    rows = await query(
      'INSERT INTO data_docs (key, content, content_hash, updated_at) VALUES ($1, $2, $3, now()) ' +
      'ON CONFLICT (key) DO UPDATE SET content = EXCLUDED.content, content_hash = EXCLUDED.content_hash, updated_at = now() ' +
      'RETURNING key',
      [key, content, hash]
    );
  }
  if (!rows.length) return false;
  DOC_CACHE.delete(key); // 다음 getDocEntry 가 새 본문을 수신
  return true;
}

// ── 앱 설정 (app_settings) ──────────────────────────────────────
async function getSetting(key) {
  const rows = await query(
    'SELECT value FROM app_settings WHERE union_id = $1 AND key = $2', [UNION_ID, key]);
  return rows.length ? rows[0].value : null;
}

async function setSetting(key, value) {
  await query(
    'INSERT INTO app_settings (union_id, key, value, updated_at) VALUES ($1, $2, $3, now()) ' +
    'ON CONFLICT (union_id, key) DO UPDATE SET value = EXCLUDED.value, updated_at = now()',
    [UNION_ID, key, value]);
}

module.exports = {
  UNION_ID, query, sha1hex, kstToday,
  jsonParseWrap, WRAP_MIN_BYTES,
  DOC_RULES, isValidDocKey, validateDocContent, parseDocJson,
  getDocEntry, getDocText, putDoc,
  getSetting, setSetting,
};
