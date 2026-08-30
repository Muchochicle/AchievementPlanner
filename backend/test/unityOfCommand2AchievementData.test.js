import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/unity-of-command-2.json - 10 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 809230 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("unity-of-command-2");

test("getPlannerData('unity-of-command-2') returns real planner data with 10 curated achievements", () => {

    assert.ok(game, "expected real planner data for unity-of-command-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 10);

});

test("every Unity of Command II achievement has a unique id from 1 to 10 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 10 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 10);
    assert.strictEqual(new Set(apinames).size, 10);

});

test("every Unity of Command II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 10 Unity of Command II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Boss Fight", "Destroy an elite enemy unit"],
        ["Drill Instructor", "Upgrade an HQ to 9 Command Points"],
        ["Five Star General", "Complete the \"Victory in the West\" campaign with a score of at least 7000"],
        ["Full Marks", "Complete a perfect scenario (all primary and bonus objectives taken)"],
        ["Golden Star", "Complete the \"Victory in the West\" campaign with a golden star in every scenario"],
        ["Off to a Good Start", "Win a scenario"],
        ["Operation OBSESSIVE", "Take every hex on the map"],
        ["Operational Artist", "Complete the \"Victory in the West\" campaign with 5 or more golden star scenarios"],
        ["Victory in the West", "Complete the \"Victory in the West\" campaign"],
        ["Wipeout", "Destroy all enemy units in a scenario"],
    ];

    assert.strictEqual(officialAchievements.length, 10, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
