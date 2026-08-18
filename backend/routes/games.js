import express from "express";

import {
    getOwnedGames,
    getSchemaForGame,
    getGlobalAchievementPercentages,
    getPlayerAchievements,
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

import { selectPopularGames } from "../utils/popularGames.js";

const router = express.Router();

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

    // Planners locales que el usuario NO posee en Steam.
    const catalogOnlyGames = getAllPlannerSlugs()

        .filter(slug => !ownedSlugs.has(slug))

        .map(mapPlannerOnlyGame)

        .filter(Boolean);

    return [...ownedGames, ...catalogOnlyGames];

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

        res.status(500).json({

            success: false,

            message: error.message

        });

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

        res.status(500).json({

            success: false,

            message: error.message

        });

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

        // No lo posee en Steam, pero puede existir en el catálogo propio.
        const game = owned ?? mapPlannerOnlyGame(slug);

        if (!game) {

            return res.status(404).json({

                success: false,

                message: `Game not found: ${slug}`

            });

        }

        const steamAchievements = game.appid && game.appid > 0
            ? mapSteamAchievements(
                await getSchemaForGame(game.appid),
                await getGlobalAchievementPercentages(game.appid)
            )
            : { available: false, achievements: [] };

        const steamPlayerAchievements = steamId && game.appid && game.appid > 0
            ? mapPlayerAchievements(
                await getPlayerAchievements(steamId, game.appid)
            )
            : { available: false, achievements: [] };

        const mergedAchievements = mergeAchievements(
            game.achievements,
            steamAchievements.achievements,
            steamPlayerAchievements.achievements
        );

        res.json({

            success: true,

            game: {
                ...game,
                steamAchievements,
                steamPlayerAchievements,
                mergedAchievements
            }

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