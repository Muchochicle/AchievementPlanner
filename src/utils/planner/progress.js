import { getMergedAchievementStats } from "./achievement/completion.js";

// Authoritative bar/counter/percentage, backed entirely by
// game.mergedAchievements / Steam player data (see completion.js).
// Also re-confirms #hours-played from the same freshly-polled `game` object
// (game.playtime) - previously this element was only ever set once from the
// initial page-load fetch (see game-header.js), so it went stale after the
// first poll tick that observed real new Steam playtime while every other
// header stat here kept updating live (Finding 17, PHASE_51/52_AUDIT.md).
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

    document.getElementById("hours-played").textContent =
        `${game.playtime ?? 0} h`;

}
