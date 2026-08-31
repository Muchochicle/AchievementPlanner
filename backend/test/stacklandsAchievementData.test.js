import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stacklands.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1948280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("stacklands");

test("getPlannerData('stacklands') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for stacklands");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Stacklands achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Stacklands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Stacklands achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["$$$", "Sell a Card"],
        ["A bit too much", "Get a Villager drunk"],
        ["A true adventurer", "Find Treasure"],
        ["Adorable Villager", "Make a Villager wear a Rabbit Hat"],
        ["Another one?!", "Kill the Final Final Boss"],
        ["Babby", "Create Offspring"],
        ["Bad Witch", "Fight the Wicked Witch"],
        ["Berry!", "Pick a Berry Bush"],
        ["Best Friend", "Get a Dog"],
        ["Chilling on the beach", "Unlock all Island Packs"],
        ["Dripped Out", "Have a Villager with Combat Level 20"],
        ["Fishy", "Catch a Fish"],
        ["Friend with an eye patch", "Befriend a Pirate"],
        ["Getting Stronger", "Build a Smithy"],
        ["Goblet Cave", "Find a mysterious artifact"],
        ["Good Company", "Get a Second Villager"],
        ["Hearty Meal", "Cook a Frittata"],
        ["Longevity", "Reach Moon 24"],
        ["Magic Number 6", "Fight Wave Six"],
        ["Marketing", "Sell a Card at the Market"],
        ["Merch", "Buy something from a Travelling Cart"],
        ["My Crib", "Build a House"],
        ["Oh shoot, a rat!", "Kill a Rat"],
        ["OoOoOoOoOo", "Find the Dark Forest"],
        ["Packed", "Unlock all Packs"],
        ["Ranged!", "Train an Archer"],
        ["Rich", "Have 50 Coins"],
        ["Row, row, row your boat", "Build a Rowboat"],
        ["Skelet", "Kill a Skeleton"],
        ["Sour fish, what's not to like?", "Make Ceviche"],
        ["Sustainable", "Build a Greenhouse"],
        ["Tasty Beverage", "Make Rum"],
        ["Tentacle Hater", "Kill the Kraken"],
        ["The End?", "Kill the Final Boss"],
        ["The Seven Seas", "Build a Sloop"],
        ["Time for Revenge", "Build a Stable Portal"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
