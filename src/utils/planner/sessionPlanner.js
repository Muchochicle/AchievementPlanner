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

            const filteredTotalTime = filtered.reduce(
                (sum, achievement) => sum + achievement.estimatedTime,
                0
            );

            // A cached session is only trustworthy for the duration it was
            // actually built for - `targetMinutes` was previously
            // "write-only" on a cache hit here, re-filtered for completion
            // but never re-validated against whatever duration was just
            // requested (Finding 2, PHASE_51-54_AUDIT.md). A cached
            // session that no longer fits the currently-requested duration
            // is treated exactly like a stale-completion one below: fall
            // through and rebuild from the current pool instead of
            // silently returning a session sized for a different duration.
            if (filteredTotalTime <= targetMinutes) {

                return filtered;

            }

        }

        // Either every cached achievement is now complete, or the cached
        // session no longer fits the currently-requested duration - either
        // way, fall through to rebuild from the game's remaining pool
        // below instead of permanently returning this stale cache. This
        // mirrors sessionManager.js's identical fix (see PHASE_48_AUDIT.md
        // Finding 7 for the original completion-only version):
        // sessionManager.js's own getSession() falls through to
        // createSession() under the same two conditions, which reaches
        // this exact cache-hit branch on the very next call for the same
        // slug - without this fallthrough too, that regeneration would
        // just hit this stale in-memory cache and return it unchanged.

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