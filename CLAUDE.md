# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

"여우별 유니온 포털" — a password-gated Korean-language fan portal for a union in the mobile game *승리의 여신: 니케* (Goddess of Victory: Nike). Deployed as a static site with serverless functions on Vercel (https://foxstar.vercel.app/).

No build step, no tests, no linter. The site is plain HTML/CSS/vanilla JS. `package.json` exists solely for the serverless functions' single dependency (`@neondatabase/serverless` — Neon Postgres HTTP driver); there is deliberately **no `build` script** so Vercel keeps treating the project as static-root + functions. Gated data lives in a Neon Postgres DB (`data_docs` table), not in the deploy bundle — data updates need no redeploy.

Serverless functions (CommonJS, all under `api/`): `auth.js` (login), `data.js` (gates `member/raid/character/solo/notice.js`), `notice.js` (admin notice CRUD → DB), `admin-data.js` (admin doc upload/list/delete), `ingest.js` (scraper intake: daily history + latest-doc regeneration), `member-auth.js` (nickname claim + personal PIN), `submit.js` (raid deck/score submissions), `poll.js` (schedule polls), `history.js` (daily-history time series + `kind=diff` period growth diff + `kind=char-list`/`char-union` per-character union matrix). Shared modules in `api/_lib/`: `session.js` (session + member tokens), `compress.js` (ETag/gzip), `db.js` (Neon client, doc cache, validation), `member.js` (member-identity check), `history.js` (roster sync + daily upserts). Front-end pages share one script, `js/common.js` (helpers, header/nav injection, theme toggle, auth guard, modal + member-popup builder, URL-state helpers).

## Commands

- **Install deps** (once, after clone): `npm install`
- **Local dev** (runs static files + serverless functions together): `vercel dev` (pull env first: `vercel env pull .env.local`)
- **Deploy preview**: `vercel`
- **Deploy production**: `vercel --prod`
- **DB schema + initial seed** (needs `DATABASE_URL`): `npm run seed` — runs `scripts/schema.sql` (table creation + repeat-safe migrations), then reports which of the 5 docs the DB holds, syncs the `members` roster from the DB's `member.js`, and backfills one day of daily history **only if that date has no rows yet**. It **never writes docs** — since the cutover there is no disk copy to seed from, so the script is effectively "schema + roster + admin flags", safe to run on a live DB just to apply a migration. If `member.js` is absent (a new union before its first ingest) the roster/backfill steps are skipped, which is normal. `npm run seed -- --force` only re-backfills today's history — use it to overwrite a day the scraper got wrong
- **Upload a doc without redeploy**: `SITE=https://<deployment> ADMIN_KEY=… node scripts/upload-doc.js <docKey> <filePath>`; >3MB files auto-gzip to dodge the 4.5MB request limit. `filePath` is **required** (the cutover removed `api/_data/`, so there is no default source — pull the current doc with `dump-docs.js` if you want to edit it). `SITE` has **no default** on purpose — one repo serves several union deployments but `.env.local` is singular, so a default would silently upload to the wrong union (`api/admin-data.js` has no union concept and would accept it). The script prints its target
- **Backup DB docs to disk**: `DATABASE_URL=… node scripts/dump-docs.js [outdir]`

Required environment variables (set in Vercel project settings or `.env.local`):
- `SESSION_SECRET` — HMAC secret for session/member cookies. **Set this explicitly** — the code falls back to `ACCESS_KEY` if unset, and `ACCESS_KEY` is otherwise unused since password login was removed
- `ACCESS_KEY` — legacy shared password. No login path uses it anymore; only kept as the `SESSION_SECRET` fallback. Removable once `SESSION_SECRET` is set (changing the effective secret force-logs-out everyone — they just re-login with PIN)
- `ADMIN_KEY` — **Bearer key only** for `api/admin-data.js` (upload script) and `api/ingest.js` fallback. No web login uses it. Web admin rights come from `members.is_admin` (see below)
- `ADMIN_NAMES` — comma-separated member nicknames granted admin on `npm run seed` (default `SUM,유화`); the seed is authoritative and revokes admins not in the list
- `SESSION_EPOCH` — optional unix-ms timestamp; tokens issued before this are rejected (use to force logout of all sessions after rotating secrets; applies to member cookies too)
- `DATABASE_URL` — Neon Postgres connection string (injected by the Vercel Marketplace Neon integration)
- `INGEST_KEY` — optional Bearer key for `api/ingest.js` (falls back to `ADMIN_KEY` if unset)
- `UNION_ID` — optional integer (default 1) for future multi-union deployments; every new table is keyed by it

## Architecture

### Auth + data-gating model (the non-obvious core)

Sensitive data (`member.js`, `raid.js`, `character.js`, `solo.js`, `notice.js`) is **not** a static asset. It lives in the **`data_docs` table** (verbatim file text, keyed by filename), served through the gate function — and since the cutover the DB is the **only** source: there is no disk copy and no fallback. A DB outage returns `503`, a missing doc row returns `404` (both `no-store`), and the page shows its data-error screen. The flow:

1. HTML pages include them naively: `<script src="data/member.js"></script>`.
2. `vercel.json` rewrites `/data/{member,raid,character,solo,notice}.js` → `/api/data?file=<name>`.
3. `api/data.js` requires BOTH cookies to be HMAC-valid — `fstar_session` (1-day expiry) AND `fstar_member` (30-day identity; login always issues both) — so logout/`forceReauth` also ends page *viewing*, not just writes. It additionally rejects member tokens issued before `app_settings.member_epoch` (the value rides along in the doc query — `getDocEntry` returns `{entry, memberEpoch}` — so this costs no extra round trip; before the cutover the disk-fallback path could not check it and failed open, which is one of the reasons the fallback is gone). It implements **sliding renewal for both cookies**: session re-issued when >12h old, member cookie when >15d old, so members who visit at least monthly stay logged in. `SESSION_EPOCH` force-logout still applies to renewed tokens. On **authenticated** requests it serves the doc via `getDocEntry()` in `api/_lib/db.js` — a per-warm-instance cache validated by a single content-hash query per request (the body is only re-downloaded from the DB when the hash changed) — with `ETag` + `Cache-Control: private, no-cache` (see Caching below) and `Content-Type: application/javascript`. The cookie checks are pure HMAC and return **before any DB access**, so Neon cold starts never delay the login-redirect flow. On **unauthenticated** requests:
   - **`api/data.js`** returns `200 OK` with body `window.__AUTH_REQUIRED=true;` and `Cache-Control: no-store`. It is deliberately `200` (not 401) so the `<script src>` tag still executes and sets the sentinel global.
   - Dynamic JSON endpoints (`/api/submit`, `/api/poll`, `/api/history`, `/api/member-auth`) return `401` with JSON instead — they are consumed by `fetch()`, so there is no sentinel to set.
4. Each HTML page guards its main script with `js/common.js`'s `authGuardOrRedirect()`: if `window.__AUTH_REQUIRED` is set it **redirects to `/login.html?return=<path+search>`** via `location.replace()` and returns `true`. Pages wrap their main logic in `} else if (!authGuardOrRedirect()) { try { … } catch { showDataError() } }` (search for the closing comment `} // else if (!authGuardOrRedirect())` near the end of the file).
5. `/login.html` is a standalone minimal page (no header, no sticky/fixed layout, no view-transition, no speculation rules, no html2canvas). **Login is combobox-based: pick your nickname + personal PIN** — there is no shared password and no admin password login. `GET /api/auth` is a **public** roster endpoint (`{members:[{name,claimed}]}`, name-sorted, no uids) that fills the two comboboxes: the login view lists **claimed** nicknames, the "PIN 등록" view lists **unclaimed** ones (first-time: pick name + set PIN, no gate — impersonation risk is explicitly accepted for this closed group and recoverable via admin reset / `scripts/reset-pin.js`). `POST mode:'member-login'|'member-claim'` sets BOTH `fstar_session` (admin flag from `members.is_admin`) and `fstar_member` (identity). On page load the page first tries `mode:'refresh'` — a valid 30-day `fstar_member` cookie silently re-issues the session, so members who visit at least monthly never retype anything. The page then `location.replace()`s to the validated `return` path, whitelisted via `ALLOWED_PATHS` to `{/, /index.html, /notice.html, /raid.html, /submit.html, /solo.html, /shift.html, /stats.html, /history.html, /guide.html, /admin.html}` (path part only; a query string like `?s=S35` is allowed) to prevent open-redirect.

The redirect-to-dedicated-page approach (instead of an in-page overlay) was chosen to work around an iOS 26 Safari bug where `visualViewport.offsetTop` doesn't reset after keyboard dismissal, causing `position: fixed` / `position: sticky` elements (and the whole page layout) to become misaligned during password-input focus. The login page has no fixed/sticky positioning so it bypasses the bug.

### 인앱 브라우저 우회 + 로딩 워치독 (전 페이지 공통 인라인 블록)

카카오톡 인앱 웹뷰(안드로이드 WebView)는 쿠키 저장소가 일반 브라우저와 분리돼 있어 항상 미인증 → 로그인 리다이렉트 경로를 타는데, 그 경로 위의 요청/네비게이션 하나만 멈춰도 `#fstarLoader` 스피너가 무한 표시되는 사고가 있었다(카카오톡 링크 무한로딩 제보의 원인). 대응으로 **모든 게이트 페이지(`login.html` 제외)의 `<head>`에 동일한 인라인 부트스트랩 블록**이 들어 있다(주석 `카카오톡 인앱 우회 + 로딩 워치독`으로 검색):

1. **카카오톡 인앱 감지 시** `kakaotalk://web/openExternal` 스킴으로 기본 브라우저를 연다(웹뷰 세션당 1회만 — `sessionStorage.fstarKkEsc` 플래그). 실패해도 페이지는 그대로 계속 로드된다.
2. **워치독**: 10초 내 `body`에 `.ready`가 붙지 않으면 `window.__fstarShowError()`가 로더를 복구 안내(다시 시도 / 기본 브라우저에서 열기 / 로그인 페이지로)로 교체한다. 늦게라도 로드가 완료되면 `body.ready #fstarLoader{display:none}` 규칙이 안내를 자동으로 치운다. `__fstarShowError`는 각 페이지 가드의 인라인 폴백(`common.js` 로드 실패 시)으로도 쓰인다.

편집 규칙: 이 블록은 **common.js·데이터 스크립트가 전부 실패해도 동작해야 하는 최후 방어선**이다. (a) 외부 파일에 의존하지 말 것, (b) 구형 WebView 대비 ES5 문법만 쓸 것, (c) 수정 시 전 페이지에 동일하게 반영할 것. `login.html`에는 넣지 않는다 — 인앱 안에서 로그인을 마친 사용자를 매번 다시 밖으로 내보내게 되고, 로그인 페이지는 구조 최소화 원칙(iOS 26 버그)도 있다.

Google Fonts CSS는 전 페이지에서 `media="print" onload="this.media='all'"` 패턴으로 **비-렌더블로킹**으로 로드한다. 렌더블로킹 `<link>`로 되돌리지 말 것 — fonts.googleapis.com 요청이 멈추면 페이지 전체(특히 리다이렉트 도착지 `login.html`)가 영영 안 그려지는 단일 실패점이었다.

Consequences for editing:
- Never expose the gated data as static assets — it must always flow through `api/data.js`, and the DB is its only source. Do not reintroduce a repo-side copy of any gated doc: a file in the repo is bundled into **every** union's deployment, so it leaks one union's roster into the other's site and bypasses the `member_epoch` check (that is exactly what the removed `api/_data/` fallback did). Use `scripts/dump-docs.js` when you need the current contents on disk.
- The auth guard `} else if (!authGuardOrRedirect()) { … }` wraps the entire main script on each HTML page. When editing main-page JS, keep the brace balance intact (the closing `}` is far from the opening; search for the comment `} // else if (!authGuardOrRedirect())` to find it).
- Keep `/login.html` structurally minimal. Do **not** add a sticky header, view-transition, speculation rules, or `position: fixed` elements — those bring the iOS 26 bug back.
- When adding a new top-level page: (1) add its path to the `ALLOWED_PATHS` whitelist in `login.html`, (2) add it to `NAV_ITEMS` in `js/common.js` if it should appear in the nav, (3) load `js/common.js` and call `authGuardOrRedirect()` in the page's main-script guard (copy the pattern from `index.html`/`raid.html`), and (4) copy the `카카오톡 인앱 우회 + 로딩 워치독` inline block and the non-render-blocking Google Fonts `<link>` into its `<head>`.
- Vercel functions use CommonJS (`module.exports = function handler(req, res) {}`), not ES modules. New endpoints count against the Hobby plan's 12-function limit (currently 10 in use).
- `js/common.js` and `css/style.css` are cached for a day (`vercel.json` `/js/*`·`/css/*` headers) — when you change either, bump its `?v=N` query on **every** page that references it (`<script src="js/common.js?v=N">` on the 9 nav pages; `<link href="css/style.css?v=N">` on all pages) so browsers refetch. Keep the version identical across pages — a mismatch means pages pick up a CSS/JS change on different days. (Current: `common.js?v=10`, `style.css?v=7`.)

### Page layout

Standalone HTML files share `css/style.css` and `js/common.js`. There is no bundler; pages still hold most of their feature logic inline, but cross-cutting pieces (header/nav, theme, auth guard, the member-detail popup, chart/URL helpers) live in `js/common.js`. The nine nav pages are listed in `NAV_ITEMS` in `js/common.js`:

| Page           | Role                          | Loads data files / APIs                           |
|----------------|-------------------------------|---------------------------------------------------|
| `index.html`   | Home / member roster          | `config.js`, `member.js`, `raid.js`               |
| `notice.html`  | Admin notices (+CRUD UI)      | `config.js`, `notice.js` + `/api/notice`          |
| `raid.html`    | Union raid records            | `config.js`, `member.js`, `raid.js`               |
| `submit.html`  | Deck/score submissions + polls| `config.js`, `member.js`, `character.js` + `/api/member-auth`·`/api/submit`·`/api/poll` |
| `solo.html`    | Solo raid leaderboard / decks | `config.js`, `solo.js`                            |
| `shift.html`   | Shifty-pad (character view)   | `config.js`, `member.js`, `character.js`          |
| `stats.html`   | Per-character statistics      | `config.js`, `member.js`, `character.js`          |
| `history.html` | 성장 기록 — 유니온/멤버/캐릭터 보기 전환(기간 diff) + 성장 그래프 | `config.js`, `member.js`(auth-gate only) + `/api/history` |
| `guide.html`   | Union-raid cultivation guide  | `config.js`, `raidGuide.js`, `member.js`, `character.js` |

Two pages sit outside the shared nav: `login.html` (the auth gate) and `admin.html` (운영진 전용 멤버 인증 관리). `admin.html` is not in `NAV_ITEMS`; instead `renderHeader` appends a "관리자" tab only when `isAdminHint()` (a `localStorage.fstarAdmin` hint set by `login.html`/`submit.html`/`admin.html` from the server's `admin` flag — the hint is UI-only, the page and `/api/member-auth` re-verify server-side, and it re-syncs on each login round-trip). `admin.html` loads no gated data file; it gates itself on the `/api/member-auth` GET (401 → login redirect) and splits admin/non-admin views on the returned `admin` flag. It lists every member's PIN-registration state (`claimed` + `claimed_at`), lets an admin reset an individual member's PIN (immediate logout for that member; resetting yourself logs you out), and force-reauth everyone — all via existing `/api/member-auth` actions (`reset`, `forceReauth`).

`data/config.js` and `data/raidGuide.js` are the truly static, public data files. `config.js` exposes `CONFIG = { unionName, kakaoUrl, logo, schedule: { unionRaid, soloRaid } }` — the schedule fields are game-global (shared by every union) and stay `null` until confirmed (pages render "미정" when null). `raidGuide.js` holds `RAID_GUIDE`, the manually tuned tier/role cultivation rules `guide.html` reads.

**Per-union branding lives in `config.js`'s `SITES` table, keyed by hostname prefix** (see 다중 유니온 배포 below). Never hardcode a union name or logo into a shared file (`js/common.js`, any page) — it will show up on the other union's site. The `<link rel="icon">` in each page's `<head>` stays `image/foxstar.png` as a static default and is swapped at runtime by `applyFavicon()` in `common.js` (and by `login.html`'s own inline script, since that page deliberately does not load `common.js`).

The home (`index.html`) member popup and the raid (`raid.html`) member popup are the **same** component: `buildMemberPopupHTML(ctx, name, season)` in `js/common.js`. Each page passes a small `POPUP_CTX = { members, ROLE_KO, roleOf, seasonKeys, lvlMaps, raidKeys, OPF }` (page-local data); the function reads the `UNION`/`RAID` globals and common helpers directly. Edit the popup once, in `common.js`.

### Data shapes

- `UNION` (from `member.js`): object keyed by season number as string, e.g. `UNION["40"]`. Each entry is `{ rank?, members: [...] }`. Entries per member always include `name`, `syncroLevel`, `uid`, `blaBlaLinkUId`, and optionally `role: "Leader" | "Officer"`. The **latest season only** also includes per-member gameplay fields: `normal`, `hard`, `tribeTower`, `overclock`, `outpost: { common, attack, defense, support, missilis, elysion, tetra, pilgrim, abnormal }`. To find the latest season use `Math.max(...Object.keys(UNION).map(Number))` (pages use `Object.keys(UNION).map(Number).sort((a,b)=>a-b)` and take the last element).
- `RAID` (from `raid.js`): keyed by `"S<season>"` (e.g. `"S35"`).
- `CHARACTERS` (from `character.js`): keyed by `uid`, values are character arrays for the latest season only. (Note the global is plural — `CHARACTERS`, not `CHARACTER`.)
- `SOLO` (from `solo.js`): keyed by `"S<season>"` (e.g. `"S37"`). Each entry is `{ season, bossName, element, members: [...] }`; each member has `uid`, `nickname`, `soloRank` (1–200 as a number, 201+ as a `"N.NN%"` string), `totalScore`, and `decks[]` (squad snapshots frozen at raid time).
- `NOTICE` (from `notice.js`): flat array `[{ id, title, body, author, ts, editedTs? }]`, managed by `api/notice.js`.

**DB tables** (`scripts/schema.sql`; every table keyed by `union_id`, default 1): `data_docs` (the gated docs, verbatim text + `content_hash`), `members` (roster + personal-PIN scrypt hash; `pin_hash IS NULL` = unclaimed; leavers get `active=false`, never deleted), `app_settings` (`member_epoch` = force-reauth switch), `member_daily` / `character_daily` (one row per member/character per **KST day** — repeated ingest the same day updates the row, a new day inserts; the row holds that day's final state; `character_daily.extra` is a **JSON string in a `text` column** holding equipment options + cube name — `{"eq":{"head":[["ammo",68.93],null,["hit",11.81]],…},"cube":"…"}`, built by `buildCharExtra` in `api/_lib/history.js`, NULL when the character has neither. `text`, not `jsonb`: jsonb stores the same content at 365B vs 194B (measured 1.88×) and this table dominates storage. Array index = the game's option slot, `null` = empty slot — the diff needs positions to tell "a new slot opened" from "that slot was rerolled"), `raid_submissions` (deck jsonb + damage + note, unique per season/uid/slot 1–3), `polls` + `poll_responses` (cascade delete).

**Updating data (no git, no redeploy):** the scraper repo POSTs to `/api/ingest` (Bearer `INGEST_KEY`, optionally gzip body with `X-Doc-Gzip: 1`) with `{ season, members?, characters? }` — the server upserts daily history, syncs the roster, regenerates the `member.js` (merging only that season, preserving past seasons and `rank`) and `character.js` docs, and finally prunes old history (below). Everything else (raid/solo/notice docs) is uploaded via `scripts/upload-doc.js` → `PUT /api/admin-data?key=<docKey>` (content validated against `DOC_RULES` in `api/_lib/db.js` before acceptance). When adding a new season: upload the new `member.js`/`raid.js` (append the season key), refreshed `character.js`, and later `solo.js` the same way.

**History storage & retention (the daily tables are the only thing that grows without bound):** the scraper runs every 6 hours, so each KST day gets 1 insert + 3 re-ingests. Three things keep that from filling the Neon free tier (0.5 GB/project — exceeding it fails writes, so ingest would silently stop):
- **No-op UPDATE suppression** — both upserts end in `ON CONFLICT … DO UPDATE SET … WHERE <any value actually differs>`. Only 0.45–16.7% of rows change between re-collections (measured from same-day scraper snapshots), so identical re-ingests now write nothing at all (verified: 0 dead tuples). Side effect: `updated_at` means "last changed", not "last collected" — nothing reads it, but don't assume otherwise.
- **`extra` as `text`** (see DB tables above) — ~30% off the table.
- **Pruning** — `pruneHistory()` in `api/_lib/history.js`, called at the end of `api/ingest.js` (no cron, no new function — the Hobby 12-function limit is at 9). Policy: keep every day within `PRUNE_DAILY_DAYS` (30), keep only the **last snapshot of each week** before that, drop anything older than `PRUNE_TOTAL_WEEKS` (26 — half a year). Total size is then pinned to 52–53 date-slices × one day's rows (one slice ≈ 1.68 MiB at 32 members / 6,098 rows, measured 289 B/row → 32 members ≈ 89 MiB, 64 ≈ 179 MiB; that is the two daily tables' heap + indexes, `data_docs` is on top). Idempotent; a no-op costs one query. Neon's free 0.5 GB is **per project**, not per account, so one union per Neon project keeps the daily tables at ~19% of the budget. The rationale for each number — and why lowering `PRUNE_DAILY_DAYS` to 7 was rejected — is in the `히스토리 솎아내기` comment block; read it before changing either constant.
  - A third invariant lives here: **`PRUNE_DAILY_DAYS` must be ≥ the largest daily preset in `history.html`'s `RANGES`** (currently `30일`). Below that, the preset's `from=today-N` lands in the weekly region and `snapLE` drags the comparison start up to 6 days further back, so a button labelled "30일" silently compares 30–36 days depending on the weekday.
  - The weekly bucket is `Math.floor((dayNum(d) - PRUNE_WEEK_OFFSET) / 7)`. Epoch day 0 is a Thursday, so the raw `dayNum/7` would run Thu→Wed; `PRUNE_WEEK_OFFSET = 4` shifts buckets to **Mon→Sun so the surviving snapshot is Sunday's** — the state reached at the end of the game week. To keep a different weekday use `(weekday - 3) mod 7` (0=Sun … 6=Sat): Sun 4 / Mon 5 / Wed 0 / Sat 3. The bucket straddling the daily-window edge is the one exception — its survivor is always `today-30`, and that exception is what makes the `30일` preset land exactly on 30 days. Re-anchoring is cheap at any time, not just before the first weekly thinning: the retained weekly dates are exactly 7 days apart, so any 7-day repartition still gets one per bucket (measured: 0 dates dropped for offsets 0–4, at most 1 for 5–6, at most 5 with a 30%-gappy collection history).

Two invariants when touching any of this: (1) **`character_daily` and `member_daily` must always hold the same date set** — the period snap picks from the union of both tables' dates, so a date present in only one becomes a comparison endpoint where the other table has no rows, and character changes silently vanish. (2) **`DEFAULT_RANGE_DAYS` in `api/history.js` must be ≥ the retention window** (it is derived from `PRUNE_TOTAL_WEEKS`) — if it is shorter, the growth graph labelled "보관 중인 전체 기록" quietly plots only part of the history with no error. The slack is exactly one day and it is measured from the *last ingest*: pruning keeps back to `P-181` where P is the day it ran, while a query reaches back to `Q-182` from the day it runs, so a scraper outage of 2+ days silently drops the oldest points off that graph. (A third, about `PRUNE_DAILY_DAYS` vs the UI presets, is in the Pruning bullet above.)

Sparse dates are fine by design: `snapshotDates()` lists the dates that actually exist and `snapLE()` snaps a requested period onto them, so the UI keeps showing which dates were really compared. `snapshotDates()` uses a recursive-CTE loose index scan — cost scales with the number of distinct dates, not accumulated rows (measured on 1 year / 2.2M rows: 830–1060 ms → 8.7–10.9 ms). `lineChartSVG` in `history.html` positions points by real date, not by index, so the pruned (uneven) series is not distorted.

**Member identity & writes:** every login IS a member login (`/api/auth` `member-login`/`member-claim` — the login page's comboboxes), so identity always accompanies the session: a 30-day `fstar_member` cookie (`m1.<uid>.<ts>.<sig>`, same HMAC secret, domain-separated prefix; sliding re-issue after 15 days). `submit.html` shows a logged-in banner (no in-page auth UI; admins get a link to `admin.html`); `/api/member-auth` only serves state (GET), `logout` (clears both cookies), and the admin actions. **Admin rights are member-based**: logging in as a member with `members.is_admin` (set by seed from `ADMIN_NAMES`) yields an admin session — used by notice CRUD, poll management, PIN reset. Write endpoints (`/api/submit`, `/api/poll` respond) require session + member cookie + `member_epoch` + `active` via `verifyMemberIdentity()` in `api/_lib/member.js`, and always take the uid from the cookie, never the request body. Self-service: `changePin` lets the logged-in member set a new PIN without logging out. Recovery ladder: admins manage per-member PIN state from `admin.html` (the member-auth list + `reset` action; resetting *yourself* also clears your cookies → immediate logout to re-register); if all admins are locked out, `scripts/reset-pin.js` clears a PIN directly via `DATABASE_URL`; `forceReauth` (also on `admin.html`) bumps `member_epoch`, which the data gate checks — every member (including the presser) is booted to the login page on their next request. Unclaimed-nickname impersonation is possible by design (no registration gate) — explicitly accepted for this closed group.

`raid.html` and `solo.html` persist the selected season in the URL as `?s=S<n>`, and `history.html` persists the selected view as `?view=member&uid=` / `?view=char&char=` plus the period as `?range=7|30` or `?from=&to=` (via `readUrlParam`/`writeUrlParam` in `common.js` + `history.replaceState`), so those views are refresh-stable and shareable. The param survives the login round-trip because `authGuardOrRedirect()` includes `location.search` in the `return` path and `ALLOWED_PATHS` compares the path part only.

### Caching

`vercel.json` sets aggressive `Cache-Control` for `/css/*` and `/js/*` (1 day) and `/image/*` (1 week). **Data responses (`/api/data`) use ETag + `private, no-cache` for authed responses, `no-store` for unauthed.** Unauthed responses must never be cached (would cause stale `__AUTH_REQUIRED` sentinel to be served to authed users → infinite redirect loop). Authed responses revalidate against the server on every request (preserving the per-request auth check from the earlier `no-store` regime), but the body is omitted via `304 Not Modified` when the content hash matches `If-None-Match`. ETags are the doc's `content_hash` from `data_docs` — a doc update changes the ETag immediately, **without a redeploy**; each warm instance validates its in-memory copy with one tiny hash query per request (`getDocEntry` in `api/_lib/db.js`), so instances converge on the next request after an update. Neon's free-tier autosuspend adds ~0.5–2s to the first authed data request after idle (the sentinel/login path never touches the DB). Do not switch authed responses to `private, max-age=N` without revalidation: a previous `private, max-age=3600` caused a serious bug where the browser served cached authed data after session expiry, bypassing the `__AUTH_REQUIRED` redirect on pages whose data files were all cached (typically `index.html` + `raid.html` since `member.js`/`raid.js` were cached but `character.js` was not).

Authed bodies are served **pre-compressed with gzip** via `api/_lib/compress.js` (`makeEntry`/`sendEntry`, used by `api/data.js`): the function negotiates `Accept-Encoding`, sets `Content-Encoding: gzip` + `Vary: Accept-Encoding`, and uses a representation-specific ETag (`"<hash>-gz"` for the gzip variant). This exists because `character.js` (≈5.9MB) risks the Vercel serverless response payload limit (4.5MB) and mobile transfer time — gzip cuts it ~91%. Vercel's own edge compression happens *after* the function returns, so it does not help with the payload limit; the function must return compressed bytes itself. The docs in the DB stay uncompressed (compression is in-memory, lazy per doc on first gzip request). Do not remove this without checking doc sizes against the payload limit. The same limit applies to **request** bodies — that's why `admin-data`/`ingest` accept gzip uploads (`X-Doc-Gzip: 1`).

`api/data.js` additionally serves docs ≥1MB rewritten from a JS object literal to `const NAME = JSON.parse("…")` (`jsonParseWrap`, now in `api/_lib/db.js`, applied when a doc enters the warm cache) — JSON.parse is ~1.8× faster than literal parsing on the browser main thread for `character.js`. The transform is **fail-safe**: it only applies when the doc is exactly `const NAME = <strict-JSON literal>;` (validated with `JSON.parse`); otherwise the original bytes are served. `solo.js` intentionally falls back (unquoted keys + inline comments — it is hand-edited). U+2028/U+2029 are escaped in the embedded string (raw they are a SyntaxError in older engines). If you hand-edit a doc, keeping it strict JSON keeps the fast path; breaking JSON-ness is safe but loses the speedup.

### Theming

Pure CSS custom properties on `:root` and `html.dark`. Dark-mode preference is persisted in `localStorage.theme` and applied pre-paint by a small inline `<script>` in each page's `<head>` to avoid a flash. When `localStorage.theme` is unset, the inline script falls back to the system preference (`prefers-color-scheme: dark`); an explicit toggle choice is stored and wins thereafter. The toggle button's initial icon reads `html.classList.contains("dark")` (not localStorage) so it agrees with the system-preference fallback — keep it that way.

## Conventions

- UI strings, comments, and commit messages in the existing code are Korean; match that when editing user-visible text.
- Character portrait images live in `image/<korean-name>.webp`; the `image/D_<name>.webp` prefix marks "deprecated/old" portraits kept for historical seasons.
- No module system on the front-end — every data file declares a global (`CONFIG`, `UNION`, `RAID`, `CHARACTERS`, `SOLO`, `NOTICE`, `RAID_GUIDE`), and `js/common.js` declares its shared helpers as bare globals too. Keep that pattern; the auth gate relies on `<script src>` semantics.

## 다중 유니온 배포 (여우별 · 나증단)

One repo, one branch (`main`), **two Vercel projects, two Neon projects**:

| | 여우별 | 나증단 |
|---|---|---|
| Vercel 프로젝트 | `foxstar` | `nzd` |
| 도메인 | `foxstar.vercel.app` | `nzdunion.vercel.app` (`nzd.vercel.app` 은 외부 사용자가 선점해 못 씀) |
| `UNION_ID` | 1 (미설정) | 2 |
| `ADMIN_NAMES` | 미설정 → 기본 `SUM,유화` | `솜사탕` |
| 서명 키 | `ACCESS_KEY` (레거시 폴백) | `SESSION_SECRET` |
| ingest 키 | `ADMIN_KEY` (폴백) | `INGEST_KEY` |

**한 DB 를 공유하는 구성은 불가능하다** — `data_docs` 만 `union_id` 컬럼이 없어 두 유니온의 `member.js`/`character.js` 가 같은 행을 덮어쓴다. 나머지 테이블(`members`, `app_settings`, `member_daily`, `character_daily`, `raid_submissions`, `polls`; `poll_responses` 는 `poll_id` FK 로 상속)은 전부 `union_id` 로 격리돼 있다. Neon 무료 0.5 GB 도 계정 합산이 아니라 **프로젝트당**이라 분리가 용량 면에서도 유리하다.

배포별로 반드시 **달라야** 하는 값 둘:
- **서명 키** (`SESSION_SECRET`, 미설정 시 `ACCESS_KEY`) — `api/_lib/session.js` 의 서명 페이로드에 유니온 귀속이 없어, 같으면 한쪽 쿠키가 다른 쪽에서 검증을 통과한다. 쿠키가 host-only + `SameSite=Strict` 라 브라우저 자동 전송 경로는 없지만, 관리자 비트도 uid·유니온에 묶여 있지 않아 관리 액션 전권이 넘어간다
- **ingest 키** (`INGEST_KEY`, 미설정 시 `ADMIN_KEY`) — 스크래퍼가 URL 을 잘못 쓰면 `syncRoster` 가 목록에 없는 기존 인원을 전부 `active=false` 로 만든다. 키가 다르면 `api/ingest.js` 가 403 으로 튕겨 사고 자체가 사라진다

**브랜딩 분기**: `data/config.js` 의 `SITES` 를 `location.hostname` 접두어(`hosts` 배열)로 고른다. 이 파일은 게이트를 타지 않는 정적 파일이라 CDN 이 그대로 내려주고 서버 env 를 못 읽는다(함수로 바꾸면 12개 함수 슬롯을 하나 더 먹고 전 페이지 로딩 경로에 요청이 하나 붙는다). 알 수 없는 호스트(localhost/`vercel dev`/미등록 커스텀 도메인)는 `SITES[0]` 로 떨어진다. 유니온을 추가하려면 항목 하나만 늘리면 된다.

★ **접두어는 도메인이 아니라 Vercel 프로젝트 이름 기준으로 잡을 것.** 프로덕션 도메인은 프로젝트 이름과 다르게 지정할 수 있고, 나증단이 실제로 그 경우다 — `nzd.vercel.app` 은 외부 사용자가 선점해 프로덕션 도메인이 `nzdunion.vercel.app` 이 됐다. 그래도 **프리뷰 URL 은 언제나 프로젝트 이름으로 시작하므로**(`nzd-git-<branch>-<team>.vercel.app`) 접두어 `nzd` 하나가 프로덕션(`nzdunion…`)과 프리뷰(`nzd-git-…`)를 함께 잡는다. 접두어 매칭이라 프로젝트 이름이 `nzd` 든 `nzdunion` 이든 결과는 같다. 프로젝트 이름으로 시작하지 않는 커스텀 도메인을 붙였다면 `hosts` 에 추가해야 한다 — 빠뜨리면 그 사이트가 조용히 `SITES[0]`(여우별) 브랜딩으로 뜬다.

**`index.html` 의 `og:*` 만은 분기할 수 없다** — 크롤러(카카오톡 등)가 JS 를 실행하지 않는다. 그래서 유니온 이름과 절대 URL 을 빼고 중립으로 두었고, `og:url` 을 생략해 크롤러가 실제 요청 URL 을 쓰게 했다. 유니온별 썸네일이 필요해지면 `index.html` 을 함수로 서빙하거나 배포별 브랜치를 나누는 수밖에 없다.

**신규 유니온 부트스트랩 순서** (순서를 지켜야 한다):
1. Neon 프로젝트 + Vercel 프로젝트 생성, env 설정 → 재배포 (env 는 기존 배포에 소급되지 않는다)
2. `npm run seed` 로 스키마 생성. 컷오버 이후로는 디스크 사본이 없어 **스키마 전용**이다 — 문서를 쓰지 않고, `member.js` 가 없으니 로스터/백필도 건너뛴다(정상). 예전에는 이 단계가 신규 DB 에 **다른 유니온의 문서 5개 + 로스터 + `ADMIN_NAMES` 기본값을 그대로 심는** 사고 경로였다(로그인 콤보가 `members` 에서 오므로 남의 유니온 닉네임이 공개 노출되고, 등록 게이트가 없어 선점까지 가능했다)
3. `raid.js`/`solo.js`/`notice.js` 스텁 업로드 (`const RAID = {};` / `const SOLO = [];` / `const NOTICE = [];`) — 문서 행이 없으면 `api/data.js` 가 404 를 반환해 페이지가 데이터 오류를 띄운다. 파일을 만들어 `node scripts/upload-doc.js raid.js ./raid.js` 처럼 경로를 넘긴다
4. 스크래퍼 첫 ingest → 로스터 + `member.js`·`character.js` 생성. **로스터가 비면 로그인 콤보가 비어 아무도 로그인할 수 없다**
5. 로스터가 생긴 **뒤에** `ADMIN_NAMES=… npm run seed` 재실행 → 관리자 플래그. 시드가 진실 원천이라 목록에 없는 사람의 플래그는 회수된다

**스크래퍼**는 유니온을 payload 가 아니라 **전송 대상(URL + 키)** 으로 구분한다 — `/api/ingest` 에는 유니온 파라미터가 없고 자기 배포의 DB 에만 쓴다. 본문 형식·`season` 키·gzip 은 완전히 동일하다(`season` 은 게임 전역 번호라 두 유니온이 같은 값을 쓰지만 DB 가 분리돼 있어 무해). `members` 만 또는 `characters` 만 보내는 부분 전송은 피할 것 — 두 데일리 테이블의 날짜 집합이 어긋난다(위 불변식 (1)).

## Cutover (완료)

과도기의 디스크 폴백은 제거됐다. `api/data.js` 의 폴백 분기, `vercel.json` 의 `includeFiles`, `api/_data/**` 다섯 파일이 모두 사라졌고, `scripts/seed.js` 의 문서 시드 단계와 `scripts/upload-doc.js` 의 기본 경로도 함께 없어졌다. **DB 가 유일한 출처다.**

폴백을 걷은 이유는 용량이 아니라 두 가지 사고 경로였다:
1. **유니온 간 데이터 유출** — 사본이 저장소에 있어 두 배포에 똑같이 번들됐다. 나증단 배포에서 DB 가 흔들리면 여우별의 실명·싱크로·장비를 나증단 사이트가 서빙했다
2. **강제 재인증 무력화** — 폴백 경로는 `member_epoch` 를 확인할 수 없어 가용성 우선으로 통과시켰다. `forceReauth` 를 눌러도 DB 가 흔들리는 동안에는 옛 쿠키가 계속 열람됐다

부수적으로 `scripts/seed.js` 가 신규 유니온 DB 에 남의 문서·로스터를 심던 경로도 같이 막혔다.

남은 정리: **`GH_TOKEN`/`GH_REPO`/`GH_BRANCH` 환경변수 제거** — 저장소 코드에는 참조가 없고 Vercel 프로젝트 설정에만 남아 있다(두 프로젝트 모두).

되돌리려면 이 커밋을 revert 하면 된다(파일은 git 히스토리에 남아 있다). 다만 폴백을 되살리는 것이므로 위 두 사고 경로도 함께 돌아온다 — DB 를 복구하는 쪽이 맞다. 현재 DB 문서를 디스크로 내려받는 경로는 `scripts/dump-docs.js` 다.

## Workflow preferences

- **PR 생성 시 자동 구독**: 이 저장소에서 PR을 생성한 직후에는 항상 `subscribe_pr_activity` 를 호출해 CI / 리뷰 코멘트 이벤트를 수신한다. 사용자에게 "구독할까요?" 재확인하지 말 것.
