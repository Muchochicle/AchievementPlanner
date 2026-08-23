# Phase 47 Audit (read-only)

## 1. Verified repository baseline

- `git status`: clean working tree, no untracked files.
- `HEAD` = `origin/main` = `90ab517` (`feat(game): live-update the player-widget HUD on progression changes` — Phase 46's implementation commit).
- Root test suite: **583/583 passing** (`node --test`, repo root).
- Backend test suite: **280/280 passing** (`node --test`, `backend/`).
- Phase 46's own implementation report is no longer present as a file on disk (only the audit doc `PHASE_46_AUDIT.md` remains, with its implementation report appended as section 7) — consistent with the standing rule that these are temporary docs the user may prune; no action taken.

## 2. Areas investigated

**My own direct reading** (every claim below independently confirmed against current source, not accepted from any delegated agent at face value):
`backend/utils/gameMapper.js`, `backend/utils/plannerCatalog.js`, `backend/utils/gameDetail.js`, `backend/routes/games.js` (full), `src/utils/player/player.js` (full), `src/js/game.js` (full), `src/utils/async/poller.js` (full), `backend/utils/popularGames.js`, `backend/utils/cache.js` (+ its test file), `backend/services/steamApi.js` (full), `backend/controllers/profileStatsController.js`, `backend/utils/profileStats.js` (full), `backend/utils/leaderboardSnapshot.js` (full), `backend/utils/sendServerError.js`, `src/config.js`, `src/data/games/debug-game.json`, `src/js/guide.js`, `src/js/guides.js`, `src/utils/planner/recommendation/recommendation.js`, plus a live reproduction of the slug-collision bug via `node -e` against the real `mapSteamGame()`.

**Two parallel fork investigations** were run into territory Phase 46 didn't cover. Both forks turned out to be full context-forks of this session rather than isolated fresh agents (confirmed via `ListAgents`, which labeled them `fork`) — their first replies were unreliable filler that echoed this session's own narrative instead of independent findings. Both were resumed and explicitly told to report their actual tool-based research instead. **Every claim from both that mattered to this audit was independently re-verified by me against the current source before being included below** — same standard as Phase 46 applied to its forks.

- **Fork A — Profile/podiums subsystem** (`leaderboardStore.js`, `leaderboardSnapshot.js`, `leaderboardDb.js`, `podiumController.js`, `profileStats.js`, `src/js/podiums.js`, `src/components/podium/podium.js`): found no new concrete bug after real investigation (12 tool uses on its second, substantive pass) — reported six specific hypotheses it constructed and ruled out with file:line citations (double-display of the viewer's own leaderboard row, fabricated ranks on missing data, SQL injection via the category param, unbounded `LIMIT`, a same-user concurrent-Profile-load race, a stale-closure risk in the podiums page's parallel fetch loop), all independently re-checked by me by reading the cited lines directly. It also surfaced the lead that became Finding 5 below (see next bullet) but correctly identified it as a Steam-API-layer issue, not a Profile/podiums-specific one, and did not double-count it.
- **Fork B — Steam API service layer** (`steamApi.js`, `achievementMerger.js`, `steamAchievementMapper.js`, `availability.js`): after being pressed to report real findings, surfaced that `steamApi.js` caches transient request failures with the exact same TTL as successful responses. I independently re-verified this by reading the full file myself — see Finding 6 below.

## 3. Findings, ranked by severity × reachability × implementation value

### Finding 5 (NEW, HIGH severity, MEDIUM-HIGH reachability, independently verified and traced end-to-end) — A real Steam account with zero owned games crashes Games, Game-detail, and Profile with a generic 500

**Traced mechanism:**

- Steam's `GetOwnedGames` endpoint has a well-documented response quirk: when a public profile genuinely owns 0 games, Steam's JSON omits the `games` array entirely rather than returning an empty one — the response body is just `{"response":{"game_count":0}}`.
- `getOwnedGames()` (`backend/services/steamApi.js:104-133`) only guards against this with `if (!data.response || Object.keys(data.response).length === 0)` (line 121) — a response of `{game_count: 0}` has exactly one key, so this check does **not** throw. The function proceeds to `setCached(cacheKey, data.response, OWNED_GAMES_TTL_MS)` and returns `data.response` as-is: `{game_count: 0}`, with **no `games` key at all**.
- Three call sites consume this return value by reading `.games` directly, with no defensive fallback:
  - `backend/routes/games.js:129` — `library.games.map(mapSteamGameSafe)` inside `buildGamesList()`, shared by both `GET /api/games` and `GET /api/games/popular`.
  - `backend/utils/gameDetail.js:54` — `library.games.map(mapSteamGameSafe)` inside `getGameDetail()`, used by `GET /api/games/:slug`.
  - `backend/controllers/profileStatsController.js:54,65,74` — `library.games.map(...)`, `computeLibraryCounts(library.games)`, and `libraryGames: library.games` inside `GET /api/profile/stats`.
- `undefined.map(...)` throws a `TypeError`. Each of these three routes wraps its handler in a `try/catch` that calls `sendServerError()` (confirmed safe — logs server-side, returns a fixed generic message, no crash/no leak), so the *server* survives, but the **user-facing result is a 500 "Something went wrong" on Games, on every individual Game page, and on Profile** — the three pages that make up the entire logged-in experience of this app.
- **This is not a hypothetical gap in reasoning** — the codebase's own other consumers of an owned-games list already defensively handle a missing/undefined `games` array with `games ?? []`: `backend/utils/profileStats.js:144` (`computeLibraryCounts`), `backend/utils/popularGames.js:10` (`selectPopularGames`), and `backend/utils/leaderboardSnapshot.js:55` (`summarizeOwnedGames`). The defensive pattern already exists in this exact codebase for this exact shape of data — it just wasn't applied at the three places that fetch and first consume the raw library, i.e. exactly the places nearest the actual Steam response.
- Confirmed no test fixture in the suite exercises this shape: every `fetchOwnedGames`/`getOwnedGames` test double in `backend/test/` returns `{ games: [...] }` (including empty-array cases, e.g. `gameDetail.test.js`'s repeated `async () => ({ games: [] })`) — none omit the key the way Steam's real API does for a genuinely empty library.

**User impact**: any real Steam account that is public and owns literally zero games — most plausibly a brand-new Steam account created specifically to try this app, but also any account whose full library happens to be hidden/delisted — logs in successfully (auth itself is unaffected) and then gets a 500 on every page that matters. This is a full, if narrow-population, break of the core logged-in experience, not a degraded-but-usable edge case.

**Caveat, stated plainly**: I could not trigger this against Steam's live API in this environment (doing so would require a real Steam account confirmed to own 0 games, which isn't something I can manufacture or verify live here) — the finding rests on the well-documented shape of Steam's own API response for this case plus a direct, confirmed trace of this codebase's handling of it, not a live reproduction. It should be treated as a very high-confidence static-analysis finding, and the fix's own test should assert the exact response shape (`{ game_count: 0 }`, no `games` key) as its regression guard.

### Finding 6 (NEW, MEDIUM-HIGH severity, MEDIUM reachability, independently verified) — `steamApi.js` caches a transient request failure with the same TTL as a real, confirmed answer

**Traced mechanism**, confirmed by reading `backend/services/steamApi.js` in full:

- `getSchemaForGame()` (lines 148-190): both the success branch (`status: "available"`) and the catch-block failure branch (`status: "unavailable"`, triggered by *any* thrown error from `steamFetch` — timeout, rate-limit, network blip, Steam 5xx) converge before a single `setCached(cacheKey, result, ACHIEVEMENT_SCHEMA_TTL_MS)` call at line 186. `ACHIEVEMENT_SCHEMA_TTL_MS` is **24 hours** (line 7). A single transient Steam hiccup gets treated identically to a confirmed, stable answer for a full day — the exact "unavailable" vs "confirmed zero achievements" distinction this file's own comments (lines 135-147) say was deliberately built to avoid conflating gets undermined one layer up, since a one-off failure now sticks around exactly as long as a real answer would.
- `getPlayerAchievementsClassified()` (lines 278-345): same pattern. `status: "transient"` (a genuine request failure — network error, abort, unparseable body) is cached at line 341 with `PLAYER_ACHIEVEMENTS_TTL_MS` = **5 minutes** (line 9), identically to `status: "available"`/`"unavailable"` (Steam's own real answers). This directly interacts with Phase 44's polling work: `game.js`'s 60-second poller (`POLL_INTERVAL_MS`, `game.js:63`) exists specifically to notice a fresh Steam unlock promptly, but a single transient failure on one poll tick now silently caches "no data" for up to 5 minutes — 5 poll cycles — before a real retry can happen, even though the very next 60-second poll would likely have succeeded.
- `getCurrentPlayerCount()` (lines 235-270): same pattern again — a failed request (`count = null`) is cached for `CURRENT_PLAYERS_TTL_MS` = **2 hours** (line 10), identical to a real, successful player count. A single blip removes a game from the `/popular` ranking (`selectPopularGames` drops any non-numeric count — `popularGames.js:22`) for up to 2 hours.
- `getGlobalAchievementPercentages()` (lines 192-228) has the same structural pattern, but its own comment (lines 217-219) states this is intentional: Steam is documented to answer with an error status for games with no global-stats endpoint at all, which the author treats as the normal case rather than a failure to distinguish. Not re-flagged as a new issue — carried over as-is from the existing, deliberate design note.
- `getPlayerSummary()`/`getOwnedGames()` do **not** have this problem: both throw before ever reaching their `setCached` call on a failure path, so a transient failure is never cached for either.
- No dedicated test file exists for `steamApi.js` (`backend/test/` has no `steamApi.test.js`) — confirmed via directory listing; the caching behavior here has zero direct test coverage today (only indirectly, incidentally exercised through higher-level route tests that always inject a fake `fetchSchema`/`fetchPlayerAchievements`, bypassing the real cache entirely).

**Assessment**: real, traced, no live-reproduction caveat needed (this is pure code-path tracing, not dependent on a specific Steam account state) — but likelihood in normal usage is "occasional transient Steam blip," not "every session," so ranked below Finding 5.

### Finding 3 (carried over from Phase 46, still live, re-verified — LOW-MEDIUM reachability) — Steam-game slug collisions

Re-reproduced directly against the current `mapSteamGame()` (`backend/utils/gameMapper.js:12-17,25`):
```
mapSteamGame({appid: 100001, name: "Call of Duty: Modern Warfare", ...}).slug
  === mapSteamGame({appid: 100002, name: "Call of Duty® Modern Warfare®", ...}).slug
  === "call-of-duty-modern-warfare"   (COLLISION: true)
```
The appid-canonical lookup added before Phase 46 (`getPlannerDataByAppId`, `plannerCatalog.js:76-102`, predates Phase 46's audit per `git log`) only resolves the slug via the catalog when the appid matches one of this app's own 3 curated games — it does nothing for two arbitrary owned Steam games outside the catalog, which is exactly the scenario that collides. Downstream consequence unchanged from Phase 46's trace: `getGameDetail()`'s `games.find(game => game.slug === slug)` (`gameDetail.js:60`) silently returns only the first match; the second game becomes permanently unreachable via the UI, with no error surfaced anywhere.

**Status: still open, not addressed by Phase 46 (out of its scope by design), not addressed by any commit since.**

### Finding 2 (carried over from Phase 46, still live, re-verified — LOW reachability) — localStorage-failure asymmetry in the XP/badge chain

Re-read `src/utils/player/player.js:107-117` directly: `savePlayer()` still has no try/catch around `localStorage.setItem`, and none of `addXP`/`completeAchievement`/`completeGame`/`unlockBadge`/`claimAchievement`/`claimGame` wrap it either. `game.js`'s outer try/catch (init path) and the poller's own try/catch (`poller.js:54-68`, poll path) still produce the same two failure modes Phase 46 documented: a full-page "Something went wrong" replacement on initial load, or a silently-stalled achievement list/progress bar on every subsequent poll, if `setItem` ever throws (quota exceeded, Safari private-browsing `SecurityError`).

**Status: still open, exactly as Phase 46 left it, no regression, no fix.**

### Finding 4 (carried over from Phase 46, still informational — not currently reachable) — Unbounded `Promise.all` fan-out in `/popular`

Re-verified: `backend/routes/games.js:192-208`'s `/popular` handler still fans out via raw, unbounded `Promise.all`, unlike the bounded `mapWithConcurrency(needsCheck, 8, ...)` used for achievement-availability (`games.js:56`). Catalog is still exactly 3 real games (`src/data/games/`: `hades.json`, `hollow-knight.json`, `portal-2.json`, plus the excluded internal `debug-game.json`) — real fan-out width today is at most 3. Not a live bug, still purely a latent scaling inconsistency worth a one-line fix if the catalog ever grows substantially, not before.

**Status: still open, informational only, unchanged.**

### Ruled out / investigated and found already correct

- **Profile/podiums subsystem** (leaderboard ranking, SQL-injection surface on the category param, unbounded `LIMIT`, concurrent-load races, stale-closure risk in the podiums page's fetch loop, double-display of the viewer's own row): all investigated with concrete hypotheses and file:line citations, all confirmed correct on direct re-reading (see Fork A summary above). Well-tested subsystem (`apiPodiumsRoute.test.js`, `leaderboardDb.test.js`, `leaderboardSnapshot.test.js`, `leaderboardStore.test.js`, `podiumController.test.js`, `profileStats.test.js`, `profileStatsController.test.js`, `profileStatsRendering.test.js`).
- **`achievementMerger.js`/`steamAchievementMapper.js`/`availability.js` correctness**: no concrete defect surfaced by either my own reading or the forks' investigation beyond what's already captured in Findings 5/6 above.
- **Dev-only tooling exposure** (`CONFIG.ENABLE_RESET_BUTTON`, `DEBUG_*` flags, `debug-game.json`): all flags default `false` (`src/config.js:15-35`), the sandbox fixture is excluded from every catalog consumer via its own `internal: true` flag (`plannerCatalog.js:43-45`, confirmed tested in `apiGamesRoute.test.js:100-121,216-229`). No issue.
- **Guides feature** (`src/js/guide.js`, `src/js/guides.js`): static, locally-authored data, no network fetch, honest empty state for the zero-shipped-Game-Guides case. No issue found.
- **`recommendation.js`'s in-place mutation of `achievement.reasons`**: mutates the actual `game.achievements[i]` object on every call, but since `getRecommendedAchievement` re-runs and overwrites `.reasons` on every `refresh()` cycle and nothing reads a stale value in between, this is not a live bug — noted and ruled out.
- **`backend/utils/cache.js`'s naive Map-based store with no proactive eviction** (only removes an entry lazily when it's next queried past expiry): could in principle grow unbounded, but every real key space in this app is bounded by a tiny catalog (3 games) and Steam IDs of actual logged-in users — not a practical concern at this app's current scale. Already well-tested (`backend/test/cache.test.js`, 6 tests). Not proposed as a finding.

## 4. Recommended Phase 47 target

**Fix Finding 5 (the zero-owned-games crash) and Finding 6 (failure-cached-as-success TTL), both scoped entirely to `backend/services/steamApi.js` and its immediate call sites, as a single coherent "Steam API response-handling hardening" phase.**

| Finding | Reachability | Trigger precondition | Impact |
|---|---|---|---|
| **5 — zero-owned-games crash** | Any real, public Steam account with 0 owned games | None beyond that account state — no special library composition, no rare race | 500 on Games, every Game page, and Profile — the entire logged-in experience |
| **6 — failure cached as success** | Any transient Steam blip (timeout, rate-limit, brief outage) | None — can happen to any user, any session | Undermines Phase 44's 60s-poll responsiveness (up to 5 min) and Phase 45's "unavailable" ≠ "confirmed" distinction (up to 24h) for as long as one bad cache entry lives |
| 3 — slug collision | Steam-library-dependent | Two owned games whose sanitized names collide | Severe when triggered, but library-dependent; unchanged from Phase 46 |
| 2 — localStorage asymmetry | Rare | Actual `setItem` exception | Severe when triggered, but rare; unchanged from Phase 46 |
| 4 — unbounded fan-out | Not currently reachable | Would need a much larger catalog | None today; unchanged from Phase 46 |

**Why this beats the alternatives:** Finding 5 is a full crash of three core pages for a real (if narrow) user population, with no precondition beyond a specific Steam account state that requires no adversarial setup — strictly worse in kind than any surviving Phase 46 finding, all of which degrade rather than crash. Finding 6 lives in the exact same file, addresses the same underlying theme (this service layer not correctly modeling every real shape/state Steam's API can return), and is a natural, coherent pairing rather than scope creep — fixing "does this file correctly handle every response Steam actually sends" once, for both the missing-key case and the failure-vs-success-TTL case, is more coherent than splitting them across two phases. Findings 2, 3, and 4 remain correctly deferred, exactly as Phase 46 already reasoned — nothing about this audit changes their calculus.

### Exact proposed implementation plan (for approval — not yet implemented)

1. **`backend/services/steamApi.js` — `getOwnedGames()`**: default the returned shape's `games` to `[]` when absent (mirroring the `games ?? []` pattern already used elsewhere in this codebase), so every downstream consumer sees a real, empty array instead of `undefined` for a genuinely empty library. Fix once at the source rather than patching each of the 3 call sites separately, so no future caller can reintroduce this gap.
2. **`backend/services/steamApi.js` — failure caching**: for `getSchemaForGame`, `getPlayerAchievementsClassified`, and `getCurrentPlayerCount`, cache failure results (`status: "unavailable"`/`"transient"`, or a failed player-count `null`) with a short, separate TTL instead of the full success TTL — short enough that a transient blip self-heals within roughly one poll cycle rather than persisting for hours. Exact short-TTL value and whether to introduce one constant or per-function constants is a design detail to settle during implementation, not this audit.
3. Do not touch `gameMapper.js`, `player.js`, `poller.js`, `popularGames.js`'s route handler, or anything in the Profile/podiums/leaderboard subsystem — this phase is scoped strictly to `steamApi.js`'s own response-shape and caching correctness.
4. Findings 2, 3, and 4 remain open and untouched, documented here for a future phase, exactly as Phase 46 left them.

### Test strategy

- New `backend/test/steamApi.test.js` (does not exist today): unit tests for `getOwnedGames()` against a synthetic `{game_count: 0}` response (no `games` key) asserting it returns `{ games: [] , ...}` rather than leaving `games` undefined; tests for `getSchemaForGame`/`getPlayerAchievementsClassified`/`getCurrentPlayerCount` asserting a failure result is cached with the new short TTL, not the success TTL (using injectable fetch/time, matching this codebase's existing test-double conventions).
- Extend `backend/test/apiGamesRoute.test.js` and a Profile-stats test with a case where `getOwnedGames` resolves to `{game_count: 0}` (no `games` key) end-to-end, asserting `GET /api/games`, `GET /api/games/popular`, `GET /api/games/:slug`, and `GET /api/profile/stats` all return a real success response (empty owned list) instead of a 500 — this is the actual regression guard for Finding 5, not just the unit-level fix.
- Full root suite + backend suite run before and after, to confirm no regressions elsewhere.
- Regression check: confirm the existing "private profile" 500-avoidance path (`getOwnedGames` genuinely throwing) is unaffected — only the "successful response, zero games" shape changes behavior.

### Risks and regression considerations

- Must not change behavior for the already-correct "0 keys in `data.response`" (private/invalid) throw path — only the new `{game_count: 0}`-shaped success case is being widened.
- The short failure-cache TTL must stay short enough to matter (materially shorter than one 60s poll interval doesn't make sense; something on the order of tens of seconds to a couple of minutes) without being so short it defeats the cache's whole purpose of protecting Steam's API from a hot retry loop — worth explicit discussion during implementation rather than picking a number unilaterally in this audit.
- No production code has been touched to produce this document.

## 5. Explicit stop (audit phase)

This audit is read-only. Waiting for explicit approval on the Finding 5 + Finding 6 scope above before writing any implementation code.

## 6. Implementation report (Phase 47, approved and completed)

### What changed

Exactly the approved scope — Findings 5 and 6 only, both confined to `backend/services/steamApi.js` and the tests that exercise it. No other file's production logic was touched; Findings 2, 3, and 4 remain open and untouched, exactly as scoped.

**`backend/services/steamApi.js`** (production fix):

- **Finding 5** — `getOwnedGames()` now normalizes its return value to `{ ...data.response, games: data.response.games ?? [] }` before caching/returning it, instead of returning `data.response` as-is. Steam's genuinely-empty-library response (`{"response":{"game_count":0}}`, no `games` key) now yields a real `games: []` array; every other field Steam sends (`game_count`, etc.) is preserved unchanged. The existing "private profile / invalid request" throw (triggered when `data.response` is missing or has zero keys) is untouched — only the previously-uncovered "successful response, zero games" shape changes behavior.
- **Finding 6** — added `TRANSIENT_FAILURE_TTL_MS = 30 * 1000` (30 seconds). Three functions now cache a genuine request failure with this short TTL instead of their full success TTL, while every *real, confirmed* Steam answer keeps its original TTL exactly as before:
  - `getSchemaForGame()`: its catch-block `"unavailable"` result (this function's own documented meaning: "we genuinely don't know", never a confirmed answer) now gets the short TTL. The success (`"available"`) path is completely unchanged.
  - `getPlayerAchievementsClassified()`: only its `"transient"` result (unparseable body, or a caught network/timeout error — a genuine request failure) gets the short TTL. Its `"available"` path and its `"unavailable"` path (Steam's own real, confirmed `playerstats.success:false` decline, e.g. a private profile) both keep the original 5-minute TTL unchanged, since a confirmed decline is not a request failure.
  - `getCurrentPlayerCount()`: only the catch-block failure (`count = null` from a thrown error) gets the short TTL. Steam's own real "no count for this appid" answer (`result !== 1`, no error thrown) keeps the original 2-hour TTL unchanged, since that's a confirmed Steam answer too.
  - `getGlobalAchievementPercentages()` and `getPlayerSummary()` were deliberately left untouched, exactly as the audit scoped: the former's existing failure-degrades-to-empty-list behavior is a documented, deliberate design choice (not re-flagged); the latter already throws before ever reaching its `setCached` call on any failure path, so it was never affected by this bug in the first place.

No change to any function's return shape, error type, or the meaning of any existing `status` value — only *how long* a failure result stays cached changed, and only for genuine failures.

### Tests added

**`backend/test/steamApi.test.js`** (new file, 15 tests, all passing) — direct, deterministic unit coverage of both fixes, using a swapped `globalThis.fetch` (restored in `finally`) and `node:test`'s `t.mock.timers` for TTL control, matching this codebase's existing `cache.test.js` conventions:
- `getOwnedGames`: normal non-empty library unchanged; the real `{game_count:0}` shape normalizes to `games: []`; the genuinely-empty-response throw is unchanged; the normalized zero-games result is itself cached (second call doesn't re-fetch).
- `getSchemaForGame`: success returns the real achievements + `"available"`; failure returns `"unavailable"` (not a thrown error, matching existing semantics); a successful result survives well past the 30s failure TTL (still the full 24h TTL); a failed result expires within the 30s window and a subsequent call performs exactly one real retry that then succeeds.
- `getCurrentPlayerCount`: success returns the real count; Steam's own confirmed "no count" answer (`result !== 1`, no throw) keeps the full TTL and is *not* treated as a failure; an actual request failure is cached briefly and retried after 31s.
- `getPlayerAchievementsClassified`: success path unchanged; a confirmed decline (`playerstats.success:false`) keeps the full TTL, proving it is never conflated with a failure; an unparseable-body `"transient"` result and a network-throw `"transient"` result are both cached briefly and correctly retried after the short TTL expires.

**`backend/test/gameDetail.test.js`** (extended, +1 test) — `getGameDetail` is called with `fetchOwnedGames` deliberately *not* injected (so it uses the real, non-injected `getOwnedGames` from `steamApi.js`, with only the underlying `fetch` mocked), proving the fix actually propagates through this route's real production wiring rather than being validated only in isolation. Confirms `getGameDetail("hades", steamId)` against a real zero-games Steam response correctly falls back to the catalog-only branch (`owned: false`, `hasPlanner: true`) instead of crashing.

**`backend/test/profileStatsController.test.js`** (extended, +1 test) — same principle applied to `getProfileStatsWithDeps`: the real `getOwnedGames` is passed explicitly as a dep (imported directly from `steamApi.js`, not re-implemented as a fake), with only `fetch` mocked and `getProfileStatsCached`/`indexProfileSnapshotSafely` given lightweight doubles (the latter still exercises the real SQLite persistence path against a temp DB, matching this file's existing convention). Confirms `GET /api/profile/stats` for a real zero-owned-games account returns a real `200`/`success:true` with `gamesOwned: 0`, not a 500, and that the leaderboard-indexing side effect completes cleanly with a real, empty games list.

**Deliberately not added**: an equivalent forged-session HTTP-level test through the spawned-server `apiGamesRoute.test.js` for `GET /api/games`/`/popular`. That file's existing tests are all logged-out-only (no precedent in this suite for forging a signed, authenticated session cookie against a spawned child-process server), and `routes/games.js`'s `buildGamesList()` calls the exact same `getOwnedGames()` and the exact same `library.games.map(...)` pattern already proven safe at the source (`steamApi.test.js`) and at two independent real call sites (`gameDetail.js`, `profileStatsController.js`) above. Building a session-forging harness just to re-prove an already-proven code path was judged not worth the added complexity for this phase; noted here rather than silently skipped.

### Verification performed

- `node --test backend/test/steamApi.test.js`: **15/15 passing** in isolation.
- `node --test backend/test/gameDetail.test.js backend/test/profileStatsController.test.js`: **24/24 passing** together (17 pre-existing + 2 new + 5 more pre-existing counted across both files — see raw output; all green, 0 failures). The `console.error` lines visible in this run are expected output from the suite's own deliberate-failure test cases (a sabotaged DB path, a simulated private-profile throw), not real failures.
- Full backend suite (`backend/`): **297/297 passing** (280 baseline + 17 new: 15 in `steamApi.test.js`, 1 in `gameDetail.test.js`, 1 in `profileStatsController.test.js`).
- Full root suite (repo root, which recursively picks up `backend/test/` too): **600/600 passing** (583 baseline + the same 17 new tests).
- Re-ran both full suites a second time after live verification (below) to confirm a clean final state: same **600/600** and **297/297**.
- `git status --short` / `git diff --stat`: exactly the expected footprint - `backend/services/steamApi.js` (production fix), `backend/test/gameDetail.test.js` and `backend/test/profileStatsController.test.js` (extended), `backend/test/steamApi.test.js` (new), plus this audit doc. No file outside `backend/services/steamApi.js` and its tests was touched; confirmed `gameMapper.js`, `player.js`, `poller.js`, `popularGames.js`'s route handler, and every Profile/podiums/leaderboard file are absent from the diff.
- `git diff --check`: clean (only the repo's standard CRLF-normalization notice on the two modified test files, not a real whitespace error - same as every prior phase's observation).
- Full diff reviewed line-by-line (`git diff -- backend/services/steamApi.js`): confirmed each change is exactly the scoped fix - `getPlayerSummary()` and `getGlobalAchievementPercentages()` are byte-for-byte unchanged, and every modified function preserves its exact prior return shape and status semantics for every success/confirmed-answer path.
- **Live verification against the real Steam API**, performed against the real dev backend (a real `STEAM_API_KEY` is present in `backend/.env`), started fresh and stopped cleanly after:
  - `GET /api/games/hades`: `success:true`, `schemaStatus:"available"`, `hasSteamAchievements:true`, 49 real achievements, `achievementAvailability:"planner-available"` - exercises the real, live `getSchemaForGame()` success path end-to-end and confirms it is byte-for-byte consistent with Phase 46's own independently-verified baseline (49/49 apinames for Hades) - proof the success path is completely unaffected by this phase's changes.
  - `GET /api/games`: `success:true, count:3` - the full catalog-merge route still works end-to-end.
  - `GET /api/games/popular`: `success:true`, real live player counts returned for all 3 catalog games (Hollow Knight 7431, Hades 3237, Portal 2 1230 at verification time) - exercises the real, live `getCurrentPlayerCount()` success path end-to-end, confirming it too is unaffected.
  - **Caveat, stated plainly**: I could not live-verify Finding 5's actual fix (a real Steam account with zero owned games) or Finding 6's short failure-TTL behavior against a genuine live Steam outage - neither is something I can arrange or trigger against Steam's real, live API in this environment. Both are covered instead by the deterministic mocked-fetch tests above, which is the correct and only reliable way to test an exact, specific failure-response shape and precise timing behavior without depending on Steam actually being down or a specific rare account state existing at test-run time - exactly the same reasoning `apiGamesRoute.test.js`'s own header comment already gives for why this suite never makes live Steam calls in its automated tests.

### Risks and regression considerations

- The 30-second `TRANSIENT_FAILURE_TTL_MS` value was chosen to comfortably self-heal within one of `game.js`'s 60-second poll cycles while still absorbing a burst of concurrent requests for the same key during a genuine Steam outage - a judgment call within the range the audit scoped ("tens of seconds to a couple of minutes"), not an externally-mandated number. If a future phase finds this doesn't strike the right balance in practice (e.g. Steam's real rate-limit behavior warrants a longer floor), it's a one-line constant to revisit.
- Deliberately did not touch `getGlobalAchievementPercentages()` - its existing failure-degrades-silently behavior is treated as an intentional prior design decision (per its own comment), not part of this phase's approved scope.
- Findings 2 (localStorage-failure asymmetry), 3 (slug collision), and 4 (unbounded `/popular` fan-out) remain fully open and untouched, exactly as approved.
- No frontend code was touched; no test in either suite makes a real network call as part of its assertions (all deterministic), aside from the separate, manual live-verification pass documented above, which is not part of the automated suite.

## 7. Explicit stop

Phase 47 is fully implemented, tested (deterministically) and live-verified (for every path that can be live-verified without a specific rare Steam account state). **Not committed or pushed yet** - awaiting the user's explicit go-ahead per their instruction to commit/push only after all verification is clean. Do not start Phase 48.
