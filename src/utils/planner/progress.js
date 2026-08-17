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

    updateLegacyAchievementStats();

}

// The legacy achievement-list's own inline "Completed / Remaining" line
// (#achievement-stats) - intentionally still scoped to the local
// checkbox list it lives inside, unchanged from before this phase.
function updateLegacyAchievementStats() {

    const checkboxes =
        document.querySelectorAll(".achievement-check input");

    const completed =
        [...checkboxes].filter(box => box.checked).length;

    const total = checkboxes.length;

    const remaining = total - completed;

    const stats = document.getElementById("achievement-stats");

    if (stats) {

        stats.innerHTML = `

            Completed:
            <strong>${completed}</strong>
            /
            <strong>${total}</strong>

            ·

            Remaining:
            <strong>${remaining}</strong>

        `;

    }

}