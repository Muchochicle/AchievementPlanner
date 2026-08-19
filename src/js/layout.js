import {
    createNavbar
} from "../components/navbar/navbar.js";

import {
    getSteamSession
} from "../utils/steam/steamSession.js";

// Returns the resolved session so callers that also need it (game.js,
// profile.js) can reuse this one /api/me call instead of fetching it again
// themselves - every page was previously paying for two identical session
// checks on load.
export async function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return { logged: false };

    // Estado inicial mientras comprobamos la sesión
    navbar.innerHTML = createNavbar({
        logged: false
    });

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

    navbar.innerHTML = createNavbar(session);

    document
        .getElementById("player-widget")
        ?.addEventListener("click", () => {

            window.location.href = "profile.html";

        });

    return session;

}