import express from "express";

import {
    getOwnedGames,
    getSchemaForGame,
    getGlobalAchievementPercentages,
    getPlayerAchievementsClassified,
    getCurrentPlayerCount
} from "../services/steamApi.js";

import {
    mapSteamGameSafe,
    mapPlannerOnlyGame
} from "../utils/gameMapper.js";

import { getAllPlannerSlugs } from "../utils/plannerCatalog.js";

import {
    mapSteamAchievements,
    mapPlayerAchievements
} from "../utils/steamAchievementMapper.js";

import { mergeAchievements } from "../utils/achievementMerger.js";

import { mapWithConcurrency } from "../utils/concurrencyLimiter.js";

import { classifyAchievementAvailability } from "../../src/utils/planner/achievement/availability.js";

import { selectPopularGames } from "../utils/popularGames.js";
import { sendServerError } from "../utils/sendServerError.js";

const router = express.Router();

// Same conservative starting point as profileStats.js's per-Profile-load
// fan-out - no documented Steam rate limit to target precisely.
const ACHIEVEMENT_AVAILABILITY_CONCURRENCY = 8;

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

        const playerCounts = new Map(

            await Promise.all(

                games

                    .filter(game => game.appid && game.appid > 0)

                    .map(async game => [

                        game.appid,

                        await getCurrentPlayerCount(game.appid)

                    ])

            )

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

router.get("/:slug", async (req, res) => {

    const { slug } = req.params;

    try {

        const steamId = req.session.user?.steamid;

        const library = steamId
            ? await getOwnedGames(steamId)
            : { games: [] };

        const games = library.games

            .map(mapSteamGameSafe)

            .filter(Boolean);

        const owned = games.find(game => game.slug === slug);

        // Not owned on Steam, but may still exist in our own catalog.
        const game = owned ?? mapPlannerOnlyGame(slug);

        if (!game) {

            return res.status(404).json({

                success: false,

                message: `Game not found: ${slug}`

            });

        }

        const hasAppid = game.appid && game.appid > 0;

        // schemaResult.status distinguishes "Steam confirms zero
        // achievements" from "we couldn't determine this right now" (see
        // steamApi.js's getSchemaForGame) - mapSteamAchievements itself
        // still only cares about the achievement array, so its own
        // `available` field keeps meaning "has achievements", not "fetch
        // succeeded". schemaResult.status is threaded through separately
        // below via achievementAvailability instead of overloading that
        // field's existing meaning.
        const schemaResult = hasAppid
            ? await getSchemaForGame(game.appid)
            : { achievements: [], status: "available" };

        const steamAchievements = mapSteamAchievements(
            schemaResult.achievements,
            hasAppid ? await getGlobalAchievementPercentages(game.appid) : []
        );

        // Classified so "Steam declined to answer" (private profile) and
        // "the request itself failed" are available here too, matching
        // profileStats.js's fan-out - needed to compute
        // achievementAvailability's "player-data-unavailable" state
        // correctly instead of collapsing it into an empty array.
        const playerResult = steamId && hasAppid
            ? await getPlayerAchievementsClassified(steamId, game.appid)
            : { achievements: [], status: null };

        const steamPlayerAchievements = mapPlayerAchievements(playerResult.achievements);

        const mergedAchievements = mergeAchievements(
            game.achievements,
            steamAchievements.achievements,
            steamPlayerAchievements.achievements
        );

        const achievementAvailability = classifyAchievementAvailability({

            schemaStatus: schemaResult.status,
            hasAchievements: schemaResult.achievements.length > 0,
            playerDataStatus: playerResult.status,
            hasPlanner: game.hasPlanner

        });

        res.json({

            success: true,

            game: {
                ...game,
                steamAchievements,
                steamPlayerAchievements,
                mergedAchievements,
                schemaStatus: schemaResult.status,
                hasSteamAchievements: schemaResult.achievements.length > 0,
                playerDataStatus: playerResult.status,
                achievementAvailability
            }

        });

    }

    catch (error) {

        sendServerError(res, error, "GET /api/games/:slug");

    }

});

export default router;