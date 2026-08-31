import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/trove.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 304050 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("trove");

test("getPlannerData('trove') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for trove");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every Trove achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every Trove achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 19 Trove achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Builder's Focus", "Using the gem forge, upgrade all of the stats on a Stellar Gem to max "],
        ["A Trovian a Day!", "Enter the Shadow Tower and defeat the Darknik Dreadnought on Ultra Difficulty"],
        ["Beaucoup Bombs", "Throw 5000 bombs in Bomber Royale"],
        ["Burninate the Hydrakken!", "Enter the Shadow Tower and defeat the Shadow Hydrakken on Ultra Difficulty"],
        ["Further Heights", "Achieve Geode Mastery 100"],
        ["Perfection!", "Using the gem forge, upgrade all of the stats on nine Stellar Gems to max"],
        ["Plant's Best Friend", "Water 1,000 plants."],
        ["Reap what you Sow", "Harvest from 50 plants."],
        ["Reduce, Reuse, Recompost", "Compost 10,000 items at the Compost Bin."],
        ["Starting Spelunker", "Get your first GAS module upgrade"],
        ["Stay Subclassy!", "Select a Subclass"],
        ["Super Spelunker", "Fully upgrade your GAS Module"],
        ["The Doctor is In!", "Enter the Shadow Tower and defeat the Darknik Dreadnought on Normal Difficulty"],
        ["The Gem Forger", "Using the gem forge, upgrade a Stellar Gem stat to max "],
        ["The Next Step", "Achieve Geode Mastery 20"],
        ["The Prescription is Pain!", "Enter the Shadow Tower and defeat the Darknik Dreadnought on Hard Difficulty"],
        ["Top Bomber", "Win your first Bomber Royale match"],
        ["Unleash the Hydrakken!", "Enter the Shadow Tower and defeat the Shadow Hydrakken on Normal Difficulty"],
        ["Vanquish the Hydrakken! ", "Enter the Shadow Tower and defeat the Shadow Hydrakken on Hard Difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
