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

/* ─── 테마 토글 아이콘 (이모지 대신 SVG — OS 별 렌더링 편차 제거) ── */
var THEME_ICON = {
  moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun:  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>'
};
function themeIcon(){ return document.documentElement.classList.contains("dark") ? THEME_ICON.sun : THEME_ICON.moon; }

/* ─── 헤더/네비게이션 주입 (한 곳에서 관리) ───────────────────────
   각 페이지는 <header class="rd-header" id="rdHeader"></header> placeholder 만 둔다.
   active: 현재 페이지 파일명(예: "index.html"). */
var NAV_ITEMS = [
  ["index.html", "홈", "홈"],
  ["notice.html", "공지", "공지"],
  ["raid.html", "유니온레이드", "유레"],
  ["solo.html", "솔로레이드", "솔레"],
  ["shift.html", "시프티패드", "시프티"],
  ["stats.html", "여우별 통계", "통계"],
  ["guide.html", "육성 가이드", "가이드"]
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
        '<button class="rd-toggle" id="themeToggle" title="다크/라이트 모드 전환" aria-label="다크/라이트 모드 전환">' + themeIcon() + '</button>' +
      '</div>' +
      '<nav class="rd-nav" aria-label="주요 메뉴">' + links(false) + '</nav>' +
      '<nav class="rd-nav-mobile" aria-label="주요 메뉴">' + links(true) + '</nav>' +
    '</div>';
  /* 모바일 탭이 넘칠 때(가로 스크롤) 활성 탭을 가운데로 */
  var mnav = mount.querySelector(".rd-nav-mobile");
  var act = mnav ? mnav.querySelector("a.active") : null;
  if (act && mnav.scrollWidth > mnav.clientWidth) {
    mnav.scrollLeft = (act.offsetLeft - mnav.offsetLeft) - (mnav.clientWidth - act.offsetWidth) / 2;
  }
}

/* ─── 테마 토글 (사전 페인트 .dark 는 각 페이지 <head> 인라인 유지) ──
   초기 상태는 head 인라인이 이미 적용한 html.dark 를 따른다 — 저장값뿐
   아니라 시스템 다크모드(prefers-color-scheme) 폴백까지 반영하기 위함.
   토글로 명시 선택하면 localStorage 에 저장되어 이후 시스템 설정보다 우선. */
function syncThemeColor(){
  /* <meta name="theme-color"> 를 실제 적용 테마와 일치시킴 — 정적 메타의
     media 분기는 시스템 설정만 따르므로, 명시 토글 선택을 여기서 반영한다. */
  var color = document.documentElement.classList.contains("dark") ? "#111827" : "#eef1f6";
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  for (var i = 0; i < metas.length; i++) metas[i].setAttribute("content", color);
}
function setupTheme(){
  var html = document.documentElement, btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.innerHTML = themeIcon();
  syncThemeColor();
  btn.addEventListener("click", function(){
    var isDark = html.classList.toggle("dark");
    btn.innerHTML = themeIcon();
    syncThemeColor();
    try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
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

/* ─── URL 쿼리 상태 (공유 가능한 링크) ──────────────────────────
   시즌 등 선택 상태를 ?key=val 로 보존한다. history.replaceState 라
   히스토리를 더럽히지 않고, 새로고침·링크 공유 시 상태가 유지된다. */
function readUrlParam(key){
  try { return new URLSearchParams(location.search).get(key); } catch (e) { return null; }
}
function writeUrlParam(key, val){
  try {
    var u = new URL(location.href);
    if (val == null) u.searchParams.delete(key); else u.searchParams.set(key, val);
    history.replaceState(null, "", u.href);
  } catch (e) {}
}

/* ─── 인증 가드: 필요 시 로그인 페이지로 리다이렉트하고 true 반환 ───
   리다이렉트 중에는 markReady() 가 호출되지 않아 login.html 이 그려질
   때까지 로더가 계속 보이므로, 문구를 바꿔 멈춘 것처럼 보이지 않게 한다.
   (네비게이션이 실제로 멈추면 각 페이지 인라인 워치독이 복구 안내를 띄움) */
function authGuardOrRedirect(){
  if (window.__AUTH_REQUIRED) {
    var sp = document.querySelector("#fstarLoader span");
    if (sp) sp.textContent = "로그인 페이지로 이동 중…";
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

/* ─── 멤버 상세 팝업 빌더 (홈·레이드 공통) ──────────────────────
   index.html·raid.html 이 동일하게 쓰던 buildPopupHTML 을 1곳으로 통합.
   페이지 지역 데이터는 ctx 로 주입한다(동작 보존 — 출력 HTML 동일).
   ctx: { members, ROLE_KO, roleOf, seasonKeys, lvlMaps, raidKeys, OPF }
   전역(UNION·RAID)·공통 헬퍼(barHeights·bossesOf·seasonRaw·charImg…)는 직접 참조. */
function buildMemberPopupHTML(ctx, name, season){
  var members = ctx.members, ROLE_KO = ctx.ROLE_KO, roleOf = ctx.roleOf,
      seasonKeys = ctx.seasonKeys, lvlMaps = ctx.lvlMaps, raidKeys = ctx.raidKeys, OPF = ctx.OPF;

  const cur = members.find(m => m.name === name) || null;
  const roleKo = cur ? (ROLE_KO[roleOf(cur)] || "") : "";
  const syncNow = cur ? cur.syncroLevel : (lvlMaps[parseInt(season.slice(1))] ? lvlMaps[parseInt(season.slice(1))][name] : "—");

  /* 싱크로 변화 (전 시즌) */
  const syncSeasons = seasonKeys.filter(k => UNION[k].rank != null);
  const svVals = syncSeasons.map(k => lvlMaps[k][name] != null ? lvlMaps[k][name] : null);
  const syncH = barHeights(svVals, { floor: 4, span: 86, empty: 2 });
  const syncBars = syncSeasons.map((k, i) => {
    const v = svVals[i], sel = ("S" + k) === season;
    return '<div data-act="popup-season" data-season="S' + k + '" style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;cursor:pointer">' +
      '<div style="font-size:10px;font-weight:700;color:var(--text);margin-bottom:3px" class="tnum">' + (v == null ? "—" : v) + '</div>' +
      '<div style="width:100%;max-width:26px;flex-shrink:0;height:' + syncH[i] + 'px;background:' + (sel ? "var(--bar)" : (v != null ? "var(--bar-l)" : "var(--bar-empty)")) + ';border-radius:4px 4px 0 0"></div>' +
      '<div style="font-size:10px;color:' + (sel ? "var(--blue)" : "var(--dim)") + ';font-weight:700;margin-top:5px">' + k + '</div></div>';
  }).join("");

  /* 스탯 / 거점 (현재 빌드) */
  const hasStats = !!(cur && cur.normal);
  let statsHTML = "", outpostHTML = "";
  if (hasStats) {
    const sc = (label, val, col) => '<div style="background:var(--muted);border:1px solid var(--border);border-radius:10px;padding:10px 6px;text-align:center"><div style="font-size:10px;color:var(--dim);font-weight:700;margin-bottom:3px">' + label + '</div><div style="font-size:13px;font-weight:800;color:' + col + '" class="tnum">' + val + '</div></div>';
    statsHTML = '<div><div class="rd-uplabel" style="margin-bottom:10px">스탯 요약</div><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">' +
      sc("노말", cur.normal, cur.normal === "46-40" ? "var(--red)" : "var(--text)") +
      sc("하드", cur.hard, cur.hard === "46-40" ? "var(--red)" : "var(--text)") +
      sc("타워", cur.tribeTower, cur.tribeTower === 1450 ? "var(--red)" : "var(--text)") +
      sc("오버클럭", cur.overclock >= 51 ? "∞" : cur.overclock, cur.overclock >= 51 ? "var(--red)" : "var(--text)") +
      '</div></div>';
    if (cur.outpost) {
      outpostHTML = '<div><div class="rd-uplabel" style="margin-bottom:10px">거점 연구</div><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">' +
        OPF.map(([label, key]) => { const v = cur.outpost[key]; const isMax = key !== "common" && v === cur.outpost.common;
          return '<div style="display:flex;align-items:center;justify-content:space-between;background:var(--muted);border:1px solid var(--border);border-radius:9px;padding:8px 10px"><span style="font-size:10px;color:var(--sub);font-weight:600">' + label + '</span><span style="font-size:13px;font-weight:800;color:' + (isMax ? "var(--red)" : "var(--ink)") + '" class="tnum">' + (v == null ? "—" : v) + '</span></div>'; }).join("") +
        '</div></div>';
    }
  }

  /* 레이드 (선택 시즌) */
  const rseason = RAID[season] || null;
  const rmember = rseason ? rseason.find(mm => mm.name === name || (cur && mm.openId === cur.blaBlaLinkUId)) : null;
  let rankLabel = "유니온 멤버", total = 0, contrib = "0.00", finalCount = 0, decks = [];
  if (rmember) {
    total = rmember.raids.reduce((a, r) => a + r.totalDamage, 0);
    finalCount = rmember.raids.filter(r => r.isFinalHit).length;
    contrib = (total / (seasonRaw(season) || 1) * 100).toFixed(2);
    const totals = rseason.map(mm => mm.raids.reduce((a, r) => a + r.totalDamage, 0)).sort((a, b) => b - a);
    rankLabel = "유니온 #" + (totals.findIndex(t => t <= total) + 1);
    const bosses = bossesOf(season);
    const byBoss = {};
    rmember.raids.forEach(r => { const sh = bossShort(r.bossName); (byBoss[sh] = byBoss[sh] || []).push(r); });
    bosses.forEach(b => (byBoss[b.short] || []).sort((a, c) => a.bossLevel - c.bossLevel).forEach(r => {
      decks.push({ short: b.short, step: b.minStep, elem: b.elem, dmg: r.totalDamage, final: r.isFinalHit, chars: [...r.squad].sort((x, y) => x.slot - y.slot).map(s => s.name) });
    }));
  } else {
    const us = UNION[parseInt(season.slice(1))];
    if (us) { const rr = [...us.members].sort((a, b) => b.syncroLevel - a.syncroLevel).findIndex(x => x.name === name); if (rr >= 0) rankLabel = "유니온 #" + (rr + 1); }
  }

  const dmgVals = raidKeys.map(sk => { const mm = (RAID[sk] || []).find(x => x.name === name || (cur && x.openId === cur.blaBlaLinkUId)); return { s: sk, v: mm ? mm.raids.reduce((a, r) => a + r.totalDamage, 0) : 0 }; });
  const dmgH = barHeights(dmgVals.map(d => d.v), { floor: 4, span: 86, empty: 2, positiveOnly: true });
  const hasDmgTrend = dmgVals.some(d => d.v > 0);
  const dmgBars = dmgVals.map((d, i) => {
    const sel = d.s === season;
    return '<div data-act="popup-season" data-season="' + d.s + '" style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;cursor:pointer">' +
      '<div style="font-size:9px;font-weight:700;color:var(--text);margin-bottom:3px" class="tnum">' + (d.v ? fmtEok(d.v) : "—") + '</div>' +
      '<div style="width:100%;max-width:26px;flex-shrink:0;height:' + dmgH[i] + 'px;background:' + (sel ? "var(--bar)" : (d.v ? "var(--bar-l)" : "var(--bar-empty)")) + ';border-radius:4px 4px 0 0"></div>' +
      '<div style="font-size:10px;color:' + (sel ? "var(--blue)" : "var(--dim)") + ';font-weight:700;margin-top:5px">' + d.s.slice(1) + '</div></div>';
  }).join("");

  const metricsHTML = rmember ? '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:18px">' +
    [["시즌 총 대미지", fmtEok(total), "var(--blue)"], ["유니온 기여", contrib + "%", "var(--text)"], ["막타", finalCount + "회", "var(--red)"]].map(m =>
      '<div style="background:var(--muted);border:1px solid var(--border);border-radius:10px;padding:9px 11px"><div style="font-size:10px;color:var(--dim);font-weight:700;text-transform:uppercase">' + m[0] + '</div><div style="font-size:15px;font-weight:800;color:' + m[2] + ';margin-top:2px" class="tnum">' + m[1] + '</div></div>').join("") +
    '</div>' : "";

  const decksHTML = decks.length ? '<div><div class="rd-uplabel" style="margin-bottom:12px">사용 덱</div><div style="display:flex;flex-direction:column;gap:8px">' +
    decks.map(d => '<div style="display:flex;flex-direction:column;gap:7px;background:var(--muted);border:1px solid var(--border);border-radius:10px;padding:9px 11px">' +
      '<div style="display:flex;align-items:center;gap:7px">' +
        '<span style="display:inline-flex;align-items:center;justify-content:center;min-width:17px;height:17px;border-radius:4px;background:' + (EL_BG[d.elem] || "var(--muted)") + ';color:' + (EL_COL[d.elem] || "var(--dim)") + ';font-size:10px;font-weight:800;flex-shrink:0">' + d.step + '</span>' +
        '<span style="font-size:12px;font-weight:700;color:var(--text)">' + esc(d.short) + '</span>' +
        (d.elem ? '<span style="font-size:10px;font-weight:700;color:' + (EL_COL[d.elem] || "var(--dim)") + '">[' + d.elem + ']</span>' : "") +
        (d.final ? '<span style="font-size:10px;font-weight:800;color:var(--red)">막타</span>' : "") +
        '<span style="margin-left:auto;font-size:12px;font-weight:800;color:' + (d.final ? "var(--red)" : "var(--text)") + '" class="tnum">' + fmtEok(d.dmg) + '</span>' +
      '</div>' +
      '<div style="display:flex;gap:3px">' + d.chars.map(c => charImg(c, { style: "width:29px;height:29px;border-radius:5px;object-fit:cover" })).join("") + '</div>' +
    '</div>').join("") +
    '</div>' :
    '<div style="padding:14px;text-align:center;color:var(--dim);font-size:12px;font-weight:600;background:var(--muted);border-radius:10px">' + season + ' 시즌 레이드 기록 없음</div>';

  /* 시즌 옵션 */
  const seasonOptions = [...raidKeys].reverse().map(sk => { const rk = UNION[parseInt(sk.slice(1))] ? UNION[parseInt(sk.slice(1))].rank : null; return '<option value="' + sk + '"' + (sk === season ? " selected" : "") + '>' + sk + (rk != null ? " (" + rk + "위)" : "") + '</option>'; }).join("");

  return '<div style="padding:18px 20px 16px;border-bottom:1px solid var(--border);background:linear-gradient(180deg,var(--muted),var(--card))">' +
      '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px">' +
        '<div style="min-width:0"><div style="display:flex;align-items:center;gap:8px"><span style="font-size:20px;font-weight:800;color:var(--text)">' + esc(name) + '</span>' +
          (roleKo ? '<span class="rd-role" style="font-size:11px;padding:2px 9px;background:' + (roleKo === "리더" ? "var(--role-leader-bg)" : "var(--role-officer-bg)") + ';color:' + (roleKo === "리더" ? "var(--role-leader)" : "var(--role-officer)") + '">' + roleKo + '</span>' : "") + '</div>' +
          '<div style="font-size:12px;color:var(--sub);margin-top:4px">' + rankLabel + ' · 싱크로레벨 <b style="color:var(--text)">' + syncNow + '</b></div></div>' +
        '<div style="display:flex;align-items:center;gap:8px;flex-shrink:0"><select class="rd-select" id="rdPopupSeason">' + seasonOptions + '</select>' +
          '<span class="rd-modal-close" data-act="close-popup">✕</span></div>' +
      '</div>' +
    '</div>' +
    '<div class="rd-popup-scroll" style="padding:18px 20px 20px;display:flex;flex-direction:column;gap:18px;max-height:580px;overflow-y:auto">' +
      '<div><div class="rd-uplabel" style="margin-bottom:12px">싱크로레벨 변화</div><div style="display:flex;align-items:flex-end;gap:7px;height:128px">' + syncBars + '</div></div>' +
      statsHTML + outpostHTML +
      '<div style="margin-top:2px;padding-top:18px;border-top:2px solid var(--line)">' +
        '<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px"><span class="rd-sec-bar" style="height:14px"></span><span style="font-size:13px;font-weight:800;color:var(--text)">유니온레이드</span><span style="font-size:11px;font-weight:700;color:var(--blue);background:var(--blue-l);padding:1px 8px;border-radius:999px">' + season + '</span></div>' +
        metricsHTML +
        (hasDmgTrend ? '<div style="margin-bottom:18px"><div class="rd-uplabel" style="margin-bottom:12px">시즌별 총 대미지 추이</div><div style="display:flex;align-items:flex-end;gap:7px;height:128px">' + dmgBars + '</div></div>' : "") +
        decksHTML +
      '</div>' +
    '</div>';
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
