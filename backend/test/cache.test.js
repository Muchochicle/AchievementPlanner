import { test } from "node:test";
import assert from "node:assert";

import { getCached, setCached, sweepExpired, SWEEP_INTERVAL_MS, _hasRaw } from "../utils/cache.js";

// utils/cache.js is a shared module-level Map (see utils/cache.js:1), so
// every test below uses its own unique key to stay isolated from the
// others regardless of run order.

test("getCached returns undefined for a key that was never set", () => {

    assert.strictEqual(getCached("cache-test:never-set"), undefined);

});

test("setCached then getCached returns the stored value before expiry", () => {

    setCached("cache-test:basic", { hello: "world" }, 60_000);

    assert.deepStrictEqual(getCached("cache-test:basic"), { hello: "world" });

});

test("getCached returns undefined once the TTL has elapsed, and evicts the entry", (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    setCached("cache-test:expiring", "will expire", 1000);

    assert.strictEqual(getCached("cache-test:expiring"), "will expire", "should still be fresh immediately after being set");

    t.mock.timers.tick(1001);

    assert.strictEqual(getCached("cache-test:expiring"), undefined, "should be gone once its TTL has passed");

    // A second read after eviction must behave identically to a key that
    // was never set (not throw, not resurrect the expired value).
    assert.strictEqual(getCached("cache-test:expiring"), undefined);

});

test("setCached overwrites a previous value and resets its expiry", (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    setCached("cache-test:overwrite", "first", 1000);
    t.mock.timers.tick(900);

    setCached("cache-test:overwrite", "second", 1000);
    t.mock.timers.tick(900);

    // 1800ms of simulated time have passed since the first setCached call,
    // which is past the first write's own 1000ms TTL - but the second
    // write reset the clock 900ms in, so it should still be alive here.
    assert.strictEqual(getCached("cache-test:overwrite"), "second");

});

test("a zero-or-negative ttlMs makes the entry immediately expired", () => {

    setCached("cache-test:zero-ttl", "value", 0);

    assert.strictEqual(getCached("cache-test:zero-ttl"), undefined);

});

test("distinct keys do not interfere with each other's values or expiry", (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    setCached("cache-test:key-a", "a", 500);
    setCached("cache-test:key-b", "b", 5000);

    t.mock.timers.tick(600);

    assert.strictEqual(getCached("cache-test:key-a"), undefined, "key-a's shorter TTL should have expired");
    assert.strictEqual(getCached("cache-test:key-b"), "b", "key-b's longer TTL should still be alive");

});

// Finding 11 (PHASE_51-53_AUDIT.md): a key set once and never read again
// stayed in the module-level Map forever once expired, since only
// getCached's own lazy eviction ever removed anything. sweepExpired() is
// the fix - these tests prove it removes a stale, never-re-read entry on
// its own, without relying on getCached ever being called for that key
// again (which is exactly the real-world growth pattern being fixed).

test("sweepExpired removes an expired entry that was never read again after expiring", (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    setCached("cache-test:sweep-expired", "value", 1000);

    assert.strictEqual(_hasRaw("cache-test:sweep-expired"), true, "should be physically present right after being set");

    t.mock.timers.tick(1001);

    // Deliberately never call getCached() here - proving sweepExpired()
    // itself reclaims the entry, not getCached's own lazy eviction.
    assert.strictEqual(_hasRaw("cache-test:sweep-expired"), true, "must still be physically present before any sweep runs - not evicted just by time passing");

    sweepExpired();

    assert.strictEqual(_hasRaw("cache-test:sweep-expired"), false, "a sweep pass must remove it even though nothing ever read it after it expired");

});

test("sweepExpired leaves a not-yet-expired entry untouched", (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    setCached("cache-test:sweep-still-fresh", "value", 60_000);

    t.mock.timers.tick(1000);

    sweepExpired();

    assert.strictEqual(_hasRaw("cache-test:sweep-still-fresh"), true, "a sweep pass must never remove an entry whose TTL has not yet elapsed");
    assert.strictEqual(getCached("cache-test:sweep-still-fresh"), "value", "the value itself must still be intact after a sweep pass");

});

test("sweepExpired is safe to call with no entries in the store, and is idempotent", () => {

    assert.doesNotThrow(() => sweepExpired());
    assert.doesNotThrow(() => sweepExpired());

});

test("SWEEP_INTERVAL_MS is positive and shorter than every real TTL this cache is used with, so a sweep pass always eventually reclaims memory", () => {

    assert.strictEqual(typeof SWEEP_INTERVAL_MS, "number");
    assert.ok(SWEEP_INTERVAL_MS > 0);

    // 24h is the longest real TTL in use (Steam achievement schema /
    // global-percentage caches, see steamApi.js) - the sweep interval must
    // stay comfortably under that so those long-lived keys are still
    // reclaimed in bounded time once they actually expire.
    assert.ok(SWEEP_INTERVAL_MS < 24 * 60 * 60 * 1000);

});
