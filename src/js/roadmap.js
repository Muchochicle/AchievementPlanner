import { loadNavbar } from "./layout.js";
import { ROADMAP_ITEMS, SHIPPED_HIGHLIGHTS } from "../data/roadmap.js";
import { createRoadmapItem } from "../components/roadmap-item/roadmap-item.js";

// Roadmap content is static, locally-imported data (see src/data/roadmap.js)
// - no network fetch, no loading/error state needed, matching guides.js's
// own reasoning for staying a plain sync function.
function init() {

    loadNavbar();

    document.title = "Roadmap | Achievement Planner";

    const nextContainer = document.getElementById("roadmap-next-container");
    const shippedContainer = document.getElementById("roadmap-shipped-container");

    if (!nextContainer || !shippedContainer) {

        return;

    }

    nextContainer.innerHTML = ROADMAP_ITEMS
        .map(createRoadmapItem)
        .join("");

    shippedContainer.innerHTML = SHIPPED_HIGHLIGHTS
        .map(item => createRoadmapItem({ ...item, status: "shipped" }))
        .join("");

}

init();
