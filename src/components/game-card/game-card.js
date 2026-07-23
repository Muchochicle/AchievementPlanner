export function createGameCard(game) {

    return `

        <article class="game-card">

            <img
                class="game-image"
                src="${game.image}"
                alt="${game.name}"
            >

            <div class="game-card-content">

                <h3>${game.name}</h3>

                <div class="game-meta">

                    <span>⭐ ${game.difficulty}/10</span>

                    <span>⏱ ${game.completionTime.min}-${game.completionTime.max} h</span>

                </div>

                <button class="planner-btn">
                    View Planner
                </button>

            </div>

        </article>

    `;

}