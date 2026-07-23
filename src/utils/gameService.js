const INDEX_PATH = "src/data/games.json";
const GAMES_PATH = "src/data/games";

export async function getGamesIndex() {

    const response = await fetch(INDEX_PATH);

    if (!response.ok) {
        throw new Error("Unable to load games index.");
    }

    return await response.json();

}

export async function getGame(slug) {

    const response = await fetch(`${GAMES_PATH}/${slug}.json`);

    if (!response.ok) {
        throw new Error(`Unable to load game: ${slug}`);
    }

    return await response.json();

}