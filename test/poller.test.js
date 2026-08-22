import { test } from "node:test";
import assert from "node:assert";

import { createPoller } from "../src/utils/async/poller.js";

// A promise the test controls the resolution/rejection timing of - lets
// these tests force two overlapping poll() calls to settle in whichever
// order the specific scenario needs, rather than relying on incidental
// real-world timing (which is exactly the kind of "hope it doesn't race"
// approach this module exists to make unnecessary).
function createDeferred() {

    let resolve;
    let reject;

    const promise = new Promise((res, rej) => {

        resolve = res;
        reject = rej;

    });

    return { promise, resolve, reject };

}

test("poll() calls fetchLatest once and delivers its result to onResult", async () => {

    const results = [];

    const poller = createPoller(
        () => Promise.resolve("first-result"),
        result => results.push(result)
    );

    await poller.poll();

    assert.deepStrictEqual(results, ["first-result"]);

});

test("poll() does not call onResult when fetchLatest rejects", async () => {

    let onResultCalls = 0;

    const poller = createPoller(
        () => Promise.reject(new Error("network down")),
        () => { onResultCalls++; }
    );

    await assert.doesNotReject(() => poller.poll(), "a rejected fetch must be caught, not left to become an unhandled rejection");

    assert.strictEqual(onResultCalls, 0);

});

test("a fetch failure does not block a subsequent poll from succeeding (failure/success ordering)", async () => {

    let callCount = 0;

    const results = [];

    const poller = createPoller(
        () => {

            callCount++;

            return callCount === 1
                ? Promise.reject(new Error("first call fails"))
                : Promise.resolve("second-call-result");

        },
        result => results.push(result)
    );

    await poller.poll();
    await poller.poll();

    assert.deepStrictEqual(results, ["second-call-result"]);

});

test("a later-started poll's result wins even when an earlier-started poll resolves after it (the core stale-response race)", async () => {

    const deferredA = createDeferred();
    const deferredB = createDeferred();

    const fetches = [deferredA.promise, deferredB.promise];
    let callIndex = 0;

    const results = [];

    const poller = createPoller(
        () => fetches[callIndex++],
        result => results.push(result)
    );

    // Both start before either resolves - the real-world "alt-tab twice
    // quickly" shape (two visibilitychange-triggered polls, neither
    // awaited before the next fires).
    const pollA = poller.poll();
    const pollB = poller.poll();

    // The LATER-started request (B) resolves FIRST - the exact ordering
    // that used to silently corrupt game.js's state.
    deferredB.resolve("B-fresh");
    await pollB;

    // The EARLIER-started request (A) resolves LAST, carrying stale data.
    deferredA.resolve("A-stale");
    await pollA;

    assert.deepStrictEqual(results, ["B-fresh"], "A's stale result must never be delivered, regardless of resolving after B");

});

test("an earlier-started poll's result is delivered normally when it resolves before a later poll begins (sequential, non-overlapping control case)", async () => {

    const results = [];
    let callIndex = 0;
    const fetches = [Promise.resolve("first"), Promise.resolve("second")];

    const poller = createPoller(
        () => fetches[callIndex++],
        result => results.push(result)
    );

    await poller.poll();
    await poller.poll();

    assert.deepStrictEqual(results, ["first", "second"], "two genuinely sequential polls must both deliver, in order");

});

test("an older, still-in-flight poll's success is still delivered when a newer, concurrently-started poll ultimately fails", async () => {

    // This is the case a naive "discard anything older than the last
    // *started* request" design gets wrong: if the newer request (B) fails
    // and delivers nothing, the older request (A)'s still-valid, still-more-
    // recent-than-what's-currently-shown data must not be thrown away too -
    // there is nothing fresher actually available to prefer over it.
    const deferredA = createDeferred();
    const deferredB = createDeferred();

    const fetches = [deferredA.promise, deferredB.promise];
    let callIndex = 0;

    const results = [];

    const poller = createPoller(
        () => fetches[callIndex++],
        result => results.push(result)
    );

    const pollA = poller.poll();
    const pollB = poller.poll();

    deferredB.reject(new Error("B failed"));
    await pollB;

    deferredA.resolve("A-still-valid");
    await pollA;

    assert.deepStrictEqual(results, ["A-still-valid"], "A's data must be delivered - B never delivered anything fresher to prefer over it");

});

test("three rapid overlapping polls (rapid tab-focus events): only the last-delivered result stands, regardless of resolution order", async () => {

    const deferredA = createDeferred();
    const deferredB = createDeferred();
    const deferredC = createDeferred();

    const fetches = [deferredA.promise, deferredB.promise, deferredC.promise];
    let callIndex = 0;

    const results = [];

    const poller = createPoller(
        () => fetches[callIndex++],
        result => results.push(result)
    );

    // Simulates a user alt-tabbing back and forth several times in quick
    // succession - each regain-focus event fires its own poll() before any
    // previous one has settled.
    const pollA = poller.poll();
    const pollB = poller.poll();
    const pollC = poller.poll();

    // Resolve out of start order: C (newest) first, then A, then B.
    deferredC.resolve("C-newest");
    await pollC;

    deferredA.resolve("A-oldest-stale");
    await pollA;

    deferredB.resolve("B-middle-stale");
    await pollB;

    assert.deepStrictEqual(results, ["C-newest"], "only the newest request's result may ever reach onResult, no matter what order the other two resolve in");

});

test("createPoller's onResult composition protects all downstream consumer state (game object + a persisted snapshot list) from a stale response", () => {

    // Mirrors exactly how game.js composes onResult: assign the fresh game
    // object to shared state, then persist a snapshot of it (standing in
    // for saveProgress()'s localStorage write) - proving the guarantee this
    // module exists to provide actually protects the real downstream shape,
    // not just an abstract "result" value.
    return (async () => {

        const state = { game: null, savedSnapshots: [] };

        const deferredOld = createDeferred();
        const deferredFresh = createDeferred();

        const fetches = [deferredOld.promise, deferredFresh.promise];
        let callIndex = 0;

        const poller = createPoller(
            () => fetches[callIndex++],
            freshGame => {

                state.game = freshGame;
                state.savedSnapshots.push(freshGame);

            }
        );

        const pollOld = poller.poll();
        const pollFresh = poller.poll();

        deferredFresh.resolve({ id: "fresh", achievementsUnlocked: 5 });
        await pollFresh;

        deferredOld.resolve({ id: "stale", achievementsUnlocked: 2 });
        await pollOld;

        assert.deepStrictEqual(state.game, { id: "fresh", achievementsUnlocked: 5 }, "the shared game object must never be reverted to the stale snapshot");
        assert.deepStrictEqual(state.savedSnapshots, [{ id: "fresh", achievementsUnlocked: 5 }], "only the fresh snapshot may ever be persisted - the stale one must never reach the save path");

    })();

});

test("a throwing onResult does not corrupt bookkeeping or prevent a later, genuinely fresh poll from delivering", async () => {

    let callCount = 0;

    const results = [];

    const poller = createPoller(
        () => {

            callCount++;

            return Promise.resolve(`result-${callCount}`);

        },
        result => {

            if (result === "result-1") {

                throw new Error("consumer bug on the first delivery");

            }

            results.push(result);

        }
    );

    await assert.doesNotReject(() => poller.poll(), "a throwing onResult must be caught, not left to reject poll()");

    await poller.poll();

    assert.deepStrictEqual(results, ["result-2"], "a later poll must still deliver normally after an earlier onResult threw");

});

test("start() begins calling fetchLatest on the given interval (timer-triggered polling)", (t) => {

    t.mock.timers.enable({ apis: ["setInterval"] });

    let fetchCalls = 0;

    const poller = createPoller(
        () => {

            fetchCalls++;
            return Promise.resolve(`tick-${fetchCalls}`);

        },
        () => {}
    );

    poller.start(1000);

    assert.strictEqual(fetchCalls, 0, "start() must not fetch immediately on its own - only on each interval tick");

    t.mock.timers.tick(1000);
    assert.strictEqual(fetchCalls, 1);

    t.mock.timers.tick(1000);
    assert.strictEqual(fetchCalls, 2);

    t.mock.timers.tick(3000);
    assert.strictEqual(fetchCalls, 5, "three more elapsed intervals should trigger three more polls");

});

test("start() called twice does not create a second interval", (t) => {

    t.mock.timers.enable({ apis: ["setInterval"] });

    let fetchCalls = 0;

    const poller = createPoller(
        () => {

            fetchCalls++;
            return Promise.resolve();

        },
        () => {}
    );

    poller.start(1000);
    poller.start(1000);
    poller.start(1000);

    t.mock.timers.tick(1000);

    assert.strictEqual(fetchCalls, 1, "calling start() again while already running must not register a second interval");

});

test("stop() halts further automatic polls", (t) => {

    t.mock.timers.enable({ apis: ["setInterval"] });

    let fetchCalls = 0;

    const poller = createPoller(
        () => {

            fetchCalls++;
            return Promise.resolve();

        },
        () => {}
    );

    poller.start(1000);

    t.mock.timers.tick(1000);
    assert.strictEqual(fetchCalls, 1);

    poller.stop();

    t.mock.timers.tick(5000);
    assert.strictEqual(fetchCalls, 1, "no further ticks may trigger a poll once stopped");

});

test("stop() before any start() is a safe no-op", () => {

    const poller = createPoller(() => Promise.resolve(), () => {});

    assert.doesNotThrow(() => poller.stop());

});

test("poll() can still be called manually after stop() (matches the visibilitychange 'start() then immediately poll()' pattern)", async (t) => {

    t.mock.timers.enable({ apis: ["setInterval"] });

    let fetchCalls = 0;

    const results = [];

    const poller = createPoller(
        () => {

            fetchCalls++;
            return Promise.resolve(`manual-${fetchCalls}`);

        },
        result => results.push(result)
    );

    poller.start(1000);
    poller.stop();

    await poller.poll();

    assert.deepStrictEqual(results, ["manual-1"], "a manual poll() must still work even though the interval was stopped");

});
