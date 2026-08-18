import { createCatalogCard } from "../components/catalog-card/catalog-card.js";

export function renderGames(list, container) {

    if (!list.length) {

        container.innerHTML =
            `<p class="state-message">No games match your search or filters.</p>`;

        return;

    }

    container.innerHTML = list
        .map(game => createCatalogCard(game))
        .join("");

}

export function searchGames(games, text) {

    const value =
        text.trim().toLowerCase();

    if (!value) {

        return games;

    }

    return games.filter(game =>

        game.title
            .toLowerCase()
            .includes(value)

    );

}

export function sortGames(games, mode) {

    const sorted = [...games];

    switch (mode) {

        case "difficulty":

            sorted.sort((a, b) =>
                (b.difficulty ?? -1) -
                (a.difficulty ?? -1)
            );

            break;

        case "time":

            sorted.sort((a, b) =>
                (a.completionTime?.min ?? Number.MAX_SAFE_INTEGER) -
                (b.completionTime?.min ?? Number.MAX_SAFE_INTEGER)
            );

            break;

        default:

            sorted.sort((a, b) =>
                (a.title ?? "").localeCompare(b.title ?? "")
            );

    }

    return sorted;

}
export function updateCounter(total) {

    const counter =
        document.getElementById("games-counter");

    if (!counter) {

        return;

    }

    counter.textContent =
        `Showing ${total} game${total !== 1 ? "s" : ""}`;

}