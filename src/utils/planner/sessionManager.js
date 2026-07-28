import {
    loadSession,
    saveSession,
    clearSession
} from "./session/sessionStorage.js";

import {
    createSession
} from "./sessionPlanner.js";

export function getSession(
    game,
    slug,
    duration
) {

    const stored =
        loadSession(slug);

    if (stored) {

        return stored
            .map(id =>
                game.achievements.find(
                    achievement =>
                        achievement.id === id
                )
            )
            .filter(Boolean);

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