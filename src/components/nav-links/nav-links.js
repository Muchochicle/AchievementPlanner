const GAMES_SECTION_PAGES = ["games.html", "game.html"];
const PODIUMS_SECTION_PAGES = ["podiums.html"];
const GUIDES_SECTION_PAGES = ["guides.html", "guide.html"];
const ROADMAP_SECTION_PAGES = ["roadmap.html"];
const ABOUT_SECTION_PAGES = ["about.html"];

export function createNavLinks() {

    const currentPage =
        window.location.pathname.split("/").pop();

    const gamesIsActive =
        GAMES_SECTION_PAGES.includes(currentPage);

    const podiumsIsActive =
        PODIUMS_SECTION_PAGES.includes(currentPage);

    const guidesIsActive =
        GUIDES_SECTION_PAGES.includes(currentPage);

    const roadmapIsActive =
        ROADMAP_SECTION_PAGES.includes(currentPage);

    const aboutIsActive =
        ABOUT_SECTION_PAGES.includes(currentPage);

    return `

        <nav id="nav-menu" aria-label="Primary">

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

            <a
                href="guides.html"
                class="${guidesIsActive ? "active" : ""}"
                ${guidesIsActive ? 'aria-current="page"' : ""}
            >Guides</a>

            <a
                href="roadmap.html"
                class="${roadmapIsActive ? "active" : ""}"
                ${roadmapIsActive ? 'aria-current="page"' : ""}
            >Roadmap</a>

            <a
                href="about.html"
                class="${aboutIsActive ? "active" : ""}"
                ${aboutIsActive ? 'aria-current="page"' : ""}
            >About</a>

        </nav>

    `;

}