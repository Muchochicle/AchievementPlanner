import { createSearch } from "../components/search/search.js";
import { getGamesIndex, getGame } from "../utils/gameService.js";
import { createGameCard } from "../components/game-card/game-card.js";

async function init() {

    try {

        const index = await getGamesIndex();

        const games = await Promise.all(

            index.map(game => getGame(game.slug))

        );

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