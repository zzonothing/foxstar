#!/usr/bin/env node
// scripts/dump-docs.js — data_docs 전 문서를 로컬 디렉터리로 백업
//
// 사용법: DATABASE_URL=… node scripts/dump-docs.js [출력디렉터리=./dump]
// api/_data 파일을 저장소에서 제거한 뒤(컷오버 이후)의 백업/내보내기 경로.
// 출력 구조는 api/_data 와 동일 (member.js, raid.js, …).

const fs = require('fs');
const path = require('path');

try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 이 필요합니다.');
  process.exit(1);
}

const { query } = require('../api/_lib/db');

(async () => {
  const outDir = process.argv[2] || path.join(process.cwd(), 'dump');
  const rows = await query('SELECT key, content, updated_at FROM data_docs ORDER BY key', []);
  for (const row of rows) {
    const p = path.join(outDir, row.key);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, row.content);
    console.log(row.key.padEnd(32) + String(Buffer.byteLength(row.content)).padStart(9) + ' bytes  (updated ' + row.updated_at + ')');
  }
  console.log('\n' + rows.length + '개 문서 → ' + outDir);
  process.exit(0);
})().catch(e => { console.error('덤프 실패:', e.message || e); process.exit(1); });
