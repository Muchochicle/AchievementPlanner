import { createSteamAchievementCard } from "../steam-achievement-card/steam-achievement-card.js";
import { createAchievementFilters } from "../achievement-filters/achievement-filters.js";
import { getMergedAchievementStats } from "../../utils/planner/achievement/completion.js";

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

    const cards = entries
        .map(entry => createSteamAchievementCard(entry, merged))
        .join("");

    return `

        <section class="steam-achievement-list">

            <div class="steam-achievement-list-header">

                <h2>Steam Achievements</h2>

                <p class="steam-achievement-list-description">
                    ${statusLine}
                </p>

                ${createAchievementFilters()}

            </div>

            <div class="steam-achievement-list-container">

                ${cards}

            </div>

        </section>

    `;

}
