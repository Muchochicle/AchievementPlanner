import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/plateup.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1599600 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 26 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("plateup");

test("getPlannerData('plateup') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for plateup");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every PlateUp! achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every PlateUp! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 PlateUp! achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A New Leaf", "Serve a salad to a customer"],
        ["Anti-social", "Complete a day without anyone serving a customer directly"],
        ["Burger Prince", "Serve a burger to a customer"],
        ["Charcoal Factory", "Cook something on a Danger Hob with an activated Gas Safety Override"],
        ["Chef School", "Activate Practice Mode during preparation time"],
        ["Circle Line", "Convey an item back to where it started"],
        ["Fireman", "Complete a day with 10 appliances on fire at once"],
        ["Flawless Timing", "Serve a customer with less than a second to spare"],
        ["Health Inspector?", "Complete a day with a mess on at least 10 tiles"],
        ["Learning By Doing", "Throw away a cooked fish in the tutorial"],
        ["Least Important Meal", "Serve a breakfast to a customer"],
        ["Man's Best Friend?", "Serve a hotdog to a customer"],
        ["New Chef Plus", "Create a franchise"],
        ["Oh No", "Set a customer on fire"],
        ["Overtime 10", "Reach Overtime Day 10"],
        ["Overtime 15", "Reach Overtime Day 15"],
        ["Overtime 5", "Reach Overtime Day 5"],
        ["Piece of the Action", "Serve a pizza to a customer"],
        ["Please Wait", "Have the first group to arrive still be waiting to order when the day ends"],
        ["Safety Last", "Wear Trainers while holding a Sharp Knife"],
        ["Soggy Bottom", "Serve a pie to a customer"],
        ["Something Fishy", "Serve a fish to a customer"],
        ["Steaks Were Made", "Serve a steak to a customer"],
        ["Stirring Things Up", "Serve a stir fry to a customer"],
        ["This Is Fine", "Complete a day when the restaurant has been on fire for more than 15 seconds"],
        ["Work Smart", "Complete a day without any player leaving the tile they started on"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
