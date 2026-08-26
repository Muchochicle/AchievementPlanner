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

// Same {status: "ready"|"error"} shape as playerProgressClient.js's
// fetch/save functions. Deliberately never throws - callers (layout.js's
// logout-btn handler) always proceed to redirect afterward regardless of
// whether the server call itself succeeded, since a network failure here
// just means the session cookie stays valid a little longer, not that the
// logout click should appear to do nothing.
export async function logout() {

    try {

        const response = await fetchWithTimeout(
            `${ENV.API_BASE_URL}/auth/steam/logout`,
            {
                method: "POST",
                credentials: "include"
            }
        );

        if (!response.ok) {

            return { status: "error" };

        }

        return { status: "ready" };

    } catch (error) {

        return { status: "error", error };

    }

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