import { isEntryCompleted } from "../../utils/planner/achievement/completion.js";
import { escapeHtml } from "../../utils/format/escapeHtml.js";

function formatUnlockTime(unlocktime) {

    if (!unlocktime) {

        return null;

    }

    return new Date(unlocktime * 1000).toLocaleDateString();

}

export function createSteamAchievementCard(entry, merged) {

    const completed = isEntryCompleted(merged, entry);

    if (!entry.steam) {

        return createLocalOnlyCard(entry);

    }

    const steam = entry.steam;

    const description = steam.description
        ? steam.description
        : (steam.hidden ? "Hidden achievement" : "No description available.");

    const iconUrl = completed || !steam.icongray
        ? steam.icon
        : steam.icongray;

    const unlockedDate = formatUnlockTime(entry.steamUnlock?.unlocktime);

    const unlockBadge = `
        <span class="steam-achievement-badge steam-achievement-badge--${completed ? "unlocked" : "locked"}">
            ${completed ? `Unlocked${unlockedDate ? ` · ${unlockedDate}` : ""}` : "Locked"}
        </span>
    `;

    const percentBadge = steam.globalPercent != null
        ? `
            <span class="steam-achievement-percent">
                ${steam.globalPercent}% of players
            </span>
        `
        : "";

    return `

        <article class="steam-achievement-card${completed ? " steam-achievement-card--unlocked" : ""}" data-completed="${completed}">

            ${iconUrl
                ? `<img class="steam-achievement-icon" src="${escapeHtml(iconUrl)}" alt="" loading="lazy">`
                : `<div class="steam-achievement-icon steam-achievement-icon--placeholder">🏆</div>`}

            <div class="steam-achievement-content">

                <div class="steam-achievement-top">

                    <h3 class="steam-achievement-name">${escapeHtml(steam.displayName)}</h3>

                    ${unlockBadge}

                </div>

                <p class="steam-achievement-description">${escapeHtml(description)}</p>

                ${percentBadge}

            </div>

        </article>

    `;

}

// Local-only fallback: an entry with no Steam schema match at all (e.g.
// a game with no Steam appid). There is no Steam ground truth for these
// achievements and no manual claim mechanism, so completion can never be
// determined here - always show the explicit unavailable state rather
// than inventing "pending"/"completed".
function createLocalOnlyCard(entry) {

    const ap = entry.ap;

    return `

        <article class="steam-achievement-card" data-completed="false">

            <div class="steam-achievement-icon steam-achievement-icon--placeholder">🏆</div>

            <div class="steam-achievement-content">

                <div class="steam-achievement-top">

                    <h3 class="steam-achievement-name">${escapeHtml(ap.name)}</h3>

                    <span class="steam-achievement-badge steam-achievement-badge--locked">
                        Steam data unavailable
                    </span>

                </div>

                <p class="steam-achievement-description">${escapeHtml(ap.description)}</p>

            </div>

        </article>

    `;

}
