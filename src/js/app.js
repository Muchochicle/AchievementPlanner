import { createSearch } from "../components/search/search.js";
import { getGamesIndex, getPopularGames } from "../utils/gameService.js";
import { createCatalogCard } from "../components/catalog-card/catalog-card.js";
import { loadNavbar } from "./layout.js";

const POPULAR_GAMES_UNAVAILABLE_MESSAGE =
    "Popularity data is temporarily unavailable.";

// The hero previously showed hardcoded marketing numbers ("420+ Games",
// "12,000+ Achievements", "9,500h Guides") that were not derived from any
// real state - achievements-per-catalog-entry isn't cheaply available and
// there is no guides feature at all. This replaces them with the two counts
// the already-fetched catalog index actually supports.
function renderHeroStats(games) {

    const gamesCount = document.getElementById("hero-stat-games");

    const plannersCount = document.getElementById("hero-stat-planners");

    if (gamesCount) {

        gamesCount.textContent = `${games.length}+`;

    }

    if (plannersCount) {

        plannersCount.textContent =
            `${games.filter(game => game.hasPlanner).length}+`;

    }

}

function showHeroStatsUnavailable() {

    const gamesCount = document.getElementById("hero-stat-games");

    const plannersCount = document.getElementById("hero-stat-planners");

    if (gamesCount) gamesCount.textContent = "—";

    if (plannersCount) plannersCount.textContent = "—";

}

function renderPopularGames(games, container) {

    if (!games || games.length === 0) {

        container.innerHTML =
            `<p class="state-message">${POPULAR_GAMES_UNAVAILABLE_MESSAGE}</p>`;

        return;

    }

    container.innerHTML = games
        .map(game => createCatalogCard(game))
        .join("");

}

function initCardNavigation(container) {

    container.addEventListener("click", event => {

        const card = event.target.closest(".catalog-card");

        if (card) {

            window.location.href =
                `game.html?slug=${card.dataset.slug}`;

        }

    });

    container.addEventListener("keydown", event => {

        if (event.key !== "Enter") return;

        const card = event.target.closest(".catalog-card");

        if (card) {

            window.location.href =
                `game.html?slug=${card.dataset.slug}`;

        }

    });

}

async function init() {
    loadNavbar();

    const container = document.getElementById("games-container");
    const catalogError = document.getElementById("catalog-error");

    container.innerHTML =
        `<p class="state-message">Loading popular games…</p>`;

    initCardNavigation(container);

    const [catalogResult, popularResult] = await Promise.allSettled([
        getGamesIndex(),
        getPopularGames()
    ]);

    if (catalogResult.status === "fulfilled") {

        renderHeroStats(catalogResult.value);
        createSearch(catalogResult.value);

    } else {

        console.error(catalogResult.reason);

        showHeroStatsUnavailable();
        catalogError.hidden = false;

    }

    if (popularResult.status === "fulfilled") {

        renderPopularGames(popularResult.value, container);

    } else {

        console.error(popularResult.reason);

        container.innerHTML =
            `<p class="state-message">${POPULAR_GAMES_UNAVAILABLE_MESSAGE}</p>`;

    }

}

init();
