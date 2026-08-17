import { getPlayer } from "../../utils/player/player.js";

export function createProfileBadges() {

    const { badges } = getPlayer();

    const body = badges.length
        ? `
            <ul class="profile-badges-list">
                ${badges.map(name => `<li class="profile-badge">🏅 ${name}</li>`).join("")}
            </ul>
        `
        : `
            <p class="profile-badges-empty">
                No badges earned yet. 100%-complete a game to earn your first badge.
            </p>
        `;

    return `

        <section class="profile-badges">

            <h2>Badges</h2>

            ${body}

        </section>

    `;

}
