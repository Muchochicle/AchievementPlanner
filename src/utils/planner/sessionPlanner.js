import {
    getSkippedAchievements
} from "./recommendation/skipped.js";

import {
    findMergedEntry,
    isEntryCompleted
} from "./achievement/completion.js";

let currentSession = null;

export function createSession(game, targetMinutes = 45) {

    if (currentSession) {

        const merged = game.mergedAchievements;

        // Re-filter on every read, even from cache: an achievement Steam
        // has since confirmed complete must never keep appearing in an
        // already-generated session. Pending (not yet confirmed) entries
        // are left untouched - only a confirmed steamUnlock.achieved
        // removes something here.
        return currentSession
            .map(id =>
                game.achievements.find(
                    achievement =>
                        achievement.id === id
                )
            )
            .filter(Boolean)
            .filter(achievement => {

                const entry = findMergedEntry(game, achievement.id);

                return entry ? !isEntryCompleted(merged, entry) : true;

            });

    }

    const merged = game.mergedAchievements;

    const skipped =
        getSkippedAchievements();

    const available = game.achievements

        .filter(achievement => {

            const entry = findMergedEntry(game, achievement.id);

            const completed = entry
                ? isEntryCompleted(merged, entry)
                : false;

            return !completed && !skipped.includes(achievement.id);

        })

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