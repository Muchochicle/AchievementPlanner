import { createSteamAchievementCard } from "../steam-achievement-card/steam-achievement-card.js";
import { createAchievementFilters } from "../achievement-filters/achievement-filters.js";
import { getMergedAchievementStats } from "../../utils/planner/achievement/completion.js";

// Single source for the card-grid markup, shared by the initial full-list
// render below and by game.js's live refresh (which only needs to
// regenerate this container - not the header/filters around it - after
// polling brings in fresh game.mergedAchievements). No completion logic
// lives here; createSteamAchievementCard/isEntryCompleted stay the only
// resolver, called fresh each time this runs.
export function createSteamAchievementCards(game) {

    const merged = game.mergedAchievements;

    const entries = merged?.achievements ?? [];

    return entries
        .map(entry => createSteamAchievementCard(entry, merged))
        .join("");

}

export function createSteamAchievementList(game, session) {

    const merged = game.mergedAchievements;

    const entries = merged?.achievements ?? [];

    if (!entries.length) {

        return `

            <section class="steam-achievement-list">

                <div class="steam-achievement-list-header">

                    <h2>Steam Achievements</h2>

                </div>

                <p class="achievement-empty">

                    Achievement list coming soon...

                </p>

            </section>

        `;

    }

    const { total, completed } = getMergedAchievementStats(game);

    let statusLine;

    if (!merged.steamDataAvailable) {

        statusLine = `
            ${total} achievements tracked for this game.
        `;

    } else if (merged.playerDataAvailable) {

        statusLine = `
            Unlocked:
            <strong>${completed}</strong>
            /
            <strong>${total}</strong>
        `;

    } else if (session?.logged) {

        statusLine = `
            ${total} achievements tracked by Steam.
            Personal unlock status is unavailable right now.
        `;

    } else {

        statusLine = `
            ${total} achievements tracked by Steam.
            Log in with Steam to see your unlock status.
        `;

    }

    return `

        <section class="steam-achievement-list">

            <div class="steam-achievement-list-header">

                <h2>Steam Achievements</h2>

                <p class="steam-achievement-list-description">
                    ${statusLine}
                </p>

                ${createAchievementFilters()}

            </div>

            <div
                id="steam-achievement-cards"
                class="steam-achievement-list-container"
            >

                ${createSteamAchievementCards(game)}

            </div>

        </section>

    `;

}
