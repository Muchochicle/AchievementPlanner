import { getGamesIndex } from "../utils/gameService.js";

import { createGamesFilters } from "../components/games-filters/games-filters.js";
import { createCatalogFilters } from "../components/catalog-filters/catalog-filters.js";
import { createActiveFilters } from "../components/active-filters/active-filters.js";
import { loadNavbar } from "./layout.js";
import {
    renderGames,
    renderGamesSkeleton,
    searchGames,
    sortGames,
    updateCounter,
    SORT_KEYS,
    GAMES_PAGE_SIZE
} from "../utils/gamesCatalog.js";

import { filterGames } from "../utils/catalog/filters.js";

import {
    getGenres,
    createGenresHTML
} from "../utils/catalog/genres.js";

import {
    updateFiltersCounter
} from "../utils/catalog/counter.js";

import { escapeHtml } from "../utils/format/escapeHtml.js";

import { fetchProfileGameStats } from "../utils/player/statistics/profileGameStatsClient.js";

// Exported so its exact wording is regression-tested directly (see
// test/gamesFilterChip.test.js) without needing to drive the whole
// page-init flow (fetch + full DOM) - see PHASE_50_AUDIT.md Finding 12.
export function buildRemoveFilterLabel(filterText) {

    return `Remove ${filterText} filter`;

}

// filterText is read via .textContent from a filter checkbox's own label
// (below) - currently always curated, static catalog text (genres,
// difficulty tiers, etc.), same as genres.js's own createGenresHTML(),
// which escapes for the same "defend even though it's static today"
// reason. This was the one consumer of that same data that had been
// missed (Phase 66). Exported so the escaping is regression-tested
// directly, matching buildRemoveFilterLabel's own precedent above.
export function buildFilterChipHtml(filterText) {

    return `

        <span>

            ${escapeHtml(filterText)}

        </span>

        <button aria-label="${escapeHtml(buildRemoveFilterLabel(filterText))}">

            ×

        </button>

    `;

}

// Direction-toggle label per sort key: names read A-Z / Z-A, numeric keys
// read Low->High / High->Low. Purely cosmetic - the actual ordering is
// sortGames(key, direction).
function directionText(sortKey, direction) {

    if (sortKey === "name") {

        return direction === "desc" ? "Z–A" : "A–Z";

    }

    return direction === "desc" ? "High → Low" : "Low → High";

}

async function init() {

    // Not awaited yet - the navbar's own session check runs in parallel
    // with the catalog fetch below. Its resolved value is reused (never a
    // second /api/me) to decide whether to load player-specific per-game
    // stats.
    const sessionPromise = loadNavbar();

    const gamesContainer = document.getElementById("games-container");

    if (!gamesContainer) {

        return;

    }

    // Task 9: a real "loading" state - skeleton cards in the grid, plus an
    // aria-busy live region - so a visitor immediately sees that content
    // is on its way, never an empty band and never a premature
    // "No games found".
    gamesContainer.innerHTML = `
        <p class="state-message" id="games-loading-msg" role="status">Loading games…</p>
        <div id="games-list" aria-busy="true"></div>
    `;

    const skeletonList = document.getElementById("games-list");

    if (skeletonList) {

        renderGamesSkeleton(skeletonList);

    }

    let games;

    try {

        const session = await sessionPromise;

        games = await getGamesIndex({ loggedIn: Boolean(session?.logged) });

        // Loaded, but genuinely empty - a backend problem, not "no match"
        // (a logged-out visitor always gets the full curated catalog).
        // Distinct message so it never reads as an empty search result.
        if (!games.length) {

            gamesContainer.innerHTML =
                `<p class="state-message">No games are available right now. Please try again in a moment.</p>`;

            return;

        }

        const genres = getGenres(games);

        gamesContainer.innerHTML =
            createGamesFilters() +
            createCatalogFilters(createGenresHTML(genres)) +
            createActiveFilters() +
            `<div id="games-list"></div>` +
            `<div id="games-show-more-row" class="games-show-more-row" hidden></div>`;

        // Everything from here on is best-effort wiring around an already-
        // rendered catalog - isolated so a bug in it can't fall through to
        // the outer catch and replace a genuinely-loaded catalog with the
        // generic error message (Phase 68).
        try {

            wireGamesPage(games, session);

        } catch (postRenderError) {

            console.error(postRenderError);

        }

    } catch (error) {

        console.error(error);

        gamesContainer.innerHTML =
            `<p class="state-message">We couldn't load the games catalog right now. Please try again later.</p>`;

    }

}

function wireGamesPage(games, session) {

    const gamesList = document.getElementById("games-list");
    const showMoreRow = document.getElementById("games-show-more-row");
    const input = document.querySelector(".games-search");
    const sortSelect = document.querySelector(".games-sort");
    const sortDirBtn = document.querySelector(".games-sort-dir");
    const clearButton = document.getElementById("clear-filters");
    const toggle = document.getElementById("filters-toggle");
    const panel = document.getElementById("filters-panel");

    const view = {
        sortKey: sortSelect.value || "name",
        sortDir: SORT_KEYS[sortSelect.value]?.naturalDirection ?? "asc",
        shown: GAMES_PAGE_SIZE,
        matches: []
    };

    // --- player-specific controls: disabled until we actually have the
    //     data behind them (logged out, or the window before
    //     /api/profile/game-stats resolves). -------------------------------
    const playerSortOptions = [...sortSelect.querySelectorAll('option[data-player-sort="true"]')];
    const playerFilterInputs = [
        ...document.querySelectorAll('[data-player-filter="true"] input')
    ];
    const playerNotes = [...document.querySelectorAll(".filter-group-note")];

    function setPlayerControls(enabled, noteText) {

        for (const option of playerSortOptions) {

            option.disabled = !enabled;

        }

        for (const el of playerFilterInputs) {

            el.disabled = !enabled;

            if (!enabled) {

                el.checked = false;

            }

        }

        for (const note of playerNotes) {

            note.hidden = enabled;

            if (noteText) {

                note.textContent = noteText;

            }

        }

    }

    setPlayerControls(
        false,
        session?.logged
            ? "Loading your Steam data…"
            : "Log in with Steam to sort and filter by your own progress."
    );

    // --- render -------------------------------------------------------------
    function renderList() {

        renderGames(view.matches, gamesList, { shown: view.shown });

        updateCounter(view.matches.length);

        const remaining = Math.max(0, view.matches.length - view.shown);

        if (remaining > 0) {

            showMoreRow.hidden = false;
            showMoreRow.innerHTML = `
                <button type="button" id="games-show-more" class="games-show-more">
                    Show more (${remaining.toLocaleString("en-US")} more)
                </button>
            `;

            showMoreRow.querySelector("#games-show-more").addEventListener("click", () => {

                view.shown += GAMES_PAGE_SIZE;
                renderList();

            });

        } else {

            showMoreRow.hidden = true;
            showMoreRow.innerHTML = "";

        }

    }

    function refresh() {

        // Any search/sort/filter change starts the result set back at
        // page one.
        view.shown = GAMES_PAGE_SIZE;

        let current = searchGames(games, input.value);
        current = filterGames(current);
        current = sortGames(current, view.sortKey, view.sortDir);

        view.matches = current;

        renderList();
        updateFiltersCounter();
        renderFilterChips();

    }

    function renderFilterChips() {

        const container = document.getElementById("active-filters");

        container.innerHTML = "";
        clearButton.style.display = "none";

        document
            .querySelectorAll(".filters-panel input:checked")
            .forEach(filter => {

                const label = filter.closest("label");
                const filterText = (label?.textContent ?? "").trim();

                const chip = document.createElement("div");
                chip.className = "filter-chip";
                chip.innerHTML = buildFilterChipHtml(filterText);

                chip.querySelector("button").addEventListener("click", () => {

                    filter.checked = false;
                    refresh();

                });

                container.appendChild(chip);

            });

        if (container.children.length > 0) {

            clearButton.style.display = "block";

        }

    }

    // --- direction toggle -------------------------------------------------
    function syncDirButton() {

        sortDirBtn.dataset.direction = view.sortDir;
        sortDirBtn.setAttribute(
            "aria-label",
            `Sort direction: ${view.sortDir === "desc" ? "descending" : "ascending"}`
        );

        const icon = sortDirBtn.querySelector(".games-sort-dir-icon");
        const text = sortDirBtn.querySelector(".games-sort-dir-text");

        if (icon) {

            icon.textContent = view.sortDir === "desc" ? "↓" : "↑";

        }

        if (text) {

            text.textContent = directionText(view.sortKey, view.sortDir);

        }

    }

    syncDirButton();
    refresh();

    // --- listeners ------------------------------------------------------------
    input.addEventListener("input", refresh);

    sortSelect.addEventListener("change", () => {

        view.sortKey = sortSelect.value || "name";
        // Picking a new key resets direction to that key's natural default
        // (hardest-first, most-hours-first, A-Z, ...) - the user can then
        // flip it.
        view.sortDir = SORT_KEYS[view.sortKey]?.naturalDirection ?? "asc";
        syncDirButton();
        refresh();

    });

    sortDirBtn.addEventListener("click", () => {

        view.sortDir = view.sortDir === "desc" ? "asc" : "desc";
        syncDirButton();
        refresh();

    });

    document
        .querySelectorAll(".filters-panel input")
        .forEach(el => el.addEventListener("change", refresh));

    document.addEventListener("click", event => {

        const button = event.target.closest(".planner-btn");

        if (button) {

            window.location.href = `game.html?slug=${button.dataset.slug}`;
            return;

        }

        const card = event.target.closest(".catalog-card:not(.catalog-card--skeleton)");

        if (card) {

            window.location.href = `game.html?slug=${card.dataset.slug}`;

        }

    });

    toggle.addEventListener("click", () => {

        const isOpen = panel.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));

    });

    clearButton.addEventListener("click", () => {

        document
            .querySelectorAll(".filters-panel input")
            .forEach(el => { el.checked = false; });

        refresh();

    });

    // --- progressive enrichment: per-game player achievement data --------
    // Task 7/8/9: the catalog is already interactive above. This adds the
    // logged-in visitor's real per-game completion so the player-specific
    // sorts/filters work, then re-runs the pipeline once - without ever
    // blocking or reloading the page.
    if (session?.logged) {

        fetchProfileGameStats()
            .then(result => {

                if (result.status === "logged-out") {

                    setPlayerControls(false, "Log in with Steam to sort and filter by your own progress.");
                    return;

                }

                if (result.status !== "ready") {

                    console.error("Unable to load per-game player stats:", result.error);
                    setPlayerControls(false, "We couldn't load your Steam data — player sorts and filters are unavailable right now.");
                    return;

                }

                const bySlug = new Map(result.games.map(entry => [entry.slug, entry]));

                for (const game of games) {

                    const entry = bySlug.get(game.slug);

                    if (!entry) {

                        continue;

                    }

                    game.playerUnlocked = entry.unlocked;
                    game.playerTotal = entry.total;
                    game.playerPercent = entry.percent;

                }

                setPlayerControls(true);
                refresh();

            })
            .catch(error => {

                console.error("Unable to load per-game player stats:", error);
                setPlayerControls(false, "We couldn't load your Steam data — player sorts and filters are unavailable right now.");

            });

    }

}

init();
