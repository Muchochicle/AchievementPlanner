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

    getGamesIndex

} from "../utils/gameService.js";

import {

    getRecentlyPlayedGames

} from "../utils/player/statistics/helpers/recentlyPlayed.js";

import {

    fetchProfileStats

} from "../utils/player/statistics/profileStatsClient.js";

import {

    renderProfileStatsState

} from "../components/profile-stats/profile-stats.js";

async function init() {

    // Not awaited immediately - navbar rendering (and the /api/me check it
    // performs) runs in parallel with building the initial page shell
    // below. The same resolved session is reused here instead of a second,
    // redundant /api/me call.
    const sessionPromise = loadNavbar();

    const profileContent =
        document.getElementById("profile-content");

    profileContent.innerHTML =

        createProfilePage();

    const session = await sessionPromise;

    // Isolated from loadGamesSection/loadProfileStats below (each of which
    // already has its own independent failure handling): unlike every
    // other page-controller in this app, init() here had no safety net at
    // all around refresh() (renders the header + wires the avatar picker)
    // - a throw would leave the page stuck on whatever partial state it
    // happened to be in, with the two sections below never even attempting
    // to load (since they're unguarded statements after this point)
    // (Phase 69).
    try {

        refresh();

    } catch (error) {

        console.error(error);

        profileContent.innerHTML =
            `<p class="state-message">We couldn't load your profile right now. Please try again later.</p>`;

        return;

    }

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
    // shows up here. Recently Played: sourced from the same live games
    // index, ordered by Steam's own lastPlayed (rtime_last_played, see
    // gameMapper.js) via getRecentlyPlayedGames() - no longer
    // localStorage["planner-{slug}"]-based, so a game played on Steam but
    // never opened in AchievementPlanner still shows up here too.
    async function loadGamesSection(statsPromise) {

        const container =
            document.getElementById("profile-sections");

        if (!session.logged) {

            container.innerHTML =
                createProfileGames({ completed: [], recentlyPlayed: [] });

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

            const recentlyPlayed = getRecentlyPlayedGames(index);

            container.innerHTML =
                createProfileGames({ completed, recentlyPlayed });

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
