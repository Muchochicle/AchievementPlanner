import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/overcooked-all-you-can-eat.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1243830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("overcooked-all-you-can-eat");

test("getPlannerData('overcooked-all-you-can-eat') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for overcooked-all-you-can-eat");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Overcooked! All You Can Eat achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Overcooked! All You Can Eat achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Overcooked! All You Can Eat achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All You Can Eat", "Complete The Ever Peckish Rises Campaign"],
        ["Back in my day...", "Attempt to throw something in Overcooked!"],
        ["Bangers and Trash", "Put 99 items in the bin"],
        ["Bear Picnic", "Play a level from Campfire with 4 Bear Chefs"],
        ["Boxing Champion", "Get 3 Stars in a level where each player is a Box Chef. Only available in Classic Mode"],
        ["Calculated Risk", "Save An Ingredient From Burning At the Last Possible Second"],
        ["Can You Pet The Dog?", "Pet Kevin in Overcooked!"],
        ["Can You Still Pet The Dog?", "Pet Kevin in Overcooked! 2"],
        ["Careful Driver", "Run over Unbread 10 times"],
        ["Clockwork Kitchen", "Complete a level in Classic Mode by doing all the recipes in order"],
        ["Clutz in the Kitchen", "Respawn 10 times"],
        ["Dinner Party Posse", "Finish 15 kitchens in Arcade"],
        ["Fast Food", "Complete 5 tickets in under 30 seconds in Classic Mode"],
        ["Fire Hazard", "Use the Flamethrower to cook 20 items"],
        ["Food Critic", "Throw 5 Tomatoes at another player"],
        ["Get Berried", "Complete a kitchen in the Mines"],
        ["Hero of Thyme", "Complete Overcooked! and save the Onion Kingdom"],
        ["Hot Pot Shot", "Throw 100 ingredients into a cooking pot"],
        ["If You Can't Stand the Heat", "Extinguish a burning kitchen"],
        ["Infestation", "Play Overcooked! 2-2, with 4 players all using the Rat chef"],
        ["It's a Cook-Off!", "Finish 15 games in Versus Mode"],
        ["It's Bean Emotional", "Use every emote"],
        ["It's COLD", "Keep a finished meal 30 seconds before serving it"],
        ["It's RAAW", "Deliver a wrong dish 10 times"],
        ["Kitchen Nightmares", "Complete a kitchen in the Munch Mansion"],
        ["Lettuce Begin", "Complete Overcooked! and Overcooked! 2 tutorials"],
        ["Monster Mash", "Play Overcooked! 4-2, with a Werewolf, a Ghost and a Vampire Chef"],
        ["New World Order", "Play a level with 4 Reptile Chefs"],
        ["Out of this World", "Complete a kitchen in Cosmic Canteen"],
        ["Pop!", "Complete a kitchen on a Balloon"],
        ["Racoon Magic", "Teleport as the Racoon"],
        ["Rooting for you", "Win a kitchen in Versus Mode"],
        ["Something Fishy", "Play as a Aquatic creature in a Sushi Level"],
        ["Space Jelly", "Throw and Catch an Ingredient between 4 Alien chefs 15 times without dropping it"],
        ["The All Seeing Fry-Cook\t", "Play a level with 4 chefs wearing glasses"],
        ["The Unbread", "Complete Overcooked! 2 and save the Onion Kingdom... again"],
        ["They Suspect Nothing...", "Play a level with 4 players, of which 3 are the same chef"],
        ["This Is Fine", "Have 10 tiles on fire at a time"],
        ["World Renowned Chef", "Discover all locations/ levels in the main games"],
        ["World Traveler", "Complete the first level in all Worlds 1's"],
        ["Would You Like Fries With That?", "Complete an Extra Trimming world"],
        ["You're a Real Pizza-work", "Push someone off a level"],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
