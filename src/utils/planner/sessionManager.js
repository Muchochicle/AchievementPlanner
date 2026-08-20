import {
    loadSession,
    saveSession,
    clearSession
} from "./session/sessionStorage.js";

import {
    createSession,
    resetSession
} from "./sessionPlanner.js";

import {
    findMergedEntry,
    isEntryCompleted
} from "./achievement/completion.js";

export function getSession(
    game,
    slug,
    duration
) {

    const stored =
        loadSession(slug);

    if (stored) {

        const merged = game.mergedAchievements;

        // Same re-filter as sessionPlanner.js's in-memory cache: a
        // previously-stored session must not keep showing an achievement
        // Steam has since confirmed complete. Pending entries pass
        // through untouched.
        return stored
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

    const session =
        createSession(
            game,
            duration
        );

    saveSession(

        slug,

        session.map(
            achievement =>
                achievement.id
        )

    );

    return session;

}

export function regenerateSession(
    game,
    slug,
    duration
) {

    resetSession();

    clearSession(slug);

    const session =
        createSession(
            game,
            duration
        );

    saveSession(

        slug,

        session.map(
            achievement =>
                achievement.id
        )

    );

    return session;

}