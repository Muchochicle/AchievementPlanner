import { test } from "node:test";
import assert from "node:assert";

import { getProfileGameStatsWithDeps } from "../controllers/profileGameStatsController.js";

function createMockRes() {

    return {
        statusCode: 200,
        jsonBody: null,
        status(code) { this.statusCode = code; return this; },
        json(body) { this.jsonBody = body; return this; }
    };

}

function fakeDeps({ perGameCompletion } = {}) {

    return {

        getOwnedGames: async () => ({
            game_count: 2,
            games: [
                { appid: 10, name: "Hades", img_icon_url: "", playtime_forever: 600 },
                { appid: 20, name: "Celeste", img_icon_url: "", playtime_forever: 120 }
            ]
        }),

        getProfileStatsCached: async () => ({
            achievements: 30,
            completedGames: 1,
            completedGameSlugs: ["celeste"],
            perGameCompletion: perGameCompletion ?? [
                { slug: "hades", unlocked: 20, total: 49, percent: 41 },
                { slug: "celeste", unlocked: 30, total: 30, percent: 100 }
            ],
            gamesConsidered: 2,
            gamesWithPlayerDataUnavailable: 0,
            gamesWithTransientErrors: 0,
            generatedAt: "2026-09-03T00:00:00.000Z"
        })

    };

}

test("getProfileGameStats returns 401 when logged out", async () => {

    const res = createMockRes();

    await getProfileGameStatsWithDeps({ session: {} }, res, fakeDeps());

    assert.strictEqual(res.statusCode, 401);
    assert.strictEqual(res.jsonBody.success, false);

});

test("getProfileGameStats returns the per-game completion breakdown + coverage metadata", async () => {

    const res = createMockRes();

    await getProfileGameStatsWithDeps(
        { session: { user: { steamid: "123" } } },
        res,
        fakeDeps()
    );

    assert.strictEqual(res.jsonBody.success, true);
    assert.deepStrictEqual(res.jsonBody.games, [
        { slug: "hades", unlocked: 20, total: 49, percent: 41 },
        { slug: "celeste", unlocked: 30, total: 30, percent: 100 }
    ]);
    assert.strictEqual(res.jsonBody.gamesConsidered, 2);
    assert.strictEqual(res.jsonBody.gamesWithPlayerDataUnavailable, 0);

});

test("getProfileGameStats tolerates a stats object with no perGameCompletion (empty list, not a crash)", async () => {

    const res = createMockRes();

    const deps = {
        getOwnedGames: async () => ({ game_count: 0, games: [] }),
        getProfileStatsCached: async () => ({ achievements: 0, gamesConsidered: 0 })
    };

    await getProfileGameStatsWithDeps(
        { session: { user: { steamid: "123" } } },
        res,
        deps
    );

    assert.strictEqual(res.jsonBody.success, true);
    assert.deepStrictEqual(res.jsonBody.games, []);

});

test("getProfileGameStats surfaces an unexpected error as a generic 500, never throwing", async () => {

    const res = createMockRes();

    const brokenDeps = {
        getOwnedGames: async () => { throw new Error("steam down"); },
        getProfileStatsCached: async () => ({})
    };

    await assert.doesNotReject(
        getProfileGameStatsWithDeps({ session: { user: { steamid: "123" } } }, res, brokenDeps)
    );

    assert.strictEqual(res.statusCode, 500);
    assert.strictEqual(res.jsonBody.success, false);

});
