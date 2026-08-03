import {

    loadNavbar

} from "./layout.js";

import {

    createProfilePage

} from "../components/profile-page/profile-page.js";

function init() {

    loadNavbar();

    document.getElementById(

        "profile-content"

    ).innerHTML =

        createProfilePage();

}

init();