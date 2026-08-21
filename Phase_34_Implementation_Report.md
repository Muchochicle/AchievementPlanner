# Phase 34 Implementation Report — Dead-code cleanup from the Phase 33 Steam-live-data migration

Scope: `PHASE_34_AUDIT.md`, approved by the user in-chat before any code was touched. Removes the localStorage-based player-statistics stack that Phase 33 made obsolete, plus the old non-classified `getPlayerAchievements` Steam fetcher — both explicitly deferred to "a future phase" by Phase 33, now unblocked by the user's real-browser Steam-login verification.

## What was removed

**5 fully-dead source files** (verified zero production callers, traced import-by-import against current disk state, not trusted from the prior report):

- `src/utils/player/statistics/playerStatistics.js` — its one export, `getPlayerStatistics`, had no callers anywhere.
- `src/utils/player/statistics/helpers/games.js` — `getPlayedGames` and `getInProgressGameSlugs`, both only ever called by the dead `playerStatistics.js`.
- `src/utils/player/statistics/helpers/completedGames.js` — `getCompletedGames` and `getCompletedGameSlugs`, same situation.
- `src/utils/player/statistics/helpers/achievements.js` — `getUnlockedAchievements`, same situation. **Not named in Phase 33's own recommendation** — found this audit by tracing the full import graph instead of trusting the prior report's list.
- `src/utils/player/statistics/helpers/plannerProgress.js` — `getPlannerProgress`, the shared localStorage scanner used only by the three helper files above. **Also not named in the prior report** — transitively dead once those three go.

**One function removed from a file with other live exports:**

- `backend/services/steamApi.js` — deleted the old, non-classified `getPlayerAchievements(steamId, appid)`. Superseded by `getPlayerAchievementsClassified`, which both of `routes/games.js`'s call sites already used exclusively. The other 5 exports in this file (`getPlayerSummary`, `getOwnedGames`, `getSchemaForGame`, `getGlobalAchievementPercentages`, `getCurrentPlayerCount`, `getPlayerAchievementsClassified`) are untouched.

**Stale comments updated** (found during the post-deletion repo-wide reference sweep, not part of the original file list but necessary to leave no dangling mentions):

- `backend/services/steamApi.js` — `getSchemaForGame`'s catch-block comment referenced "getPlayerAchievements below"; reworded to drop the dead reference.
- `backend/routes/games.js` — a comment on the `getPlayerAchievementsClassified` call site said "not the old getPlayerAchievements"; reworded now that there's no "old" version left to contrast against.
- `src/utils/player/statistics/helpers/recentlyPlayed.js` — its header comment described itself as unlike `getInProgressGameSlugs`; reworded to "the old ... since removed" so it still makes sense with that function gone.
- `test/resetProgress.test.js` and `backend/test/profileStatsRendering.test.js` — both had a comment pointing at `profileStatistics.test.js` as a shared localStorage-mock convention; repointed to the new `plannerStorage.test.js`.

## What was preserved, and why

**`backend/test/profileStatistics.test.js` was renamed and rewritten, not deleted — this is the one correction to the prior report's plain "delete their tests" wording.** That file didn't only test the 5 dead helpers above: it also imported and exercised `saveProgress()` from `src/utils/planner/storage.js`, which is very much alive (called 3× from `src/js/game.js`'s save-progress pipeline) and had **no other test coverage anywhere in the repo**. A straight deletion would have silently dropped all regression coverage for a live function.

The rewrite, `backend/test/plannerStorage.test.js`:
- Drops the imports of the 5 now-deleted exports and every assertion that existed purely to check their counting behavior (2 of the original 9 tests existed for no other reason and were dropped entirely: the "zero unlocked achievements" default-state test and the "Profile opened before visiting any Game page" test, both of which asserted only the dead counters with no `saveProgress`/`localStorage` angle of their own).
- Keeps and, where a test's only remaining value was a dead-counter assertion, converts the remainder into a direct `localStorage`-shape assertion on `saveProgress()`'s own output — e.g. the former "counts toward Games but not 100%" test is now framed as "every locked achievement still persists as `false`," and the former counting-based multi-game test is now "one game's `saveProgress` call doesn't touch another game's stored entry."
- Net result: 7 tests (down from 9), all of them now directly exercising `saveProgress()`'s real behavior — curated + Steam-only merge, all-locked, all-complete, zero-achievement games, cross-game isolation, and the unmatched-entry fallback key — with zero coverage gap versus before.

**Also explicitly untouched, per approved scope:**
- `src/utils/planner/storage.js` (`saveProgress`) and `src/utils/planner/achievement/completion.js` (`isEntryCompleted`) — both live, both still used by the Game page.
- Everything from Phase 33 (Profile stats, Completed, Recently Played, Achievement availability, Podiums heading) — not re-touched, only regression-verified (see below).
- This session's CORS fix and the pre-existing uncommitted `src/config.js` dev-flag / `backend/server.js` EADDRINUSE changes — pre-existing work, not this phase's concern, not modified.
- No Steam auth, session, or CORS code touched.

## Files changed

- **Deleted:** `src/utils/player/statistics/playerStatistics.js`, `src/utils/player/statistics/helpers/games.js`, `src/utils/player/statistics/helpers/completedGames.js`, `src/utils/player/statistics/helpers/achievements.js`, `src/utils/player/statistics/helpers/plannerProgress.js`, `backend/test/profileStatistics.test.js`
- **New:** `backend/test/plannerStorage.test.js`
- **Edited:** `backend/services/steamApi.js` (function removal + 1 comment), `backend/routes/games.js` (1 comment), `src/utils/player/statistics/helpers/recentlyPlayed.js` (1 comment), `test/resetProgress.test.js` (1 comment), `backend/test/profileStatsRendering.test.js` (1 comment)

Nothing else changed — no components, routes, HTML, or CSS.

## Verification performed

**1. Repo-wide stale-reference sweep** — grepped every deleted export name and the deleted test file's name across the entire repository after deletion:
```
playerStatistics|getPlayerStatistics|helpers/games\.js|helpers/completedGames\.js|
helpers/achievements\.js|helpers/plannerProgress\.js|getPlannerProgress|getPlayedGames|
getInProgressGameSlugs\(\)|getCompletedGames\(\)|getCompletedGameSlugs\(\)|
getUnlockedAchievements\(\)|getPlayerAchievements\(steamId|profileStatistics\.test
```
Zero matches outside the historical `PHASE_33_AUDIT.md`/`Phase_33_Implementation_Report.md`/`PHASE_34_AUDIT.md` docs (which correctly still describe what used to exist).

**2. Full test suites**, both green:
- Root/frontend: **447 passed, 0 failed** (down from 449 — the rewritten test file has 7 tests vs. the old file's 9, a net −2, exactly accounted for).
- Backend: **248 passed, 0 failed** (down from 250, same −2, since `plannerStorage.test.js` lives in `backend/test/`).

**3. Static/syntax checks** — `node --check` on every touched file (`backend/services/steamApi.js`, `backend/routes/games.js`, `src/utils/player/statistics/helpers/recentlyPlayed.js`, `backend/test/plannerStorage.test.js`, `test/resetProgress.test.js`, `backend/test/profileStatsRendering.test.js`): all OK. No linter or TypeScript is configured in this project (checked `package.json` in both root and `backend/` — no lint script, no `.eslintrc*`), so this is the applicable static check.

**4. `git diff --check`**: clean — only the pre-existing LF→CRLF notices from this repo's own `core.autocrlf`, no actual whitespace/conflict-marker errors, same as Phase 33's own result.

**5. Live browser verification**, real VS Code Live Server on port 5501, one continuous logged-in session:
- **Steam login**: fresh tab → "Log in with Steam" → Steam OpenID consent → redirected to `http://localhost:5501/index.html` → profile widget populated (JaCaRu02). Unaffected by this phase.
- **Home page / CORS**: stats correctly show `146+ Games / 3+ Planners Available` post-login, Popular Games cards render with real achievement-availability labels and hours played, no console errors, no CORS failures.
- **Profile page (Phase 33 regression check)**: stats sub-line reads exactly `"93 played · 3 completed · 118 with achievements"` — matching Phase 33's own live-verified numbers precisely. "Completed 3" and "Recently Played 10" sections both render correctly with the "View all →" link. Confirms Phase 33's behavior was not disturbed by removing the code it made obsolete.
- **Podiums page**: the "STEAM" heading Phase 33 added is still present above the 5-category grid; all 5 rankings render real data.
- **Game page — the one real regression risk this phase carried**: opened `game.html?slug=hades` while logged in. Page rendered normally (49 achievements, correct stats). Directly inspected `localStorage.getItem('planner-hades')` via the page's own JS context: `saveProgress()` had written all 49 real Steam achievement apinames as keys (all `false`, since this account's per-title Hades data is unavailable) — proving the live `saveProgress()` pipeline, now covered only by the rewritten `plannerStorage.test.js`, still works correctly end-to-end in the real browser, not just under the unit tests.
- **Games catalog page**: renders "Showing 146 games" correctly. Two console exceptions were observed here, both originating from `chrome-extension://eppiocemhmnlbhjplcgkofciiegomcon/executors/200.js` — an unrelated browser extension, not this app's code or origin. Not a regression.

## Remaining dead code deliberately not removed

None from this phase's identified domain — the audit's full list (5 files + 1 function) was removed in its entirety, with nothing held back.

Unrelated dead/orphaned items noted in Phase 33's own report remain exactly as they were, out of scope for this phase:
- Nothing else was flagged as dead by either the Phase 33 or Phase 34 audits.

## Issues or risks found

None. Every deletion was confirmed to have zero production callers before removal; the one nuance found during this phase's audit (the test file's dual purpose) was handled by rewriting rather than deleting, with live browser verification specifically targeting that exact risk (the Game page's save-progress flow) to confirm no regression.

## `git status --short`

```
 M backend/.env.example
 M backend/routes/games.js
 M backend/server.js
 M backend/services/steamApi.js
 M backend/test/apiGamesRoute.test.js
 M backend/test/gameAchievementSummary.test.js
 M backend/test/gameMapper.test.js
 M backend/test/profileGamesRendering.test.js
 D backend/test/profileStatistics.test.js
 M backend/test/profileStats.test.js
 M backend/test/profileStatsRendering.test.js
 M backend/utils/gameAchievementSummary.js
 M backend/utils/gameMapper.js
 M backend/utils/profileStats.js
 M podiums.html
 M src/components/catalog-card/catalog-card.js
 M src/components/podium/podium.css
 M src/components/profile-games/profile-games.css
 M src/components/profile-games/profile-games.js
 M src/components/profile-stats/profile-stats.js
 M src/config.js
 M src/js/game.js
 M src/js/profile.js
 D src/utils/player/statistics/helpers/achievements.js
 D src/utils/player/statistics/helpers/completedGames.js
 D src/utils/player/statistics/helpers/games.js
 D src/utils/player/statistics/helpers/plannerProgress.js
 D src/utils/player/statistics/playerStatistics.js
 M src/utils/player/statistics/profileStatsClient.js
 M test/catalogCard.test.js
 M test/config.test.js
 M test/profileStatsClient.test.js
 M test/resetProgress.test.js
?? PHASE_33_AUDIT.md
?? PHASE_34_AUDIT.md
?? Phase_33_Implementation_Report.md
?? backend/test/plannerStorage.test.js
?? src/utils/planner/achievement/availability.js
?? src/utils/player/statistics/helpers/recentlyPlayed.js
?? test/achievementAvailability.test.js
?? test/recentlyPlayed.test.js
```

(Files/deletions from Phase 34 specifically: the 5 `D` entries under `src/utils/player/statistics/`, `D backend/test/profileStatistics.test.js`, `?? backend/test/plannerStorage.test.js`, `?? PHASE_34_AUDIT.md`, and the edits to `backend/services/steamApi.js`, `backend/routes/games.js`, `src/utils/player/statistics/helpers/recentlyPlayed.js`, `test/resetProgress.test.js`, `backend/test/profileStatsRendering.test.js`. Every other entry is pre-existing uncommitted work from before this phase, unmodified by it.)

## Recommended next step

No further cleanup is queued by any phase document. The working tree now holds several complete, independently-verified, uncommitted change sets (Phase 33, this Phase 34, the CORS fix, the config dev-flags follow-up, the server.js crash-resilience fix) — all green across both test suites. This is a natural point to review and commit, at your discretion and on your own schedule, before picking a new phase.
