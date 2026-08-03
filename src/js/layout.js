import {

    createNavbar

} from "../components/navbar/navbar.js";

export function loadNavbar() {

    const navbar = document.getElementById("navbar");

    if (!navbar) return;

    navbar.innerHTML = createNavbar();

    document

        .getElementById("player-widget")

        ?.addEventListener("click", () => {

            window.location.href = "profile.html";

        });

}