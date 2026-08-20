import { getOwnedGames } from "../services/steamApi.js";
import { mapSteamGameSafe } from "../utils/gameMapper.js";
import { getProfileStatsCached, computeLibraryCounts } from "../utils/profileStats.js";
import { indexProfileSnapshotSafely } from "../services/leaderboardStore.js";
import { sendServerError } from "../utils/sendServerError.js";

// Real Express entry point (routes/api.js) - always exactly 2 params.
// Deliberately NOT declared with a 3rd (deps) parameter: Express calls
// every route handler as (req, res, next), so a 3rd declared parameter
// would silently receive Express's `next` instead of a test double,
// breaking every real request. getProfileStatsWithDeps below is the
// injectable version tests call directly instead.
export async function getProfileStats(req, res) {

    return getProfileStatsWithDeps(req, res, defaultDeps);

}

const defaultDeps = {

    getOwnedGames,
    getProfileStatsCached,
    indexProfileSnapshotSafely

};

// steamId's Steam data fetch/aggregation is unchanged from before Phase 32;
// the only addition is the best-effort leaderboard indexing call and (for
// tests only) the injectable `deps`. computeLibraryCounts is pure/
// deterministic and always the real implementation - no need to inject it.
export async function getProfileStatsWithDeps(req, res, deps) {

    const { getOwnedGames, getProfileStatsCached, indexProfileSnapshotSafely } = deps;

    const steamUser = req.session.user;
    const steamId = steamUser?.steamid;

    if (!steamId) {

        return res.status(401).json({

            success: false,

            message: "Not logged in"

        });

    }

    try {

        const library = await getOwnedGames(steamId);

        const ownedGames = library.games

            .map(mapSteamGameSafe)

            .filter(Boolean);

        // gamesOwned/gamesPlayed come straight from Steam's raw owned-games
        // list (already fetched above) - no extra Steam calls, and no
        // dependency on the achievement fan-out below. This is the actual
        // Steam library size/activity, independent of whether a game has
        // any achievements at all.
        const libraryCounts = computeLibraryCounts(library.games);

        const stats = await getProfileStatsCached(steamId, ownedGames);

        // Best-effort leaderboard indexing (Phase 32 Step 2) - guaranteed
        // never to throw (see leaderboardStore.js), so a persistence
        // failure can never turn this successful Steam response into a 500.
        indexProfileSnapshotSafely({
            steamUser,
            libraryGames: library.games,
            libraryCounts,
            achievementStats: stats
        });

        res.json({

            success: true,

            ...libraryCounts,

            ...stats

        });

    }

    catch (error) {

        sendServerError(res, error, "GET /api/profile/stats");

    }

}
