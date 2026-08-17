import { getStoredProgress } from "../storage.js";

export function isLocallyCompleted(slug, id) {

    const progress = getStoredProgress(slug);

    return !!progress[id];

}

export function findMergedEntry(game, id) {

    return game?.mergedAchievements?.achievements?.find(

        entry => entry.ap?.id === id

    ) ?? null;

}

// Shared completion resolver, ready for progress/filters/stats and the
// future Steam-authoritative UI to consume (not yet wired into them -
// that migration is later Phase 20 work).
//
// Priority:
//   1. Real Steam unlock state, when the player's own Steam achievement
//      data is available for this game.
//   2. The locally tracked completion state, for achievements matched
//      to a local/planner entry (or when there is no merged data at
//      all yet, e.g. legacy call sites that only pass a local id).
//   3. A Steam-only achievement with no player data has no way to be
//      resolved and is treated as not completed - never guessed true.
export function resolveAchievementCompletion(game, slug, id) {

    const merged = game?.mergedAchievements;

    const entry = findMergedEntry(game, id);

    if (merged?.playerDataAvailable && entry?.steamUnlock) {

        return !!entry.steamUnlock.achieved;

    }

    if (!merged || entry?.ap) {

        return isLocallyCompleted(slug, id);

    }

    return false;

}
