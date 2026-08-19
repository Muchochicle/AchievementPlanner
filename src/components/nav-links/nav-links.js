const GAMES_SECTION_PAGES = ["games.html", "game.html"];
const PODIUMS_SECTION_PAGES = ["podiums.html"];

export function createNavLinks() {

    const currentPage =
        window.location.pathname.split("/").pop();

    const gamesIsActive =
        GAMES_SECTION_PAGES.includes(currentPage);

    const podiumsIsActive =
        PODIUMS_SECTION_PAGES.includes(currentPage);

    return `

        <nav>

            <a
                href="games.html"
                class="${gamesIsActive ? "active" : ""}"
                ${gamesIsActive ? 'aria-current="page"' : ""}
            >Games</a>

            <a
                href="podiums.html"
                class="${podiumsIsActive ? "active" : ""}"
                ${podiumsIsActive ? 'aria-current="page"' : ""}
            >Podiums</a>

            <span class="nav-link-disabled" aria-disabled="true">
                Guides
                <span class="nav-link-soon">Soon</span>
            </span>

            <span class="nav-link-disabled" aria-disabled="true">
                Roadmap
                <span class="nav-link-soon">Soon</span>
            </span>

            <span class="nav-link-disabled" aria-disabled="true">
                About
                <span class="nav-link-soon">Soon</span>
            </span>

        </nav>

    `;

}