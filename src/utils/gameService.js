const API_URL = "http://localhost:3000/api/games";

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

export async function getGame(slug) {

    const response = await fetch(`${API_URL}/${slug}`, {
        credentials: "include"
    });

    if (!response.ok) {

        throw new Error(`Unable to load game: ${slug}`);

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