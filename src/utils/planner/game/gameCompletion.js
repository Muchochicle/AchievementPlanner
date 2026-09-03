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

import {

    XP_PER_GAME_COMPLETION

} from "../../player/xpValues.js";

import {

    PERFECTIONIST_BADGE

} from "../../player/playerProgress.js";

export function checkGameCompletion(game) {

    if (

        hasClaimedGame(game.slug)

    ) {

        return false;

    }

    const merged = game.mergedAchievements;

    // A curated list can be fully checked off without the game actually
    // being 100% complete - Steam's live schema may report achievements
    // outside the curated set entirely (see achievementMerger.js's
    // steamOnlyCount, already computed on every merge). Without this guard,
    // completing every *curated* achievement would falsely award the
    // permanent Perfectionist badge/300 XP/claimGame ledger entry for a
    // game that isn't really done - the same false-completion gap Phase 42
    // fixed in recommendation.js, but here the consequence can never be
    // undone once claimGame() fires (see PHASE_43_AUDIT.md). Falls back to
    // 0 (the original, unconditional behavior) when mergedAchievements/
    // steamOnlyCount is missing entirely, matching this file's existing
    // optional-chaining defaults.
    const steamOnlyCount = merged?.steamOnlyCount ?? 0;

    const completed =

        game.achievements.length > 0 &&

        steamOnlyCount === 0 &&

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

    addXP(XP_PER_GAME_COMPLETION);

    unlockBadge(

        PERFECTIONIST_BADGE

    );

    return true;

}
