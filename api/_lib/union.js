// api/_lib/union.js — 배포별 유니온 선택
//
// 같은 저장소를 Vercel 프로젝트 여러 개에 연결하고, 프로젝트별 환경변수
// UNION_ID 로 어느 유니온의 데이터(api/_data/<slug>/)를 서빙할지 고른다.
// 미설정이면 'foxstar' — 기존 여우별 프로덕션이 env 추가 없이 그대로 동작.
//
// 형식이 잘못된 UNION_ID 는 foxstar 로 폴백하지 않고 모듈 로드에서 throw
// (fail-fast): 오타 난 신규 유니온 배포가 조용히 여우별 데이터를 서빙하는
// 정보 유출 사고를 막고, 설정 오류가 500 으로 즉시 드러나게 한다.
const path = require('path');

const UNION_ID = process.env.UNION_ID || 'foxstar';
if (!/^[a-z0-9_-]{1,32}$/.test(UNION_ID)) {
  throw new Error('UNION_ID 형식 오류: ' + UNION_ID);
}

const DATA_DIR = path.join(process.cwd(), 'api', '_data', UNION_ID);

module.exports = { UNION_ID, DATA_DIR };
