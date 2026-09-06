import { getProfileStatsShared } from "./profileStatsShared.js";
import { reconcileProgressFromProfileStats } from "../playerProgress.js";

// --- Why this module exists ------------------------------------------------
//
// completedAchievements/completedGames/totalXP (and, through them,
// avatars/badges) are only ever advanced locally by achievementManager.js/
// gameCompletion.js, which run *only* while browsing one specific game's
// planner page. reconcileProgressFromProfileStats() closes that gap by
// raising the local counters to a player's real Steam-wide totals - but it
// used to run in exactly one place: profile.js, i.e. only if the player
// opened their Profile. A player who never visits Profile had their XP,
// level, avatars and badges permanently stuck below their real progress.
//
// This module makes that reconciliation happen on any page (wired into
// layout.js's loadNavbar), while keeping the cost bounded:
//
//   * throttle - at most one reconcile-driven /api/profile/stats fetch per
//     RECONCILE_MIN_INTERVAL_MS per browser, tracked by a localStorage
//     checkpoint. A page that already has this data (Profile via
//     getProfileStatsShared, Games via /api/profile/game-stats) reconciles
//     from what it fetched anyway and stamps the checkpoint, so the next
//     page's background reconcile is skipped entirely.
//   * single-flight - concurrent callers within one page load share one
//     promise.
//   * monotonic + idempotent - reconcileProgressFromProfileStats() only
//     ever raises counters, never lowers them, and re-running with the same
//     numbers is a no-op (no XP granted, no sync push).
//
// The one unavoidable cost - a single full-library scan the first time a
// browser has gone RECONCILE_MIN_INTERVAL_MS without one - is the minimum
// required to reconcile against Steam at all, and is still far less Steam/
// backend load than the previous "every Profile load" trigger.

const CHECKPOINT_KEY = "achievement-planner-reconcile-checkpoint";

// 30 min: achievement/completion counts don't move minute to minute, so a
// half-hour staleness on XP/badge reconciliation is imperceptible, and
// this caps an actively-browsing visitor at ~2 scans/hour (0 if they pass
// through Profile or Games, which stamp the checkpoint for free).
export const RECONCILE_MIN_INTERVAL_MS = 30 * 60 * 1000;

let inFlight = null;

function readCheckpoint() {

    try {

        const raw = localStorage.getItem(CHECKPOINT_KEY);
        const value = raw == null ? 0 : Number(raw);

        return Number.isFinite(value) ? value : 0;

    } catch {

        return 0;

    }

}

// Exported for tests and for callers that want to reason about the
// throttle; `now` is injectable so a test never has to sleep.
export function isReconcileDue(now = Date.now()) {

    return now - readCheckpoint() >= RECONCILE_MIN_INTERVAL_MS;

}

// Stamp "progression is caught up as of now" - only ever called after a
// genuinely successful reconcile against real Steam data (never after an
// error/logged-out result, so a failed attempt is retried on the next
// page load rather than suppressed for the full interval).
export function markReconciled(now = Date.now()) {

    try {

        localStorage.setItem(CHECKPOINT_KEY, String(now));

    } catch {

        // A browser that can't persist the checkpoint just reconciles once
        // per page load instead of once per interval - still correct,
        // still monotonic, just slightly less frugal.

    }

}

// Test hook: clear the in-flight guard and the throttle checkpoint.
export function resetReconcilerState() {

    inFlight = null;

    try {

        localStorage.removeItem(CHECKPOINT_KEY);

    } catch {

        // ignore - nothing to clear

    }

}

// Games-page path: the Games page already fetches the Steam-wide aggregate
// as part of GET /api/profile/game-stats (for its per-game sorts/filters).
// Reconcile straight from that - no extra request - and stamp the
// checkpoint so layout.js's background reconcile stands down for this load.
export function reconcileAggregateProgress({ achievements, completedGames } = {}) {

    // Guard against an aggregate that didn't actually arrive (older backend
    // mid-rollout, or a partial response): don't stamp the throttle
    // checkpoint off nothing, so a later page still gets its chance to
    // reconcile properly.
    if (typeof achievements !== "number" && typeof completedGames !== "number") {

        return { status: "skipped", reason: "no-aggregate", changed: false };

    }

    const changed = reconcileProgressFromProfileStats({ achievements, completedGames });

    markReconciled();

    return { status: "ready", changed: Boolean(changed) };

}

// Background path (layout.js): reconcile this browser's local progression
// against live Steam totals, at most once per RECONCILE_MIN_INTERVAL_MS.
// Never throws. Returns { status, changed } so the caller can refresh the
// navbar player-widget only when something actually moved.
export function reconcileProgressionOnLoad(session, { force = false } = {}) {

    if (!session?.logged) {

        return Promise.resolve({ status: "skipped", reason: "logged-out" });

    }

    if (!force && !isReconcileDue()) {

        return Promise.resolve({ status: "skipped", reason: "throttled" });

    }

    if (inFlight) {

        return inFlight;

    }

    inFlight = (async () => {

        let result;

        try {

            result = await getProfileStatsShared();

        } catch (error) {

            return { status: "error", error };

        }

        if (result?.status !== "ready") {

            // "logged-out" (session expired mid-visit) or "error" - leave
            // the checkpoint untouched so the next page load retries.
            return { status: result?.status ?? "error" };

        }

        const changed = reconcileProgressFromProfileStats(result);

        markReconciled();

        return { status: "ready", changed: Boolean(changed) };

    })().finally(() => {

        inFlight = null;

    });

    return inFlight;

}
