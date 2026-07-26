import { getGame } from "../utils/gameService.js";

import { createGameHeader } from "../components/game-header/game-header.js";
import { createGameOverview } from "../components/game-overview/game-overview.js";
import { createProgress } from "../components/progress/progress.js";
import { createPlannerStats } from "../components/planner-stats/planner-stats.js";
import { createAchievementList } from "../components/achievement-list/achievement-list.js";

import { updateProgress } from "../utils/planner/progress.js";
import { updatePlannerStats } from "../utils/planner/stats.js";
import { saveProgress, loadProgress } from "../utils/planner/storage.js";

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

        const container = document.getElementById("game-content");

        container.innerHTML =

            createGameHeader(game) +

            createGameOverview(game) +

            createProgress(game) +

            createPlannerStats() +

            createAchievementList(game);

        const checkboxes = document.querySelectorAll(
            ".achievement-check input"
        );

        loadProgress(slug);

        updateProgress();

        updatePlannerStats(game);

        initAchievementFilters();

        checkboxes.forEach(box => {

            box.addEventListener("change", () => {

                updateProgress();

                updatePlannerStats(game);

                saveProgress(slug);

                const activeFilter = document.querySelector(
                    ".filter-btn.active"
                );

                applyFilter(activeFilter.dataset.filter);

            });

        });

    }

    catch (error) {

        console.error(error);

    }

}

init();