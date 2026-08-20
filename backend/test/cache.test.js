import { test } from "node:test";
import assert from "node:assert";

import { getCached, setCached } from "../utils/cache.js";

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
