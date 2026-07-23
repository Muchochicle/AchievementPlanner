export function gameCardTemplate(game) {

    return `

        <article class="game-card">

            <img
                src="${game.image}"
                alt="${game.name}"
            >

            <div class="game-card-content">

                <h3>${game.name}</h3>

                <div class="game-card-info">

                    <span>⭐ ${game.difficulty}/10</span>

                    <span>⏱ ${game.time}</span>

                </div>

                <button>

                    View Planner

                </button>

            </div>

        </article>

    `;

}