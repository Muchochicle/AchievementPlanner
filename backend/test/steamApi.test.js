import { test } from "node:test";
import assert from "node:assert";

import {
    getOwnedGames,
    getSchemaForGame,
    getCurrentPlayerCount,
    getPlayerAchievementsClassified,
    getGlobalAchievementPercentages,
    getPlayerSummary
} from "../services/steamApi.js";

// backend/utils/cache.js is a shared module-level Map (see cache.test.js),
// and steamApi.js calls the real global `fetch` directly (no injection
// point) - every test below uses a unique steamId/appid as its cache key
// AND swaps `globalThis.fetch` for the duration of the test, restored in a
// `finally` so a failure here can never leak a stub into any other test
// file's run.

function jsonResponse(status, body) {

    return {
        ok: status >= 200 && status < 300,
        status,
        json: async () => body
    };

}

function countingFetch(responder) {

    let calls = 0;

    const fn = async (...args) => {

        calls++;
        return responder(...args);

    };

    return { fn, callCount: () => calls };

}

async function withMockedFetch(fn, run) {

    const original = globalThis.fetch;

    globalThis.fetch = fn;

    try {

        return await run();

    } finally {

        globalThis.fetch = original;

    }

}

// ---------------------------------------------------------------------
// getOwnedGames - Finding 5: Steam's real zero-owned-games response shape
// ---------------------------------------------------------------------

test("getOwnedGames returns the real games array unchanged for a normal, non-empty library", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: { game_count: 1, games: [{ appid: 10, name: "Game" }] } })
    );

    const result = await withMockedFetch(fn, () => getOwnedGames("steamapi-test:owned-normal"));

    assert.deepStrictEqual(result, { game_count: 1, games: [{ appid: 10, name: "Game" }] });

});

test("getOwnedGames normalizes Steam's real zero-games response ({game_count:0}, no `games` key) to a real empty array instead of leaving `games` undefined", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: { game_count: 0 } })
    );

    const result = await withMockedFetch(fn, () => getOwnedGames("steamapi-test:owned-zero"));

    assert.strictEqual(result.game_count, 0, "other real fields from Steam's response must be preserved");
    assert.deepStrictEqual(result.games, [], "games must be a real, empty array - never undefined");
    assert.ok(Array.isArray(result.games));

});

test("getOwnedGames still throws for a genuinely empty response (private profile / invalid steamId) - unchanged behavior", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: {} })
    );

    await assert.rejects(
        () => withMockedFetch(fn, () => getOwnedGames("steamapi-test:owned-private")),
        /empty response/
    );

});

test("getOwnedGames caches the normalized zero-games result - a second call does not hit Steam again", async () => {

    const { fn, callCount } = countingFetch(() =>
        jsonResponse(200, { response: { game_count: 0 } })
    );

    await withMockedFetch(fn, async () => {

        const first = await getOwnedGames("steamapi-test:owned-zero-cached");
        const second = await getOwnedGames("steamapi-test:owned-zero-cached");

        assert.deepStrictEqual(first.games, []);
        assert.deepStrictEqual(second.games, []);
        assert.strictEqual(callCount(), 1, "the second call must be served from cache, not a new Steam request");

    });

});

// ---------------------------------------------------------------------
// getSchemaForGame - Finding 6: failure caching vs. success caching
// ---------------------------------------------------------------------

test("getSchemaForGame returns the real achievement list and 'available' status on success", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { game: { availableGameStats: { achievements: [{ name: "ACH_1" }] } } })
    );

    const result = await withMockedFetch(fn, () => getSchemaForGame(900001));

    assert.deepStrictEqual(result, { achievements: [{ name: "ACH_1" }], status: "available" });

});

test("getSchemaForGame reports 'unavailable' (not a thrown error) when the request fails, matching existing status semantics", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(500, {})
    );

    const result = await withMockedFetch(fn, () => getSchemaForGame(900002));

    assert.deepStrictEqual(result, { achievements: [], status: "unavailable" });

});

test("getSchemaForGame's successful result stays cached well past the short failure TTL (30s) - success keeps the full 24h TTL", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    const { fn, callCount } = countingFetch(() =>
        jsonResponse(200, { game: { availableGameStats: { achievements: [] } } })
    );

    await withMockedFetch(fn, async () => {

        await getSchemaForGame(900003);

        t.mock.timers.tick(45_000);

        const second = await getSchemaForGame(900003);

        assert.strictEqual(callCount(), 1, "a successful schema fetch must still be served from cache 45s later");
        assert.strictEqual(second.status, "available");

    });

});

test("getSchemaForGame's failure result expires quickly (short TTL) so a transient blip self-heals within one poll cycle, unlike a success", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    let shouldFail = true;

    const { fn, callCount } = countingFetch(() => {

        if (shouldFail) {

            return jsonResponse(500, {});

        }

        return jsonResponse(200, { game: { availableGameStats: { achievements: [{ name: "RECOVERED" }] } } });

    });

    await withMockedFetch(fn, async () => {

        const first = await getSchemaForGame(900004);
        assert.strictEqual(first.status, "unavailable");

        // Still within the 30s failure TTL - must be served from cache.
        t.mock.timers.tick(15_000);
        const stillCached = await getSchemaForGame(900004);
        assert.strictEqual(stillCached.status, "unavailable");
        assert.strictEqual(callCount(), 1);

        // Past the 30s failure TTL - a real retry must happen, and this
        // time Steam "recovers".
        shouldFail = false;
        t.mock.timers.tick(16_000);

        const recovered = await getSchemaForGame(900004);
        assert.strictEqual(recovered.status, "available");
        assert.deepStrictEqual(recovered.achievements, [{ name: "RECOVERED" }]);
        assert.strictEqual(callCount(), 2, "the expired failure entry must trigger exactly one real retry");

    });

});

// ---------------------------------------------------------------------
// getCurrentPlayerCount - Finding 6, same failure-vs-success distinction
// ---------------------------------------------------------------------

test("getCurrentPlayerCount returns the real count on success", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: { result: 1, player_count: 4242 } })
    );

    const result = await withMockedFetch(fn, () => getCurrentPlayerCount(900101));

    assert.strictEqual(result, 4242);

});

test("getCurrentPlayerCount's confirmed 'no count' answer (result !== 1, not a thrown error) keeps the full TTL - not treated as a failure", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    const { fn, callCount } = countingFetch(() =>
        jsonResponse(200, { response: { result: 42 } })
    );

    await withMockedFetch(fn, async () => {

        const first = await getCurrentPlayerCount(900102);
        assert.strictEqual(first, null);

        t.mock.timers.tick(45_000);

        const second = await getCurrentPlayerCount(900102);

        assert.strictEqual(second, null);
        assert.strictEqual(callCount(), 1, "a real Steam 'no count' answer must not be treated as a transient failure");

    });

});

test("getCurrentPlayerCount's actual request failure is cached briefly, then retried after the short TTL", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    let shouldFail = true;

    const { fn, callCount } = countingFetch(() => {

        if (shouldFail) {

            return jsonResponse(500, {});

        }

        return jsonResponse(200, { response: { result: 1, player_count: 7 } });

    });

    await withMockedFetch(fn, async () => {

        const first = await getCurrentPlayerCount(900103);
        assert.strictEqual(first, null);

        t.mock.timers.tick(31_000);

        shouldFail = false;
        const second = await getCurrentPlayerCount(900103);

        assert.strictEqual(second, 7);
        assert.strictEqual(callCount(), 2, "the expired failure entry must trigger a real retry after 31s");

    });

});

// ---------------------------------------------------------------------
// getPlayerAchievementsClassified - "unavailable" (real decline) vs.
// "transient" (genuine failure) must be cached differently
// ---------------------------------------------------------------------

test("getPlayerAchievementsClassified returns 'available' with the real achievements on success", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { playerstats: { success: true, achievements: [{ apiname: "ACH_1", achieved: 1 }] } })
    );

    const result = await withMockedFetch(fn, () => getPlayerAchievementsClassified("steamapi-test:pa-success", 900201));

    assert.deepStrictEqual(result, { achievements: [{ apiname: "ACH_1", achieved: 1 }], status: "available" });

});

test("getPlayerAchievementsClassified's confirmed decline (playerstats.success:false) keeps the full TTL - it is a real Steam answer, not a failure", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    const { fn, callCount } = countingFetch(() =>
        jsonResponse(403, { playerstats: { success: false } })
    );

    await withMockedFetch(fn, async () => {

        const first = await getPlayerAchievementsClassified("steamapi-test:pa-decline", 900202);
        assert.strictEqual(first.status, "unavailable");

        t.mock.timers.tick(45_000);

        const second = await getPlayerAchievementsClassified("steamapi-test:pa-decline", 900202);

        assert.strictEqual(second.status, "unavailable");
        assert.strictEqual(callCount(), 1, "a confirmed private-profile decline must not be treated as a transient failure");

    });

});

test("getPlayerAchievementsClassified's unparseable-body 'transient' result is cached briefly, then retried after the short TTL", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    let shouldFail = true;

    const { fn, callCount } = countingFetch(() => {

        if (shouldFail) {

            // No parseable playerstats body at all - not a real Steam
            // answer, a genuine request failure.
            return jsonResponse(200, { unexpected: "shape" });

        }

        return jsonResponse(200, { playerstats: { success: true, achievements: [{ apiname: "RECOVERED", achieved: 1 }] } });

    });

    await withMockedFetch(fn, async () => {

        const first = await getPlayerAchievementsClassified("steamapi-test:pa-transient", 900203);
        assert.strictEqual(first.status, "transient");

        t.mock.timers.tick(15_000);
        const stillCached = await getPlayerAchievementsClassified("steamapi-test:pa-transient", 900203);
        assert.strictEqual(stillCached.status, "transient");
        assert.strictEqual(callCount(), 1);

        shouldFail = false;
        t.mock.timers.tick(16_000);

        const recovered = await getPlayerAchievementsClassified("steamapi-test:pa-transient", 900203);
        assert.strictEqual(recovered.status, "available");
        assert.strictEqual(callCount(), 2, "the expired transient entry must trigger exactly one real retry");

    });

});

test("getPlayerAchievementsClassified's network-throw failure is also classified 'transient' and cached briefly", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    let shouldThrow = true;

    const fn = async () => {

        if (shouldThrow) {

            const error = new Error("network down");
            error.name = "TypeError";
            throw error;

        }

        return jsonResponse(200, { playerstats: { success: true, achievements: [] } });

    };

    await withMockedFetch(fn, async () => {

        const first = await getPlayerAchievementsClassified("steamapi-test:pa-throw", 900204);
        assert.strictEqual(first.status, "transient");

        t.mock.timers.tick(31_000);

        shouldThrow = false;
        const second = await getPlayerAchievementsClassified("steamapi-test:pa-throw", 900204);

        assert.strictEqual(second.status, "available");

    });

});

// ---------------------------------------------------------------------
// getGlobalAchievementPercentages - Phase 67: this function had no direct
// test at all before this phase, and its catch block was the one function
// in this file that hadn't been brought in line with Finding 6 (a caught
// steamFetch error - which is thrown identically for a real request
// failure and for Steam's "no global stats for this game" error status -
// was cached for the full 24h success TTL instead of the short failure
// TTL every sibling function already uses).
// ---------------------------------------------------------------------

test("getGlobalAchievementPercentages returns the real percentages array on success", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { achievementpercentages: { achievements: [{ name: "ACH_1", percent: 42.5 }] } })
    );

    const result = await withMockedFetch(fn, () => getGlobalAchievementPercentages(900301));

    assert.deepStrictEqual(result, [{ name: "ACH_1", percent: 42.5 }]);

});

test("getGlobalAchievementPercentages degrades to an empty array (not a thrown error) when the request fails", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(500, {})
    );

    const result = await withMockedFetch(fn, () => getGlobalAchievementPercentages(900302));

    assert.deepStrictEqual(result, []);

});

test("getGlobalAchievementPercentages' successful result stays cached well past the short failure TTL (30s) - success keeps the full 24h TTL", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    const { fn, callCount } = countingFetch(() =>
        jsonResponse(200, { achievementpercentages: { achievements: [{ name: "ACH_1", percent: 10 }] } })
    );

    await withMockedFetch(fn, async () => {

        await getGlobalAchievementPercentages(900303);

        t.mock.timers.tick(45_000);

        const second = await getGlobalAchievementPercentages(900303);

        assert.strictEqual(callCount(), 1, "a successful fetch must still be served from cache 45s later");
        assert.deepStrictEqual(second, [{ name: "ACH_1", percent: 10 }]);

    });

});

test("getGlobalAchievementPercentages' failure result expires quickly (short TTL) instead of being cached for the full 24h, so a transient blip self-heals within one poll cycle - Phase 67 regression", async (t) => {

    t.mock.timers.enable({ apis: ["Date"] });

    let shouldFail = true;

    const { fn, callCount } = countingFetch(() => {

        if (shouldFail) {

            return jsonResponse(500, {});

        }

        return jsonResponse(200, { achievementpercentages: { achievements: [{ name: "RECOVERED", percent: 99 }] } });

    });

    await withMockedFetch(fn, async () => {

        const first = await getGlobalAchievementPercentages(900304);
        assert.deepStrictEqual(first, []);

        // Still within the 30s failure TTL - must be served from cache.
        t.mock.timers.tick(15_000);
        const stillCached = await getGlobalAchievementPercentages(900304);
        assert.deepStrictEqual(stillCached, []);
        assert.strictEqual(callCount(), 1);

        // Past the 30s failure TTL - a real retry must happen. Before this
        // phase's fix, the empty result was cached for the full 24h, so
        // this same tick would still be served from the stale cache and
        // callCount() would incorrectly stay at 1.
        shouldFail = false;
        t.mock.timers.tick(16_000);

        const recovered = await getGlobalAchievementPercentages(900304);
        assert.deepStrictEqual(recovered, [{ name: "RECOVERED", percent: 99 }]);
        assert.strictEqual(callCount(), 2, "the expired failure entry must trigger exactly one real retry, not stay cached for 24h");

    });

});

// ---------------------------------------------------------------------
// getPlayerSummary - Phase 67: had no direct test at all before this
// phase (every other test file that touches it injects it away as a
// fake), so its real Steam-response-parsing logic was never actually
// exercised.
// ---------------------------------------------------------------------

test("getPlayerSummary returns the real player object on success", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: { players: [{ steamid: "1", personaname: "Alice", avatarfull: "https://example.com/a.jpg" }] } })
    );

    const result = await withMockedFetch(fn, () => getPlayerSummary("steamapi-test:summary-success"));

    assert.deepStrictEqual(result, { steamid: "1", personaname: "Alice", avatarfull: "https://example.com/a.jpg" });

});

test("getPlayerSummary throws for a genuinely empty response object (private profile / invalid steamId)", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: {} })
    );

    await assert.rejects(
        () => withMockedFetch(fn, () => getPlayerSummary("steamapi-test:summary-empty")),
        /empty response/
    );

});

test("getPlayerSummary throws when Steam's response has no players array entry at all", async () => {

    const { fn } = countingFetch(() =>
        jsonResponse(200, { response: { players: [] } })
    );

    await assert.rejects(
        () => withMockedFetch(fn, () => getPlayerSummary("steamapi-test:summary-no-player")),
        /no player data/
    );

});

// ---------------------------------------------------------------------
// getCurrentPlayerCount - Phase 67 regression: a result:1 response with no
// player_count field must not cache `undefined`, which would silently
// defeat this function's own `cached !== undefined` cache-hit check on
// every future call for that appid.
// ---------------------------------------------------------------------

test("getCurrentPlayerCount caches null (not undefined) when Steam's result:1 response is missing player_count", async () => {

    const { fn, callCount } = countingFetch(() =>
        jsonResponse(200, { response: { result: 1 } })
    );

    await withMockedFetch(fn, async () => {

        const first = await getCurrentPlayerCount(900305);
        assert.strictEqual(first, null);

        const second = await getCurrentPlayerCount(900305);
        assert.strictEqual(second, null);
        assert.strictEqual(callCount(), 1, "a cached null must still be served from cache, not silently treated as a cache miss");

    });

});
