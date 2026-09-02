import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/islanders-new-shores.json - 62 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2368930 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("islanders-new-shores");

test("getPlannerData('islanders-new-shores') returns real planner data with 62 curated achievements", () => {

    assert.ok(game, "expected real planner data for islanders-new-shores");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 62);

});

test("every ISLANDERS: New Shores achievement has a unique id from 1 to 62 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 62 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 62);
    assert.strictEqual(new Set(apinames).size, 62);

});

test("every ISLANDERS: New Shores achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 62 ISLANDERS: New Shores achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A New Challenger", "Complete 4 challenges."],
        ["A Short Journey", "Earn at least 10,000 points in the \"A Short Journey\" Challenge."],
        ["Adventurer", "Explore 10 islands in the same run."],
        ["Architect", "Build 240 buildings on the same island."],
        ["Blessed", "Use 8 Boons on the same island."],
        ["Brilliant Position", "Earn at least 75 points from one building."],
        ["Builder", "Build 60 buildings on the same island."],
        ["Can't Have It All", "Earn at least 30,000 points in the \"Can't Have It All\" Challenge."],
        ["Can't Stop Won't Stop", "Earn at least 200,000 points in the \"Can't Stop Won't Stop\" Challenge."],
        ["Central", "Place a City Center in the vicinity of two other City Centers."],
        ["Chilling Gifts", "Earn at least 10,000 points in the \"Chilling Gifts\" Challenge."],
        ["Clairvoyage", "Earn at least 850 points in the \"Clairvoyage\" Challenge."],
        ["Constructor", "Build 120 buildings on the same island."],
        ["Coordinated", "Destroy 2 Sacred Rocks on an island at the same time."],
        ["Couldn't Stop", "Earn at least 5,000 points on the first island in the \"Can't Stop Won't Stop\" Challenge."],
        ["Cozy", "Place a Shaman where all rays earn points."],
        ["Crammed", "Place a Cliff House that scores with at least 20 other Cliff Houses."],
        ["Deity", "Reach a high score of 60,000 points."],
        ["Explorer", "Explore 15 islands in the same run."],
        ["Fast Traveler", "Reach island 7 in the \"No time to dilly-dally\" Challenge."],
        ["Fluttering", "Place an Aviary that has a base score of at least 50."],
        ["Forested", "Place a Lumberjack that scores with at least 15 Trees."],
        ["Fortunate", "Place a Fortune Teller with a base score of at least 60."],
        ["Frugal", "Have 5 unopened Boon packs on one island."],
        ["Fully Stacked", "Earn at least 4,000 points in the \"Fully Stacked\" Challenge."],
        ["Ghost Whisperer", "Earn at least 8,000 points in the \"Ghost Whisperer\" Challenge."],
        ["Guild Master", "Place a Guild Hall that scores positively with at least 10 buildings."],
        ["Halfway There", "Earn at least 125,000 points in the \"Halfway There\" Challenge."],
        ["Industrious", "Earn at least 3,100 points in the \"Industrious\" Challenge."],
        ["Interconnected", "Place a Pyre that has positive scoring connections to at least two other Pyres."],
        ["Intermediate Challenger", "Complete 12 challenges."],
        ["Islander", "Reach a score of 1,400 on the first island."],
        ["Manufactory", "Earn at least 40,000 points in the \"Manufactory\" Challenge."],
        ["Mayor", "Reach a high score of 5,000 points."],
        ["Memory Lane", "Earn at least 75,000 points in the \"Memory Lane\" Challenge."],
        ["Metropolis", "Earn at least 11,000 points in the \"Metropolis\" Challenge."],
        ["Monarch", "Reach a high score of 30,000 points."],
        ["Mt. Roberson", "Earn at least 14,000 points in the \"Mt. Roberson\" Challenge."],
        ["Newcomer", "Reach the end of your journey for the first time."],
        ["Nice Spot", "Earn at least 35 points from one building."],
        ["No time to dilly-dally", "Earn at least 15,000 points in the \"No time to dilly-dally\" Challenge."],
        ["Novice Challenger", "Complete 8 challenges."],
        ["Now you see me", "Have at least 400 points when the first building vanishes in the \"Vanishing\" Challenge."],
        ["Odyssey", "Complete 3 islands with special properties in a single run."],
        ["Perfectly Placed", "Earn at least 150 points from one building."],
        ["Planner", "Place three buildings in a row scoring more than 60 points each."],
        ["Professional  Challenger", "Complete 16 challenges."],
        ["Protective", "Create a closed loop of at least 3 Walls."],
        ["Puzzle Solver", "Reach a score of exactly 100 points."],
        ["Renovating", "Demolish a building that removes at least 40 points."],
        ["Respectful", "Beat an island without hiding any Trees or Flowers."],
        ["Ruler", "Reach a high score of 15,000 points."],
        ["Scrupulous", "Earn at least 2,000 points without scoring negatively once."],
        ["Slow Burn", "Reach a score of 1,000 without ever having more than 6 buildings in your building bar."],
        ["Spectacular", "Earn 3 Sealed Boons from a single Ley Line."],
        ["Steadfast", "Reach a draw limit of two buildings on one island."],
        ["Tactician", "Earn at least 125 points from a single Level Up Boon."],
        ["Tall Tale", "Place a Fisher that earns points with at least 10 Fish."],
        ["Temple Trouble", "Earn at least 900 points in the \"Temple Trouble\" Challenge."],
        ["Traditional Traveler", "Reach island 12 in the \"Memory Lane\" Challenge."],
        ["Traveler", "Explore 5 islands in the same run."],
        ["Vanishing", "Earn at least 14,000 points in the \"Vanishing\" Challenge."],
    ];

    assert.strictEqual(officialAchievements.length, 62, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
