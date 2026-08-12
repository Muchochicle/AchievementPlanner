import { createSearch } from "../components/search/search.js";
import { getGamesIndex } from "../utils/gameService.js";
import { createGameCard } from "../components/game-card/game-card.js";
import { loadNavbar } from "./layout.js";

async function init() {
    loadNavbar();

    try {

        const games = await getGamesIndex();

        const container = document.getElementById("games-container");

        container.innerHTML = games
            .map(game => createGameCard(game))
            .join("");

        createSearch();

    } catch (error) {

        console.error(error);

    }

}

init();