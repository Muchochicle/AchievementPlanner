import { getLeaderboardDb } from "../services/leaderboardDb.js";
import { getPlayerProgress, savePlayerProgress } from "../services/playerProgressStore.js";
import { sendServerError } from "../utils/sendServerError.js";
import { extractProgressionValue, clampSubmittedStreak } from "../utils/progressionMetrics.js";

// Generous ceiling on the serialized state blob (JSON.stringify'd chars) -
// the real payload is XP/level/badges/claimed-achievement-and-game lists/
// inventory, which even for a very long-time player is a few KB. This
// exists purely as abuse/defense-in-depth (a malformed or malicious client
// sending an enormous body), not a limit any legitimate client should ever
// approach.
const MAX_STATE_LENGTH = 200_000;

function getSteamId(req) {

    return req.session.user?.steamid ?? null;

}

// Returns `state` unchanged unless state.player.longestStreak is present
// and implausible given the previous save (see clampSubmittedStreak's own
// comment for the exact rule) - in which case it returns a shallow clone
// with just that one field corrected, never mutating the caller's object.
// `previous` is whatever getPlayerProgress returned (null for a brand-new
// account).
function clampStreakIfPresent(state, previous) {

    if (!state.player || typeof state.player !== "object") {

        return state;

    }

    const submittedStreak = state.player.longestStreak;

    if (typeof submittedStreak !== "number") {

        return state;

    }

    const previousStreak = extractProgressionValue(previous?.state ?? null, "longest-streak");

    const clamped = clampSubmittedStreak({

        submittedStreak,
        previousStreak,
        previousUpdatedAt: previous?.updatedAt ?? null

    });

    if (clamped === submittedStreak) {

        return state;

    }

    return { ...state, player: { ...state.player, longestStreak: clamped } };

}

// Real Express entry points (routes/player.js) - always exactly 2 params,
// matching this codebase's established getX/getXWithDeps split (see
// profileStatsController.js, routes/api.js's getProfile) so tests can
// inject an isolated database instead of touching the real singleton.
export async function getProgress(req, res) {

    return getProgressWithDeps(req, res, { getLeaderboardDb, getPlayerProgress });

}

export async function getProgressWithDeps(req, res, deps) {

    const { getLeaderboardDb, getPlayerProgress } = deps;

    const steamId = getSteamId(req);

    if (!steamId) {

        return res.status(401).json({

            success: false,

            message: "Not logged in"

        });

    }

    try {

        const db = getLeaderboardDb();
        const result = getPlayerProgress(db, steamId);

        res.json({

            success: true,

            state: result?.state ?? null,
            updatedAt: result?.updatedAt ?? null

        });

    } catch (error) {

        sendServerError(res, error, "GET /api/player/progress");

    }

}

export async function putProgress(req, res) {

    return putProgressWithDeps(req, res, { getLeaderboardDb, getPlayerProgress, savePlayerProgress });

}

export async function putProgressWithDeps(req, res, deps) {

    const { getLeaderboardDb, getPlayerProgress, savePlayerProgress } = deps;

    const steamId = getSteamId(req);

    if (!steamId) {

        return res.status(401).json({

            success: false,

            message: "Not logged in"

        });

    }

    const state = req.body?.state;

    // Only a plain object is accepted - an array or primitive would be a
    // malformed client, and letting one through would just be reflected
    // back verbatim as "progress" on the next GET, confusing whatever
    // frontend code reads state.player/.inventory/.equippedAvatar off it.
    if (state === null || typeof state !== "object" || Array.isArray(state)) {

        return res.status(400).json({

            success: false,

            message: "Invalid state payload"

        });

    }

    const serialized = JSON.stringify(state);

    if (serialized.length > MAX_STATE_LENGTH) {

        return res.status(413).json({

            success: false,

            message: "State payload too large"

        });

    }

    try {

        const db = getLeaderboardDb();

        // The state blob is otherwise stored opaquely, as-submitted (see
        // the table comment in leaderboardDb.js) - longestStreak is the one
        // deliberate exception, because it is also the one ranked stat with
        // no Steam-side authority to derive it from instead (unlike
        // "level" - see progressionMetrics.js's TRUST MODEL note). Reading
        // the previous save here, rather than trusting only what this
        // request claims, is what makes clampSubmittedStreak's bound
        // actually enforceable rather than just a client-side promise.
        const previous = getPlayerProgress(db, steamId);
        const stateToStore = clampStreakIfPresent(state, previous);

        const updatedAt = savePlayerProgress(db, steamId, JSON.stringify(stateToStore));

        res.json({

            success: true,

            updatedAt

        });

    } catch (error) {

        sendServerError(res, error, "PUT /api/player/progress");

    }

}
