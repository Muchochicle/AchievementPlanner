import express from "express";

import { getOwnedGames } from "../services/steamApi.js";

import { mapSteamGame } from "../utils/gameMapper.js";
import { getPlannerData } from "../utils/plannerCatalog.js";

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

router.get("/:slug", async (req, res) => {

    const { slug } = req.params;

    try {

        const library = await getOwnedGames(MY_STEAM_ID);

        const games = library.games.map(mapSteamGame);

        const owned = games.find(game => game.slug === slug);

        if (owned) {

            return res.json({

                success: true,

                game: owned

            });

        }

        // No lo posee en Steam, pero puede existir en el catálogo propio.
        const planner = getPlannerData(slug);

        if (planner) {

            return res.json({

                success: true,

                game: {

                    appid: planner.steamAppId ?? planner.id ?? null,

                    slug,

                    title: planner.name ?? slug,

                    image: planner.image ?? null,

                    owned: false,

                    hasPlanner: true,

                    difficulty: planner.difficulty ?? null,

                    completionTime: planner.completionTime ?? null,

                    missable: planner.missable ?? null,

                    playthroughs: planner.playthroughs ?? null,

                    hasGuide: planner.hasGuide ?? false,

                    genres: planner.genres ?? [],

                    achievements: planner.achievements ?? []

                }

            });

        }

        res.status(404).json({

            success: false,

            message: `Game not found: ${slug}`

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