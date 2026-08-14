import { createSearch } from "../components/search/search.js";
import { getGamesIndex } from "../utils/gameService.js";
import { createCatalogCard } from "../components/catalog-card/catalog-card.js";
import { loadNavbar } from "./layout.js";

async function init() {
    loadNavbar();

    try {

        const games = await getGamesIndex();

        const container = document.getElementById("games-container");

        container.innerHTML = games
            .map(game => createCatalogCard(game))
            .join("");

        createSearch();

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