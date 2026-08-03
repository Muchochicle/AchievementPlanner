import { getGame } from "../utils/gameService.js";

import { createGameHeader } from "../components/game-header/game-header.js";
import { createGameOverview } from "../components/game-overview/game-overview.js";
import { createProgress } from "../components/progress/progress.js";
import { createPlannerStats } from "../components/planner-stats/planner-stats.js";
import { createAchievementList } from "../components/achievement-list/achievement-list.js";
import { createRecommendedAchievement } from "../components/recommended-achievement/recommended-achievement.js";
import { createSessionPlanner } from "../components/session-planner/session-planner.js";
import { createSessionDuration } from "../components/session-duration/session-duration.js";

import { updateProgress } from "../utils/planner/progress.js";
import { updatePlannerStats } from "../utils/planner/stats.js";
import { saveProgress, loadProgress } from "../utils/planner/storage.js";

import { getRecommendedAchievement } from "../utils/planner/recommendation/recommendation.js";
import { createPlayerProfile } from "../components/player-profile/player-profile.js";
import { CONFIG } from "../config.js";

import { resetDevelopmentProgress } from "../dev/resetProgress.js";
import {

    createGamePage

} from "../pages/gamePage.js";
import { loadNavbar } from "./layout.js";
import {

    createLayout

} from "../components/layout/layout.js";
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

    toggleAchievement

} from "../utils/planner/achievement/achievementManager.js";

async function init() {

    loadNavbar();

    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    if (!slug) {

        window.location.href = "index.html";
        return;

    }

    clearSkippedAchievements();

    try {

        const game = await getGame(slug);

        const container =
            document.getElementById("game-content");

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

            createPlayerProfile() +

            createGameHeader(game) +

            createGameOverview(game) +

            `<div id="recommended-container"></div>` +

            createSessionDuration() +

            `<div id="session-container"></div>` +

            createProgress(game) +

            createPlannerStats() +

            createAchievementList(game);

        loadProgress(slug);

        if (CONFIG.ENABLE_RESET_BUTTON) {

            document

                .getElementById("dev-reset-progress")

                ?.addEventListener(

                    "click",

                    resetDevelopmentProgress

                );

        }

        refresh();

        document
            .getElementById("session-duration")
            .addEventListener("change", () => {

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

            });

        function refresh() {

            document.querySelector(".player-profile").outerHTML =
                createPlayerProfile();

            const avatarSelector =

                document.getElementById("avatar-selector");

            if (avatarSelector) {

                avatarSelector.addEventListener(

                    "change",

                    event => {

                        equipAvatar(event.target.value);

                        refresh();

                    }

                );

            }

            updateProgress();

            updatePlannerStats(game);

            renderRecommendation();

            renderSession();

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

            const completeButton =
                document.querySelector(
                    ".recommended-button"
                );

            if (completeButton) {

                completeButton.onclick = () => {

                    const checkbox =
                        document.querySelector(

                            `.achievement-check input[data-id="${completeButton.dataset.id}"]`

                        );

                    if (!checkbox) return;

                    toggleAchievement(

                        Number(completeButton.dataset.id),

                        true,

                        slug,

                        refresh,

                        game

                    );

                };

            }

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
                createSessionPlanner(session);

            document
                .querySelectorAll(".session-check input")
                .forEach(box => {

                    box.onchange = () => {

                            toggleAchievement(

                                Number(box.dataset.id),

                                box.checked,

                                slug,

                                refresh,

                                game

                            );

                        };

                });

        }

        document
            .querySelectorAll(".achievement-check input")
            .forEach(box => {

                box.onchange = () => {

                    toggleAchievement(

                        Number(box.dataset.id),

                        box.checked,

                        slug,

                        refresh,

                        game

                    );

                };

            });

    }

    catch (error) {

        console.error(error);

    }

}

init();