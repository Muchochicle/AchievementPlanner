export function createGameOverview(game) {

    return `

        <section class="game-overview">

            <div class="overview-card">

                <span>⭐ Difficulty</span>

                <strong>${game.difficulty}/10</strong>

            </div>

            <div class="overview-card">

                <span>⏱ Time</span>

                <strong>${game.completionTime.min}-${game.completionTime.max} h</strong>

            </div>

            <div class="overview-card">

                <span>🏆 Achievements</span>

                <strong>${game.achievements.length}</strong>

            </div>

            <div class="overview-card">

                <span>🎯 Missables</span>

                <strong>${game.missable ? "Yes" : "No"}</strong>

            </div>

            <div class="overview-card">

                <span>🔁 Playthroughs</span>

                <strong>${game.playthroughs}</strong>

            </div>

        </section>

    `;

}