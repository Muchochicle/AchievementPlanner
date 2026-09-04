import { getLeaderboardDb } from "./leaderboardDb.js";
import { buildLeaderboardSnapshot } from "../utils/leaderboardSnapshot.js";
import {
    PROGRESSION_METRICS,
    PROGRESSION_LEADERBOARD_METRICS,
    extractProgressionValue,
    authoritativeLevelValue
} from "../utils/progressionMetrics.js";

// Upserts one user's identity + library snapshot, conditionally updates the
// (expensive) achievement snapshot, and brings user_game_playtime fully in
// sync with their current owned-games list (adds/updates every currently-
// owned game, removes any row for a game no longer owned) - all in one
// transaction, so the per-game podium can eventually be built entirely by
// reading this table, with no leftover rows from games a user has since
// removed from their library.
//
// Identity/library fields and last_login_at are written unconditionally -
// reaching this function at all means the Profile stats controller already
// has a confirmed, successful GetOwnedGames response. The achievement
// columns are different: `snapshot.achievements` is null whenever this
// particular scan didn't actually produce a valid result (see
// hasValidAchievementResult() in leaderboardSnapshot.js) - in that case the
// achievements_* columns are left completely untouched, preserving
// whatever was already there (NULL/'unknown' on a first insert, or the last
// genuinely-valid snapshot on an update) instead of overwriting good data
// with a scan that answered nothing.
//
// first_indexed_at is deliberately left out of the UPDATE branch below, so
// it is set once on the first insert and never touched again.
//
// Throws on failure (a constraint violation, a closed connection, etc.) -
// callers that need the "never breaks the caller" guarantee should use
// indexProfileSnapshotSafely() below instead. Exported directly so tests
// can verify the transaction actually rolls back on a mid-write failure.
export function indexUserSnapshot(db, snapshot) {

    const now = new Date().toISOString();

    db.exec("BEGIN;");

    try {

        db.prepare(`
            INSERT INTO users (
                steam_id, persona_name, avatar_url, profile_url,
                games_owned, games_played, total_playtime_minutes,
                library_status, library_refreshed_at,
                first_indexed_at, last_login_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(steam_id) DO UPDATE SET
                persona_name            = excluded.persona_name,
                avatar_url              = excluded.avatar_url,
                profile_url              = excluded.profile_url,
                games_owned              = excluded.games_owned,
                games_played             = excluded.games_played,
                total_playtime_minutes   = excluded.total_playtime_minutes,
                library_status           = excluded.library_status,
                library_refreshed_at     = excluded.library_refreshed_at,
                last_login_at            = excluded.last_login_at
        `).run(
            snapshot.steamId,
            snapshot.personaName,
            snapshot.avatarUrl,
            snapshot.profileUrl,
            snapshot.gamesOwned,
            snapshot.gamesPlayed,
            snapshot.totalPlaytimeMinutes,
            snapshot.libraryStatus,
            now,
            now,
            now
        );

        if (snapshot.achievements) {

            db.prepare(`
                UPDATE users SET
                    achievements_unlocked      = ?,
                    games_completed_100        = ?,
                    achievements_status        = ?,
                    achievements_refreshed_at  = ?
                WHERE steam_id = ?
            `).run(
                snapshot.achievements.achievementsUnlocked,
                snapshot.achievements.gamesCompleted100,
                snapshot.achievements.achievementsStatus,
                now,
                snapshot.steamId
            );

        }

        syncOwnedGames(db, snapshot.steamId, snapshot.games, now);

        db.exec("COMMIT;");

    } catch (error) {

        db.exec("ROLLBACK;");
        throw error;

    }

}

// Brings user_game_playtime fully in sync with `games`: upserts every
// currently-owned game, then deletes any existing row for an appid that is
// no longer in that list. Always called from inside indexUserSnapshot's
// transaction - never standalone.
function syncOwnedGames(db, steamId, games, now) {

    const existingAppids = db.prepare(
        "SELECT appid FROM user_game_playtime WHERE steam_id = ?"
    ).all(steamId).map(row => row.appid);

    const currentAppids = new Set(games.map(game => game.appid));

    const deleteStale = db.prepare(
        "DELETE FROM user_game_playtime WHERE steam_id = ? AND appid = ?"
    );

    for (const appid of existingAppids) {

        if (!currentAppids.has(appid)) {

            deleteStale.run(steamId, appid);

        }

    }

    const upsertGame = db.prepare(`
        INSERT INTO user_game_playtime (steam_id, appid, playtime_minutes, updated_at)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(steam_id, appid) DO UPDATE SET
            playtime_minutes = excluded.playtime_minutes,
            updated_at       = excluded.updated_at
    `);

    for (const game of games) {

        upsertGame.run(steamId, game.appid, game.playtimeMinutes, now);

    }

}

// Best-effort entry point for the Profile stats flow (Phase 32 Step 2):
// guaranteed never to throw, regardless of what fails - resolving the DB
// connection, building the snapshot, or the write itself. Persistence must
// never affect whether /api/profile/stats succeeds or what it returns; this
// function is the single place that guarantee lives, so the controller
// doesn't need its own try/catch around it. `db` is injectable (defaults to
// the real singleton) purely so tests can pass an isolated in-memory
// database instead of touching real persisted state - mirrors the
// fetchSummary injection pattern in utils/profileStats.js.
export function indexProfileSnapshotSafely({ steamUser, libraryGames, libraryCounts, achievementStats }, db) {

    try {

        const resolvedDb = db ?? getLeaderboardDb();

        const snapshot = buildLeaderboardSnapshot({ steamUser, libraryGames, libraryCounts, achievementStats });

        indexUserSnapshot(resolvedDb, snapshot);

        return true;

    } catch (error) {

        console.error(
            `[leaderboardStore] Failed to persist leaderboard snapshot for steamId=${steamUser?.steamid}:`,
            error.message
        );

        return false;

    }

}

// --- Read side ---------------------------------------------------------
//
// These back the podium endpoints in controllers/podiumController.js.

// SQLite treats a non-positive LIMIT specially - LIMIT 0 returns nothing,
// but LIMIT -1 (or any negative value) means "no limit at all", silently
// returning the entire table (confirmed empirically against node:sqlite).
// Both getGameLeaderboard and getGlobalLeaderboard will back real HTTP
// endpoints once Step 3 adds routes, so an unvalidated limit (e.g. a bad
// query param coerced to -1) must not be able to dump every row - fall back
// to the default Top-10 size for anything that isn't a positive integer.
function normalizeLimit(limit) {

    return Number.isInteger(limit) && limit > 0 ? limit : 10;

}

// Top players for one game's playtime leaderboard, highest first. Every row
// in user_game_playtime is, by construction (see syncOwnedGames above), a
// confirmed real playtime value from a successful GetOwnedGames call -
// never a fabricated/unavailable entry - so no status filtering is needed
// here the way getGlobalLeaderboard needs it below.
//
// The steam_id secondary sort makes which rows land inside vs. just
// outside the LIMIT deterministic across repeated calls when several
// players tie at the cutoff value (playtime_minutes has coarse real-world
// granularity, and 0 is a common legitimate value) - without it, SQLite's
// row order for equal primary-sort values is unspecified and could vary
// call to call. This alone doesn't guarantee the *viewer's own* row is
// among the ones selected when they're part of such a tie - see
// podium.js's renderMeSection(), which no longer assumes rank <= 10
// implies membership in this result set (Phase 66).
export function getGameLeaderboard(db, appid, { limit = 10 } = {}) {

    return db.prepare(`
        SELECT
            u.steam_id AS steamId,
            u.persona_name AS personaName,
            u.avatar_url AS avatarUrl,
            g.playtime_minutes AS playtimeMinutes
        FROM user_game_playtime g
        JOIN users u ON u.steam_id = g.steam_id
        WHERE g.appid = ?
        ORDER BY g.playtime_minutes DESC, g.steam_id ASC
        LIMIT ?
    `).all(appid, normalizeLimit(limit));

}

// The current user's standing in one game's playtime leaderboard:
// competition ranking (ties share a rank; the next distinct value skips
// accordingly), plus their own playtime. Returns null when the user has no
// row for this appid at all - they've never been indexed for this game (not
// owned, or not yet refreshed) - so the caller can render an explicit
// "not ranked yet" state instead of a fabricated rank (see
// PHASE_32_AUDIT.md section G).
export function getUserGameRank(db, steamId, appid) {

    const row = db.prepare(
        "SELECT playtime_minutes FROM user_game_playtime WHERE appid = ? AND steam_id = ?"
    ).get(appid, steamId);

    if (!row) {

        return null;

    }

    const { count } = db.prepare(
        "SELECT COUNT(*) AS count FROM user_game_playtime WHERE appid = ? AND playtime_minutes > ?"
    ).get(appid, row.playtime_minutes);

    return { playtimeMinutes: row.playtime_minutes, rank: count + 1 };

}

// Fixed, whitelisted category -> column mapping for the global leaderboard -
// never built from caller input, so there is no SQL-injection surface even
// though the column/status names are string-interpolated below (SQLite has
// no way to bind an identifier as a parameter). Matches the category list
// from PHASE_32_AUDIT.md section B.
//
// Each category is only ranked among rows whose corresponding status column
// says the data is real: 'available' always qualifies; achievement
// categories also allow 'partial' (a genuine best-effort figure, still
// real data - see leaderboardSnapshot.js's hasValidAchievementResult) but
// never 'unknown' (never fetched) - and the column itself must be non-NULL,
// which 'unknown'/'private' rows always are by construction anyway. This is
// how "never turn unavailable data into a fabricated zero" carries through
// to reads, not just writes.
const GLOBAL_CATEGORIES = Object.freeze({

    "games-owned": { column: "games_owned", statusColumn: "library_status", allowedStatuses: ["available"] },
    "games-played": { column: "games_played", statusColumn: "library_status", allowedStatuses: ["available"] },
    "total-playtime": { column: "total_playtime_minutes", statusColumn: "library_status", allowedStatuses: ["available"] },
    "achievements": { column: "achievements_unlocked", statusColumn: "achievements_status", allowedStatuses: ["available", "partial"] },
    "completed-games": { column: "games_completed_100", statusColumn: "achievements_status", allowedStatuses: ["available", "partial"] }

});

export const GLOBAL_LEADERBOARD_CATEGORIES = Object.freeze(Object.keys(GLOBAL_CATEGORIES));

function resolveCategory(category) {

    const config = GLOBAL_CATEGORIES[category];

    if (!config) {

        throw new Error(`Unknown leaderboard category: ${category}`);

    }

    return config;

}

// The "this row's data is real, not missing/never-fetched" condition shared
// by getGlobalLeaderboard, getUserGlobalRank and getGlobalLeaderboardSize -
// factored out once so the three never drift out of sync with each other.
function qualifyingUsersClause(config) {

    const placeholders = config.allowedStatuses.map(() => "?").join(", ");

    return `${config.column} IS NOT NULL AND ${config.statusColumn} IN (${placeholders})`;

}

export function getGlobalLeaderboard(db, category, { limit = 10 } = {}) {

    const config = resolveCategory(category);

    return db.prepare(`
        SELECT
            steam_id AS steamId,
            persona_name AS personaName,
            avatar_url AS avatarUrl,
            ${config.column} AS value
        FROM users
        WHERE ${qualifyingUsersClause(config)}
        ORDER BY ${config.column} DESC, steam_id ASC
        LIMIT ?
    `).all(...config.allowedStatuses, normalizeLimit(limit));

}

// The current user's standing in one global category: their own value plus
// competition ranking among every other *qualifying* user (see
// qualifyingUsersClause - never/partially-fetched users are excluded from
// the count the same way they're excluded from the leaderboard itself, so a
// user near the top isn't pushed down by people who were never really
// ranked). Returns null when the user has no qualifying value for this
// category at all - not logged in enough history, private data, or never
// indexed - so the caller can show an explicit "not ranked yet" state (see
// PHASE_32_AUDIT.md section G) instead of a fabricated rank.
export function getUserGlobalRank(db, steamId, category) {

    const config = resolveCategory(category);
    const clause = qualifyingUsersClause(config);

    const row = db.prepare(`
        SELECT ${config.column} AS value
        FROM users
        WHERE steam_id = ? AND ${clause}
    `).get(steamId, ...config.allowedStatuses);

    if (!row) {

        return null;

    }

    const { count } = db.prepare(`
        SELECT COUNT(*) AS count
        FROM users
        WHERE ${config.column} > ? AND ${clause}
    `).get(row.value, ...config.allowedStatuses);

    return { value: row.value, rank: count + 1 };

}

// How many users currently qualify for this category at all - lets a
// podium UI show "ranked N of 1,234 players" instead of just a Top 10 in
// isolation. Deliberately counts only qualifying rows (see
// qualifyingUsersClause), matching what getGlobalLeaderboard/
// getUserGlobalRank actually rank over.
export function getGlobalLeaderboardSize(db, category) {

    const config = resolveCategory(category);

    const { count } = db.prepare(`
        SELECT COUNT(*) AS count FROM users WHERE ${qualifyingUsersClause(config)}
    `).get(...config.allowedStatuses);

    return count;

}

// Companion to getGameLeaderboard/getUserGameRank - how many players have
// any recorded playtime for this game at all.
export function getGameLeaderboardSize(db, appid) {

    const { count } = db.prepare(
        "SELECT COUNT(*) AS count FROM user_game_playtime WHERE appid = ?"
    ).get(appid);

    return count;

}

// --- Progression leaderboards (Task 6) --------------------------------
//
// "Highest Level" and "Longest Streak" - ranked from the player_progress
// blob (see progressionMetrics.js's TRUST MODEL note for why these differ
// from the Steam-verified categories above). Unlike the users-table
// categories, the ranking value lives inside a JSON string column, so
// there is no index to ORDER BY and no SQL comparison - every row is read,
// parsed and sorted in JS here. Fine at this app's scale (one row per
// player who has ever synced progress); revisit with a materialized
// column if player_progress ever grows large.
//
// INNER JOIN users: a podium row needs a display name + avatar, which
// player_progress does not carry. A player who synced progress but never
// visited their Profile page (the only thing that writes a users row) is
// simply not shown - same "only rank what we can honestly display"
// stance the Steam categories take with their status filters.

export { PROGRESSION_LEADERBOARD_METRICS };

function readProgressionRows(db, metric) {

    const config = PROGRESSION_METRICS[metric];

    if (!config) {

        throw new Error(`Unknown progression leaderboard metric: ${metric}`);

    }

    const rows = db.prepare(`
        SELECT
            p.steam_id               AS steamId,
            p.state                  AS state,
            u.persona_name           AS personaName,
            u.avatar_url             AS avatarUrl,
            u.achievements_unlocked  AS achievementsUnlocked,
            u.games_completed_100    AS gamesCompleted100,
            u.achievements_status    AS achievementsStatus
        FROM player_progress p
        JOIN users u ON u.steam_id = p.steam_id
    `).all();

    const ranked = [];

    for (const row of rows) {

        let parsed;

        try {

            parsed = JSON.parse(row.state);

        } catch {

            continue;

        }

        // "level" is ranked from Steam-verified data already joined above,
        // never from the client-controlled state blob - see
        // progressionMetrics.js's TRUST MODEL note. Every other metric
        // (currently just "longest-streak") keeps reading from the blob.
        const value = metric === "level"
            ? authoritativeLevelValue({
                achievementsUnlocked: row.achievementsUnlocked,
                gamesCompleted100: row.gamesCompleted100,
                achievementsStatus: row.achievementsStatus
            })
            : extractProgressionValue(parsed, metric);

        if (value === null) {

            continue;

        }

        ranked.push({
            steamId: row.steamId,
            personaName: row.personaName,
            avatarUrl: row.avatarUrl,
            value
        });

    }

    // Highest value first; steam_id as a stable tie-break so the cutoff is
    // deterministic across calls, matching getGlobalLeaderboard.
    ranked.sort((a, b) => b.value - a.value || (a.steamId < b.steamId ? -1 : a.steamId > b.steamId ? 1 : 0));

    return ranked;

}

export function getProgressionLeaderboard(db, metric, { limit = 10 } = {}) {

    return readProgressionRows(db, metric).slice(0, normalizeLimit(limit));

}

export function getUserProgressionRank(db, steamId, metric) {

    const ranked = readProgressionRows(db, metric);

    const mine = ranked.find(row => row.steamId === steamId);

    if (!mine) {

        return null;

    }

    // Competition ranking: ties share a rank (count of strictly-greater
    // values + 1), same semantics as getUserGlobalRank.
    const greater = ranked.filter(row => row.value > mine.value).length;

    return { value: mine.value, rank: greater + 1 };

}

export function getProgressionLeaderboardSize(db, metric) {

    return readProgressionRows(db, metric).length;

}
