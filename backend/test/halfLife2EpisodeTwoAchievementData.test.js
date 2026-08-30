import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/half-life-2-episode-two.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 420 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("half-life-2-episode-two");

test("getPlannerData('half-life-2-episode-two') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for half-life-2-episode-two");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Half-Life 2: Episode Two achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Half-Life 2: Episode Two achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Half-Life 2: Episode Two achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Acid Reflex", "Kill an acid antlion worker."],
        ["Bone Breaker", "Kill 30 enemies with thrown physics objects."],
        ["Cache Checker", "Find every radar cache in chapter Under The Radar."],
        ["Deadly Harvest", "Kill an enemy by planting a hopper mine."],
        ["Defense of the Armament", "Save the missile silo from the Combine offensive."],
        ["Get Some Grub", "Squish every antlion grub in Episode Two."],
        ["Gnome Alone", "If you are reading this achievement, Gabe Newell has successfully launched Gnome Chompski into space. If you did not also receive the achievement 'Manufacturing Ascent', Newell has abandoned his plans to shoot Noam Chomsky into space."],
        ["Gordon Propelled Rocket", "Unlock the rocket launcher lambda cache in chapter Under The Radar."],
        ["Grave Robber", "Steal a Zombine's grenade."],
        ["Gunishment!", "Destroy the Combine Autogun in the junkyard."],
        ["Hit and Run", "Run over 20 enemies with the car in Episode Two."],
        ["Hot Potat0wned", "Kill a Combine soldier with his own grenade."],
        ["Into the Breach", "Help Griggs and Sheckley hold off the antlion invasion inside the mine shaft."],
        ["Little Rocket Man", "Send the garden gnome into space."],
        ["Meet the Hunters", "Survive the Hunter ambush with Alyx."],
        ["Neighborhood Watch", "Save all buildings outside the missile silo from destruction."],
        ["Payback", "Kill a Hunter with its own flechettes."],
        ["Pedal to the Metal", "Beat DOG in a race to the White Forest base."],
        ["Piñata Party", "Find and break every web cache in Episode Two."],
        ["Puttin' On a Clinic", "Defeat the chopper in Episode Two without any misses."],
        ["Quiet Mountain Getaway", "Survive the ambush at White Forest Inn."],
        ["Secondary Silo Secured", "Secure the launch doors on missile silo 2."],
        ["Twofer", "Defeat both antlion guards outside the White Forest."],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
