const store = new Map();

export function getCached(key) {

    const entry = store.get(key);

    if (!entry) {

        return undefined;

    }

    if (Date.now() >= entry.expiresAt) {

        store.delete(key);

        return undefined;

    }

    return entry.value;

}

export function setCached(key, value, ttlMs) {

    store.set(key, {

        value,

        expiresAt: Date.now() + ttlMs

    });

}

// Test-only: reports whether a key is still physically present in `store`,
// without going through getCached's own lazy-eviction-on-read side effect.
// Needed to prove sweepExpired() itself removes an expired entry that's
// never read again - the exact growth pattern Finding 11 fixes - rather
// than conflating that with getCached's pre-existing (and still correct)
// eviction-on-read behavior.
export function _hasRaw(key) {

    return store.has(key);

}

// getCached only ever evicts the exact key it's asked to read (line 13-19
// above) - a key that's set once and never read again (a one-time
// visitor's steamId, an appid nobody revisits) stays in `store` forever
// with a stale expiresAt, growing memory without bound over the server's
// lifetime (Finding 11, PHASE_51-53_AUDIT.md). This periodic sweep is the
// other half of the fix: it reclaims any entry whose TTL has passed,
// independent of whether anything ever reads that key again. 10 minutes is
// short relative to this app's longest TTLs (24h for Steam achievement
// schema/global-percentage caches) but comfortably longer than its
// shortest (30s for a transient-failure retry), so it never fights a
// legitimate cache hit while still keeping steady-state memory bounded to
// roughly "keys touched within their own TTL window" instead of "every key
// ever touched".
export const SWEEP_INTERVAL_MS = 10 * 60 * 1000;

// Exported (not just wired to the interval below) so tests can invoke a
// sweep pass directly and deterministically, without waiting on a real or
// mocked-timers interval to fire.
export function sweepExpired() {

    const now = Date.now();

    for (const [key, entry] of store) {

        if (now >= entry.expiresAt) {

            store.delete(key);

        }

    }

}

// unref() so this interval never keeps the Node process (or a test's
// spawned server child process) alive on its own - purely a background
// housekeeping tick, not something anything should ever wait on.
const sweepTimer = setInterval(sweepExpired, SWEEP_INTERVAL_MS);

sweepTimer.unref();
