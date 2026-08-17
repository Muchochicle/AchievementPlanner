import { createSearch } from "../components/search/search.js";
import { getGamesIndex } from "../utils/gameService.js";
import { createCatalogCard } from "../components/catalog-card/catalog-card.js";
import { loadNavbar } from "./layout.js";

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

async function init() {
    loadNavbar();

    try {

        const games = await getGamesIndex();

        const container = document.getElementById("games-container");

        container.innerHTML = games
            .map(game => createCatalogCard(game))
            .join("");

        renderHeroStats(games);

        createSearch(games);

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

    } catch (error) {

        console.error(error);

    }

}

init();