import {

    getPlayer

} from "../../utils/player/player.js";

import {

    getCurrentAvatar

} from "../../utils/player/avatar/avatarManager.js";

import {

    getXPForNextLevel

} from "../../utils/player/level/levelSystem.js";

import {

    getSteamDisplayName,

    getSteamAvatarUrl

} from "../../utils/steam/steamSession.js";

import { escapeHtml } from "../../utils/format/escapeHtml.js";

import { createAvatarPicker } from "../avatar-picker/avatar-picker.js";

export function createProfileHeader(
    session = {
        logged: false
    }
) {

    const player = getPlayer();

    const avatar = getCurrentAvatar();

    const requiredXP = getXPForNextLevel(player.level);

    const xpRemaining = requiredXP - player.xp;

    const progress = Math.round(

        player.xp / requiredXP * 100

    );

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

            <div class="profile-header-main">

                <img

                    class="profile-avatar"

                    src="${avatar.image}"

                    alt="${avatar.name}"

                >

                <div class="profile-info">

                    ${steamIdentity}

                    <h1>${player.title}</h1>

                    <p class="profile-level">Level ${player.level}</p>

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
                            &middot;
                            ${xpRemaining} XP to Level ${player.level + 1}

                        </small>

                    </div>

                </div>

            </div>

            <div class="profile-avatar-picker-section">

                <h2>Avatar</h2>

                ${createAvatarPicker()}

            </div>

        </section>

    `;

}
