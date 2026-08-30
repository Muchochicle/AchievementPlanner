import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wizard-of-legend.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 445980 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 19 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wizard-of-legend");

test("getPlannerData('wizard-of-legend') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for wizard-of-legend");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every Wizard of Legend achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every Wizard of Legend achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 19 Wizard of Legend achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All the Things!", "Unlock 99 relics"],
        ["Best Friends Forever", "Enter the Chaos Trials in co-op mode"],
        ["Breaking the Ice", "Defeat Frost Queen Freiya"],
        ["Danger is My Middle Name", "Hold 4 cursed relics"],
        ["Feel the Burn", "Defeat Flame Empress Zeal"],
        ["Flawless Victory", "Defeat a boss without taking damage"],
        ["Forward to the Past", "Complete the Tutorial"],
        ["Gotta Go Fast", "Clear the Chaos Trials in 25 minutes"],
        ["Happy Birthday", "Defeat Taffy 5 times"],
        ["Heart of the Cards", "Unlock 99 arcana"],
        ["I Make This Look Good", "Unlock 9 outfits"],
        ["Iconoclast", "Destroy 99 paintings during the Chaos Trials"],
        ["Indie Collector", "Unlock 50 relics"],
        ["Ordered Chaos", "Unlock 3 chaos arcana"],
        ["Party like a Rock Star", "Defeat Earth Lord Atlas"],
        ["The Turn", "Unlock 50 arcana"],
        ["Truly Outrageous", "Hold 999 chaos gems at one time"],
        ["ULTRAAAAA", "Land a 50 hit combo on any boss"],
        ["Wizard of Legend", "Defeat Master Sura"],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
