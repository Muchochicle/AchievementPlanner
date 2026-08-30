import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sonic-mania.json - 18 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 584400 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sonic-mania");

test("getPlannerData('sonic-mania') returns real planner data with 18 curated achievements", () => {

    assert.ok(game, "expected real planner data for sonic-mania");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 18);

});

test("every Sonic Mania achievement has a unique id from 1 to 18 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 18 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 18);
    assert.strictEqual(new Set(apinames).size, 18);

});

test("every Sonic Mania achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 18 Sonic Mania achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Boat Enthusiast", "We really like boats"],
        ["Collect 'Em All", "Gotta gacha 'em all"],
        ["Crate Expectations", "Wreak havoc at the propaganda factory"],
        ["Full Medal Jacket", "Collect silver medallions in Blue Spheres Bonus stage"],
        ["King of Speed", "Get through Stardust Speedway Zone as quickly as possible"],
        ["Magnificent Seven", "Collect all seven Chaos Emeralds"],
        ["No Way? No Way!", "Collect gold medallions in Blue Spheres Bonus stage"],
        ["Now It Can't Hurt You Anymore", "What would happen if you cross a bridge with a fire shield?"],
        ["Professional Hedgehog", "That elusive perfect run, only a professional can achieve"],
        ["Secret Sub", "You might have to submerge to find it"],
        ["See You Next Game", "Achieve any ending"],
        ["Superstar", "Spin the Star Post!"],
        ["That's a Two-fer", "Find the hidden item boxes at the end of the Zone"],
        ["The Most Famous Hedgehog in the World", "Have your photos taken in Studiopolis Zone"],
        ["The Password is \"Special Stage\"", "Try pushing a barrel to see how far it goes"],
        ["Triple Trouble", "Try for a 3 chain combo!"],
        ["Window Shopping", "Let the wind take you through"],
        ["Without a Trace", "Barrel through the lava, don't let anything stop you"],
    ];

    assert.strictEqual(officialAchievements.length, 18, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
