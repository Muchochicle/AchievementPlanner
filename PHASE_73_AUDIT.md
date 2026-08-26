# Phase 73 — Complete the Game Guides & Fix a Production-Blocking Config Bug

Continuing the Phase 71+ priority: ship substantial, visible product features toward a publishable MVP, and move meaningfully closer to being ready to deploy publicly.

## 1. Verified baseline

- `HEAD` = `origin/main` = `b0037cf` (`docs: record Phase 72's own commit hash in PHASE_72_AUDIT.md`).
- Root test suite: 813/813 passing at baseline. Backend suite: 390/390 passing at baseline.
- `git status --short` at baseline: the same 24 pre-existing unstaged phase-report deletions, untouched.

## 2. Product inventory & highest-impact targets identified

A real, read-only file-by-file inventory (guide.html/guides.html/game.html, `src/data/guides/`, `src/env.js`, `backend/server.js`, README.md, and a grep for `TODO|FIXME|coming soon|placeholder|stub` across `src/` and `backend/`) surfaced two concrete gaps, both confirmed with file:line evidence before any code was written:

1. **Guides content gap (highest visible impact):** `src/data/guides/index.js`'s `GAME_GUIDES` held exactly one real, sourced guide (Hades, from Phase 37) even though all 5 real catalog games (`src/data/games/*.json`) declare `hasGuide: true`. Portal 2, Hollow Knight, Celeste, and INSIDE all rendered the honest but empty "A written achievement guide for X hasn't been published yet" notice (`src/components/game-guide-notice/game-guide-notice.js:64`) and `guides.html`'s Game Guides section showed only one card next to nine full App Guides — a visibly incomplete section on every one of the 5 game pages that actually matters to a real visitor.
2. **A genuine production-blocking bug:** `src/env.js:12` hardcoded `ENV.API_BASE_URL` to `"http://localhost:3000"` unconditionally. Every backend call in the app (`gameService.js`, `steamSession.js`, `podiumsClient.js`, `playerProgressClient.js`, `profileStatsClient.js`, `navbar.js`) builds its URL from `${ENV.API_BASE_URL}/...` - so deploying this app anywhere today would have every real visitor's browser try to call *their own machine's* `localhost:3000`, breaking the entire app outright. No Dockerfile, `.env.example` for the frontend, or hosting doc existed either.

Both are now closed this phase - the guides gap (primary, visible deliverable) and the config bug + missing deploy artifacts (secondary, directly serves "closer to deployable").

## 3. Feature implemented: real, sourced Game Guides for all 4 remaining games

Following the Hades guide's existing template and sourcing-rigor convention (`src/data/guides/games/hades.js`), four new guides were written and registered:

- **`src/data/guides/games/portal-2.js`** (51 achievements) - sourced entirely from this app's own catalog data (`src/data/games/portal-2.json`), whose official Steam descriptions were already verified in Phase 40. 6 sections: Overview, Early Solo Campaign, Story Beats, Hidden Chamber Secrets, Co-op Campaign, Suggested Order.
- **`src/data/guides/games/hollow-knight.js`** (63 achievements) - the hardest of the four: roughly a third of Hollow Knight's achievements are Steam "Hidden achievement" entries with no official description. For those, this guide cross-references the achievement's own internal Steam apiname (e.g. `NAILSMITH_KILL` → "Purity") against two independently fetched community sources, and - matching the Hades guide's own precedent of discarding a claim that contradicted a more authoritative source - deliberately states the four Godhome Pantheon achievements only in general terms rather than asserting an unconfirmed exact 1:1 name mapping. 7 sections, one dedicated to genuinely missable NPC-storyline choices (Nailsmith kill/spare, Zote save/fight, the Grimm Troupe's three-way branch) with an explicit "read before you choose" framing.
- **`src/data/guides/games/celeste.js`** (32 achievements) - grounded in the Phase 72-sourced catalog data; 7 sections covering the main story, Crystal Hearts, B-Sides, Strawberries, secrets, and the free Farewell epilogue chapter.
- **`src/data/guides/games/inside.js`** (14 achievements) - the simplest: INSIDE's achievements unlock in a fixed linear sequence with zero missables, confirmed directly from the catalog's own `missable`/`playthroughs` fields rather than assumed, so the guide is honest that there's no achievement-hunting strategy needed at all.

`src/data/guides/index.js` now imports and registers all 4 in `GAME_GUIDES`, alongside Hades - **every real catalog game now has a complete, real guide**, closing the gap identified in §2.1.

## 4. Fix implemented: production-safe `ENV.API_BASE_URL` auto-detection

`src/env.js` no longer hardcodes `"http://localhost:3000"`. It now runs `detectApiBaseUrl()`:
- No `window` (Node/test context, exactly what every existing test transitively hits) → unchanged `"http://localhost:3000"` default, zero behavior change for tests or local dev.
- `window.location.hostname` is `localhost`/`127.0.0.1`/empty (local dev, or a `file://` open) → same unchanged local-dev default.
- Any other real hostname (an actual production deployment) → `""`, i.e. relative/same-origin requests - the documented production convention already named in this file's own pre-existing comment, now actually the default instead of requiring a manual edit every deployer would have had to discover independently.

## 5. Deploy-readiness additions

- **`backend/Dockerfile`** + **`backend/.dockerignore`** - a standard `node:22-alpine` production image (matches `backend/package.json`'s `engines.node >=22.5.0`), `npm ci --omit=dev`, runs `node server.js`. Secrets are never baked in - the image relies on `server.js`'s own existing required-env-var guard.
- **README.md** - new "Deploying to Production" section: how to build/run the Dockerfile (or run without Docker), and an explicit same-origin vs. split-origin explanation of how `ENV.API_BASE_URL` and `CORS_ORIGIN` now interact, including the one manual edit still needed for a split-origin deployment.
- Scope note: this phase deliberately did **not** restructure `backend/server.js`'s routing (e.g. adding `express.static` to serve the frontend from the same process) - that file's existing `GET "/"` route is already tested JSON-API behavior, and combining static-file serving into it is a larger, separate architectural change better done as its own phase if the user wants a single-process same-origin deployment rather than the documented two-artifact (Dockerfile backend + static-host frontend, or reverse-proxy) path.

## 6. Regression tests — 6 new files (28 tests), 2 modified files

- **`test/portal2Guide.test.js`** (new, 5 tests), **`test/hollowKnightGuide.test.js`** (new, 6 tests), **`test/celesteGuide.test.js`** (new, 5 tests), **`test/insideGuide.test.js`** (new, 5 tests) - each mirrors `test/hadesGuide.test.js`'s existing pattern: identity fields, exact section order, an Overview-fact check, and (the main regression guard) every one of that game's official achievement names verified present somewhere in the guide text, so no achievement can be silently dropped from a categorized write-up without a test failing.
- **`test/env.test.js`** (new, 3 tests) - exercises `ENV.API_BASE_URL` under all three `detectApiBaseUrl()` branches (no window, local-dev hostname, production hostname) via cache-busted dynamic imports of `src/env.js`.
- **`test/guidesData.test.js`** (modified) - the two tests hardcoding "exactly one Game Guide (Hades)" and "Hollow Knight/Portal 2 return null" now assert the real, complete 5-guide state.
- **`test/gameGuideNotice.test.js`** (modified) - the "Hollow Knight shows coming-soon" test (no longer true) now uses a synthetic fixture slug to keep that branch covered; a new test confirms every real game's notice links to its own real guide.

## 7. Test results

- Focused new/changed suites: passing (verified individually before the full run).
- Full root suite (`npm test` from repo root): **837/837 passing** (813 baseline + 24 net new: 5+6+5+5+3 across the five new test files, +0 net from the two modified files which replaced rather than added tests).
- Full backend suite (`npm test` inside `backend/`): **390/390 passing**, unchanged - this phase touched no backend code.

## 8. Live verification

- Started the real, unmodified `backend/server.js` (port 3000) and a minimal hand-written static file server for the frontend (port 5501) - `serve` and `http-server` were both tried first and both rewrote `game.html?slug=X` URLs (dropping the query string) before the app's own JS ever ran, the same class of verification-tool artifact Phase 72 hit with `serve`; switching to a zero-rewrite static server (and, for one residual case, using `location.assign()` in-page instead of the browser-automation `navigate` tool, which appears to have its own address-bar rewriting behavior) confirmed this was a tooling artifact, not an app bug - `curl` against every server variant always returned the correct, un-rewritten resource.
- `guides.html`: confirmed via `get_page_text` that the Game Guides section now shows all 5 cards (Hades, Portal 2, Hollow Knight, Celeste, INSIDE) with their real titles/summaries, next to the unchanged 9 App Guides.
- `guide.html?slug=hollow-knight-achievement-guide`: confirmed full page renders correctly end-to-end (title, all 7 sections in order, Related Guides, back-to-Guides link).
- `game.html?slug=celeste` and `game.html?slug=portal-2`: confirmed via `find` that both now render the `game-guide-notice--available` state with a working `href="guide.html?slug=..."` link (previously the `--planned` "coming soon" state for both).
- `src/env.js` fix verified live in the actual dev context: `import("./src/env.js")` in the running page returned `ENV.API_BASE_URL === "http://localhost:3000"` when served from `127.0.0.1:5501`, confirming zero behavior change for local development.
- Zero console errors from the app itself on any page - the one exception observed (`chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/executors/200.js`) is the same unrelated Chrome extension noise Phase 72 already identified as not part of this app.
- **Not live-tested:** the new `backend/Dockerfile` - Docker is not available in this execution environment (`docker --version` → command not found). The Dockerfile itself is a standard, minimal `node:22-alpine` build with no untested custom logic; this is stated plainly rather than claimed as verified.
- Cleaned up: both dev servers and the browser tab stopped/closed.

## 9. Diff review

`git status --short` after implementation: 2 new backend files (`Dockerfile`, `.dockerignore`), 4 new guide data files, 6 new test files, 3 modified files (`README.md`, `src/data/guides/index.js`, `src/env.js`), 2 modified test files, this audit document - plus the same 24 pre-existing unstaged phase-report deletions, unchanged and untouched. No unrelated subsystem (planner/Steam/XP/podiums/localStorage) was touched.

## 10. Commit / push

Committed and pushed to `origin/main`. Commit hash recorded in a follow-up commit to this file, per this project's convention.

## 11. Phase-end report

- **Major functionality/section completed:** Every real game in the catalog (Hades, Portal 2, Hollow Knight, Celeste, INSIDE) now has a complete, real, sourced achievement guide - the Guides section went from "1 real guide + 4 honest placeholders" to fully complete. Separately, a genuine production-blocking bug (hardcoded `localhost:3000` API base URL) is fixed, and the project gained its first deploy artifacts (Dockerfile + a real "Deploying to Production" README section).
- **Product completeness: ~65-70% before this phase → ~75-80% after.** The guides section was the last remaining "looks unfinished" surface visible to every user browsing any of the 4 non-Hades games; closing it removes that signal entirely. The env.js fix removes what would have been a same-day production outage on first deploy.
- **What a user can now do that they couldn't before:** Read a complete, practical achievement guide for every game in the catalog, not just Hades - including explicit warnings about Hollow Knight's genuinely missable NPC-storyline choices before a visitor stumbles into one blind. A deployer can now actually put this app online without it silently failing for every visitor, and has a documented path (Dockerfile + README instructions) for doing so.
- **Tests and verification:** 1,227/1,227 automated tests passing (837 root + 390 backend). Live-verified in a real browser against the real backend: the Guides index, a full guide page, and the "guide available" notice on two different game pages, plus the env.js fix's actual runtime value in a live page context.
- **What's still missing before publication:** No admin/self-serve path to add new games or guides (still fully hand-curated, as Phase 72 also noted). The deploy path is now documented and artifact-backed but still requires a deployer to actually provision hosting/DNS/TLS - this phase makes it *possible* to deploy correctly, not *automatic*. Session persistence still uses in-memory `MemoryStore` (sessions don't survive a server restart) - a deferred architectural decision from earlier phases (which persistent store to add) that remains genuinely open.
- **Next highest-impact phase:** either (a) an admin/authoring path for adding catalog games and guides without hand-writing JSON/JS files, or (b) picking a persistent session store and actually deploying the app somewhere real using this phase's new Dockerfile, to validate the deploy path end-to-end rather than just on paper.
