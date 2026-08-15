import { getCached, setCached } from "../utils/cache.js";

const REQUEST_TIMEOUT_MS = 8000;

const PLAYER_SUMMARY_TTL_MS = 5 * 60 * 1000;
const OWNED_GAMES_TTL_MS = 5 * 60 * 1000;
const ACHIEVEMENT_SCHEMA_TTL_MS = 24 * 60 * 60 * 1000;
const GLOBAL_PERCENTAGES_TTL_MS = 24 * 60 * 60 * 1000;
const PLAYER_ACHIEVEMENTS_TTL_MS = 5 * 60 * 1000;

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

export async function getSchemaForGame(appid) {

    const cacheKey = `schema:${appid}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    const url =
        `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${process.env.STEAM_API_KEY}&appid=${appid}`;

    const data = await steamFetch(url);

    const achievements = data.game?.availableGameStats?.achievements ?? [];

    setCached(cacheKey, achievements, ACHIEVEMENT_SCHEMA_TTL_MS);

    return achievements;

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
