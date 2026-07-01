# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"여우별 유니온 포털" — a password-gated Korean-language fan portal for a union in the mobile game *승리의 여신: 니케* (Goddess of Victory: Nike). Deployed as a static site with serverless functions on Vercel (https://foxstar.vercel.app/).

No build step, no package.json, no tests, no linter. The site is plain HTML/CSS/vanilla JS with three Node.js serverless functions: `api/auth.js` (login), `api/data.js` (gates the `member.js`/`raid.js`/`character.js`/`solo.js` data files), and `api/sim.js` (gates the damage-simulator JSON under `api/_data/sim/`). Front-end pages share one script, `js/common.js` (helpers, header/nav injection, theme toggle, auth guard, modal + member-popup builder, URL-state helpers).

## Commands

- **Local dev** (runs static files + serverless functions together): `vercel dev`
- **Deploy preview**: `vercel`
- **Deploy production**: `vercel --prod`

Required environment variables (set in Vercel project settings or `.env.local`):
- `ACCESS_KEY` — the password users enter at the login overlay
- `SESSION_SECRET` — HMAC secret for session cookies (falls back to `ACCESS_KEY` if unset)
- `SESSION_EPOCH` — optional unix-ms timestamp; tokens issued before this are rejected (use to force logout of all sessions after rotating secrets)

## Architecture

### Auth + data-gating model (the non-obvious core)

Sensitive data files (`member.js`, `raid.js`, `character.js`, `solo.js`, and the simulator JSON under `sim/`) are **not** static assets. They live in `api/_data/` (underscore prefix keeps Vercel from serving them as static). The flow:

1. HTML pages include them naively: `<script src="data/member.js"></script>` (or `<script src="data/sim/union.json">`-style for the simulator).
2. `vercel.json` rewrites `/data/{member,raid,character,solo}.js` → `/api/data?file=<name>`, and `/data/sim/*` → `/api/sim?file=<name>`.
3. `api/data.js` and `api/sim.js` both check the `fstar_session` cookie (HMAC-SHA256 over a timestamp, 1-day expiry, verified with `crypto.timingSafeEqual`) and whitelist the exact filenames they will serve (`api/sim.js` additionally regex-validates the `detail/<uid>.json` path). On **authenticated** requests both serve the file from `api/_data/` with `ETag` + `Cache-Control: private, no-cache` (see Caching below); `api/data.js` uses `Content-Type: application/javascript`, `api/sim.js` uses `application/json`. They differ on **unauthenticated** requests:
   - **`api/data.js`** returns `200 OK` with body `window.__AUTH_REQUIRED=true;` and `Cache-Control: no-store`. It is deliberately `200` (not 401) so the `<script src>` tag still executes and sets the sentinel global.
   - **`api/sim.js`** returns `401` with JSON `{ error: 'auth required' }` and `Cache-Control: no-store`. Its data is loaded by `fetch()` (not `<script>`), so there is no sentinel to set — the page just gets a failed fetch.
4. Each HTML page guards its main script with `js/common.js`'s `authGuardOrRedirect()`: if `window.__AUTH_REQUIRED` is set it **redirects to `/login.html?return=<path+search>`** via `location.replace()` and returns `true`. Pages wrap their main logic in `} else if (!authGuardOrRedirect()) { try { … } catch { showDataError() } }` (search for the closing comment `} // else if (!authGuardOrRedirect())` near the end of the file). `sim.html` is the exception — it does not load `common.js` and still uses an inline `window.__AUTH_REQUIRED` check (search for `} // if (!window.__AUTH_REQUIRED)`). Note `sim.html`'s redirect is still driven by the **sentinel**, not by the sim endpoint's 401: it loads `member.js`/`character.js` via `<script src>` (through `api/data.js`), so an unauthenticated visit sets `__AUTH_REQUIRED` and redirects before the `api/sim.js` fetches ever matter.
5. `/login.html` is a standalone minimal page (no header, no sticky/fixed layout, no view-transition, no speculation rules, no html2canvas). It POSTs the password to `/api/auth` (`api/auth.js`), which sets the `fstar_session` cookie on success; the page then `location.replace()`s to the validated `return` path. The `return` parameter is whitelisted via `ALLOWED_PATHS` to `{/, /index.html, /raid.html, /solo.html, /shift.html, /stats.html, /sim.html, /guide.html}` (path part only; a query string like `?s=S35` is allowed) to prevent open-redirect.

The redirect-to-dedicated-page approach (instead of an in-page overlay) was chosen to work around an iOS 26 Safari bug where `visualViewport.offsetTop` doesn't reset after keyboard dismissal, causing `position: fixed` / `position: sticky` elements (and the whole page layout) to become misaligned during password-input focus. The login page has no fixed/sticky positioning so it bypasses the bug.

Consequences for editing:
- Never move the sensitive data files out of `api/_data/` — they'd become directly fetchable.
- The auth guard `} else if (!authGuardOrRedirect()) { … }` wraps the entire main script on each HTML page. When editing main-page JS, keep the brace balance intact (the closing `}` is far from the opening; search for the comment `} // else if (!authGuardOrRedirect())` to find it).
- Keep `/login.html` structurally minimal. Do **not** add a sticky header, view-transition, speculation rules, or `position: fixed` elements — those bring the iOS 26 bug back.
- When adding a new top-level page: (1) add its path to the `ALLOWED_PATHS` whitelist in `login.html`, (2) add it to `NAV_ITEMS` in `js/common.js` if it should appear in the nav, and (3) load `js/common.js` and call `authGuardOrRedirect()` in the page's main-script guard (copy the pattern from `index.html`/`raid.html`).
- Vercel functions use CommonJS (`module.exports = function handler(req, res) {}`), not ES modules.
- `js/common.js` is cached for a day (`vercel.json` `/js/*` header) — when you change it, bump the `?v=N` query on every `<script src="js/common.js?v=N">` tag (all nav pages reference it) so browsers refetch.

### Page layout

Standalone HTML files share `css/style.css` and `js/common.js`. There is no bundler; pages still hold most of their feature logic inline, but cross-cutting pieces (header/nav, theme, auth guard, the member-detail popup, chart/URL helpers) live in `js/common.js`. The six nav pages are listed in `NAV_ITEMS` in `js/common.js`:

| Page         | Role                          | Loads data files                                  |
|--------------|-------------------------------|---------------------------------------------------|
| `index.html` | Home / member roster          | `config.js`, `member.js`, `raid.js`               |
| `raid.html`  | Union raid records            | `config.js`, `member.js`, `raid.js`               |
| `solo.html`  | Solo raid leaderboard / decks | `config.js`, `solo.js`                            |
| `shift.html` | Shifty-pad (character view)   | `config.js`, `member.js`, `character.js`          |
| `stats.html` | Per-character statistics      | `config.js`, `member.js`, `character.js`          |
| `guide.html` | Union-raid cultivation guide  | `config.js`, `raidGuide.js`, `member.js`, `character.js`           |

Two pages sit outside the nav: `login.html` (the auth gate) and `sim.html` (a standalone damage simulator that loads the `data/sim/*` JSON; it does **not** load `js/common.js`).

`data/config.js` and `data/raidGuide.js` are the truly static, public data files. `config.js` contains `CONFIG = { unionName, kakaoUrl, schedule: { unionRaid, soloRaid } }` — the schedule fields are `null` until confirmed (pages render "미정" when null). `raidGuide.js` holds `RAID_GUIDE`, the manually tuned tier/role cultivation rules `guide.html` reads.

The home (`index.html`) member popup and the raid (`raid.html`) member popup are the **same** component: `buildMemberPopupHTML(ctx, name, season)` in `js/common.js`. Each page passes a small `POPUP_CTX = { members, ROLE_KO, roleOf, seasonKeys, lvlMaps, raidKeys, OPF }` (page-local data); the function reads the `UNION`/`RAID` globals and common helpers directly. Edit the popup once, in `common.js`.

### Data shapes

- `UNION` (from `member.js`): object keyed by season number as string, e.g. `UNION["40"]`. Each entry is `{ rank?, members: [...] }`. Entries per member always include `name`, `syncroLevel`, `uid`, `blaBlaLinkUId`, and optionally `role: "Leader" | "Officer"`. The **latest season only** also includes per-member gameplay fields: `normal`, `hard`, `tribeTower`, `overclock`, `outpost: { common, attack, defense, support, missilis, elysion, tetra, pilgrim, abnormal }`. To find the latest season use `Math.max(...Object.keys(UNION).map(Number))` (pages use `Object.keys(UNION).map(Number).sort((a,b)=>a-b)` and take the last element).
- `RAID` (from `raid.js`): keyed by `"S<season>"` (e.g. `"S35"`).
- `CHARACTERS` (from `character.js`): keyed by `uid`, values are character arrays for the latest season only. (Note the global is plural — `CHARACTERS`, not `CHARACTER`.)
- `SOLO` (from `solo.js`): keyed by `"S<season>"` (e.g. `"S37"`). Each entry is `{ season, bossName, element, members: [...] }`; each member has `uid`, `nickname`, `soloRank` (1–200 as a number, 201+ as a `"N.NN%"` string), `totalScore`, and `decks[]` (squad snapshots frozen at raid time).
- Simulator data (`api/_data/sim/`): `meta.json` (rotations, kind labels, deck templates, element list), `union.json` (per-member precomputed damage vectors), and `detail/<uid>.json` (per-member breakdown). Consumed only by `sim.html`.

When adding a new season: append a new top-level key to `UNION` in `api/_data/member.js` and a matching `"S<n>"` key to `RAID` in `api/_data/raid.js`; refresh `CHARACTERS` in `api/_data/character.js` (latest season only); add a `"S<n>"` key to `SOLO` in `api/_data/solo.js` after that season's solo raid; and refresh the `sim/` JSON if the simulator should cover it.

`raid.html` and `solo.html` persist the selected season in the URL as `?s=S<n>` (via `readUrlParam`/`writeUrlParam` in `common.js` + `history.replaceState`), so a season view is refresh-stable and shareable. The param survives the login round-trip because `authGuardOrRedirect()` includes `location.search` in the `return` path and `ALLOWED_PATHS` compares the path part only.

### Caching

`vercel.json` sets aggressive `Cache-Control` for `/css/*` and `/js/*` (1 day) and `/image/*` (1 week). **Data responses (`/api/data` and `/api/sim`) use ETag + `private, no-cache` for authed responses, `no-store` for unauthed.** Unauthed responses must never be cached (would cause stale `__AUTH_REQUIRED` sentinel to be served to authed users → infinite redirect loop). Authed responses revalidate against the server on every request (preserving the per-request auth check from the earlier `no-store` regime), but the body is omitted via `304 Not Modified` when the content hash matches `If-None-Match`. ETags are precomputed from file contents at module load — Vercel reloads the function per deployment so data changes propagate automatically. Do not switch authed responses to `private, max-age=N` without revalidation: a previous `private, max-age=3600` caused a serious bug where the browser served cached authed data after session expiry, bypassing the `__AUTH_REQUIRED` redirect on pages whose data files were all cached (typically `index.html` + `raid.html` since `member.js`/`raid.js` were cached but `character.js` was not).

### Theming

Pure CSS custom properties on `:root` and `html.dark`. Dark-mode preference is persisted in `localStorage.theme` and applied pre-paint by a small inline `<script>` in each page's `<head>` to avoid a flash.

## Conventions

- UI strings, comments, and commit messages in the existing code are Korean; match that when editing user-visible text.
- Character portrait images live in `image/<korean-name>.webp`; the `image/D_<name>.webp` prefix marks "deprecated/old" portraits kept for historical seasons.
- No module system on the front-end — every data file declares a global (`CONFIG`, `UNION`, `RAID`, `CHARACTERS`, `SOLO`, `RAID_GUIDE`), and `js/common.js` declares its shared helpers as bare globals too. Keep that pattern; the auth gate relies on `<script src>` semantics.

## Workflow preferences

- **PR 생성 시 자동 구독**: 이 저장소에서 PR을 생성한 직후에는 항상 `subscribe_pr_activity` 를 호출해 CI / 리뷰 코멘트 이벤트를 수신한다. 사용자에게 "구독할까요?" 재확인하지 말 것.
