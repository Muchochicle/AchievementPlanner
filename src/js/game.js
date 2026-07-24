import { getGame } from "../utils/gameService.js";
import { createGameHeader } from "../components/game-header/game-header.js";

async function init() {

    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    if (!slug) {

        console.error("No slug provided.");
        return;

    }

    const game = await getGame(slug);

    const container = document.getElementById("game-content");

    container.innerHTML = createGameHeader(game);

}

init();