# Phase 32 Audit — Podiums / Leaderboards Architecture

Status: **read-only design audit — no files modified, nothing installed, nothing committed.**

Repo state at time of audit: branch `main`, in sync with `origin/main` at `f103911 feat(profile): improve Steam profile statistics and games`, working tree clean.

---

## Current architecture — what already exists

Re-verified against the current tree (unchanged since the Phase 31 audit's findings on this subject):

- **Steam API integration** (`backend/services/steamApi.js`): `getPlayerSummary`, `getOwnedGames`, `getSchemaForGame`, `getGlobalAchievementPercentages`, `getCurrentPlayerCount`, `getPlayerAchievements`/`getPlayerAchievementsClassified`. All are thin wrappers around official `api.steampowered.com` endpoints, called with the project's own `STEAM_API_KEY`, each with its own TTL in `backend/utils/cache.js` (an in-memory `Map`, process-local, wiped on every restart).
- **Auth/session model** (`backend/server.js`, `backend/controllers/steamController.js`, `backend/services/steamAuth.js`): Steam OpenID login; `express-session` with **no configured store**, i.e. the default `MemoryStore` — sessions are also process-local and lost on restart. `req.session.user` holds only `{steamid, personaname, avatarfull, profileurl}`, never persisted anywhere beyond the session.
- **Caching**: `backend/utils/cache.js`, a bare in-memory `Map` with TTL-based expiry. `backend/utils/profileStats.js` layers a 5-minute cache + in-flight request de-duplication on top of it for the expensive per-user achievement fan-out. Nothing here is durable.
- **Routes/controllers/services/utils** relevant to this feature: `routes/api.js` (`/api/profile`, `/api/profile/stats`), `routes/games.js` (`/api/games`, `/api/games/popular`, `/api/games/:slug`), `routes/steam.js` (`/auth/steam/login`, `/auth/steam/return`), `utils/gameMapper.js` (Steam game → internal shape incl. `slug`/`appid`), `utils/plannerCatalog.js` (local `src/data/games/*.json` catalog, currently 3 curated games), `utils/concurrencyLimiter.js` (`mapWithConcurrency`, already used for the 8-way concurrency-limited achievement fan-out).
- **Persistent storage**: **none exists at all.** `backend/package.json` dependencies are exactly `cors`, `dotenv`, `express`, `express-session` — no DB driver, no ORM, nothing that survives a process restart. This is the single most important fact for this feature: **every byte of data this backend has ever produced disappears on restart.**

## Steam API capabilities for this feature — re-confirmed

This restates and reuses the live-verified findings from the Phase 31 audit (same conclusions, re-checked against the current codebase, not re-tested against the live API a second time since Steam's API surface hasn't changed):

- `IPlayerService/GetOwnedGames/v1` works for **any** steamId (not just the caller's own), returning `playtime_forever` per owned game — but only when that account's "Game details" privacy is Public. Two of three real profiles tested during the Phase 31 audit returned nothing (private), one returned a full 377-game list.
- `ISteamUser/GetFriendList/v1` works and returns a user's friends' steamIds — but only if the requesting user's own friends list is Public.
- **No Steam endpoint discovers or enumerates arbitrary Steam users**, and **no Steam endpoint ranks players by playtime or achievements for a given game.** `GetNumberOfCurrentPlayers` (already used by `popularGames.js`) returns a concurrent-player *count*, never identities.
- Steamworks leaderboards (`ISteamUserStats/GetLeaderboardEntriesForGame`) are per-game, developer-owned infrastructure — not accessible to AchievementPlanner as a third party for games it doesn't develop, and not usable for a general playtime ranking even where they exist.

**Conclusion, unchanged from Phase 31: a genuine cross-user leaderboard cannot come from Steam. It can only come from AchievementPlanner persisting data about the users who have logged in.**

---

## A. Recommended data model / database schema

Three tables, deliberately split by **cost to produce** — this is the key design insight: the data needed for the *game-specific* podium is nearly free (already fetched), while the data needed for *achievement-based* global categories is expensive (the same 144-game, ~250+ Steam-call fan-out `profileStats.js` already performs for the Profile page).

```sql
-- One row per AchievementPlanner user who has ever logged in via Steam.
-- Login itself IS the opt-in - no separate consent flow needed.
CREATE TABLE users (
    steam_id              TEXT PRIMARY KEY,
    persona_name          TEXT NOT NULL,
    avatar_url            TEXT,
    games_owned           INTEGER,          -- cheap: from GetOwnedGames.game_count
    games_played          INTEGER,          -- cheap: playtime_forever > 0 count
    total_playtime_minutes INTEGER,         -- cheap: SUM(playtime_forever)
    achievements_unlocked  INTEGER,         -- expensive: from the Profile achievement fan-out
    games_completed_100    INTEGER,         -- expensive: same fan-out
    library_refreshed_at    TEXT,           -- last time the cheap snapshot ran
    achievements_refreshed_at TEXT,         -- last time the expensive scan ran
    first_indexed_at        TEXT NOT NULL,
    last_login_at           TEXT NOT NULL
);

-- One row per (user, owned game) - populated in full from the SAME
-- GetOwnedGames call that already produces games_owned/games_played above.
-- This is what powers the per-game podium; it costs zero extra Steam
-- calls beyond what a library refresh already does.
CREATE TABLE user_game_playtime (
    steam_id        TEXT NOT NULL REFERENCES users(steam_id),
    appid           INTEGER NOT NULL,
    playtime_minutes INTEGER NOT NULL,
    updated_at      TEXT NOT NULL,
    PRIMARY KEY (steam_id, appid)
);
CREATE INDEX idx_game_playtime_leaderboard
    ON user_game_playtime (appid, playtime_minutes DESC);
```

Notably **no per-game achievement/completion table is needed for the podium feature as scoped** — you asked for the game-specific podium to rank "primarily on playtime," and the global page's achievement-based categories (`achievements_unlocked`, `games_completed_100`) are single aggregate numbers per user, not per-game, so they fit directly on `users`. If a future phase wants a *per-game* "most achievements in this specific game" leaderboard, that would need a third table (`user_game_achievements`) fed by the existing per-game achievement summary (`gameAchievementSummary.js`) - straightforward to add later, deliberately left out of this design to keep the first version's Steam-call cost down.

Indexes needed for the global categories: since `users` is one row per person, `ORDER BY games_owned DESC LIMIT 10` etc. don't need dedicated indexes at any realistic scale (hundreds to low thousands of rows) - SQLite will happily table-scan-and-sort that fast. Add indexes later only if real usage proves it necessary.

## B. Backend architecture and endpoints

New modules, following this codebase's existing separation of concerns (services = I/O, utils = pure logic, controllers = HTTP glue):

- `backend/services/leaderboardDb.js` — the only file that touches the SQLite connection directly (open/prepare statements), mirroring how `steamApi.js` is the only file that touches `fetch` to Steam.
- `backend/utils/leaderboardStore.js` — `upsertLibrarySnapshot(steamId, profile, libraryCounts, gamePlaytimes)`, `upsertAchievementSnapshot(steamId, {achievementsUnlocked, gamesCompleted100})`, `getGameLeaderboard(appid, limit)`, `getUserGameRank(steamId, appid)`, `getGlobalLeaderboard(category, limit)`, `getUserGlobalRank(steamId, category)`. Thin, testable wrappers around prepared SQL statements - testable the same way `profileStats.js`'s pure functions already are, by injecting a test database.
- `backend/utils/leaderboardCategories.js` — the fixed list of valid global categories (`games-owned`, `games-played`, `total-playtime`, `achievements`, `completed-games`) and their column/label/formatting metadata, so the controller and any validation share one source of truth instead of hardcoding strings twice.
- `backend/controllers/podiumController.js` + `backend/routes/podiums.js`:
  - `GET /api/podiums/game/:slug` → resolves slug to appid via the existing `plannerCatalog`/`gameMapper` machinery, returns `{ top10: [...], me: { rank, playtimeMinutes } | null, totalRanked }`.
  - `GET /api/podiums/global/:category` → same shape, `me` computed against whichever column the category maps to.
  - `GET /api/podiums/categories` → the static category list, for the frontend to build its tab/nav UI without hardcoding it twice.

**Indexing trigger points (no new background job/scheduler needed - piggyback on pages users already visit):**
- `routes/api.js`'s `/api/profile/stats` handler already fetches `getOwnedGames` and already runs the full achievement fan-out for the Profile page. After computing its existing response, it additionally calls `leaderboardStore.upsertLibrarySnapshot(...)` and `upsertAchievementSnapshot(...)`. This is the single point that produces *both* the cheap and expensive data, since it's already paying for both.
- Optionally (nice-to-have, not required for MVP): `routes/games.js`'s single-game `/:slug` handler, which already calls `getOwnedGames` for the logged-in viewer, could also call `upsertLibrarySnapshot` opportunistically - meaning a user gets indexed for game-specific podiums just by browsing a game page, without ever visiting Profile. Cheap (one already-made call), worth doing but not blocking.

No dedicated cron/background worker is needed for v1. This deliberately avoids introducing a scheduler into a codebase that doesn't have one today (see `phase_workflow` standing guidance against unrequested infrastructure). A future phase could add a periodic re-scan for staleness beyond "the user happened to revisit," but that's an optimization, not a requirement to launch.

## C. How users get indexed

Login via Steam **is** the opt-in - consistent with how this app already treats Steam login as the gate for every other personalized feature (Profile, achievement tracking). No separate consent checkbox needed. Concretely: a user becomes indexed the first time `/api/profile/stats` runs for their `steamId` (i.e., the first time they load Profile after logging in). Until then, they simply don't have a `users` row and don't appear in any leaderboard - see F/G for how that's surfaced.

## D. How rankings are calculated

Plain SQL, computed on read, not pre-computed/cached as a separate ranking table (unnecessary complexity at this scale):

```sql
-- Top 10 for a game
SELECT u.steam_id, u.persona_name, u.avatar_url, g.playtime_minutes
FROM user_game_playtime g JOIN users u ON u.steam_id = g.steam_id
WHERE g.appid = ?
ORDER BY g.playtime_minutes DESC
LIMIT 10;

-- Current user's rank for that game (competition ranking - ties share a rank)
SELECT 1 + COUNT(*) AS rank
FROM user_game_playtime
WHERE appid = ?
  AND playtime_minutes > (
      SELECT playtime_minutes FROM user_game_playtime
      WHERE appid = ? AND steam_id = ?
  );
```

Same shape for global categories against `users`' columns. This is cheap enough to run per-request at realistic scale; add an in-memory cache layer (reusing `cache.js`'s existing TTL pattern, e.g. 1-2 minutes) only if real traffic shows it's needed - premature to build that now.

## E. How often data should refresh

Two independent cadences, matching the cost split in A:

- **Library snapshot** (owned/played/playtime-per-game): refresh at most once per **1 hour** per user. Cheap (one Steam call), but no reason to hit Steam on every single Profile load.
- **Achievement snapshot** (achievements/100%-completed): refresh at most once per **24 hours** per user. This mirrors the real cost (~250+ Steam calls) and matches the fact that achievement completion doesn't change minute-to-minute for most players.

Both guards live in `leaderboardStore.js` as a `WHERE library_refreshed_at < ?` / `WHERE achievements_refreshed_at < ?` check before doing the expensive work, independent of - and in addition to - `profileStats.js`'s existing 5-minute in-memory cache (which is about not re-hitting Steam twice for the same page load, not about how often the durable leaderboard data changes).

## F. Handling private/unavailable Steam data

Identical philosophy to everything Phase 31 already established - never fabricate, always degrade explicitly:

- If `getOwnedGames` returns empty/private for a user, they still get a `users` row (so login/Profile keeps working), but with `games_owned: 0` and no `user_game_playtime` rows - they simply never appear in any podium, cheaply and correctly, with no special-casing needed elsewhere.
- If a specific game's playtime is 0 (or the user doesn't own it), they have no row for that `appid` and don't appear in that game's leaderboard - not ranked "last," just absent.
- Achievement data unavailability (`gamesWithPlayerDataUnavailable`, already tracked by `profileStats.js`) means `achievements_unlocked`/`games_completed_100` are a **best-effort, partial** figure - the same caveat text Phase 31 already renders on Profile ("Steam didn't report data for N of your M games") should be echoed on the global Podiums page for transparency, not hidden.

## G. Calculating and displaying the current user's own rank

The `me` field on both endpoint shapes (see B) is always computed, regardless of whether the user is inside or outside the top 10 - via the `COUNT(*) + 1` query in D. Frontend rule, matching your spec exactly: if `me.rank <= 10`, highlight that row inside the rendered Top 10 (never render a second, duplicate row); if `me.rank > 10`, render a separate "Your position" block below the Top 10/podium, visually distinguished (e.g. a border/background treatment, plus their avatar). If the user has no row at all for that game/category (never indexed, or genuinely 0 for that game), show an explicit "You haven't been ranked yet" state rather than omitting the block or showing a fabricated rank.

## H. Anti-abuse / consistency considerations

- **No client-writable stats, anywhere.** Every number in the leaderboard is server-computed from a Steam API response; there is no endpoint that accepts a user-submitted playtime/achievement value. This is the core anti-cheat property and it falls out of the architecture for free - worth stating explicitly since it's the main way this kind of feature usually gets abused.
- Refresh-cadence guards (E) double as basic rate-limiting against someone spamming Profile reloads to force repeated expensive Steam fan-outs.
- Consider filtering out accounts Steam itself flags as unreliable - `GetPlayerSummaries`' `communityvisibilitystate` (already fetched by `getPlayerSummary`, currently unused for this purpose) can distinguish public/private accounts; a private account shouldn't get a leaderboard row with stale/zero data sitting in it looking like a real (low) ranking.
- No new PII beyond what's already stored in the session today (`personaname`, `avatarfull`) - this feature persists exactly the same two identity fields, plus numbers, nothing more sensitive.

## I. UI structure

- **Game page**: a new `src/components/game-podium/` component, inserted near the existing achievement/progress section (`createGameOverview`/`createSteamAchievementList` area in `src/js/game.js`). Visual treatment: an actual podium shape (heights descending 1st/2nd/3rd, medal iconography) for the top 3, reusing the avatar-circle treatment already established in `profile-header`/`player-widget`; a simple ranked list for #4-10; a separated "Your position" card below (or the highlighted-row treatment) per G.
- **Global Podiums page**: new `podiums.html` + `src/js/podiums.js`, structurally parallel to `profile.html`/`profile.js`. Category selector (tabs or a dropdown) sourced from `GET /api/podiums/categories`, rendering the **same podium component** as the game page - just parameterized by category instead of by game. Reusing one component for both surfaces (rather than building two separate renderers) is the "smallest clean architecture" version of this, matching how `catalog-card.js` already gets reused across Home/Games/Profile.
- **Navbar**: `src/components/nav-links/nav-links.js` currently has `Games` (active) plus three explicitly-disabled "Soon" placeholders (`Guides`, `Roadmap`, `About` - see `4805ad7 fix: make unavailable navigation links explicit`). Add a real `Podiums` link here, following the existing active/inactive pattern already in that file rather than inventing a new nav treatment.

## J. Recommended implementation order

Each step is independently shippable/testable and matches the standing audit→approve→implement→validate→report workflow - not one mega-phase:

1. **Persistence infrastructure only.** Add the SQLite dependency, `leaderboardDb.js` connection setup, schema creation, and `leaderboardStore.js` with full unit test coverage against a temporary/in-memory test database. No routes, no UI, nothing wired into existing pages yet. Purely additive, zero risk to anything existing.
2. **Wire up the cheap library snapshot.** `profileStatsController.js` (and optionally `games.js`'s single-game route) starts calling `upsertLibrarySnapshot` after its existing `getOwnedGames` call. Still no podium UI - verify via direct DB inspection / a temporary debug script that real logins populate real rows.
3. **Wire up the expensive achievement snapshot.** Same controller, after its existing fan-out completes, calls `upsertAchievementSnapshot`. Still no UI.
4. **Backend podium endpoints.** `podiumController.js`/`routes/podiums.js`, ranking SQL, `leaderboardCategories.js`, full test coverage with seeded fixture data. curl/Postman-testable; still no frontend.
5. **Game-page podium UI.** The shared podium component, wired into the game page only.
6. **Global Podiums page + navbar link.** Reuses the component built in step 5.
7. **Polish pass.** Private/unranked empty states, the achievement-data-partial caveat text, `communityvisibilitystate` filtering, cadence tuning based on real observed usage.

## What can be built immediately vs. what requires the database

**Nothing in this feature can be built without the database** - that is the entire premise established by the Steam-API investigation (both in this audit and the prior Phase 31 one): there is no way to produce a cross-user ranking without AchievementPlanner persisting data about its own users, because Steam will never hand that over. Every one of steps 1-7 above depends on step 1 landing first.

The one adjacent idea that *could* be built without any persistent storage is a **Steam-friends-only leaderboard** (live `GetFriendList` + `GetOwnedGames` per friend, computed fresh on each request, nothing stored) - technically feasible today with zero new infrastructure, but it (a) only ranks a user's existing Steam friends who also happen to own the same game, not "AchievementPlanner players," and (b) depends on two independent privacy settings outside AchievementPlanner's control (the viewer's friends list being public, and each friend's game details being public). It doesn't satisfy what you're asking for here (a real cross-user AchievementPlanner leaderboard), so it's noted only as a possible smaller, storage-free companion feature for later - not part of this recommendation.

---

## Final recommendation

**Yes, introduce a database now.** This isn't optional or a "nice to have for scale" - it's the only way this feature can exist at all, given Steam provides no equivalent endpoint. Every other piece of this design (endpoints, refresh cadence, UI) is downstream of that one decision.

**Recommended database: SQLite**, specifically:

- Prefer Node's **built-in `node:sqlite`** module if the deployment target's Node version supports it without a flag (this dev environment is on Node v24.18.1, where it's available) - zero new npm dependency, one less thing to install/maintain in a project that currently has exactly four runtime dependencies total.
- Fall back to **`better-sqlite3`** (synchronous, well-maintained, ships prebuilt binaries for common platforms so it normally doesn't require a local C++ toolchain) if the actual deployment target's Node version is older or unconfirmed - worth checking before Phase 32's implementation step, since this repo has no `engines` field pinning a Node version anywhere.

Why SQLite over the alternatives, for *this* project specifically:
- **Not a flat JSON file**: sorting/ranking would need to happen entirely in JS on every request, and hand-rolling atomic concurrent writes correctly is more error-prone than SQLite's built-in transaction handling gives you for free.
- **Not a hosted DB (Postgres/MySQL/MongoDB)**: this project today is one small Express process plus a static frontend, with no existing deployment infrastructure for a separate database service, no connection-string management, nothing like it anywhere in `.env.example`. Adding one would be a disproportionate infrastructure jump for a single-process app at its current scale. SQLite is a single file, needs no server, and is trivial to back up, inspect, and reason about.
- **Real indexes and `ORDER BY`/`LIMIT`** give correct, efficient Top-10 queries without loading entire tables into memory and sorting in JS - a meaningful correctness/performance win over the flat-file approach as the user base grows past trivial size.

One explicit caveat to flag now rather than discover later: this project's **session store is already in-memory** (`express-session` default `MemoryStore`) and would need to move to shared storage (e.g. `connect-sqlite3`, or eventually a hosted store) the moment AchievementPlanner ever runs more than one backend instance - that limitation already exists today, independent of Podiums, and a file-based SQLite DB would inherit the same "single-instance only" constraint unless/until that's addressed. Not a reason to avoid SQLite now (a single-instance deployment is exactly what this project has today), just something to revisit together if horizontal scaling ever becomes a real requirement.
