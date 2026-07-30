import {

    hasClaimedGame,

    claimGame,

    completeGame,

    addXP,

    unlockBadge

} from "../../player/player.js";

export function checkGameCompletion(game) {

    if (

        hasClaimedGame(game.slug)

    ) {

        return false;

    }

    const completed =

        game.achievements.every(

            achievement =>

                document.querySelector(

                    `.achievement-check input[data-id="${achievement.id}"]`

                )?.checked

        );

    if (!completed) {

        return false;

    }

    claimGame(game.slug);

    completeGame();

    addXP(300);

    unlockBadge(

        "Perfectionist"

    );

    return true;

}