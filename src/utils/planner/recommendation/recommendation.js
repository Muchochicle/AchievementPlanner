import {
    getSkippedAchievements
} from "./skipped.js";

import {
    findMergedEntry,
    isEntryCompleted
} from "../achievement/completion.js";

export function getRecommendedAchievement(game) {

    // Matches session-planner.js's own guard for the identical field
    // (game?.achievements?.length) - both render from the same refresh()
    // cycle on game.js, so a game with a missing achievements list must
    // degrade to this function's existing "empty" state instead of
    // throwing and taking down the whole page before session-planner.js's
    // own graceful handling ever gets a chance to run.
    if (!game.achievements?.length) {

        return { empty: true };

    }

    const merged = game.mergedAchievements;

    const skipped =
        getSkippedAchievements();

    const achievements =
        game.achievements.filter(achievement => {

            const entry = findMergedEntry(game, achievement.id);

            const completed = entry
                ? isEntryCompleted(merged, entry)
                : false;

            return !completed && !skipped.includes(achievement.id);

        });

    if (!achievements.length) {

        // The curated list is exhausted, but that isn't the same fact as
        // "this game is 100% complete" - achievementMerger.js's
        // steamOnlyCount (already computed backend-side on every merge,
        // see PHASE_42_AUDIT.md) says how many achievements Steam's live
        // schema reports that aren't in the curated set at all. Today
        // that's 0 for every real catalog game (Hades/Portal 2/Hollow
        // Knight all have complete curated data), but nothing here
        // actually depended on that being true - a future Steam-side
        // addition (DLC, a content update) to any of them, or a future
        // catalog game shipped with a partial curated set, would silently
        // reintroduce the exact false "100% completion" claim Phase 40
        // fixed for Portal 2, with no code change on our side to catch it.
        // Falls back to 0 (the original, unconditional "complete" behavior)
        // when mergedAchievements/steamOnlyCount is missing entirely,
        // matching this file's existing optional-chaining defaults above.
        const steamOnlyCount = game.mergedAchievements?.steamOnlyCount ?? 0;

        if (steamOnlyCount > 0) {

            return { curatedComplete: true, steamOnlyCount };

        }

        return null;

    }

    achievements.sort((a, b) =>

        score(b) - score(a)

    );

    const achievement =
        achievements[0];

    achievement.reasons = [];

    if (achievement.difficulty <= 3) {

        achievement.reasons.push(
            "Very easy achievement"
        );

    }

    if (!achievement.missable) {

        achievement.reasons.push(
            "Cannot be missed"
        );

    }

    if (achievement.estimatedTime <= 15) {

        achievement.reasons.push(
            "Quick to complete"
        );

    }

    return achievement;

}

function score(achievement) {

    let score = 0;

    if (achievement.difficulty <= 3) {

        score += 3;

    }

    if (!achievement.missable) {

        score += 2;

    }

    if (achievement.estimatedTime <= 15) {

        score += 2;

    }

    return score;

}