import {

    getPlayer,

    getXPForNextLevel

} from "../../utils/player/player.js";

export function createPlayerProfile() {

    const player = getPlayer();

    const previousLevelXP =

        Math.pow(

            player.level - 1,

            2

        ) * 100;

    const nextLevelXP =

        getXPForNextLevel(

            player.level

        );

    const currentLevelXP =

        player.xp - previousLevelXP;

    const requiredXP =

        nextLevelXP - previousLevelXP;

    const progress =

        requiredXP === 0

            ? 100

            : Math.round(

                currentLevelXP /

                requiredXP *

                100

            );

    return `

        <section class="player-profile">

            <h2>

                👤 Player

            </h2>

            <p>

                ${player.title}

            </p>

            <p>

                ⭐ Level ${player.level}

            </p>

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

                    🏆 ${player.completedAchievements} achievements

                </span>

                <span>

                    🎮 ${player.completedGames} games

                </span>

            </div>

        </section>

    `;

}