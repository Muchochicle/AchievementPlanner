import { getGame } from "../utils/gameService.js";

import { createGameHeader } from "../components/game-header/game-header.js";
import { createGameOverview } from "../components/game-overview/game-overview.js";
import { createPlannerStats } from "../components/planner-stats/planner-stats.js";
import {

    createSteamAchievementList,
    createSteamAchievementCards

} from "../components/steam-achievement-list/steam-achievement-list.js";
import { createRecommendedAchievement } from "../components/recommended-achievement/recommended-achievement.js";
import { createSessionPlanner } from "../components/session-planner/session-planner.js";
import { createSessionDuration } from "../components/session-duration/session-duration.js";

import { updateProgress } from "../utils/planner/progress.js";
import { updatePlannerStats } from "../utils/planner/stats.js";
import { saveProgress } from "../utils/planner/storage.js";

import { getRecommendedAchievement } from "../utils/planner/recommendation/recommendation.js";
import { CONFIG } from "../config.js";

import { fetchGamePodium } from "../utils/podiums/podiumsClient.js";
import { createPodiumCard } from "../components/podium/podium.js";
import { GAME_PODIUM_CATEGORY } from "../utils/podiums/podiumCategories.js";

import { resetDevelopmentProgress } from "../dev/resetProgress.js";
import { loadNavbar } from "./layout.js";
import {

    initAchievementFilters

} from "../utils/planner/filters.js";
import {
    skipAchievement,
    clearSkippedAchievements
} from "../utils/planner/recommendation/skipped.js";

import {
    getSession,
    regenerateSession
} from "../utils/planner/sessionManager.js";

import {
    loadSessionDuration,
    saveSessionDuration
} from "../utils/planner/session/sessionStorage.js";

import {

    syncAchievementCompletion

} from "../utils/planner/achievement/achievementManager.js";

// Steam is the only source of truth for completion - this timer just
// re-runs the existing getGame -> syncAchievementCompletion ->
// saveProgress -> refresh pipeline on a schedule so the UI notices a
// Steam-side unlock without a page reload. It never checks Steam
// directly and never grants completion itself.
const POLL_INTERVAL_MS = 60 * 1000;

// Fills #game-podium-container (present in both the has-planner and
// no-planner-but-Steam-achievements render branches below). A game the
// user doesn't own on Steam has no appid (see gameMapper.js's
// mapPlannerOnlyGame) - there's nothing to look up a playtime leaderboard
// for, so the section is simply left empty rather than shown broken/empty.
function renderGamePodium(game) {

    const container = document.getElementById("game-podium-container");

    if (!container || !(game.appid > 0)) {

        return;

    }

    container.innerHTML = createPodiumCard(GAME_PODIUM_CATEGORY, { status: "loading" });

    fetchGamePodium(game.appid).then(state => {

        if (state.status === "error") {

            console.error("Unable to load this game's leaderboard:", state.error);

        }

        container.innerHTML = createPodiumCard(GAME_PODIUM_CATEGORY, state);

    });

}

async function init() {

    // Not awaited here - navbar rendering and the session check it performs
    // run in parallel with the game data fetch below. The same resolved
    // session is reused where this page needs it (instead of a second,
    // redundant /api/me call) by awaiting this same promise later.
    const sessionPromise = loadNavbar();

    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    const container =
        document.getElementById("game-content");

    if (!slug) {

        container.innerHTML =
            `<p class="state-message">No game selected. Redirecting to the homepage…</p>`;

        setTimeout(() => {

            window.location.href = "index.html";

        }, 1800);

        return;

    }

    container.innerHTML =
        `<p class="state-message">Loading game…</p>`;

    clearSkippedAchievements();

    // Started here (not awaited yet) so it genuinely runs alongside
    // sessionPromise, as the comment above promises - previously this was
    // fetched only after awaiting sessionPromise first, silently
    // serializing two independent requests despite the "runs in parallel"
    // comment. game data needs only `slug` (already available from the
    // URL), never the session, so there's no real dependency forcing
    // sequential order.
    const gamePromise = getGame(slug);

    try {

        let [game, session] = await Promise.all([gamePromise, sessionPromise]);

        document.title = `${game.name} • Achievement Planner`;

        const hoursPlayed = game.playtime ?? 0;

        if (!game.hasPlanner) {

            if (game.steamAchievements?.available) {

                container.innerHTML =

                    createGameHeader(game, hoursPlayed) +

                    `<div id="game-podium-container"></div>` +

                    createSteamAchievementList(game, session);

                renderGamePodium(game);

                // No curated planner for this game, but Steam still reports
                // achievements - persist their resolved completion state so
                // profile.html's statistics see it too (see storage.js).
                // syncAchievementCompletion/checkGameCompletion are skipped
                // here: both only grant XP/badges for curated (game.achievements)
                // entries, which are always empty without a planner.
                saveProgress(game, slug);

                initAchievementFilters();

                return;

            }

            container.innerHTML = `

                <div class="no-planner-message">

                    <h2>Planner not available yet</h2>

                    <p>We don't have a planner available for this game yet.</p>

                    <a href="games.html">Back to games</a>

                </div>

            `;

            return;

        }

        container.innerHTML =

                (CONFIG.ENABLE_RESET_BUTTON

                    ? `

                    <div class="dev-toolbar">

                        <button id="dev-reset-progress">

                            🧪 Reset progress

                        </button>

                    </div>

                    `

                    : "")

                +

            createGameHeader(game, hoursPlayed) +

            createGameOverview(game) +

            `<div id="game-podium-container"></div>` +

            `<div id="recommended-container"></div>` +

            createSessionDuration(
                loadSessionDuration(slug)
            ) +

            `<div id="session-container"></div>` +

            createPlannerStats() +

            createSteamAchievementList(game, session);

        renderGamePodium(game);

        // Steam is the sole source of achievement completion. Run once
        // per page load: grant XP for any newly-Steam-completed matched
        // achievement (idempotent - see achievementManager.js), then
        // persist the resolved state for profile.html's statistics.
        syncAchievementCompletion(game, slug);

        saveProgress(game, slug);

        if (CONFIG.ENABLE_RESET_BUTTON) {

            document

                .getElementById("dev-reset-progress")

                ?.addEventListener(

                    "click",

                    resetDevelopmentProgress

                );

        }

        let pollTimer = null;

        refresh();

        startPolling();

        document
            .getElementById("session-duration")
            .addEventListener("change", () => {

                const duration =
                    Number(
                        document.getElementById(
                            "session-duration"
                        ).value
                    );

                saveSessionDuration(slug, duration);

                regenerateSession(
                    game,
                    slug,
                    duration
                );

                refresh();

            });

        function refresh() {

            updateProgress(game);

            updatePlannerStats(game);

            renderRecommendation();

            renderSession();

            renderAchievementCards();

            initAchievementFilters();

        }

        function renderRecommendation() {

            const recommended =
                getRecommendedAchievement(game);

            document.getElementById(
                "recommended-container"
            ).innerHTML =
                createRecommendedAchievement(
                    recommended
                );

            const skipButton =
                document.querySelector(
                    ".recommended-skip"
                );

            if (skipButton) {

                skipButton.onclick = () => {

                    skipAchievement(
                        Number(skipButton.dataset.id)
                    );

                    regenerateSession(
                        game,
                        slug,
                        Number(
                            document.getElementById(
                                "session-duration"
                            ).value
                        )
                    );

                    refresh();

                };

            }

        }

        function renderSession() {

            const duration =
                Number(

                    document.getElementById(
                        "session-duration"
                    ).value

                );

            const session =
                getSession(
                    game,
                    slug,
                    duration
                );

            document.getElementById(
                "session-container"
            ).innerHTML =
                createSessionPlanner(session, game);

        }

        // Regenerates only the card grid (not the header/filters around
        // it) so a poll that finds a fresh Steam confirmation is
        // reflected on the individual card without losing the user's
        // current filter selection. Reuses the exact same card-rendering
        // path as the initial render - no separate completion logic.
        function renderAchievementCards() {

            const container =
                document.getElementById("steam-achievement-cards");

            if (!container) {

                return;

            }

            container.innerHTML =
                createSteamAchievementCards(game);

        }

        // Re-fetches this game from our own backend (never Steam
        // directly) and runs it through the exact same pipeline used at
        // page load. syncAchievementCompletion/checkGameCompletion are
        // already idempotent, so a poll that finds nothing new is a
        // harmless no-op, and one that finds a genuine Steam unlock
        // grants XP/completion exactly once.
        //
        // Deliberately does NOT re-fetch the podium: leaderboard standings
        // only change when someone (this user or another) is reindexed via
        // a Profile visit, not from this game's own achievement state, so
        // refetching it every 60s would be a recurring request with no
        // real payoff. It's fetched once at load; a full page reload picks
        // up anything newer.
        async function pollSteamUpdates() {

            try {

                game = await getGame(slug);

                syncAchievementCompletion(game, slug);

                saveProgress(game, slug);

                refresh();

            } catch (error) {

                console.error(
                    "Unable to refresh Steam achievement data:",
                    error
                );

            }

        }

        function startPolling() {

            if (pollTimer) {

                return;

            }

            pollTimer = setInterval(
                pollSteamUpdates,
                POLL_INTERVAL_MS
            );

        }

        function stopPolling() {

            if (!pollTimer) {

                return;

            }

            clearInterval(pollTimer);

            pollTimer = null;

        }

        document.addEventListener(
            "visibilitychange",
            () => {

                if (document.hidden) {

                    stopPolling();

                } else {

                    startPolling();

                    pollSteamUpdates();

                }

            }
        );

    }

    catch (error) {

        console.error(error);

        const notFound = error.status === 404;

        container.innerHTML = `

            <div class="no-planner-message">

                <h2>${notFound ? "Game not found" : "Something went wrong"}</h2>

                <p>${notFound

                    ? "We couldn't find this game in our catalog."

                    : "We couldn't load this game right now. Please try again later."}</p>

                <a href="games.html">Back to games</a>

            </div>

        `;

    }

}

init();
