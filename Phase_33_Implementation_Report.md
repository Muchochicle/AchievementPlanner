# Phase 33 Implementation Report — Profile stats, Completed, Recently Played, Achievement availability, Podiums polish

Scope: `PHASE_33_AUDIT.md`, approved by the user in-chat before any code was touched. Areas 2, 3, 4, 5 in full, plus the Steam-based Podiums verification/cosmetic piece of Area 1's original 6-area audit. AchievementPlanner-native XP/level/streak/badge rankings explicitly out of scope (still localStorage-only; needs a separate server-side design later).

## Root cause fixed (drives Areas 2 and 4)

`backend/services/steamApi.js`'s `getSchemaForGame` used to swallow a failed Steam request into the exact same `[]` a genuinely achievement-less game returns, so nothing downstream could tell "Steam confirms zero achievements" apart from "we don't actually know because the request failed." Confirmed live against the real Steam API (see PHASE_33_AUDIT.md section 3): a real zero-achievement game returns HTTP 200 with an empty `game` object; a failed/invalid request returns a non-200 that throws. Fixed by having `getSchemaForGame` return `{ achievements, status }` (`status: "available"` on any real response, `"unavailable"` only when the request itself failed), and updating both of its call sites.

## Files changed

**Backend:**
- `backend/services/steamApi.js` — `getSchemaForGame` returns `{achievements, status}` instead of a bare array.
- `backend/utils/gameAchievementSummary.js` — consumes the new schema shape; summary now also carries `schemaStatus` and `hasAchievements` (schema-level fact, independent of the merged `total`).
- `backend/utils/profileStats.js` — `reduceProfileStats` adds `gamesWithAchievements` (Area 1's new stat) and now excludes/counts-as-transient any game whose schema fetch itself failed, instead of silently treating it as "0 achievements" (the Area 2 under-reporting fix). Backward-compatible: old-shaped settled values without `schemaStatus`/`hasAchievements` still reduce correctly (defaults to skipping the new logic).
- `backend/utils/gameMapper.js` — `mapSteamGame` now passes through Steam's `rtime_last_played` as `lastPlayed` (0 when never played).
- `backend/routes/games.js` — new `attachAchievementAvailability()` (concurrency-limited, scoped to owned + planner-less + real-appid games only) computes and attaches `schemaStatus`/`hasSteamAchievements`/`achievementAvailability` on the games-listing response (`/` and `/popular`); `/:slug` now uses the classified schema fetch and switches to `getPlayerAchievementsClassified` (previously the old, unclassified `getPlayerAchievements`) so the single-game response also carries `schemaStatus`/`hasSteamAchievements`/`playerDataStatus`/`achievementAvailability`.

**New shared file:**
- `src/utils/planner/achievement/availability.js` — `classifyAchievementAvailability()` + `ACHIEVEMENT_AVAILABILITY_LABELS`, imported by both the backend (to compute the field) and the frontend (to render its label), the same cross-import precedent as `completion.js`. Keeps "schema request failed" / "Steam confirms zero" / "player data unavailable" as 3 distinct internal facts even though 2 of them share a display string.

**Frontend:**
- `src/utils/player/statistics/profileStatsClient.js` — passes through `gamesWithAchievements`.
- `src/components/profile-stats/profile-stats.js` — Games card sub-line now reads `"{played} played · {completed} completed · {withAchievements} with achievements"` instead of just `"{played} played"`.
- New `src/utils/player/statistics/helpers/recentlyPlayed.js` — pure `getRecentlyPlayedGames(games, {limit=10})`, no DOM/localStorage dependency.
- `src/js/profile.js` — Recently Played now sourced from the live games index via `getRecentlyPlayedGames()`, not `getInProgressGameSlugs()`/`planner-{slug}` localStorage.
- `src/components/profile-games/profile-games.js` — "In Progress" → "Recently Played" with a "View all →" link to `games.html`; the old cross-section dedup (Completed always excluding a game from In Progress) is removed since a completed game can legitimately still be recently played; a same-section dedup-by-slug is kept for Completed itself.
- `src/components/profile-games/profile-games.css` — added `.profile-games-view-all` only.
- `src/components/catalog-card/catalog-card.js` — a planner-less game now shows one of the 3 real achievement-availability labels (via `ACHIEVEMENT_AVAILABILITY_LABELS`) instead of always "Planner coming soon", plus hours played for that card, reusing the existing `.catalog-planner-soon`/`.catalog-meta` classes (no new CSS needed there).
- `src/js/game.js` — the `!hasPlanner` branch now gates on `game.hasSteamAchievements` (backend-computed, schema-status-aware) instead of the old `game.steamAchievements?.available`, and shows the correct one of "No Steam achievements" / "Steam achievement data unavailable" instead of always "Planner not available yet" (that copy still appears, correctly, on the catalog card for this same game).
- `podiums.html` / `src/components/podium/podium.css` — added a "Steam" section heading above the 5-category grid. No ranking logic touched.

**Untouched, confirmed correct by re-reading:** `src/components/podium/podium.js`, `src/utils/podiums/*`, `backend/services/leaderboardStore.js`, `backend/controllers/podiumController.js` — Top 10 / own-rank-if-outside / highlight-if-inside / never-duplicate was already fully implemented per Phase 32 for both per-game and global leaderboards; live-verified below, not modified. `playerStatistics.js`, `completedGames.js`, `getInProgressGameSlugs`, navbar files — left in place per the approved scope (cleanup is a future phase).

## Tests

Root suite: **446 passed, 0 failed**. Backend suite: **250 passed, 0 failed**. New files: `test/recentlyPlayed.test.js` (ordering, limit 10, excludes zero-activity, missing/zero timestamps, empty, no-mutation), `test/achievementAvailability.test.js` (all 5 classification branches + label map). Updated: `gameAchievementSummary.test.js` (new schema-shape fakes throughout + a dedicated schema-failure case), `profileStats.test.js` (+3 tests: `gamesWithAchievements` counting, schema-failure exclusion, backward-compat with old-shaped fixtures), `gameMapper.test.js` (`lastPlayed` passthrough/default), `profileGamesRendering.test.js` (rewritten for Recently Played: non-exclusivity with Completed, Completed's own dedup-by-slug, "View all" link present in both populated and empty states), `profileStatsRendering.test.js` (new sub-line text), `catalogCard.test.js` (+5: all 3 availability labels, fallback when uncomputed, hours-played gating), `profileStatsClient.test.js` (`gamesWithAchievements` passthrough), `apiGamesRoute.test.js` (+1: catalog games never trigger the achievement fan-out).

Not unit-tested directly (by design, consistent with this suite's existing convention — `steamApi.js` has no dedicated mocked-`fetch` test file today; its behavior is exercised through injected-fetcher tests in `gameAchievementSummary.test.js` plus this phase's live verification below): `getSchemaForGame`'s own HTTP-level branching.

## Live verification (real Steam account, `steam_id 76561198160458768`, 144 owned games)

All of the following ran the actual, unmodified production functions in-process against the real, configured `STEAM_API_KEY` (not mocks):

- **`rtime_last_played`** (pre-implementation check, per the audit): present on all 144 games; 93 have it `> 0`, matching the DB's prior `games_played=93`; 0 games disagree between `playtime_forever` and `rtime_last_played` being zero/nonzero.
- **Area 1**: `computeProfileStats` over the real library → `achievements: 1185, gamesWithAchievements: 118, completedGames: 3, gamesConsidered: 144, gamesWithPlayerDataUnavailable: 24, gamesWithTransientErrors: 0`. `achievements`/`completedGames` match the values already live-indexed in the leaderboard DB from this account's prior real Profile visits.
- **Area 3**: `getRecentlyPlayedGames()` over the real, `gameMapper`-mapped library reproduces the exact top-5 order from the raw Steam response (Counter-Strike 2 → The Forest → Moonlighter → Age of Empires: DE → Age of Empires II: DE), confirming the full mapper→helper pipeline, not just the isolated function.
- **Area 4, all 3 states, confirmed live**: VRChat (appid 438100, confirmed zero real achievements) → `no-achievements`; CS2 (appid 730, this account's per-title stats are not public) → `player-data-unavailable`; Hades (owned-by-catalog, curated planner, real achievements) → `planner-available` (verified via the actual running server: `curl /api/games/hades` → `achievementAvailability: "planner-available"`). 0 real `schema-unavailable` occurrences hit during this session (Steam itself never failed a request), so that path is verified via `gameAchievementSummary.test.js`'s and `achievementAvailability.test.js`'s synthetic-failure tests rather than a live Steam outage.
- **Catalog fan-out cost** (`attachAchievementAvailability`): 143 of this account's 144 owned games have no curated planner → cold-cache run took **3.3s** at concurrency 8 for all 143 real Steam schema calls, 0 rejections, distribution `{no-achievements: 26, planner-unavailable: 117}`; warm-cache (24h TTL) re-run was **0ms**. Matches the audit's risk assessment.
- **Area 5 (Podiums)**: started the real server and hit the live endpoints. `/api/podiums/global/achievements` and `/global/completed-games` return this account as the sole ranked row with `value: 1185` / `value: 3` — matching the Area 1 aggregate exactly. `/api/podiums/game/730` returns success with a real row. `/api/profile/stats` logged-out → 401 as before. `/api/games` logged-out → catalog games only, `hasPlanner: true`, no `achievementAvailability` field (fan-out correctly skipped). No podium ranking code was changed this phase.

## Not verified (explicitly)

- A full authenticated **browser** session through Steam's real OpenID login was not performed — that requires the user's own interactive Steam login and 2FA, which I can't complete on their behalf. Every code path a logged-in Profile visit exercises was instead verified in-process against the same real account's data and the real Steam API (see above), which is the same substitution this project's own test suite already relies on for Steam-authenticated paths (see `steamController.test.js`'s header comment). If you want the actual rendered Profile/Games/Game pages eyeballed in a browser, that needs you to log in once locally and say so.
- No genuine live Steam request failure occurred during this session, so `schema-unavailable`/`schemaStatus: "unavailable"` is verified only via the synthetic-failure unit tests, not a real Steam outage.

## `git diff --check`

Clean — only pre-existing LF→CRLF line-ending notices (this repo's own `core.autocrlf` behavior), no actual whitespace/conflict-marker errors.

## `git status --short` / `git diff --stat`

```
 M backend/routes/games.js                           | 153 ++++++++++++++++++++--
 M backend/services/steamApi.js                      |  30 ++++-
 M backend/test/apiGamesRoute.test.js                |   6 +
 M backend/test/gameAchievementSummary.test.js       |  96 +++++++++++---
 M backend/test/gameMapper.test.js                   |  23 ++++
 M backend/test/profileGamesRendering.test.js        |  79 ++++++-----
 M backend/test/profileStats.test.js                 |  45 +++++++
 M backend/test/profileStatsRendering.test.js        |   4 +-
 M backend/utils/gameAchievementSummary.js           |  42 ++++--
 M backend/utils/gameMapper.js                       |   8 ++
 M backend/utils/profileStats.js                     |  29 +++-
 M podiums.html                                      |   2 +
 M src/components/catalog-card/catalog-card.js       |  21 ++-
 M src/components/podium/podium.css                  |  15 +++
 M src/components/profile-games/profile-games.css    |  20 +++
 M src/components/profile-games/profile-games.js     |  76 ++++++-----
 M src/components/profile-stats/profile-stats.js     |   9 +-
 M src/js/game.js                                    |  20 ++-
 M src/js/profile.js                                 |  29 ++--
 M src/utils/player/statistics/profileStatsClient.js |   1 +
 M test/catalogCard.test.js                          |  93 +++++++++++++
 M test/profileStatsClient.test.js                   |   2 +
?? PHASE_33_AUDIT.md
?? Phase_33_Implementation_Report.md
?? src/utils/planner/achievement/availability.js
?? src/utils/player/statistics/helpers/recentlyPlayed.js
?? test/achievementAvailability.test.js
?? test/recentlyPlayed.test.js

22 files changed, 654 insertions(+), 149 deletions(-)  (tracked files only, before the two new report .md files)
```

## Remaining technical debt (new this phase, flagged not fixed — per scope, cleanup is a future phase)

- `backend/services/steamApi.js`'s `getPlayerAchievements` (the old, non-classified fetcher) is now referenced nowhere except its own definition — `routes/games.js`'s single-game route switched to `getPlayerAchievementsClassified` for the achievement-availability fix. Left in place, not deleted.
- `getInProgressGameSlugs` (`src/utils/player/statistics/helpers/games.js`) is now dead in production code (was already flagged as becoming dead code once Area 3 shipped) — still only referenced by its own test file. Left in place, not deleted, per scope.
- `playerStatistics.js` / `completedGames.js` — unchanged, still orphaned from before this phase.

## Recommended next phase

A dedicated cleanup phase to remove the now-confirmed-dead `getInProgressGameSlugs`, `getPlayerAchievements`, and the already-orphaned `playerStatistics.js`/`completedGames.js`/their tests, once you've had a chance to verify the new behavior in a real browser session yourself.
