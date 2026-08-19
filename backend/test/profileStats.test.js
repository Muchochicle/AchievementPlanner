import { test } from "node:test";
import assert from "node:assert";

import {
    reduceProfileStats,
    computeProfileStats,
    getProfileStatsCached
} from "../utils/profileStats.js";

test("reduceProfileStats sums completed achievements across available games only", () => {

    const settled = [
        { status: "fulfilled", value: { total: 10, completed: 4, playerDataStatus: "available" } },
        { status: "fulfilled", value: { total: 5, completed: 5, playerDataStatus: "available" } },
        { status: "fulfilled", value: { total: 1, completed: 0, playerDataStatus: "unavailable" } },
        { status: "rejected", reason: new Error("boom") }
    ];

    const stats = reduceProfileStats(settled);

    assert.strictEqual(stats.achievements, 9);
    assert.strictEqual(stats.games, 2);
    assert.strictEqual(stats.completedGames, 1);
    assert.strictEqual(stats.gamesConsidered, 4);
    assert.strictEqual(stats.gamesWithPlayerDataUnavailable, 1);
    assert.strictEqual(stats.gamesWithTransientErrors, 1);

});

test("reduceProfileStats: a game with zero unlocked achievements does not count as played", () => {

    const settled = [
        { status: "fulfilled", value: { total: 20, completed: 0, playerDataStatus: "available" } }
    ];

    const stats = reduceProfileStats(settled);

    assert.strictEqual(stats.achievements, 0);
    assert.strictEqual(stats.games, 0);
    assert.strictEqual(stats.completedGames, 0);

});

test("reduceProfileStats: a game with zero total achievements never counts as 100% (guard)", () => {

    const settled = [
        { status: "fulfilled", value: { total: 0, completed: 0, playerDataStatus: "available" } }
    ];

    const stats = reduceProfileStats(settled);

    assert.strictEqual(stats.games, 0);
    assert.strictEqual(stats.completedGames, 0);

});

test("reduceProfileStats: unavailable player data is never counted as a definitive 100% result, even vacuously", () => {

    const settled = [
        { status: "fulfilled", value: { total: 0, completed: 0, playerDataStatus: "unavailable" } }
    ];

    const stats = reduceProfileStats(settled);

    assert.strictEqual(stats.completedGames, 0);
    assert.strictEqual(stats.gamesWithPlayerDataUnavailable, 1);

});

test("reduceProfileStats: transient errors and stable unavailability are counted separately", () => {

    const settled = [
        { status: "fulfilled", value: { total: 5, completed: 0, playerDataStatus: "unavailable" } },
        { status: "fulfilled", value: { total: 5, completed: 0, playerDataStatus: "transient" } }
    ];

    const stats = reduceProfileStats(settled);

    assert.strictEqual(stats.gamesWithPlayerDataUnavailable, 1);
    assert.strictEqual(stats.gamesWithTransientErrors, 1);

});

test("computeProfileStats filters out games with no real appid before fetching", async () => {

    const seen = [];

    const fetchSummary = async (steamId, game) => {
        seen.push(game.appid);
        return { total: 1, completed: 1, playerDataStatus: "available" };
    };

    const ownedGames = [
        { appid: 10, slug: "a" },
        { appid: 0, slug: "b" },
        { appid: -1, slug: "c" }
    ];

    const stats = await computeProfileStats("steamid", ownedGames, fetchSummary);

    assert.deepStrictEqual(seen, [10]);
    assert.strictEqual(stats.gamesConsidered, 1);
    assert.ok(stats.generatedAt, "should stamp when the result was computed");

});

test("computeProfileStats never exceeds the configured concurrency", async () => {

    const ownedGames = Array.from({ length: 20 }, (_, i) => ({ appid: i + 1 }));

    let active = 0;
    let maxActive = 0;

    const fetchSummary = async () => {

        active++;
        maxActive = Math.max(maxActive, active);

        await new Promise(resolve => setTimeout(resolve, 5));

        active--;

        return { total: 1, completed: 0, playerDataStatus: "available" };

    };

    await computeProfileStats("steamid", ownedGames, fetchSummary);

    assert.ok(maxActive <= 8, `expected concurrency <= 8, saw ${maxActive}`);
    assert.ok(maxActive > 1, "expected real overlap, not fully serial execution");

});

test("getProfileStatsCached only calls fetchSummary once for repeated calls within the TTL", async () => {

    let callCount = 0;

    const fetchSummary = async () => {
        callCount++;
        return { total: 1, completed: 1, playerDataStatus: "available" };
    };

    const ownedGames = [{ appid: 999 }];

    const first = await getProfileStatsCached("cache-test-steamid-1", ownedGames, fetchSummary);
    const second = await getProfileStatsCached("cache-test-steamid-1", ownedGames, fetchSummary);

    assert.strictEqual(callCount, 1, "second call within the TTL should be served from cache, not refetched");
    assert.deepStrictEqual(first, second);

});

test("getProfileStatsCached uses a separate cache entry per steamId", async () => {

    let callCountA = 0;
    let callCountB = 0;

    const ownedGames = [{ appid: 999 }];

    await getProfileStatsCached("cache-test-steamid-A", ownedGames, async () => {
        callCountA++;
        return { total: 1, completed: 1, playerDataStatus: "available" };
    });

    await getProfileStatsCached("cache-test-steamid-B", ownedGames, async () => {
        callCountB++;
        return { total: 1, completed: 1, playerDataStatus: "available" };
    });

    assert.strictEqual(callCountA, 1);
    assert.strictEqual(callCountB, 1);

});

test("getProfileStatsCached deduplicates two concurrent cache misses into a single underlying computation", async () => {

    let callCount = 0;

    const ownedGames = [{ appid: 999 }];

    // fetchSummary is the only thing that does real "work" per game, and
    // there's exactly one game here - if the two concurrent calls below
    // each triggered their own computeProfileStats run, callCount would
    // be 2, not 1. The delay widens the race window so both calls are
    // guaranteed to see the cache miss before either finishes.
    const fetchSummary = async () => {

        callCount++;

        await new Promise(resolve => setTimeout(resolve, 20));

        return { total: 1, completed: 1, playerDataStatus: "available" };

    };

    const steamId = "dedup-test-steamid";

    const [first, second] = await Promise.all([
        getProfileStatsCached(steamId, ownedGames, fetchSummary),
        getProfileStatsCached(steamId, ownedGames, fetchSummary)
    ]);

    assert.strictEqual(callCount, 1, "two concurrent cache misses should share one underlying computation, not run two 144-game fan-outs");
    assert.deepStrictEqual(first, second);
    assert.strictEqual(first.achievements, 1);

});

test("a rejected in-flight computation is removed so a later call for the same steamId retries instead of reusing the failure", async () => {

    const steamId = "dedup-reject-test-steamid";

    // ownedGames.filter() throws inside computeProfileStats, so this
    // first call's Promise rejects.
    await assert.rejects(
        () => getProfileStatsCached(steamId, null, async () => ({ total: 0, completed: 0, playerDataStatus: "available" }))
    );

    // If the failed request weren't removed from the in-flight map, this
    // second (valid) call would either hang waiting on the same rejected
    // Promise or reject too, instead of running a fresh computation.
    let callCount = 0;

    const result = await getProfileStatsCached(
        steamId,
        [{ appid: 1 }],
        async () => {
            callCount++;
            return { total: 1, completed: 1, playerDataStatus: "available" };
        }
    );

    assert.strictEqual(callCount, 1);
    assert.strictEqual(result.achievements, 1);

});
