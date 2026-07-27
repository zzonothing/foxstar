// ─────────────────────────────────────────────────────────────────────────────
//  data/config.js
//  유니온 기본 설정 — 배포(호스트)별로 갈린다
//
//  한 저장소를 여러 Vercel 프로젝트가 같은 브랜치에서 배포하고, 각 배포는 자기
//  Neon 프로젝트를 본다. 이 파일은 게이트를 타지 않는 공개 정적 파일이라 CDN 이
//  그대로 내려준다 — 서버 env(UNION_ID 등)를 읽을 수 없으므로 브랜딩은
//  location.hostname 으로 고른다. (api/data.js 처럼 함수로 바꿔 env 를 읽게 하면
//  Hobby 12개 함수 슬롯을 하나 더 먹고, 모든 페이지의 로딩 경로에 요청이 하나
//  붙는다 — 이 파일은 전 페이지가 맨 처음 로드하는 파일이라 특히 비싸다.)
//
//  새 유니온을 추가하려면 SITES 에 항목 하나만 늘리면 된다. 키는 호스트명의
//  '접두어' 라서 프리뷰 배포(<key>-git-<branch>-<team>.vercel.app)도 함께 잡힌다.
//
//  ★ og:* 메타태그는 여기서 못 고친다 — 크롤러(카카오톡 등)는 JS 를 실행하지
//    않으므로 index.html 의 정적 값이 그대로 쓰인다. 그래서 og 는 유니온 이름을
//    빼고 중립으로 두었다. 유니온별 미리보기가 필요해지면 index.html 을 함수로
//    서빙하거나 배포별 브랜치를 나누는 수밖에 없다.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = (function () {
  var SITES = {
    // 여우별 — https://foxstar.vercel.app
    foxstar: {
      unionName: "여우별 유니온",
      kakaoUrl:  "https://open.kakao.com/o/gBwHo1tg",  // 가입 문의 오픈톡방 링크
      logo:      "image/foxstar.png",
    },
    // 나증단 — https://nzdunion.vercel.app
    nzdunion: {
      unionName: "나증단",
      kakaoUrl:  "",                    // 오픈톡방 링크가 정해지면 채울 것
      logo:      "image/foxstar.png",   // image/nzdunion.png 를 넣으면 여기만 교체
    },
  };
  // 알 수 없는 호스트(localhost·vercel dev·커스텀 도메인 추가 전)의 기본값
  var DEFAULT_KEY = "foxstar";

  var host = (typeof location !== "undefined" && location.hostname) || "";
  var key = DEFAULT_KEY;
  for (var k in SITES) {
    if (Object.prototype.hasOwnProperty.call(SITES, k) && host.indexOf(k) === 0) { key = k; break; }
  }
  var site = SITES[key];

  return {
    unionName: site.unionName,
    kakaoUrl:  site.kakaoUrl,
    logo:      site.logo,

    // 일정 설정 — 게임 전역이라 유니온 공통이다.
    // 확정 전: null → "미정" 으로 표시
    // 확정 후: { start: "YYYY-MM-DD", end: "YYYY-MM-DD" } 로 입력
    schedule: {
      unionRaid: null,
      // 예시: unionRaid: { start: "2026-04-11", end: "2026-04-12" },
      soloRaid:  null,
      // 예시: soloRaid:  { start: "2026-04-15", end: "2026-04-21" },
    },
  };
})();
