import express from "express";

import {
    getOwnedGames,
    getSchemaForGame,
    getCurrentPlayerCount
} from "../services/steamApi.js";

import {
    mapSteamGameSafe,
    mapPlannerOnlyGame
} from "../utils/gameMapper.js";

import { getAllPlannerSlugs } from "../utils/plannerCatalog.js";

import { mapWithConcurrency } from "../utils/concurrencyLimiter.js";

import { classifyAchievementAvailability } from "../../src/utils/planner/achievement/availability.js";

import { selectPopularGames } from "../utils/popularGames.js";
import { sendServerError } from "../utils/sendServerError.js";

import { getGameDetail } from "../utils/gameDetail.js";

const router = express.Router();

// Same conservative starting point as profileStats.js's per-Profile-load
// fan-out - no documented Steam rate limit to target precisely.
const ACHIEVEMENT_AVAILABILITY_CONCURRENCY = 8;

// /popular's own fan-out target isn't bounded by this app's 3-game catalog -
// buildGamesList() merges in the visitor's entire owned Steam library (see
// below), so a visitor with a large library previously fired one unbounded
// Promise.all request per owned game simultaneously (see
// PHASE_49_AUDIT.md Finding 4-refined). Same conservative value/reasoning as
// ACHIEVEMENT_AVAILABILITY_CONCURRENCY above, for the same class of problem.
const POPULAR_PLAYER_COUNT_CONCURRENCY = 8;

// Attaches achievementAvailability (see availability.js) to every owned,
// non-planner game in the list - the only games whose catalog card needs to
// distinguish "no Steam achievements" from "Steam has achievements, just no
// curated planner yet" from "we don't know right now" (see gameMapper.js's
// no-hasPlanner card branch). Deliberately skips games that already have a
// curated planner (their card never shows this messaging, so the fetch
// would be pure waste) and unowned catalog-only games (always hasPlanner,
// same reason) - this keeps the fan-out bounded to exactly the games that
// need it instead of scanning the whole library on every listing load.
// getSchemaForGame's own 24h cache means only the first cold load per appid
// pays the real Steam round-trip.
async function attachAchievementAvailability(games) {

    const needsCheck = games.filter(

        game => game.owned !== false && !game.hasPlanner && game.appid > 0

    );

    if (!needsCheck.length) {

        return games;

    }

    const settled = await mapWithConcurrency(

        needsCheck,
        ACHIEVEMENT_AVAILABILITY_CONCURRENCY,

        async game => {

            const { achievements, status } = await getSchemaForGame(game.appid);

            return {

                slug: game.slug,
                schemaStatus: status,
                hasSteamAchievements: achievements.length > 0

            };

        }

    );

    const infoBySlug = new Map();

    for (const result of settled) {

        if (result.status === "fulfilled") {

            infoBySlug.set(result.value.slug, result.value);

        }

    }

    return games.map(game => {

        const info = infoBySlug.get(game.slug);

        if (!info) {

            return game;

        }

        return {

            ...game,
            schemaStatus: info.schemaStatus,
            hasSteamAchievements: info.hasSteamAchievements,
            achievementAvailability: classifyAchievementAvailability({

                schemaStatus: info.schemaStatus,
                hasAchievements: info.hasSteamAchievements,
                hasPlanner: game.hasPlanner

            })

        };

    });

}

// Shared by "/" and "/popular" - the visitor's owned Steam games plus the
// local catalog entries they don't own, exactly the same merge either
// route needs before applying its own filtering/ranking on top.
async function buildGamesList(req) {

    const steamId = req.session.user?.steamid;

    const library = steamId
        ? await getOwnedGames(steamId)
        : { games: [] };

    const ownedGames = library.games

        .map(mapSteamGameSafe)

        .filter(Boolean);

    const ownedSlugs = new Set(

        ownedGames.map(game => game.slug)

    );

    // Local catalog planners the user does NOT own on Steam.
    const catalogOnlyGames = getAllPlannerSlugs()

        .filter(slug => !ownedSlugs.has(slug))

        .map(mapPlannerOnlyGame)

        .filter(Boolean);

    return attachAchievementAvailability([...ownedGames, ...catalogOnlyGames]);

}

router.get("/", async (req, res) => {

    try {

        const games = await buildGamesList(req);

        res.json({

            success: true,

            count: games.length,

            games

        });

    }

    catch (error) {

        sendServerError(res, error, "GET /api/games");

    }

});

// Ranks our own catalog by real, live Steam concurrent-player counts
// (ISteamUserStats/GetNumberOfCurrentPlayers - official, unauthenticated).
// Never a fabricated/internal popularity score - a game with no reliable
// count is simply left out of the ranking, not shown with a fake value.
router.get("/popular", async (req, res) => {

    try {

        const games = await buildGamesList(req);

        const candidates = games.filter(game => game.appid && game.appid > 0);

        const settled = await mapWithConcurrency(

            candidates,
            POPULAR_PLAYER_COUNT_CONCURRENCY,

            async game => [

                game.appid,

                await getCurrentPlayerCount(game.appid)

            ]

        );

        const playerCounts = new Map(

            settled

                .filter(result => result.status === "fulfilled")

                .map(result => result.value)

        );

        const popular = selectPopularGames(games, playerCounts);

        res.json({

            success: true,

            games: popular

        });

    }

    catch (error) {

        sendServerError(res, error, "GET /api/games/popular");

    }

});

// Thin wrapper: all the actual owned/catalog resolution, Steam schema/
// player-data fetching, achievement merging, and availability classification
// lives in gameDetail.js's getGameDetail() (Phase 45 - see
// PHASE_45_AUDIT.md), specifically so that logic can be unit-tested with
// injected, synthetic Steam responses instead of only ever being exercised
// through a live server + real network calls.
router.get("/:slug", async (req, res) => {

    const { slug } = req.params;

    try {

        const steamId = req.session.user?.steamid;

        const game = await getGameDetail(slug, steamId);

        if (!game) {

            return res.status(404).json({

                success: false,

                message: `Game not found: ${slug}`

            });

        }

        res.json({

            success: true,

            game

        });

    }

    catch (error) {

        sendServerError(res, error, "GET /api/games/:slug");

    }

});

export default router;