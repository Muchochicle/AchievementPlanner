import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-planet-crafter.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1284190 (fetched through this app's own services/steamApi.js).
// 48 of 55 ship a real, official Steam description, quoted
// verbatim below. The 7 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers/endings kept
// spoiler-light), and secret-boss feats cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-planet-crafter");

test("getPlannerData('the-planet-crafter') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-planet-crafter");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every The Planet Crafter achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every The Planet Crafter achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 officially-described The Planet Crafter achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "LOCATION_DOOR",
        "FOUND_GOLDENSEED",
        "FOUND_FUSIONCELL",
        "FOUND_PULSARQUARTZ",
        "ENDING_SENTINEL",
        "ENDING_RILEY",
        "ENDING_WARDENS",
    ]);

    assert.strictEqual(hiddenApinames.size, 7, "sanity check - The Planet Crafter has 7 hidden achievements");

    const officialAchievements = [
        ["Ancient paradise", "Find the ancient paradise"],
        ["Are we leaving?", "Craft your first launch platform"],
        ["Automation", "Craft your first ore extractor"],
        ["Barely surviving", "Craft 10 items"],
        ["Biomass", "Craft your first biodome"],
        ["Biosphere", "Reach complete terraformation"],
        ["Breath", "Reach atmosphere level"],
        ["Bubbles under water", "Reach fish level"],
        ["Clouds in the sky", "Reach clouds"],
        ["Cookie factory", "Bake a cookie"],
        ["Distant Wrecks", "Craft a portal generator"],
        ["Evolution", "Reach mammals level"],
        ["Farming on Mars", "Create your first outside farm"],
        ["Flowers on hostile planet", "Craft your first flower spreader"],
        ["Genetic Engineer", "Craft your first DNA Manipulator"],
        ["Getting comfy", "Craft 100 items"],
        ["Greenery", "Reach moss level"],
        ["It's growing", "Reach herbs level"],
        ["Jump in lava", "Get lava damages"],
        ["Jungle", "Craft your first tree spreader"],
        ["Life from the sky", "Reach rain level"],
        ["Liquid water", "Reach liquid water level"],
        ["Logistics", "Build a drone"],
        ["Mushrooms river", "Discover the mushroom river"],
        ["New life forms", "Craft your first DNA sequence"],
        ["New Sky", "Reach full blue sky"],
        ["Not the face!", "Get hit by an asteroid"],
        ["Rainbow caves", "Discover the rainbow caves"],
        ["Shelter", "Construct your first living compartment"],
        ["So much water", "Reach full lakes level"],
        ["Space frogs", "Reach amphibians stage"],
        ["Space magnate", "Gain a total of 100000 Terra Tokens"],
        ["Space pirate", "Gain a total of 1000 Terra Tokens"],
        ["Space smuggler", "Gain a total of 100 Terra Tokens"],
        ["Space trader", "Gain a total of 10000 Terra Tokens"],
        ["Space Trading", "Build a space trading rocket"],
        ["Space zoo", "Craft an animal shelter"],
        ["The Blue Rare Ore", "Find Osmium"],
        ["The Cenote", "Discover the cenote biome"],
        ["The factory must grow", "Build an autocrafter"],
        ["The Forests", "Reach trees level"],
        ["The Rare Red Ore", "Find Iridium"],
        ["The White Rare Ore", "Find Zeolite"],
        ["The Yellow Rare Ore", "Find Solar Quartz"],
        ["Unstoppable", "Craft 1000 items"],
        ["Vegetables in space", "Craft your first food grower"],
        ["Vivarium", "Reach insects level"],
        ["What could go wrong?", "Craft your first nuclear reactor"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 7 hidden The Planet Crafter achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["LOCATION_DOOR", "A Door ?"],
        ["FOUND_GOLDENSEED", "Golden flower"],
        ["FOUND_FUSIONCELL", "Fusion Energy"],
        ["FOUND_PULSARQUARTZ", "The Pink Rare Ore"],
        ["ENDING_SENTINEL", "Subjection"],
        ["ENDING_RILEY", "Subservience"],
        ["ENDING_WARDENS", "Subversion"],
    ];

    assert.strictEqual(names.length, 7, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
