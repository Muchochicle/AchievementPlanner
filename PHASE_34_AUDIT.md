# Phase 34 Audit — Dead-code cleanup from the Phase 33 Steam-live-data migration

## 0. Repo state at audit time

- HEAD: `5505206 chore(release): disable dev-only defaults, gitignore fix, remove orphaned files`, branch `main`.
- Working tree is **not clean** — it currently carries several distinct, previously-approved, uncommitted change sets (the user commits manually, on their own schedule):
  1. Phase 33 (Profile stats / Completed / Recently Played / Achievement availability / Podiums heading) — documented in `PHASE_33_AUDIT.md` / `Phase_33_Implementation_Report.md`.
  2. A follow-up to the `5505206` commit that ships the remaining three no-op `src/config.js` dev flags (`DEV_MODE`, `ENABLE_SANDBOX`, `ENABLE_FAKE_STEAM`) as `false` by default, with a new test per flag — undocumented by any phase file, but self-contained and already tested.
  3. `backend/server.js`'s new `EADDRINUSE`/bind-failure handler on `httpServer` — this looks like the fix for the backend-crash issue referenced earlier in this conversation (a clear "port already in use" message instead of an opaque crash under nodemon).
  4. This session's CORS fix (`backend/.env.example`, local `backend/.env` — not tracked) for the real Live Server port (5501), already verified live in a previous turn.
- None of sets 2–4 are this phase's concern — they're pre-existing, already-verified, uncommitted work sitting in the tree. Flagging them here only so a `git diff --stat` isn't mistaken for this phase's scope; **this phase touches none of those files.**
- All 250 backend + 449 frontend tests pass at this starting point (re-confirmed this session, before any Phase 34 change).

## 1. Where the next phase comes from

`Phase_33_Implementation_Report.md`'s own "Recommended next phase" section (written by the prior phase, once the user had a chance to browser-verify the new behavior — which they just did this session):

> A dedicated cleanup phase to remove the now-confirmed-dead `getInProgressGameSlugs`, `getPlayerAchievements`, and the already-orphaned `playerStatistics.js`/`completedGames.js`/their tests, once you've had a chance to verify the new behavior in a real browser session yourself.

This is the only concretely-specified "next phase" anywhere in the project's phase documentation. No other pending phase, TODO, or roadmap item is recorded anywhere I can find (checked `PHASE_32_AUDIT.md`, `PHASE_33_AUDIT.md`, `Phase_33_Implementation_Report.md`, `README.md` — no other forward-looking scope exists on disk). Per your instruction, since a next phase **is** documented, I'm following it — refined by one correction found during this audit (section 3 below), not by adding new scope.

## 2. Root cause / why this code is dead

Before Phase 33, the Profile page's stats/Completed/In-Progress sections were computed **client-side from `localStorage`** (`planner-{slug}` keys written by `saveProgress()` on the Game page). Phase 33 replaced all of that with **live, Steam-derived** data already flowing through `/api/profile/stats` and `/api/games` — real owned-library completion state instead of a local browser's incomplete play history. The old localStorage-based aggregator (`playerStatistics.js` and its four `helpers/*.js` files) was deliberately **left in place, not deleted**, per Phase 33's explicitly approved scope ("cleanup is a future phase") specifically so this phase could verify the swap in a real browser first before removing the old path. That verification happened this session.

## 3. Confirmed findings (verified fresh against current disk state, not trusted from the prior report)

Traced every import graph edge with `grep`, not just the report's claim:

| File | Export(s) | Production callers | Test callers | Verdict |
|---|---|---|---|---|
| `src/utils/player/statistics/playerStatistics.js` | `getPlayerStatistics` | **none** | none | Dead — delete |
| `src/utils/player/statistics/helpers/games.js` | `getPlayedGames`, `getInProgressGameSlugs` | **none** (only `playerStatistics.js`, itself dead) | `backend/test/profileStatistics.test.js` only | Dead — delete |
| `src/utils/player/statistics/helpers/completedGames.js` | `getCompletedGames`, `getCompletedGameSlugs` | **none** (only `playerStatistics.js`) | `backend/test/profileStatistics.test.js` only | Dead — delete |
| `src/utils/player/statistics/helpers/achievements.js` | `getUnlockedAchievements` | **none** (only `playerStatistics.js`) | `backend/test/profileStatistics.test.js` only | Dead — delete (**not named in the prior report, found this audit**) |
| `src/utils/player/statistics/helpers/plannerProgress.js` | `getPlannerProgress` | **none** except the three helper files above (all dead) | none directly | Dead — delete (**transitively dead once the three above go; not named in the prior report**) |
| `backend/services/steamApi.js` → `getPlayerAchievements` (old, non-classified) | — | **none** (superseded by `getPlayerAchievementsClassified`, both of `routes/games.js`'s call sites already use the classified version) | none | Dead — delete the one function, not the file (file also exports 5 other live functions) |

**Important correction to the prior report's recommendation:** `backend/test/profileStatistics.test.js` is not purely "the dead helpers' test file." It **also** imports and exercises `saveProgress()` from `src/utils/planner/storage.js` — which is very much alive (called 3× from `src/js/game.js`, the Game page's own save-progress pipeline) — and it is `saveProgress()`'s **only** test coverage anywhere in the repo (verified: no other file references it). Deleting this test file outright, as the prior report's wording suggests, would silently drop all regression coverage for a live function. This phase will instead **rewrite** that file: remove the imports/assertions covering the 5 dead exports above, keep every assertion that exercises `saveProgress()`'s actual behavior (curated + Steam-only merge, non-colliding keys for unmatched entries, JSON shape written to `localStorage`), and rename it to reflect what it now tests (`plannerStorage.test.js`, matching the module under test).

No other related dead-code candidates turned up in this same domain (checked: `mapPlayerAchievements` in `steamAchievementMapper.js` — still live, used by both `routes/games.js` call sites; `helpers/plannerProgress.js`'s `safeParseJSON` import — `safeJson.js` itself has other live callers, untouched).

## 4. Proposed scope

**Delete** (5 source files, fully dead, zero production callers):
- `src/utils/player/statistics/playerStatistics.js`
- `src/utils/player/statistics/helpers/games.js`
- `src/utils/player/statistics/helpers/completedGames.js`
- `src/utils/player/statistics/helpers/achievements.js`
- `src/utils/player/statistics/helpers/plannerProgress.js`

**Edit** (1 function removed from a file with other live exports):
- `backend/services/steamApi.js` — remove `getPlayerAchievements` only (lines ~272–312); its own explanatory comment on `getPlayerAchievementsClassified` that references it by name gets a small wording touch-up (still needs to explain the classified/unclassified distinction conceptually, just without pointing at a function that no longer exists).

**Rewrite, not delete** (test file):
- `backend/test/profileStatistics.test.js` → renamed `backend/test/plannerStorage.test.js`, keeping only the `saveProgress()`-exercising tests (7 of the file's 9 `test()` blocks touch `saveProgress` directly or indirectly through the same localStorage shape; the assertions on the 5 dead exports are removed from those same test bodies, and the 2 tests that exist *purely* to assert dead-helper behavior with no `saveProgress` angle — e.g. the dedicated `getInProgressGameSlugs`/`getCompletedGameSlugs` slug-list checks — are dropped entirely since there is nothing left in them once the dead assertion is gone).

**Explicitly out of scope** (per your instruction not to invent/expand scope, and per the standing project workflow's "never touch planner/Steam/XP/achievement/avatar/profile/localStorage/API logic unless the approved phase explicitly concerns that subsystem"):
- `src/utils/planner/storage.js` (`saveProgress`) — kept as-is, still the Game page's real persistence path.
- `src/utils/planner/achievement/completion.js` (`isEntryCompleted`) — still used by `saveProgress`, untouched.
- Everything from sets 2–4 in section 0 (config dev-flags, server.js EADDRINUSE handler, CORS fix) — pre-existing uncommitted work, not this phase's concern.
- Any Steam auth / CORS / session code — untouched.
- No new features, no refactors beyond removing the named dead code.

## 5. Files touched (final list)

- Delete: `src/utils/player/statistics/playerStatistics.js`, `src/utils/player/statistics/helpers/games.js`, `src/utils/player/statistics/helpers/completedGames.js`, `src/utils/player/statistics/helpers/achievements.js`, `src/utils/player/statistics/helpers/plannerProgress.js`
- Edit: `backend/services/steamApi.js`
- Delete + replace: `backend/test/profileStatistics.test.js` → new `backend/test/plannerStorage.test.js`

Nothing else changes. No frontend component, no route, no HTML, no CSS.

## 6. Validation strategy

- Static: re-grep every deleted export name across the whole repo after deletion to confirm zero remaining references (including comments, so stale references get cleaned up too, e.g. `recentlyPlayed.js`'s comment mentioning `getInProgressGameSlugs` and `routes/games.js`'s comment mentioning the old `getPlayerAchievements`).
- Full backend suite + full root/frontend suite, expect the same 250 / (449 − however many net tests the rewrite removes) passing counts, 0 failures.
- Live verification: exercise the Game page's save-progress flow in the real Live Server browser session (mark an achievement complete, confirm `localStorage.planner-<slug>` is still written correctly) to prove the rewritten test's real-world behavior wasn't accidentally broken by the surrounding deletions — this is the one live-verification point that matters for this phase, since everything else touched is inert dead code with no UI surface.
- Confirm Home/Profile/Game pages still render with no console errors after the change (regression check — even though no component imports the deleted files, per the workflow's "never claim a test was performed if it wasn't").

## 7. Risks

- Low blast radius: every deleted export was confirmed to have zero production callers before removal.
- The one real risk is the test-file rewrite accidentally losing `saveProgress` coverage — mitigated by rewriting rather than deleting, and by keeping every assertion that exercises real `saveProgress`/`localStorage` behavior.
- `backend/services/steamApi.js` keeps 5 other live exports (`getPlayerSummary`, `getOwnedGames`, `getSchemaForGame`, `getGlobalAchievementPercentages`, `getCurrentPlayerCount`, `getPlayerAchievementsClassified`) — only `getPlayerAchievements` is removed; no risk to the others since they're independent functions in the same file.

## 8. Approval needed

Requesting explicit approval before implementing, per the project's standing phase workflow — specifically approval of:
1. Deleting the 5 fully-dead source files listed in section 4.
2. Removing only the one dead function from `backend/services/steamApi.js`.
3. Renaming + rewriting `backend/test/profileStatistics.test.js` → `backend/test/plannerStorage.test.js` (rather than a straight delete, which the prior report's wording implied but which would have silently dropped `saveProgress`'s only test coverage).
