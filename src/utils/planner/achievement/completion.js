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

// Entry-level resolver - the shared priority logic, usable both by id
// lookup (below) and by callers iterating the full merged list directly
// (Steam-only entries have no local id to look up by). Assumes `merged`
// and `entry` both come from a real game.mergedAchievements - callers
// with no merged data at all fall back before reaching this function.
//
// Priority:
//   1. Real Steam unlock state, when the player's own Steam achievement
//      data is available for this game.
//   2. The locally tracked completion state, for achievements matched
//      to a local/planner entry.
//   3. A Steam-only achievement with no player data has no way to be
//      resolved and is treated as not completed - never guessed true.
export function isEntryCompleted(merged, entry, slug) {

    if (merged?.playerDataAvailable && entry?.steamUnlock) {

        return !!entry.steamUnlock.achieved;

    }

    if (entry?.ap) {

        return isLocallyCompleted(slug, entry.ap.id);

    }

    return false;

}

// Shared completion resolver, ready for progress/filters/stats and the
// future Steam-authoritative UI to consume (not yet wired into all of
// them - that migration is later Phase 20 work).
export function resolveAchievementCompletion(game, slug, id) {

    const merged = game?.mergedAchievements;

    if (!merged) {

        // No merged data at all (legacy call site) - fall back to the
        // locally tracked state for this id directly.
        return isLocallyCompleted(slug, id);

    }

    return isEntryCompleted(merged, findMergedEntry(game, id), slug);

}

// Aggregate stats over the full merged achievement list - the
// authoritative total/completed/percentage for the game page, backed by
// game.mergedAchievements rather than the legacy local-only list.
export function getMergedAchievementStats(game, slug) {

    const entries = game?.mergedAchievements?.achievements ?? [];

    const merged = game?.mergedAchievements;

    const total = entries.length;

    const completed = entries.filter(

        entry => isEntryCompleted(merged, entry, slug)

    ).length;

    const percentage = total
        ? Math.round(completed / total * 100)
        : 0;

    return { total, completed, percentage };

}
