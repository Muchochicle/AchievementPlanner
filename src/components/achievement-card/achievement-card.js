export function createAchievementCard(achievement) {

    return `

        <article class="achievement-card">

            <div class="achievement-icon">

                🏆

            </div>

            <div class="achievement-content">

                <div class="achievement-top">

                    <h3>${achievement.name}</h3>

                    <label class="achievement-check">

                        <input
                            type="checkbox"
                        >

                    </label>

                </div>

                <p class="achievement-description">

                    ${achievement.description}

                </p>

                <div class="achievement-meta">

                    <span>

                        ⭐
                        <strong>${achievement.difficulty}/5</strong>

                    </span>

                    <span>

                        ⏱
                        <strong>${achievement.estimatedTime} min</strong>

                    </span>

                    <span>

                        🎯
                        <strong>${achievement.missable ? "Yes" : "No"}</strong>

                    </span>

                </div>

            </div>

        </article>

    `;

}