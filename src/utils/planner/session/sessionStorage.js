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