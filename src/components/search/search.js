import { escapeHtml } from "../../utils/format/escapeHtml.js";

// games is the already-fetched catalog index - the caller (app.js) already
// requested it for the Popular Games grid, so this reuses that instead of
// issuing a second /api/games request for the same data on the same load.
export function createSearch(games) {

    const searchInput = document.querySelector(".hero input");
    const results = document.querySelector(".search-results");

    if (!searchInput || !results) return;

    searchInput.addEventListener("input", (event) => {

        const value = event.target.value
            .trim()
            .toLowerCase();

        results.innerHTML = "";

        if (!value) {

            results.style.display = "none";
            return;

        }

        const filtered = games
            .filter(game =>
                game.title.toLowerCase().includes(value)
            )
            .slice(0, 5);

        filtered.forEach(game => {

            const hasPlanner = !!game.hasPlanner;

            const owned = game.owned !== false;

            // difficulty/completionTime are both optional even on a
            // planner-having game (see gameMapper.js's `planner?.difficulty
            // ?? null` / `planner?.completionTime ?? null`) - matches
            // catalog-card.js's own guards for these same fields, so a
            // catalog entry missing either never crashes or shows a
            // literal "null" in the search dropdown.
            const hasDifficulty =
                typeof game.difficulty === "number";

            const hasCompletionTime =
                typeof game.completionTime?.min === "number" &&
                typeof game.completionTime?.max === "number";

            const metaParts = [
                hasDifficulty ? `⭐ ${game.difficulty}/10` : "",
                hasCompletionTime ? `⏱ ${game.completionTime.min}-${game.completionTime.max} h` : ""
            ].filter(Boolean);

            const meta = hasPlanner
                ? (metaParts.length ? metaParts.join(" · ") : "")
                : `Planner coming soon`;

            const itemClass = owned
                ? "search-item"
                : "search-item search-item--unowned";

            const ownedBadge = owned
                ? ""
                : `<span class="search-owned-badge">Not owned</span>`;

            results.innerHTML += `

                <div
                    class="${itemClass}"
                    data-slug="${game.slug}"
                    role="button"
                    tabindex="0"
                    aria-label="${escapeHtml(game.title)}${owned ? "" : " (not owned)"}"
                >

                    <img
                        src="${escapeHtml(game.image)}"
                        alt=""
                    >

                    <div class="search-info">

                        <strong>${escapeHtml(game.title)}</strong>

                        <small>

                            ${meta}

                        </small>

                    </div>

                    ${ownedBadge}

                </div>

            `;

        });

        document.querySelectorAll(".search-item").forEach(item => {

            const goToGame = () => {

                window.location.href =
                    `game.html?slug=${item.dataset.slug}`;

            };

            item.onclick = goToGame;

            item.addEventListener("keydown", event => {

                if (event.key !== "Enter" && event.key !== " ") return;

                event.preventDefault();
                goToGame();

            });

        });

        results.style.display =
            filtered.length ? "block" : "none";

    });

}