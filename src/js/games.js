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

import { escapeHtml } from "../utils/format/escapeHtml.js";

// Exported so its exact wording is regression-tested directly (see
// test/gamesFilterChip.test.js) without needing to drive the whole
// page-init flow (fetch + full DOM) - see PHASE_50_AUDIT.md Finding 12.
export function buildRemoveFilterLabel(filterText) {

    return `Remove ${filterText} filter`;

}

// filterText is read via .textContent from a filter checkbox's own label
// (below) - currently always curated, static catalog text (genres,
// difficulty tiers, etc.), same as genres.js's own createGenresHTML(),
// which escapes for the same "defend even though it's static today"
// reason. This was the one consumer of that same data that had been
// missed (Phase 66). Exported so the escaping is regression-tested
// directly, matching buildRemoveFilterLabel's own precedent above.
export function buildFilterChipHtml(filterText) {

    return `

        <span>

            ${escapeHtml(filterText)}

        </span>

        <button aria-label="${escapeHtml(buildRemoveFilterLabel(filterText))}">

            ×

        </button>

    `;

}

async function init() {
    loadNavbar();

    const gamesContainer =
        document.getElementById("games-container");

    gamesContainer.innerHTML =
        `<p class="state-message">Loading games…</p>`;

    try {

        const games =
            await getGamesIndex();

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

                    const filterText =
                        filter.parentElement.textContent.trim();

                    const chip =
                        document.createElement("div");

                    chip.className =
                        "filter-chip";

                    chip.innerHTML = buildFilterChipHtml(filterText);

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

        const toggle =
            document.getElementById("filters-toggle");

        const panel =
            document.getElementById("filters-panel");

        toggle.addEventListener("click", () => {

            const isOpen =
                panel.classList.toggle("open");

            toggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

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

        gamesContainer.innerHTML =
            `<p class="state-message">We couldn't load the games catalog right now. Please try again later.</p>`;

    }

}

init();