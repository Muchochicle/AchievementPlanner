import {

    getPlayer

} from "../../utils/player/player.js";

import {

    getCurrentAvatar

} from "../../utils/player/avatar/avatarManager.js";

import {

    getXPForNextLevel

} from "../../utils/player/level/levelSystem.js";

export function createProfileHeader() {

    const player = getPlayer();

    const avatar = getCurrentAvatar();

    const requiredXP = getXPForNextLevel(player.level);

    const progress = Math.round(

        player.xp / requiredXP * 100

    );

    return `

        <section class="profile-header">

            <img

                class="profile-avatar"

                src="${avatar.image}"

                alt="${avatar.name}"

            >

            <div class="profile-info">

                <h1>${player.title}</h1>

                <p>Level ${player.level}</p>

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