import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/el-paso-elsewhere.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1546310 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("el-paso-elsewhere");

test("getPlannerData('el-paso-elsewhere') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for el-paso-elsewhere");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every El Paso, Elsewhere achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every El Paso, Elsewhere achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 El Paso, Elsewhere achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["BIBLICALLY ACCURATE", "Kill the Angel."],
        ["BULLET TIMED", "Dive 150 times."],
        ["BURIAL", "Defeat Djedefre."],
        ["DIGGING YOUR OWN GRAVE", "Heal 50 times."],
        ["FAITHFUL LISTENER", "Find all Pill Cop segments."],
        ["FLASHBACK", "Find all projectors."],
        ["FRANKENSTEIN", "Kill the Burned Man."],
        ["GOODBYE", "Defeat Draculae."],
        ["HATE THAT GUY", "Kill the Puppeteer for the first time."],
        ["HIGH STAKES", "Stake 250 enemies."],
        ["I DIDN'T MEAN TO", "Kill 5 hostages."],
        ["LIFTOFF", "Collect the Launcher."],
        ["NEEDLE DROP", "Clear the first Landmark level."],
        ["OLD CLASSIC", "Collect the Uzi."],
        ["RELUCTANT HERO", "Save 10 hostages."],
        ["SCARS FADE", "Get the 'Scars Fade' ending."],
        ["SHARPSHOOTER", "Hit 1,000 weak points."],
        ["SPRING LOADED", "Roll 150 times."],
        ["THANKS FOR BELIEVING", "Get the 'Thanks for Believing' ending."],
        ["UPGRADED", "Kill a mega enemy."],
        ["WAKEUP", "Clear the tutorial."],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
