import { getGame } from "../utils/gameService.js";

import { createGameHeader } from "../components/game-header/game-header.js";
import { createGameOverview } from "../components/game-overview/game-overview.js";
import { createProgress } from "../components/progress/progress.js";
import { createAchievementList } from "../components/achievement-list/achievement-list.js";

import { updateProgress } from "../utils/planner/progress.js";
import { saveProgress, loadProgress } from "../utils/planner/storage.js";

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

            createAchievementList(game);

        const checkboxes = document.querySelectorAll(
            ".achievement-check input"
        );

        loadProgress(slug);

        updateProgress();

        checkboxes.forEach(box => {

            box.addEventListener("change", () => {

                updateProgress();

                saveProgress(slug);

            });

        });

    }

    catch (error) {

        console.error(error);

    }

}

init();