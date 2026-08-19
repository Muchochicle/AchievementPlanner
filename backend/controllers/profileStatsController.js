import { getOwnedGames } from "../services/steamApi.js";
import { mapSteamGameSafe } from "../utils/gameMapper.js";
import { getProfileStatsCached } from "../utils/profileStats.js";

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

        const stats = await getProfileStatsCached(steamId, ownedGames);

        res.json({

            success: true,

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
