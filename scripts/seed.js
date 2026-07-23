#!/usr/bin/env node
// scripts/seed.js — 스키마 생성 + api/_data/* → data_docs 시드 + 로스터/데일리 백필
//
// 실행(저장소 루트에서): npm run seed
//   DATABASE_URL 은 환경변수 또는 .env.local(vercel env pull 산출물)에서 읽는다.
//
// 멱등: 모든 단계가 upsert 라 몇 번을 재실행해도 안전하다.
//   1. scripts/schema.sql 실행 (IF NOT EXISTS)
//   2. api/_data/** 전 문서를 data_docs 에 원문 그대로 upsert
//   3. member.js 최신 시즌 → members 로스터 시드 (PIN 은 각자 최초 접속 시 설정)
//   4. 현재 파일 기준 데일리 히스토리 1일치 백필 (member_daily / character_daily)

const fs = require('fs');
const path = require('path');

try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}
try { process.loadEnvFile(path.join(__dirname, '..', '.env.development.local')); } catch {}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 이 없습니다. Vercel 대시보드에서 Neon 통합을 설치한 뒤');
  console.error('`vercel env pull .env.local` 을 실행하거나 환경변수로 지정하세요.');
  process.exit(1);
}

const { query, putDoc, sha1hex, parseDocJson, kstToday } = require('../api/_lib/db');
const { syncRoster, upsertMemberDaily, upsertCharacterDaily } = require('../api/_lib/history');

const DATA_DIR = path.join(__dirname, '..', 'api', '_data');

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

async function seedDocs() {
  const docs = [];
  for (const f of ['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']) {
    const p = path.join(DATA_DIR, f);
    if (fs.existsSync(p)) docs.push([f, fs.readFileSync(p, 'utf8')]);
  }

  console.log('\n문서 시드 (' + docs.length + '건):');
  for (const [key, content] of docs) {
    await putDoc(key, content);
    console.log('  ' + key.padEnd(32) + String(Buffer.byteLength(content)).padStart(9) + ' bytes  ' + sha1hex(content).slice(0, 12));
  }
  return docs.length;
}

async function seedRosterAndHistory() {
  const memberText = fs.readFileSync(path.join(DATA_DIR, 'member.js'), 'utf8');
  const union = parseDocJson(memberText);
  if (!union) { console.error('member.js 파싱 실패 — 로스터/백필 건너뜀'); return; }
  const latest = Math.max(...Object.keys(union).map(Number));
  const members = (union[String(latest)] || {}).members || [];

  const roster = await syncRoster(members);
  console.log('\n로스터 시드: 시즌 ' + latest + ' 기준 ' + roster.upserted + '명 upsert, ' + roster.deactivated + '명 비활성');

  const date = kstToday();
  const mCount = await upsertMemberDaily(members, date);

  let cCount = 0;
  const charText = fs.readFileSync(path.join(DATA_DIR, 'character.js'), 'utf8');
  const chars = parseDocJson(charText);
  if (chars) cCount = await upsertCharacterDaily(chars, date);
  else console.error('character.js 파싱 실패 — 캐릭터 백필 건너뜀');

  console.log('데일리 백필(' + date + '): member_daily ' + mCount + ' rows, character_daily ' + cCount + ' rows');
}

(async () => {
  await runSchema();
  const docCount = await seedDocs();
  await seedRosterAndHistory();

  const counts = await query(
    "SELECT (SELECT count(*) FROM data_docs) AS docs, (SELECT count(*) FROM members) AS members, " +
    '(SELECT count(*) FROM member_daily) AS md, (SELECT count(*) FROM character_daily) AS cd', []);
  console.log('\n완료 — DB 현황: 문서 ' + counts[0].docs + ' / 멤버 ' + counts[0].members +
    ' / member_daily ' + counts[0].md + ' / character_daily ' + counts[0].cd +
    ' (이번 실행 시드 문서 ' + docCount + '건)');
  process.exit(0);
})().catch(e => { console.error('시드 실패:', e.message || e); process.exit(1); });
