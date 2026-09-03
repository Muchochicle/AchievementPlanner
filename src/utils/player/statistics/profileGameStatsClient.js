import { ENV } from "../../../env.js";
import { fetchWithTimeout } from "../../http/fetchWithTimeout.js";

// Task 7/8: the logged-in visitor's per-game achievement breakdown, used
// by the Games page to sort/filter on real player progress. Same
// {status: "ready"|"logged-out"|"error"} shape as profileStatsClient.js -
// the caller treats anything but "ready" as "player-specific sorts/filters
// stay disabled", never as an error that blocks the catalog.
export async function fetchProfileGameStats() {

    let response;

    try {

        response = await fetchWithTimeout(
            `${ENV.API_BASE_URL}/api/profile/game-stats`,
            { credentials: "include" }
        );

    } catch (error) {

        return { status: "error", error };

    }

    if (response.status === 401) {

        return { status: "logged-out" };

    }

    if (!response.ok) {

        return { status: "error", error: new Error(`Unable to load per-game stats (status ${response.status})`) };

    }

    const data = await response.json().catch(() => null);

    if (!data?.success) {

        return { status: "error", error: new Error(data?.message ?? "Unable to load per-game stats") };

    }

    return {

        status: "ready",
        games: Array.isArray(data.games) ? data.games : [],
        gamesConsidered: data.gamesConsidered ?? 0,
        gamesWithPlayerDataUnavailable: data.gamesWithPlayerDataUnavailable ?? 0,
        gamesWithTransientErrors: data.gamesWithTransientErrors ?? 0

    };

}
