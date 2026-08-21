# Phase 33 Audit — Profile stats, Completed, Recently Played, Achievement availability, Podiums polish

## 0. Repo state at audit time

- HEAD: `5505206 chore(release): disable dev-only defaults, gitignore fix, remove orphaned files`, branch `main`, working tree clean.
- This phase follows a prior conversational audit (not saved to disk) covering 6 candidate areas. The user reviewed it and explicitly narrowed + refined scope in chat (reproduced faithfully in section 2 below). This document formalizes that approved scope for the record, per the standing phase-workflow memory, before any code is touched.
- Live verification performed against a real, currently-indexed Steam account (`steam_id 76561198160458768`, 144 owned games, 93 played) using the repo's own configured `STEAM_API_KEY` — see section 3.

## 1. Root cause found during file re-read (drives Areas 2 and 4 together)

`backend/services/steamApi.js`'s `getSchemaForGame(appid)` currently does:

```js
try {
    ...
    achievements = data.game?.availableGameStats?.achievements ?? [];
} catch (error) {
    achievements = [];   // <-- same fallback as a genuine empty schema
}
```

Live probes against the real Steam API confirm two genuinely different response shapes both currently collapse to this same `[]`:

- A game with **zero real achievements** (confirmed live: appid 10 "Counter-Strike", 80, 320, 360, 438100 "VRChat", etc.) returns **HTTP 200** with `data.game = {}` (no `availableGameStats` key at all).
- A **failed/invalid request** (confirmed live: a bogus appid) returns **HTTP 400**, which throws inside `steamFetch` and lands in the `catch` block above.

Both currently produce the exact same `[]` return value, so every downstream consumer (`gameAchievementSummary.js`, `routes/games.js`, `steamAchievementMapper.js`, `achievementMerger.js`) has no way to tell "Steam confirms zero achievements" apart from "we don't actually know because the request failed." This is the literal root cause behind:

- **Area 2** under-reporting: a game whose schema fetch transiently fails during a profile scan silently reads as "0 total achievements" instead of "unknown," so it can never be flagged as needing a retry, and (worse) if `total` from a transient failure happens to be reported as unavailable rather than excluded, it risks either false completion or invisible omission.
- **Area 4** state confusion: "No Steam achievements" and "Steam achievement data unavailable" are currently the same code path.

Fix: `getSchemaForGame` returns `{ achievements, status }` (`status: "available"` on any successful parse, whatever the achievement count; `status: "unavailable"` only when the request itself failed). Every caller is updated to consume this shape and to stop collapsing the two cases.

## 2. Approved scope (verbatim from user, condensed)

1. **Profile Games statistics** — "Games" = total Steam library size (primary number); secondary line = played / completed / games-with-Steam-achievements. "Games with Steam achievements" = schema has ≥1 achievement, NOT "player unlocked ≥1." New backend field + tests.
2. **Completed games** — fix under-reporting; use live Steam-derived data already powering `/api/profile/stats`; do not reintroduce `planner-{slug}` localStorage. Rule: Steam achievement data available, total > 0, every achievement unlocked. Do not delete `playerStatistics.js`/`completedGames.js` (cleanup is a future phase). Regression tests for: appears when complete, excluded when incomplete, never falsely marked complete on transient/unavailable data, dedup vs. Recently Played still holds.
3. **Replace "In Progress" with "Recently Played"** — Steam `rtime_last_played`, max 10, most-recent-first, only games with real play activity, "View all →" link to Games. Drop `planner-{slug}` sourcing for this section. Verify `rtime_last_played` against a real account first. Tests: ordering, limit, exclusion of no-activity games, missing/zero timestamps, empty result.
4. **Steam achievement availability, 3 states** — "No Steam achievements" (schema confirmed zero) / "Steam achievement data unavailable" (schema or player data fetch failed) / "Planner not available yet" (Steam has achievements + player data, no curated planner). Must be based on real Steam data, not "does a planner JSON exist." Applies to catalog card and game page too; a no-achievement game still renders as a normal card (cover, name, hours played, status). Do not collapse schema-failure / genuine-zero / player-data-unavailable.
5. **Podiums** — do not rebuild Phase 32; verify per-game and global Top-10 + "your rank" + highlight + no-duplicate behavior (already implemented, confirmed by re-reading `podiumController.js`/`leaderboardStore.js`/`podium.js`); global Podiums page: group the existing 5 Steam categories under a visible "Steam" heading (cosmetic, no ranking-logic change). No XP/level/streak/badge categories.
6. **Navbar** — no work; already fixed in `f103911`.

Explicitly out of scope: any AchievementPlanner-native XP/level/streak/badge global ranking (still localStorage-only, needs its own server-side design later).

## 3. Live verification performed before implementing (per user's explicit request)

Using the real, configured `STEAM_API_KEY` against steamid `76561198160458768`:

- `GetOwnedGames`: 144 games returned, all 144 carry the `rtime_last_played` key (never absent). 93 have `rtime_last_played > 0`, matching `games_played = 93` already stored in the leaderboard DB from a prior real Profile visit. **0** games have `playtime_forever = 0` with `rtime_last_played > 0`, and **0** games have `playtime_forever > 0` with a missing/zero `rtime_last_played` — the two fields are consistent, so filtering on `rtime_last_played > 0` is a safe, real "has play activity" signal.
- `GetSchemaForGame`: confirmed the two distinct response shapes described in section 1 (zero-achievement game → 200 + empty `game` object; invalid appid → 400 → throws).

## 4. Files touched (planned)

Backend: `services/steamApi.js`, `utils/gameAchievementSummary.js`, `utils/profileStats.js`, `utils/gameMapper.js`, `routes/games.js`. New: `src/utils/planner/achievement/availability.js` (shared classifier + label map, imported by both backend and frontend — same cross-import precedent as `completion.js`).

Frontend: `src/utils/player/statistics/profileStatsClient.js`, `src/components/profile-stats/profile-stats.js`, `src/components/profile-games/profile-games.js`, `src/components/profile-games/profile-games.css` (new `.profile-games-view-all` rule only), `src/components/catalog-card/catalog-card.js`, `src/js/profile.js`, `src/js/game.js`. New: `src/utils/player/statistics/helpers/recentlyPlayed.js`.

`podiums.html` — one heading added, no JS/logic change. `src/components/podium/*`, `backend/services/leaderboardStore.js`, `backend/controllers/podiumController.js` — **unchanged**, confirmed already correct against the Area 5 spec.

Explicitly untouched: `playerStatistics.js`, `completedGames.js` (old helper), `getInProgressGameSlugs` (left as dead code after the swap, not deleted), navbar files, XP/level/streak/badge code, `mapSteamAchievements`/`achievementMerger.js` internals (only their callers change).

## 5. Test plan

New/updated backend tests: `steamApi` schema classification (via `gameAchievementSummary.test.js`'s injected fetchers, updated to the new shape + new cases), `profileStats.test.js` (new `gamesWithAchievements` counter, schema-failure treated as transient), `apiGamesRoute.test.js` (achievement-availability field present/shape). New frontend test: `recentlyPlayed.test.js` (ordering, limit 10, exclude zero-activity, missing/zero timestamps, empty). Updated: `profileStatsRendering.test.js`, `profileGamesRendering.test.js`, `catalogCard.test.js`, `profileStatsClient.test.js`.

## 6. Risks

- `routes/games.js`'s listing endpoint gains a concurrency-limited Steam schema fan-out for owned, non-planner games only (not the whole library) — bounded by the existing `mapWithConcurrency` pattern, 24h-cached per appid, so repeat loads are cheap; first cold load for a large library is the only meaningfully slower case. Scoped deliberately to non-planner games to minimize this.
- Changing `getSchemaForGame`'s return shape is a breaking signature change for its 2 existing call sites — both are updated in this phase; no other callers exist (verified by grep).

Proceeding to implementation now — user's message already constitutes explicit approval of this scope.
