// Single source of truth for the 3 user-facing Steam-achievement-availability
// states, shared by the backend (which computes the classification from real
// Steam data - see gameAchievementSummary.js/routes/games.js) and the
// frontend (which only ever renders the precomputed result - catalog-card.js,
// game.js). Kept as one file, imported both sides, the same cross-import
// precedent as completion.js, so the classification logic and its display
// copy can never drift between the catalog card, the game page, and any
// future surface that needs this.
//
// Deliberately keeps 3 data-level facts distinct in the input (schemaStatus,
// hasAchievements, playerDataStatus) even though they collapse to only 3
// display strings - "schema request failed" and "player data unavailable"
// read the same to a user ("we don't have achievement data for this right
// now") but must never be merged upstream of this function, only here.
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

// null for "planner-available" - that state means "nothing special to show,
// render the normal planner experience," never a badge/message of its own.
export const ACHIEVEMENT_AVAILABILITY_LABELS = Object.freeze({

    "no-achievements": "No Steam achievements",
    "schema-unavailable": "Steam achievement data unavailable",
    "player-data-unavailable": "Steam achievement data unavailable",
    "planner-unavailable": "Planner not available yet",
    "planner-available": null

});
