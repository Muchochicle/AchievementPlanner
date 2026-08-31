import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-last-of-us-part-i.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1888930 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-last-of-us-part-i");

test("getPlannerData('the-last-of-us-part-i') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-last-of-us-part-i");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every The Last of Us Part I achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every The Last of Us Part I achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 The Last of Us Part I achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Angel Knives", "Defeat Black Fang without getting hit"],
        ["Brick Master", "Win the brick throwing contest"],
        ["Build Em Up, Break Em Down", "Upgrade and then break one of every melee weapon"],
        ["Chronicles", "Find all notes and artifacts"],
        ["Combat Ready", "Fully upgrade a weapon"],
        ["Don't Go", "Complete Left Behind"],
        ["Endure and Survive", "Collect all comics"],
        ["Fallen Firefly", "Find a Firefly pendant"],
        ["Geared Up", "Craft every item"],
        ["Getting to Know You", "Engage in all optional conversations"],
        ["In Memoriam", "Pick up Frank's note after it's discarded"],
        ["It Can't Be For Nothing", "Collect all the achievements"],
        ["Left Hanging", "Leave Ellie hanging after a job well done"],
        ["Lights Out", "While in stealth, turn off the spotlight generator in Pittsburgh"],
        ["Live Bait", "Use bricks or bottles to lure an infected into attacking a human"],
        ["Look for the Light", "Find all Firefly pendants"],
        ["Master of Unlocking", "Break into every locked door using shivs"],
        ["No Matter What", "Complete Part 1"],
        ["Nobody's Perfect", "Play the Jak X game in Left Behind"],
        ["Prepared For the Worst", "Find all workbenches"],
        ["Savage Starlight Fan", "Find a comic"],
        ["Self-Help", "Find one training manual"],
        ["Sharpest Tool in the Shed", "Find all workbench tools"],
        ["Skillz", "Win the water gun fight"],
        ["Something to Fight For", "Find all training manuals"],
        ["Sticky Fingers", "Open all safes"],
        ["That's All I Got", "Survive all of Ellie's jokes"],
        ["Waterlogged", "Ride the sewer contraption with Henry and Sam"],
        ["Who's A Good Boy?", "Pet Buckley the dog"],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
