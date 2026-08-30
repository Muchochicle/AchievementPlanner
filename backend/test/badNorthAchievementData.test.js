import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bad-north.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 688420 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 11 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bad-north");

test("getPlannerData('bad-north') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for bad-north");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Bad North: Jotunn Edition achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Bad North: Jotunn Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Bad North: Jotunn Edition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A New Home", "Complete the campaign on any difficulty"],
        ["Bathed in Blood", "Kill 15000 vikings"],
        ["Cold Steel", "Win an island in the snow"],
        ["Folk Hero", "Complete the campaign on hard, recruit all commanders and keep them alive"],
        ["Nightwatch", "Win an island at nighttime"],
        ["Norsebane", "Kill 1000 vikings"],
        ["Protector of the Realm", "Win 10 islands in a row, without losing a single house"],
        ["Ready for Anything", "Fully upgrade one of your commanders"],
        ["Ready for Battle", "Purchase an upgrade for one of your commanders"],
        ["Split the Party", "Win 3 islands on a single turn"],
        ["Turn Back the Tide", "Kill all the vikings in a ship, before it reaches the shore"],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
