import { ENV } from "../../env.js";

export async function getSteamSession() {

    const response = await fetch(
        `${ENV.API_BASE_URL}/api/me`,
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