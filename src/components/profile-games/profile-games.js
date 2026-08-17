import { createCatalogCard } from "../catalog-card/catalog-card.js";

function renderGroup(title, games, emptyText) {

    if (!games.length) {

        return `

            <div class="profile-games-group">

                <h3>${title}</h3>

                <p class="profile-games-empty">${emptyText}</p>

            </div>

        `;

    }

    return `

        <div class="profile-games-group">

            <h3>

                ${title}
                <span class="profile-games-count">${games.length}</span>

            </h3>

            <div class="profile-games-grid">

                ${games.map(createCatalogCard).join("")}

            </div>

        </div>

    `;

}

export function createProfileGames({ completed = [], inProgress = [] } = {}) {

    if (!completed.length && !inProgress.length) {

        return `

            <section class="profile-games">

                <h2>Your Games</h2>

                <p class="profile-games-empty">

                    No game progress yet. Start playing to see your games here.

                </p>

            </section>

        `;

    }

    return `

        <section class="profile-games">

            <h2>Your Games</h2>

            ${renderGroup(
                "Completed",
                completed,
                "No fully completed games yet."
            )}

            ${renderGroup(
                "In Progress",
                inProgress,
                "No games in progress right now."
            )}

        </section>

    `;

}
