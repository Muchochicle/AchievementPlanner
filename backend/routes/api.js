import express from "express";

import {
    getPlayerSummary,
    getOwnedGames
} from "../services/steamApi.js";

const router = express.Router();

const MY_STEAM_ID = "76561198160458768";

router.get("/profile", async (req, res) => {

    try {

        const profile = await getPlayerSummary(MY_STEAM_ID);

        const games = await getOwnedGames(MY_STEAM_ID);

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