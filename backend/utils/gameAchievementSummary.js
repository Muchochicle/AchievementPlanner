import {
    getSchemaForGame,
    getPlayerAchievementsClassified
} from "../services/steamApi.js";

import {
    mapSteamAchievements,
    mapPlayerAchievements
} from "./steamAchievementMapper.js";

import { mergeAchievements } from "./achievementMerger.js";

// completion.js has no browser/DOM dependency (no localStorage, no
// document, no window) - it's plain, framework-agnostic JS already
// imported directly by backend/test/completion.test.js under Node's own
// test runner. Reusing it here means the Profile aggregate and the game
// page share the exact same completion rule (isEntryCompleted) instead of
// a second implementation that could quietly drift from it again.
import { getMergedAchievementStats } from "../../src/utils/planner/achievement/completion.js";

// Fetches and merges one game's Steam achievement data and reduces it to
// {total, completed, playerDataStatus} - the profile aggregate's only
// building block. Deliberately does NOT fetch global achievement
// percentages (routes/games.js's single-game endpoint does, but that data
// is cosmetic per-achievement display only, never needed to compute
// completion counts) and does NOT return per-achievement detail - callers
// needing the full achievement list/detail should use routes/games.js's
// existing /:slug pipeline instead, which is untouched by this file.
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

        return { total: 0, completed: 0, playerDataStatus: "unavailable" };

    }

    const schemaAchievements = await fetchSchema(game.appid);

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

    return { total, completed, playerDataStatus: status };

}
