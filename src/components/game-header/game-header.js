export function createGameHeader(game) {

    return `

        <section class="game-header">

            <img
                class="game-header-image"
                src="${game.image}"
                alt="${game.name}"
            >

            <h1>${game.name}</h1>

            <p class="game-genres">

                ${game.genres.join(" • ")}

            </p>

            <div class="game-stats">

                <div class="game-stat">

                    <span>⭐ Difficulty</span>

                    <strong>${game.difficulty}/10</strong>

                </div>

                <div class="game-stat">

                    <span>⏱ Time</span>

                    <strong>${game.completionTime.min}-${game.completionTime.max} h</strong>

                </div>

                <div class="game-stat">

                    <span>🏆 Achievements</span>

                    <strong>${game.achievements}</strong>

                </div>

                <div class="game-stat">

                    <span>🎯 Missables</span>

                    <strong>${game.missable ? "Yes" : "No"}</strong>

                </div>

                <div class="game-stat">

                    <span>🔁 Playthroughs</span>

                    <strong>${game.playthroughs}</strong>

                </div>

            </div>

        </section>

    `;

}