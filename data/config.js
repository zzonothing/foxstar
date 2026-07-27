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
//  새 유니온을 추가하려면 SITES 에 항목 하나만 늘리면 된다. hosts 는 호스트명의
//  '접두어' 목록이다 — 프리뷰 배포가 <프로젝트명>-git-<브랜치>-<팀>.vercel.app
//  형태라 접두어여야 프로덕션과 프리뷰가 함께 잡힌다.
//
//  ★ 접두어는 **도메인이 아니라 Vercel 프로젝트 이름**을 기준으로 잡을 것.
//    프로덕션 도메인은 프로젝트 이름과 다르게 지정할 수 있고 나증단이 그 경우다 —
//    nzd.vercel.app 은 외부 사용자가 선점해 프로덕션이 nzdunion.vercel.app 이다.
//    그래도 프리뷰 URL 은 언제나 프로젝트 이름으로 시작하므로, 접두어 하나가
//    프로덕션(nzdunion…)과 프리뷰(nzd-git-…)를 함께 잡는다.
//    프로젝트 이름으로 시작하지 않는 커스텀 도메인을 붙였다면 hosts 에 추가할 것.
//
//  ★ og:* 메타태그는 여기서 못 고친다 — 크롤러(카카오톡 등)는 JS 를 실행하지
//    않으므로 index.html 의 정적 값이 그대로 쓰인다. 그래서 og 는 유니온 이름을
//    빼고 중립으로 두었다. 유니온별 미리보기가 필요해지면 index.html 을 함수로
//    서빙하거나 배포별 브랜치를 나누는 수밖에 없다.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = (function () {
  // 유니온별로 끌 수 있는 메뉴. 여기 적힌 키를 site.features 에 false 로 두면
  // nav 에서 사라지고, 주소로 직접 열어도 '사용하지 않는 메뉴' 안내가 뜬다.
  // 홈(index)은 착지 페이지라 끌 수 없다. 다시 켜려면 false 를 지우면 된다.
  //
  // ※ 이 파일은 게이트를 타지 않는 공개 정적 파일이다 — 기능 토글은 비밀이
  //   아니라 UI 노출 제어일 뿐이며, 데이터 자체는 api/data.js 인증이 지킨다.
  var FEATURE_KEYS = ["notice", "raid", "submit", "solo",
                      "shift", "stats", "history", "guide"];

  var SITES = [
    {
      // Vercel 프로젝트 foxstar — foxstar.vercel.app
      hosts:     ["foxstar"],
      unionName: "여우별 유니온",
      kakaoUrl:  "https://open.kakao.com/o/gBwHo1tg",  // 가입 문의 오픈톡방 링크
      logo:      "image/foxstar.png",
      // features 생략 = 전부 켜짐
    },
    {
      // Vercel 프로젝트 nzd — 프로덕션 nzdunion.vercel.app · 프리뷰 nzd-git-… 둘 다 커버
      hosts:     ["nzd"],
      unionName: "나증단",
      kakaoUrl:  "",                  // 오픈톡방 링크가 정해지면 채울 것
      logo:      "image/foxstar.png", // image/nzd.png 를 넣으면 여기만 교체
      features:  { notice: false, submit: false, solo: false },
    },
  ];
  // 알 수 없는 호스트(localhost·vercel dev·미등록 커스텀 도메인)의 기본값
  var DEFAULT_SITE = SITES[0];

  var host = (typeof location !== "undefined" && location.hostname) || "";
  var site = DEFAULT_SITE;
  for (var i = 0; i < SITES.length; i++) {
    for (var j = 0; j < SITES[i].hosts.length; j++) {
      if (host.indexOf(SITES[i].hosts[j]) === 0) { site = SITES[i]; i = SITES.length; break; }
    }
  }

  // 알려진 키를 전부 채워 둔다 — 소비자가 기본값 처리를 안 해도 되게.
  var features = {};
  for (var k = 0; k < FEATURE_KEYS.length; k++) {
    var key = FEATURE_KEYS[k];
    features[key] = !(site.features && site.features[key] === false);
  }

  return {
    unionName: site.unionName,
    kakaoUrl:  site.kakaoUrl,
    logo:      site.logo,
    features:  features,

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
