import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metal-eden.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 990380 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("metal-eden");

test("getPlannerData('metal-eden') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for metal-eden");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every METAL EDEN achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every METAL EDEN achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 METAL EDEN achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AŚKA", "Obtain all achievements"],
        ["Consumer", "Consume 200 Cores"],
        ["Design with Architect", "Meet the Architect."],
        ["Dominating!", "Kill 80 enemies when Overdrive is activated"],
        ["Fly high", "Spend 1420 seconds in the air"],
        ["God Mode", "Complete a mission without respawning"],
        ["Hoarder", "Collect 100 001 Dust"],
        ["I don't need it", "Complete 15 encounters without collecting any placed pickups"],
        ["Impulse 101", "Acquire all weapons"],
        ["Keep rollin', rollin', rollin', rollin'", "Kill 100 enemies in Ramball mode"],
        ["KILL BOSS!", "Kill the Spiderbot boss."],
        ["KILL BOSS!!", "Kill the Overseer boss."],
        ["KILL BOSS!!!", "Kill the Nexus boss."],
        ["Let's do this!", "Complete the Prologue"],
        ["Live Long", "Finish a mission with 5 One Ups"],
        ["METAL EDEN: Brutal", "Complete the game on Brutal"],
        ["METAL EDEN: Completed", "Complete the game on Easy or Normal"],
        ["METAL EDEN: Hard", "Complete the game on Hard"],
        ["One Punch Aśka", "Kill 69 enemies with Super Punch"],
        ["Operate with Operator", "Meet the Operator."],
        ["Rip & Tear", "Rip 250 Cores from the enemies"],
        ["The Beekeeper", "Kill 3 Bumblebees."],
        ["Traveler", "Travel 200 000 meters on zip lines"],
        ["Untouchable", "Complete 10 encounters without taking any damage"],
        ["Weapons Expert", "Unlock third upgrade for all weapons"],
        ["What a mess!", "Kill at least 3 enemies with a single blow 50 times"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
