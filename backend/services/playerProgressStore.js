// Phase 71: read/write access to the player_progress table (see
// leaderboardDb.js's initSchema for the table's own rationale). Mirrors
// leaderboardStore.js's plain "pass in a db, get/return plain data" shape,
// so both are equally easy to unit-test against an isolated in-memory
// database instead of the real singleton.

// Returns { state, updatedAt } (state already JSON.parse'd) or null when
// this steamId has never synced progress before - callers use null to
// distinguish "no server copy yet, seed it from local state" from
// "server copy exists and is authoritative" (see src/utils/player/sync/
// playerSync.js).
export function getPlayerProgress(db, steamId) {

    const row = db.prepare(
        "SELECT state, updated_at AS updatedAt FROM player_progress WHERE steam_id = ?"
    ).get(steamId);

    if (!row) {

        return null;

    }

    try {

        return { state: JSON.parse(row.state), updatedAt: row.updatedAt };

    } catch (error) {

        // Defensive only - every write goes through savePlayerProgress
        // below, which always stores a JSON.stringify'd object, so this
        // should never actually happen. Degrades to "no usable progress"
        // rather than throwing and taking down the whole request, matching
        // safeParseJSON's "corrupted stored value" convention on the
        // frontend (src/utils/storage/safeJson.js).
        console.warn(`[playerProgressStore] Corrupted state JSON for steamId=${steamId}:`, error.message);

        return null;

    }

}

// stateJson must already be a JSON.stringify'd string - validating/
// serializing the caller's object is the controller's job (see
// playerProgressController.js), not this data-access layer's. Returns the
// server-assigned updated_at timestamp.
export function savePlayerProgress(db, steamId, stateJson) {

    const now = new Date().toISOString();

    db.prepare(`
        INSERT INTO player_progress (steam_id, state, updated_at)
        VALUES (?, ?, ?)
        ON CONFLICT(steam_id) DO UPDATE SET
            state      = excluded.state,
            updated_at = excluded.updated_at
    `).run(steamId, stateJson, now);

    return now;

}

// Deletes ONLY this steamId's player_progress row - the account's stored
// AchievementPlanner progression (XP/level/badges/streak/inventory/equipped
// avatar blob). Deliberately touches nothing else: the users,
// user_game_playtime, sessions and contact_messages tables are all left
// intact, so the visitor stays logged in and their Steam-derived data is
// untouched (see DELETE /api/player/progress in playerProgressController.js
// and the Profile "delete progression data" control that calls it).
// Idempotent - deleting a row that isn't there is a no-op, not an error;
// the boolean return ("did a row actually go away") is informational only,
// never surfaced to the caller as failure.
export function deletePlayerProgress(db, steamId) {

    const result = db.prepare(
        "DELETE FROM player_progress WHERE steam_id = ?"
    ).run(steamId);

    return result.changes > 0;

}
