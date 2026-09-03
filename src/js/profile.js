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

    submitContactMessage

} from "../utils/contact/contactClient.js";

import {

    isValidEmail

} from "../utils/contact/validateEmail.js";

import {

    reconcileProgressFromProfileStats

} from "../utils/player/playerProgress.js";

import {

    recordDailyActivity

} from "../utils/player/streak/streakManager.js";

import {

    getGamesIndex,
    clearGamesIndexCache

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

                // Task 9: drop the cached games index so the next visit to
                // the Games page can't briefly show this account's owned-
                // library view to the now-logged-out visitor.
                clearGamesIndexCache();

                window.location.href = "index.html";

            });

        // Task 10: the form now submits to a real backend endpoint
        // (POST /api/contact) that persists the message and confirms
        // receipt, so the normal path can honestly say "received" - which
        // the old mailto:-only mechanism never could. The visitor's own
        // email client is only used as a fallback, when that endpoint
        // can't be reached at all; only then can the "couldn't detect an
        // email app" message ever appear. See contactClient.js and
        // profile-settings.js for the full reasoning.
        document
            .getElementById("contact-form")
            ?.addEventListener("submit", async event => {

                event.preventDefault();

                const reasonEl = document.getElementById("contact-reason");
                const nameEl = document.getElementById("contact-name");
                const emailEl = document.getElementById("contact-email");
                const messageEl = document.getElementById("contact-message");
                const submitBtn = document.getElementById("contact-submit-btn");
                const statusEl = document.getElementById("contact-form-status");

                const reason = reasonEl?.value || "Suggestion / feedback";
                const name = nameEl?.value.trim() || "";
                const email = emailEl?.value.trim() || "";
                const message = messageEl?.value.trim() || "";

                const showStatus = (kind, text) => {

                    if (!statusEl) {

                        return;

                    }

                    statusEl.hidden = false;
                    statusEl.className = `contact-form-status contact-form-status--${kind}`;
                    statusEl.textContent = text;

                };

                // Validate here rather than via form.reportValidity():
                // the email field is type="email", so reportValidity()
                // would fire the browser's own generic bubble for a
                // malformed address and short-circuit before our own,
                // friendlier message ("...clear the field if you don't
                // need a reply") could show. Message is the only required
                // field; email is optional but, when present, must look
                // like an address (never silently dropped).
                if (!message) {

                    showStatus("error", "Please enter a message before sending.");
                    messageEl?.focus();
                    return;

                }

                if (email && !isValidEmail(email)) {

                    showStatus("error", "That email address doesn't look right. Fix it, or clear the field if you don't need a reply.");
                    emailEl?.focus();
                    return;

                }

                if (statusEl) {

                    statusEl.hidden = true;

                }

                if (submitBtn) {

                    submitBtn.disabled = true;
                    submitBtn.textContent = "Sending…";

                }

                const result = await submitContactMessage({ reason, message, email, name });

                if (submitBtn) {

                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send message";

                }

                // 1. Genuinely received and stored by the backend - the
                //    only branch that may say "received", and it's true.
                if (result.status === "ok") {

                    const ref = result.id ? ` (ref #${result.id})` : "";

                    showStatus(
                        "success",
                        result.canReply
                            ? `✅ Message received${ref}. We'll get back to you at ${email} as soon as we can.`
                            : `✅ Message received${ref}. Thanks! We can't reply directly since no email was provided, but every message is read.`
                    );

                    if (messageEl) {

                        messageEl.value = "";

                    }

                    return;

                }

                // 2. The server rejected the input (e.g. an email format
                //    its stricter check caught). Show its reason inline;
                //    nothing was sent, so no fallback.
                if (result.status === "invalid") {

                    showStatus("error", `⚠️ ${result.message}`);
                    return;

                }

                // 3. Couldn't reach the backend at all. NOW fall back to
                //    the visitor's own email client - and only describe
                //    what actually happens. The "couldn't detect an email
                //    app" line is reachable only from here: backend
                //    unreachable AND no mail client opened.
                console.error("Contact submission failed, falling back to mailto:", result.error);

                showStatus("info", "Couldn't reach our server just now — opening your email app instead…");

                if (submitBtn) {

                    submitBtn.disabled = true;
                    submitBtn.textContent = "Opening email app…";

                }

                const likelyOpened = await attemptMailto(
                    buildContactMailtoUrl({ reason, message })
                );

                if (submitBtn) {

                    submitBtn.disabled = false;
                    submitBtn.textContent = "Send message";

                }

                if (likelyOpened) {

                    showStatus(
                        "success",
                        `✅ Your email app was opened with your message ready — review it and hit send there to deliver it to ${SUPPORT_EMAIL}.`
                    );

                } else {

                    showStatus(
                        "error",
                        `⚠️ We couldn't reach our server and couldn't open an email app on this device. Please email us directly at ${SUPPORT_EMAIL}.`
                    );

                }

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
                // Task 9: share the short-lived games-index cache with the
                // Games page. loadGamesSection only runs for a logged-in
                // session, so the cache key is always the logged-in one.
                getGamesIndex({ loggedIn: true }),
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
