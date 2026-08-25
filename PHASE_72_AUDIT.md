# Phase 72 — Games Catalog Expansion

Continuing the Phase 71 priority: ship one substantial, visible product feature per phase, not audits.

## 1. Verified baseline

- `HEAD` = `origin/main` = `610499ffe1fdcc2f5ed9c68b881652eeae695a59` (`docs: record Phase 71's own commit hash in PHASE_71_AUDIT.md`).
- Root test suite: 800/800 passing at baseline.
- `git status --short` at baseline: the same 24 pre-existing unstaged phase-report deletions, untouched.

## 2. Highest-impact target identified

Phase 71's product inventory flagged the games catalog (only 3 titles — Hades, Portal 2, Hollow Knight) as the single biggest "is this a real product" signal: a 3-game catalog reads as a tech demo regardless of how solid the underlying engine is. This phase expands it.

A research pass (fork, 20 tool calls) confirmed the wiring: `backend/utils/plannerCatalog.js` auto-discovers every non-`internal` `*.json` file in `src/data/games/` (`fs.readdirSync`) — **adding a game is purely a data change**, zero backend/frontend code changes required. No test enumerates the catalog by exact count (only by individual slug membership), and guides are already fully optional with an honest "coming soon" fallback (`game-guide-notice.js`), confirmed by that same investigation. Two tests it didn't catch (`apiGamesRoute.test.js`, `popularRoute.test.js`) assert the *exact* game list by slug and needed updating — see §5.

## 3. Feature implemented: 2 new curated games (Celeste, INSIDE)

Rather than fabricating achievement data, both games' real Steam achievement schemas were pulled live via `ISteamUserStats/GetSchemaForGame/v2` using this project's own configured `STEAM_API_KEY` (the same source `hadesAchievementData.test.js` documents Hades' data was verified against) — apinames, display names, and official descriptions (where Steam provides one) are sourced directly, not guessed from wikis.

- **`src/data/games/celeste.json`** (new, appid `504230`) — 32 real achievements (apinames `CH1-7`, `HEART1-8`, `BSIDE1-8`, `STRB1-3`, `CASS`, `ONEUP`, `PICO8`, `CSIDES`, `FAREWELL`, `WOW`). Only 2 of 32 ship an official Steam description (`CH7`/"Celeste", `ONEUP`/"1UP!"); the other 30 use curatorial descriptions grounded in the apiname's own naming convention (chapter-numbered A-Side/Heart/B-Side clears) — same "difficulty/estimatedTime are curatorial, not sourced" convention this catalog already uses everywhere. Game-level: difficulty 8/10, 15-60h, missable:false (full chapter select), `hasGuide:true` (renders the existing honest "coming soon" notice).
- **`src/data/games/inside.json`** (new, appid `304430`) — 14 real achievements, **100% Steam-sourced** including descriptions (INSIDE's schema provides a real description for every achievement, unlike Celeste's). Game-level: difficulty 3/10, 4-8h, missable:false, `hasGuide:true`.

No backend/frontend code changes were needed for the games to appear — confirmed live (`GET /api/games` returned both immediately after a server restart, with zero code touched beyond the two new JSON files).

## 4. Regression tests — 2 new files (14 tests), 3 modified files

- **`backend/test/celesteAchievementData.test.js`** (new, 6 tests): 32-achievement count, missable:false consistency, unique id/apiname, valid difficulty/estimatedTime/non-empty fields, exact name-list match, exact apiname-list match against the live schema.
- **`backend/test/insideAchievementData.test.js`** (new, 5 tests): 14-achievement count, missable:false consistency, unique id/apiname, valid difficulty/estimatedTime/non-empty fields, exact name+description-pair match against the live schema.
- **`backend/test/plannerCatalog.test.js`** (modified, +2 tests): added `celeste`/`inside` to the existing "real non-internal catalog games" slug-membership check (no new test needed there, just 2 more assertion lines); added 2 new appid-resolution smoke tests for both new games, mirroring the existing portal-2/hollow-knight pattern.
- **`backend/test/apiGamesRoute.test.js`** (modified): the one test that asserted the *exact* catalog slug list (`["hades","hollow-knight","portal-2"]`) updated to the new 5-game list.
- **`backend/test/popularRoute.test.js`** (modified): same exact-list assertion for the logged-out popular-games ranking, updated identically.

## 5. Test results

- Focused new/changed suites: passing.
- Full root suite (`node --test`, from repo root): **813/813 passing** (800 baseline + 13 net new: 6 from `celesteAchievementData.test.js` + 5 from `insideAchievementData.test.js` + 2 new tests in `plannerCatalog.test.js`).

## 6. Live verification

- Started the real, unmodified `backend/server.js` (port 3000) and a static frontend server (port 5501).
- `curl GET /api/games` confirmed exactly 5 games returned (`celeste`, `hades`, `hollow-knight`, `inside`, `portal-2`), each with `success:true` and full achievement arrays.
- Browser: `games.html` now reads "Showing 5 games" with Celeste and INSIDE's real cover art rendering in the grid. The homepage hero stat, which computes its number live from the same catalog, now reads **"5+ Games"** (was "3+") — confirming this is a genuinely dynamic, visible change, not a hardcoded label.
- `game.html?slug=celeste` and `game.html?slug=inside` both render correctly end-to-end: header (difficulty/time/missables/playthroughs), the honest "Game Guide hasn't been published yet" notice, the per-game leaderboard's honest "no one ranked yet" empty state, and — confirming the Session Planner/Recommendation engine works against the new curated data, not just static display — a real "Recommended Next Achievement" card for Celeste (`Gateway` / "Collect a Cassette Tape" / Difficulty 1/5 / 15 min).
- Zero console errors from the app on either page (three console exceptions observed on the INSIDE page traced to an unrelated Chrome extension — `chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/`, nothing in this app's own code).
- One verification-environment snag, not an app bug: an early check via raw URL (`game.html?slug=X`) appeared to redirect to the homepage. Root-caused to a stale cached 301 redirect in the browser profile from an earlier session's use of a different static-file server (`serve`, whose default clean-URL rewriting drops query strings) — confirmed by testing an unrelated existing game (Portal 2) at the same cached URL, which also "redirected," and resolved by switching the verification origin from `127.0.0.1:5501` to `localhost:5501` (a different cache key, equally CORS-allowed). No code path in `game.js` was at fault; its only redirect is the pre-existing, correct `!slug` guard.
- Cleaned up: both dev servers stopped, browser tab closed.

## 7. Diff review

`git status` after implementation: **2 new data files** (`src/data/games/celeste.json`, `inside.json`), **2 new test files**, **3 modified test files** (`apiGamesRoute.test.js`, `popularRoute.test.js`, `plannerCatalog.test.js`), this audit document — plus the same 24 pre-existing unstaged phase-report deletions, unchanged and untouched. No production frontend/backend code was modified — confirming the "adding a game is a pure data change" wiring claim from §2.

## 8. Commit / push

Committed and pushed to `origin/main`. Commit: `60b1d6f` — `feat: Phase 72 - expand games catalog with Celeste and INSIDE`.

## 9. Phase-end report

- **Major functionality/section completed:** The games catalog grew from 3 to 5 real, fully-playable-planner titles — Celeste and INSIDE, both with complete, Steam-schema-verified achievement lists wired into every existing feature (browse/search/filter, game detail, session planner, recommendation engine, per-game leaderboard, guide-notice fallback) with zero new code paths.
- **Product completeness: ~60-65% before this phase → ~65-70% after.** The catalog-size signal was explicitly called out in Phase 71 as the next blocker after progress-persistence; this phase closes a meaningful chunk of it, though the catalog is still hand-curated (no admin/self-serve path to add more).
- **What a user can now do that they couldn't before:** Browse, filter, and build a session plan for Celeste and INSIDE — search the catalog, see real achievement counts/difficulty/time estimates, get a recommended next achievement, track claimed achievements, and see a per-game leaderboard — none of which existed for these titles before this phase (a 67% increase in real, usable catalog content).
- **Tests and verification:** 813/813 automated tests passing (13 new/updated). Live-verified in a real browser against the real backend: catalog listing, both new game detail pages, the recommendation engine, and the dynamic homepage stat, all confirmed working with zero app-level console errors.
- **Next highest-impact phase:** either (a) a production deploy path (Dockerfile/build script/hosting doc) — still the other blocker flagged in Phase 71, now more pressing since there's real, larger content worth publishing — or (b) continuing catalog growth further. Recommend deploy-readiness next, since the product itself is now substantial enough that "can we actually put this online" is the more urgent gap.
