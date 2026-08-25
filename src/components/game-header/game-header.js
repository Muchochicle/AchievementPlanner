import { getMergedAchievementStats } from "../../utils/planner/achievement/completion.js";
import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Compact, game-specific header - replaces the old player-profile block.
// Achievement X/Y/%/bar are Steam-authoritative via getMergedAchievementStats
// (the same function progress.js/steam-achievement-list.js already use) -
// this component does not compute completion itself. The initial numbers
// shown here are immediately re-confirmed by the existing updateProgress(game)
// right after render, and again on every Phase 22 poll tick - #progress-fill,
// #progress-counter, #progress-text, and #hours-played are the exact
// ids/targets it already expects, just relocated into this header instead
// of a separate section.
export function createGameHeader(game, hoursPlayed = 0) {

    const { total, completed, percentage } = getMergedAchievementStats(game);

    // gameMapper.js's `difficulty: planner?.difficulty ?? null` is genuinely
    // null for any Steam-owned game with no curated catalog entry - a real,
    // common case (game.js's "no planner, but Steam still reports
    // achievements" branch renders this header directly, and the curated
    // catalog only covers 3 games out of any real user's library). Every
    // other component that renders this same field (catalog-card.js,
    // search.js) already guards it the same way; this was the one place
    // that rendered the literal text "null/10" instead (Phase 69).
    const hasDifficulty =
        typeof game.difficulty === "number";

    return `

        <section class="game-header">

            <img
                class="game-header-image"
                src="${escapeHtml(game.image)}"
                alt="${escapeHtml(game.name)}"
            >

            <div class="game-header-content">

                <h1>${escapeHtml(game.name)}</h1>

                <p class="game-genres">

                    ${escapeHtml(game.genres.join(" • "))}

                </p>

                <div class="game-header-stats">

                    ${hasDifficulty
                        ? `
                    <div class="game-header-stat">

                        <span>⭐ Difficulty</span>

                        <strong>${game.difficulty}/10</strong>

                    </div>
                        `
                        : ""}

                    <div class="game-header-progress">

                        <div class="game-header-progress-label">

                            <span>🏆 Achievements</span>

                            <span>

                                <strong id="progress-counter">${completed} / ${total}</strong>

                                ·

                                <strong id="progress-text">${percentage}% completed</strong>

                            </span>

                        </div>

                        <div
                            class="progress-bar"
                            id="progress-bar"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="${total}"
                            aria-valuenow="${completed}"
                            aria-label="Achievement completion progress"
                        >

                            <div
                                id="progress-fill"
                                class="progress-fill"
                                style="width:${percentage}%"
                            ></div>

                        </div>

                    </div>

                    <div class="game-header-stat">

                        <span>⏱ Hours Played</span>

                        <strong id="hours-played">${hoursPlayed} h</strong>

                    </div>

                </div>

            </div>

        </section>

    `;

}
