import express from "express";

import { getOwnedGames } from "../services/steamApi.js";

import { mapSteamGame } from "../utils/gameMapper.js";

const router = express.Router();

const MY_STEAM_ID = "76561198160458768";

router.get("/", async (req, res) => {

    try {

        const library = await getOwnedGames(MY_STEAM_ID);

        const games = library.games.map(mapSteamGame);

        res.json({

            success: true,

            count: games.length,

            games

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