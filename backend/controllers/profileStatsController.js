import { getOwnedGames } from "../services/steamApi.js";
import { mapSteamGameSafe } from "../utils/gameMapper.js";
import { getProfileStatsCached, computeLibraryCounts } from "../utils/profileStats.js";

export async function getProfileStats(req, res) {

    const steamId = req.session.user?.steamid;

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

        res.json({

            success: true,

            ...libraryCounts,

            ...stats

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

}
