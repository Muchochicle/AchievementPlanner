import { test } from "node:test";
import assert from "node:assert";

import { getGameAchievementSummary } from "../utils/gameAchievementSummary.js";

function schema(names) {

    return names.map(name => ({
        name,
        displayName: name,
        description: `desc ${name}`,
        hidden: false,
        icon: null,
        icongray: null
    }));

}

// fetchSchema now returns { achievements, status } (see steamApi.js's
// getSchemaForGame) instead of a bare array - status: "available" for
// every test in this file except the dedicated schema-unavailable cases
// below, which is exactly the distinction Phase 33 introduced.
function availableSchema(names) {

    return async () => ({ achievements: schema(names), status: "available" });

}

test("available player data: curated match + Steam-only achievement, partially completed", async () => {

    const game = {
        appid: 100,
        achievements: [{ id: "curated-1", apiname: "A" }]
    };

    const fetchSchema = availableSchema(["A", "B"]);

    const fetchPlayerAchievements = async () => ({
        status: "available",
        achievements: [
            { apiname: "A", achieved: true, unlocktime: 123 },
            { apiname: "B", achieved: false, unlocktime: 0 }
        ]
    });

    const summary = await getGameAchievementSummary(
        "steamid",
        game,
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.deepStrictEqual(summary, {
        total: 2,
        completed: 1,
        playerDataStatus: "available",
        schemaStatus: "available",
        hasAchievements: true
    });

});

test("unavailable player data (e.g. Steam's 'Profile is not public' case): total from schema, zero completed, status unavailable", async () => {

    const game = { appid: 730, achievements: [] };

    const fetchSchema = availableSchema(["PLAY_CS2"]);

    const fetchPlayerAchievements = async () => ({
        status: "unavailable",
        achievements: []
    });

    const summary = await getGameAchievementSummary(
        "steamid",
        game,
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.deepStrictEqual(summary, {
        total: 1,
        completed: 0,
        playerDataStatus: "unavailable",
        schemaStatus: "available",
        hasAchievements: true
    });

});

test("a transient fetch failure is reported distinctly from a stable 'unavailable' answer", async () => {

    const game = { appid: 200, achievements: [] };

    const fetchSchema = availableSchema(["X"]);

    const fetchPlayerAchievements = async () => ({
        status: "transient",
        achievements: []
    });

    const summary = await getGameAchievementSummary(
        "steamid",
        game,
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.strictEqual(summary.playerDataStatus, "transient");
    assert.strictEqual(summary.completed, 0);

});

test("a game with zero achievements in Steam's schema reports total 0 and hasAchievements false, with a real (not failed) schemaStatus", () => {

    return (async () => {

        const game = { appid: 300, achievements: [] };

        const fetchSchema = availableSchema([]);

        const fetchPlayerAchievements = async () => ({
            status: "available",
            achievements: []
        });

        const summary = await getGameAchievementSummary(
            "steamid",
            game,
            { fetchSchema, fetchPlayerAchievements }
        );

        assert.deepStrictEqual(summary, {
            total: 0,
            completed: 0,
            playerDataStatus: "available",
            schemaStatus: "available",
            hasAchievements: false
        });

    })();

});

test("a schema fetch that itself failed reports schemaStatus 'unavailable', distinct from a confirmed-zero schema", async () => {

    const game = { appid: 999, achievements: [] };

    // Mirrors getSchemaForGame's real "unavailable" shape on a failed
    // request (see steamApi.js) - not the same as a successful response
    // with zero achievements.
    const fetchSchema = async () => ({ achievements: [], status: "unavailable" });

    const fetchPlayerAchievements = async () => ({
        status: "available",
        achievements: []
    });

    const summary = await getGameAchievementSummary(
        "steamid",
        game,
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.strictEqual(summary.schemaStatus, "unavailable");
    assert.strictEqual(summary.hasAchievements, false);
    assert.strictEqual(summary.total, 0);

});

test("a fully completed game reports completed === total", async () => {

    const game = { appid: 400, achievements: [] };

    const fetchSchema = availableSchema(["A", "B", "C"]);

    const fetchPlayerAchievements = async () => ({
        status: "available",
        achievements: [
            { apiname: "A", achieved: true },
            { apiname: "B", achieved: true },
            { apiname: "C", achieved: true }
        ]
    });

    const summary = await getGameAchievementSummary(
        "steamid",
        game,
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.deepStrictEqual(summary, {
        total: 3,
        completed: 3,
        playerDataStatus: "available",
        schemaStatus: "available",
        hasAchievements: true
    });

});

test("a non-curated game (no game.achievements at all) is summarized purely from Steam-only entries", async () => {

    const game = { appid: 500 };

    const fetchSchema = availableSchema(["ONLY"]);

    const fetchPlayerAchievements = async () => ({
        status: "available",
        achievements: [{ apiname: "ONLY", achieved: true }]
    });

    const summary = await getGameAchievementSummary(
        "steamid",
        game,
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.deepStrictEqual(summary, {
        total: 1,
        completed: 1,
        playerDataStatus: "available",
        schemaStatus: "available",
        hasAchievements: true
    });

});

test("a game with no real appid is skipped without calling either fetcher, and is reported as a confirmed 'no achievements' (not unavailable)", async () => {

    let called = false;

    const fetchSchema = async () => { called = true; return { achievements: [], status: "available" }; };
    const fetchPlayerAchievements = async () => { called = true; return { status: "available", achievements: [] }; };

    const summary = await getGameAchievementSummary(
        "steamid",
        { appid: 0, achievements: [] },
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.strictEqual(called, false);
    assert.deepStrictEqual(summary, {
        total: 0,
        completed: 0,
        playerDataStatus: "unavailable",
        schemaStatus: "available",
        hasAchievements: false
    });

});
