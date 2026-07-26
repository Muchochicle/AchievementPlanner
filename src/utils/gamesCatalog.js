import { createCatalogCard } from "../components/catalog-card/catalog-card.js";

export function renderGames(list, container) {

    container.innerHTML = "";

    list.forEach(game => {

        container.innerHTML +=
            createCatalogCard(game);

    });

}

export function searchGames(games, text) {

    const value =
        text.trim().toLowerCase();

    if (!value) {

        return games;

    }

    return games.filter(game =>

        game.name
            .toLowerCase()
            .includes(value)

    );

}

export function sortGames(games, mode) {

    const sorted = [...games];

    switch (mode) {

        case "difficulty":

            sorted.sort((a, b) =>
                b.difficulty - a.difficulty
            );

            break;

        case "time":

            sorted.sort((a, b) =>
                a.completionTime.min -
                b.completionTime.min
            );

            break;

        default:

            sorted.sort((a, b) =>
                a.name.localeCompare(b.name)
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