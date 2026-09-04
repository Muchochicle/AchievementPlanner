import { loadNavbar } from "./layout.js";
import { fetchGlobalPodium, fetchProgressionPodium } from "../utils/podiums/podiumsClient.js";
import { createPodiumCard } from "../components/podium/podium.js";
import { ALL_PODIUM_CATEGORIES } from "../utils/podiums/podiumCategories.js";
import { createSupportCallout } from "../components/support-callout/support-callout.js";

// Which client fn fetches a given category, by its `kind` (see
// podiumCategories.js). Steam-backed categories hit /global/:category;
// the Task 6 progression categories hit /progression/:metric.
function fetchFor(config) {

    return config.kind === "progression"
        ? fetchProgressionPodium(config.key)
        : fetchGlobalPodium(config.key);

}

// Preserves ALL_PODIUM_CATEGORIES' order while splitting it into its
// consecutive `group` runs, so each group renders under one heading.
function groupCategories(categories) {

    const groups = [];

    for (const config of categories) {

        let group = groups[groups.length - 1];

        if (!group || group.name !== config.group) {

            group = { name: config.group, items: [] };
            groups.push(group);

        }

        group.items.push(config);

    }

    return groups;

}

async function init() {

    loadNavbar();

    const nav = document.getElementById("podiums-nav");
    const container = document.getElementById("podiums-content");
    const supportMount = document.getElementById("support-callout");

    if (!container) {

        return;

    }

    const groups = groupCategories(ALL_PODIUM_CATEGORIES);

    // A quick "jump to a ranking" index - real, keyboard-navigable links,
    // grouped the same way the cards below are.
    if (nav) {

        nav.innerHTML = groups

            .map(group => `
                <div class="podiums-nav-group">
                    <span class="podiums-nav-group-label">${group.name}</span>
                    ${group.items.map(config => `
                        <a href="#podium-${config.key}">
                            <span aria-hidden="true">${config.icon}</span> ${config.title}
                        </a>
                    `).join("")}
                </div>
            `)

            .join("");

    }

    // One <section> per group: a compact heading directly above that
    // group's own card grid. The grid lives on the inner
    // .podiums-group-grid, NOT on #podiums-content - when #podiums-content
    // itself was the grid, each .podiums-group-title was just another grid
    // item, so the heading landed in the top-left cell with the first card
    // beside it and a large empty band underneath (Task: rankings visual
    // layout). Each placeholder section still starts in its loading state
    // and each fetch resolves independently (see PHASE_60_AUDIT.md for the
    // aria-live rationale, and PHASE_53_AUDIT.md Finding 24 for the
    // per-section .catch()).
    container.innerHTML = groups

        .map(group => `
            <section class="podiums-group">
                <h2 class="podiums-group-title">${group.name}</h2>
                <div class="podiums-group-grid">
                    ${group.items.map(config => `<div id="podium-${config.key}" class="podiums-nav-target" aria-live="polite" aria-atomic="true"></div>`).join("")}
                </div>
            </section>
        `)

        .join("");

    for (const config of ALL_PODIUM_CATEGORIES) {

        const section = document.getElementById(`podium-${config.key}`);

        section.innerHTML = createPodiumCard(config, { status: "loading" });

        fetchFor(config).then(state => {

            if (state.status === "error") {

                console.error(`Unable to load "${config.key}" leaderboard:`, state.error);

            }

            section.innerHTML = createPodiumCard(config, state);

        }).catch(error => {

            // fetchFor() itself never rejects (see podiumsClient.js) - this
            // only guards the .then() callback's own body throwing, so a
            // rendering exception can't strand this section on "Loading..."
            // forever (Finding 24, PHASE_53_AUDIT.md).
            console.error(`Unable to render "${config.key}" leaderboard:`, error);

            section.innerHTML = createPodiumCard(config, { status: "error", error });

        });

    }

    // Task 6: the honest "Support Achievement Planner" section, in place of
    // a (fake) donations leaderboard - see support-callout.js.
    if (supportMount) {

        supportMount.innerHTML = createSupportCallout();

    }

}

init();
