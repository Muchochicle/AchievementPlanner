import { createCatalogCard } from "../catalog-card/catalog-card.js";

// headerExtra is optional - only "Recently Played" carries one today (its
// "View all ->" link to the Games page). Completed and Recently Played are
// both sourced from live Steam data (the same full-library scan behind the
// Profile "100%" stat, and Steam's own rtime_last_played respectively), so
// neither needs a "only games opened here are tracked" caveat any more.
function renderGroup(title, games, emptyText, headerExtra) {

    const headerExtraHtml = headerExtra ?? "";

    if (!games.length) {

        return `

            <div class="profile-games-group">

                <h3>${title}${headerExtraHtml}</h3>

                <p class="profile-games-empty">${emptyText}</p>

            </div>

        `;

    }

    return `

        <div class="profile-games-group">

            <h3>

                ${title}
                <span class="profile-games-count">${games.length}</span>
                ${headerExtraHtml}

            </h3>

            <div class="profile-games-grid">

                ${games.map(createCatalogCard).join("")}

            </div>

        </div>

    `;

}

// completed and recentlyPlayed are NOT deduplicated against each other -
// unlike the old Completed/In-Progress split (where "in progress" and
// "100% complete" were mutually exclusive by definition), a fully completed
// game the player keeps returning to is legitimately both 100% complete
// and recently played, so it can appear in both groups.
export function createProfileGames({ completed = [], recentlyPlayed = [] } = {}) {

    // Completed itself is still deduplicated by slug: reduceProfileStats'
    // completedGameSlugs is built straight from owned games' slugs, which
    // are normally unique but could in principle collide (two different
    // Steam appids deriving the same slug - see gameMapper.js), which
    // would otherwise render the same completed game twice. Kept even
    // though the cross-section (vs. Recently Played) dedup above it was
    // removed - that one no longer applies (see comment above), this one
    // is a different, still-valid guarantee.
    const seenSlugs = new Set();

    const dedupedCompleted = completed.filter(game => {

        if (seenSlugs.has(game.slug)) {

            return false;

        }

        seenSlugs.add(game.slug);
        return true;

    });

    if (!dedupedCompleted.length && !recentlyPlayed.length) {

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
                dedupedCompleted,
                "No fully completed games yet."
            )}

            ${renderGroup(
                "Recently Played",
                recentlyPlayed,
                "No recent play activity found.",
                `<a class="profile-games-view-all" href="games.html">View all →</a>`
            )}

        </section>

    `;

}
