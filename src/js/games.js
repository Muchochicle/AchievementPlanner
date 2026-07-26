import { getGamesIndex, getGame } from "../utils/gameService.js";

import { createGamesFilters } from "../components/games-filters/games-filters.js";
import { createCatalogFilters } from "../components/catalog-filters/catalog-filters.js";

import {
    renderGames,
    searchGames,
    sortGames,
    updateCounter
} from "../utils/gamesCatalog.js";

import { filterGames } from "../utils/catalog/filters.js";

import {
    getGenres,
    createGenresHTML
} from "../utils/catalog/genres.js";

import {
    updateFiltersCounter
} from "../utils/catalog/counter.js";

async function init() {

    try {

        const gamesContainer =
            document.getElementById("games-container");

        const index =
            await getGamesIndex();

        const games = [];

        for (const item of index) {

            games.push(
                await getGame(item.slug)
            );

        }

        const genres =
            getGenres(games);

        gamesContainer.innerHTML =

            createGamesFilters() +

            createCatalogFilters(

                createGenresHTML(genres)

            ) +

            `<div id="games-list"></div>`;

        const gamesList =
            document.getElementById("games-list");

        const input =
            document.querySelector(".games-search");

        const sort =
            document.querySelector(".games-sort");

        function refresh() {

            let currentGames =
                searchGames(
                    games,
                    input.value
                );

            currentGames =
                filterGames(
                    currentGames
                );

            currentGames =
                sortGames(
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

            updateFiltersCounter();

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

        document
            .querySelectorAll(".filters-panel input")
            .forEach(input => {

                input.addEventListener(
                    "change",
                    refresh
                );

            });

        document.addEventListener(
            "click",
            event => {

                if (
                    event.target.classList.contains(
                        "planner-btn"
                    )
                ) {

                    window.location.href =
                        `game.html?slug=${event.target.dataset.slug}`;

                }

            }
        );

        const toggle =
            document.getElementById("filters-toggle");

        const panel =
            document.getElementById("filters-panel");

        toggle.addEventListener("click", () => {

            panel.classList.toggle("open");

        });

    }

    catch (error) {

        console.error(error);

    }

}

init();