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

test("available player data: curated match + Steam-only achievement, partially completed", async () => {

    const game = {
        appid: 100,
        achievements: [{ id: "curated-1", apiname: "A" }]
    };

    const fetchSchema = async () => schema(["A", "B"]);

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
        playerDataStatus: "available"
    });

});

test("unavailable player data (e.g. Steam's 'Profile is not public' case): total from schema, zero completed, status unavailable", async () => {

    const game = { appid: 730, achievements: [] };

    const fetchSchema = async () => schema(["PLAY_CS2"]);

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
        playerDataStatus: "unavailable"
    });

});

test("a transient fetch failure is reported distinctly from a stable 'unavailable' answer", async () => {

    const game = { appid: 200, achievements: [] };

    const fetchSchema = async () => schema(["X"]);

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

test("a game with zero achievements in Steam's schema reports total 0", async () => {

    const game = { appid: 300, achievements: [] };

    const fetchSchema = async () => [];

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
        playerDataStatus: "available"
    });

});

test("a fully completed game reports completed === total", async () => {

    const game = { appid: 400, achievements: [] };

    const fetchSchema = async () => schema(["A", "B", "C"]);

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
        playerDataStatus: "available"
    });

});

test("a non-curated game (no game.achievements at all) is summarized purely from Steam-only entries", async () => {

    const game = { appid: 500 };

    const fetchSchema = async () => schema(["ONLY"]);

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
        playerDataStatus: "available"
    });

});

test("a game with no real appid is skipped without calling either fetcher", async () => {

    let called = false;

    const fetchSchema = async () => { called = true; return []; };
    const fetchPlayerAchievements = async () => { called = true; return { status: "available", achievements: [] }; };

    const summary = await getGameAchievementSummary(
        "steamid",
        { appid: 0, achievements: [] },
        { fetchSchema, fetchPlayerAchievements }
    );

    assert.strictEqual(called, false);
    assert.deepStrictEqual(summary, { total: 0, completed: 0, playerDataStatus: "unavailable" });

});
