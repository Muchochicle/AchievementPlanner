import { getGamesIndex, getGame } from "../utils/gameService.js";

async function init() {

    try {

        const index = await getGamesIndex();

        console.log("Games index:", index);

        const portal2 = await getGame("portal-2");

        console.log("Portal 2:", portal2);

    } catch (error) {

        console.error(error);

    }

}

init();