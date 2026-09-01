import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/shotgun-cop-man.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2966850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("shotgun-cop-man");

test("getPlannerData('shotgun-cop-man') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for shotgun-cop-man");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Shotgun Cop Man achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Shotgun Cop Man achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 Shotgun Cop Man achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["*Blinks*", "Complete all \"Speedrun\" challenges."],
        ["Airborne", "Spend less than 5 seconds on the ground in a level."],
        ["Have you met my friend?", "Throw an enemy at another enemy."],
        ["Hello, anybody there?", "Complete all \"Kill All\" challenges."],
        ["Justice is Served", "Beat the game."],
        ["Kill All", "Complete one \"Kill All\" challenge."],
        ["No Damage", "Finish a level without getting hit"],
        ["Not a scratch", "Complete all \"No Damage\" challenges."],
        ["Rest in Pieces", "Blow 100 enemies to pieces."],
        ["Speedrun", "Complete one \"Speedrun\" challenge."],
        ["The Creator", "Check out the Level Editor."],
        ["Total Champ", "Complete all challenges for all levels."],
        ["Who's the Boss now?", "Beat a boss without getting hit."],
        ["World 1", "Beat World 1."],
        ["World 2", "Beat World 2."],
        ["World 3", "Beat World 3."],
        ["World 4", "Beat World 4."],
        ["World 5", "Beat World 5."],
        ["World 6", "Beat World 6."],
        ["World 7", "Beat World 7."],
        ["World 8", "Beat World 8."],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
