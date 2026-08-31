import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cat-quest.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 593280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("cat-quest");

test("getPlannerData('cat-quest') returns real planner data with 12 curated achievements", () => {

    assert.ok(game, "expected real planner data for cat-quest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 12);

});

test("every Cat Quest achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Cat Quest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 12 Cat Quest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Dungeon Master", "Cleared all 52 dungeons"],
        ["Fashionista Lion", "Obtained all 66 armors and weapons"],
        ["Felingard Loremaster", "Completed the main quest"],
        ["Furry Armored", "Beat Mew Game with the Furry Armored modifier"],
        ["Level One", "Beat Mew Game with the Level One modifier"],
        ["Naked Cat", "Beat Mew Game with the Naked Cat modifier"],
        ["Nine Lives", "Beat Mew Game with the Nine Lives modifier"],
        ["Power of the Arcane", "Obtained all seven skills"],
        ["Saviour of the Cats", "Completed all 62 side quests"],
        ["Stronger Enemies", "Beat Mew Game with the Stronger Enemies modifier"],
        ["Super Catventurer", "Reached level 99"],
        ["The Old Master", "Obtain the complete Old Master Set"],
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
