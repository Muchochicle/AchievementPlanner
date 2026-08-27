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
        ? `${createPlayerWidget(session)}${createLogoutButton()}`
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

                    ${createNavToggle()}

                </div>

            </div>

        </header>

    `;

}

// Mobile-only (hidden on desktop via CSS - see navbar.css) hamburger
// toggle for the primary nav links (and, when logged in, the logout
// button - see navbar.css's shared .nav-open gating). Always rendered
// after the login button/player widget in markup order, matching how it
// must read visually: account state first, menu toggle last. Wired up in
// layout.js's renderNavbar, the same place every other navbar control's
// click listener is attached, since innerHTML replacement discards it on
// every re-render.
function createNavToggle() {

    return `

        <button
            id="nav-toggle"
            class="nav-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
        >
            <span class="nav-toggle-icon"></span>
        </button>

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

// A plain <button> (not a link - this triggers a POST via fetch, not a
// navigation) wired up by layout.js's renderNavbar, matching the
// player-widget's own click-handler-attached-after-innerHTML pattern right
// below it in that file.
function createLogoutButton() {

    return `

        <button
            id="logout-btn"
            class="logout-btn"
            type="button"
        >
            Log out
        </button>

    `;

}