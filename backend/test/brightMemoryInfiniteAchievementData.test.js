import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bright-memory-infinite.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1178830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("bright-memory-infinite");

test("getPlannerData('bright-memory-infinite') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for bright-memory-infinite");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every Bright Memory: Infinite achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every Bright Memory: Infinite achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 Bright Memory: Infinite achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AR Gold", "Defeat 150 enemies using your assault rifle"],
        ["AR Silver", "Defeat 80 enemies using your assault rifle"],
        ["Auto-Tracking", "Unlock “Blade Slash Whirlwind: Lv.3”"],
        ["Battle-hardened", "Sever 50 enemy limbs using weapons or skills"],
        ["Battlefield Veteran", "Kill the Giant King"],
        ["Bitter Rivals", "Clear the game on “Revenge” difficulty"],
        ["Bullseye", "Destroy 5 enemy vehicles with missiles during the car chase"],
        ["Burning Bridges", "Kill the Six-armed Emperor"],
        ["Eagle-eye", "Use “Defend” to deflect 20 enemy bullets"],
        ["Extreme Skills", "Activate “Counter” 50 times"],
        ["Fallen General", "Kill the Tian Yu Emperor"],
        ["Flames in the Sky", "Unlock “Rocket Punch: Lv.3”"],
        ["Get Rich", "Acquire 20 “Reliquaries”"],
        ["Get Richer", "Acquire 50 “Reliquaries”"],
        ["Get Richest", "Acquire 100 “Relics”"],
        ["Herculean Strength", "Defeat 150 enemies using any skill"],
        ["HG Gold", "Defeat 100 enemies using your handgun"],
        ["HG Silver", "Defeat 50 enemies using your handgun"],
        ["Infinite", "Clear the game on “Hell” difficulty"],
        ["Invulnerable", "Activate “Counter” 100 times"],
        ["Matchless Warrior", "Sever 100 enemy limbs using weapons or skills"],
        ["None Shall Survive", "Assassinate 14 people without being spotted by the enemy in the “Surrounded” infiltration mission"],
        ["Peerless Warrior", "Defeat 80 enemies using any skill"],
        ["Power Balance", "Defeat the Tian Yu Emperor"],
        ["Restoration", "Clear the game"],
        ["SG Gold", "Defeat 150 enemies using your shotgun"],
        ["SG Silver", "Defeat 80 enemies using your shotgun"],
        ["SR Gold", "Defeat 100 enemies using your sniper rifle"],
        ["SR Silver", "Defeat 50 enemies using your sniper rifle"],
        ["The Heat is On", "Defeat 20 enemies using flame-type weapons or skills"],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
