import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Single renderer shared by every guide (App and Game alike) - one
// consistent template (category badge, h1 title, summary, then each
// section as an h2 + paragraphs, matching guide.sections' own shape) so
// visual consistency and heading hierarchy come for free regardless of
// which guide is open. `relatedGuides` is passed in already resolved
// (guide.js looks them up via getGuideBySlug) rather than resolved here,
// matching the rest of this app's convention of components receiving
// fully-shaped data instead of doing their own data-layer lookups (e.g.
// steam-achievement-list.js takes a fully-merged `game`, never resolves
// achievements itself).
export function createGuideContent(guide, relatedGuides = []) {

    const categoryLabel = guide.category === "game"
        ? "Game Guide"
        : "App Guide";

    const sectionsHtml = guide.sections
        .map(section => `

            <section class="guide-content-section">

                <h2>${escapeHtml(section.heading)}</h2>

                ${section.body.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("")}

            </section>

        `)
        .join("");

    const relatedHtml = relatedGuides.length
        ? `

            <footer class="guide-content-related">

                <h2>Related Guides</h2>

                <ul>

                    ${relatedGuides.map(related => `
                        <li>
                            <a href="guide.html?slug=${related.slug}">
                                <span aria-hidden="true">${related.icon}</span> ${escapeHtml(related.title)}
                            </a>
                        </li>
                    `).join("")}

                </ul>

            </footer>

        `
        : "";

    return `

        <article class="guide-content">

            <header class="guide-content-header">

                <span class="guide-content-category">${escapeHtml(categoryLabel)}</span>

                <h1>${escapeHtml(guide.title)}</h1>

                <p class="guide-content-summary">${escapeHtml(guide.summary)}</p>

            </header>

            ${sectionsHtml}

            ${relatedHtml}

            <a class="guide-back-link" href="guides.html">← Back to Guides</a>

        </article>

    `;

}
