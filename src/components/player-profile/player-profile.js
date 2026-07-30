import {

    getPlayer,

    getXPForNextLevel

} from "../../utils/player/player.js";

export function createPlayerProfile() {

    const player = getPlayer();

    const currentLevelXP =

        player.xp;

    const requiredXP =

        getXPForNextLevel(

            player.level

        );

    const progress =

        Math.round(

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