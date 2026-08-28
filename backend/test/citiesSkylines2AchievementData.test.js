import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cities-skylines-2.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 949230 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 44 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("cities-skylines-2");

test("getPlannerData('cities-skylines-2') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for cities-skylines-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Cities: Skylines II achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Cities: Skylines II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Cities: Skylines II achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Different Platformer", "Gather 2 000 tons of Oil with the offshore oil platforms in one city."],
        ["A Little Bit of TLC", "Have 6,000 citizens treated at medical clinics or hospitals in a single city."],
        ["All Smiles", "Have at least 1000 citizens and an average happiness rating of 75%."],
        ["Calling the Shots", "Have 5 city policies active simultaneously."],
        ["Cartography", "Use the editor to make a map."],
        ["Colossal Gardener", "Plant 100 trees or bushes with the landscaping tool in a single city."],
        ["Draw Me Like One of Your Lift Bridges", "Build 5 Draw- or Lift Bridges in one city."],
        ["Everything the Light Touches", "Unlock 150 map tiles in a single city."],
        ["Executive Decision", "Assign a policy to a city district."],
        ["Four Seasons", "Experience all four seasons by building a city in a climate with a snowy winter."],
        ["Go Anywhere", "Have 20 active transport lines. These can be passenger or cargo lines or any mix of the two."],
        ["Groundskeeper", "Built 10 Parks & Recreation buildings in a single city."],
        ["Happy to Be of Service", "Create a city district and assign a city service to that district."],
        ["How Much Is the Fish?", "Gather 10 000 tons of Fish resource by fishing boats or fish farms in one city."],
        ["I Made This", "Use the editor to make an asset of any other type than a map."],
        ["It's Pronounced \"Key\"!", "Build 5 kilometers of Quays in one city."],
        ["Key to the City", "Unlock each building available in the base game."],
        ["Making a Mark", "Build 5 signature buildings in a single city."],
        ["My First City", "Build city with residential, commercial and industrial zones, water, and electricity."],
        ["Now They're All Ash Trees", "Experience a forest fire."],
        ["One of Everything", "Build all unique city service buildings in a single city."],
        ["Out for a Spin", "Experience a tornado."],
        ["Pier-fect!", "Build 2 kilometers of Piers in one city."],
        ["Royal Flush", "Reach enough milestones to unlock all city services in a single city."],
        ["Ship It", "Transfer 24 000 tons of resources through Ports."],
        ["Simply Irresistible", "Have at least 1000 citizens and a city attractiveness rating of 90."],
        ["Six Figures", "Reach a population of 100,000."],
        ["Snapshot!", "Use the photo mode to take a screenshot."],
        ["Spiderwebbing", "Have 50 active transport lines. These can be passenger or cargo lines or any mix of the two."],
        ["Squasher-Downer", "Bulldoze a total of 1000 buildings."],
        ["Strength Through Diversity", "Have buildings from all four zone types in a single city."],
        ["The Architect", "Build 10 signature buildings in a single city."],
        ["The Deep End", "Have a total loan of at least 200,000 in a single city."],
        ["The Explorer", "Unlock 50 map tiles in a single city."],
        ["The Inspector", "Have a look at each individual info view panel."],
        ["The Last Mile Marker", "Reach milestone 20."],
        ["The Size of Golf Balls!", "Experience a hailstorm."],
        ["This Is Not My Happy Place", "Have at least 1000 citizens and an average happiness rating of 25%."],
        ["Top of the Class", "Build a city where at least 15% of the population has a university level of education."],
        ["Up and Away!", "Build any airport."],
        ["Welcome, One and All!", "Have a total of 6,000 tourist visits in a single city."],
        ["Wide Variety", "Create 10 districts, each with its own unique set of policies in one city."],
        ["You Little Stalker!", "Follow a citizen's lifepath from childhood to old age."],
        ["Zero Emission", "Have a city that produces 500 MW electricity by only using renewable energy sources."],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
