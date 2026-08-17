import { getMergedAchievementStats } from "../../utils/planner/achievement/completion.js";

// Compact, game-specific header - replaces the old player-profile block.
// Achievement X/Y/%/bar are Steam-authoritative via getMergedAchievementStats
// (the same function progress.js/steam-achievement-list.js already use) -
// this component does not compute completion itself. The initial numbers
// shown here are immediately re-confirmed by the existing updateProgress(game)
// right after render, and again on every Phase 22 poll tick - #progress-fill,
// #progress-counter and #progress-text are the exact ids/targets it already
// expects, just relocated into this header instead of a separate section.
export function createGameHeader(game, hoursPlayed = 0) {

    const { total, completed, percentage } = getMergedAchievementStats(game);

    return `

        <section class="game-header">

            <img
                class="game-header-image"
                src="${game.image}"
                alt="${game.name}"
            >

            <div class="game-header-content">

                <h1>${game.name}</h1>

                <p class="game-genres">

                    ${game.genres.join(" • ")}

                </p>

                <div class="game-header-stats">

                    <div class="game-header-stat">

                        <span>⭐ Difficulty</span>

                        <strong>${game.difficulty}/10</strong>

                    </div>

                    <div class="game-header-progress">

                        <div class="game-header-progress-label">

                            <span>🏆 Achievements</span>

                            <span>

                                <strong id="progress-counter">${completed} / ${total}</strong>

                                ·

                                <strong id="progress-text">${percentage}% completed</strong>

                            </span>

                        </div>

                        <div class="progress-bar">

                            <div
                                id="progress-fill"
                                class="progress-fill"
                                style="width:${percentage}%"
                            ></div>

                        </div>

                    </div>

                    <div class="game-header-stat">

                        <span>⏱ Hours Played</span>

                        <strong>${hoursPlayed} h</strong>

                    </div>

                </div>

            </div>

        </section>

    `;

}
