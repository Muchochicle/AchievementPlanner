import { getLeaderboardDb } from "../services/leaderboardDb.js";
import {
    getGameLeaderboard,
    getUserGameRank,
    getGameLeaderboardSize,
    getGlobalLeaderboard,
    getUserGlobalRank,
    getGlobalLeaderboardSize,
    GLOBAL_LEADERBOARD_CATEGORIES,
    getProgressionLeaderboard,
    getUserProgressionRank,
    getProgressionLeaderboardSize,
    PROGRESSION_LEADERBOARD_METRICS
} from "../services/leaderboardStore.js";
import { sendServerError } from "../utils/sendServerError.js";

function getViewerSteamId(req) {

    return req.session.user?.steamid ?? null;

}

// Public leaderboard row shape - deliberately omits steam_id. The frontend
// only ever needs to know "is this row me?" to highlight it, never the
// actual Steam ID of other players, so that comparison happens here
// (server-side, where the viewer's own steamId is already known from the
// session) rather than shipping every row's raw steamId to the client.
function toPublicRow(row, viewerSteamId, valueKey) {

    return {

        personaName: row.personaName,
        avatarUrl: row.avatarUrl,
        [valueKey]: row.value ?? row.playtimeMinutes,
        isMe: viewerSteamId != null && row.steamId === viewerSteamId

    };

}

// Both podium endpoints share the same failure mode (an unexpected SQLite
// error) and the same generic 500 shape - wrapping each handler here keeps
// that boilerplate in one place instead of duplicated per handler.
function withErrorHandling(handler) {

    return (req, res) => {

        try {

            handler(req, res);

        } catch (error) {

            sendServerError(res, error, `${req.method} ${req.originalUrl}`);

        }

    };

}

// GET /api/podiums/game/:appid - the per-game playtime podium. Public (no
// login required) - only the `me`/`loggedIn` fields depend on the session.
export const getGamePodium = withErrorHandling((req, res) => {

    const appid = Number(req.params.appid);

    if (!Number.isInteger(appid) || appid <= 0) {

        return res.status(400).json({

            success: false,

            message: "Invalid appid"

        });

    }

    const db = getLeaderboardDb();
    const viewerSteamId = getViewerSteamId(req);

    const top10 = getGameLeaderboard(db, appid, { limit: 10 })
        .map(row => toPublicRow(row, viewerSteamId, "playtimeMinutes"));

    const me = viewerSteamId ? getUserGameRank(db, viewerSteamId, appid) : null;

    res.json({

        success: true,

        appid,
        top10,
        me,
        totalRanked: getGameLeaderboardSize(db, appid),
        loggedIn: viewerSteamId != null

    });

});

// GET /api/podiums/global/:category - one of the global leaderboards
// (see GLOBAL_LEADERBOARD_CATEGORIES in leaderboardStore.js). Public (no
// login required) - only the `me`/`loggedIn` fields depend on the session.
export const getGlobalPodium = withErrorHandling((req, res) => {

    const { category } = req.params;

    if (!GLOBAL_LEADERBOARD_CATEGORIES.includes(category)) {

        return res.status(400).json({

            success: false,

            message: `Unknown leaderboard category: ${category}`

        });

    }

    const db = getLeaderboardDb();
    const viewerSteamId = getViewerSteamId(req);

    const top10 = getGlobalLeaderboard(db, category, { limit: 10 })
        .map(row => toPublicRow(row, viewerSteamId, "value"));

    const me = viewerSteamId ? getUserGlobalRank(db, viewerSteamId, category) : null;

    res.json({

        success: true,

        category,
        top10,
        me,
        totalRanked: getGlobalLeaderboardSize(db, category),
        loggedIn: viewerSteamId != null

    });

});

// GET /api/podiums/progression/:metric - "level" or "longest-streak",
// ranked from the synced player_progress blob (see progressionMetrics.js's
// TRUST MODEL note). Same public/`me` shape as getGlobalPodium.
export const getProgressionPodium = withErrorHandling((req, res) => {

    const { metric } = req.params;

    if (!PROGRESSION_LEADERBOARD_METRICS.includes(metric)) {

        return res.status(400).json({

            success: false,

            message: `Unknown progression leaderboard metric: ${metric}`

        });

    }

    const db = getLeaderboardDb();
    const viewerSteamId = getViewerSteamId(req);

    const top10 = getProgressionLeaderboard(db, metric, { limit: 10 })
        .map(row => toPublicRow(row, viewerSteamId, "value"));

    const me = viewerSteamId ? getUserProgressionRank(db, viewerSteamId, metric) : null;

    res.json({

        success: true,

        metric,
        top10,
        me,
        totalRanked: getProgressionLeaderboardSize(db, metric),
        loggedIn: viewerSteamId != null

    });

});
