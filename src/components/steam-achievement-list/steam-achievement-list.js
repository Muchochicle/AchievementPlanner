import { createSteamAchievementCard } from "../steam-achievement-card/steam-achievement-card.js";

export function createSteamAchievementList(game, session) {

    if (!game.steamAchievements?.available) {

        return "";

    }

    const entries = (game.mergedAchievements?.achievements ?? [])
        .filter(entry => entry.steam);

    if (!entries.length) {

        return "";

    }

    const unlockedCount = entries.filter(
        entry => entry.steamUnlock?.achieved
    ).length;

    let statusLine;

    if (game.mergedAchievements.playerDataAvailable) {

        statusLine = `
            Unlocked:
            <strong>${unlockedCount}</strong>
            /
            <strong>${entries.length}</strong>
        `;

    } else if (session?.logged) {

        statusLine = `
            ${entries.length} achievements tracked by Steam.
            Personal unlock status is unavailable right now.
        `;

    } else {

        statusLine = `
            ${entries.length} achievements tracked by Steam.
            Log in with Steam to see your unlock status.
        `;

    }

    const cards = entries
        .map(entry => createSteamAchievementCard(entry))
        .join("");

    return `

        <section class="steam-achievement-list">

            <div class="steam-achievement-list-header">

                <h2>Steam Achievements</h2>

                <p class="steam-achievement-list-description">
                    ${statusLine}
                </p>

            </div>

            <div class="steam-achievement-list-container">

                ${cards}

            </div>

        </section>

    `;

}
