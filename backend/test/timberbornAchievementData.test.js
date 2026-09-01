import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/timberborn.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1062090 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("timberborn");

test("getPlannerData('timberborn') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for timberborn");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Timberborn achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Timberborn achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Timberborn achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Beaver-made Forest", "Plant 5,000 trees during a single playthrough."],
        ["Beaver-made Thicket", "Plant 1,000 trees during a single playthrough."],
        ["Beaver-made Wilderness", "Plant 10,000 trees during a single playthrough."],
        ["Castor Posthumus", "As Iron Teeth, have a beaver born after the beaver population has dropped to 0 (bots keep the colony alive)."],
        ["Crackling with Ideas", "Build a Campfire."],
        ["Created in Beaver’s Image", "Build a bot."],
        ["Desert of the Real", "As Iron Teeth, have a beaver born from an Advanced Breeding Pod and get injured on the same day."],
        ["Endless Crunch", "Have a 24-hour work time for 7 days in a row."],
        ["Enough to Power a Car Battery", "Generate 2,000 hp using only power wheels in a single power network."],
        ["Fixed a Leak", "Cover a badwater source on the map using one of the dedicated buildings."],
        ["Folktails Master Builder", "Build one of every building and structure available to Folktails."],
        ["Hanging Gardens", "As Iron Teeth, build 8 Hydroponic Gardens stacked upon each other."],
        ["Hedge Fund", "As Folktails, build 200 Hedges on one map."],
        ["I Am Become Deaf", "Explode 200 dynamite in a single day."],
        ["Iron Teeth at the Ready", "Unlock the Iron Teeth faction."],
        ["Iron Teeth Master Builder", "Build one of every building and structure available to Iron Teeth."],
        ["It Happens.", "Demolish a building and place an identical one in its spot right afterwards."],
        ["It's an Instinct", "Build a Dam."],
        ["Legendary Pioneer", "Survive 50 cycles on one map."],
        ["Mastered the Flow", "Generate 10,000 hp using only water wheels in a single power network."],
        ["Ninety-nine Balloons and Counting", "Build and launch the wonder as Folktails."],
        ["No More Leaks", "Cap all badwater sources on the map using the dedicated buildings."],
        ["Not Again!", "Experience two badtides in a row (a badtide immediately followed by another)."],
        ["Not Bad!", "Survive your first badtide."],
        ["Not the Bees!", "As Folktails, have a beaver be stung by a bee."],
        ["One Big Colony", "Reach a population of 250 beavers."],
        ["One Big Family", "Reach a population of 100 beavers."],
        ["One Big... Horde?", "Reach a population of 500 beavers."],
        ["Oops!", "Have a beaver (or bot) on the same tile as a stick of dynamite when it detonates."],
        ["Overachiever", "Launch three wonders at the same time."],
        ["Plankster", "As Iron Teeth, produce 500 Planks in a single day."],
        ["Power Around the Clock", "Store at least 655,321 hph worth of power using Gravity Batteries."],
        ["Quadfecta of Misery", "Have a beaver die while affected by injury, contamination, hunger and thirst all at once."],
        ["Refined Refinement", "As Folktails, have working Refineries producing each available recipe."],
        ["Rock Bottom", "Attempt to place dynamite at the lowest level of the map."],
        ["Rush B-eaver!", "Build a wonder before cycle 15 ends."],
        ["Shaka Bra!", "As Folktails, have a zipline network with a combined length of 1 kilometer."],
        ["Sky Is the Limit", "Build a structure at the highest allowed height."],
        ["Smell of Water in the Morning", "Survive your first drought."],
        ["Smile, everybeaver!", "Have the maximum possible average well-being with a beaver population of at least 100."],
        ["So Long, and Thanks for the Coffee!", "Build and launch the wonder as Iron Teeth."],
        ["Survival 101", "Survive 10 cycles on one map."],
        ["Survivor", "Survive 5 cycles on one map."],
        ["Sweet Teeth", "As Folktails, have 1,000 Maple Pastries and no other food at the end of a day."],
        ["That's... Acceptable", "Reach average well-being of 4."],
        ["That's... Amazing", "Reach average well-being of 50."],
        ["That's... Awesome", "Reach average well-being of 40."],
        ["That's... Good", "Reach average well-being of 30."],
        ["That's... Incredible", "Reach average well-being of 60."],
        ["That's... Nice", "Reach average well-being of 20."],
        ["That's... Okay", "Reach average well-being of 10."],
        ["That's... Paradise!", "Reach max average well-being."],
        ["Time of the Bots", "Build a bot after all beavers have gone extinct."],
        ["Tube City", "As Iron Teeth, have at least 10 Tubeway Stations and 1,000 Tubeways."],
        ["Unnecessary Expenses", "As Iron Teeth, reach a beaver population of 200 without building any housing."],
        ["Wasteland Expert", "Survive 20 cycles on one map."],
        ["We Have the Technology", "Cure a contaminated beaver."],
        ["Wet Floor", "Flood a building with water."],
        ["Windy Day", "As Folktails, generate 10,000 hp using only wind turbines in a single power network. "],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
