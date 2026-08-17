export function createRecommendedAchievement(achievement) {

    if (achievement?.empty) {

        return `

            <section class="recommended-achievement">

                <div class="recommended-title">

                    📋 No Achievements Yet

                </div>

                <h2>

                    No achievements catalogued for this game yet.

                </h2>

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

                ${achievement.name}

            </h2>

            <p>

                ${achievement.description}

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