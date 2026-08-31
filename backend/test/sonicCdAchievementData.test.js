import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sonic-cd.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 200940 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sonic-cd");

test("getPlannerData('sonic-cd') returns real planner data with 12 curated achievements", () => {

    assert.ok(game, "expected real planner data for sonic-cd");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 12);

});

test("every Sonic CD achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Sonic CD achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 12 Sonic CD achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["88 Miles Per Hour", "Travel through time"],
        ["All Stages Clear!", "Finish the game"],
        ["Dr. Eggman Got Served", "Destroy Dr. Eggman's final machine"],
        ["Heavy Metal", "Defeat Metal Sonic without getting hurt"],
        ["Just in Time!", "Complete the Time Attack mode in under 25 minutes"],
        ["Just one hug is enough", "Get a hug from Amy"],
        ["King of the Rings", "Collect 200 Rings"],
        ["Paradise Found", "Complete a zone in the Good Future"],
        ["Saviour of the Planet", "Destroy all the robot teleporters and Metal Sonic holograms in the past"],
        ["Statue Saviour", "Find the angel statue in Wacky Workbench"],
        ["Take the High Road", "Pass the upper Signpost in Collision Chaos Zone 2"],
        ["Treasure Hunter", "Collect all the Time Stones"],
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
