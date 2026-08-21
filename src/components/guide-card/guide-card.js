import { escapeHtml } from "../../utils/format/escapeHtml.js";

// One card, reused for both App Guides and Game Guides on guides.html -
// parameterized entirely by the guide's own data object, the same
// "smallest clean architecture" approach catalog-card.js/podium.js already
// take. The whole card is a real <a>, not a div+button pair: unlike
// catalog-card.js (which needs a separate "View Planner" action distinct
// from the card body), a guide card's only interaction is "go to this
// guide", so one focusable, keyboard-activatable link is the correct
// single stop here.
export function createGuideCard(guide) {

    const categoryLabel = guide.category === "game"
        ? "Game Guide"
        : "App Guide";

    return `

        <a class="guide-card" href="guide.html?slug=${guide.slug}">

            <span class="guide-card-icon" aria-hidden="true">${guide.icon}</span>

            <div class="guide-card-content">

                <span class="guide-card-category">${escapeHtml(categoryLabel)}</span>

                <h3>${escapeHtml(guide.title)}</h3>

                <p>${escapeHtml(guide.summary)}</p>

            </div>

        </a>

    `;

}
