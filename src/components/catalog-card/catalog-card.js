import { escapeHtml } from "../../utils/format/escapeHtml.js";

export function createCatalogCard(game) {

    const owned = game.owned !== false;

    const hasPlanner = !!game.hasPlanner;

    const cardClass = owned

        ? "catalog-card"

        : "catalog-card catalog-card--unowned";

    const ownedBadge = owned

        ? ""

        : `<span class="catalog-owned-badge">Not owned</span>`;

    const hasDifficulty =
        typeof game.difficulty === "number";

    const hasCompletionTime =
        typeof game.completionTime?.min === "number" &&
        typeof game.completionTime?.max === "number";

    const metaStats = [

        hasDifficulty
            ? `<span>⭐ ${game.difficulty}/10</span>`
            : "",

        hasCompletionTime
            ? `<span>⏱ ${game.completionTime.min}-${game.completionTime.max} h</span>`
            : ""

    ].join("");

    const plannerInfo = hasPlanner

        ? (metaStats
            ? `<div class="catalog-meta">${metaStats}</div>`
            : "")

        : `

            <div class="catalog-planner-soon">

                Planner coming soon

            </div>

        `;

    // The card itself is not a focusable/interactive element - the button
    // below is the single keyboard/screen-reader stop for this card, so
    // there is no nested-interactive or redundant-tab-stop issue. Clicking
    // anywhere on the card is still a mouse-only convenience handled by the
    // page's click delegation, equivalent to activating the button.
    return `

        <article
            class="${cardClass}"
            data-slug="${game.slug}"
        >

            <img
                class="catalog-image"
                src="${escapeHtml(game.image)}"
                alt=""
            >

            ${ownedBadge}

            <div class="catalog-content">

                <h3>${escapeHtml(game.title)}</h3>

                ${plannerInfo}

                <button
                    class="planner-btn"
                    data-slug="${game.slug}"
                    aria-label="View planner for ${escapeHtml(game.title)}${owned ? "" : " (not owned)"}"
                >

                    View Planner

                </button>

            </div>

        </article>

    `;

}