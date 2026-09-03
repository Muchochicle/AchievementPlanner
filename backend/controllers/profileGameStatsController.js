import { getOwnedGames } from "../services/steamApi.js";
import { mapSteamGameSafe } from "../utils/gameMapper.js";
import { getProfileStatsCached } from "../utils/profileStats.js";
import { sendServerError } from "../utils/sendServerError.js";

// Task 7/8: GET /api/profile/game-stats
//
// Returns the logged-in player's per-game achievement breakdown
// ([{ slug, unlocked, total, percent }]) so the Games page can sort and
// filter on real player progress (achievements completed, completion
// percentage), not just catalog/display values.
//
// This is deliberately NOT bundled into GET /api/games: that endpoint is
// on the critical path for the first paint of the Games page, and the
// per-game achievement breakdown needs the full ~1-call-per-owned-game
// Steam fan-out (see profileStats.js). Keeping it a separate call lets the
// frontend render the catalog immediately and then progressively enrich it
// when this resolves.
//
// Cost: reuses getProfileStatsCached - the exact same cached computation
// behind GET /api/profile/stats, keyed by steamId. If the player has
// loaded their Profile in the last 5 minutes this is a cache hit with zero
// Steam calls; otherwise it pays the same one-time scan the Profile page
// already pays, deduped in-flight against a concurrent Profile load.

export async function getProfileGameStats(req, res) {

    return getProfileGameStatsWithDeps(req, res, { getOwnedGames, getProfileStatsCached });

}

export async function getProfileGameStatsWithDeps(req, res, deps) {

    const { getOwnedGames, getProfileStatsCached } = deps;

    const steamId = req.session?.user?.steamid;

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

        const stats = await getProfileStatsCached(steamId, ownedGames);

        res.json({

            success: true,

            games: stats.perGameCompletion ?? [],

            // Surfaced so the frontend can be honest about coverage - e.g.
            // "some games' progress couldn't be loaded" - instead of
            // silently treating a partial scan as complete.
            gamesConsidered: stats.gamesConsidered ?? 0,
            gamesWithPlayerDataUnavailable: stats.gamesWithPlayerDataUnavailable ?? 0,
            gamesWithTransientErrors: stats.gamesWithTransientErrors ?? 0,
            generatedAt: stats.generatedAt ?? null

        });

    } catch (error) {

        sendServerError(res, error, "GET /api/profile/game-stats");

    }

}
