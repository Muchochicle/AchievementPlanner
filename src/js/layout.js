import {
    createNavbar
} from "../components/navbar/navbar.js";

import {
    getSteamSession
} from "../utils/steam/steamSession.js";

export async function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

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

}