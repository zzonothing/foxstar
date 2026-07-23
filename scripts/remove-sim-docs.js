#!/usr/bin/env node
// scripts/remove-sim-docs.js — DB 에 남은 sim 문서 정리 (1회성)
//
// 시뮬레이터 기능 제거 이후, 이전 시드가 넣어둔 data_docs 의 'sim/…' 행을
// 삭제한다. 사용법: node scripts/remove-sim-docs.js  (DATABASE_URL 필요)

const path = require('path');
try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 이 필요합니다.');
  process.exit(1);
}

const { query } = require('../api/_lib/db');

(async () => {
  const rows = await query("DELETE FROM data_docs WHERE key LIKE 'sim/%' RETURNING key", []);
  console.log('sim 문서 ' + rows.length + '건 삭제');
  process.exit(0);
})().catch(e => { console.error('삭제 실패:', e.message || e); process.exit(1); });
