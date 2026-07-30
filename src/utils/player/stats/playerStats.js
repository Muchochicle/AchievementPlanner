export function calculateCompletionRate(

    completedAchievements,

    totalAchievements

) {

    if (totalAchievements === 0) {

        return 0;

    }

    return Math.round(

        completedAchievements /

        totalAchievements *

        100

    );

}

export function calculateAverageHours(

    hoursPlayed,

    completedGames

) {

    if (completedGames === 0) {

        return 0;

    }

    return Number(

        (

            hoursPlayed /

            completedGames

        ).toFixed(1)

    );

}