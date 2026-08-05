import { getGamesIndex, getGame } from "../utils/gameService.js";

import { createGamesFilters } from "../components/games-filters/games-filters.js";
import { createCatalogFilters } from "../components/catalog-filters/catalog-filters.js";
import { createActiveFilters } from "../components/active-filters/active-filters.js";
import { loadNavbar } from "./layout.js";
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
    loadNavbar();

    try {

        const gamesContainer =
            document.getElementById("games-container");

        const index =
            await getGamesIndex();

        const games = index;

        const genres =
            getGenres(games);

        gamesContainer.innerHTML =

            createGamesFilters() +

            createCatalogFilters(

                createGenresHTML(genres)

            ) +

            createActiveFilters() +

            `<div id="games-list"></div>`;

        const gamesList =
            document.getElementById("games-list");

        const input =
            document.querySelector(".games-search");

        const sort =
            document.querySelector(".games-sort");

        const clearButton =
            document.getElementById("clear-filters");

        function renderFilterChips() {

            const container =
                document.getElementById("active-filters");

            container.innerHTML = "";

            clearButton.style.display = "none";

            document
                .querySelectorAll(".filters-panel input:checked")
                .forEach(filter => {

                    const chip =
                        document.createElement("div");

                    chip.className =
                        "filter-chip";

                    chip.innerHTML = `

                        <span>

                            ${filter.parentElement.textContent.trim()}

                        </span>

                        <button>

                            ×

                        </button>

                    `;

                    chip
                        .querySelector("button")
                        .addEventListener("click", () => {

                            filter.checked = false;

                            refresh();

                        });

                    container.appendChild(chip);

                });

            if (container.children.length > 0) {

                clearButton.style.display = "block";

            }

        }

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

            renderFilterChips();

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

        const button =
            event.target.closest(".planner-btn");

        if (button) {

            window.location.href =
                `game.html?slug=${button.dataset.slug}`;

            return;

        }

        const card =
            event.target.closest(".catalog-card");

        if (card) {

            window.location.href =
                `game.html?slug=${card.dataset.slug}`;

        }

    }
);

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Enter"
        ) {

            return;

        }

        const card =
            event.target.closest(".catalog-card");

        if (!card) {

            return;

        }

        window.location.href =
            `game.html?slug=${card.dataset.slug}`;

    }
);

        const toggle =
            document.getElementById("filters-toggle");

        const panel =
            document.getElementById("filters-panel");

        toggle.addEventListener("click", () => {

            panel.classList.toggle("open");

        });

        clearButton.addEventListener("click", () => {

            document
                .querySelectorAll(".filters-panel input")
                .forEach(input => {

                    input.checked = false;

                });

            refresh();

        });

    }

    catch (error) {

        console.error(error);

    }

}

init();