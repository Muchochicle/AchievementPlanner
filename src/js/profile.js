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

    createProfileBadges

} from "../components/profile-badges/profile-badges.js";

import {

    createProfileSettings

} from "../components/profile-settings/profile-settings.js";

import {

    equipAvatar

} from "../utils/player/avatar/avatarManager.js";

import {

    logout

} from "../utils/steam/steamSession.js";

import {

    SUPPORT_EMAIL,
    buildContactMailtoUrl

} from "../utils/contact/contactMailto.js";

import {

    attemptMailto

} from "../utils/contact/attemptMailto.js";

import {

    reconcileProgressFromProfileStats

} from "../utils/player/playerProgress.js";

import {

    recordDailyActivity

} from "../utils/player/streak/streakManager.js";

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

        // Local-only (no network) - records today's activity toward the
        // daily streak and grants any newly-earned streak badge, before
        // the very first render below so it's never a stale extra
        // "reload to see it" step (see streak/streakManager.js).
        recordDailyActivity();

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

        // Re-rendered alongside the header for the same reason: totalXP/
        // completedAchievements/completedGames/streaks can all change
        // between calls (recordDailyActivity() above, or
        // reconcileProgressFromProfileStats() once live Steam stats come
        // back below), and a newly-earned badge should show up immediately,
        // not just after a later reload.
        const badgesSection =
            document.querySelector(".profile-badges");

        if (badgesSection) {

            badgesSection.outerHTML = createProfileBadges();

        }

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

        const settingsSection =

            document.querySelector(".profile-settings");

        if (settingsSection) {

            settingsSection.outerHTML = createProfileSettings(session);

            wireProfileSettings();

        }

    }

    // Re-attaches the logout/contact handlers every time .profile-settings
    // is re-rendered (outerHTML replacement discards whatever listeners
    // were on the old nodes, same reason player-widget/nav-toggle get
    // re-wired on every navbar re-render - see layout.js's renderNavbar).
    function wireProfileSettings() {

        // Best-effort on the server call (logout() never throws - see its
        // own header comment in steamSession.js) - the redirect to
        // index.html always happens either way, since from the user's
        // point of view clicking "Log out" must always visibly do
        // something, and index.html is safe to land on regardless of
        // whether the session ended up cleared server-side.
        document
            .getElementById("settings-logout-btn")
            ?.addEventListener("click", async () => {

                await logout();

                window.location.href = "index.html";

            });

        // No backend ticket/support system exists in this project - this
        // hands off to the visitor's own email client with a pre-filled
        // subject/body instead, matching this app's "lightweight, no new
        // system" contact mechanism (see profile-settings.js's own header
        // comment, and contactMailto.js for the address/URL-building
        // logic this reuses rather than re-typing).
        document
            .getElementById("contact-form")
            ?.addEventListener("submit", event => {

                event.preventDefault();

                const form = event.target;

                // event.preventDefault() above suppresses the browser's own
                // automatic submit-time validation entirely (compounded by
                // the form's own `novalidate`, added for exactly this
                // reason - see profile-settings.js) - reportValidity() re-
                // triggers that same native required-field check and its
                // visible/accessible error UI manually, instead of silently
                // proceeding to build a mailto: link with an empty message.
                if (!form.reportValidity()) {

                    return;

                }

                const reason =
                    document.getElementById("contact-reason")?.value
                        || "Suggestion / feedback";

                const message =
                    document.getElementById("contact-message")?.value.trim()
                        || "";

                const submitBtn =
                    document.getElementById("contact-submit-btn");

                const statusEl =
                    document.getElementById("contact-form-status");

                // Disabled for the duration of the (short, fixed-timeout)
                // open-attempt below - prevents a double mailto: hand-off
                // from a second click while the first is still in flight,
                // and gives immediate feedback that the click registered at
                // all (the original bug: clicking Send could visibly do
                // nothing on a device with no mail client configured).
                if (submitBtn) {

                    submitBtn.disabled = true;
                    submitBtn.textContent = "Opening email app...";

                }

                if (statusEl) {

                    statusEl.hidden = true;

                }

                const mailtoUrl =
                    buildContactMailtoUrl({ reason, message });

                attemptMailto(mailtoUrl).then(likelyOpened => {

                    if (submitBtn) {

                        submitBtn.disabled = false;
                        submitBtn.textContent = "Send";

                    }

                    if (!statusEl) {

                        return;

                    }

                    statusEl.hidden = false;

                    // Never a bare "message sent" - attemptMailto() is a
                    // best-effort signal (see its own header comment), not
                    // a delivery confirmation this page has no way to
                    // actually obtain. Either branch repeats the real
                    // support address so the visitor always has a working
                    // fallback, regardless of which way the guess falls.
                    if (likelyOpened) {

                        statusEl.className =
                            "contact-form-status contact-form-status--success";

                        statusEl.textContent =
                            `✅ Your email app should now be open with your message ready - review it and hit send there to deliver it to ${SUPPORT_EMAIL}.`;

                    } else {

                        statusEl.className =
                            "contact-form-status contact-form-status--error";

                        statusEl.textContent =
                            `⚠️ We couldn't detect an email app opening on this device. Please email us directly at ${SUPPORT_EMAIL} instead.`;

                    }

                });

            });

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

        // Reconciles completedAchievements/completedGames/XP (and, in
        // turn, avatar/badge unlocks) against this live Steam-backed
        // aggregate - see playerProgress.js's reconcileProgressFromProfileStats
        // for why this is the fix for avatars/badges getting stuck far
        // below a player's real progress. Only runs on a successful fetch:
        // an "error"/"logged-out" result must never be treated as "this
        // player now has 0 achievements".
        if (result.status === "ready") {

            reconcileProgressFromProfileStats(result);

            refresh();

        }

        renderProfileStatsState(result);

    }

}

init();
