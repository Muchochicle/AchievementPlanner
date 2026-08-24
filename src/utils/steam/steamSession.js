import { ENV } from "../../env.js";
import { fetchWithTimeout } from "../http/fetchWithTimeout.js";

export async function getSteamSession() {

    const response = await fetchWithTimeout(
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