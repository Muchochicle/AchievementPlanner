import {

    getPlayer

} from "../../utils/player/player.js";

import {

    getXPForNextLevel

} from "../../utils/player/level/levelSystem.js";
import {

    getCurrentAvatar

} from "../../utils/player/avatar/avatarManager.js";

export function createPlayerProfile() {

    const player = getPlayer();

    const avatar = getCurrentAvatar();

    const currentLevelXP = player.xp;

    const requiredXP = getXPForNextLevel(

        player.level

    );

    const progress = Math.round(

        currentLevelXP /

        requiredXP *

        100

    );

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

                    <h2>${avatar.name}</h2>

                    <p>${player.title}</p>

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

                    ⏱ ${player.hoursPlayed} h

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

