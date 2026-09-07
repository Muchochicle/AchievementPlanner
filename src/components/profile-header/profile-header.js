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

import { ENV } from "../../env.js";

import { createAvatarPicker } from "../avatar-picker/avatar-picker.js";

// Same endpoint the navbar's "Log in with Steam" button and the
// login-error retry link use.
const STEAM_LOGIN_URL = `${ENV.API_BASE_URL}/auth/steam/login`;

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
                            src="${escapeHtml(steamAvatarUrl)}"
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

    // Shown only to a signed-out visitor: the whole progression panel
    // below (level, XP bar, avatars) still renders, but it's a preview of
    // what a Steam account earns - nothing here is saved until they sign
    // in. Re-rendered with the real session by profile.js's refresh(), so
    // it disappears once signed in. Not a redesign - one line above the
    // existing header.
    const previewNote = session?.logged
        ? ""
        : `
            <p class="profile-preview-note">
                Preview - <a href="${STEAM_LOGIN_URL}">sign in with Steam</a> to start earning XP, avatars and badges that save to your account.
            </p>
        `;

    return `

        <section class="profile-header">

            ${previewNote}

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
