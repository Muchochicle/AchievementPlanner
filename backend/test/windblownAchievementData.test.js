import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/windblown.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1911610 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("windblown");

test("getPlannerData('windblown') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for windblown");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Windblown achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Windblown achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Windblown achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alterattack", "Unlock Alterattack"],
        ["Broken Banger", "Defeat the Broken Banger"],
        ["Carving", "Carve for the first time"],
        ["Endless Adept", "Finish an Endless Mode loop"],
        ["Factory", "Reach the Factory for the first time"],
        ["FREND-43V3R", "Repair FREND-43V3R"],
        ["Fungal Swamp", "Reach the Fungal Swamp for the first time"],
        ["Gear Adept", "Unlock 10 Weapons or Trinkets"],
        ["Gift Adept", "Unlock 30 Gifts"],
        ["Head", "Defeat the Head"],
        ["Headbanger", "Defeat the Headbanger"],
        ["Incubator", "Reach the Incubator for the first time"],
        ["Lost Archipelago", "Reach the Lost Archipelago for the first time"],
        ["Memoreaper", "Defeat the Memoreaper"],
        ["Navelless Brothers", "Defeat the Navelless Brothers"],
        ["Off with its head!", "Defeat the Headbanger's head while it's trying to flee"],
        ["Original Copy", "Repair Cuprik's hammer"],
        ["Pietro", "Rescue Pietro during an expedition"],
        ["Pirate Captain", "Defeat the Pirate Captain"],
        ["Rat Village", "Reach the Rat Village for the first time"],
        ["Rhodie", "Rescue Rhodie during an expedition"],
        ["Sanctuary", "Reach the Sanctuary for the first time"],
        ["Sigourney", "Rescue Sigourney during an expedition"],
        ["Stone Cutter", "Find a way to escape the Vortex"],
        ["Tribomber", "Defeat the Tribomber"],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
