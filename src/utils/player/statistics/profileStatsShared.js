import { fetchProfileStats } from "./profileStatsClient.js";

// One in-page-lifetime memoised GET /api/profile/stats. Both the Profile
// page (stat cards + completed-games section) and the background
// progression reconciler (progressionReconciler.js) need the same
// Steam-wide aggregate; without this they'd each fire their own request to
// an endpoint backed by a full-library scan. The backend already dedupes
// concurrent scans per steamId and caches the reduced result for 5
// minutes, so the duplicate was cheap server-side - but it was still a
// second HTTP round trip on every Profile load, which this removes.
//
// Deliberately not time-based: a single page load never needs these
// numbers to change under it, and the reconciler's own throttle
// (progressionReconciler.js) already bounds how often a *new* page load is
// allowed to fetch them at all. resetProfileStatsShared() exists for tests
// and for a future in-page "refresh my stats" affordance.
let sharedPromise = null;

export function getProfileStatsShared() {

    if (!sharedPromise) {

        sharedPromise = fetchProfileStats();

    }

    return sharedPromise;

}

export function resetProfileStatsShared() {

    sharedPromise = null;

}
