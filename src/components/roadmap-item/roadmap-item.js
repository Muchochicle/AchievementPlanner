import { escapeHtml } from "../../utils/format/escapeHtml.js";

const STATUS_LABELS = {
    planned: "Planned",
    considering: "Considering",
    shipped: "Shipped"
};

// One roadmap card - parameterized entirely by the item's own data object,
// matching guide-card.js's "smallest clean architecture" convention. Shared
// by both the Planned/Considering list and the Recently Shipped list
// (src/data/roadmap.js) - a shipped item just never reaches here without a
// `status`, so it's given one explicitly by the caller (roadmap.js) rather
// than this component guessing.
export function createRoadmapItem(item) {

    const statusLabel = STATUS_LABELS[item.status] ?? "Planned";

    return `

        <li class="roadmap-item roadmap-item--${escapeHtml(item.status)}">

            <span class="roadmap-item-status">${escapeHtml(statusLabel)}</span>

            <h3>${escapeHtml(item.title)}</h3>

            <p>${escapeHtml(item.body)}</p>

        </li>

    `;

}
