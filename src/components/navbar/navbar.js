import {
    createNavLogo
} from "../nav-logo/nav-logo.js";

import {
    createNavLinks
} from "../nav-links/nav-links.js";

import {
    createPlayerWidget
} from "../player-widget/player-widget.js";

import { ENV } from "../../env.js";

const STEAM_LOGIN_URL =
    `${ENV.API_BASE_URL}/auth/steam/login`;

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
            Log in with Steam
        </a>

    `;

}