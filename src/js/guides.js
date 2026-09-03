import { loadNavbar } from "./layout.js";
import { APP_GUIDE_SUMMARIES, GAME_GUIDE_SUMMARIES } from "../data/guides/manifest.js";
import { createGuideCard } from "../components/guide-card/guide-card.js";

// Reuses the same title-search predicate the Games page already ships
// (games.html's hero/catalog search - see gamesCatalog.js) rather than
// writing a second, parallel "lowercase + includes" implementation: trim,
// case-insensitive, substring match, empty query returns everything
// unchanged.
import { searchGames } from "../utils/gamesCatalog.js";

import { escapeHtml } from "../utils/format/escapeHtml.js";

// Task 9: this page now imports the lightweight guides *manifest*
// (src/data/guides/manifest.js - slug/title/summary/icon per guide, one
// small file) instead of src/data/guides/index.js, which statically pulls
// in every one of the 1000+ guide modules (~12 MB). The listing only ever
// needs each guide's card metadata, so loading the full content of every
// guide just to render a grid of cards was the single biggest reason this
// page sat visibly empty for seconds. Still a plain sync function - the
// manifest is a static import, no network, no loading state needed.
function init() {

    loadNavbar();

    document.title = "Guides | Achievement Planner";

    const appContainer = document.getElementById("app-guides-container");
    const gameContainer = document.getElementById("game-guides-container");
    const searchInput = document.getElementById("game-guides-search");

    if (!appContainer || !gameContainer) {

        return;

    }

    appContainer.innerHTML = APP_GUIDE_SUMMARIES
        .map(createGuideCard)
        .join("");

    // The catalog ships 1000+ Game Guides - dumping every card into the
    // DOM with no way to narrow them down would force scrolling through
    // hundreds of entries to find one game. searchGames() itself is cheap
    // enough (a single lowercase + includes pass) to re-run on every
    // keystroke against the full list with no debouncing needed.
    function renderGameGuides(query) {

        if (!GAME_GUIDE_SUMMARIES.length) {

            gameContainer.innerHTML =
                `<p class="state-message">Game-specific achievement guides are coming soon.</p>`;

            return;

        }

        const filtered = searchGames(GAME_GUIDE_SUMMARIES, query);

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
