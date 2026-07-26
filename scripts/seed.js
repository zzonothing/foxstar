#!/usr/bin/env node
// scripts/seed.js — 스키마 생성/마이그레이션 + 초기 부트스트랩
//
// 실행(저장소 루트에서): npm run seed        (운영 DB 에서도 안전)
//                        npm run seed -- --force   (디스크 사본으로 전면 덮어쓰기)
//   DATABASE_URL 은 환경변수 또는 .env.local(vercel env pull 산출물)에서 읽는다.
//
//   1. scripts/schema.sql 실행 (IF NOT EXISTS / 반복 실행 안전한 마이그레이션)
//   2. api/_data/** 문서를 data_docs 에 시드 — **DB 에 없는 키만**
//   3. member.js 최신 시즌 → members 로스터 시드 (PIN 은 각자 최초 접속 시 설정)
//   4. 데일리 히스토리 1일치 백필 — **그 날짜 기록이 아직 없을 때만**
//
// ★ 2·4 단계가 조건부인 이유: api/_data/* 는 '초기 부트스트랩용 사본'이고 운영
//   데이터의 진실 원천이 아니다. member.js·character.js 는 api/ingest.js 가 DB 에
//   직접 갱신하므로 디스크 사본은 마지막 커밋 시점에 멈춰 있고, notice/raid/solo 도
//   웹·업로드 스크립트로 DB 만 갱신된다. 예전 버전은 이 사본을 무조건 덮어써서,
//   스키마 마이그레이션만 적용하려고 실행해도 운영 데이터가 커밋 시점으로
//   되돌아갔다(실제 사고). 전면 복구가 목적일 때만 --force 를 쓴다.

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

const { query, putDoc, getDocText, sha1hex, parseDocJson, kstToday } = require('../api/_lib/db');
const { syncRoster, upsertMemberDaily, upsertCharacterDaily } = require('../api/_lib/history');

const DATA_DIR = path.join(__dirname, '..', 'api', '_data');

// 문서 원문을 DB 우선으로 읽는다 (없으면 디스크 사본 = 부트스트랩).
// 로스터·백필이 이걸 쓰므로, 운영 중인 DB 에서는 항상 최신 데이터를 기준으로 돈다.
async function readDoc(key) {
  const row = await getDocText(key);
  if (row) return { text: row.content, from: 'DB' };
  const p = path.join(DATA_DIR, key);
  if (fs.existsSync(p)) return { text: fs.readFileSync(p, 'utf8'), from: '디스크 사본' };
  return null;
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

// DB 에 없는 문서만 디스크 사본으로 채운다. --force 면 전부 덮어쓴다.
async function seedDocs() {
  const files = ['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']
    .filter(f => fs.existsSync(path.join(DATA_DIR, f)));

  console.log('\n문서 시드:');
  let wrote = 0, kept = 0;
  for (const key of files) {
    const existing = await getDocText(key);
    if (existing && !FORCE) {
      console.log('  ' + key.padEnd(32) + String(Buffer.byteLength(existing.content)).padStart(9) +
        ' bytes  건너뜀 (DB 문서 유지)');
      kept++;
      continue;
    }
    const content = fs.readFileSync(path.join(DATA_DIR, key), 'utf8');
    await putDoc(key, content);
    console.log('  ' + key.padEnd(32) + String(Buffer.byteLength(content)).padStart(9) + ' bytes  ' +
      sha1hex(content).slice(0, 12) + (existing ? '  덮어씀 (--force)' : '  신규'));
    wrote++;
  }
  if (kept && !FORCE) {
    console.log('  → ' + kept + '건은 DB 값을 그대로 두었습니다. 디스크 사본으로 되돌리려면 --force.');
  }
  return { wrote, kept };
}

async function seedRosterAndHistory() {
  const memberDoc = await readDoc('member.js');
  if (!memberDoc) { console.error('member.js 없음 — 로스터/백필 건너뜀'); return; }
  const union = parseDocJson(memberDoc.text);
  if (!union) { console.error('member.js 파싱 실패 — 로스터/백필 건너뜀'); return; }
  const latest = Math.max(...Object.keys(union).map(Number));
  const members = (union[String(latest)] || {}).members || [];

  const roster = await syncRoster(members);
  console.log('\n로스터 시드(' + memberDoc.from + '): 시즌 ' + latest + ' 기준 ' +
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

  console.log('데일리 백필(' + date + ', ' + memberDoc.from + '): member_daily ' + mCount +
    ' rows, character_daily ' + cCount + ' rows');
}

(async () => {
  if (FORCE) console.log('⚠ --force: DB 문서와 오늘 히스토리를 디스크 사본으로 덮어씁니다.\n');
  await runSchema();
  const docs = await seedDocs();
  await seedRosterAndHistory();

  const counts = await query(
    "SELECT (SELECT count(*) FROM data_docs) AS docs, (SELECT count(*) FROM members) AS members, " +
    '(SELECT count(*) FROM member_daily) AS md, (SELECT count(*) FROM character_daily) AS cd', []);
  console.log('\n완료 — DB 현황: 문서 ' + counts[0].docs + ' / 멤버 ' + counts[0].members +
    ' / member_daily ' + counts[0].md + ' / character_daily ' + counts[0].cd +
    ' (이번 실행: 문서 ' + docs.wrote + '건 기록, ' + docs.kept + '건 유지)');
  process.exit(0);
})().catch(e => { console.error('시드 실패:', e.message || e); process.exit(1); });
