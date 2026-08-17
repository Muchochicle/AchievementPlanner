export function findMergedEntry(game, id) {

    return game?.mergedAchievements?.achievements?.find(

        entry => entry.ap?.id === id

    ) ?? null;

}

// Steam is the sole source of truth for achievement completion. There is
// no local/manual fallback: without real Steam player data for this
// game, completion is unknown and must never be inferred from anything
// else (a checkbox, local storage, etc.) - it simply reads as "not
// completed" until Steam confirms otherwise.
export function isEntryCompleted(merged, entry) {

    return !!(merged?.playerDataAvailable && entry?.steamUnlock?.achieved);

}

// Aggregate stats over the full merged achievement list - the
// authoritative total/completed/percentage for the game page, backed
// entirely by game.mergedAchievements / Steam player data.
export function getMergedAchievementStats(game) {

    const entries = game?.mergedAchievements?.achievements ?? [];

    const merged = game?.mergedAchievements;

    const total = entries.length;

    const completed = entries.filter(

        entry => isEntryCompleted(merged, entry)

    ).length;

    const percentage = total
        ? Math.round(completed / total * 100)
        : 0;

    return { total, completed, percentage };

}
