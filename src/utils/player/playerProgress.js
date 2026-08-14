import {

    getPlayer

} from "./player.js";

import {

    unlockAvatar

} from "./avatar/avatarUnlocks.js";

export function checkPlayerUnlocks() {

    const player = getPlayer();

    if (

        player.level >= 5

    ) {

        unlockAvatar(

            "rookie"

        );

    }

    if (

        player.level >= 10

    ) {

        unlockAvatar(

            "explorer"

        );

    }

    if (

        player.completedGames >= 5

    ) {

        unlockAvatar(

            "veteran"

        );

    }

    if (

        player.completedAchievements >= 100

    ) {

        unlockAvatar(

            "master"

        );

    }

    if (

        player.completedAchievements >= 500

    ) {

        unlockAvatar(

            "legend"

        );

    }

}