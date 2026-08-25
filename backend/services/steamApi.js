import { getCached, setCached } from "../utils/cache.js";

const REQUEST_TIMEOUT_MS = 8000;

const PLAYER_SUMMARY_TTL_MS = 5 * 60 * 1000;
const OWNED_GAMES_TTL_MS = 5 * 60 * 1000;
const ACHIEVEMENT_SCHEMA_TTL_MS = 24 * 60 * 60 * 1000;
const GLOBAL_PERCENTAGES_TTL_MS = 24 * 60 * 60 * 1000;
const PLAYER_ACHIEVEMENTS_TTL_MS = 5 * 60 * 1000;
const CURRENT_PLAYERS_TTL_MS = 2 * 60 * 60 * 1000;

// A genuine request failure (timeout, rate-limit, network blip, Steam 5xx)
// is not the same fact as a real, confirmed answer from Steam, and must not
// be trusted for as long as one - see PHASE_47_AUDIT.md Finding 6. Short
// enough that a transient blip self-heals well within one of game.js's 60s
// poll cycles instead of persisting for hours, long enough to still absorb
// a burst of concurrent requests for the same key while Steam is genuinely
// down. Applied only to results that represent "we don't actually know"
// (getSchemaForGame's "unavailable", getPlayerAchievementsClassified's
// "transient", a thrown getCurrentPlayerCount request) - never to a real,
// confirmed Steam answer (e.g. a private profile's playerstats.success:false),
// which keeps its normal full TTL below.
const TRANSIENT_FAILURE_TTL_MS = 30 * 1000;

async function steamFetch(url) {

    const controller = new AbortController();

    const timeout = setTimeout(
        () => controller.abort(),
        REQUEST_TIMEOUT_MS
    );

    let response;

    try {

        response = await fetch(url, { signal: controller.signal });

    } catch (error) {

        if (error.name === "AbortError") {

            throw new Error("Steam API request timed out");

        }

        throw new Error(`Steam API request failed: ${error.message}`);

    } finally {

        clearTimeout(timeout);

    }

    if (!response.ok) {

        throw new Error(
            `Steam API responded with status ${response.status}`
        );

    }

    const data = await response.json();

    if (!data) {

        throw new Error("Steam API returned an empty response");

    }

    return data;

}

export async function getPlayerSummary(steamId) {

    const cacheKey = `player-summary:${steamId}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    const url =

        `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`;

    const data = await steamFetch(url);

    if (!data.response || Object.keys(data.response).length === 0) {

        throw new Error(
            "Steam API returned an empty response (private profile or invalid request)"
        );

    }

    const player = data.response.players?.[0];

    if (!player) {

        throw new Error(
            `Steam API returned no player data for steamId ${steamId}`
        );

    }

    setCached(cacheKey, player, PLAYER_SUMMARY_TTL_MS);

    return player;

}
export async function getOwnedGames(steamId) {

    const cacheKey = `owned-games:${steamId}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    const url =
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`;

    const data = await steamFetch(url);

    if (!data.response || Object.keys(data.response).length === 0) {

        throw new Error(
            "Steam API returned an empty response (private profile or invalid request)"
        );

    }

    // Steam omits the `games` key entirely - rather than returning an empty
    // array - when a public profile genuinely owns zero games (confirmed
    // real response shape: {"response":{"game_count":0}}, no `games` key).
    // Every consumer of this result already expects a real array (see
    // routes/games.js, gameDetail.js, profileStatsController.js), so that
    // case is normalized here once rather than leaving `games` undefined
    // for every caller to guard against separately - see
    // PHASE_47_AUDIT.md Finding 5.
    const result = {
        ...data.response,
        games: data.response.games ?? []
    };

    setCached(cacheKey, result, OWNED_GAMES_TTL_MS);

    return result;

}

// Returns { achievements, status } rather than a bare array - confirmed
// live against the real Steam API that these are two genuinely different
// response shapes that must not collapse into the same []:
//   - A game with zero real achievements answers with HTTP 200 and
//     data.game = {} (no availableGameStats key at all) - a real, trustworthy
//     "this game has no achievements" answer (status: "available", []).
//   - A failed/invalid request (bad appid, Steam unreachable, rate-limited,
//     timeout) throws inside steamFetch - we genuinely don't know this
//     game's achievement schema (status: "unavailable", []).
// Callers that only care about the achievement list (not why it might be
// empty) can keep reading `.achievements`; callers that need to render one
// of the 3 achievement-availability states (see
// src/utils/planner/achievement/availability.js) need `.status` too.
export async function getSchemaForGame(appid) {

    const cacheKey = `schema:${appid}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    let result;
    let ttl = ACHIEVEMENT_SCHEMA_TTL_MS;

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${process.env.STEAM_API_KEY}&appid=${appid}`;

        const data = await steamFetch(url);

        result = {
            achievements: data.game?.availableGameStats?.achievements ?? [],
            status: "available"
        };

    } catch (error) {

        // Steam being unreachable, rate-limited, or erroring on this appid
        // shouldn't take down the whole game page - the local planner data
        // doesn't depend on Steam at all. Same graceful degradation as
        // getGlobalAchievementPercentages below, but this case is reported
        // as "unavailable" rather than silently treated as "confirmed zero
        // achievements" (see comment above). "unavailable" here always
        // means "we don't actually know" (never a real, confirmed Steam
        // answer), so it's cached with the short failure TTL, not the full
        // 24h success TTL - see PHASE_47_AUDIT.md Finding 6.
        result = { achievements: [], status: "unavailable" };
        ttl = TRANSIENT_FAILURE_TTL_MS;

    }

    setCached(cacheKey, result, ttl);

    return result;

}

export async function getGlobalAchievementPercentages(appid) {

    const cacheKey = `global-percent:${appid}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    let achievements;
    let ttl = GLOBAL_PERCENTAGES_TTL_MS;

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${appid}`;

        const data = await steamFetch(url);

        achievements = data.achievementpercentages?.achievements ?? [];

    } catch (error) {

        // Steam returns an error status for games with no global achievement
        // stats at all, and that's degraded to an empty list rather than
        // propagating the error - but steamFetch throws the exact same
        // generic Error for that case as it does for a real request failure
        // (timeout, rate-limit, Steam 5xx), so this catch can't actually
        // tell "confirmed no stats" apart from "we don't know right now".
        // Every sibling function in this file (getSchemaForGame,
        // getCurrentPlayerCount, getPlayerAchievementsClassified) already
        // treats that same ambiguity conservatively - cache briefly, not
        // for the full success TTL - this one was the one gap left
        // (Phase 67; see PHASE_47_AUDIT.md Finding 6 for the original
        // rationale).
        achievements = [];
        ttl = TRANSIENT_FAILURE_TTL_MS;

    }

    setCached(cacheKey, achievements, ttl);

    return achievements;

}

// Official, documented, unauthenticated Steam endpoint - used to rank our
// own catalog's games by real, live Steam popularity (see
// backend/utils/popularGames.js). Never fabricated: a failure here just
// drops that game out of the ranking, same graceful-degradation approach
// as the other calls in this file.
export async function getCurrentPlayerCount(appid) {

    const cacheKey = `current-players:${appid}`;

    const cached = getCached(cacheKey);

    if (cached !== undefined) {

        return cached;

    }

    let count;
    let ttl = CURRENT_PLAYERS_TTL_MS;

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`;

        const data = await steamFetch(url);

        // result !== 1 here is Steam's own real, confirmed answer for this
        // appid (not a request failure) - keeps the normal full TTL, same
        // as before. `?? null` guards against a (never documented as
        // possible, but not guaranteed absent) result:1 response missing
        // player_count - the cache-hit check above is `cached !== undefined`,
        // so a stored `undefined` would silently defeat this function's own
        // cache on every future call for this appid (Phase 67).
        count = data.response?.result === 1
            ? data.response.player_count ?? null
            : null;

    } catch (error) {

        // An actual request failure (timeout, network error, non-ok
        // status) - genuinely don't know the count right now, so cache
        // that briefly rather than for the full 2h success TTL - see
        // PHASE_47_AUDIT.md Finding 6.
        count = null;
        ttl = TRANSIENT_FAILURE_TTL_MS;

    }

    setCached(cacheKey, count, ttl);

    return count;

}

// Classifies Steam's response instead of collapsing every "no data"
// outcome into an empty list - callers (the Profile aggregate, and the
// single-game route) need to tell Steam's own "no data for this game"
// answer (private profile / no stats) apart from a genuine request
// failure, since silently treating a network hiccup as "Steam has no
// data" would misreport across an entire library scan.
export async function getPlayerAchievementsClassified(steamId, appid) {

    const cacheKey = `player-achievements-classified:${steamId}:${appid}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    let result;
    let ttl = PLAYER_ACHIEVEMENTS_TTL_MS;

    const controller = new AbortController();

    const timeout = setTimeout(
        () => controller.abort(),
        REQUEST_TIMEOUT_MS
    );

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&appid=${appid}`;

        const response = await fetch(url, { signal: controller.signal });

        // Unlike steamFetch, a non-ok status is NOT treated as a hard
        // failure here - Steam answers "profile/game data is not public"
        // with a real, parseable playerstats.success:false body on a 403,
        // and that answer is exactly what this function exists to surface
        // as "unavailable" rather than "transient".
        const data = await response.json().catch(() => null);

        if (data?.playerstats?.success) {

            result = { achievements: data.playerstats.achievements ?? [], status: "available" };

        } else if (data?.playerstats && data.playerstats.success === false) {

            // A real, confirmed decline from Steam (private profile/game) -
            // keeps the normal full TTL, same as "available", since it's
            // not a request failure.
            result = { achievements: [], status: "unavailable" };

        } else {

            // No parseable playerstats body at all - not Steam giving a
            // real answer, so this is a request failure, not a decline.
            // Cached briefly rather than for the full 5min success TTL -
            // see PHASE_47_AUDIT.md Finding 6.
            result = { achievements: [], status: "transient" };
            ttl = TRANSIENT_FAILURE_TTL_MS;

        }

    } catch (error) {

        // Network failure, abort/timeout, or anything else that never
        // reached a parseable response.
        result = { achievements: [], status: "transient" };
        ttl = TRANSIENT_FAILURE_TTL_MS;

    } finally {

        clearTimeout(timeout);

    }

    setCached(cacheKey, result, ttl);

    return result;

}
