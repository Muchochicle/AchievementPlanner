import { getMergedAchievementStats } from "./achievement/completion.js";

// Authoritative bar/counter/percentage, backed entirely by
// game.mergedAchievements / Steam player data (see completion.js).
export function updateProgress(game) {

    const { total, completed, percentage } =
        getMergedAchievementStats(game);

    document.getElementById("progress-fill").style.width =
        `${percentage}%`;

    document.getElementById("progress-counter").textContent =
        `${completed} / ${total}`;

    document.getElementById("progress-text").textContent =
        `${percentage}% completed`;

    const progressBar =
        document.getElementById("progress-bar");

    progressBar.setAttribute("aria-valuemax", total);

    progressBar.setAttribute("aria-valuenow", completed);

}
