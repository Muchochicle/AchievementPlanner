import {
    createNavbar
} from "../components/navbar/navbar.js";

import {
    getSteamSession
} from "../utils/steam/steamSession.js";

import {
    syncPlayerProgressOnLoad
} from "../utils/player/sync/playerSync.js";

// Shared by loadNavbar (initial render) and refreshPlayerWidget (later
// re-renders once player progression can have changed) so both paths render
// and wire up #navbar identically - the click listener has to be
// reattached on every call since innerHTML replacement discards it.
function renderNavbar(navbar, session) {

    navbar.innerHTML = createNavbar(session);

    document
        .getElementById("player-widget")
        ?.addEventListener("click", () => {

            window.location.href = "profile.html";

        });

}

// Returns the resolved session so callers that also need it (game.js,
// profile.js) can reuse this one /api/me call instead of fetching it again
// themselves - every page was previously paying for two identical session
// checks on load.
export async function loadNavbar() {

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

    renderNavbar(navbar, session);

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