// api/_lib/union.js — 배포별 유니온 선택
//
// 같은 저장소를 Vercel 프로젝트 여러 개에 연결하고, 프로젝트별 환경변수
// UNION_ID 로 어느 유니온의 데이터(api/_data/<slug>/)를 서빙할지 고른다.
// 미설정이면 'foxstar' — 기존 여우별 프로덕션이 env 추가 없이 그대로 동작.
//
// 형식이 잘못된 UNION_ID(빈 값 포함)는 foxstar 로 폴백하지 않고 모듈 로드에서
// throw (fail-fast): 오설정된 신규 유니온 배포가 조용히 여우별 데이터를 서빙
// 하는 정보 유출 사고를 막고, 설정 오류가 500 으로 즉시 드러나게 한다.
// 폴백은 변수가 아예 없을 때(undefined)만 — Vercel UI 는 빈 값 저장이 가능해
// `|| 'foxstar'` 였다면 빈 값이 검증을 건너뛰고 foxstar 데이터로 새어 나간다.
// 형식은 유효하지만 존재하지 않는 슬러그(오타)는 여기선 알 수 없고,
// api/data.js 의 빈 데이터 디렉터리 검사가 콜드스타트에서 잡는다.
const path = require('path');

const raw = process.env.UNION_ID;
const UNION_ID = raw === undefined ? 'foxstar' : raw;
if (!/^[a-z0-9_-]{1,32}$/.test(UNION_ID)) {
  throw new Error('UNION_ID 형식 오류: ' + JSON.stringify(UNION_ID));
}

const DATA_DIR = path.join(process.cwd(), 'api', '_data', UNION_ID);

module.exports = { UNION_ID, DATA_DIR };
