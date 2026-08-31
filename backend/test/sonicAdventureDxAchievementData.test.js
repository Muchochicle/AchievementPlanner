import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sonic-adventure-dx.json - 15 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 71250 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sonic-adventure-dx");

test("getPlannerData('sonic-adventure-dx') returns real planner data with 15 curated achievements", () => {

    assert.ok(game, "expected real planner data for sonic-adventure-dx");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 15);

});

test("every Sonic Adventure DX achievement has a unique id from 1 to 15 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 15 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 15);
    assert.strictEqual(new Set(apinames).size, 15);

});

test("every Sonic Adventure DX achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 15 Sonic Adventure DX achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Amy Rose", "Become friends with Amy."],
        ["Big the Cat", "Become friends with Big."],
        ["Chao's Best Friend", "Get all Emblems of the Chao Race."],
        ["E-102 \"γ\"", "Become friends with E-102."],
        ["Knuckles the Echidna", "Become friends with Knuckles."],
        ["Metal Sonic", "Get all 130 Emblems by playing Sonic Adventure DX."],
        ["Metal Sonic Master", "Get Level A on all the Action Stages by using Metal Sonic."],
        ["Miles \"Tails\" Prower", "Become friends with Tails."],
        ["Mission All Accomplished", "Clear all 60 missions."],
        ["Sonic the Hedgehog", "Clear the Sonic story."],
        ["Sub Game Master", "Get all Emblems of the Sub Games."],
        ["Super Sonic", "Clear all characters stories."],
        ["The Adventurer", "Get all Emblems in the Adventure Field."],
        ["The Fastest & Strongest", "Get Level A on all the Action Stages."],
        ["The Perfect Adventurer", "Get all 130 Emblems."],
    ];

    assert.strictEqual(officialAchievements.length, 15, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
