import { getGame } from "../utils/gameService.js";

import { createGameHeader } from "../components/game-header/game-header.js";
import { createGameOverview } from "../components/game-overview/game-overview.js";
import { createProgress } from "../components/progress/progress.js";
import { createPlannerStats } from "../components/planner-stats/planner-stats.js";
import { createAchievementList } from "../components/achievement-list/achievement-list.js";
import { createRecommendedAchievement } from "../components/recommended-achievement/recommended-achievement.js";

import { updateProgress } from "../utils/planner/progress.js";
import { updatePlannerStats } from "../utils/planner/stats.js";
import { saveProgress, loadProgress } from "../utils/planner/storage.js";
import { getRecommendedAchievement } from "../utils/planner/recommendation/recommendation.js";

import {
    initAchievementFilters,
    applyFilter
} from "../utils/planner/filters.js";

async function init() {

    const params = new URLSearchParams(window.location.search);

    const slug = params.get("slug");

    if (!slug) {

        window.location.href = "index.html";
        return;

    }

    try {

        const game = await getGame(slug);

        const container =
            document.getElementById("game-content");

        container.innerHTML =

            createGameHeader(game) +

            createGameOverview(game) +

            `<div id="recommended-container"></div>` +

            createProgress(game) +

            createPlannerStats() +

            createAchievementList(game);

        loadProgress(slug);

        initAchievementFilters();

        refresh();

        function refresh() {

            updateProgress();

            updatePlannerStats(game);

            renderRecommendation();

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

            const button =
                document.querySelector(
                    ".recommended-button"
                );

            if (button) {

                button.addEventListener("click", () => {

                    const checkbox =
                        document.querySelector(

                            `.achievement-check input[data-id="${button.dataset.id}"]`

                        );

                    if (!checkbox) return;

                    checkbox.checked = true;

                    saveProgress(slug);

                    refresh();

                });

            }

        }

        document
            .querySelectorAll(".achievement-check input")
            .forEach(box => {

                box.addEventListener("change", () => {

                    saveProgress(slug);

                    refresh();

                    const activeFilter =
                        document.querySelector(
                            ".filter-btn.active"
                        );

                    if (activeFilter) {

                        applyFilter(
                            activeFilter.dataset.filter
                        );

                    }

                });

            });

    }

    catch (error) {

        console.error(error);

    }

}

init();