import {

    completeAchievement,

    addXP,

    claimAchievement

} from "../../player/player.js";

import {

    XP_PER_ACHIEVEMENT

} from "../../player/xpValues.js";

import {

    checkGameCompletion

} from "../game/gameCompletion.js";

import {

    findMergedEntry,
    isEntryCompleted

} from "./completion.js";

// Steam is the sole source of achievement completion - there is no user
// UI to claim an achievement anymore. This runs once per page load and
// grants XP for any matched (local/planner) achievement Steam now
// reports as completed. claimAchievement's existing ledger (keyed
// "slug:id") is what makes this idempotent: a repeat sync/refresh/reload
// for an already-claimed achievement is a no-op, so XP is granted
// exactly once per achievement, however many times this runs.
export function syncAchievementCompletion(game, slug) {

    const merged = game?.mergedAchievements;

    for (const achievement of game?.achievements ?? []) {

        const entry = findMergedEntry(game, achievement.id);

        if (!entry || !isEntryCompleted(merged, entry)) {

            continue;

        }

        if (claimAchievement(slug, achievement.id)) {

            completeAchievement();

            addXP(XP_PER_ACHIEVEMENT);

        }

    }

    checkGameCompletion(game);

}
