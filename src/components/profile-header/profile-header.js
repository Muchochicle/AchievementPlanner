import {

    getPlayer

} from "../../utils/player/player.js";

import {

    getCurrentAvatar,

    getAllAvatars

} from "../../utils/player/avatar/avatarManager.js";

import {

    getXPForNextLevel

} from "../../utils/player/level/levelSystem.js";

import {

    getSteamDisplayName,

    getSteamAvatarUrl

} from "../../utils/steam/steamSession.js";

import {

    ownsItem

} from "../../utils/player/inventory/inventoryManager.js";

import { escapeHtml } from "../../utils/format/escapeHtml.js";

// Unlock requirements as implemented in playerProgress.js checkPlayerUnlocks -
// kept in sync manually since there is no shared source of truth to read from.
const AVATAR_REQUIREMENTS = {

    rookie: "Reach Level 5",

    explorer: "Reach Level 10",

    veteran: "Complete 5 games",

    master: "Complete 100 achievements",

    legend: "Complete 500 achievements"

};

export function createProfileHeader(
    session = {
        logged: false
    }
) {

    const player = getPlayer();

    const avatar = getCurrentAvatar();

    const avatars = getAllAvatars();

    const requiredXP = getXPForNextLevel(player.level);

    const progress = Math.round(

        player.xp / requiredXP * 100

    );

    const avatarOptions = avatars.map(

        item => {

            const owned = ownsItem("avatars", item.id);

            const label = owned
                ? item.name
                : `🔒 ${item.name} — ${AVATAR_REQUIREMENTS[item.id] ?? "Locked"}`;

            return `

                <option

                    value="${item.id}"

                    ${item.id === avatar.id ? "selected" : ""}

                    ${owned ? "" : "disabled"}

                >

                    ${label}

                </option>

            `;

        }

    ).join("");

    const steamName = getSteamDisplayName(session);

    const steamAvatarUrl = getSteamAvatarUrl(session);

    const steamIdentity = steamName
        ? `
            <div class="profile-steam-identity">

                ${steamAvatarUrl
                    ? `
                        <img
                            class="profile-steam-avatar"
                            src="${steamAvatarUrl}"
                            alt="Steam avatar"
                        >
                    `
                    : ""}

                <p class="profile-steam-name">${escapeHtml(steamName)}</p>

            </div>
        `
        : `
            <p class="profile-steam-identity profile-steam-identity-empty">
                Not connected to Steam
            </p>
        `;

    return `

        <section class="profile-header">

            <img

                class="profile-avatar"

                src="${avatar.image}"

                alt="${avatar.name}"

            >

            <div class="profile-info">

                ${steamIdentity}

                <h1>${player.title}</h1>

                <p class="profile-level">Level ${player.level}</p>

                <div class="profile-avatar-picker">

                    <label for="avatar-selector">Avatar</label>

                    <select

                        id="avatar-selector"

                        class="avatar-selector"

                    >

                        ${avatarOptions}

                    </select>

                </div>

                <div class="profile-xp-row">

                    <div

                        class="progress-bar"

                        role="progressbar"

                        aria-valuemin="0"

                        aria-valuemax="${requiredXP}"

                        aria-valuenow="${player.xp}"

                        aria-label="Experience progress toward next level"

                    >

                        <div

                            class="progress-fill"

                            style="width:${progress}%"

                        ></div>

                    </div>

                    <small>

                        ${player.xp} / ${requiredXP} XP

                    </small>

                </div>

            </div>

        </section>

    `;

}