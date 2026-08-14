import {
    createNavLogo
} from "../nav-logo/nav-logo.js";

import {
    createNavLinks
} from "../nav-links/nav-links.js";

import {
    createPlayerWidget
} from "../player-widget/player-widget.js";

const STEAM_LOGIN_URL =
    "http://localhost:3000/auth/steam/login";

export function createNavbar(
    session = {
        logged: false
    }
) {

    const rightContent = session?.logged
        ? createPlayerWidget(session)
        : createLoginButton();

    return `

        <header class="navbar">

            <div class="container">

                <div class="navbar-left">

                    ${createNavLogo()}

                    ${createNavLinks()}

                </div>

                <div class="navbar-right">

                    ${rightContent}

                </div>

            </div>

        </header>

    `;

}

function createLoginButton() {

    return `

        <a
            href="${STEAM_LOGIN_URL}"
            class="steam-login-btn"
        >
            Iniciar sesión con Steam
        </a>

    `;

}