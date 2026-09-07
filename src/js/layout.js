import {
    createNavbar
} from "../components/navbar/navbar.js";

import {
    getSteamSession
} from "../utils/steam/steamSession.js";

import {
    syncPlayerProgressOnLoad
} from "../utils/player/sync/playerSync.js";

import {
    reconcileProgressionOnLoad
} from "../utils/player/statistics/progressionReconciler.js";

import {
    recordDailyActivity
} from "../utils/player/streak/streakManager.js";

// Shared by loadNavbar (initial render) and refreshPlayerWidget (later
// re-renders once player progression can have changed) so both paths render
// and wire up #navbar identically - the click listener has to be
// reattached on every call since innerHTML replacement discards it.
function renderNavbar(navbar, session) {

    navbar.innerHTML = createNavbar(session);

    // The freshly-rendered #nav-toggle button always starts collapsed
    // (aria-expanded="false" - see navbar.js), so this class (which lives
    // on the persistent #navbar container, not the replaced innerHTML)
    // must be cleared on every re-render too - otherwise a re-render that
    // happens to fire while the mobile menu is open (refreshPlayerWidget,
    // e.g. from a poller cycle) would leave the dropdown visually open
    // with a toggle button that now claims it's closed.
    navbar.classList.remove("nav-open");

    document
        .getElementById("nav-toggle")
        ?.addEventListener("click", () => {

            const isOpen = navbar.classList.toggle("nav-open");

            document
                .getElementById("nav-toggle")
                .setAttribute("aria-expanded", String(isOpen));

        });

    document
        .getElementById("player-widget")
        ?.addEventListener("click", () => {

            window.location.href = "profile.html";

        });

    // Logout itself is no longer wired up here - it moved out of the
    // navbar entirely and into the Profile page's Settings section (see
    // src/js/profile.js and components/profile-settings/profile-settings.js).
    // The navbar stays focused on navigation and the compact player-widget.

}

// Returns the resolved session so callers that also need it (game.js,
// profile.js) can reuse this one /api/me call instead of fetching it again
// themselves - every page was previously paying for two identical session
// checks on load.
//
// reconcileProgression (default true): after the session is known, kick a
// throttled, non-blocking progression reconcile (see
// progressionReconciler.js) so a logged-in visitor's XP/level/avatars/
// badges catch up to their real Steam-wide totals on *any* page, not only
// if they open Profile. Pages that already fetch that aggregate themselves
// pass false and reconcile from their own data instead (games.js via
// /api/profile/game-stats, profile.js via getProfileStatsShared) - so the
// reconcile fetch happens at most once per page load, never duplicated.
export async function loadNavbar({ reconcileProgression = true } = {}) {

    const navbar = document.getElementById("navbar");

    if (!navbar) return { logged: false };

    // Initial state while the session check is in flight
    renderNavbar(navbar, { logged: false });

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

    // Awaited before the "real" render below (rather than fired in the
    // background) so the navbar's player-widget paints with this
    // account's synced server progress on the very first render, instead
    // of briefly showing stale local state and only catching up on a
    // later refreshPlayerWidget() call. syncPlayerProgressOnLoad() never
    // throws, and is a no-op for a logged-out session, so this never
    // delays or breaks the logged-out path.
    await syncPlayerProgressOnLoad(session);

    // The AchievementPlanner daily-activity streak (streak/streakManager.js)
    // - counted here, on the shared load path every page runs, so ANY page
    // visited while signed in registers the day. It used to be recorded
    // only in profile.js, so a signed-in visitor who used the site daily
    // but never opened their Profile kept a streak of 0. Runs after the
    // sync above so it advances the freshly-pulled server state (and gets
    // pushed back up via savePlayer -> syncBus), and is gated on a real
    // session - a signed-out visitor's local progress is never sent
    // anywhere, so a streak for them would be meaningless. Idempotent
    // within a calendar day and defensively wrapped: a bug here must never
    // break the navbar on every page.
    if (session?.logged) {

        try {

            recordDailyActivity();

        } catch (error) {

            console.error("Unable to record daily activity:", error);

        }

    }

    renderNavbar(navbar, session);

    // Fire-and-forget: never delays the navbar or the page. A no-op while
    // logged out or when the throttle checkpoint is still fresh; on the
    // rare load that actually reconciles, refresh the player-widget in
    // place only if something moved (reconcileProgressFromProfileStats is
    // monotonic, so "changed" is false once a player is caught up).
    if (reconcileProgression) {

        reconcileProgressionOnLoad(session)
            .then(result => {

                if (result?.changed) {

                    refreshPlayerWidget(session);

                }

            })
            .catch(error => {

                console.error("Unable to reconcile progression:", error);

            });

    }

    return session;

}

// Re-renders the player-widget from the latest localStorage player state
// (see utils/player/player.js) using the already-resolved session - never
// re-checks the Steam session itself, since the caller (game.js) already
// has it from loadNavbar's return value. Callers should invoke this
// whenever XP/level/title/badges/avatar may have changed while the page
// stayed open (initial load's syncAchievementCompletion, and every
// Phase-44 poller cycle that runs it again) - without this, the widget
// only ever reflects player state as of the moment the page first loaded
// (see PHASE_46_AUDIT.md, Finding 1). A no-op when logged out, since
// there's no player widget to refresh in that case.
export function refreshPlayerWidget(session) {

    const navbar = document.getElementById("navbar");

    if (!navbar || !session?.logged) return;

    renderNavbar(navbar, session);

}