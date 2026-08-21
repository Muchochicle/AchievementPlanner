import { ENV } from "../../../env.js";

// Live source of truth for Profile's Achievements/Games/100% cards -
// backend/controllers/profileStatsController.js, backed by the same
// completion semantics (isEntryCompleted/getMergedAchievementStats) the
// game page uses. Never falls back to localStorage: a failed/unavailable
// result is returned as an explicit state for the caller to render, not
// silently swallowed into a stale or fabricated number.
export async function fetchProfileStats() {

    let response;

    try {

        response = await fetch(
            `${ENV.API_BASE_URL}/api/profile/stats`,
            { credentials: "include" }
        );

    } catch (error) {

        return { status: "error", error };

    }

    if (response.status === 401) {

        return { status: "logged-out" };

    }

    if (!response.ok) {

        return { status: "error", error: new Error(`Unable to load profile statistics (status ${response.status})`) };

    }

    const data = await response.json().catch(() => null);

    if (!data?.success) {

        return { status: "error", error: new Error(data?.message ?? "Unable to load profile statistics") };

    }

    return {

        status: "ready",
        gamesOwned: data.gamesOwned,
        gamesPlayed: data.gamesPlayed,
        achievements: data.achievements,
        gamesWithUnlockedAchievements: data.gamesWithUnlockedAchievements,
        gamesWithAchievements: data.gamesWithAchievements,
        completedGames: data.completedGames,
        completedGameSlugs: data.completedGameSlugs,
        gamesConsidered: data.gamesConsidered,
        gamesWithPlayerDataUnavailable: data.gamesWithPlayerDataUnavailable,
        gamesWithTransientErrors: data.gamesWithTransientErrors

    };

}
