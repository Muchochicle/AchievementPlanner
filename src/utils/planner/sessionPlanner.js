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
        const filtered = currentSession
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

        if (filtered.length > 0) {

            return filtered;

        }

        // Every cached achievement is now complete - fall through to
        // rebuild from the game's remaining pool below instead of
        // permanently returning this stale, now-fully-completed cache.
        // This mirrors sessionManager.js's identical fix (see
        // PHASE_48_AUDIT.md Finding 7): sessionManager.js's own
        // getSession() falls through to createSession() whenever a
        // persisted session's members are all complete, which reaches
        // this exact cache-hit branch on the very next call for the same
        // slug - without this fallthrough too, that regeneration would
        // just hit this stale in-memory cache and produce [] again.

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