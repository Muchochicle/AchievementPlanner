import { getGamesIndex, getGame } from "../../utils/gameService.js";

export async function createSearch() {

    const searchInput = document.querySelector(".hero input");
    const results = document.querySelector(".search-results");

    if (!searchInput || !results) return;

    const index = await getGamesIndex();

    const games = [];

    for (const gameIndex of index) {

        games.push(await getGame(gameIndex.slug));

    }

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
                game.name.toLowerCase().includes(value)
            )
            .slice(0, 5);

        filtered.forEach(game => {

            results.innerHTML += `

                <div
                    class="search-item"
                    data-slug="${game.slug}"
                >

                    <img
                        src="${game.image}"
                        alt="${game.name}"
                    >

                    <div class="search-info">

                        <strong>${game.name}</strong>

                        <small>

                            ⭐ ${game.difficulty}/10
                            ·
                            ⏱ ${game.completionTime.min}-${game.completionTime.max} h

                        </small>

                    </div>

                </div>

            `;

        });

        document.querySelectorAll(".search-item").forEach(item => {

            item.onclick = () => {

                window.location.href =
                    `game.html?slug=${item.dataset.slug}`;

            };

        });

        results.style.display =
            filtered.length ? "block" : "none";

    });

}