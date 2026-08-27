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

                    <div class="navbar-account">

                        ${rightContent}

                    </div>

                    ${createNavToggle()}

                </div>

            </div>

        </header>

    `;

}

// Mobile-only (hidden on desktop via CSS - see navbar.css) hamburger
// toggle for the primary nav links dropdown (see navbar.css's .nav-open
// gating). A sibling of .navbar-account, not a child of it - the mobile
// layout (navbar.css) uses CSS Grid with `order` to place this on the far
// left, the logo centered, and .navbar-account (login button, or player
// widget + logout button) on the right, independent of this markup order.
// Wired up in layout.js's renderNavbar, the same place every other navbar
// control's click listener is attached, since innerHTML replacement
// discards it on every re-render.
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
            Log in<span class="steam-login-btn-suffix"> with Steam</span>
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