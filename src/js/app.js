import { createSearch } from "../components/search/search.js";
import { getGamesIndex, getPopularGames } from "../utils/gameService.js";
import { createCatalogCard } from "../components/catalog-card/catalog-card.js";
import { loadNavbar } from "./layout.js";

export const POPULAR_GAMES_UNAVAILABLE_MESSAGE =
    "Popularity data is temporarily unavailable.";

// The hero previously showed hardcoded marketing numbers ("420+ Games",
// "12,000+ Achievements", "9,500h Guides") that were not derived from any
// real state - achievements-per-catalog-entry isn't cheaply available and
// there is no guides feature at all. This replaces them with the two counts
// the already-fetched catalog index actually supports.
//
// Exported (along with showHeroStatsUnavailable/renderPopularGames below)
// purely so these are directly unit-testable - matching every other page/
// component module in this app, which already exports its render logic
// for the same reason. No behavior change: init() below still calls these
// the same way it always did.

// The "Games" stat previously showed games.length - literally "how many
// entries did /api/games return for THIS visitor," which is this
// visitor's own owned-Steam-library size (once logged in) merged with the
// curated catalog, not a stable "how big is this app's supported game
// universe" figure. A big-library visitor saw a huge, session-specific
// number; a logged-out visitor saw only the curated catalog's own small
// count, making the homepage read as sparse/incomplete before anyone
// logged in. Achievement tracking here works for *any* owned Steam game -
// a curated planner (see "Planners Available" below) is a bonus on top of
// that, never a requirement (gameDetail.js) - so the honest answer to
// "how many games can this app be used with" is "every game on Steam."
// This is a static, rounded, clearly-approximate figure (Steam's own
// catalog has hovered in the 100,000-150,000+ range in recent years;
// there's no simple public API for an exact live count), deliberately not
// tied to any one visitor's session, so it reads identically whether
// logged in or out.
export const APPROXIMATE_STEAM_CATALOG_SIZE = "100,000+";

export function renderHeroStats(games) {

    const gamesCount = document.getElementById("hero-stat-games");

    const plannersCount = document.getElementById("hero-stat-planners");

    if (gamesCount) {

        gamesCount.textContent = APPROXIMATE_STEAM_CATALOG_SIZE;

    }

    // Unlike the "Games" stat above, this one *is* a real, meaningful,
    // session-independent count: this app's own curated planner content,
    // the same for every visitor regardless of login state or library size.
    if (plannersCount) {

        plannersCount.textContent =
            `${games.filter(game => game.hasPlanner).length}+`;

    }

}

export function showHeroStatsUnavailable() {

    const gamesCount = document.getElementById("hero-stat-games");

    const plannersCount = document.getElementById("hero-stat-planners");

    if (gamesCount) gamesCount.textContent = "—";

    if (plannersCount) plannersCount.textContent = "—";

}

export function renderPopularGames(games, container) {

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

        // Isolated from the popular-games branch below: unlike every other
        // page-controller in this app (game.js/games.js's own post-render
        // try/catch, podiums.js's per-category isolation), init() here had
        // no safety net at all around its post-fetch render calls - a
        // throw in either branch would leave the whole page in whatever
        // partial state it happened to be in, with nothing shown to the
        // user and no console signal beyond an unhandled promise
        // rejection. Each branch gets its own try/catch so a failure in
        // one never affects the other (Phase 69).
        try {

            renderHeroStats(catalogResult.value);
            createSearch(catalogResult.value);

        } catch (error) {

            console.error(error);

            showHeroStatsUnavailable();
            catalogError.hidden = false;

            const searchInput = document.querySelector(".hero input");

            if (searchInput) {

                searchInput.disabled = true;

            }

        }

    } else {

        console.error(catalogResult.reason);

        showHeroStatsUnavailable();
        catalogError.hidden = false;

        // createSearch() (which attaches the input's only "input" listener)
        // is never called on this path - without this, the search box
        // would stay visually enabled but silently do nothing when typed
        // into, with no indication anything is wrong. Disabling it makes
        // its state honestly match reality, consistent with the visible
        // catalogError message right below it.
        const searchInput = document.querySelector(".hero input");

        if (searchInput) {

            searchInput.disabled = true;

        }

    }

    if (popularResult.status === "fulfilled") {

        try {

            renderPopularGames(popularResult.value, container);

        } catch (error) {

            console.error(error);

            container.innerHTML =
                `<p class="state-message">${POPULAR_GAMES_UNAVAILABLE_MESSAGE}</p>`;

        }

    } else {

        console.error(popularResult.reason);

        container.innerHTML =
            `<p class="state-message">${POPULAR_GAMES_UNAVAILABLE_MESSAGE}</p>`;

    }

}

init();
