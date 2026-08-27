// Backend's own copy of src/utils/planner/achievement/availability.js.
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
export function classifyAchievementAvailability({
    schemaStatus = "available",
    hasAchievements = false,
    playerDataStatus = null,
    hasPlanner = false
} = {}) {

    if (schemaStatus !== "available") {

        return "schema-unavailable";

    }

    if (!hasAchievements) {

        return "no-achievements";

    }

    if (playerDataStatus && playerDataStatus !== "available") {

        return "player-data-unavailable";

    }

    if (!hasPlanner) {

        return "planner-unavailable";

    }

    return "planner-available";

}

export const ACHIEVEMENT_AVAILABILITY_LABELS = Object.freeze({

    "no-achievements": "No Steam achievements",
    "schema-unavailable": "Steam achievement data unavailable",
    "player-data-unavailable": "Steam achievement data unavailable",
    "planner-unavailable": "Planner not available yet",
    "planner-available": null

});
