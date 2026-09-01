import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/teardown.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1167630 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("teardown");

test("getPlannerData('teardown') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for teardown");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Teardown achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Teardown achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Teardown achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Above and beyond", "Reach an altitude of 100m."],
        ["Average looter", "Find 100 valuables."],
        ["Bare bones", "Complete a mission without using any tools."],
        ["Beat it", "Complete the game."],
        ["Big brother", "Complete Ornamental ordeal without getting seen by the robots."],
        ["Completionist", "Complete the game with all optional targets."],
        ["Couch potato", "Destroy the treadmill in your home hub's gym 10 times (break it, restart the level, repeat)."],
        ["Drive for treasure", "On Muratori Beach (the map before the 'Alarm system' mission), open the submerged shipping container and get into the car inside - missable once 'Alarm system' is complete."],
        ["I took a thing", "Find 50 valuables."],
        ["I was on a boat", "In Sandbox mode at the Marina, completely sink the largest luxury yacht (holes in the hull or heavy explosives)."],
        ["Liftoff", "Get airtime of 2 seconds in a car."],
        ["McFly", "Reach 88 mph in a vehicle (easiest with rocket boosters on a long straight, e.g. the Villa Gordon racetrack)."],
        ["Meticulous planner", "Spend a very long time in a mission before triggering anything ('Meticulous planner')."],
        ["Now what", "Destroy 100 000 000 voxels."],
        ["Paintjob", "On the Quilez Security map, find the hidden cave containing a boat and spray-paint the boat completely."],
        ["Runner up", "Complete The Chase without using any vehicles."],
        ["Sharpshooter", "Get full score on skeetmaster 10 times."],
        ["Speedrunner", "Complete a mission very quickly - the first mission, 'The Old Building Problem', is easiest, trivial with the Rocket Launcher."],
        ["Summer is over", "Reach part 2."],
        ["Swiss cheese", "Complete An assortment of dishes without getting hit by the chopper."],
        ["The floor is water", "Complete Flooding without getting wet."],
        ["Tourist", "Travel to Muratori."],
        ["True looter", "Find 200 valuables."],
        ["Visit the developers", "Open the 'Developers' credits from the main menu and watch them all the way through (about 3 minutes)."],
        ["Wasn't me", "Destroy 10 000 000 voxels."],
        ["Where's my hammer?", "Complete Making space without using any tools."],
        ["Whoops", "Destroy 1 000 000 voxels."],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
