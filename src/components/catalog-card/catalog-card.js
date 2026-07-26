export function createCatalogCard(game) {

    return `

        <article class="catalog-card">

            <img
                class="catalog-image"
                src="${game.image}"
                alt="${game.name}"
            >

            <div class="catalog-content">

                <h3>${game.name}</h3>

                <div class="catalog-meta">

                    <span>

                        ⭐ ${game.difficulty}/10

                    </span>

                    <span>

                        ⏱ ${game.completionTime.min}-${game.completionTime.max} h

                    </span>

                </div>

                <div class="catalog-achievements">

                    🏆 ${game.achievements.length} achievements

                </div>

                <button
                    class="planner-btn"
                    data-slug="${game.slug}"
                >

                    View Planner

                </button>

            </div>

        </article>

    `;

}