import {

    getPlayer

} from "../../utils/player/player.js";

import {

    getXPForNextLevel

} from "../../utils/player/level/levelSystem.js";
import {

    getCurrentAvatar

} from "../../utils/player/avatar/avatarManager.js";

import {

    equipAvatar,

    getAllAvatars

} from "../../utils/player/avatar/avatarManager.js";

import {

    getSteamDisplayName

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

export function createPlayerProfile(
    session = {
        logged: false
    },
    hoursPlayed = 0
) {

    const player = getPlayer();

    const avatar = getCurrentAvatar();

    const avatars = getAllAvatars();

    const currentLevelXP = player.xp;

    const requiredXP = getXPForNextLevel(

        player.level

    );

    const progress = Math.round(

        currentLevelXP /

        requiredXP *

        100

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

    return `

        <section class="player-profile">

            <div class="player-header">

                <div class="player-avatar">

                    <img
                        src="${avatar.image}"
                        alt="${avatar.name}"
                    >

                </div>

                <div class="player-info">

                    ${steamName
                        ? `<div class="player-steam-name">${escapeHtml(steamName)}</div>`
                        : ""}

                    <h2>${player.title}</h2>

                    <select

                        id="avatar-selector"

                        class="avatar-selector"

                    >

                        ${avatarOptions}

                    </select>

                </div>

                <div class="player-level">

                    Level ${player.level}

                </div>

            </div>

            <div class="player-bar">

                <div

                    class="player-bar-fill"

                    style="width:${progress}%"

                ></div>

            </div>

            <small>

                ${currentLevelXP} / ${requiredXP} XP

            </small>

            <div class="player-stats">

                <span>

                    🏆 ${player.completedAchievements}

                    <small>Achievements</small>

                </span>

                <span>

                    🎮 ${player.completedGames}

                    <small>Games</small>

                </span>

                <span>

                    🏅 ${player.badges.length}

                    <small>Badges</small>

                </span>

                <span>

                    ⏱ ${hoursPlayed} h

                    <small>Hours</small>

                </span>

                <span>

                    🔥 ${player.currentStreak}

                    <small>Streak</small>

                </span>

            </div>

        </section>

    `;

}

