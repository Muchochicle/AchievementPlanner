export function createAchievementCard(achievement) {

    return `

        <article class="achievement-card">

            <div class="achievement-icon">

                🏆

            </div>

            <div class="achievement-content">

                <h3>${achievement.name}</h3>

                <p class="achievement-description">

                    ${achievement.description}

                </p>

                <div class="achievement-meta">

                    <span>
                        ⭐ Difficulty:
                        <strong>${achievement.difficulty}/5</strong>
                    </span>

                    <span>
                        ⏱ Time:
                        <strong>${achievement.estimatedTime} min</strong>
                    </span>

                    <span>
                        🎯 Missable:
                        <strong>${achievement.missable ? "Yes" : "No"}</strong>
                    </span>

                </div>

                <label class="achievement-check">

                    <input
                        type="checkbox"
                    >

                    Completed

                </label>

            </div>

        </article>

    `;

}