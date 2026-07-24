import { createAchievementCard } from "../achievement-card/achievement-card.js";

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

            <h2>Achievements</h2>

            <p class="achievement-description">

                There are
                <strong>${game.achievements.length}</strong>
                achievements in this game.

            </p>

            <div class="achievement-container">

                ${cards}

            </div>

        </section>

    `;

}