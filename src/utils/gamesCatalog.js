import { createCatalogCard } from "../components/catalog-card/catalog-card.js";

// Task 9: how many cards to paint on the first render / per "Show more"
// click. The catalog is 1000+ games for a logged-out visitor; building
// that many card strings + DOM nodes on every keystroke was a real
// jank/first-paint cost. renderGames() windows to this many and the page
// controller (games.js) reveals more on demand.
export const GAMES_PAGE_SIZE = 60;

// Placeholder cards shown while the catalog is still loading (Task 9) -
// same grid footprint as a real catalog-card, so the page doesn't reflow
// when real data arrives, and the visitor immediately sees "content is on
// its way" rather than an empty band or a premature "No games".
export function renderGamesSkeleton(container, count = 12) {

    if (!container) {

        return;

    }

    container.innerHTML = Array.from({ length: count })
        .map(() => `
            <div class="catalog-card catalog-card--skeleton" aria-hidden="true">
                <div class="catalog-image skeleton-block"></div>
                <div class="catalog-content">
                    <div class="skeleton-line skeleton-line--title"></div>
                    <div class="skeleton-line"></div>
                    <div class="skeleton-line skeleton-line--short"></div>
                </div>
            </div>
        `)
        .join("");

}

// Windowed render: paints only the first `shown` matches (see
// GAMES_PAGE_SIZE) so a 1000+ result set doesn't build 1000 cards on every
// keystroke. The page controller (games.js) owns the "Show more" control
// and the `shown` count. Only ever called once the catalog has actually
// loaded, so an empty `list` here genuinely means "no match", never
// "still loading".
export function renderGames(list, container, options = {}) {

    const { shown = list.length } = options;

    if (!list.length) {

        container.innerHTML =
            `<p class="state-message">No games match your search or filters. Try removing a filter.</p>`;

        return;

    }

    container.innerHTML = list
        .slice(0, Math.max(0, shown))
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

        (game.title ?? "")
            .toLowerCase()
            .includes(value)

    );

}

// --- Sorting ----------------------------------------------------------
//
// Task 7: sort by any of several keys, each with an explicit asc/desc
// direction. Design:
//
//  - Each key defines value(game) -> a comparable number/string, or null
//    when this game has no value for that key (no rating, not owned, no
//    player achievement data yet, ...).
//  - Games WITH a value are sorted by direction; games WITHOUT a value
//    are always appended at the end, name-sorted, regardless of
//    direction - so "sort by hours played, ascending" never floats a pile
//    of unowned/unknown games to the top (brief: handle missing values).
//  - `naturalDirection` is the sensible default the UI selects when you
//    first pick that key (hardest-first for difficulty, most-hours-first
//    for playtime, A-Z for name, ...). Passing an explicit direction
//    overrides it; passing none keeps every existing 2-arg caller
//    (sortGames(games, "difficulty")) behaving exactly as before.
//  - player.* values come from the /api/profile/game-stats merge done in
//    games.js; they are simply absent (-> null -> sinks to the bottom)
//    until that resolves or when logged out.

const MISSING = null;

function num(value) {

    return typeof value === "number" && Number.isFinite(value) ? value : MISSING;
}

export const SORT_KEYS = {

    name: {
        label: "Name",
        naturalDirection: "asc",
        value: game => (game.title ?? "").toLowerCase(),
        compare: (a, b) => a.localeCompare(b)
    },

    playtime: {
        label: "Hours played",
        naturalDirection: "desc",
        value: game => num(game.playtime)
    },

    "achievements-completed": {
        label: "Achievements completed",
        naturalDirection: "desc",
        player: true,
        value: game => num(game.playerUnlocked)
    },

    "completion-percent": {
        label: "Completion %",
        naturalDirection: "desc",
        player: true,
        value: game => num(game.playerPercent)
    },

    "achievements-total": {
        label: "Total achievements",
        naturalDirection: "desc",
        value: game => {

            const playerTotal = num(game.playerTotal);

            if (playerTotal !== MISSING) {

                return playerTotal;

            }

            const catalogTotal = Array.isArray(game.achievements) ? game.achievements.length : 0;

            return catalogTotal > 0 ? catalogTotal : MISSING;

        }
    },

    "completion-status": {
        label: "Completed 100%",
        naturalDirection: "desc",
        player: true,
        value: game => {

            const percent = num(game.playerPercent);

            return percent === MISSING ? MISSING : (percent >= 100 ? 1 : 0);

        }
    },

    difficulty: {
        label: "Difficulty",
        naturalDirection: "desc",
        value: game => num(game.difficulty)
    },

    time: {
        label: "Completion time",
        naturalDirection: "asc",
        value: game => num(game.completionTime?.min)
    }

};

// Back-compat alias: the old select shipped "difficulty" and "time" as
// literal mode strings, and anything else meant alphabetical.
function resolveKey(key) {

    if (SORT_KEYS[key]) {

        return key;

    }

    return "name";

}

export function sortGames(games, key, direction) {

    const resolvedKey = resolveKey(key);
    const config = SORT_KEYS[resolvedKey];

    const dir = direction === "asc" || direction === "desc"
        ? direction
        : config.naturalDirection;

    const withValue = [];
    const withoutValue = [];

    for (const game of games) {

        const value = config.value(game);

        if (value === MISSING || value === undefined || (typeof value === "number" && Number.isNaN(value))) {

            withoutValue.push(game);

        } else {

            withValue.push({ game, value });

        }

    }

    const compare = config.compare ?? ((a, b) => a - b);
    const sign = dir === "desc" ? -1 : 1;

    withValue.sort((a, b) =>
        sign * compare(a.value, b.value) ||
        (a.game.title ?? "").localeCompare(b.game.title ?? "")
    );

    withoutValue.sort((a, b) => (a.title ?? "").localeCompare(b.title ?? ""));

    return [...withValue.map(entry => entry.game), ...withoutValue];

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
