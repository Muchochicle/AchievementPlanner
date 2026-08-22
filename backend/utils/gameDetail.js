import {
    getOwnedGames,
    getSchemaForGame,
    getGlobalAchievementPercentages,
    getPlayerAchievementsClassified
} from "../services/steamApi.js";

import {
    mapSteamGameSafe,
    mapPlannerOnlyGame
} from "./gameMapper.js";

import {
    mapSteamAchievements,
    mapPlayerAchievements
} from "./steamAchievementMapper.js";

import { mergeAchievements } from "./achievementMerger.js";

import { classifyAchievementAvailability } from "../../src/utils/planner/achievement/availability.js";

// Extracted from routes/games.js's GET /:slug handler (Phase 45 - see
// PHASE_45_AUDIT.md) so the single most complex, most consequential piece
// of backend logic in this app can be unit-tested with synthetic Steam
// responses, the same way gameAchievementSummary.js already is for the
// Profile aggregate - fetchOwnedGames/fetchSchema/fetchGlobalPercentages/
// fetchPlayerAchievements are injectable purely for that reason; every real
// caller (the route itself) uses the real steamApi.js functions via the
// defaults below.
//
// Returns null when slug matches neither an owned Steam game nor a catalog
// entry - callers translate that to their own "not found" response (the
// route returns 404). Otherwise returns the full enriched game object the
// Game page depends on: mergedAchievements (curated + Steam-only, with
// steamOnlyCount - see achievementMerger.js and Phases 40-43's audit docs
// for why this field specifically matters), schemaStatus,
// hasSteamAchievements, playerDataStatus, and achievementAvailability (see
// availability.js).
export async function getGameDetail(
    slug,
    steamId,
    {
        fetchOwnedGames = getOwnedGames,
        fetchSchema = getSchemaForGame,
        fetchGlobalPercentages = getGlobalAchievementPercentages,
        fetchPlayerAchievements = getPlayerAchievementsClassified
    } = {}
) {

    const library = steamId
        ? await fetchOwnedGames(steamId)
        : { games: [] };

    const games = library.games

        .map(mapSteamGameSafe)

        .filter(Boolean);

    const owned = games.find(game => game.slug === slug);

    // Not owned on Steam, but may still exist in our own catalog.
    const game = owned ?? mapPlannerOnlyGame(slug);

    if (!game) {

        return null;

    }

    const hasAppid = game.appid && game.appid > 0;

    // schemaResult.status distinguishes "Steam confirms zero achievements"
    // from "we couldn't determine this right now" (see steamApi.js's
    // getSchemaForGame) - mapSteamAchievements itself still only cares about
    // the achievement array, so its own `available` field keeps meaning
    // "has achievements", not "fetch succeeded". schemaResult.status is
    // threaded through separately below via achievementAvailability instead
    // of overloading that field's existing meaning.
    const schemaResult = hasAppid
        ? await fetchSchema(game.appid)
        : { achievements: [], status: "available" };

    // Only fetched when the schema actually has achievements to attach a
    // percentage to - mapSteamAchievements() returns early with an empty
    // list whenever schemaResult.achievements is empty (see
    // steamAchievementMapper.js), so a global-percentages fetch here would
    // otherwise be a real, wasted Steam API call whose result is guaranteed
    // to be discarded unread - true both when the schema fetch itself
    // failed (schemaResult.status "unavailable") and when Steam simply
    // confirms zero achievements for this game. Discovered and fixed during
    // Phase 45's test-writing (see PHASE_45_AUDIT.md) - the original route
    // fetched this unconditionally whenever hasAppid was true.
    const steamAchievements = mapSteamAchievements(
        schemaResult.achievements,
        hasAppid && schemaResult.achievements.length > 0
            ? await fetchGlobalPercentages(game.appid)
            : []
    );

    // Classified so "Steam declined to answer" (private profile) and "the
    // request itself failed" are available here too, matching
    // profileStats.js's fan-out - needed to compute achievementAvailability's
    // "player-data-unavailable" state correctly instead of collapsing it
    // into an empty array.
    const playerResult = steamId && hasAppid
        ? await fetchPlayerAchievements(steamId, game.appid)
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

    return {

        ...game,
        steamAchievements,
        steamPlayerAchievements,
        mergedAchievements,
        schemaStatus: schemaResult.status,
        hasSteamAchievements: schemaResult.achievements.length > 0,
        playerDataStatus: playerResult.status,
        achievementAvailability

    };

}
