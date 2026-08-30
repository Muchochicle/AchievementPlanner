import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/hammerwatch.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 239070 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("hammerwatch");

test("getPlannerData('hammerwatch') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for hammerwatch");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Hammerwatch achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Hammerwatch achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Hammerwatch achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Affluent", "Get 10,000 coins in the campaign"],
        ["Combo Killer!", "Get combo kills until you reach 200"],
        ["Combo Master!", "Get combo kills until you reach 1000"],
        ["Crystal Lich", "Kill the Crystal Lich in the survival level on medium difficulty without having any crutches enabled"],
        ["Desert Zone...", "...is far away from the Green Hill Zone"],
        ["Do it like Jones", "It was better in the movie"],
        ["Doomed Space Marine", "Find the fourth easter egg"],
        ["Earth & Void", "Find the third easter egg"],
        ["Full House", "Beat both the Castle Hammerwatch and the Temple of the Sun campaigns"],
        ["Genocide", "Kill 250,000 enemies in the campaign"],
        ["Hard Crystal Lich", "Kill the Crystal Lich in the survival level on hard difficulty without having any crutches enabled"],
        ["Harvesting", "Find the first easter egg"],
        ["Mass murder", "Kill 2,500 enemies in the campaign"],
        ["Massacre", "Kill 25,000 enemies in the campaign"],
        ["Midway", "Air-walk between the start and the end!"],
        ["Millionaire", "Get 1,000,000 coins in the campaign"],
        ["Pyramid of Fear", "Enter and exit the Pyramid of Fear"],
        ["Rich", "Get 100,000 coins in the campaign"],
        ["Serious Pickup", "Seriously?! That's what I got?"],
        ["Survivalist", "Survive the castle collapsing"],
        ["Temple of the Sun", "Complete the Temple campaign"],
        ["The Dragon", "Kill the Dragon on medium difficulty without having any crutches enabled"],
        ["The Dune Sharks", "Kill the Dune Sharks on medium difficulty without having any crutches enabled"],
        ["The Frost Sorcerer", "Kill Krilith on medium difficulty without having any crutches enabled"],
        ["The Grisly Combination", "Solve it like it was E1M4"],
        ["The Hard Dragon", "Kill the Dragon on hard difficulty without having any crutches enabled"],
        ["The Hard Dune Sharks", "Kill the Dune Sharks on hard difficulty without having any crutches enabled"],
        ["The Hard Frost Sorcerer", "Kill Krilith on hard difficulty without having any crutches enabled"],
        ["The Hard Knight", "Kill the Knight on hard difficulty without having any crutches enabled"],
        ["The Hard Lich", "Kill the Lich on hard difficulty without having any crutches enabled"],
        ["The Hard Queen", "Kill the Queen on hard difficulty without having any crutches enabled"],
        ["The Hard Sun Guardian", "Kill Sha'Rand on hard difficulty without having any crutches enabled"],
        ["The Heist", "Find the second easter egg"],
        ["The Knight", "Kill the Knight on medium difficulty without having any crutches enabled"],
        ["The Lich", "Kill the Lich on medium difficulty without having any crutches enabled"],
        ["The Queen", "Kill the Queen on medium difficulty without having any crutches enabled"],
        ["The Sun Guardian", "Kill Sha'Rand on medium difficulty without having any crutches enabled"],
        ["Worse than Ghost and Goblins", "Fail, where they fail: http://www.youtube.com/watch?v=-IAVCdu_DDs#t=467"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
