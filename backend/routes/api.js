import express from "express";

import {
    getPlayerSummary,
    getOwnedGames
} from "../services/steamApi.js";

import { getProfileStats } from "../controllers/profileStatsController.js";
import { sendServerError } from "../utils/sendServerError.js";

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

        sendServerError(res, error, "GET /api/profile");

    }

});

router.get("/profile/stats", getProfileStats);

export default router;