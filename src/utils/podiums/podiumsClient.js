import { ENV } from "../../env.js";
import { fetchWithTimeout } from "../http/fetchWithTimeout.js";

const API_URL = `${ENV.API_BASE_URL}/api/podiums`;

// Same {status: "loading"|"error"|"ready", ...} shape profileStatsClient.js
// uses - no "logged-out" status here, though: the leaderboards themselves
// are public (Top 10 is visible to everyone), only the `me` field inside a
// "ready" result depends on whether the viewer is logged in (see
// podium.js's renderMeSection, which reads `loggedIn`/`me` off the result).
async function fetchPodium(url) {

    let response;

    try {

        response = await fetchWithTimeout(url, { credentials: "include" });

    } catch (error) {

        return { status: "error", error };

    }

    const data = await response.json().catch(() => null);

    if (!response.ok || !data?.success) {

        return {

            status: "error",
            error: new Error(data?.message ?? `Unable to load leaderboard (status ${response.status})`)

        };

    }

    return {

        status: "ready",
        top10: data.top10,
        me: data.me,
        totalRanked: data.totalRanked,
        loggedIn: data.loggedIn

    };

}

export function fetchGamePodium(appid) {

    return fetchPodium(`${API_URL}/game/${appid}`);

}

export function fetchGlobalPodium(category) {

    return fetchPodium(`${API_URL}/global/${category}`);

}
