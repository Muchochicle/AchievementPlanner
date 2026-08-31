import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/spelunky.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 239350 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("spelunky");

test("getPlannerData('spelunky') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for spelunky");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Spelunky achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Spelunky achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Spelunky achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Addicted", "Play Adventure Mode 1000 times."],
        ["Big Money", "Obtain 500,000 gold."],
        ["Casanova", "Rescue 10 or more damsels in one game."],
        ["City of Gold", "Reach the City of Gold."],
        ["Eternal Life", "Obtain the Ankh."],
        ["Good Teamwork", "Complete the game with at least two players alive. No shortcuts."],
        ["Her Favorite", "Win the kapala from Kali."],
        ["Ice Creamed", "Reach the Temple."],
        ["Ironman", "Complete the game without using shortcuts."],
        ["Jungle Jammed", "Reach the Ice Caves."],
        ["Low Scorer", "Complete the game without collecting any treasure. No shortcuts."],
        ["Made It", "Complete the game."],
        ["Mines Shafted", "Reach the Jungle."],
        ["Public Enemy", "Kill 12 or more shopkeepers in one game."],
        ["Seen a Lot", "Complete 50% of the journal."],
        ["Seen It All", "Complete 100% of the journal."],
        ["So It Begins", "Beat the Tutorial."],
        ["Speedlunky", "Complete the game in under 8 minutes. No shortcuts."],
        ["The Entire Gang", "Rescue all 16 hidden characters."],
        ["To Hell and Back", "Complete the game the hard way."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
