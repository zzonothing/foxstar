// api/config.js — 유니온 공개 설정(CONFIG) 서빙
//
// config 는 유니온명·카카오링크·로고 등 공개 브랜딩 값이라 인증이 필요 없고,
// login.html 이 미인증 상태에서 로드해야 하므로 api/data.js 의 인증 게이트
// (미인증 = __AUTH_REQUIRED sentinel 불변식)에 예외를 만들지 않고 별도
// 함수로 분리했다. /data/config.js → 이 함수 (vercel.json rewrite).
//
// 변경 전파는 어차피 git 커밋 → 재배포를 타므로 5분 캐시가 실질 지연을
// 만들지 않으면서 페이지 이동마다의 함수 호출을 줄인다.
const fs   = require('fs');
const path = require('path');
const { DATA_DIR } = require('./_lib/union');

let BODY = null;
try { BODY = fs.readFileSync(path.join(DATA_DIR, 'config.js')); } catch (e) {}

// config.js 누락 시 폴백: 일부 소비처(sim.html 등)는 CONFIG 존재를 가드
// 없이 가정하므로 빈 404 대신 최소 객체를 서빙해 페이지가 깨지지 않게 한다.
const FALLBACK = 'const CONFIG = { unionName: "유니온 포털", kakaoUrl: "", logo: "", roleOverride: {}, schedule: { unionRaid: null, soloRaid: null } };\n';

module.exports = function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=3600');
  return res.status(200).send(BODY || FALLBACK);
};
