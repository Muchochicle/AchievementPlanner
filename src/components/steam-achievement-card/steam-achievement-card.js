import { isEntryCompleted } from "../../utils/planner/achievement/completion.js";

function formatUnlockTime(unlocktime) {

    if (!unlocktime) {

        return null;

    }

    return new Date(unlocktime * 1000).toLocaleDateString();

}

// Manual XP-claim control, matched/local entries only. Deliberately
// unchecked by default (not driven by isEntryCompleted/Steam state) -
// the existing loadProgress() DOM hydration pass, run right after this
// markup is inserted, sets the checked state from local storage, same
// as the legacy achievement-card did. Reuses the exact .achievement-check
// / data-id convention so toggleAchievement, checkGameCompletion,
// recommendation, session-planner and storage all keep working
// unchanged.
function createManualCheckbox(entry) {

    if (!entry.ap) {

        return "";

    }

    return `
        <label class="achievement-check">
            <input type="checkbox" data-id="${entry.ap.id}">
        </label>
    `;

}

export function createSteamAchievementCard(entry, merged, slug) {

    const completed = isEntryCompleted(merged, entry, slug);

    if (!entry.steam) {

        return createLocalOnlyCard(entry, completed);

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
                ? `<img class="steam-achievement-icon" src="${iconUrl}" alt="" loading="lazy">`
                : `<div class="steam-achievement-icon steam-achievement-icon--placeholder">🏆</div>`}

            <div class="steam-achievement-content">

                <div class="steam-achievement-top">

                    <h4 class="steam-achievement-name">${steam.displayName}</h4>

                    ${createManualCheckbox(entry)}

                    ${unlockBadge}

                </div>

                <p class="steam-achievement-description">${description}</p>

                ${percentBadge}

            </div>

        </article>

    `;

}

// Local-only fallback: an entry with no Steam schema match at all (e.g.
// a game with no Steam appid, or an achievement not present in Steam's
// schema). Renders from the local planner achievement instead.
function createLocalOnlyCard(entry, completed) {

    const ap = entry.ap;

    const unlockBadge = `
        <span class="steam-achievement-badge steam-achievement-badge--${completed ? "unlocked" : "locked"}">
            ${completed ? "Completed" : "Pending"}
        </span>
    `;

    return `

        <article class="steam-achievement-card${completed ? " steam-achievement-card--unlocked" : ""}" data-completed="${completed}">

            <div class="steam-achievement-icon steam-achievement-icon--placeholder">🏆</div>

            <div class="steam-achievement-content">

                <div class="steam-achievement-top">

                    <h4 class="steam-achievement-name">${ap.name}</h4>

                    ${createManualCheckbox(entry)}

                    ${unlockBadge}

                </div>

                <p class="steam-achievement-description">${ap.description}</p>

            </div>

        </article>

    `;

}
