#!/usr/bin/env node
// scripts/whoami.js — 이 클론이 '어느 유니온'을 가리키는지 확인 (읽기 전용)
//
// 실행(저장소 루트에서): npm run whoami
//   DATABASE_URL 은 환경변수 또는 .env.local(vercel env pull 산출물)에서 읽는다.
//
// 저장소 하나를 여러 유니온 배포가 공유하고 클론도 유니온별로 따로 두는 구성에서,
// `npm run seed` 를 엉뚱한 클론·엉뚱한 DB 에 돌리는 사고를 막기 위한 사전 점검이다.
// 특히 위험한 조합 둘:
//   1. UNION_ID 미설정 → 기본 1(여우별). 나증단 DB 에 접속해도 union_id=1 행을
//      건드리므로 나증단 배포(union_id=2)에는 아무 효과가 없다. 에러도 안 난다
//   2. ADMIN_NAMES 미설정 → 기본 'SUM,유화'. 시드가 진실 원천이라 목록에 없는
//      멤버의 관리자 플래그는 회수된다 — 나증단에 돌리면 솜사탕이 강등된다
//
// 아무것도 쓰지 않는다. seed 를 돌리기 전에 이걸 먼저 보라.

const path = require('path');

try { process.loadEnvFile(path.join(__dirname, '..', '.env.local')); } catch {}
try { process.loadEnvFile(path.join(__dirname, '..', '.env.development.local')); } catch {}

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL 이 없습니다. `vercel env pull .env.local` 을 실행하거나');
  console.error('환경변수로 지정하세요.');
  process.exit(1);
}

// db.js 는 로드 시점에 UNION_ID 를 읽으므로 env 로드 뒤에 require 해야 한다.
const { query, UNION_ID } = require('../api/_lib/db');

// 자격증명은 찍지 않는다 — 호스트/DB 이름만으로 어느 Neon 프로젝트인지 구분된다.
function dbLabel(url) {
  try {
    const u = new URL(url);
    return u.host + u.pathname;
  } catch {
    return '(파싱 불가)';
  }
}

const ADMIN_NAMES_RAW = process.env.ADMIN_NAMES;
const adminNames = (ADMIN_NAMES_RAW || 'SUM,유화').split(',').map(s => s.trim()).filter(Boolean);

(async () => {
  console.log('접속 대상 : ' + dbLabel(process.env.DATABASE_URL));
  console.log('UNION_ID  : ' + UNION_ID +
    (process.env.UNION_ID ? '' : '   ⚠ 미설정 → 기본 1(여우별)'));
  console.log('ADMIN_NAMES: ' + adminNames.join(', ') +
    (ADMIN_NAMES_RAW ? '' : '   ⚠ 미설정 → 기본값'));
  console.log();

  const [{ members, active, admins }] = await query(
    'SELECT count(*) AS members, count(*) FILTER (WHERE active) AS active, ' +
    'count(*) FILTER (WHERE is_admin) AS admins FROM members WHERE union_id = $1',
    [UNION_ID]);

  const adminRows = await query(
    'SELECT name FROM members WHERE union_id = $1 AND is_admin ORDER BY name', [UNION_ID]);
  const docs = await query('SELECT key, length(content) AS bytes FROM data_docs ORDER BY key', []);
  const [hist] = await query(
    'SELECT count(DISTINCT snapshot_date) AS days, min(snapshot_date) AS oldest, ' +
    'max(snapshot_date) AS newest FROM member_daily WHERE union_id = $1', [UNION_ID]);

  console.log(`union_id=${UNION_ID} 로스터 : ${members}명 (활성 ${active}, 관리자 ${admins})`);
  console.log('현재 관리자   : ' + (adminRows.map(r => r.name).join(', ') || '없음'));

  // data_docs 만 union_id 컬럼이 없다 — 이 DB 를 공유하면 문서가 서로 덮어써진다.
  console.log(`문서(전체 DB) : ${docs.length}/5` +
    (docs.length ? ' — ' + docs.map(d => d.key).join(', ') : ' — 없음'));
  const missing = ['member.js', 'raid.js', 'character.js', 'solo.js', 'notice.js']
    .filter(k => !docs.some(d => d.key === k));
  if (missing.length) console.log('  없는 문서   : ' + missing.join(', ') + '  (해당 페이지는 데이터 오류)');

  console.log(`데일리 히스토리: ${hist.days}일치` +
    (hist.days > 0 ? ` (${hist.oldest} ~ ${hist.newest})` : ''));

  // 시드를 돌리면 무엇이 바뀔지 미리 보여준다
  const willRevoke = adminRows.map(r => r.name).filter(n => !adminNames.includes(n));
  console.log();
  if (willRevoke.length) {
    console.log('⚠ 지금 `npm run seed` 를 돌리면 관리자 권한이 회수됩니다: ' + willRevoke.join(', '));
    console.log('  ADMIN_NAMES 가 이 유니온 것인지 확인하세요.');
  } else {
    console.log('`npm run seed` 를 돌려도 관리자 구성은 바뀌지 않습니다.');
  }
  process.exit(0);
})().catch(e => { console.error('조회 실패:', e.message || e); process.exit(1); });
