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

    getSteamDisplayName

} from "../../utils/steam/steamSession.js";

import { escapeHtml } from "../../utils/format/escapeHtml.js";

export function createPlayerWidget(
    session = {
        logged: false
    }
) {

    const player = getPlayer();

    const avatar = getCurrentAvatar();

    const requiredXP = getXPForNextLevel(player.level);

    const progress = Math.round(

        player.xp / requiredXP * 100

    );

    const steamName = getSteamDisplayName(session);

    return `

        <button

            id="player-widget"

            class="player-widget"

        >

            <img
                class="player-widget-avatar"
                src="${avatar.image}"
                alt="${avatar.name}"
            >

            <div class="player-widget-content">

                ${steamName
                    ? `<div class="player-widget-steam-name">${escapeHtml(steamName)}</div>`
                    : ""}

                <div class="player-widget-name">

                    ${player.title}

                </div>

                <div class="player-widget-level">

                    <span>Lv. ${player.level}</span>

                    <span>${player.xp}/${requiredXP} XP</span>

                </div>

                <div class="player-widget-bar">

                    <div
                        class="player-widget-fill"
                        style="width:${progress}%"
                    ></div>

                </div>

            </div>

        </button>

    `;

}