# Phase 51 Audit (read-only)

## 1. Verified baseline

- `HEAD` = `origin/main` = `41bfccf8983ced4bafd7fb796d43b812e93a2516` (`fix(a11y): distinguish filter-chip labels, expose achievement-filter state, fix heading hierarchy` — Phase 50's implementation commit). Confirmed via `git fetch origin main` + `git rev-parse HEAD origin/main` (identical hashes).
- Root test suite: **615/615 passing** (`node --test`, repo root).
- Backend test suite: **300/300 passing** (`node --test`, `backend/`).
- Read `PHASE_50_AUDIT.md` in full (183 lines). Confirmed Phase 50 implemented exactly its approved scope (Findings 12/13/14, all accessibility) and left Findings 2, 3, 6, 8, 9, 10, and 11 open. Every one of those seven is re-verified fresh against current source below — none trusted from the prior report.

## 2. Working-tree caveats (reviewed before touching anything)

`git status --short` shows the working tree is **not** fully clean, and has grown since Phase 50:

- `PHASE_32/33/34/40/41/42/43/44/45/46_AUDIT.md` and `Phase_33/34_Implementation_Report.md` — the same 12 pre-existing unstaged deletions noted in Phase 50's own baseline.
- **New since Phase 50**: `PHASE_47_AUDIT.md`, `PHASE_48_AUDIT.md`, and `PHASE_49_AUDIT.md` are now also deleted (unstaged) — 3 additional files, not present in Phase 50's working-tree snapshot.

Per standing process ([[phase-workflow]] rule 11), a deleted prior-phase report is the user's own intentional cleanup, done at their discretion after reviewing it. All 15 deletions (12 carried over + 3 new) are left exactly as found — not restored, staged, committed, or otherwise touched by this audit. `PHASE_50_AUDIT.md` itself is still present on disk (confirmed via `ls`) and was read in full for this phase.

## 3. Re-verification of all outstanding findings (against current source, not the prior report)

All seven re-confirmed **still live, byte-for-byte unchanged** from Phase 50's description. Each was traced directly against the current file, not assumed from the prior audit:

- **Finding 2 — localStorage write-failure asymmetry.** Fresh grep of every `localStorage.setItem` call in `src/` returns the identical 6 sites: `src/utils/player/player.js:109`, `src/utils/player/avatar/avatarStorage.js:11`, `src/utils/player/inventory/inventoryStorage.js:71`, `src/utils/planner/session/sessionStorage.js:26,68`, `src/utils/planner/storage.js:30`. None wrapped in `try/catch`; no `safeSetItem` helper exists anywhere. **Unchanged. Still reachable only via an actual `setItem` exception (storage quota exhaustion, private/incognito-mode restriction) — LOW reachability, MEDIUM-HIGH severity if triggered. Proposed fix (a shared `safeSetItem` helper across 5 files) remains safe and unchanged.**
- **Finding 3 — slug collisions.** Confirmed by reading `backend/utils/gameMapper.js:12-27` directly: `derivedSlug` is still `rawName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")` with no post-hoc disambiguation for two owned, non-catalog Steam games whose names sanitize to the same string. `plannerByAppId` only protects the 3 curated catalog games. **Unchanged. LOW-MEDIUM reachability (needs two colliding owned games), MEDIUM severity. Proposed fix (post-hoc disambiguation in `buildGamesList()`/`getGameDetail()`) remains safe and unchanged.**
- **Finding 6 — `express-session` `MemoryStore` leak.** Confirmed by reading `backend/server.js:119-128` directly: `app.use(session({...}))` still has no `store:` option, silently defaulting to `MemoryStore`. **Unchanged. HIGH reachability (any login), MEDIUM severity (slow-burn memory growth). Proposed fix (a real persistent/pruning session store) remains a structurally invasive, session-infra-wide change — still correctly deferred, not a bolt-on.**
- **Finding 8 — dead `saveProgress` write.** Confirmed by reading `src/utils/planner/storage.js:14-38` and grepping every `localStorage.getItem` in `src/`: the `planner-${slug}` key is never read back by value anywhere — only prefix-matched and deleted by `src/dev/resetProgress.js:45`. **Unchanged. Informational, no user-facing effect.**
- **Finding 9 — duplicate player-apiname overwrite.** Confirmed by reading `backend/utils/achievementMerger.js:48-66`: `buildPlayerIndex` still does `byApiname.set(achievement.apiname, achievement)` unconditionally, with no duplicate-detection log, unlike its two siblings in the same file. **Unchanged. Not evidenced as reachable against Steam's real API shape.**
- **Finding 10 — `genres.js` missing `escapeHtml`.** Confirmed by reading `src/utils/catalog/genres.js:25-41`: `createGenresHTML()` still interpolates `genre` raw at both `value="${genre}"` and as element text, with no `escapeHtml` call. Data source (`game.genres` ← curated `src/data/games/*.json` only) also unchanged. **Unchanged. Not currently reachable.**
- **Finding 11 — `backend/utils/cache.js` unbounded growth.** Confirmed by reading `backend/utils/cache.js:1-35` directly: still a plain `Map` with only lazy eviction on exact-key re-read (`:13-18`), no `setInterval`/sweep of any kind (confirmed via fresh grep). Cache keys are still per-`steamId` (`player-summary:`, `owned-games:`, `profile-stats:`). **Unchanged. HIGH reachability (any real login), MEDIUM severity, same bug class as Finding 6. Proposed pairing with Finding 6 in a future dedicated "in-memory resource growth" phase remains the right call.**

No finding's severity, reachability, or proposed-fix safety has shifted since Phase 50's assessment. Nothing here is being re-fixed this phase, per the user's explicit scope rule.

## 4. Fresh-territory investigation

Two independent, explicitly-typed `general-purpose` agents were launched in parallel with non-overlapping scopes, each explicitly told to avoid every area already covered by Phases 46-50 (XSS/escaping, achievement merging, catalog freshness, `/popular` concurrency, session config, localStorage write sites, slug collisions, the SQLite leaderboard/podium layer, `cache.js`, player XP/leveling math, the podiums page, and the three just-fixed accessibility findings). Every finding reported by either agent was independently re-verified by me reading the actual current file/line myself before inclusion below — nothing was accepted on an agent's word alone; each is confirmed with my own read, and for the highest-severity one, a live reproduction against the running backend.

### Agent A — Backend: data-flow, error-handling, and dead/drifted-route audit

Scope: `backend/routes/api.js`'s `GET /api/profile` route (flagged by me beforehand as having zero frontend callers — worth checking whether it's genuinely dead or a drifted/unprotected surface), `backend/controllers/steamController.js` + `backend/services/steamAuth.js`'s error-handling paths (not the already-proven replay/regeneration security properties), `backend/utils/gameDetail.js`/`gameAchievementSummary.js`/`popularGames.js`/`plannerCatalog.js`, and `backend/server.js`'s error-handling completeness (a global error middleware / catch-all handler, checked concretely rather than assumed).

Reported and independently confirmed by me (see §5): a HIGH-severity missing-global-error-handler issue, and a MEDIUM/LOW data-shape drift in `/api/profile`. Everything else checked clean (see below).

### Agent B — Frontend: `game.js`/`profile.js` lifecycle, state, and rendering audit

Scope: `src/js/game.js` and `src/js/profile.js` read completely (the two largest, most stateful page controllers, never read in full by name in any prior phase), plus every util/component they drive for the poll/refresh/session/completion pipeline (`poller.js`, `filters.js`, `achievementManager.js`, `sessionManager.js`, `skipped.js`, `game-header.js`, `game-overview.js`, `planner-stats.js`, `session-planner.js`, `recommended-achievement.js`).

Reported and independently confirmed by me (see §5): a MEDIUM-severity stale-header-stat bug reachable during a completely normal successful flow, and a LOW-severity poller-idle-on-load-in-background-tab gap.

## 5. New findings (all independently verified by me against current source, one with a live reproduction)

### Finding 15 (NEW, HIGH severity, HIGH reachability, live-verified) — No global Express error handler; unmatched routing-level errors leak full server stack traces with absolute filesystem paths to any anonymous client

Confirmed by reading `backend/server.js` in full: it registers routers and two inline handlers (`:147-179`) and calls `app.listen` — there is no 4-argument `(err, req, res, next)` error-handling middleware anywhere in the file, and no catch-all 404 handler. Every route handler I checked (`api.js`, `games.js`, `steamController.js`) correctly wraps its own logic in `try/catch` + `sendServerError()` (`backend/utils/sendServerError.js` — the established "generic message to client, full detail logged server-side" pattern) — but that only protects errors thrown *inside* a handler body. It does not protect errors thrown by Express's own routing machinery *before* any handler runs.

**Live reproduction** (backend started fresh via `npm start`, confirmed no other instance was already running, stopped cleanly afterward):
```
$ curl -i "http://localhost:3000/api/games/%ff%fe"
HTTP/1.1 400 Bad Request
Content-Type: text/html; charset=utf-8
...
<pre>URIError: Failed to decode param &#39;%FF%FE&#39;<br>
    at decodeURIComponent (&lt;anonymous&gt;)<br>
    at decodeParam (C:\Users\jordi\OneDrive\Escriptori\AchievementPlanner\backend\node_modules\router\lib\layer.js:225:12)<br>
    at Array.match (C:\Users\jordi\...\path-to-regexp\dist\index.js:244:32)<br>
    ... (6 more stack frames, each with a full absolute filesystem path) ...
```
An invalid percent-escape in any `:param`-taking route segment (e.g. `routes/games.js:251`'s `/api/games/:slug`) throws a `URIError` inside Express's `router` package during path matching, before `games.js`'s own try/catch ever runs. With no custom error middleware, this falls through to Express's built-in `finalhandler`, which returns the raw stack trace as HTML — including the server's absolute install path — to an unauthenticated client. This is exactly the class of leak `sendServerError.js`'s own header comment says it exists to prevent (`"never error.message, which could otherwise leak internal implementation details"`), just not applied here because this error path never reaches any handler that calls it.

Confirmed the root cause: `NODE_ENV` is never set anywhere in this codebase (checked `server.js`, `backend/package.json`'s scripts, `backend/.env.example` — zero references), so Express's own production-mode stack-trace suppression (`finalhandler`'s default behavior in `NODE_ENV=production`) never activates.

Also confirmed a related, lower-severity consistency gap while reproducing: an unmatched route (`GET /nonexistent-route`) returns Express's default HTML "Cannot GET ..." 404 page, not JSON — inconsistent with the rest of this API, which `server.js:72-83`'s own comment explicitly describes as "a JSON+redirect-only API" with no HTML rendered anywhere.

**Reachability**: pre-auth, zero preconditions beyond a malformed URL segment on any `:param` route — trivially reachable by accident (a mangled link, a browser extension rewriting a URL) or deliberately (any automated scanner probing for information disclosure routinely sends malformed percent-encoding as a fingerprinting/recon technique). No existing test in `backend/test/` covers this path — confirmed via grep; `apiGamesRoute.test.js`'s existing 404 tests cover the application's own intentional "unknown slug" 404 (a real JSON response from inside the route handler), not this routing-level, pre-handler failure mode.

### Finding 16 (NEW, MEDIUM severity, HIGH reachability, independently verified) — `backend/routes/api.js`'s `GET /api/profile` route returns raw, unmapped Steam data — a stale, un-hardened shape inconsistent with the rest of the API

Confirmed by reading `backend/routes/api.js` in full: `router.get("/profile", ...)` (`:13-55`) is live and mounted (`server.js:149`, `app.use("/api", apiRoutes)`), session-gated the same way as `/api/profile/stats` (401 if no `steamId`), and its error handling correctly uses `sendServerError()` — no info-leakage drift there. Confirmed via grep across all of `src/` that **no frontend module calls this route** — only `/api/profile/stats` is called (via `src/utils/player/statistics/profileStatsClient.js`). It is reachable, not dead: any authenticated session-holder can hit it directly (a curl/Postman request bypasses CORS, which is browser-only enforcement), and it is mounted with no additional rate limiting beyond what `/api/profile/stats` also lacks.

The real issue is a data-shape one: line 43, `games: games.games`, returns the **raw**, unmapped `GetOwnedGames` Steam response directly — bypassing `gameMapper.js`'s `mapSteamGameSafe()` that every other game-returning endpoint (`routes/games.js`, `gameDetail.js`, `profileStatsController.js`) consistently applies. A consumer of this route gets raw Steam fields with no `slug`, no catalog/planner merge, no `owned`/`hasPlanner` flags — a completely different, older-looking shape than the rest of the API, that has apparently drifted out of sync as `/api/profile/stats` was hardened and became the actively-used path. Also fetches `getPlayerSummary` then `getOwnedGames` sequentially (`:31-33`) rather than in parallel — doubles this route's own latency for no reason (minor, self-contained).

**Assessment**: real and independently confirmed, but low user-facing impact today precisely because nothing calls it — the risk is forward-looking (a future frontend change reusing this route without realizing its shape has drifted) rather than a live, currently-exploited path. Not proposed as this phase's target; noted for completeness.

### Finding 17 (NEW, MEDIUM severity, HIGH reachability, independently verified) — `game.js`'s "Hours Played" header stat goes stale after the very first successful 60-second poll that picks up new Steam playtime

Confirmed by reading `src/js/game.js` and `src/components/game-header/game-header.js` in full, plus `src/utils/planner/progress.js`:

- `hoursPlayed = game.playtime ?? 0` is computed once (`game.js:146`) from the *initial* `getGame(slug)` fetch and baked into `createGameHeader(game, hoursPlayed)`'s static HTML (`game-header.js:88`: `<strong>${hoursPlayed} h</strong>`) — this element has **no `id`**, unlike the sibling `#progress-fill`/`#progress-counter`/`#progress-text`/`#progress-bar` elements in the same header, which `game-header.js`'s own header comment (`:8-11`) explicitly documents as being "re-confirmed... on every poll tick."
- The poller (`game.js:290-312`, built on the already-proven-correct `createPoller` from `poller.js`) re-fetches the game every 60s and, on a genuinely newer result, reassigns `game = freshGame` (`:296`) and calls `refresh()` (`:337-351`).
- `refresh()` calls `updateProgress(game)`, `updatePlannerStats(game)`, `renderRecommendation()`, `renderSession()`, `renderAchievementCards()`, and `initAchievementFilters()` — **none of which touch the header at all**. `updateProgress()` (`utils/planner/progress.js:5-26`) only ever writes to `#progress-fill`/`#progress-counter`/`#progress-text`/`#progress-bar` — confirmed by reading the full function, no other `getElementById` call exists in it.

**Trigger**: any user who leaves a game's planner page open while playing that game (a genuinely common, entirely successful, unremarkable flow — planning achievements *while* playing is close to the app's core use case), or who simply revisits an already-open tab after a session. The first poll (60s after page load) that observes a real Steam `playtime_forever` increase updates the achievement progress bar/counter live and correctly, while "⏱ Hours Played" — displayed in the same header, one stat away — silently keeps showing the value from page load. This is a plausible-looking-but-wrong number shown directly beside numbers that *are* live-updating, with no indication anything is stale.

**Assessment**: real, concrete, reachable during a completely normal successful flow with no error condition or rare precondition required — the strongest "wrong-but-plausible data" finding of this audit. Fix is low-complexity and low-risk: give the `<strong>` element an id (e.g. `#hours-played`) and add one `document.getElementById("hours-played").textContent = ...` line to `updateProgress()` or a small sibling function called from `refresh()`, following the exact pattern already proven correct for the other three header stats in the same file.

### Finding 18 (NEW, LOW severity, MEDIUM reachability, independently verified) — the 60-second poller runs on a full cadence indefinitely if the game page is loaded directly into an already-backgrounded tab

Confirmed by reading `game.js:312` (`poller.start(POLL_INTERVAL_MS)`, called unconditionally at load, with no check of `document.hidden`) together with the `visibilitychange` handler (`:448-465`), which only reacts to a visible→hidden or hidden→visible *transition* — and `poller.js:72-82`'s `start()`, confirmed to be a plain `setInterval` with no visibility awareness of its own. If a game page is opened directly into a background tab (middle-click/ctrl-click "open in new tab," or restored by the browser in a backgrounded state), `document.hidden` is `true` from the very first paint, but no transition event ever fires to stop the poller the intent-comment at `:442-447` clearly assumes will happen. The poller then runs every 60s indefinitely for a tab nobody is looking at, until (if ever) the user first switches to it.

**Assessment**: real and reachable, but low impact — `poller.js`'s dedupe guarantees still hold (no data-correctness risk, no stale-overwrite risk), so this is purely unnecessary background network/battery usage for an unviewed tab, not a user-visible bug. Lower priority than Finding 17.

## 6. Checked and confirmed correct (no finding)

- **`steamController.js` / `steamAuth.js`**: every error path uses `sendServerError()` consistently; a malformed/partial Steam OpenID response (e.g. missing `openid.claimed_id`) throws inside the same try block that already catches it, converting cleanly to a generic 500 with no leaked detail. Session mutations in `callback()` are ordered so a mid-flow failure never leaves a partially-authenticated session (`req.session.user` is only ever set as the final synchronous step).
- **`gameDetail.js`, `gameAchievementSummary.js`, `popularGames.js`, `plannerCatalog.js`, `gameMapper.js`**: owned-vs-catalog merge correctly unified via appid lookup; ranking/sorting/slicing logic has no off-by-one; malformed/unreadable catalog JSON is safely skipped (logged, not crashed) and never leaks into a consumer.
- **Poller dedupe** (`poller.js`, re-confirmed): a stale/late response can never overwrite a newer one; a bug inside `onResult` is caught and doesn't kill future polls.
- **`initAchievementFilters()`** (re-confirmed post-Phase-50): still correctly guards against duplicate listeners via `dataset.filterBound`, and correctly re-applies the active filter after achievement cards re-render.
- **Closure correctness in `game.js`**: `game`/`session` are read by reference in every render function, so poller reassignment (`game = freshGame`) correctly propagates everywhere except the one header gap (Finding 17) — confirmed by reading every function that closes over `game`.
- **`syncAchievementCompletion` → `saveProgress` ordering**: fully synchronous, no read-before-write race.
- **`profile.js`**: `refresh()` (avatar equip) is fully synchronous end-to-end — no possible overlapping-refresh race, since there is no async refresh path in this file. `fetchProfileStats()` never rejects (every failure path resolves to an explicit status), so `profile.js`'s unguarded `await` on it is not actually a stuck-loading risk. Click handlers use single `.onclick` assignment, not `addEventListener`, so no duplicate-listener accumulation is possible.
- **`guide.js`, `guides.js`, `navbar.js`** (read by me directly, not either agent): static/synchronous, no async state, no lifecycle surface at all — nothing to find.
- **`app.js`**: unchanged since Phase 49's clean read (confirmed via `git log` touching neither file since); not re-audited in full this phase.

## 7. Ranked by severity × reachability × user impact × risk × implementation complexity

| # | Finding | Severity | Reachability | User impact | Fix risk | Fix complexity |
|---|---|---|---|---|---|---|
| **15** | **NEW** — no global Express error handler (stack-trace/path leak) | **HIGH** | HIGH (pre-auth, zero precondition, live-reproduced) | Information disclosure (server internals) to any client, including automated scanners | Very low — purely additive middleware, zero behavior change to any working request | **LOW** |
| 6 | `MemoryStore` session leak | MEDIUM | HIGH (any login) | Indirect (slow-burn memory growth) | Low-risk change, but session-infra-wide | HIGH |
| 11 | `cache.js` unbounded growth | MEDIUM | HIGH (any login) | Indirect, same class as Finding 6 | Low, self-contained | LOW-MEDIUM |
| **17** | **NEW** — stale "Hours Played" header stat after poll | MEDIUM | HIGH (any user who plays while the page is open) | Direct: visibly wrong data next to live-updating data, on the app's core page | Very low — one id + one line, mirrors 3 already-correct siblings | LOW |
| **16** | **NEW** — `/api/profile` raw unmapped data shape drift | MEDIUM | LOW (no current caller; reachable only via direct API call) | None today (unused route); forward-looking risk only | Low | LOW |
| 3 | Slug collisions | MEDIUM | LOW-MEDIUM | One game permanently unreachable for that user | Medium | MEDIUM |
| 2 | localStorage write-failure asymmetry | MEDIUM-HIGH if triggered | LOW | Page crash / silent stall | Medium | MEDIUM |
| **18** | **NEW** — poller idle-tab-on-load gap | LOW | MEDIUM (background-tab load) | None functional, wasted background work only | Very low | LOW |
| 9 | Duplicate player-apiname overwrite | LOW/informational | Not evidenced | None | Trivial | Trivial |
| 10 | `genres.js` missing `escapeHtml` | LOW/informational | Not currently reachable | None | Trivial | Trivial |
| 8 | Dead `saveProgress` write | LOW/informational | N/A | None | Trivial | Trivial |

## 8. Recommended Phase 51 scope

**Target: fix Finding 15 — add a global Express error-handling middleware (and a JSON catch-all 404) to `backend/server.js`.**

This is the clear highest-value, lowest-risk candidate, based strictly on the evidence gathered this phase — not on how recently it was found:

- **It is the only HIGH-severity finding open anywhere across Phases 46-51.** Every deferred finding (2, 3, 6, 11) tops out at MEDIUM, and both other new findings (16, 17, 18) are MEDIUM or LOW.
- **Reachability is as high as it gets**: no authentication, no session, no specific user precondition — a single malformed URL segment on any `:param` route triggers it, and this was live-reproduced against the real running server in this session, not inferred.
- **It is a genuine information-disclosure issue** (absolute server filesystem paths, internal package/module structure) reachable by any anonymous client, including automated reconnaissance — a materially different risk category than the other open findings, which are either resource-growth (6, 11), user-specific data-integrity (3, 17), or effectively unreachable today (2, 8, 9, 10, 16).
- **Fix complexity and risk are minimal** — a single, additive 4-argument error-handling middleware registered after existing routes (reusing the already-established `sendServerError()` pattern for message/logging consistency) plus an optional catch-all JSON 404 handler. Neither touches any existing route's logic, the session/cookie configuration (Finding 6), `cache.js` (Finding 11), or any of the other deferred subsystems — it is strictly additive and cannot change behavior for any request that doesn't already fall through the routing layer uncaught.
- **It does not compete with Finding 17** on merit so much as on category: Finding 17 (stale Hours Played) is a real, low-complexity UI-correctness fix and a strong second candidate, but Finding 15 is higher severity, equally low-complexity, and — being a security/information-disclosure issue reachable by anonymous automated scanning — carries materially higher urgency. Given the standing process's rule 7 (security-sensitive phases get extra scrutiny) and the fact this can be fixed with no coupling to anything else in this audit, it is the stronger single-theme phase.
- **Finding 17 is recommended as the very next phase after this one** (or could reasonably be folded into the same phase as a second, unrelated-but-equally-low-risk fix if the user prefers a combined scope) — but per this audit's strict scope rule, no fix is being proposed for implementation in this document.

## 9. Findings that should remain explicitly deferred

- **Finding 6** — `MemoryStore` session leak. Still deliberately deferred (now across four consecutive phases: 47, 48, 49, 50) — needs a real persistent/pruning session store, a structural, session-infra-wide change warranting its own dedicated phase.
- **Finding 11** — `cache.js` unbounded growth. Same bug class as Finding 6; still recommended to be tackled together with it in a future dedicated phase.
- **Finding 2** — localStorage write-failure asymmetry. Real but low-reachability; a focused fix across 5 files deserves its own phase.
- **Finding 3** — slug collisions. Real but needs a specific precondition; the safest fix touches game-identity resolution and deserves focused scrutiny on its own.
- **Finding 8** — dead `saveProgress` write. Informational only.
- **Finding 9** — duplicate player-apiname overwrite. Informational; not evidenced as reachable.
- **Finding 10** — `genres.js` missing `escapeHtml`. Informational; not currently reachable.
- **Finding 16 (NEW)** — `/api/profile` raw data-shape drift. Real but currently unreachable in practice (no caller); worth a one-line fix (route through `mapSteamGameSafe`) the next time this route is touched for any other reason, not a standalone target.
- **Finding 17 (NEW)** — stale "Hours Played" stat. Real, low-complexity, and a strong candidate — but not this phase's target; recommended as the next phase, or a bundled second fix if the user prefers.
- **Finding 18 (NEW)** — poller idle-tab-on-load gap. Low severity, no correctness impact; worth a one-line fix (check `document.hidden` before the initial `poller.start()` call) whenever `game.js` is next touched for a related reason, not a standalone target.

## 10. Test/verification strategy for the recommended fix (Finding 15, for approval — not yet implemented)

- Add a 4-argument Express error-handling middleware at the end of `backend/server.js` (after all `app.use`/route mounts, per Express's requirement that error middleware be registered last), calling the existing `sendServerError(res, err, "global-error-handler")` so the response shape, logging behavior, and generic message are identical to every other error path in this codebase — no new message format introduced.
- Add a catch-all unmatched-route handler (`app.use((req, res) => res.status(404).json({success:false, message:"Not found"})`, or similar, matching this API's existing JSON-only convention) registered just before the error middleware, so an unmatched route also returns JSON instead of Express's default HTML 404 page — closing the related consistency gap noted alongside Finding 15.
- New backend test(s): a request with a malformed percent-encoded `:param` segment (e.g. `GET /api/games/%ff%fe`, mirroring this audit's live reproduction) must return a JSON body (not HTML), a safe generic message (not a stack trace or file path), and a non-2xx status — verify via a spawned-server test in the same style as `apiGamesRoute.test.js`. A second test for an entirely unmatched route (`GET /nonexistent-route`) asserting a JSON 404, not HTML.
- Regression check: every existing route's normal success and existing intentional-error paths (401s, validated 400s, the application-level 404 in `GET /api/games/:slug`) must remain byte-identical — the new middleware must only ever engage for errors that currently fall through uncaught, never intercept a response a route has already sent.
- Full root suite + backend suite run before and after to confirm zero regressions elsewhere.
- Live verification: re-run this audit's exact reproduction (`curl -i "http://localhost:3000/api/games/%ff%fe"`) against the fixed server and confirm the response is now JSON with a generic message and a 4xx/5xx status, no stack trace, no file path — plus a normal `GET /api/games` request to confirm the unrelated happy path is unaffected.

## 11. Explicit stop

This audit is read-only. No production code or test was modified this phase — confirmed via `git status --short` showing only the pre-existing, user-initiated deletions of old phase-report `.md` files (now 15, up from 12 at Phase 50's baseline — see §2) plus this new audit document, nothing else.

Findings 2, 3, 6, 8, 9, 10, and 11 were **not** fixed this phase, per the explicit scope rule. Findings 15, 16, 17, and 18 are new and also **not** fixed — this document is a proposal only.

Waiting for explicit approval on the Finding 15 scope above (or a different scope, at the user's discretion) before implementing anything.

**Do not start implementing Phase 51. Do not start Phase 52.**

## 12. Implementation report (approved scope: Finding 15 only)

Approved and implemented exactly the scope in §10 above. No other finding (2, 3, 6, 8, 9, 10, 11, 16, 17, 18) was touched.

### Changes

- **`backend/server.js`**: added one import (`sendServerError` from `./utils/sendServerError.js`) and two `app.use` calls, both registered after every existing route mount and the two inline `app.get("/")`/`app.get("/api/me")` handlers, and before `app.listen`:
  - A catch-all unmatched-route handler returning `{success:false, message:"Not found"}` with a `404` status, so any request matching no route gets this API's existing JSON convention instead of Express's default HTML "Cannot GET ..." page.
  - A 4-argument error-handling middleware, registered last (per Express's requirement), that delegates to the same `sendServerError(res, err, "global-error-handler")` every other error path in this codebase already uses — identical response shape, generic message, and server-side logging, no new pattern introduced.
  - Total diff: +32/-0 lines, one file. Nothing else in `server.js` was touched — no route logic, no session/cookie config (Finding 6), no CORS/helmet config.
- **`backend/test/globalErrorHandler.test.js`** (new file, 4 tests): spawns the real, unmodified `server.js` as a child process (same pattern as `apiGamesRoute.test.js`/`server.test.js`). Covers:
  1. `GET /api/games/%ff%fe` (this audit's live-reproduced case) returns a JSON error (not HTML), with a message containing no `URIError`, no `at decodeURIComponent`, no `node_modules`, and no absolute Windows path.
  2. `GET /nonexistent-route` returns a JSON `404` (not Express's default "Cannot GET" HTML page).
  3. `GET /api/games` (an unaffected normal route) still returns its existing `200` JSON shape, unchanged.
  4. `GET /api/games/this-game-does-not-exist-anywhere` (the route's own pre-existing, intentional 404 from inside its handler) still returns its own descriptive message, proving the new catch-all never intercepts a response a route has already sent.

### Test results

- Focused suite (`node --test test/globalErrorHandler.test.js`, from `backend/`): **4/4 passing.**
- Full backend suite (`node --test`, from `backend/`): **304/304 passing** (300 pre-existing + 4 new), zero regressions.
- Full root suite (`node --test`, from repo root): **619/619 passing** (615 pre-existing + 4 new — the backend suite is included in the root run), zero regressions.

### Diff review

`git status --short` after implementation shows exactly: `backend/server.js` modified, `backend/test/globalErrorHandler.test.js` new, this file (`PHASE_51_AUDIT.md`) new/modified — plus the 15 pre-existing unstaged phase-report deletions, untouched, exactly as found at the start of this phase (verified byte-for-byte identical list before and after). `git diff -- backend/server.js` reviewed in full: strictly additive (one import line, two new `app.use` blocks with explanatory comments), no existing line changed or removed.

### Live verification (real backend, `npm start`, confirmed no prior instance running on port 3000, stopped cleanly afterward via the listening PID)

- `curl -i "http://localhost:3000/api/games/%ff%fe"` → `HTTP/1.1 500 Internal Server Error`, `Content-Type: application/json`, body `{"success":false,"message":"Something went wrong. Please try again later."}` — no stack trace, no file path, no `URIError` text. This is the exact command from this audit's original reproduction (§5, Finding 15); it now returns a safe response.
- `curl -i "http://localhost:3000/nonexistent-route"` → `404`, JSON body `{"success":false,"message":"Not found"}` — not Express's HTML "Cannot GET" page.
- `curl -s "http://localhost:3000/api/games"` → unchanged `200` JSON shape (`success:true`, `count`, `games` array with the 3 catalog games) — confirms the fix has zero effect on a normal, unaffected route.
- `curl -s "http://localhost:3000/"` → unchanged `{"success":true,"message":"Achievement Planner Backend"}`.

### Explicit scope confirmation

Findings 2, 3, 6, 8, 9, 10, 11, 16, 17, and 18 were **not** touched this phase — confirmed by the diff review above showing only `backend/server.js` (the Finding 15 fix) and the one new test file changed. Phase 52 was **not** started. The 15 pre-existing unstaged phase-report deletions were left completely untouched throughout — not restored, staged, or committed.

### Commit/push

Working tree confirmed clean (all tests passing, diff reviewed, live verification complete) — committed and pushed per the user's explicit instruction, scoped to exactly the files listed above (the pre-existing unstaged deletions were left out of the commit, untouched).
