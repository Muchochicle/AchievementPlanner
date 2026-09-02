import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/smalland-survive-the-wilds.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 768200 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("smalland-survive-the-wilds");

test("getPlannerData('smalland-survive-the-wilds') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for smalland-survive-the-wilds");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Smalland: Survive the Wilds achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Smalland: Survive the Wilds achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Smalland: Survive the Wilds achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Dragon Slayer", "Collect a Feather"],
        ["Explosive development", "Collect Firesand"],
        ["Fools gold", "Collect Pyrite"],
        ["Forming bonds", "Tame any creature"],
        ["Getting some shuteye", "Sleep in a bed"],
        ["Hang time", "Glide for the first time"],
        ["Insect hunter", "Collect chitin"],
        ["Mastermind", "Meet with Nok"],
        ["Metal Age", "Collect a metal piece"],
        ["Monster Extraction", "Collect a Snake Fang"],
        ["Moth Man", "Meet the Historian"],
        ["Not Nok, who's there?", "Meet with Granger"],
        ["One VERY small step", "Meet the Elder"],
        ["Ornithomancer", "Meet with Malik"],
        ["Safe!", "Claim a tree"],
        ["Scorpion's shadow", "Meet with Sarnak"],
        ["Smooth as silk", "Collect silk"],
        ["Something Wicked", "Find the Witch, Tuhala"],
        ["Stone Age", "Collect stone"],
        ["Take Flight", "Collect Icarus Wings"],
        ["The Key", "Find the key for the walnut chest"],
        ["Trading Time", "Meet the Merchant"],
        ["Vertebrate hunter", "Collect bones"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
