export function createPlannerSummary(game) {

    return `

        <section class="planner-summary">

            <div class="planner-summary-image">

                <img
                    src="${game.image}"
                    alt="${game.name}"
                >

            </div>

            <div class="planner-summary-content">

                <h1>

                    ${game.name}

                </h1>

                <div class="planner-summary-meta">

                    <span>

                        ⭐ Difficulty ${game.difficulty}/10

                    </span>

                    <span>

                        ⏱ ${game.completionTime.min}-${game.completionTime.max} h

                    </span>

                    <span>

                        🏆 ${game.achievements.length} achievements

                    </span>

                </div>

                <div class="planner-summary-tags">

                    ${game.genres.map(genre =>

                        `<span>${genre}</span>`

                    ).join("")}

                </div>

            </div>

        </section>

    `;

}