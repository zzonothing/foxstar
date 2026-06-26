/* ═══════════════════════════════════════════════════════════════
   여우별 유니온 포털 — 공통 스크립트 (비게이트 정적 파일, 비밀 없음)
   nav 5개 페이지가 데이터 스크립트 뒤에 로드해 공유한다.
   - 호출부 유지를 위해 헬퍼/상수는 전역(bare global)으로 선언한다.
   - 데이터 파일(api/_data) 의 auth 게이트와 무관(여긴 순수 UI 로직).
   ═══════════════════════════════════════════════════════════════ */

/* ─── 상수 ─────────────────────────────────────────────────────── */
var OFFSET = 35066789198;
var ELEM_TAG = {"Z.E.U.S.":"철갑","H.S.T.A.":"수냉","D.M.T.R.":"풍압","A.N.M.I.":"작열","A.N.M.I":"작열","P.S.I.D.":"전격"};
var EL_COL = {수냉:"var(--el-water)",작열:"var(--el-fire)",철갑:"var(--el-iron)",전격:"var(--el-elec)",풍압:"var(--el-wind)"};
var EL_BG  = {수냉:"var(--elbg-water)",작열:"var(--elbg-fire)",철갑:"var(--elbg-iron)",전격:"var(--elbg-elec)",풍압:"var(--elbg-wind)"};

/* ─── 순수 헬퍼 ───────────────────────────────────────────────── */
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"})[c]; }); }
function imgOf(name){ return "image/" + name.replace(" : ", "_").replace(/ /g, "%20") + ".webp"; }
function fmtEok(num){
  if (num == null || num === 0) return "—";
  var neg = num < 0; num = Math.abs(num);
  var jo = Math.floor(num / 1e12);
  var eok = Math.round((num - jo * 1e12) / 1e8);
  var e = eok.toLocaleString("en-US");
  return (neg ? "-" : "") + (jo > 0 ? (jo + "조 " + e + "억") : (e + "억"));
}
/* 순위 스타일: 1·2·3위 금·은·동 강조 없이 전부 동일(평범) — 사용자 결정 */
function medal(i){ return { bg: "var(--muted)", col: "var(--sub)" }; }
function bossShort(bn){ return bn.replace(/\s*\[[^\]]*\]\s*$/, "").trim(); }
function bossElem(bn){ var m = bn.match(/\[([^\]]+)\]\s*$/); return m ? (ELEM_TAG[m[1]] || "") : ""; }

var _bossCache = {};
function bossesOf(season){
  if (_bossCache[season]) return _bossCache[season];
  var map = {};
  (RAID[season] || []).forEach(function(mm){ mm.raids.forEach(function(r){
    var sh = bossShort(r.bossName);
    if (!map[sh]) map[sh] = { short: sh, elem: bossElem(r.bossName), minStep: r.step, hits: 0, low: 0, high: 0 };
    var b = map[sh];
    b.minStep = Math.min(b.minStep, r.step);
    b.hits++;
    if (r.bossLevel >= 4) b.high++; else b.low++;
  }); });
  var arr = Object.values(map).sort(function(a, b){ return a.minStep - b.minStep; });
  _bossCache[season] = arr;
  return arr;
}
function seasonRaw(sk){ return (RAID[sk] || []).reduce(function(a, mm){ return a + mm.raids.reduce(function(x, r){ return x + r.totalDamage; }, 0); }, 0); }

/* 캐릭터 이미지 태그(alt·lazy·onerror 일괄). opts: {style, cls, title=false 로 title 생략} */
function charImg(name, opts){
  opts = opts || {};
  return '<img src="' + imgOf(name) + '" alt="' + esc(name) + '"'
    + (opts.title === false ? '' : ' title="' + esc(name) + '"')
    + (opts.cls ? ' class="' + opts.cls + '"' : '')
    + (opts.style ? ' style="' + opts.style + '"' : '')
    + ' loading="lazy" onerror="this.style.opacity=0.15">';
}

/* ─── 차트 스케일 공용 헬퍼 ─────────────────────────────────────
   선형 최소~최대 막대 높이. 기존 인라인 공식을 그대로 재현한다.
   values: 숫자 배열(null/≤0 는 empty 로 취급 가능)
   opts:
     floor   기준 px(기본 4)        span    가변 범위 px(기본 86)
     empty   empty 항목 px(기본 2)  min     하한 클램프 px(기본 3)
     positiveOnly  ≤0 을 empty 로 보고 min/max 계산에서 제외(대미지 추이)
     flatLow       전부 동일할 때 full 대신 base 사용(점수밴드, (max-min)||1 형)
   ※ 막대 div 는 반드시 flex-shrink:0(또는 .rd-bar)로 렌더 — 라벨에 눌려
     짧아지는 클램핑 방지(직전 비례 작업의 핵심). */
function barHeights(values, opts){
  opts = opts || {};
  var floor  = opts.floor  != null ? opts.floor  : 4;
  var span   = opts.span   != null ? opts.span   : 86;
  var emptyH = opts.empty  != null ? opts.empty  : 2;
  var minH   = opts.min    != null ? opts.min    : 3;
  function isEmpty(v){ return v == null || (opts.positiveOnly && v <= 0); }
  var valid = values.filter(function(v){ return !isEmpty(v); });
  var lo = valid.length ? Math.min.apply(null, valid) : 0;
  var hi = valid.length ? Math.max.apply(null, valid) : 1;
  var d = hi - lo;
  return values.map(function(v){
    if (isEmpty(v)) return emptyH;
    var t = d > 0 ? (v - lo) / d : (opts.flatLow ? 0 : 1);
    return Math.max(minH, Math.round(floor + t * span));
  });
}

/* ─── 헤더/네비게이션 주입 (한 곳에서 관리) ───────────────────────
   각 페이지는 <header class="rd-header" id="rdHeader"></header> placeholder 만 둔다.
   active: 현재 페이지 파일명(예: "index.html"). */
var NAV_ITEMS = [
  ["index.html", "홈", "홈"],
  ["raid.html", "유니온레이드", "유레"],
  ["solo.html", "솔로레이드", "솔레"],
  ["shift.html", "시프티패드", "시프티"],
  ["stats.html", "여우별 통계", "통계"]
];
function renderHeader(active){
  var mount = document.getElementById("rdHeader");
  if (!mount) return;
  var name = (typeof CONFIG !== "undefined" && CONFIG.unionName) ? CONFIG.unionName : "여우별 유니온";
  function links(mobile){
    return NAV_ITEMS.map(function(n){
      var on = (n[0] === active) ? ' class="active"' : '';
      var ariaCur = (n[0] === active) ? ' aria-current="page"' : '';
      return '<a href="' + n[0] + '"' + on + ariaCur + '>' + (mobile ? n[2] : n[1]) + '</a>';
    }).join("");
  }
  mount.innerHTML =
    '<div class="rd-grad"></div>' +
    '<div class="container">' +
      '<div class="rd-head-inner">' +
        '<div class="rd-brand">' +
          '<img src="image/foxstar.png" alt="여우별 유니온" width="38" height="38" />' +
          '<div>' +
            '<div class="rd-eyebrow">승리의 여신: 니케 · UNION PORTAL</div>' +
            '<div class="rd-title" id="headerTitle">' + esc(name) + '</div>' +
          '</div>' +
        '</div>' +
        '<button class="rd-toggle" id="themeToggle" title="다크/라이트 모드 전환" aria-label="다크/라이트 모드 전환">🌙</button>' +
      '</div>' +
      '<nav class="rd-nav" aria-label="주요 메뉴">' + links(false) + '</nav>' +
      '<nav class="rd-nav-mobile" aria-label="주요 메뉴">' + links(true) + '</nav>' +
    '</div>';
}

/* ─── 테마 토글 (사전 페인트 .dark 는 각 페이지 <head> 인라인 유지) ── */
function setupTheme(){
  var html = document.documentElement, btn = document.getElementById("themeToggle");
  if (!btn) return;
  if (localStorage.getItem("theme") === "dark") { html.classList.add("dark"); btn.textContent = "☀️"; }
  btn.addEventListener("click", function(){
    var isDark = html.classList.toggle("dark");
    btn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* ─── 우클릭/단축키 차단 (의도된 정책) ──────────────────────────── */
function lockClipboard(){
  document.addEventListener("contextmenu", function(e){ e.preventDefault(); });
  document.addEventListener("keydown", function(e){
    if (e.key === "F12") { e.preventDefault(); return; }
    if (e.ctrlKey && e.shiftKey && ["I","i","J","j","C","c"].includes(e.key)) { e.preventDefault(); return; }
    if (e.ctrlKey && ["u","U","s","S"].includes(e.key)) { e.preventDefault(); return; }
  });
}

/* ─── 인증 가드: 필요 시 로그인 페이지로 리다이렉트하고 true 반환 ─── */
function authGuardOrRedirect(){
  if (window.__AUTH_REQUIRED) {
    location.replace("/login.html?return=" + encodeURIComponent(location.pathname + location.search));
    return true;
  }
  return false;
}

/* ─── 렌더 완료 표시(로더 숨김 + 본문 노출) ─────────────────────── */
function markReady(){ document.body.classList.add("ready"); }

/* ─── 모달 접근성 + 공통 열기/닫기 ─────────────────────────────── */
var _modalPrevFocus = null;
function openModal(overlay, opts){
  if (!overlay) return;
  opts = opts || {};
  _modalPrevFocus = document.activeElement;
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  if (opts.label) overlay.setAttribute("aria-label", opts.label);
  overlay.style.display = opts.display || "flex";
  document.body.style.overflow = "hidden";
  var focusEl = overlay.querySelector(".rd-modal") || overlay;
  if (focusEl) {
    if (!focusEl.hasAttribute("tabindex")) focusEl.setAttribute("tabindex", "-1");
    try { focusEl.focus({ preventScroll: true }); } catch (e) {}
  }
}
function closeModal(overlay){
  if (!overlay) return;
  overlay.style.display = "none";
  document.body.style.overflow = "";
  if (_modalPrevFocus && _modalPrevFocus.focus) { try { _modalPrevFocus.focus({ preventScroll: true }); } catch (e) {} }
  _modalPrevFocus = null;
}

/* ─── 로딩/에러/빈 상태 (B1) ───────────────────────────────────── */
function showDataError(msg){
  document.body.classList.add("ready");
  var host = document.getElementById("rdContent")
    || document.querySelector("main .container")
    || document.body;
  host.innerHTML =
    '<div class="fstar-error" role="alert">' +
      '<div class="fstar-error-emoji" aria-hidden="true">⚠️</div>' +
      '<div class="fstar-error-title">데이터를 불러오지 못했어요</div>' +
      '<div class="fstar-error-desc">' + esc(msg || "네트워크 상태를 확인한 뒤 새로고침 해주세요.") + '</div>' +
      '<button class="fstar-error-btn" type="button" onclick="location.reload()">새로고침</button>' +
    '</div>';
}
function emptyState(msg){
  return '<div class="fstar-empty">' + esc(msg || "표시할 데이터가 없어요.") + '</div>';
}
