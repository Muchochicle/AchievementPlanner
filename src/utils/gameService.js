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

    return data.games;

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

    return data.games;

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

    return {

        ...game,

        // Alias de compatibilidad: los componentes existentes de la
        // página de juego (game-header, achievement-list, etc.)
        // esperan "name" en vez de "title".
        name: game.title

    };

}