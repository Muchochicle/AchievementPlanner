import {

    loadNavbar

} from "./layout.js";

import {

    createProfilePage

} from "../components/profile-page/profile-page.js";

import {

    createProfileHeader

} from "../components/profile-header/profile-header.js";

import {

    createProfileGames

} from "../components/profile-games/profile-games.js";

import {

    equipAvatar

} from "../utils/player/avatar/avatarManager.js";

import {

    getSteamSession

} from "../utils/steam/steamSession.js";

import {

    getGamesIndex

} from "../utils/gameService.js";

import {

    getInProgressGameSlugs

} from "../utils/player/statistics/helpers/games.js";

import {

    fetchProfileStats

} from "../utils/player/statistics/profileStatsClient.js";

import {

    renderProfileStatsState

} from "../components/profile-stats/profile-stats.js";

async function init() {

    loadNavbar();

    document.getElementById(

        "profile-content"

    ).innerHTML =

        createProfilePage();

    let session = {
        logged: false
    };

    try {

        session = await getSteamSession();

    } catch (error) {

        console.error(
            "Unable to check Steam session:",
            error
        );

    }

    refresh();

    // Completed games and the stat cards both need the same live
    // /api/profile/stats answer (it's the single source of truth for Steam
    // completion - see profileStats.js reduceProfileStats). Starting one
    // fetch here and sharing the Promise means both sections load
    // concurrently, exactly like before, but the backend only computes the
    // full-library scan once per page load.
    const statsPromise = session.logged
        ? fetchProfileStats()
        : Promise.resolve({ status: "logged-out" });

    loadGamesSection(statsPromise);

    loadProfileStats(statsPromise);

    function refresh() {

        document.querySelector(".profile-header").outerHTML =
            createProfileHeader(session);

        const avatarPicker =

            document.getElementById("avatar-picker");

        if (avatarPicker) {

            avatarPicker.onclick = event => {

                const tile =
                    event.target.closest(".avatar-tile");

                if (!tile || tile.disabled) {

                    return;

                }

                equipAvatar(tile.dataset.avatarId);

                refresh();

            };

        }

    }

    // Completed: sourced from the live Steam-backed statsPromise (the same
    // full-library scan behind the "100%" stat card), so a game the user
    // 100%-completed in Steam but never opened on AchievementPlanner still
    // shows up here. In Progress: still sourced from
    // localStorage["planner-{slug}"] via getInProgressGameSlugs() -
    // intentionally unchanged, since that data is only ever written by
    // visiting a game's page (see storage.js saveProgress) and nothing
    // today computes an equivalent "in progress" answer from the full
    // library scan.
    async function loadGamesSection(statsPromise) {

        const container =
            document.getElementById("profile-sections");

        const inProgressSlugs = getInProgressGameSlugs();

        if (!inProgressSlugs.length && !session.logged) {

            container.innerHTML =
                createProfileGames({ completed: [], inProgress: [] });

            return;

        }

        container.innerHTML =
            `<p class="state-message">Loading your games…</p>`;

        try {

            const [index, statsResult] = await Promise.all([
                getGamesIndex(),
                statsPromise
            ]);

            const completedSlugs = statsResult.status === "ready"
                ? (statsResult.completedGameSlugs ?? [])
                : [];

            const bySlug = new Map(
                index.map(game => [game.slug, game])
            );

            const completed = completedSlugs

                .map(slug => bySlug.get(slug))

                .filter(Boolean);

            const inProgress = inProgressSlugs

                .map(slug => bySlug.get(slug))

                .filter(Boolean);

            container.innerHTML =
                createProfileGames({ completed, inProgress });

            container.onclick = event => {

                const card =
                    event.target.closest(".catalog-card");

                if (!card) {

                    return;

                }

                window.location.href =
                    `game.html?slug=${card.dataset.slug}`;

            };

        } catch (error) {

            console.error(
                "Unable to load game progress:",
                error
            );

            container.innerHTML =
                `<p class="state-message">We couldn't load your game progress right now. Please try again later.</p>`;

        }

    }

    // Achievements/Games/100% are Steam-live now (see profileStatsClient.js)
    // and intentionally independent of the rest of this page: a failed or
    // unavailable aggregate must never block or hide the header, avatar
    // picker, badges, or the games list above.
    async function loadProfileStats(statsPromise) {

        renderProfileStatsState({ status: "loading" });

        if (!session.logged) {

            renderProfileStatsState({ status: "logged-out" });

            return;

        }

        const result = await statsPromise;

        if (result.status === "error") {

            console.error(
                "Unable to load profile statistics:",
                result.error
            );

        }

        renderProfileStatsState(result);

    }

}

init();
