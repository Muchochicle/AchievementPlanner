import express from "express";

import {
    getPlayerSummary,
    getOwnedGames
} from "../services/steamApi.js";

const router = express.Router();

router.get("/profile", async (req, res) => {

    const steamId = req.session.user?.steamid;

    if (!steamId) {

        return res.status(401).json({

            success: false,

            message: "Not logged in"

        });

    }

    try {

        const profile = await getPlayerSummary(steamId);

        const games = await getOwnedGames(steamId);

        res.json({

            success: true,

            profile,

            gameCount: games.game_count,

            games: games.games

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

});

export default router;