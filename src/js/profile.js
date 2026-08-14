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

    equipAvatar

} from "../utils/player/avatar/avatarManager.js";

import {

    getSteamSession

} from "../utils/steam/steamSession.js";

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

    function refresh() {

        document.querySelector(".profile-header").outerHTML =
            createProfileHeader(session);

        const avatarSelector =

            document.getElementById("avatar-selector");

        if (avatarSelector) {

            avatarSelector.onchange = event => {

                equipAvatar(event.target.value);

                refresh();

            };

        }

    }

}

init();