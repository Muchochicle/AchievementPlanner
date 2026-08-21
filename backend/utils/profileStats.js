import { mapWithConcurrency } from "./concurrencyLimiter.js";
import { getGameAchievementSummary } from "./gameAchievementSummary.js";
import { getCached, setCached } from "./cache.js";

// Conservative starting point for a per-Profile-load Steam API fan-out -
// there is no documented Steam rate limit to target precisely, so this
// stays low rather than aggressive. Revisit only with real evidence of
// throttling or of this being too slow.
const CONCURRENCY = 8;

// Deliberately separate from PLAYER_ACHIEVEMENTS_TTL_MS in steamApi.js
// (5 min) - this caches the already-reduced Profile result, not a single
// game's raw data, so a repeated Profile load never re-triggers the full
// library scan within this window. Process-local (backend/utils/cache.js
// is an in-memory Map): resets on every backend restart, not shared
// across multiple backend instances if this is ever deployed with more
// than one.
const PROFILE_STATS_TTL_MS = 5 * 60 * 1000;

// Pure reduction: turns one settled result per game (Promise.allSettled
// shape, see concurrencyLimiter.js) into the Profile cards plus
// availability metadata. No network, no cache, no wall-clock reads - the
// entire aggregation rule lives here and only here, so it can be unit
// tested with synthetic input independently of Steam ever being reachable.
//
// slugs (optional) is a parallel array - slugs[i] is the game.slug that
// produced settledResults[i] (see computeProfileStats). Passing it lets
// this function also return which games are 100% complete (used by the
// Profile "Your Games -> Completed" section) from the exact same
// completion answer the "100%" stat card already uses, instead of a
// second, independently-derived definition of "completed". Callers that
// don't care about slugs (e.g. existing tests) can omit it entirely.
export function reduceProfileStats(settledResults, slugs = []) {

    let achievements = 0;
    let gamesWithUnlockedAchievements = 0;
    let gamesWithAchievements = 0;
    let completedGames = 0;
    let gamesWithPlayerDataUnavailable = 0;
    let gamesWithTransientErrors = 0;
    const completedGameSlugs = [];

    for (let i = 0; i < settledResults.length; i++) {

        const result = settledResults[i];

        if (result.status === "rejected") {

            gamesWithTransientErrors++;
            continue;

        }

        const { total, completed, playerDataStatus, schemaStatus, hasAchievements } = result.value;

        // A failed schema fetch means we don't actually know this game's
        // achievement count - previously getSchemaForGame silently
        // collapsed that into "0 achievements" (see steamApi.js), which
        // under-reported both "games with achievements" and Completed (a
        // genuinely 100%-complete game could never register while its
        // schema fetch kept failing). Treat it the same as any other
        // transient Steam failure: excluded from every count below, not
        // silently counted as zero.
        if (schemaStatus && schemaStatus !== "available") {

            gamesWithTransientErrors++;
            continue;

        }

        // Schema-level fact, independent of whether *this* player has
        // unlocked anything - "games with Steam achievements" per the
        // Profile stat is about Steam's schema, not the player's unlock
        // history (see profile-stats.js / PHASE_33_AUDIT.md Area 1).
        if (hasAchievements) {

            gamesWithAchievements++;

        }

        if (playerDataStatus === "transient") {

            gamesWithTransientErrors++;
            continue;

        }

        if (playerDataStatus === "unavailable") {

            gamesWithPlayerDataUnavailable++;
            continue;

        }

        // playerDataStatus === "available" from here on - a real,
        // confirmed answer from Steam, even if it's zero achievements.
        achievements += completed;

        if (completed > 0) {

            gamesWithUnlockedAchievements++;

        }

        if (total > 0 && completed === total) {

            completedGames++;

            const slug = slugs[i];

            if (slug) {

                completedGameSlugs.push(slug);

            }

        }

    }

    return {

        achievements,
        gamesWithUnlockedAchievements,
        gamesWithAchievements,
        completedGames,
        completedGameSlugs,
        gamesConsidered: settledResults.length,
        gamesWithPlayerDataUnavailable,
        gamesWithTransientErrors

    };

}

// Pure: derives the "owned"/"played" counts straight from Steam's raw
// GetOwnedGames list (games[].playtime_forever, in minutes) - the same
// data the profile stats controller already fetches before mapping, so
// this adds zero Steam calls. Kept separate from reduceProfileStats
// because it needs none of the achievement fan-out - it's a pure
// property of the owned-games list itself.
export function computeLibraryCounts(games) {

    const list = games ?? [];

    return {

        gamesOwned: list.length,

        gamesPlayed: list.filter(
            game => (game?.playtime_forever ?? 0) > 0
        ).length

    };

}

// Orchestrates the concurrency-limited fan-out over one steamId's owned
// games and reduces it. fetchSummary is injectable (defaults to the real,
// Steam-backed getGameAchievementSummary) so tests can exercise
// concurrency/aggregation behavior with a synthetic fetcher instead of
// mocking Steam's API - consistent with how the rest of this backend's
// test suite treats real network calls (see steamController.test.js).
export async function computeProfileStats(steamId, ownedGames, fetchSummary = getGameAchievementSummary) {

    const eligible = ownedGames.filter(game => game.appid > 0);

    const settled = await mapWithConcurrency(
        eligible,
        CONCURRENCY,
        game => fetchSummary(steamId, game)
    );

    const slugs = eligible.map(game => game.slug);

    return {

        ...reduceProfileStats(settled, slugs),
        generatedAt: new Date().toISOString()

    };

}

// Keyed by steamId: while a computation for that steamId is already
// running, a second concurrent call (two tabs, a reload racing a slow
// first load, etc.) awaits the same in-progress Promise instead of
// starting its own 144-game fan-out. Always removed once that Promise
// settles - success or failure - so a failed computation never blocks
// the next, independent attempt.
const inFlightRequests = new Map();

// Caches the reduced result (not the raw per-game Steam responses, which
// already have their own TTLs) so a Profile page reload/refresh within
// PROFILE_STATS_TTL_MS costs zero additional Steam calls.
export async function getProfileStatsCached(steamId, ownedGames, fetchSummary) {

    const cacheKey = `profile-stats:${steamId}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    const existing = inFlightRequests.get(steamId);

    if (existing) {

        return existing;

    }

    const request = computeProfileStats(steamId, ownedGames, fetchSummary)

        .then(stats => {

            setCached(cacheKey, stats, PROFILE_STATS_TTL_MS);

            return stats;

        })

        .finally(() => {

            inFlightRequests.delete(steamId);

        });

    inFlightRequests.set(steamId, request);

    return request;

}
