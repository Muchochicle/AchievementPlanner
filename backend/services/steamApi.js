import { getCached, setCached } from "../utils/cache.js";

const REQUEST_TIMEOUT_MS = 8000;

const PLAYER_SUMMARY_TTL_MS = 5 * 60 * 1000;
const OWNED_GAMES_TTL_MS = 5 * 60 * 1000;

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

    if (!data?.response || Object.keys(data.response).length === 0) {

        throw new Error(
            "Steam API returned an empty response (private profile or invalid request)"
        );

    }

    return data.response;

}

export async function getPlayerSummary(steamId) {

    const cacheKey = `player-summary:${steamId}`;

    const cached = getCached(cacheKey);

    if (cached) {

        return cached;

    }

    const url =

        `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${process.env.STEAM_API_KEY}&steamids=${steamId}`;

    const response = await steamFetch(url);

    const player = response.players?.[0];

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

    const response = await steamFetch(url);

    setCached(cacheKey, response, OWNED_GAMES_TTL_MS);

    return response;

}
