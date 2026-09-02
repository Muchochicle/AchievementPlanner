import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/main-assembly.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1078920 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("main-assembly");

test("getPlannerData('main-assembly') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for main-assembly");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Main Assembly achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Main Assembly achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Main Assembly achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["360", "Do a 360 while in the air with your bot."],
        ["A small step for a dummy, a future of an engineer", "Send a dummy flying really high"],
        ["All dressed up.", "Fully dress up your drone"],
        ["Better than the Wright brothers", "Fly for 30 seconds (Cannot use Hover Pads)."],
        ["Coconut Shy", "Throw a coconut at a dummy."],
        ["Fight fire with... Axe?", "Destroy a fire with an axe."],
        ["Make some noise!", "Play a sound with a speaker"],
        ["Oops... It was an accident.", "Tear a limb from a dummy"],
        ["Pop!", "Pop a balloon."],
        ["Programming level 1", "Activate a piston by connecting a toggle node directly to the piston."],
        ["Programming level 2", "Activate a piston by connecting a sum node directly to the piston"],
        ["Programming level 3", "Setup 4 wheel steering by using a negate node on the back wheels"],
        ["Programming level 4", "Send different values to left and right side on a hinge"],
        ["Riding the Rails", "Put a dummy in a train"],
        ["Sacrificed to the fire god", "Throw a dummy in the volcano"],
        ["Swiss Army Knife", "Equip every melee weapon on a bot."],
        ["They see me rollin' Wheeless", "Finish \"Down the hill!\" without any wheels."],
        ["Top of the mountain", "Reach the top of the mountain"],
        ["Treasure hunter", "Find the treasure cave"],
        ["Well deserved rest.", "Place a dummy in a chair on the beach in \"Oh No!\""],
        ["Will it float?", "Throw a dummy in the water"],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
