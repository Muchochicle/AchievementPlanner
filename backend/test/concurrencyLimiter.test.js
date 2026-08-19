import { test } from "node:test";
import assert from "node:assert";

import { mapWithConcurrency } from "../utils/concurrencyLimiter.js";

test("processes every item and preserves order in the results array", async () => {

    const items = [1, 2, 3, 4, 5];

    const results = await mapWithConcurrency(items, 2, async n => n * 10);

    assert.deepStrictEqual(
        results.map(r => r.value),
        [10, 20, 30, 40, 50]
    );

});

test("never runs more than `limit` items concurrently", async () => {

    const items = Array.from({ length: 12 }, (_, i) => i);

    let active = 0;
    let maxActive = 0;

    await mapWithConcurrency(items, 3, async () => {

        active++;
        maxActive = Math.max(maxActive, active);

        await new Promise(resolve => setTimeout(resolve, 10));

        active--;

    });

    assert.ok(maxActive <= 3, `expected max concurrency <= 3, saw ${maxActive}`);
    assert.ok(maxActive > 1, "expected some real overlap, not fully serial execution");

});

test("one item's rejection does not abort the others or the whole batch", async () => {

    const items = [1, 2, 3];

    const results = await mapWithConcurrency(items, 3, async n => {

        if (n === 2) {

            throw new Error("boom");

        }

        return n;

    });

    assert.strictEqual(results[0].status, "fulfilled");
    assert.strictEqual(results[0].value, 1);

    assert.strictEqual(results[1].status, "rejected");
    assert.strictEqual(results[1].reason.message, "boom");

    assert.strictEqual(results[2].status, "fulfilled");
    assert.strictEqual(results[2].value, 3);

});

test("handles an empty items array without hanging or throwing", async () => {

    const results = await mapWithConcurrency([], 5, async () => 1);

    assert.deepStrictEqual(results, []);

});

test("handles a limit larger than the item count", async () => {

    const results = await mapWithConcurrency([1, 2], 10, async n => n);

    assert.strictEqual(results.length, 2);
    assert.strictEqual(results[0].value, 1);
    assert.strictEqual(results[1].value, 2);

});
