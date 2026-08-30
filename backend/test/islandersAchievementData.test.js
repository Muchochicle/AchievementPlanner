import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/islanders.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1046030 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("islanders");

test("getPlannerData('islanders') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for islanders");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every ISLANDERS achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every ISLANDERS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 ISLANDERS achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Advanced", "Score 500 points in one match."],
        ["Adventurer", "Explore 20 islands."],
        ["Architect", "Build 1000 buildings."],
        ["Athlete", "Reach the 3rd island within 4 minutes."],
        ["Brilliant Position", "Earn 50 points from one building."],
        ["Builder", "Build 100 buildings."],
        ["Colony", "Reach the 3rd island."],
        ["Conqueror", "Reach the 21st Island. "],
        ["Constructor", "Build 500 buildings."],
        ["Emperor", "Earn 20,000 points."],
        ["Empire", "Reach the 4th island."],
        ["Expert", "Score 3,000 points in one match."],
        ["Explorer", "Explore 30 islands."],
        ["Guardian", "Save an Island with at least 10 buildings using the Island Archive."],
        ["In the Darkness", "Build 3 Shamans during the same night in Highscore Mode"],
        ["Investor", "Lose a total of at least 100 points in one match."],
        ["Islander", "Reach a score of 800 on the first island."],
        ["King", "Earn 10,000 points."],
        ["King of the World", "Earn 30,000 points"],
        ["Legend", " Score 10,000 points in one match."],
        ["Lord of the Towers", " Build 4 towers on an island without losing points between them in Highscore Mode"],
        ["Mason", "Place 200 buildings with at least 10 different types in Sandbox Mode."],
        ["Master", "Reach the 10th Island."],
        ["Mayor", "Earn 2,000 points."],
        ["Newcomer", "Finish your first game."],
        ["Nice Spot", "Earn 25 points from one building."],
        ["Perfectly Placed", "Earn 75 points from one building."],
        ["Photographer", "Apply a filter, a frame and a sticker by using the Photo Mode. "],
        ["Professional", "Score 1,500 points in one match."],
        ["Puzzle Solver", "Have exactly 100 points after placing a building."],
        ["Settlement", "Reach the 2nd island."],
        ["Slow Burn", "Reach a score of 1,000 without ever having more than 6 buildings in your inventory. (Individual buildings count!) Don't click the plus unless you have to."],
        ["Sprinter", "Reach the 2nd island within 90 seconds."],
        ["Strategist", " Reach a score of 15,000 points before reaching the 11th Island."],
        ["Traveler", "Explore 10 islands."],
        ["Versatile", "Build all type of buildings on one island in Highscore Mode."],
        ["Wealthy", "Have at least 12 buildings in your inventory at once."],
        ["Winter is Coming", "Score 2,000 points on a Snowy Island"],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
