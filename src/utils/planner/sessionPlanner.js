import {
    getSkippedAchievements
} from "./recommendation/skipped.js";

import {
    findMergedEntry,
    isEntryCompleted
} from "./achievement/completion.js";

let currentSession = null;

// Which game the cache above belongs to - without this, a second call for
// a *different* game (same page/process, before it has anything saved to
// localStorage yet) would incorrectly re-filter through the previous
// game's cached achievement ids, none of which exist in the new game's
// list, silently producing an empty session instead of a freshly-built
// one. Keyed on slug since every game object carries one (see
// utils/gameMapper.js).
let currentSessionSlug = null;

export function createSession(game, targetMinutes = 45) {

    if (currentSession && currentSessionSlug === game.slug) {

        const merged = game.mergedAchievements;

        // Re-filter on every read, even from cache: an achievement Steam
        // has since confirmed complete must never keep appearing in an
        // already-generated session. Pending (not yet confirmed) entries
        // are left untouched - only a confirmed steamUnlock.achieved
        // removes something here.
        return currentSession
            .map(id =>
                (game.achievements ?? []).find(
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

    const available = (game.achievements ?? [])

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

    currentSessionSlug = game.slug;

    return session;

}

export function resetSession() {

    currentSession = null;
    currentSessionSlug = null;

}