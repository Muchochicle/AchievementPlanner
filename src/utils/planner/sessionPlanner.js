import {
    getSkippedAchievements
} from "./recommendation/skipped.js";

let currentSession = null;

export function createSession(game, targetMinutes = 45) {

    if (currentSession) {

        return currentSession
            .map(id =>
                game.achievements.find(
                    achievement =>
                        achievement.id === id
                )
            )
            .filter(Boolean);

    }

    const completed = [

        ...document.querySelectorAll(
            ".achievement-check input:checked"
        )

    ].map(input =>

        Number(input.dataset.id)

    );

    const skipped =
        getSkippedAchievements();

    const available = game.achievements

        .filter(achievement =>

            !completed.includes(
                achievement.id
            ) &&

            !skipped.includes(
                achievement.id
            )

        )

        .sort((a, b) => {

            if (a.difficulty !== b.difficulty) {

                return a.difficulty - b.difficulty;

            }

            return a.estimatedTime - b.estimatedTime;

        });

    const session = [];

    let totalTime = 0;

    for (const achievement of available) {

        if (

            totalTime + achievement.estimatedTime <= targetMinutes ||

            session.length === 0

        ) {

            session.push(achievement);

            totalTime += achievement.estimatedTime;

        }

    }

    currentSession =
        session.map(
            achievement =>
                achievement.id
        );

    return session;

}

export function resetSession() {

    currentSession = null;

}