import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/brothers-a-tale-of-two-sons.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 225080 (fetched through this app's own services/steamApi.js). 0 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("brothers-a-tale-of-two-sons");

test("getPlannerData('brothers-a-tale-of-two-sons') returns real planner data with 12 curated achievements", () => {

    assert.ok(game, "expected real planner data for brothers-a-tale-of-two-sons");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 12);

});

test("every Brothers: A Tale of Two Sons achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Brothers: A Tale of Two Sons achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 12 Brothers: A Tale of Two Sons achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A sad tune", "You made someone feel better."],
        ["Behind the Curtain", "You found a secret."],
        ["Black Sheep", "Every family's got one."],
        ["Bunny Buddies", "You made the bunnies play nice."],
        ["Call of the giants", "You sounded a giant horn."],
        ["Falling star", "Make a wish."],
        ["Love Birds", "You re-united the two love birds."],
        ["Take a Break", "You took a break from adventuring."],
        ["Turtle Soup", "You helped the turtles to the sea."],
        ["Whale Song", "You practised singing."],
        ["Windpipe", "You made the inventor dance."],
        ["Wishing Well", "You threw someone's ball down a well… Shame on you."],
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
