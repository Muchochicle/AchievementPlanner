export function loadSession(slug) {

    const data =
        localStorage.getItem(
            `session-${slug}`
        );

    return data
        ? JSON.parse(data)
        : null;

}

export function saveSession(

    slug,

    session

) {

    localStorage.setItem(

        `session-${slug}`,

        JSON.stringify(session)

    );

}

export function clearSession(slug) {

    localStorage.removeItem(

        `session-${slug}`

    );

}

const VALID_DURATIONS = [30, 45, 60, 90];

const DEFAULT_DURATION = 45;

export function loadSessionDuration(slug) {

    const stored =
        localStorage.getItem(
            `session-duration-${slug}`
        );

    const duration =
        Number(stored);

    return VALID_DURATIONS.includes(duration)
        ? duration
        : DEFAULT_DURATION;

}

export function saveSessionDuration(slug, duration) {

    localStorage.setItem(

        `session-duration-${slug}`,

        String(duration)

    );

}