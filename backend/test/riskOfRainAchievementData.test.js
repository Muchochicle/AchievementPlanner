import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/risk-of-rain.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 214970 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 14 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("risk-of-rain");

test("getPlannerData('risk-of-rain') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for risk-of-rain");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Risk of Rain achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Risk of Rain achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Risk of Rain achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Combustion", "Burn enemies"],
        ["Fish food", "Feed the fish"],
        ["Fly trap", "Get the stalker trapped"],
        ["Giant face", "Defeat the MACE"],
        ["Grabber", "Defeat the Grabber"],
        ["Hardboiled", "Complete game on high difficulty"],
        ["Harpoon", "Harpoon mech FTW"],
        ["Maku and Dan", "Defeat them"],
        ["Pilot", "Get rifle mech to the end"],
        ["Plumbing", "Perform headstomp"],
        ["Shake Shake", "Shake Shake"],
        ["Smash", "Smash enemies"],
        ["Swordsman", "Get sword mech to the end"],
        ["The Relic", "Find the Relic"],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
