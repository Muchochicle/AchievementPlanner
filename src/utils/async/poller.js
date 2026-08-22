// Coordinates repeated calls to fetchLatest(), guaranteeing that onResult()
// is never invoked with a response older than the most recent one already
// delivered - regardless of which underlying request started first,
// resolved first, or failed. Generic and dependency-free (no DOM, no
// localStorage, no planner-specific concept), so it's reusable for any
// "periodically re-fetch and safely apply the freshest result" need in the
// app, not just game.js's Steam-sync polling this was built for.
//
// Sequencing is keyed off delivery order, not start order: a request that
// started earlier but is still the most recently *delivered* result stays
// current until something genuinely newer succeeds. A later-started
// request that ultimately fails must never suppress an earlier, still-valid
// success purely because it started after it - see poller.test.js's
// "older still-valid response" case for why comparing against "last
// started" instead of "last delivered" would get this wrong.
export function createPoller(fetchLatest, onResult) {

    let requestId = 0;

    let deliveredRequestId = 0;

    let timer = null;

    async function poll() {

        const thisRequestId = ++requestId;

        let result;

        try {

            result = await fetchLatest();

        } catch (error) {

            console.error("Poll failed:", error);

            return;

        }

        if (thisRequestId <= deliveredRequestId) {

            // A response from a request that started later has already
            // been delivered - this one is stale relative to what's
            // currently shown and must never overwrite it, no matter how
            // long it took to arrive.
            return;

        }

        deliveredRequestId = thisRequestId;

        try {

            onResult(result);

        } catch (error) {

            // A bug in the consumer's own handling of a fresh result must
            // not corrupt this poller's bookkeeping or stop future polls
            // from running - matches this app's existing convention of
            // catching and logging rather than letting one bad render take
            // down a recurring background process (see game.js's previous
            // pollSteamUpdates try/catch, which this replaces).
            console.error("Poller's onResult callback failed:", error);

        }

    }

    function start(intervalMs) {

        if (timer) {

            return;

        }

        timer = setInterval(poll, intervalMs);

    }

    function stop() {

        if (!timer) {

            return;

        }

        clearInterval(timer);

        timer = null;

    }

    return { poll, start, stop };

}
