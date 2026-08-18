const GAMES_SECTION_PAGES = ["games.html", "game.html"];

export function createNavLinks() {

    const currentPage =
        window.location.pathname.split("/").pop();

    const gamesIsActive =
        GAMES_SECTION_PAGES.includes(currentPage);

    return `

        <nav>

            <a
                href="games.html"
                class="${gamesIsActive ? "active" : ""}"
                ${gamesIsActive ? 'aria-current="page"' : ""}
            >Games</a>

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