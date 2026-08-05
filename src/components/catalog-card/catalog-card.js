export function createCatalogCard(game) {

    return `

        <article
            class="catalog-card"
            data-slug="${game.slug}"
            tabindex="0"
        >

            <img
                class="catalog-image"
                src="${game.image}"
                alt="${game.title}"
            >

            <div class="catalog-content">

                <h3>${game.title}</h3>

                <div class="catalog-meta">

                    <span>

                        ⏱ --

                    </span>

                </div>

                <div class="catalog-achievements">

                    🏆 --

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