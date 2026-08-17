import {

    hasClaimedGame,

    claimGame,

    completeGame,

    addXP,

    unlockBadge

} from "../../player/player.js";

import {

    findMergedEntry,
    isEntryCompleted

} from "../achievement/completion.js";

export function checkGameCompletion(game) {

    if (

        hasClaimedGame(game.slug)

    ) {

        return false;

    }

    const merged = game.mergedAchievements;

    const completed =

        game.achievements.length > 0 &&

        game.achievements.every(

            achievement => {

                const entry = findMergedEntry(game, achievement.id);

                return entry ? isEntryCompleted(merged, entry) : false;

            }

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
