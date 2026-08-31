import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rise-of-industry.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 671440 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rise-of-industry");

test("getPlannerData('rise-of-industry') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for rise-of-industry");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Rise of Industry achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Rise of Industry achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Rise of Industry achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["[2130] Dumpster Diving", "Collect 1000 units of Steel from a map in a single game. "],
        ["[2130] Nature Lover", "Completely clean a Region of Pollution"],
        ["[2130] No Quarter Given. ", "Lose all Settlements to Pollution"],
        ["Apprentice Manufacturer", "Generate 1,000 Products across all playthoughs"],
        ["Big Hauling", "Transport 25,000 Units of Products across all playthoughs"],
        ["Billionaire", "Raise $1,000,000,000 in one playthrough"],
        ["Captain", "Setup a Boat Trade Route"],
        ["City Planner", "Place 10 Buildings within range of a single Warehouse"],
        ["Deforester", "Demolish 50 Tiles of Trees"],
        ["Director", "Spend 5 minutes in the Free-Cam mode"],
        ["Engineer", "Build a Bridge of at least 25 tiles long"],
        ["Entrepreneur", "Place your first Production or Logistic building"],
        ["Excavator", "Build a Tunnel of at least 25 tiles long"],
        ["Exporter", "Sell to the State"],
        ["Freelancer", "Complete 50 Contracts across all playthoughs"],
        ["Hard working", "Place 1,000 Buildings across all playthoughs"],
        ["High Flyer", "Setup a Zeppelin Trade Route"],
        ["I would drive 500 tiles...", "Set a Dispatch Truck to travel over 500 tiles."],
        ["Landscaper", "Use Terraforming for the first time"],
        ["Loan Ranger", "Take out a Loan that is over 25m"],
        ["Massive Gains", "Make 1 million dollars in net income in a month."],
        ["Master Builder", "Place every Building once across all playthoughs"],
        ["Penniless", "Lose the game through Bankruptcy"],
        ["Railwayman", "Setup a Train Trade Route"],
        ["Salesman", "Sell a Tier 3 Product"],
        ["Vroom Vroom", "Completed the Car Prototype"],
        ["Well educated", "Complete the Tutorial"],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
