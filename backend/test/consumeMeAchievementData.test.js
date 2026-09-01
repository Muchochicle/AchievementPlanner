import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/consume-me.json - 10 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2359120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("consume-me");

test("getPlannerData('consume-me') returns real planner data with 10 curated achievements", () => {

    assert.ok(game, "expected real planner data for consume-me");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 10);

});

test("every Consume Me achievement has a unique id from 1 to 10 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 10 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 10);
    assert.strictEqual(new Set(apinames).size, 10);

});

test("every Consume Me achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 10 Consume Me achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bookworm", "Read every book!"],
        ["Cram School", "Write all your application essays in a single attempt!"],
        ["Excellence", "Raise one of your skills to level 10!"],
        ["Fashionista", "Wear every outfit at least once!"],
        ["Intellectual Heavyweight", "Finish reading the Hefty Tome!"],
        ["Payday", "Earn over $100 in a single day!"],
        ["Scholastic Achievement", "Complete your college application!"],
        ["Teacher's Pet", "Earn an A+ for your final grade!"],
        ["Triumph", "Defeat your rival!"],
        ["Valedictorian", "Earn an A++ for your final grade - a harder version of the A+ achievement."],
    ];

    assert.strictEqual(officialAchievements.length, 10, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
