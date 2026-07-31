import {

    createNavLogo

} from "../nav-logo/nav-logo.js";

import {

    createNavLinks

} from "../nav-links/nav-links.js";

import {

    createPlayerWidget

} from "../player-widget/player-widget.js";

export function createNavbar() {

    return `

        <header class="navbar">

            <div class="container">

                <div class="navbar-left">

                    ${createNavLogo()}

                    ${createNavLinks()}

                </div>

                <div class="navbar-right">

                    ${createPlayerWidget()}

                </div>

            </div>

        </header>

    `;

}