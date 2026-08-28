import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/7-days-to-die.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 251570 (fetched through this app's own services/steamApi.js).
// 38 of 43 ship a real, official Steam description, quoted
// verbatim below. The 5 hidden achievements ship no
// Steam description; their conditions here are curatorial, cross-checked
// against each game's wiki plus community 100% guides, and kept
// spoiler-light. difficulty/estimatedTime/missable remain curatorial.
const game = getPlannerData("7-days-to-die");

test("getPlannerData('7-days-to-die') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for 7-days-to-die");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every 7 Days to Die achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every 7 Days to Die achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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
        assert.ok(achievement.description?.trim().length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 38 officially-described 7 Days to Die achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "Height255",
        "Height0",
        "SubZeroNaked",
        "Kills44Mag",
        "LegBreak",
    ]);

    assert.strictEqual(hiddenApinames.size, 5, "sanity check - 7 Days to Die has 5 hidden achievements");

    const officialAchievements = [
        ["Adventurer", "Reached Level 28"],
        ["Alexander Bell", "Craft 50 Items"],
        ["Alexander the great", "Kill 25 other players"],
        ["Alive and Kicking", "Reached 4 in Fortitude"],
        ["Benjamin Franklin", "Craft 500 Items"],
        ["Bite the dust", "Die one Time"],
        ["Brush with Death", "60 Minutes Lived in a single Game"],
        ["Cause he's the Ax Man", "Craft your first Stone Ax"],
        ["Cheated Death", "600 Minutes Lived in a single Game"],
        ["Christopher Columbus", "Travel 10 Kilometers"],
        ["Ferdinand Magellan", "Travel 50 Kilometers"],
        ["Fit as a Fiddle", "Reached 6 in Fortitude"],
        ["Genghis Khan", "Kill 10 other players"],
        ["Good in the sack", "Place your first sleeping bag, old bed or king sized bed"],
        ["Handy Man", "Craft your first wood frame"],
        ["Healthy as a Horse", "Reached 8 in Fortitude"],
        ["Henry Ford", "Craft 1500 Items"],
        ["Julius Caesar", "Kill 5 other players"],
        ["Knock em Dead", "Die 7 Times"],
        ["Marco Polo", "Travel 250 Kilometers"],
        ["Meet Your Maker", "Die 28 Times"],
        ["Napoleon", "Kill another player"],
        ["Near Death Experience", "180 Minutes Lived in a single Game"],
        ["Nearly Immortal", "1680 Minutes Lived in a single Game"],
        ["Neil Armstrong", "Travel 1000 Kilometers"],
        ["Nomad", "Reached Level 70"],
        ["Playing Doctor", "Stop a critical bleed-out with a bandage, first aid bandage or first aid kit"],
        ["Scavenger", "Reached Level 7"],
        ["Survivalist", "Reached Level 300"],
        ["The Embalmer", "Kill 100 zombies"],
        ["The Funeral Director", "Kill 2500 zombies"],
        ["The Grave Digger", "Kill 10 zombies"],
        ["The Homestead Act", "Place your first Land Claim"],
        ["The Mortician", "Kill 500 zombies"],
        ["The Picture of Good Health", "Reached 10 in Fortitude"],
        ["Thomas Edison", "Craft 5000 Items"],
        ["Warrior", "Reached Level 140"],
        ["Your Number's Up", "Die 14 Times"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 hidden 7 Days to Die achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["Height255", "On top of the world"],
        ["Height0", "Dig Deep"],
        ["SubZeroNaked", "The polar bare club"],
        ["Kills44Mag", "Dirty Larry"],
        ["LegBreak", "Evil Knievel"],
    ];

    assert.strictEqual(names.length, 5, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
