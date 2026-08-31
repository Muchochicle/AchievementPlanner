import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/snow-the-ultimate-edition.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 244930 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("snow-the-ultimate-edition");

test("getPlannerData('snow-the-ultimate-edition') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for snow-the-ultimate-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every SNOW achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every SNOW achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 SNOW achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...The need, for speed!", "Achieve a speed of 50m/s"],
        ["Air Miles", "Spend a total of 1,000 seconds in the air"],
        ["Back to front", "Ride switch a total distance of 25km"],
        ["Boring", "Travel a total distance of 500km"],
        ["Count Dracula", "Accumulate 100,000 points"],
        ["Do you need a level?", "Reach level 30"],
        ["Flip Flop", "Flip a total of 180,000°"],
        ["Flipper", "Flip a total of 36,000°"],
        ["Flipping the Bird", "Flip a total of 360,000°"],
        ["Frequent Flyer", "Spend a total of 5,000 seconds in the air"],
        ["Future Spin", "Spin a total of 540,000°"],
        ["Grinding your teeth", "Grind for a total of 2,000 seconds"],
        ["I get the point", "Accumulate 30,000 points"],
        ["I've got the need...", "Achieve a speed of 40m/s"],
        ["It feels like we're only going backwards", "Ride switch a total distance of 1,000km"],
        ["Keep Rollin", "Roll a total of 180,000°"],
        ["Let me level with you", "Reach level 60"],
        ["Level playing field", "Reach level 10"],
        ["On a Roll", "Roll a total of 36,000°"],
        ["On the grind", "Grind for a total of 500 seconds"],
        ["Pepper Grinder", "Grind for a total of 120 seconds"],
        ["Sdrawkcab", "Ride switch a total distance of 250km"],
        ["Snoring", "Travel a total distance of 5,000km"],
        ["Speed demon", "Achieve a speed of 30m/s"],
        ["Spin to win", "Spin a total of 36,000°"],
        ["Spinning top", "Spin a total of 18,000°"],
        ["Stomp", "Achieve 50 Perfect Landings"],
        ["Stomper", "Achieve 200 Perfect Landings"],
        ["Stompest", "Achieve 1,000 Perfect Landings"],
        ["That counts", "Accumulate 10,000 points"],
        ["Touring", "Travel a total distance of 50km"],
        ["Up in the air", "Spend a total of 300 seconds in the air"],
        ["You've gotta roll with it", "Roll a total of 360,000°"],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
