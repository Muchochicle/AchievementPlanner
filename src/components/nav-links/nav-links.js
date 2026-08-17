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

            <a href="#">

                Guides

            </a>

            <a href="#">

                Roadmap

            </a>

            <a href="#">

                About

            </a>

        </nav>

    `;

}