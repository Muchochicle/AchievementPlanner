import { loadNavbar } from "./layout.js";
import { getGuideBySlug } from "../data/guides/index.js";
import { createGuideContent } from "../components/guide-content/guide-content.js";

function init() {

    loadNavbar();

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    const container = document.getElementById("guide-content");

    if (!container) {

        return;

    }

    const guide = slug ? getGuideBySlug(slug) : null;

    if (!guide) {

        container.innerHTML = `

            <div class="no-planner-message">

                <h2>Guide not found</h2>

                <p>We couldn't find this guide.</p>

                <a href="guides.html">Back to Guides</a>

            </div>

        `;

        return;

    }

    document.title = `${guide.title} | Achievement Planner`;

    // Resolved here, not inside guide-content.js - matches this app's
    // convention of components receiving fully-shaped data rather than
    // doing their own data-layer lookups (see guide-content.js's own
    // header comment).
    const relatedGuides = (guide.relatedSlugs ?? [])
        .map(getGuideBySlug)
        .filter(Boolean);

    container.innerHTML = createGuideContent(guide, relatedGuides);

}

init();
