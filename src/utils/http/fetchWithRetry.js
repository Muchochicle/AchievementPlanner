import { fetchWithTimeout } from "./fetchWithTimeout.js";

// Backend cold-start resilience for the read-only catalog requests
// (gameService.js's getGamesIndex / getPopularGames).
//
// The production backend runs as a single container (Railway) that can be
// briefly unavailable while it wakes from idle or a redeploy: the first
// request after a quiet period comes back as a 502/503/504 from the
// platform edge, or as a fetch rejection / AbortError timeout, and then
// succeeds within a second or two once the process is warm. Without a
// retry that transient blip surfaces to the visitor as the full "we
// couldn't load the games catalog" error state on an otherwise healthy
// site, cleared only by a manual reload.
//
// Scope is deliberately narrow:
//   - ONE retry only (two attempts total), after a short fixed pause;
//   - only for genuinely transient failures: a rejected/timed-out fetch,
//     or an HTTP 502/503/504. Any other response - including every normal
//     4xx - is returned from the first attempt untouched and never
//     retried;
//   - for idempotent GETs only, by caller contract. Do not use this for a
//     POST or any other non-idempotent request.
//
// On a second failure this behaves exactly as a bare fetchWithTimeout
// would have: the same rejection propagates, or the same Response object
// is returned. Every existing caller's `!response.ok` / try-catch path is
// therefore unchanged - a total outage looks identical to before, it just
// takes one extra `retryDelayMs` to get there.

const RETRY_DELAY_MS = 600;
const TRANSIENT_STATUSES = new Set([502, 503, 504]);

function wait(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));

}

export async function fetchWithRetry(
    url,
    options = {},
    { retryDelayMs = RETRY_DELAY_MS, timeoutMs } = {}
) {

    try {

        const response = await fetchWithTimeout(url, options, timeoutMs);

        // A resolved response that isn't one of the transient gateway
        // statuses is the real answer - success or a normal 4xx alike.
        if (!TRANSIENT_STATUSES.has(response.status)) {

            return response;

        }

        await wait(retryDelayMs);

        return await fetchWithTimeout(url, options, timeoutMs);

    } catch {

        // fetch only rejects for a network failure or an AbortError
        // (fetchWithTimeout's own timeout) - both transient by nature, so
        // the single retry applies. A second failure rejects as before.
        await wait(retryDelayMs);

        return await fetchWithTimeout(url, options, timeoutMs);

    }

}
