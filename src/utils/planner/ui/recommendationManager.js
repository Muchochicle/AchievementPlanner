import { createRecommendedAchievement } from "../../../components/recommended-achievement/recommended-achievement.js";

import {
    getRecommendedAchievement
} from "../recommendation/recommendation.js";

import {
    skipAchievement
} from "../recommendation/skipped.js";

import {
    completeAchievement
} from "../achievement/achievementManager.js";

export function renderRecommendation(

    game,
    slug,
    refresh,
    regenerateSession

) {

    const recommended =
        getRecommendedAchievement(game);

    document.getElementById(
        "recommended-container"
    ).innerHTML =

        createRecommendedAchievement(
            recommended
        );

    const completeButton =
        document.querySelector(
            ".recommended-button"
        );

    if (completeButton) {

        completeButton.addEventListener(
            "click",
            () => {

                completeAchievement(

                    Number(
                        completeButton.dataset.id
                    ),

                    slug,

                    refresh

                );

            }

        );

    }

    const skipButton =
        document.querySelector(
            ".recommended-skip"
        );

    if (skipButton) {

        skipButton.addEventListener(
            "click",
            () => {

                skipAchievement(

                    Number(
                        skipButton.dataset.id
                    )

                );

                regenerateSession();

                refresh();

            }

        );

    }

}