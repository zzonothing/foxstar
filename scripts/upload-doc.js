#!/usr/bin/env node
// scripts/upload-doc.js — 게이트 문서를 배포 없이 사이트에 업로드
//
// 사용법 (저장소 루트에서):
//   SITE=… ADMIN_KEY=… node scripts/upload-doc.js <docKey> <filePath>
//
//   docKey  : member.js | raid.js | character.js | solo.js | notice.js | char_details.js
//   filePath: 필수. 컷오버로 api/_data/ 사본이 사라져 기본 경로가 없다.
//
// 환경변수: SITE (필수 — 예: https://foxstar.vercel.app), ADMIN_KEY (필수)
//   ★ SITE 에 기본값을 두지 않는다. 저장소 하나를 여러 유니온 배포가 공유하는데
//     .env.local 도 하나뿐이라, 기본값이 있으면 SITE 를 깜빡한 업로드가 조용히
//     엉뚱한 유니온으로 올라간다(api/admin-data.js 는 union 개념이 없어 수락한다).
// 3MB 초과 파일은 gzip + X-Doc-Gzip: 1 로 전송해 Vercel 요청 4.5MB 한도를 피한다.

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}

const SITE = (process.env.SITE || '').replace(/\/$/, '');
const KEY = process.env.ADMIN_KEY;
const GZIP_OVER_BYTES = 3 * 1024 * 1024;

if (!SITE) {
  console.error('SITE 환경변수가 필요합니다 (예: SITE=https://foxstar.vercel.app).');
  console.error('저장소를 여러 유니온 배포가 공유하므로 기본값을 두지 않습니다 — 대상을 명시하세요.');
  process.exit(1);
}
if (!KEY) { console.error('ADMIN_KEY 환경변수가 필요합니다.'); process.exit(1); }

// 어느 배포로 올리는지 눈으로 확인할 수 있게 남긴다 (유니온 오배송 방지)
console.log('대상: ' + SITE);

async function uploadOne(docKey, filePath) {
  const raw = fs.readFileSync(filePath);
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
  const file = process.argv[3];
  if (!arg || !file) {
    console.error('사용법: node scripts/upload-doc.js <docKey> <filePath>');
    console.error('  컷오버로 api/_data/ 사본이 없어졌으므로 파일 경로가 필요합니다.');
    console.error('  현재 DB 문서를 내려받으려면: DATABASE_URL=… node scripts/dump-docs.js');
    process.exit(1);
  }
  await uploadOne(arg, file);
})().catch(e => { console.error('업로드 실패:', e.message || e); process.exit(1); });
