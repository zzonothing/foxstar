# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A password-gated Korean-language fan portal for unions in the mobile game *승리의 여신: 니케* (Goddess of Victory: Nike). Deployed as a static site with serverless functions on Vercel. **Multi-union**: the same repo/`main` branch backs one Vercel project per union (e.g. 여우별 → https://foxstar.vercel.app/); the per-project env var `UNION_ID` selects which union's data directory (`api/_data/<slug>/`) that deployment serves (see "Multi-union deployment" below).

No build step, no package.json, no tests, no linter. The site is plain HTML/CSS/vanilla JS with Node.js serverless functions: `api/auth.js` (login), `api/data.js` (gates the `member.js`/`raid.js`/`character.js`/`solo.js`/`notice.js` data files), `api/sim.js` (gates the damage-simulator JSON under `api/_data/<slug>/sim/`), `api/config.js` (serves the union's public `CONFIG` without auth), and `api/notice.js` (admin notice CRUD — writes `api/_data/<slug>/notice.js` back to the repo via the GitHub Contents API). `api/_lib/union.js` resolves `UNION_ID` (default `foxstar` only when the env var is truly absent; a present-but-malformed value — empty string included — throws at module load, fail-fast so a misconfigured deployment can never silently fall back to serving 여우별 data; a well-formed but nonexistent slug is caught by `api/data.js`, which throws at module load when the union's data directory yields zero files). Front-end pages share one script, `js/common.js` (helpers, header/nav injection, theme toggle, auth guard, modal + member-popup builder, URL-state helpers).

## Commands

- **Local dev** (runs static files + serverless functions together): `vercel dev`
- **Deploy preview**: `vercel`
- **Deploy production**: `vercel --prod`

Required environment variables (set per Vercel project or `.env.local`):
- `UNION_ID` — which union this deployment serves (`api/_data/<UNION_ID>/`); defaults to `foxstar` when unset
- `ACCESS_KEY` — the password users enter at the login overlay (**must differ per union**)
- `ADMIN_KEY` — the admin password (grants notice write access; must differ per union)
- `SESSION_SECRET` — HMAC secret for session cookies (falls back to `ACCESS_KEY` if unset; must differ per union)
- `SESSION_EPOCH` — optional unix-ms timestamp; tokens issued before this are rejected (use to force logout of all sessions after rotating secrets)
- `GH_TOKEN` / `GH_REPO` / `GH_BRANCH` — used by `api/notice.js` to commit notice updates (defaults: `zzonothing/foxstar` / `main`); do not put `GH_TOKEN` in `.env.local` unless you want local notice writes to hit the real repo

## Architecture

### Auth + data-gating model (the non-obvious core)

Sensitive data files (`member.js`, `raid.js`, `character.js`, `solo.js`, `notice.js`, and the simulator JSON under `sim/`) are **not** static assets. They live in `api/_data/<slug>/` per union (underscore prefix keeps Vercel from serving them as static; `api/_lib/union.js` picks the directory from `UNION_ID`). The flow:

1. HTML pages include them naively: `<script src="data/member.js"></script>` (or `<script src="data/sim/union.json">`-style for the simulator).
2. `vercel.json` rewrites `/data/{member,raid,character,solo,notice}.js` → `/api/data?file=<name>`, and `/data/sim/*` → `/api/sim?file=<name>`. (Separately, `/data/config.js` → `/api/config`, which is deliberately unauthenticated — see Page layout.)
3. `api/data.js` and `api/sim.js` both check the `fstar_session` cookie (HMAC-SHA256 over a timestamp, 1-day expiry, verified with `crypto.timingSafeEqual`) and whitelist the exact filenames they will serve (`api/sim.js` additionally regex-validates the `detail/<uid>.json` path). `api/data.js` also implements **sliding session renewal**: on a valid request whose token is older than 12h it re-issues the cookie (`sessionCookie()` in `api/_lib/session.js`), so members who visit at least daily stay logged in and only >24h-idle sessions see the login page again. `SESSION_EPOCH` force-logout still applies to renewed tokens. On **authenticated** requests both serve the file from `api/_data/` with `ETag` + `Cache-Control: private, no-cache` (see Caching below); `api/data.js` uses `Content-Type: application/javascript`, `api/sim.js` uses `application/json`. They differ on **unauthenticated** requests:
   - **`api/data.js`** returns `200 OK` with body `window.__AUTH_REQUIRED=true;` and `Cache-Control: no-store`. It is deliberately `200` (not 401) so the `<script src>` tag still executes and sets the sentinel global.
   - **`api/sim.js`** returns `401` with JSON `{ error: 'auth required' }` and `Cache-Control: no-store`. Its data is loaded by `fetch()` (not `<script>`), so there is no sentinel to set — the page just gets a failed fetch.
4. Each HTML page guards its main script with `js/common.js`'s `authGuardOrRedirect()`: if `window.__AUTH_REQUIRED` is set it **redirects to `/login.html?return=<path+search>`** via `location.replace()` and returns `true`. Pages wrap their main logic in `} else if (!authGuardOrRedirect()) { try { … } catch { showDataError() } }` (search for the closing comment `} // else if (!authGuardOrRedirect())` near the end of the file). `sim.html` is the exception — it does not load `common.js` and still uses an inline `window.__AUTH_REQUIRED` check (search for `} // if (!window.__AUTH_REQUIRED)`). Note `sim.html`'s redirect is still driven by the **sentinel**, not by the sim endpoint's 401: it loads `member.js`/`character.js` via `<script src>` (through `api/data.js`), so an unauthenticated visit sets `__AUTH_REQUIRED` and redirects before the `api/sim.js` fetches ever matter.
5. `/login.html` is a standalone minimal page (no header, no sticky/fixed layout, no view-transition, no speculation rules, no html2canvas). It POSTs the password to `/api/auth` (`api/auth.js`), which sets the `fstar_session` cookie on success; the page then `location.replace()`s to the validated `return` path. The `return` parameter is whitelisted via `ALLOWED_PATHS` to `{/, /index.html, /notice.html, /raid.html, /solo.html, /shift.html, /stats.html, /sim.html, /guide.html}` (path part only; a query string like `?s=S35` is allowed) to prevent open-redirect.

The redirect-to-dedicated-page approach (instead of an in-page overlay) was chosen to work around an iOS 26 Safari bug where `visualViewport.offsetTop` doesn't reset after keyboard dismissal, causing `position: fixed` / `position: sticky` elements (and the whole page layout) to become misaligned during password-input focus. The login page has no fixed/sticky positioning so it bypasses the bug.

### 인앱 브라우저 우회 + 로딩 워치독 (전 페이지 공통 인라인 블록)

카카오톡 인앱 웹뷰(안드로이드 WebView)는 쿠키 저장소가 일반 브라우저와 분리돼 있어 항상 미인증 → 로그인 리다이렉트 경로를 타는데, 그 경로 위의 요청/네비게이션 하나만 멈춰도 `#fstarLoader` 스피너가 무한 표시되는 사고가 있었다(카카오톡 링크 무한로딩 제보의 원인). 대응으로 **모든 게이트 페이지(`sim.html` 포함, `login.html` 제외)의 `<head>`에 동일한 인라인 부트스트랩 블록**이 들어 있다(주석 `카카오톡 인앱 우회 + 로딩 워치독`으로 검색):

1. **카카오톡 인앱 감지 시** `kakaotalk://web/openExternal` 스킴으로 기본 브라우저를 연다(웹뷰 세션당 1회만 — `sessionStorage.fstarKkEsc` 플래그). 실패해도 페이지는 그대로 계속 로드된다.
2. **워치독**: 10초 내 `body`에 `.ready`가 붙지 않으면 `window.__fstarShowError()`가 로더를 복구 안내(다시 시도 / 기본 브라우저에서 열기 / 로그인 페이지로)로 교체한다. 늦게라도 로드가 완료되면 `body.ready #fstarLoader{display:none}` 규칙이 안내를 자동으로 치운다. `__fstarShowError`는 각 페이지 가드의 인라인 폴백(`common.js` 로드 실패 시)으로도 쓰인다.

편집 규칙: 이 블록은 **common.js·데이터 스크립트가 전부 실패해도 동작해야 하는 최후 방어선**이다. (a) 외부 파일에 의존하지 말 것, (b) 구형 WebView 대비 ES5 문법만 쓸 것, (c) 수정 시 전 페이지에 동일하게 반영할 것. `login.html`에는 넣지 않는다 — 인앱 안에서 로그인을 마친 사용자를 매번 다시 밖으로 내보내게 되고, 로그인 페이지는 구조 최소화 원칙(iOS 26 버그)도 있다.

Google Fonts CSS는 전 페이지에서 `media="print" onload="this.media='all'"` 패턴으로 **비-렌더블로킹**으로 로드한다. 렌더블로킹 `<link>`로 되돌리지 말 것 — fonts.googleapis.com 요청이 멈추면 페이지 전체(특히 리다이렉트 도착지 `login.html`)가 영영 안 그려지는 단일 실패점이었다.

Consequences for editing:
- Never move the sensitive data files out of `api/_data/` — they'd become directly fetchable.
- The auth guard `} else if (!authGuardOrRedirect()) { … }` wraps the entire main script on each HTML page. When editing main-page JS, keep the brace balance intact (the closing `}` is far from the opening; search for the comment `} // else if (!authGuardOrRedirect())` to find it).
- Keep `/login.html` structurally minimal. Do **not** add a sticky header, view-transition, speculation rules, or `position: fixed` elements — those bring the iOS 26 bug back.
- When adding a new top-level page: (1) add its path to the `ALLOWED_PATHS` whitelist in `login.html`, (2) add it to `NAV_ITEMS` in `js/common.js` if it should appear in the nav, (3) load `js/common.js` and call `authGuardOrRedirect()` in the page's main-script guard (copy the pattern from `index.html`/`raid.html`), and (4) copy the `카카오톡 인앱 우회 + 로딩 워치독` inline block and the non-render-blocking Google Fonts `<link>` into its `<head>`.
- Vercel functions use CommonJS (`module.exports = function handler(req, res) {}`), not ES modules.
- `js/common.js` and `css/style.css` are cached for a day (`vercel.json` `/js/*`·`/css/*` headers) — when you change either, bump its `?v=N` query on **every** page that references it (`<script src="js/common.js?v=N">` on the 7 nav pages; `<link href="css/style.css?v=N">` on all pages **including `sim.html`**) so browsers refetch. Keep the version identical across pages — a mismatch means pages pick up a CSS/JS change on different days.

### Multi-union deployment (멀티 유니온)

One repo, one `main` branch, N Vercel projects — each project sets `UNION_ID` and serves only `api/_data/<UNION_ID>/`. The deployment **is** the tenant boundary: there is no union id in cookies or URLs, and auth/session code is union-agnostic.

Adding a new union (checklist):

1. Create `api/_data/<slug>/` with `config.js` (unionName/kakaoUrl/logo/roleOverride/schedule) plus skeleton data files: `member.js` (`const UNION = {};`), `raid.js` (`const RAID = {};`), `character.js` (`const CHARACTERS = {};`), `solo.js` (`const SOLO = {};`), `notice.js` (`const NOTICE = [];`). `sim/` is optional. Slug must match `[a-z0-9_-]{1,32}`.
2. Add the union logo `image/<slug>.png` (keep it ≤100KB) and point `CONFIG.logo` at it. The logo is technically optional: an empty `CONFIG.logo` makes the header/favicon fall back to `image/foxstar.png` (`renderHeader` in `js/common.js`, plus `sim.html`'s own header), i.e. the union shows 여우별 branding until a real logo is set.
3. Commit to `main` (existing union deployments redeploy too — harmless; their data is unchanged).
4. Create a new Vercel project from this same GitHub repo (production branch `main`, default build settings).
5. Set env vars on the new project: `UNION_ID=<slug>` (must be non-empty — an empty or malformed value makes every function fail with 500 by design) plus fresh `ACCESS_KEY`/`ADMIN_KEY`/`SESSION_SECRET` (never reuse another union's — reuse would share passwords across unions) and `GH_TOKEN` for notices. `GH_REPO`/`GH_BRANCH` can stay default.
6. Verify: login → each page renders (skeleton data shows the error card until real data is imported — that's the `showDataError()` path, not a crash) → write/delete one test notice.

Notes:

- A notice write from **any** union commits to `main`, which redeploys **all** projects connected to the repo. This is normal (sessions are stateless HMAC cookies and survive redeploys); notice commit messages carry a `[<UNION_ID>]` prefix so the history stays readable.
- `api/data.js` bundles all unions' data (`includeFiles: api/_data/**`, ~14MB per union uncompressed) — fine for a dozen-plus unions against Vercel's 250MB function limit; runtime memory only loads the deployment's own union.
- Set `UNION_ID=foxstar` explicitly on the original foxstar project (it works unset via the default, but explicit is clearer).
- **The repo's visibility is the real data boundary**: member data (UIDs, nicknames, records) lives in this repo, so if the repo is public, the site's password gate does not protect it. Keep the repo private.

### Page layout

Standalone HTML files share `css/style.css` and `js/common.js`. There is no bundler; pages still hold most of their feature logic inline, but cross-cutting pieces (header/nav, theme, auth guard, the member-detail popup, chart/URL helpers) live in `js/common.js`. The seven nav pages are listed in `NAV_ITEMS` in `js/common.js`:

| Page         | Role                          | Loads data files                                  |
|--------------|-------------------------------|---------------------------------------------------|
| `index.html` | Home / member roster          | `config.js`, `member.js`, `raid.js`               |
| `notice.html`| Union notices (공지)          | `config.js`, `notice.js`                          |
| `raid.html`  | Union raid records            | `config.js`, `member.js`, `raid.js`               |
| `solo.html`  | Solo raid leaderboard / decks | `config.js`, `solo.js`                            |
| `shift.html` | Shifty-pad (character view)   | `config.js`, `member.js`, `character.js`          |
| `stats.html` | Per-character statistics      | `config.js`, `member.js`, `character.js`          |
| `guide.html` | Union-raid cultivation guide  | `config.js`, `raidGuide.js`, `member.js`, `character.js`           |

Two pages sit outside the nav: `login.html` (the auth gate) and `sim.html` (a standalone damage simulator that loads the `data/sim/*` JSON; it does **not** load `js/common.js`).

`data/raidGuide.js` is the only truly static, public data file — it holds `RAID_GUIDE`, the manually tuned tier/role cultivation rules `guide.html` reads (no union name inside; shared by all unions as a template). The union `CONFIG` is **not** static anymore: it lives per union at `api/_data/<slug>/config.js` and `/data/config.js` is rewritten to `api/config.js`, which serves it **without auth** (login.html loads it pre-login) with `Cache-Control: public, max-age=300, stale-while-revalidate=3600`. `CONFIG = { unionName, kakaoUrl, logo, roleOverride, schedule: { unionRaid, soloRaid } }` — `logo` is the header-logo/favicon path (`image/<slug>.png`, applied by JS after CONFIG loads), `roleOverride` maps member nicknames to `"Leader"`/`"Officer"` badges (consumed by index/raid), and the schedule fields are `null` until confirmed. Do not fold config back into `api/data.js` — its unauthenticated-response contract is the `__AUTH_REQUIRED` sentinel, and adding a "public file" exception there weakens the gate.

The home (`index.html`) member popup and the raid (`raid.html`) member popup are the **same** component: `buildMemberPopupHTML(ctx, name, season)` in `js/common.js`. Each page passes a small `POPUP_CTX = { members, ROLE_KO, roleOf, seasonKeys, lvlMaps, raidKeys, OPF }` (page-local data); the function reads the `UNION`/`RAID` globals and common helpers directly. Edit the popup once, in `common.js`.

### Data shapes

- `UNION` (from `member.js`): object keyed by season number as string, e.g. `UNION["40"]`. Each entry is `{ rank?, members: [...] }`. Entries per member always include `name`, `syncroLevel`, `uid`, `blaBlaLinkUId`, and optionally `role: "Leader" | "Officer"`. The **latest season only** also includes per-member gameplay fields: `normal`, `hard`, `tribeTower`, `overclock`, `outpost: { common, attack, defense, support, missilis, elysion, tetra, pilgrim, abnormal }`. To find the latest season use `Math.max(...Object.keys(UNION).map(Number))` (pages use `Object.keys(UNION).map(Number).sort((a,b)=>a-b)` and take the last element).
- `RAID` (from `raid.js`): keyed by `"S<season>"` (e.g. `"S35"`).
- `CHARACTERS` (from `character.js`): keyed by `uid`, values are character arrays for the latest season only. (Note the global is plural — `CHARACTERS`, not `CHARACTER`.)
- `SOLO` (from `solo.js`): keyed by `"S<season>"` (e.g. `"S37"`). Each entry is `{ season, bossName, element, members: [...] }`; each member has `uid`, `nickname`, `soloRank` (1–200 as a number, 201+ as a `"N.NN%"` string), `totalScore`, and `decks[]` (squad snapshots frozen at raid time).
- Simulator data (`api/_data/<slug>/sim/`): `meta.json` (rotations, kind labels, deck templates, element list), `union.json` (per-member precomputed damage vectors), and `detail/<uid>.json` (per-member breakdown). Consumed only by `sim.html`. A union without `sim/` is fine — `api/sim.js` 404s and `sim.html` shows its "데이터를 불러올 수 없습니다" state.

When adding a new season (per union, under `api/_data/<slug>/`): append a new top-level key to `UNION` in `member.js` and a matching `"S<n>"` key to `RAID` in `raid.js`; refresh `CHARACTERS` in `character.js` (latest season only); add a `"S<n>"` key to `SOLO` in `solo.js` after that season's solo raid; and refresh the `sim/` JSON if the simulator should cover it.

`raid.html` and `solo.html` persist the selected season in the URL as `?s=S<n>` (via `readUrlParam`/`writeUrlParam` in `common.js` + `history.replaceState`), so a season view is refresh-stable and shareable. The param survives the login round-trip because `authGuardOrRedirect()` includes `location.search` in the `return` path and `ALLOWED_PATHS` compares the path part only.

### Caching

`vercel.json` sets aggressive `Cache-Control` for `/css/*` and `/js/*` (1 day) and `/image/*` (1 week). **Data responses (`/api/data` and `/api/sim`) use ETag + `private, no-cache` for authed responses, `no-store` for unauthed.** Unauthed responses must never be cached (would cause stale `__AUTH_REQUIRED` sentinel to be served to authed users → infinite redirect loop). Authed responses revalidate against the server on every request (preserving the per-request auth check from the earlier `no-store` regime), but the body is omitted via `304 Not Modified` when the content hash matches `If-None-Match`. ETags are precomputed from file contents at module load — Vercel reloads the function per deployment so data changes propagate automatically. Do not switch authed responses to `private, max-age=N` without revalidation: a previous `private, max-age=3600` caused a serious bug where the browser served cached authed data after session expiry, bypassing the `__AUTH_REQUIRED` redirect on pages whose data files were all cached (typically `index.html` + `raid.html` since `member.js`/`raid.js` were cached but `character.js` was not).

Authed bodies are served **pre-compressed with gzip** via `api/_lib/compress.js` (`makeEntry`/`sendEntry`, shared by `api/data.js` and `api/sim.js`): the function negotiates `Accept-Encoding`, sets `Content-Encoding: gzip` + `Vary: Accept-Encoding`, and uses a representation-specific ETag (`"<hash>-gz"` for the gzip variant). This exists because `character.js` (≈5.9MB) risks the Vercel serverless response payload limit (4.5MB) and mobile transfer time — gzip cuts it ~91%. Vercel's own edge compression happens *after* the function returns, so it does not help with the payload limit; the function must return compressed bytes itself. The data files on disk stay uncompressed (compression is in-memory, lazy per file on first gzip request). Do not remove this without checking `api/_data/*` sizes against the payload limit.

`api/data.js` additionally rewrites data files ≥1MB from a JS object literal to `const NAME = JSON.parse("…")` at module load (`jsonParseWrap`) — JSON.parse is ~1.8× faster than literal parsing on the browser main thread for `character.js`. The transform is **fail-safe**: it only applies when the file is exactly `const NAME = <strict-JSON literal>;` (validated with `JSON.parse`); otherwise the original bytes are served. `solo.js` intentionally falls back (unquoted keys + inline comments — it is hand-edited). U+2028/U+2029 are escaped in the embedded string (raw they are a SyntaxError in older engines). If you hand-edit a generated data file, keeping it strict JSON keeps the fast path; breaking JSON-ness is safe but loses the speedup.

### Theming

Pure CSS custom properties on `:root` and `html.dark`. Dark-mode preference is persisted in `localStorage.theme` and applied pre-paint by a small inline `<script>` in each page's `<head>` to avoid a flash. When `localStorage.theme` is unset, the inline script falls back to the system preference (`prefers-color-scheme: dark`); an explicit toggle choice is stored and wins thereafter. The toggle button's initial icon reads `html.classList.contains("dark")` (not localStorage) so it agrees with the system-preference fallback — keep it that way.

## Conventions

- UI strings, comments, and commit messages in the existing code are Korean; match that when editing user-visible text.
- Character portrait images live in `image/<korean-name>.webp`; the `image/D_<name>.webp` prefix marks "deprecated/old" portraits kept for historical seasons.
- No module system on the front-end — every data file declares a global (`CONFIG`, `UNION`, `RAID`, `CHARACTERS`, `SOLO`, `NOTICE`, `RAID_GUIDE`), and `js/common.js` declares its shared helpers as bare globals too. Keep that pattern; the auth gate relies on `<script src>` semantics.

## Workflow preferences

- **PR 생성 시 자동 구독**: 이 저장소에서 PR을 생성한 직후에는 항상 `subscribe_pr_activity` 를 호출해 CI / 리뷰 코멘트 이벤트를 수신한다. 사용자에게 "구독할까요?" 재확인하지 말 것.
