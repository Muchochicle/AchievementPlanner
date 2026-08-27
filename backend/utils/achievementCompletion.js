// Backend's own copy of src/utils/planner/achievement/completion.js.
// Duplicated (not imported across the repo boundary) because this backend
// is deployed to Railway as a standalone Docker image built with Root
// Directory "backend" (see backend/railway.toml) - the build context is
// scoped to this directory alone, so a runtime import reaching out to
// ../../src (outside backend/) resolves fine locally but throws
// ERR_MODULE_NOT_FOUND in the deployed container, where that path never
// existed in the first place. backend/test/achievementLogicSync.test.js
// asserts this file's behavior stays identical to the frontend original,
// so the two can never silently drift apart the way a single shared file
// could never drift in the first place.
export function findMergedEntry(game, id) {

    return game?.mergedAchievements?.achievements?.find(

        entry => entry.ap?.id === id

    ) ?? null;

}

export function isEntryCompleted(merged, entry) {

    return !!(merged?.playerDataAvailable && entry?.steamUnlock?.achieved);

}

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
