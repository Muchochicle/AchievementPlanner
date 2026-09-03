import { getPlayer } from "../../utils/player/player.js";
import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Cosmetic only - every name here still renders even without an entry
// (falls back to the plain medal below), so this never gates whether a
// badge shows up, only which emoji it gets. Streak badges (see
// playerProgress.js's STREAK_BADGES) get the "on a roll" icon; the one
// pre-existing milestone badge keeps a trophy.
const BADGE_ICONS = {

    Perfectionist: "🏆",
    Committed: "🔥",
    Dedicated: "🔥",
    Unstoppable: "🔥"

};

function iconFor(name) {

    return BADGE_ICONS[name] ?? "🏅";

}

export function createProfileBadges() {

    const { badges } = getPlayer();

    const body = badges.length
        ? `
            <ul class="profile-badges-list">
                ${badges.map(name => `<li class="profile-badge">${iconFor(name)} ${escapeHtml(name)}</li>`).join("")}
            </ul>
        `
        : `
            <p class="profile-badges-empty">
                No badges earned yet. Keep a daily streak going, or 100%-complete a game, to earn your first badge.
            </p>
        `;

    return `

        <section class="profile-badges">

            <h2>Badges</h2>

            ${body}

        </section>

    `;

}
