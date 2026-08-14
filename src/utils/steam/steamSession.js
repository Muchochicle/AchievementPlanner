export async function getSteamSession() {

    const response = await fetch(
        "http://localhost:3000/api/me",
        {
            credentials: "include"
        }
    );

    return await response.json();

}

export function getSteamDisplayName(session) {

    return session?.logged && session.user?.personaname
        ? session.user.personaname
        : null;

}

export function getSteamAvatarUrl(session) {

    return session?.logged && session.user?.avatarfull
        ? session.user.avatarfull
        : null;

}