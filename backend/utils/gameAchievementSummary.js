import {
    getSchemaForGame,
    getPlayerAchievementsClassified
} from "../services/steamApi.js";

import {
    mapSteamAchievements,
    mapPlayerAchievements
} from "./steamAchievementMapper.js";

import { mergeAchievements } from "./achievementMerger.js";

// See achievementCompletion.js's own header comment for why this is a
// backend-local copy of the frontend's completion.js rather than a
// cross-directory import - Docker build context isolation, kept in sync
// by backend/test/achievementLogicSync.test.js.
import { getMergedAchievementStats } from "./achievementCompletion.js";

// Fetches and merges one game's Steam achievement data and reduces it to
// {total, completed, playerDataStatus, schemaStatus, hasAchievements} - the
// profile aggregate's only building block. Deliberately does NOT fetch
// global achievement percentages (routes/games.js's single-game endpoint
// does, but that data is cosmetic per-achievement display only, never
// needed to compute completion counts) and does NOT return per-achievement
// detail - callers needing the full achievement list/detail should use
// routes/games.js's existing /:slug pipeline instead, which is untouched by
// this file.
//
// schemaStatus/hasAchievements are kept distinct from total/completed on
// purpose: `total` is the *merged* (AP + Steam) achievement count, which for
// a curated planner can differ from Steam's own raw schema count, while
// "does Steam itself report any achievements for this game" (used by the
// Profile "games with Steam achievements" stat and the achievement-
// availability states in availability.js) must always answer from the real
// Steam schema alone.
//
// fetchSchema/fetchPlayerAchievements are injectable purely so tests can
// exercise the classification/merge/reduction logic with synthetic Steam
// responses instead of mocking network calls.
export async function getGameAchievementSummary(
    steamId,
    game,
    {
        fetchSchema = getSchemaForGame,
        fetchPlayerAchievements = getPlayerAchievementsClassified
    } = {}
) {

    if (!(game?.appid > 0)) {

        return {
            total: 0,
            completed: 0,
            playerDataStatus: "unavailable",
            schemaStatus: "available",
            hasAchievements: false
        };

    }

    const { achievements: schemaAchievements, status: schemaStatus } =
        await fetchSchema(game.appid);

    const steamAchievements = mapSteamAchievements(schemaAchievements, []);

    const { achievements: rawPlayerAchievements, status } =
        await fetchPlayerAchievements(steamId, game.appid);

    const steamPlayerAchievements = mapPlayerAchievements(rawPlayerAchievements);

    const merged = mergeAchievements(
        game.achievements ?? [],
        steamAchievements.achievements,
        steamPlayerAchievements.achievements
    );

    const { total, completed } = getMergedAchievementStats({
        mergedAchievements: merged
    });

    return {
        total,
        completed,
        playerDataStatus: status,
        schemaStatus,
        hasAchievements: schemaAchievements.length > 0
    };

}
