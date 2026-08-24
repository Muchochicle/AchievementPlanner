import { loadNavbar } from "./layout.js";
import { fetchGlobalPodium } from "../utils/podiums/podiumsClient.js";
import { createPodiumCard } from "../components/podium/podium.js";
import { GLOBAL_PODIUM_CATEGORIES } from "../utils/podiums/podiumCategories.js";

async function init() {

    loadNavbar();

    const nav = document.getElementById("podiums-nav");
    const container = document.getElementById("podiums-content");

    if (!container) {

        return;

    }

    // A quick "jump to a ranking" index, so a returning visitor who only
    // cares about one leaderboard doesn't have to scroll past the rest -
    // real, keyboard-navigable links, not just a visual list.
    if (nav) {

        nav.innerHTML = GLOBAL_PODIUM_CATEGORIES

            .map(config => `
                <a href="#podium-${config.key}">
                    <span aria-hidden="true">${config.icon}</span> ${config.title}
                </a>
            `)

            .join("");

    }

    // One placeholder section per category - all five fetch in parallel,
    // each rendering independently the moment it's ready rather than
    // waiting on the slowest one (see the loading state each starts in
    // below).
    container.innerHTML = GLOBAL_PODIUM_CATEGORIES

        .map(config => `<div id="podium-${config.key}" class="podiums-nav-target"></div>`)

        .join("");

    for (const config of GLOBAL_PODIUM_CATEGORIES) {

        const section = document.getElementById(`podium-${config.key}`);

        section.innerHTML = createPodiumCard(config, { status: "loading" });

        fetchGlobalPodium(config.key).then(state => {

            if (state.status === "error") {

                console.error(`Unable to load "${config.key}" leaderboard:`, state.error);

            }

            section.innerHTML = createPodiumCard(config, state);

        }).catch(error => {

            // fetchGlobalPodium itself never rejects (see podiumsClient.js) -
            // this only guards the .then() callback's own body (e.g.
            // createPodiumCard) throwing, so a rendering exception can't
            // strand this section on "Loading..." forever with no visible
            // error (Finding 24, PHASE_53_AUDIT.md). renderBody's "error"
            // branch is a fixed, static message with no dependency on
            // whatever data caused the original failure, so this is safe to
            // render even if the throw came from malformed state.
            console.error(`Unable to render "${config.key}" leaderboard:`, error);

            section.innerHTML = createPodiumCard(config, { status: "error", error });

        });

    }

}

init();
