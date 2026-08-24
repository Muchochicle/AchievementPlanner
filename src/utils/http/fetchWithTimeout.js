// Shared timeout guard for every frontend fetch call to this app's own
// backend. None of gameService.js/podiumsClient.js/profileStatsClient.js/
// steamSession.js previously bounded how long a request could hang -
// unlike the backend's own calls to Steam (see backend/services/
// steamApi.js's steamFetch/REQUEST_TIMEOUT_MS, the exact pattern this
// mirrors), a genuinely unresponsive backend (a restart mid-request, a
// network partition) left the browser's fetch() waiting indefinitely, with
// no user-visible feedback and no bounded wait (Phase 61,
// PHASE_61_AUDIT.md). 20s is deliberately generous - long enough to never
// false-positive on a legitimately slow-but-working request (the
// backend's own Steam-call timeout alone is already 8s, plus real network
// round-trip overhead), short enough that a user isn't left staring at a
// stuck loading state forever.
const DEFAULT_TIMEOUT_MS = 20000;

export async function fetchWithTimeout(url, options = {}, timeoutMs = DEFAULT_TIMEOUT_MS) {

    const controller = new AbortController();

    const timeout = setTimeout(
        () => controller.abort(),
        timeoutMs
    );

    try {

        return await fetch(url, { ...options, signal: controller.signal });

    } finally {

        clearTimeout(timeout);

    }

}
