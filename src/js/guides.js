import { loadNavbar } from "./layout.js";
import { APP_GUIDES, GAME_GUIDES } from "../data/guides/index.js";
import { createGuideCard } from "../components/guide-card/guide-card.js";

// Guide content is static, locally-imported data (see src/data/guides/) -
// no network fetch, no loading/error state needed, unlike every other
// page's async init(). Kept as a plain sync function for that reason.
function init() {

    loadNavbar();

    document.title = "Guides | Achievement Planner";

    const appContainer = document.getElementById("app-guides-container");
    const gameContainer = document.getElementById("game-guides-container");

    if (!appContainer || !gameContainer) {

        return;

    }

    appContainer.innerHTML = APP_GUIDES
        .map(createGuideCard)
        .join("");

    // Phase 36 ships zero real Game Guides yet (see
    // src/data/guides/index.js) - an honest empty state here, matching
    // the rest of this app's "state-message" convention, rather than an
    // empty grid with no explanation.
    gameContainer.innerHTML = GAME_GUIDES.length
        ? GAME_GUIDES.map(createGuideCard).join("")
        : `<p class="state-message">Game-specific achievement guides are coming soon.</p>`;

}

init();
