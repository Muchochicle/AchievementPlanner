import express from "express";

import {
    getPlayerSummary,
    getOwnedGames
} from "../services/steamApi.js";

import { mapSteamGameSafe } from "../utils/gameMapper.js";
import { getProfileStats } from "../controllers/profileStatsController.js";
import { sendServerError } from "../utils/sendServerError.js";

const router = express.Router();

const defaultProfileDeps = { getPlayerSummary, getOwnedGames };

// Real Express entry point - always exactly 2 params. Deliberately NOT
// declared with a 3rd (deps) parameter, matching profileStatsController.js's
// own getProfileStats/getProfileStatsWithDeps split: Express calls every
// route handler as (req, res, next), so a 3rd declared parameter would
// silently receive Express's `next` instead of a test double.
// getProfileWithDeps below is the injectable version tests call directly,
// so this route's mapped-response shape (Finding 16, PHASE_53_AUDIT.md) can
// be verified without a live Steam API call.
export async function getProfile(req, res) {

    return getProfileWithDeps(req, res, defaultProfileDeps);

}

export async function getProfileWithDeps(req, res, deps) {

    const { getPlayerSummary, getOwnedGames } = deps;

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

            // Was raw, unmapped Steam data (no slug/catalog-merge/owned
            // flag) - every other game-returning endpoint already runs
            // owned games through mapSteamGameSafe (see routes/games.js,
            // gameDetail.js); this route had silently drifted out of sync
            // with that convention (Finding 16, PHASE_53_AUDIT.md).
            games: games.games.map(mapSteamGameSafe).filter(Boolean)

        });

    }

    catch (error) {

        sendServerError(res, error, "GET /api/profile");

    }

}

router.get("/profile", getProfile);

router.get("/profile/stats", getProfileStats);

export default router;