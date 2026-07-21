// ─────────────────────────────────────────────────────────────────────────────
//  api/_data/nzd/config.js
//  나증단 유니온 공개 설정 — /data/config.js → api/config.js 가 UNION_ID 기반 서빙
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  // 유니온 이름 & 카카오 오픈채팅 링크 (링크 미정 시 "" — sim 가입 버튼 숨김)
  unionName: "나증단",
  kakaoUrl:  "",

  // 헤더 로고 + 파비콘 (image/nzd.png 준비되면 경로 기입 — 빈 값이면 기본 로고)
  logo: "",

  // 리더/오피서 표기 오버라이드 (닉네임 → "Leader" | "Officer")
  roleOverride: {},

  // 일정 설정
  // 확정 전: null → "미정" 으로 표시
  // 확정 후: { start: "YYYY-MM-DD", end: "YYYY-MM-DD" } 로 입력
  schedule: {
    unionRaid: null,
    soloRaid:  null,
  },
};
