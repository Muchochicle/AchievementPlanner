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
import { getSteamSession } from "../utils/steam/steamSession.js";
import { CONFIG } from "../config.js";

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

async function init() {

    loadNavbar();

    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    if (!slug) {

        window.location.href = "index.html";
        return;

    }

    clearSkippedAchievements();

    let session = {
        logged: false
    };

    try {

        session = await getSteamSession();

    } catch (error) {

        console.error(
            "Unable to check Steam session:",
            error
        );

    }

    try {

        let game = await getGame(slug);

        document.title = `${game.name} • Achievement Planner`;

        const hoursPlayed = game.playtime ?? 0;

        const container =
            document.getElementById("game-content");

        if (!game.hasPlanner) {

            if (game.steamAchievements?.available) {

                container.innerHTML =

                    createGameHeader(game, hoursPlayed) +

                    createSteamAchievementList(game, session);

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

                            🧪 Reset progreso

                        </button>

                    </div>

                    `

                    : "")

                +

            createGameHeader(game, hoursPlayed) +

            createGameOverview(game) +

            `<div id="recommended-container"></div>` +

            createSessionDuration(
                loadSessionDuration(slug)
            ) +

            `<div id="session-container"></div>` +

            createPlannerStats() +

            createSteamAchievementList(game, session);

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

    }

}

init();
