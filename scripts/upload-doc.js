#!/usr/bin/env node
// scripts/upload-doc.js — 게이트 문서를 배포 없이 사이트에 업로드
//
// 사용법 (저장소 루트에서):
//   ADMIN_KEY=… node scripts/upload-doc.js <docKey> [filePath]
//   ADMIN_KEY=… node scripts/upload-doc.js --all-sim
//
//   docKey  : member.js | raid.js | character.js | solo.js | notice.js
//             | sim/meta.json | sim/union.json | sim/detail/<uid>.json
//   filePath: 생략 시 api/_data/<docKey> 를 읽는다.
//   --all-sim: sim/meta.json + sim/union.json + sim/detail/*.json 일괄 업로드.
//
// 환경변수: SITE (기본 https://foxstar.vercel.app), ADMIN_KEY (필수)
// 3MB 초과 파일은 gzip + X-Doc-Gzip: 1 로 전송해 Vercel 요청 4.5MB 한도를 피한다.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}

const SITE = (process.env.SITE || 'https://foxstar.vercel.app').replace(/\/$/, '');
const KEY = process.env.ADMIN_KEY;
const GZIP_OVER_BYTES = 3 * 1024 * 1024;

if (!KEY) { console.error('ADMIN_KEY 환경변수가 필요합니다.'); process.exit(1); }

async function uploadOne(docKey, filePath) {
  const p = filePath || path.join(__dirname, '..', 'api', '_data', docKey);
  const raw = fs.readFileSync(p);
  const useGzip = raw.length > GZIP_OVER_BYTES;
  const body = useGzip ? zlib.gzipSync(raw, { level: 9 }) : raw;

  const r = await fetch(SITE + '/api/admin-data?key=' + encodeURIComponent(docKey), {
    method: 'PUT',
    headers: Object.assign(
      { 'Authorization': 'Bearer ' + KEY, 'Content-Type': 'application/octet-stream' },
      useGzip ? { 'X-Doc-Gzip': '1' } : {}
    ),
    body,
  });
  const j = await r.json().catch(() => ({}));
  const label = docKey.padEnd(32) + String(raw.length).padStart(9) + ' bytes' + (useGzip ? ' (gzip ' + body.length + 'B)' : '');
  if (!r.ok) {
    console.error('실패  ' + label + '  HTTP ' + r.status + ' ' + JSON.stringify(j));
    process.exitCode = 1;
  } else {
    console.log('완료  ' + label + '  hash=' + String(j.content_hash).slice(0, 12));
  }
}

(async () => {
  const arg = process.argv[2];
  if (!arg) { console.error('사용법: node scripts/upload-doc.js <docKey>|--all-sim [filePath]'); process.exit(1); }

  if (arg === '--all-sim') {
    const simDir = path.join(__dirname, '..', 'api', '_data', 'sim');
    await uploadOne('sim/meta.json');
    await uploadOne('sim/union.json');
    for (const f of fs.readdirSync(path.join(simDir, 'detail')).filter(n => n.endsWith('.json')).sort()) {
      await uploadOne('sim/detail/' + f);
    }
    return;
  }
  await uploadOne(arg, process.argv[3]);
})().catch(e => { console.error('업로드 실패:', e.message || e); process.exit(1); });
