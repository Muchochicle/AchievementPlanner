import { escapeHtml } from "../../utils/format/escapeHtml.js";

export function createRecommendedAchievement(achievement) {

    if (achievement?.empty) {

        return `

            <section class="recommended-achievement">

                <div class="recommended-title">

                    📋 No Planner Data Yet

                </div>

                <h2>

                    Curated achievements aren't available for this game yet.

                </h2>

                <p>

                    You can still browse and track its Steam achievements below.

                </p>

            </section>

        `;

    }

    if (!achievement) {

        return `

            <section class="recommended-achievement">

                <div class="recommended-title">

                    🎉 Congratulations!

                </div>

                <h2>

                    All achievements completed

                </h2>

                <p>

                    You've reached 100% completion.

                </p>

            </section>

        `;

    }

    return `

        <section class="recommended-achievement">

            <div class="recommended-title">

                ⭐ Recommended Next Achievement

            </div>

            <h2>

                ${escapeHtml(achievement.name)}

            </h2>

            <p>

                ${escapeHtml(achievement.description)}

            </p>

            <div class="recommended-meta">

                <span>

                    Difficulty ${achievement.difficulty}/5

                </span>

                <span>

                    ⏱ ${achievement.estimatedTime} min

                </span>

            </div>

            <div class="recommended-reasons">

                <h3>

                    Why this achievement?

                </h3>

                <ul>

                    ${achievement.reasons
                        .map(reason =>

                            `<li>✔ ${reason}</li>`

                        )
                        .join("")}

                </ul>

            </div>

            <div class="recommended-actions">

                <button
                    class="recommended-skip"
                    data-id="${achievement.id}"
                >

                    ↷ Skip

                </button>

            </div>

        </section>

    `;

}