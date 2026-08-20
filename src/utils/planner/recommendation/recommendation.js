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