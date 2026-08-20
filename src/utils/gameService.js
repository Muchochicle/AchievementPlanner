import { ENV } from "../env.js";

const API_URL = `${ENV.API_BASE_URL}/api/games`;

export async function getGamesIndex() {

    const response = await fetch(API_URL, {
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
    return data.games ?? [];

}

// Never throws on a genuine "no reliable popularity data" outcome - the
// backend already degrades that to an empty list rather than an error, so
// callers only need to handle a real network/response failure here.
export async function getPopularGames() {

    const response = await fetch(`${API_URL}/popular`, {
        credentials: "include"
    });

    if (!response.ok) {

        throw new Error("Unable to load popular games.");

    }

    const data = await response.json();

    return data.games ?? [];

}

export async function getGame(slug) {

    const response = await fetch(`${API_URL}/${slug}`, {
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