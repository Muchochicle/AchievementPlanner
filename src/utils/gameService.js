import { ENV } from "../env.js";
import { fetchWithTimeout } from "./http/fetchWithTimeout.js";

const API_URL = `${ENV.API_BASE_URL}/api/games`;

// Task 9: a very short-lived sessionStorage cache of the games index.
// GET /api/games is the heaviest call on the Games/Profile critical path
// (for a logged-in visitor it fans out one Steam schema request per owned
// game for achievement-availability), and it was re-fetched in full on
// every single navigation to a page that needs it - Games -> a game ->
// back was three identical scans.
//
// Safety (brief: "stale data cannot permanently prevent updated player
// data from appearing"):
//   - TTL is 90s. Nothing is served older than that.
//   - The cache key includes the caller's logged-in state, so logging in
//     or out (a full page navigation through Steam) always misses the
//     previous state's entry and re-fetches.
//   - sessionStorage, not localStorage: it dies with the tab, never
//     persists across a browser restart.
//   - clearGamesIndexCache() is called on explicit logout.
const INDEX_CACHE_PREFIX = "ap-games-index-v1:";
const INDEX_CACHE_TTL_MS = 90_000;

function cacheKey(loggedIn) {

    return `${INDEX_CACHE_PREFIX}${loggedIn ? "in" : "out"}`;

}

function readIndexCache(loggedIn) {

    try {

        const raw = sessionStorage.getItem(cacheKey(loggedIn));

        if (!raw) {

            return null;

        }

        const parsed = JSON.parse(raw);

        if (!parsed || typeof parsed.ts !== "number" || !Array.isArray(parsed.games)) {

            return null;

        }

        if (Date.now() - parsed.ts > INDEX_CACHE_TTL_MS) {

            return null;

        }

        return parsed.games;

    } catch {

        return null;

    }

}

function writeIndexCache(loggedIn, games) {

    try {

        sessionStorage.setItem(cacheKey(loggedIn), JSON.stringify({ ts: Date.now(), games }));

    } catch {

        // Quota/availability failure - caching is a pure optimization, so
        // a write that doesn't stick is simply a cache miss next time.

    }

}

export function clearGamesIndexCache() {

    try {

        sessionStorage.removeItem(cacheKey(true));
        sessionStorage.removeItem(cacheKey(false));

    } catch {

        // Nothing to clean up if storage isn't available.

    }

}

// `loggedIn` (optional) lets the caller key the cache to the current
// session state. Omitting it disables the cache for that call (always a
// fresh fetch) - callers that don't know the session state should not
// risk serving the wrong ownership data.
export async function getGamesIndex({ loggedIn } = {}) {

    const useCache = typeof loggedIn === "boolean";

    if (useCache) {

        const cached = readIndexCache(loggedIn);

        if (cached) {

            return cached;

        }

    }

    const response = await fetchWithTimeout(API_URL, {
        credentials: "include"
    });

    if (!response.ok) {

        throw new Error("Unable to load Steam library.");

    }

    const data = await response.json();

    // Falls back to an empty catalog rather than propagating undefined if
    // the response is ever missing/malformed - every caller (Home's stats/
    // search, Games' listing) already has a correct, tested "zero games"
    // rendering path, so this keeps a shape surprise from crashing them
    // instead of degrading gracefully.
    const games = data.games ?? [];

    if (useCache && games.length) {

        writeIndexCache(loggedIn, games);

    }

    return games;

}

// Never throws on a genuine "no reliable popularity data" outcome - the
// backend already degrades that to an empty list rather than an error, so
// callers only need to handle a real network/response failure here.
export async function getPopularGames() {

    const response = await fetchWithTimeout(`${API_URL}/popular`, {
        credentials: "include"
    });

    if (!response.ok) {

        throw new Error("Unable to load popular games.");

    }

    const data = await response.json();

    return data.games ?? [];

}

export async function getGame(slug) {

    const response = await fetchWithTimeout(`${API_URL}/${slug}`, {
        credentials: "include"
    });

    if (!response.ok) {

        const error = new Error(`Unable to load game: ${slug}`);

        error.status = response.status;

        throw error;

    }

    const data = await response.json();

    const game = data.game;

    // Matches getGamesIndex()/getPopularGames()'s own defensive handling
    // of a malformed/unexpected response shape - throws a clear, intended
    // error (still caught by game.js's existing try/catch at both call
    // sites) instead of an accidental TypeError from reading .title off
    // undefined below.
    if (!game) {

        throw new Error(`Malformed response for game: ${slug}`);

    }

    return {

        ...game,

        // Compatibility alias: existing game-page components
        // (game-header, achievement-list, etc.) expect "name" instead
        // of "title".
        name: game.title

    };

}