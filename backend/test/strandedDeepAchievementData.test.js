import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stranded-deep.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 313120 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("stranded-deep");

test("getPlannerData('stranded-deep') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for stranded-deep");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every Stranded Deep achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every Stranded Deep achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 Stranded Deep achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Another Day, Another Shore", "Create a camp (fire) on 5 distinct islands."],
        ["Archaeologist", "Find all survivor remnants."],
        ["Back To The Stone Age", "Craft a Stone Tool."],
        ["Backpacker", "Open your backpack."],
        ["Call Me Ahab", "Collect all sea monster trophies."],
        ["Columbus", "Create a camp (fire) on 10 distinct islands."],
        ["Crabby Patty", "Cook crab meat."],
        ["Da Vinci", "Craft the Gyro-copter."],
        ["Day 10", "Survive for 10 days."],
        ["Day 100", "Survive for 100 days."],
        ["Day 20", "Survive for 20 days."],
        ["Day 50", "Survive for 50 days."],
        ["Fish Are Friends", "Go 10 days without eating a fish."],
        ["Fishing Season Is Open!", "Catch your first fish."],
        ["Gotta Craft 'Em All!", "Craft 1 of each item on the same island."],
        ["Green Thumb", "Plant your first farm plot."],
        ["Hermit", "Spend 10 days on one island."],
        ["Horrific Pacific", "Complete the intro tutorial."],
        ["Horticulturalist", "Have 1 of each farm crop planted on the same island."],
        ["Hunter Of The High Seas", "Defeat your first sea monster."],
        ["Industrial Fashion", "Craft 10 pieces of furniture using corrugated scrap."],
        ["Island Hopper", "Visit an island other than the first."],
        ["Knife Skills", "Skin a crab."],
        ["Lean, Mean, Crafting Machine", "Craft 40 tools."],
        ["Look What I Have Created!", "Craft and light a Camp Fire."],
        ["Magnets", "Escaped without using the compass."],
        ["Moving Up", "Craft the Hobo Stove."],
        ["New Threads", "Craft something using the Loom."],
        ["Nomad", "Craft a Sleeping Bag."],
        ["Out Of The Frying Pan", "Repair an aircraft and fly off the islands - the game's escape ending, reached after defeating the three sea bosses."],
        ["Powah!", "Craft a Motor Boat."],
        ["Special Package", "Find Wolley."],
        ["The Seas Harvest", "Catch 10 fish."],
        ["This Sparks Joy", "Craft 100 item piles."],
        ["Unchained Melody", "Make a clay flask."],
        ["Vegetarian", "Spent 10 days without eating meat."],
        ["Working With My Hands", "Craft 20 tools."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
