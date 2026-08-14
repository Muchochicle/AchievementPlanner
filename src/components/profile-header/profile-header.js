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

import { escapeHtml } from "../../utils/format/escapeHtml.js";

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

        item => `

            <option

                value="${item.id}"

                ${item.id === avatar.id ? "selected" : ""}

            >

                ${item.name}

            </option>

        `

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
        : "";

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

                <p>Level ${player.level}</p>

                <select

                    id="avatar-selector"

                    class="avatar-selector"

                >

                    ${avatarOptions}

                </select>

                <div class="profile-xp">

                    <div

                        class="profile-xp-fill"

                        style="width:${progress}%"

                    ></div>

                </div>

                <small>

                    ${player.xp} / ${requiredXP} XP

                </small>

            </div>

        </section>

    `;

}