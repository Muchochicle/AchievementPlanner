import {

    createNavbar

} from "../navbar/navbar.js";

export function createLayout(content) {

    return `

        ${createNavbar()}

        <main>

            ${content}

        </main>

    `;

}