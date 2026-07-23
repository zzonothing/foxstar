#!/usr/bin/env node
// scripts/reset-pin.js — 멤버 PIN 초기화 (최후 복구 수단)
//
// 관리자(SUM·유화)가 웹에서 서로 초기화해 주는 것이 1차 복구 경로다.
// 관리자 전원이 PIN 을 분실해 웹 접근이 막힌 경우에만 이 스크립트를 쓴다.
//
// 사용법: DATABASE_URL=… node scripts/reset-pin.js <닉네임>
//         (또는 .env.local 이 있으면 그냥 node scripts/reset-pin.js <닉네임>)
// 초기화된 멤버는 로그인 페이지의 "PIN 등록"에서 다시 등록하면 된다.

const path = require('path');
try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 이 필요합니다.');
  process.exit(1);
}

const name = process.argv[2];
if (!name) {
  console.error('사용법: node scripts/reset-pin.js <닉네임>');
  process.exit(1);
}

const { UNION_ID, query } = require('../api/_lib/db');

(async () => {
  const rows = await query(
    'UPDATE members SET pin_hash = NULL, pin_salt = NULL, claimed_at = NULL, updated_at = now() ' +
    'WHERE union_id = $1 AND name = $2 RETURNING name',
    [UNION_ID, name]);
  if (!rows.length) {
    console.error('해당 닉네임을 찾지 못했습니다: ' + name);
    process.exit(1);
  }
  console.log(rows[0].name + ' 의 PIN 을 초기화했습니다. 로그인 페이지에서 다시 등록하세요.');
  process.exit(0);
})().catch(e => { console.error('초기화 실패:', e.message || e); process.exit(1); });
