import {
    getSkippedAchievements
} from "./skipped.js";

export function getRecommendedAchievement(game) {

    const completed =
        getCompletedAchievements();

    const skipped =
        getSkippedAchievements();

    const achievements =
        game.achievements.filter(achievement =>

            !completed.includes(
                achievement.id
            ) &&

            !skipped.includes(
                achievement.id
            )

        );

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

function getCompletedAchievements() {

    return [

        ...document.querySelectorAll(

            ".achievement-check input:checked"

        )

    ].map(input =>

        Number(input.dataset.id)

    );

}