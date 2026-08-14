export function createCatalogCard(game) {

    const owned = game.owned !== false;

    const hasPlanner = !!game.hasPlanner;

    const cardClass = owned

        ? "catalog-card"

        : "catalog-card catalog-card--unowned";

    const ownedBadge = owned

        ? ""

        : `<span class="catalog-owned-badge">Not owned</span>`;

    const plannerInfo = hasPlanner

        ? `

            <div class="catalog-meta">

                <span>

                    ⭐ ${game.difficulty}/10

                </span>

                <span>

                    ⏱ ${game.completionTime.min}-${game.completionTime.max} h

                </span>

            </div>

        `

        : `

            <div class="catalog-planner-soon">

                Planner coming soon

            </div>

        `;

    return `

        <article
            class="${cardClass}"
            data-slug="${game.slug}"
            tabindex="0"
        >

            <img
                class="catalog-image"
                src="${game.image}"
                alt="${game.title}"
            >

            ${ownedBadge}

            <div class="catalog-content">

                <h3>${game.title}</h3>

                ${plannerInfo}

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