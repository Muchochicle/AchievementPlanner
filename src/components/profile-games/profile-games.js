import { createCatalogCard } from "../catalog-card/catalog-card.js";

// note is optional - only "In Progress" carries one today (it's still
// scoped to games opened in AchievementPlanner; see profile.js). Completed
// is sourced from the same full-library Steam scan as the Profile "100%"
// stat, so it needs no such caveat.
function renderGroup(title, games, emptyText, note) {

    const noteHtml = note
        ? `<p class="profile-games-note">${note}</p>`
        : "";

    if (!games.length) {

        return `

            <div class="profile-games-group">

                <h3>${title}</h3>

                ${noteHtml}

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

            ${noteHtml}

            <div class="profile-games-grid">

                ${games.map(createCatalogCard).join("")}

            </div>

        </div>

    `;

}

export function createProfileGames({ completed = [], inProgress = [] } = {}) {

    // Completed always wins: a game the live Steam scan already confirms
    // as 100% complete must never also render under "In Progress". Stale
    // local planner-{slug} progress (see helpers/games.js
    // getInProgressGameSlugs, still localStorage-based) can outlive the
    // moment Steam confirms completion, if the game is never reopened
    // here again - so this dedup has to happen here, not just upstream,
    // to guarantee the two rendered lists never share a game regardless
    // of what the caller passes in.
    const completedSlugs = new Set(
        completed.map(game => game.slug)
    );

    const dedupedInProgress = inProgress.filter(
        game => !completedSlugs.has(game.slug)
    );

    if (!completed.length && !dedupedInProgress.length) {

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
                dedupedInProgress,
                "No games in progress right now.",
                "Only games you've opened in AchievementPlanner are tracked here."
            )}

        </section>

    `;

}
