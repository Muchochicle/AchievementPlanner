import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/universe-sandbox-legacy.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 72200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("universe-sandbox-legacy");

test("getPlannerData('universe-sandbox-legacy') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for universe-sandbox-legacy");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Universe Sandbox (Legacy) achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Universe Sandbox (Legacy) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 16 Universe Sandbox (Legacy) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Heat Wave", "Crash the Earth into the Sun"],
        ["Learner", "Finish five tutorials"],
        ["One Day", "Rule over your universe for 24 hours"],
        ["One Hour", "Rule over your universe for 60 minutes"],
        ["One Minute", "Rule over your universe for 60 seconds"],
        ["One Month", "Rule over your universe for 30.4 days"],
        ["One Year", "Rule over your universe for 12 months"],
        ["Photographer", "Capture 100 screenshots"],
        ["Snowball Earth", "Freeze the Earth by moving it farther from the Sun"],
        ["Startup Deka", "Start Universe Sandbox 10^1 = 10 times"],
        ["Startup Hecto", "Start Universe Sandbox 10^2 = 100 times"],
        ["Startup Kilo", "Start Universe Sandbox 10^3 = 1000 times"],
        ["Startup the Universe", "Start Universe Sandbox at least once"],
        ["Startup Too Many", "Start Universe Sandbox 10^4 = 10000 times"],
        ["The Answer", "Result of millions of years of computation"],
        ["The Code", "Some will know from their childhood; some were not born yet"],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
