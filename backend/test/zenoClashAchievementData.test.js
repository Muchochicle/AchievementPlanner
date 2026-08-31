import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/zeno-clash.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 22200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("zeno-clash");

test("getPlannerData('zeno-clash') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for zeno-clash");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Zeno Clash achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Zeno Clash achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Zeno Clash achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Almost Number One ", "Bring the Hunter down to 1 healthpoint in melee combat. "],
        ["Animal Cruelty ", "Kill 50% of the harmless animals in the game. "],
        ["Body Launcher ", "Throw an enemy into another. "],
        ["Door Hater ", "Annoy the man behind the door. "],
        ["Easter Egg ", "Find the secret easter egg. "],
        ["Flame Master ", "Capture 30 fireballs with the torch. "],
        ["Heavy Brawler ", "Defeat a heavy enemy without getting hit. "],
        ["Light the Path ", "Ignite all pyres. "],
        ["Metamoq's pupil ", "Learn all advanced combat techniques. "],
        ["Monocrome Adventurer ", "Input the Malstrum's Mansion secret code. "],
        ["Street Fighter ", "Beat the game without using weapons unless it is absolutely necessary. "],
        ["Target Practice ", "Shoot 21 Mucalosaurus Worshippers from the boat. "],
        ["Tower Champion -1 ", "Complete Tower Challenge Number -1. "],
        ["Tower Champion -2 ", "Complete Tower Challenge Number -2."],
        ["Tower Champion -3 ", "Complete Tower Challenge Number -3. "],
        ["Tower Champion 1 ", "Complete Tower Challenge Number 1. "],
        ["Tower Champion 2 ", "Complete Tower Challenge Number 2. "],
        ["Tower Champion 3 ", "Complete Tower Challenge Number 3. "],
        ["Tower Champion 4 ", "Complete Tower Challenge Number 4. "],
        ["Tower Champion 5 ", "Complete Tower Challenge Number 5. "],
        ["Untouchable ", "Land 50 deflect kicks. "],
        ["Zenozoik Adventurer ", "Complete the game. "],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
