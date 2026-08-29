import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/insurgency-sandstorm.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 581320 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 35 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("insurgency-sandstorm");

test("getPlannerData('insurgency-sandstorm') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for insurgency-sandstorm");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Insurgency: Sandstorm achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Insurgency: Sandstorm achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Insurgency: Sandstorm achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["#1", "Be the Most Valuable Player of a round."],
        ["Banged", "Kill an enemy after blinding them with a flashbang"],
        ["Blindfire", "Kill an enemy while blinded by a flashbang"],
        ["Carrying", "Capture an objective as the last member of the team alive."],
        ["Checkpoint Victory", "Win a match of Checkpoint."],
        ["Cinematic", "Kill an enemy while vaulting."],
        ["Designated Driver", "Drive a vehicle full of teammates for more than 15 seconds."],
        ["Efficient", "Kill three or more enemies with a single grenade or explosive."],
        ["Exploitative", "Kill an enemy while they are reloading."],
        ["Firefight Victory", "Win a match of Firefight."],
        ["First Blood", "Get the first kill in a round."],
        ["Flaccid Paralysis", "Kill 3 enemies with a headshot in a row."],
        ["Grounded", "Destroy an enemy air support vehicle."],
        ["High Speed Low Drag", "Kill an enemy right after performing a speed reload."],
        ["Hit and Run", "Kill an enemy with a vehicle."],
        ["It's All in the Reflexes", "Kill an enemy with an enemy's live grenade."],
        ["J.R. .50", "Kill an enemy driver with the mounted weapon of their vehicle."],
        ["Knock Knock", "Kill an enemy by bashing in a door."],
        ["Lucky", "Kill an enemy with the last bullet of your magazine."],
        ["Mount & Gun", "Kill an enemy using the mounted weapon on a vehicle."],
        ["Personal", "Kill an enemy with a knife."],
        ["Play to Win", "Capture 100 objectives."],
        ["Point Shooting", "Kill an enemy without using weapon sights."],
        ["Push Victory", "Win a match of Push."],
        ["Road Hazard", "Destroy an enemy vehicle with a mine."],
        ["Ruthless", "Kill an enemy by burning them."],
        ["Self-destructive", "Successfully rig and destroy an enemy weapon cache."],
        ["Semper Paratus", "Navigate through chemical gas while wearing a gas mask."],
        ["Special Delivery", "Destroy an enemy weapon cache using a remote explosive charge."],
        ["Stylin'", "Purchase your first item in the Appearance menu."],
        ["Thanks Station!", "As a Commander, kill an enemy using fire support."],
        ["There For You", "Call in fire support ten times as an Observer."],
        ["Turf War", "Block an objective from being captured and then clear it."],
        ["Wallbanger", "Kill an enemy by shooting through something."],
        ["Wet Feet", "Complete the tutorial mission."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
