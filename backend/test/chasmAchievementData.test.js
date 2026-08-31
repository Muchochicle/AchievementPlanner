import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chasm.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 312200 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("chasm");

test("getPlannerData('chasm') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for chasm");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Chasm achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Chasm achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Chasm achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big Spender", "Spend 5,000 gold."],
        ["Bone Worm", "Defeat the Bone Worm."],
        ["Bookworm", "Find all the Journal Entries in the game."],
        ["Crate Buster", "Break all the crates in the game."],
        ["Explorer", "Explore 100% of the map."],
        ["Gladiator", "Become the Arena champion."],
        ["Good Samaritan", "Complete all villager sidequests."],
        ["Guildean Knight", "Complete the game on Hard difficulty."],
        ["King Trell", "Defeat King Trell (the final boss)."],
        ["Mere Mortal", "Complete the game as a Mortal."],
        ["Monster Slayer", "Defeat 1,000 enemies."],
        ["Prizefighter", "Defeat a boss without getting hit."],
        ["Shaman", "Defeat the Shaman."],
        ["Socialite", "Rescue all the missing villagers."],
        ["Superhero", "Find all the Powerups in the game."],
        ["Titan", "Defeat the Titan."],
        ["Ulak", "Defeat Ulak."],
        ["Warrior", "Defeat 100 enemies."],
        ["Wendigo", "Defeat the Wendigo."],
        ["Zoologist", "Unlock all the Bestiary entries."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
