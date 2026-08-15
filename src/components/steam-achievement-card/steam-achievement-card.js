function formatUnlockTime(unlocktime) {

    if (!unlocktime) {

        return null;

    }

    return new Date(unlocktime * 1000).toLocaleDateString();

}

export function createSteamAchievementCard(entry) {

    const steam = entry.steam;

    const description = steam.description
        ? steam.description
        : (steam.hidden ? "Hidden achievement" : "No description available.");

    const unlocked = !!entry.steamUnlock?.achieved;

    const iconUrl = unlocked || !steam.icongray
        ? steam.icon
        : steam.icongray;

    const unlockedDate = formatUnlockTime(entry.steamUnlock?.unlocktime);

    const unlockBadge = entry.steamUnlock
        ? (
            unlocked
                ? `
                    <span class="steam-achievement-badge steam-achievement-badge--unlocked">
                        Unlocked${unlockedDate ? ` · ${unlockedDate}` : ""}
                    </span>
                `
                : `
                    <span class="steam-achievement-badge steam-achievement-badge--locked">
                        Locked
                    </span>
                `
        )
        : "";

    const percentBadge = steam.globalPercent != null
        ? `
            <span class="steam-achievement-percent">
                ${steam.globalPercent}% of players
            </span>
        `
        : "";

    return `

        <article class="steam-achievement-card${unlocked ? " steam-achievement-card--unlocked" : ""}">

            ${iconUrl
                ? `<img class="steam-achievement-icon" src="${iconUrl}" alt="" loading="lazy">`
                : `<div class="steam-achievement-icon steam-achievement-icon--placeholder">🏆</div>`}

            <div class="steam-achievement-content">

                <div class="steam-achievement-top">

                    <h4 class="steam-achievement-name">${steam.displayName}</h4>

                    ${unlockBadge}

                </div>

                <p class="steam-achievement-description">${description}</p>

                ${percentBadge}

            </div>

        </article>

    `;

}
