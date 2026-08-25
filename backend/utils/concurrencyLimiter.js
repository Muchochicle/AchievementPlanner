// Runs fn(item) over items with at most `limit` in flight at once, and
// never lets one item's rejection abort the rest - a Profile aggregate
// scanning 100+ games needs every game's outcome, not a fail-fast crash
// on the first Steam hiccup. Shape matches Promise.allSettled (in the
// same order as `items`) so callers can distinguish success from failure
// per item without a second try/catch layer.
export async function mapWithConcurrency(items, limit, fn) {

    const results = new Array(items.length);

    let nextIndex = 0;

    async function worker() {

        while (nextIndex < items.length) {

            const current = nextIndex++;

            try {

                results[current] = {
                    status: "fulfilled",
                    value: await fn(items[current], current)
                };

            } catch (error) {

                results[current] = {
                    status: "rejected",
                    reason: error
                };

            }

        }

    }

    // Every current caller passes a hardcoded positive constant, but a
    // future caller computing `limit` dynamically (e.g. from an env var)
    // could pass 0 or a negative number - Math.min alone would then spawn
    // zero workers, silently leaving every entry in `results` as a hole
    // instead of the {status, ...} shape every caller relies on. Clamped
    // to at least 1 whenever there's actually something to process
    // (Phase 67).
    const workerCount = items.length === 0
        ? 0
        : Math.max(1, Math.min(limit, items.length));

    await Promise.all(
        Array.from({ length: workerCount }, worker)
    );

    return results;

}
