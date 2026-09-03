import { loadNavbar } from "./layout.js";
import { APP_GUIDES, GAME_GUIDES } from "../data/guides/index.js";
import { createGuideCard } from "../components/guide-card/guide-card.js";

// Reuses the same title-search predicate the Games page already ships
// (games.html's hero/catalog search - see gamesCatalog.js) rather than
// writing a second, parallel "lowercase + includes" implementation: trim,
// case-insensitive, substring match, empty query returns everything
// unchanged.
import { searchGames } from "../utils/gamesCatalog.js";

import { escapeHtml } from "../utils/format/escapeHtml.js";

// Guide content is static, locally-imported data (see src/data/guides/) -
// no network fetch, no loading/error state needed, unlike every other
// page's async init(). Kept as a plain sync function for that reason.
function init() {

    loadNavbar();

    document.title = "Guides | Achievement Planner";

    const appContainer = document.getElementById("app-guides-container");
    const gameContainer = document.getElementById("game-guides-container");
    const searchInput = document.getElementById("game-guides-search");

    if (!appContainer || !gameContainer) {

        return;

    }

    appContainer.innerHTML = APP_GUIDES
        .map(createGuideCard)
        .join("");

    // The catalog now ships 1000+ Game Guides (see src/data/guides/index.js)
    // - dumping every card into the DOM with no way to narrow them down
    // would force scrolling through hundreds of entries to find one game.
    // searchGames() itself is cheap enough (a single lowercase + includes
    // pass) to re-run on every keystroke against the full list with no
    // debouncing needed.
    function renderGameGuides(query) {

        if (!GAME_GUIDES.length) {

            // Phase 36's original empty-catalog state - kept as a fallback
            // for the (now hypothetical) case of shipping with zero Game
            // Guides at all, distinct from "some exist, none match query".
            gameContainer.innerHTML =
                `<p class="state-message">Game-specific achievement guides are coming soon.</p>`;

            return;

        }

        const filtered = searchGames(GAME_GUIDES, query);

        if (!filtered.length) {

            const trimmed = query.trim();

            gameContainer.innerHTML = trimmed
                ? `<p class="state-message">No game guides match "${escapeHtml(trimmed)}". Try a different or shorter title.</p>`
                : `<p class="state-message">No game guides found.</p>`;

            return;

        }

        gameContainer.innerHTML = filtered
            .map(createGuideCard)
            .join("");

    }

    renderGameGuides("");

    searchInput?.addEventListener("input", event => {

        renderGameGuides(event.target.value);

    });

}

init();
