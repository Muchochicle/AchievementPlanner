import { getGamesIndex, getGame } from "../utils/gameService.js";
import { createGameCard } from "../components/game-card/game-card.js";

async function init() {

    try {

        const index = await getGamesIndex();

        const container = document.getElementById("games-container");

        for (const gameInfo of index) {

            const game = await getGame(gameInfo.slug);

            container.innerHTML += createGameCard(game);

        }

    } catch (error) {

        console.error(error);

    }

}

init();