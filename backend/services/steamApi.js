import { getCached, setCached } from "../utils/cache.js";

const REQUEST_TIMEOUT_MS = 8000;

const PLAYER_SUMMARY_TTL_MS = 5 * 60 * 1000;
const OWNED_GAMES_TTL_MS = 5 * 60 * 1000;
const ACHIEVEMENT_SCHEMA_TTL_MS = 24 * 60 * 60 * 1000;
const GLOBAL_PERCENTAGES_TTL_MS = 24 * 60 * 60 * 1000;
const PLAYER_ACHIEVEMENTS_TTL_MS = 5 * 60 * 1000;
const CURRENT_PLAYERS_TTL_MS = 2 * 60 * 60 * 1000;

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

    setCached(cacheKey, data.response, OWNED_GAMES_TTL_MS);

    return data.response;

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
        // achievements" (see comment above).
        result = { achievements: [], status: "unavailable" };

    }

    setCached(cacheKey, result, ACHIEVEMENT_SCHEMA_TTL_MS);

    return result;

}

export async function getGlobalAchievementPercentages(appid) {

    const cacheKey = `global-percent:${appid}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    let achievements;

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${appid}`;

        const data = await steamFetch(url);

        achievements = data.achievementpercentages?.achievements ?? [];

    } catch (error) {

        // Steam returns an error status for games with no global achievement
        // stats at all. That's a normal case, not a real failure, so we
        // degrade to an empty list instead of propagating the error.
        achievements = [];

    }

    setCached(cacheKey, achievements, GLOBAL_PERCENTAGES_TTL_MS);

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

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`;

        const data = await steamFetch(url);

        count = data.response?.result === 1
            ? data.response.player_count
            : null;

    } catch (error) {

        count = null;

    }

    setCached(cacheKey, count, CURRENT_PLAYERS_TTL_MS);

    return count;

}

export async function getPlayerAchievements(steamId, appid) {

    const cacheKey = `player-achievements:${steamId}:${appid}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    let achievements;

    try {

        const url =
            `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&appid=${appid}`;

        const data = await steamFetch(url);

        // Steam returns { playerstats: { success: false, error: "..." } }
        // for a private profile or a game the account has no stats for.
        // That's a normal, expected case, not a real failure.
        achievements = data.playerstats?.success
            ? (data.playerstats.achievements ?? [])
            : [];

    } catch (error) {

        // Steam also returns a non-ok status for some private-profile /
        // no-stats cases. Same graceful degradation as above.
        achievements = [];

    }

    setCached(cacheKey, achievements, PLAYER_ACHIEVEMENTS_TTL_MS);

    return achievements;

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

            result = { achievements: [], status: "unavailable" };

        } else {

            // No parseable playerstats body at all - not Steam giving a
            // real answer, so this is a request failure, not a decline.
            result = { achievements: [], status: "transient" };

        }

    } catch (error) {

        // Network failure, abort/timeout, or anything else that never
        // reached a parseable response.
        result = { achievements: [], status: "transient" };

    } finally {

        clearTimeout(timeout);

    }

    setCached(cacheKey, result, PLAYER_ACHIEVEMENTS_TTL_MS);

    return result;

}
