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

    getCompletedGameSlugs

} from "../utils/player/statistics/helpers/completedGames.js";

import {

    getInProgressGameSlugs

} from "../utils/player/statistics/helpers/games.js";

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

    loadGamesSection();

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

    async function loadGamesSection() {

        const container =
            document.getElementById("profile-sections");

        const completedSlugs = getCompletedGameSlugs();

        const inProgressSlugs = getInProgressGameSlugs();

        if (!completedSlugs.length && !inProgressSlugs.length) {

            container.innerHTML =
                createProfileGames({ completed: [], inProgress: [] });

            return;

        }

        container.innerHTML =
            `<p class="state-message">Loading your games…</p>`;

        try {

            const index = await getGamesIndex();

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

}

init();
