# Phase 67 Audit and Implementation Report

Fully autonomous phase (audit → implement → test → verify → commit → push → report, no scope-approval checkpoint), continuing the workflow established in Phase 53-66.

## 1. Verified baseline

- `HEAD` = `origin/main` = `0d5bd0a4bfa1e4f75ba6bbebdfa4c90543010bfd` (`docs: record Phase 66's own commit hash in PHASE_66_AUDIT.md`). Confirmed via `git fetch origin main` + `git rev-parse HEAD origin/main` (identical hashes).
- Root test suite: **738/738 passing** at baseline. Backend test suite: **344/344 passing** at baseline.
- `git status --short` at baseline: the same 15 pre-existing unstaged phase-report deletions, unchanged in count/content from every prior phase's baseline. Left untouched throughout this phase.

## 2. Findings reviewed (all outstanding findings re-verified against current source)

- **Finding 6 remainder — persistent session-store architecture decision.** Re-confirmed unchanged (`backend/server.js`'s `MemoryStore` + periodic sweep). Still deferred - not touched.
- **Finding 1 (Phase 54) — session planner can overshoot the requested duration.** Re-confirmed unchanged (`sessionPlanner.js`'s `session.length === 0` force-include). Still deferred - not touched.
- **Decorative `--border` re-theme (Phase 57).** Re-confirmed unchanged (`--border-strong` still the 4-case-only token). Still deferred - not touched.
- **Poll-tick `aria-live` UX decision (Phase 60/63).** Re-confirmed unchanged (`aria-live="polite"` still on `game.js`'s podium containers). Still deferred - not touched.

None of the four were revisited or changed this phase, per the standing instruction to leave them alone unless a current finding genuinely required it - none did.

## 3. Fresh-territory audit

Two parallel `general-purpose` agents audited previously-under-scrutinized subsystems: one focused on the achievement-recommendation/session-planner "engine" (the core selection/scoring logic, not yet given the same line-by-line scrutiny as the UI/storage/accessibility layers), the other on backend Steam-API-response parsing, auth edge cases, and a repo-wide test-coverage-gap sweep. Both were briefed on everything already covered/fixed/deferred by the prior 66 phases. Every agent-reported candidate was independently re-verified against the actual current file/line before being trusted.

### Finding 1 (NEW, HIGH severity, MEDIUM reachability, independently verified) - `getGlobalAchievementPercentages` cached a genuine Steam request failure for the full 24h success TTL instead of the short 30s failure TTL

`backend/services/steamApi.js`'s `getGlobalAchievementPercentages` was the one function in this file that hadn't been brought in line with the failure-vs-success TTL split every sibling function (`getSchemaForGame`, `getCurrentPlayerCount`, `getPlayerAchievementsClassified`) already implements (originally established in `PHASE_47_AUDIT.md` Finding 6). Its `catch` block treated every failure mode from `steamFetch` - a plain 8-second timeout, a transient 5xx, a rate-limit response - identically to Steam's real "no global stats for this appid" answer, degrading to `[]` and caching it for the full 24-hour `GLOBAL_PERCENTAGES_TTL_MS`. Since `steamFetch` throws the exact same generic `Error` for both a genuine failure and a non-ok HTTP status, this function has no way to actually distinguish "Steam confirmed no stats" from "we don't know right now" - exactly the ambiguity `TRANSIENT_FAILURE_TTL_MS`'s own doc comment already describes and every sibling function already resolves conservatively (short TTL on any catch). A single transient blip while a user loads a game page previously meant every achievement's `globalPercent` showed unavailable for a full day instead of self-healing within ~30 seconds like the rest of this file.

### Finding 2 (NEW, MEDIUM severity - test-coverage gap, no live bug on its own) - `getPlayerSummary` and `getGlobalAchievementPercentages` had zero direct unit tests of their real Steam-response-parsing logic

`backend/test/steamApi.test.js` thoroughly exercised `getOwnedGames`, `getSchemaForGame`, `getCurrentPlayerCount`, and `getPlayerAchievementsClassified` against synthetic Steam response shapes, but never imported `getPlayerSummary` or `getGlobalAchievementPercentages` - every other test file that touches these two injects them away as fakes via the existing dependency-injection seams, so their real parsing logic was never actually exercised by a test. This is directly why Finding 1 shipped unnoticed - a test mirroring the existing TTL-split pattern for the other three functions would have caught it immediately.

### Finding 3 (NEW, LOW severity, LOW-MEDIUM reachability - two related defensive/robustness gaps, both currently unreachable in practice)

- `backend/utils/gameMapper.js`'s `icon` URL was built from `game.img_icon_url` with no guard, unlike every other optional Steam-sourced field in the same mapper (`rtime_last_played ?? 0`, `planner?.difficulty ?? null`, etc.). Steam's `GetOwnedGames` can return an owned game with no `img_icon_url` (delisted apps, some free-to-play/tool entries) - the unguarded template string then silently resolves to a broken `.../undefined.jpg` URL instead of a real, guarded fallback. Cosmetic only (a broken image, not a crash), and this specific field isn't currently rendered anywhere in the frontend at all (verified via repo-wide grep for `.icon` consumers of a mapped game object) - but it's part of this function's tested public output shape and the same defensive convention every other field here follows.
- `backend/utils/concurrencyLimiter.js`'s `mapWithConcurrency` computed `workerCount = Math.min(limit, items.length)` with no floor - a `limit` of 0 or negative spawns zero workers, silently leaving every entry in `results` as a hole instead of the `{status, ...}` shape every caller relies on (`Promise.all([])` resolves immediately with nothing processed). No current caller passes a non-positive `limit` (all three call sites use hardcoded positive constants), so this is a latent footgun for any future caller that computes it dynamically, not a live bug today.

### Finding 4 (NEW, informational/product-quality observation - not fixed, see rationale below) - `sessionPlanner.js`'s session-packing sort ignores `missable`, unlike `recommendation.js`'s scoring

`src/utils/planner/sessionPlanner.js`'s `createSession()` sorts its candidate pool purely by `(difficulty asc, estimatedTime asc)` - `missable` never factors into which achievements get packed into a session. By contrast, `src/utils/planner/recommendation/recommendation.js`'s `score()` explicitly weights `!achievement.missable` (+2), a scoring choice documented in-app (`src/data/guides/app/session-planner-and-recommendations.js`) and directly tested. `stats.js` also surfaces a dedicated "Missable Remaining" counter, confirming missability is treated as a first-class planning signal elsewhere in this same feature. The practical effect: a session can be greedily packed with easy/quick non-missable achievements while a low-difficulty-but-missable one gets pushed out of the time budget entirely, with no signal from the session builder itself that missable content was left behind.

**Not fixed this phase - flagged as a product-behavior question, not a mechanical bug.** No documented behavior is actually violated (the in-app guide for "Today's Session" only promises achievements that fit the time budget, no ordering claim), and `recommendation.js`'s single-pick scoring and `sessionPlanner.js`'s knapsack-style multi-pick packing serve genuinely different UI purposes - it's not obviously wrong for them to optimize differently. Whether the session packer *should* weight missability (and by how much relative to difficulty/time, and whether that should mean packing fewer achievements to protect a missable one) is a real product-design call, the same category of decision the four already-standing deferred items represent - not something this phase should decide unilaterally. Flagged for the user's awareness; not escalated to a 5th mandatory-blocker item since nothing is currently broken or inconsistent with documented behavior.

**Also specifically re-checked per the audit briefs, no new issue found:** the prototype-pollution-style plain-object-as-map pattern (fixed in `plannerCatalog.js`, confirmed safe in `leaderboardStore.js`) does not exist anywhere else in the backend - `achievementMerger.js`, `steamAchievementMapper.js`, and `gameAchievementSummary.js` all use `Map`/`Set` for any externally-keyed lookup, not plain objects; double-XP/double-badge risk on repeated completion checks is fully protected by `player.js`'s idempotent claim ledger; cross-game skip-state leakage is not possible given `game.js` clears skip state on every page's `init()` and this is a full-navigation multi-page app; `gameCompletion.js`'s unguarded `game.achievements.length` access is never reachable with a missing array, since `gameMapper.js` guarantees a real array whenever `hasPlanner` is true; `stats.js`'s "Average Difficulty" (over the full list) vs. "Remaining"/"Missable Remaining" (over incomplete-only) is intentional and already directly tested; `levelSystem.js`/`titleSystem.js` boundary conditions remain correct.

## 4. Fixes implemented (4)

- **`backend/services/steamApi.js`**: `getGlobalAchievementPercentages`'s `catch` block now caches its degraded `[]` result with `TRANSIENT_FAILURE_TTL_MS` (30s) instead of `GLOBAL_PERCENTAGES_TTL_MS` (24h), matching every sibling function's own failure-vs-success TTL split.
- **`backend/services/steamApi.js`**: `getCurrentPlayerCount` now coerces a `result:1` response missing `player_count` to `null` via `?? null`, rather than potentially caching `undefined` - which would have silently defeated the function's own `cached !== undefined` cache-hit check on every future call for that appid.
- **`backend/utils/gameMapper.js`**: `mapSteamGame`'s `icon` field is now `null` when `game.img_icon_url` is missing/empty, instead of building a broken `.../undefined.jpg` URL.
- **`backend/utils/concurrencyLimiter.js`**: `mapWithConcurrency`'s `workerCount` is now clamped to at least 1 whenever there are items to process, preventing a non-positive `limit` from silently spawning zero workers and leaving every result as a hole.

## 5. Regression tests added — 10 total

- **`backend/test/steamApi.test.js`** (+9 tests, new imports `getGlobalAchievementPercentages`/`getPlayerSummary`): a full success/failure/TTL-split section for `getGlobalAchievementPercentages` (4 tests, mirroring `getSchemaForGame`'s existing pattern exactly, including the fake-timer-driven test that directly proves the Phase 67 regression - the failure result now expires and triggers a real retry after 30s instead of staying cached for 24h), a first-ever direct-parsing section for `getPlayerSummary` (3 tests: success, genuinely-empty-response, no-player-entry), and one test confirming `getCurrentPlayerCount` correctly caches `null` (not `undefined`) for a `result:1` response missing `player_count`.
- **`backend/test/gameMapper.test.js`** (+1 test): `mapSteamGame`'s `icon` is `null` (not a broken URL) for both a missing and an empty-string `img_icon_url`, while `image` remains unaffected.
- **`backend/test/concurrencyLimiter.test.js`** (+1 test): `mapWithConcurrency` still processes every item (no holes) for `limit` values of `0`, `-1`, and `-5`.

## 6. Test results

- Focused suite (`backend/test/steamApi.test.js`, `backend/test/gameMapper.test.js`, `backend/test/concurrencyLimiter.test.js`): 45/45 passing.
- Full backend suite (`node --test`, from `backend/`): **354/354 passing** (344 baseline + 10 new).
- Full root suite (`node --test`, from repo root - includes the backend suite): **748/748 passing** (738 baseline + 10 new).

## 7. Diff review

`git status --short` after implementation shows exactly: **3 production files** modified (`backend/services/steamApi.js`, `backend/utils/gameMapper.js`, `backend/utils/concurrencyLimiter.js`), **3 test files** modified (`backend/test/steamApi.test.js`, `backend/test/gameMapper.test.js`, `backend/test/concurrencyLimiter.test.js`), this audit document - plus the same 15 pre-existing unstaged phase-report deletions, untouched, verified identical in count/content before and after this phase's work. `git diff` on every production file reviewed line-by-line - each diff is minimal and scoped exactly to its finding, no unrelated logic touched, no frontend code touched this phase at all (Finding 4 was deliberately left as observation-only, not implemented).

## 8. Live verification (real backend against the real, live Steam Web API)

Started the real, unmodified `backend/server.js` (real `.env`, real `STEAM_API_KEY`, port 3000):

- **Finding 1 (`getGlobalAchievementPercentages` TTL fix)**: requested `GET /api/games/hades` against the real backend (no session/login needed - Hades is a catalog game with a real Steam appid, so the route's own logic still calls the real `getSchemaForGame`/`getGlobalAchievementPercentages` against Steam for it). Confirmed `schemaStatus: "available"` and `hasSteamAchievements: true` in the response, then inspected `game.steamAchievements.achievements[0]` directly and confirmed a real, live `globalPercent: 81.9` value came back - proving the whole modified code path works correctly end-to-end against Steam's actual `GetGlobalAchievementPercentagesForApp` endpoint, not just against the mocked-fetch unit tests. **Not practical to live-verify the TTL-specific behavior itself**: Steam's API was responding normally throughout this session, so there was no real failure to observe being cached briefly instead of for 24h, and deliberately forcing a live failure (e.g. by feeding a malformed API key) would require temporarily breaking the real, working `.env` configuration - avoided. That specific behavior is covered instead by the new fake-timer-driven unit test in §5, which directly proves a failure now expires and retries after 30s rather than staying cached for the old 24h TTL.
- **Findings for `gameMapper.js`'s icon guard and `concurrencyLimiter.js`'s zero-worker guard**: **not practical to live-verify.** The icon fix only matters for a *Steam-owned* game missing `img_icon_url`, which requires a real completed Steam OAuth login plus a specific real-world game in that state - not something this session could arrange. The concurrency-limiter fix has no current caller that passes a non-positive `limit` at all (by design - the bug is a latent footgun for a hypothetical future caller, not a reachable path today), so there is no real request that would exercise it. Both are covered by direct unit tests instead (§5), which is the appropriate verification method for logic with no currently-reachable live trigger.
- Cleaned up afterward: force-killed the backend server process by PID (`taskkill /F /T`), confirmed via `netstat` that port 3000 was no longer listening. No frontend server was needed this phase (no frontend code changed).

## 9. Commit / push

Working tree confirmed clean apart from the intended diff (all tests passing, diff reviewed, live verification complete or explicitly stated as impractical where it was). Staged and committed exactly the 3 production files, the 3 test files, and this audit document - the 15 pre-existing unstaged phase-report deletions were left out of the commit, untouched. Pushed to `origin/main`.

**Commit hash**: recorded in a small follow-up doc commit to this same file, per the established pattern (see e.g. Phase 66's own `eff27d9` → `0d5bd0a` follow-up).

## 10. Final working-tree status

After commit and push: clean apart from the same 15 pre-existing unstaged phase-report deletions, untouched throughout this phase.

## 11. Explicit stop

Phase 67 is complete: baseline verified, all four standing deferred decisions re-confirmed unchanged and left entirely untouched, audited (two parallel fresh-territory agent sweeps plus independent verification of every candidate), implemented (4 mechanical fixes, all backend-only: 1 real correctness bug matching an established bug class exactly, 1 defensive cache-integrity guard, 2 low-severity robustness guards), tested (10 new regression tests, full root and backend suites both green), reviewed (complete diff walked file-by-file), live-verified (Finding 1's success path proven against the real, live Steam API; the remaining fixes' reasons live-verification wasn't practical stated plainly), documented, committed, and pushed. **Phase 68 was not started.**

The four standing deferred decisions remain unchanged and un-relitigated: Finding 6's persistent session-store architecture decision, Finding 1/Phase 54's session-planner duration-overshoot product decision, the Phase 57 decorative-border re-theme design decision, and the Phase 60/63 poll-tick/games-counter live-region UX decision. One new item was surfaced but deliberately not implemented (Finding 4, §3) - a genuine product-design question about whether the session packer should weight missability, flagged for the user's awareness rather than decided unilaterally, not escalated to a 5th mandatory blocker since nothing currently violates documented behavior.
