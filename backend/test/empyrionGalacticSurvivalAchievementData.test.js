import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/empyrion-galactic-survival.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 383120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("empyrion-galactic-survival");

test("getPlannerData('empyrion-galactic-survival') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for empyrion-galactic-survival");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Empyrion - Galactic Survival achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Empyrion - Galactic Survival achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Empyrion - Galactic Survival achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Blasting Welcome", "Kill an enemy with an Explosive Device"],
        ["Anniversary 2026", "Limited-time event achievement: start a new savegame during Empyrion's anniversary window in early August 2026 (the developers extended the date check to roughly 5-11 August). It cannot be earned outside that window."],
        ["Bedrock Digger", "Dig to max depth on a planet"],
        ["Best In Town", "Eat a pizza for the first time"],
        ["Crispy 'n Crunchy", "Burn to death in lava"],
        ["Desperate Measures", "Eat spoiled food"],
        ["Drone Wrecker Expert", "Destroy 200 space drones"],
        ["Drone Wrecker Master", "Destroy 75 space drones"],
        ["Drone Wrecker Novice", "Destroy 10 space drones"],
        ["Drone Wrecker Specialist", "Destroy 25 space drones"],
        ["Escape Velocity", "Achieve orbit for the first time"],
        ["Hazardous Materials Disposal", "Treat Indigestion using a toilet"],
        ["Home Is Where The Core Is", "Place your first Base starter"],
        ["Just To Be Sure", "Destroy a POI core with fixed vessel weapons"],
        ["Light Year Marathoner", "Warp more than 10,000 light years"],
        ["Light Year Pacer", "Warp more than 5,000 light years"],
        ["Light Year Runner", "Warp more than 1,000 light years"],
        ["Light Year Sprinter", "Warp more than 2,500 light years"],
        ["Luminous Experience", "Activate Night Vision goggles in broad daylight"],
        ["Rip And Tear", "Kill an Abomination with a chainsaw"],
        ["Take Me To Your Leader!", "Join a faction"],
        ["Too Many Legs", "Die by a spider"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
