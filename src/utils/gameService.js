const API_URL = "http://localhost:3000/api/games";
const GAMES_PATH = "src/data/games";

export async function getGamesIndex() {

    const response = await fetch(API_URL);

    if (!response.ok) {

        throw new Error("Unable to load Steam library.");

    }

    const data = await response.json();

    return data.games;

}

export async function getGame(slug) {

    const response = await fetch(`${GAMES_PATH}/${slug}.json`);

    if (!response.ok) {

        throw new Error(`Unable to load game: ${slug}`);

    }

    const game = await response.json();

    return {

        slug,

        ...game

    };

}