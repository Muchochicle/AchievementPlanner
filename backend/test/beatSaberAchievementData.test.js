import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/beat-saber.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 620980 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("beat-saber");

test("getPlannerData('beat-saber') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for beat-saber");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every Beat Saber achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every Beat Saber achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 Beat Saber achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["100 Million", "Get total score 100 million or more."],
        ["Charge", "Clear any level with 4 Lives modifier."],
        ["Concentrate", "Clear any level on hard difficulty and get at least 100 combo without any modifiers."],
        ["Day & Night", "Get total played time 24 hours or more."],
        ["Drill", "Get total 10 000 good cuts or more."],
        ["Drum Kit", "Get full combo on at least 15 different levels on hard difficulty (solo free play only)."],
        ["Expert", "Clear any level on expert difficulty without any modifiers."],
        ["Faster", "Clear any level with faster song speed modifier."],
        ["Flawless", "Get rank SS on any level on expert difficulty without any modifiers."],
        ["Focus", "Clear any level on expert difficulty and get at least 500 combo without any modifiers."],
        ["Good Enough", "Get at least rank A on any level on normal difficulty without any modifiers."],
        ["Hope", "Get rank S on at least 15 different levels on expert difficulty (solo free play only)."],
        ["Memory", "Clear any level with disappearing arrows modifier."],
        ["No Mistakes", "Get full combo on at least 15 different levels on expert difficulty (solo free play only)."],
        ["Not the End", "Clear final mission in campaign."],
        ["On the Edge", "Clear any level with One Life modifier."],
        ["Pay Attention", "Clear any level on normal difficulty and get at least 50 combo without any modifiers."],
        ["Peace", "Clear all missions in campaign."],
        ["Precision", "Get rank S on at least 15 different levels on hard difficulty (solo free play only)."],
        ["Progress", "Clear 30 missions in campaign."],
        ["Pure", "Clear any level without any modifiers."],
        ["Special", "Get at least rank S on any level on hard difficulty without any modifiers."],
        ["Supreme", "Get full combo on any level on expert difficulty without any modifiers."],
        ["Traveller", "Get 100 kilometers travelled hand distance or more."],
        ["Warm-up", "Clear 100 levels or more."],
        ["You Are Ready", "Finish the tutorial."],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
