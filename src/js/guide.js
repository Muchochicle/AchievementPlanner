import { loadNavbar } from "./layout.js";
import { getGuideSummaryBySlug } from "../data/guides/manifest.js";
import { createGuideContent } from "../components/guide-content/guide-content.js";

// Task 9: a single guide page used to import src/data/guides/index.js,
// which statically pulls in ALL 1000+ guide modules (~12 MB) just to read
// one of them. Now it reads the lightweight manifest for metadata + the
// related-guide links, and dynamically imports only the one module whose
// full section content it actually needs to render.

// Resolves a guide's own module from the manifest's `module` path
// (e.g. "games/hades.js"), relative to src/data/guides/.
function loadGuideModule(moduleRelPath) {

    return import(`../data/guides/${moduleRelPath}`);

}

async function init() {

    loadNavbar();

    const params = new URLSearchParams(window.location.search);
    const slug = params.get("slug");

    const container = document.getElementById("guide-content");

    if (!container) {

        return;

    }

    const summary = slug ? getGuideSummaryBySlug(slug) : null;

    if (!summary) {

        container.innerHTML = `

            <div class="no-planner-message">

                <h2>Guide not found</h2>

                <p>We couldn't find this guide.</p>

                <a href="guides.html">Back to Guides</a>

            </div>

        `;

        return;

    }

    // Distinct "loading" state (never an empty container, never a
    // premature "not found") while the one guide module is fetched.
    document.title = `${summary.title} | Achievement Planner`;
    container.innerHTML = `<p class="state-message">Loading “${summary.title}”…</p>`;

    let guide;

    try {

        ({ GUIDE: guide } = await loadGuideModule(summary.module));

    } catch (error) {

        console.error(`Unable to load guide module for "${slug}":`, error);

        container.innerHTML = `

            <div class="no-planner-message">

                <h2>Couldn't load this guide</h2>

                <p>Something went wrong loading this guide. Please try again in a moment.</p>

                <a href="guides.html">Back to Guides</a>

            </div>

        `;

        return;

    }

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

    // Related guides only need slug/icon/title for their links - resolved
    // from the manifest, so no extra guide modules are loaded.
    const relatedGuides = (guide.relatedSlugs ?? [])
        .map(getGuideSummaryBySlug)
        .filter(Boolean);

    container.innerHTML = createGuideContent(guide, relatedGuides);

}

init();
