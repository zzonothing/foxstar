#!/usr/bin/env node
// scripts/seed.js — 스키마 생성/마이그레이션 + 초기 부트스트랩
//
// 실행(저장소 루트에서): npm run seed        (운영 DB 에서도 안전)
//                        npm run seed -- --force   (오늘 히스토리를 다시 백필)
//   DATABASE_URL 은 환경변수 또는 .env.local(vercel env pull 산출물)에서 읽는다.
//
//   1. scripts/schema.sql 실행 (IF NOT EXISTS / 반복 실행 안전한 마이그레이션)
//   2. member.js 최신 시즌 → members 로스터 시드 (PIN 은 각자 최초 접속 시 설정)
//   3. 데일리 히스토리 1일치 백필 — **그 날짜 기록이 아직 없을 때만**
//
// ★ 문서 시드 단계는 컷오버로 사라졌다. 예전엔 api/_data/** 디스크 사본을
//   data_docs 에 넣었지만, 그 사본은 저장소에 있어 **모든 유니온 배포에 똑같이**
//   들어갔다 — 신규 유니온 DB 에 남의 유니온 문서·로스터가 그대로 심기는 사고
//   경로였다. 이제 문서는 api/ingest.js(member/character)와
//   scripts/upload-doc.js(raid/solo/notice)로만 DB 에 들어간다.
//
// ★ 3 단계가 조건부인 이유: 이미 기록이 있으면 스크래퍼가 적재한 실시간 값이다.
//   예전 버전은 여기서 과거 값을 덮어썼다(실제 사고). --force 는 그 덮어쓰기가
//   목적일 때만 쓴다.

const fs = require('fs');
const path = require('path');

const FORCE = process.argv.includes('--force');

try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}
try { process.loadEnvFile(path.join(__dirname, '..', '.env.development.local')); } catch {}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 이 없습니다. Vercel 대시보드에서 Neon 통합을 설치한 뒤');
  console.error('`vercel env pull .env.local` 을 실행하거나 환경변수로 지정하세요.');
  process.exit(1);
}

const { query, getDocText, parseDocJson, kstToday, UNION_ID } = require('../api/_lib/db');
const { syncRoster, upsertMemberDaily, upsertCharacterDaily } = require('../api/_lib/history');

// 어느 유니온·어느 DB 에 쓰는지 먼저 찍는다. 저장소 하나를 여러 유니온이
// 공유하고 클론도 유니온별로 두는 구성이라, 엉뚱한 클론에서 돌린 시드가
// 조용히 다른 유니온을 건드리는 사고가 가능하다. 특히 UNION_ID 미설정 시
// 기본 1(여우별)이 되어, 다른 유니온 DB 에 접속하고도 그 배포에는 아무
// 효과가 없다(에러도 안 난다). 사전 점검은 `npm run whoami`.
function dbLabel(url) {
  try { const u = new URL(url); return u.host + u.pathname; } catch { return '(파싱 불가)'; }
}
console.log('대상 DB   : ' + dbLabel(process.env.DATABASE_URL));
console.log('UNION_ID  : ' + UNION_ID + (process.env.UNION_ID ? '' : '  (미설정 → 기본 1)'));
console.log('ADMIN_NAMES: ' + (process.env.ADMIN_NAMES || 'SUM,유화') +
  (process.env.ADMIN_NAMES ? '' : '  (미설정 → 기본값)'));
console.log();

// 문서 원문은 DB 에서만 읽는다 (컷오버 이후 디스크 사본 없음).
// 신규 유니온에서는 첫 ingest 전까지 null 이라 로스터·백필이 건너뛰어진다 —
// 정상 동작이다. 부트스트랩 순서는 CLAUDE.md '신규 유니온 부트스트랩' 참고.
async function readDoc(key) {
  const row = await getDocText(key);
  return row ? { text: row.content } : null;
}

async function runSchema() {
  const sqlText = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
  // 문장 단위 실행 (HTTP 드라이버는 1문장/호출). 스키마에 세미콜론 리터럴 없음.
  // 주석은 전부 풀라인(-- …)이므로 문장별로 주석 줄을 걷어낸다.
  const stmts = sqlText
    .split(/;\s*(?:\r?\n|$)/)
    .map(s => s.split('\n').filter(l => !/^\s*--/.test(l)).join('\n').trim())
    .filter(Boolean);
  for (const stmt of stmts) await query(stmt);
  console.log('스키마 OK (' + stmts.length + '문장)');
}

// 현재 DB 에 어떤 문서가 있는지만 보여준다 (시드하지 않는다 — 위 ★ 참고).
async function reportDocs() {
  const rows = await query(
    'SELECT key, length(content) AS bytes FROM data_docs ORDER BY key', []);
  console.log('\nDB 문서 ' + rows.length + '/5:');
  const have = new Set(rows.map(r => r.key));
  for (const row of rows) {
    console.log('  ' + row.key.padEnd(32) + String(row.bytes).padStart(9) + ' bytes');
  }
  const missing = ['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']
    .filter(k => !have.has(k));
  if (missing.length) {
    console.log('  없음: ' + missing.join(', '));
    console.log('  → member/character 는 api/ingest.js 가, raid/solo/notice 는');
    console.log('    scripts/upload-doc.js 가 넣습니다. 문서 행이 없으면 해당 페이지는 데이터 오류를 띄웁니다.');
  }
  return rows.length;
}

async function seedRosterAndHistory() {
  const memberDoc = await readDoc('member.js');
  if (!memberDoc) { console.error('\nmember.js 없음 — 로스터/백필 건너뜀 (첫 ingest 전이면 정상)'); return; }
  const union = parseDocJson(memberDoc.text);
  if (!union) { console.error('member.js 파싱 실패 — 로스터/백필 건너뜀'); return; }
  const latest = Math.max(...Object.keys(union).map(Number));
  const members = (union[String(latest)] || {}).members || [];

  const roster = await syncRoster(members);
  console.log('\n로스터 시드: 시즌 ' + latest + ' 기준 ' +
    roster.upserted + '명 upsert, ' + roster.deactivated + '명 비활성');

  // 관리자 멤버 지정 — ADMIN_NAMES env (기본 'SUM,유화'). 시드가 진실 원천이라
  // 재실행 시 목록에 없는 멤버의 관리자 플래그는 회수된다.
  const adminNames = (process.env.ADMIN_NAMES || 'SUM,유화').split(',').map(s => s.trim()).filter(Boolean);
  if (adminNames.length) {
    const { UNION_ID } = require('../api/_lib/db');
    const ph = adminNames.map((_, i) => '$' + (i + 2)).join(', ');
    const admins = await query(
      'UPDATE members SET is_admin = (name IN (' + ph + ')), updated_at = now() ' +
      'WHERE union_id = $1 AND is_admin IS DISTINCT FROM (name IN (' + ph + ')) RETURNING name, is_admin',
      [UNION_ID, ...adminNames]);
    const granted = await query(
      'SELECT name FROM members WHERE union_id = $1 AND is_admin ORDER BY name', [UNION_ID]);
    console.log('관리자 멤버: ' + (granted.map(r => r.name).join(', ') || '없음') +
      (admins.length ? ' (' + admins.length + '건 변경)' : ''));
  }

  // 데일리 백필은 그 날짜 기록이 아직 없을 때만. 이미 있으면 스크래퍼가 적재한
  // 실시간 값이므로 건드리지 않는다(예전 버전은 여기서 과거 값을 덮어썼다).
  const { UNION_ID } = require('../api/_lib/db');
  const date = kstToday();
  const already = await query(
    'SELECT 1 FROM member_daily WHERE union_id = $1 AND snapshot_date = $2 LIMIT 1', [UNION_ID, date]);
  if (already.length && !FORCE) {
    console.log('데일리 백필 건너뜀 — ' + date + ' 기록이 이미 있습니다 (덮어쓰려면 --force).');
    return;
  }

  const mCount = await upsertMemberDaily(members, date);

  let cCount = 0;
  const charDoc = await readDoc('character.js');
  const chars = charDoc && parseDocJson(charDoc.text);
  if (chars) cCount = await upsertCharacterDaily(chars, date);
  else console.error('character.js 파싱 실패 — 캐릭터 백필 건너뜀');

  console.log('데일리 백필(' + date + '): member_daily ' + mCount +
    ' rows, character_daily ' + cCount + ' rows');
}

(async () => {
  if (FORCE) console.log('⚠ --force: 오늘 날짜의 데일리 히스토리를 다시 백필합니다.\n');
  await runSchema();
  await reportDocs();
  await seedRosterAndHistory();

  const counts = await query(
    "SELECT (SELECT count(*) FROM data_docs) AS docs, (SELECT count(*) FROM members) AS members, " +
    '(SELECT count(*) FROM member_daily) AS md, (SELECT count(*) FROM character_daily) AS cd', []);
  console.log('\n완료 — DB 현황: 문서 ' + counts[0].docs + ' / 멤버 ' + counts[0].members +
    ' / member_daily ' + counts[0].md + ' / character_daily ' + counts[0].cd);
  process.exit(0);
})().catch(e => { console.error('시드 실패:', e.message || e); process.exit(1); });
