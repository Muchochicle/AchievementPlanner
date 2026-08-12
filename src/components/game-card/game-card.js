export function createGameCard(game) {

    const hasPlanner = !!game.hasPlanner;

    const meta = hasPlanner

        ? `

            <span>⭐ ${game.difficulty}/10</span>

            <span>⏱ ${game.completionTime.min}-${game.completionTime.max} h</span>

        `

        : `

            <span class="planner-soon">Planner próximamente</span>

        `;

    const buttonLabel = hasPlanner

        ? "View Planner"

        : "Ver juego";

    return `

        <article
            class="game-card"
            onclick="window.location.href='game.html?slug=${game.slug}'"
        >

            <img
                class="game-image"
                src="${game.image}"
                alt="${game.title}"
            >

            <div class="game-card-content">

                <h3>${game.title}</h3>

                <div class="game-meta">

                    ${meta}

                </div>

                <button class="planner-btn">

                    ${buttonLabel}

                </button>

            </div>

        </article>

    `;

}