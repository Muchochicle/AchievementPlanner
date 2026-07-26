import { createAchievementCard } from "../achievement-card/achievement-card.js";
import { createAchievementFilters } from "../achievement-filters/achievement-filters.js";

export function createAchievementList(game) {

    const cards = game.achievements.length

        ? game.achievements
            .map(achievement => createAchievementCard(achievement))
            .join("")

        : `

            <p class="achievement-empty">

                Achievement list coming soon...

            </p>

        `;

    return `

        <section class="achievement-list">

            <div class="achievement-header">

                <div>

                    <h2>Achievements</h2>

                    <p
                        id="achievement-stats"
                        class="achievement-description"
                    >

                        Completed:
                        <strong>0</strong>
                        /
                        <strong>${game.achievements.length}</strong>

                        ·

                        Remaining:
                        <strong>${game.achievements.length}</strong>

                    </p>

                </div>

                ${createAchievementFilters()}

            </div>

            <div class="achievement-container">

                ${cards}

            </div>

        </section>

    `;

}