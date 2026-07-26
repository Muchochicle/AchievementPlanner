import { getGamesIndex, getGame } from "../utils/gameService.js";

import { createGamesFilters } from "../components/games-filters/games-filters.js";

import {

    renderGames,
    searchGames,
    sortGames,
    updateCounter

} from "../utils/gamesCatalog.js";

async function init() {

    try {

        const container =
            document.getElementById("games-container");

        container.innerHTML =

            `
                ${createGamesFilters()}

                <div id="games-list"></div>
            `;

        const gamesList =
            document.getElementById("games-list");

        const index =
            await getGamesIndex();

        const games = [];

        for (const item of index) {

            games.push(
                await getGame(item.slug)
            );

        }

        const input =
            document.querySelector(".games-search");

        const sort =
            document.querySelector(".games-sort");

        function refresh() {

            let currentGames = searchGames(
                games,
                input.value
            );

            currentGames = sortGames(
                currentGames,
                sort.value
            );

            renderGames(
                currentGames,
                gamesList
            );

            updateCounter(
                currentGames.length
            );

        }

        refresh();

        input.addEventListener(
            "input",
            refresh
        );

        sort.addEventListener(
            "change",
            refresh
        );

        gamesList.addEventListener("click", event => {

            const button =
                event.target.closest(".planner-btn");

            if (!button) {

                return;

            }

            window.location.href =
                `game.html?slug=${button.dataset.slug}`;

        });

    }

    catch (error) {

        console.error(error);

    }

}

init();