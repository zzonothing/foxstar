// ─────────────────────────────────────────────────────────────────────────────
//  api/_data/foxstar/config.js
//  유니온 공개 설정 — /data/config.js → api/config.js 가 UNION_ID 기반으로 서빙
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  // 유니온 이름 & 카카오 오픈채팅 링크
  unionName: "여우별 유니온",
  kakaoUrl:  "https://open.kakao.com/o/gBwHo1tg",  // 가입 문의 오픈톡방 링크

  // 헤더 로고 + 파비콘 (image/ 하위 경로)
  logo: "image/foxstar.png",

  // 리더/오피서 표기 오버라이드 (index/raid 멤버 팝업의 역할 배지)
  roleOverride: { "유화": "Leader", "SUM": "Officer" },

  // 일정 설정
  // 확정 전: null → "미정" 으로 표시
  // 확정 후: { start: "YYYY-MM-DD", end: "YYYY-MM-DD" } 로 입력
  schedule: {
    unionRaid: null,
    // 예시: unionRaid: { start: "2026-04-11", end: "2026-04-12" },
    soloRaid:  null,
    // 예시: soloRaid:  { start: "2026-04-15", end: "2026-04-21" },
  },
};
