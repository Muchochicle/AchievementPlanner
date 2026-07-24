import { getGamesIndex, getGame } from "../../utils/gameService.js";

export async function createSearch() {

    const searchInput = document.querySelector(".hero input");
    const results = document.querySelector(".search-results");

    if (!searchInput || !results) return;

    const games = await getGamesIndex();

    searchInput.addEventListener("input", async (event) => {

        const value = event.target.value
            .trim()
            .toLowerCase();

        results.innerHTML = "";

        if (value.length === 0) {

            results.style.display = "none";
            return;

        }

        const filtered = games.filter(game =>
            game.name.toLowerCase().includes(value)
        );

        for (const gameIndex of filtered) {

            const game = await getGame(gameIndex.slug);

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

        }

        results.querySelectorAll(".search-item").forEach(item => {

            item.addEventListener("click", () => {

                const slug = item.dataset.slug;

                window.location.href = `game.html?slug=${slug}`;

            });

        });

        results.style.display =
            filtered.length ? "block" : "none";

    });

}