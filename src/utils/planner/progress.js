import { getMergedAchievementStats } from "./achievement/completion.js";

// Authoritative bar/counter/percentage, backed by game.mergedAchievements
// (Steam's full achievement set when available, degrading gracefully to
// the local-only list otherwise - see completion.js).
export function updateProgress(game, slug) {

    const { total, completed, percentage } =
        getMergedAchievementStats(game, slug);

    document.getElementById("progress-fill").style.width =
        `${percentage}%`;

    document.getElementById("progress-counter").textContent =
        `${completed} / ${total}`;

    document.getElementById("progress-text").textContent =
        `${percentage}% completed`;

}
