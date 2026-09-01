import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rabbit-and-steel.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2132850 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rabbit-and-steel");

test("getPlannerData('rabbit-and-steel') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for rabbit-and-steel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Rabbit and Steel achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Rabbit and Steel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 54 Rabbit and Steel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Trinkets", "Collect 10 Trinkets"],
        ["20 Trinkets", "Collect 20 Trinkets"],
        ["30 Trinkets", "Collect 30 Trinkets"],
        ["40 Trinkets", "Collect 40 Trinkets"],
        ["50 Trinkets", "Collect 50 Trinkets"],
        ["60 Trinkets", "Collect 60 Trinkets"],
        ["70 Trinkets", "Collect 70 Trinkets"],
        ["A Pack of Equals", "Help break the spell on the Wolves (resolve the Wolf character's story)."],
        ["A True Challenger", "Unlock all Adept/Challenger Palettes"],
        ["A Wonderful Collab", "Help break the spell on the Frogs (resolve the Frog character's story)."],
        ["Atelier Aurum (Hard)", "Beat Atelier Aurum on Hard Mode"],
        ["Atelier Aurum (Lunar)", "Beat Atelier Aurum on Lunar Mode"],
        ["Atelier Aurum (Normal)", "Beat Atelier Aurum on Normal Mode"],
        ["Darkhouse Depths (Hard)", "Beat the Darkhouse Depths on Hard Mode"],
        ["Darkhouse Depths (Lunar)", "Beat the Darkhouse Depths on Lunar Mode"],
        ["Darkhouse Depths (Normal)", "Beat the Darkhouse Depths on Normal Mode"],
        ["Dedicated Spellbreaker", "Unlock all Master/Spellbreaker Palettes"],
        ["Forget This Ambition", "Resolve the Rabbit character's story ('Forget This Ambition')."],
        ["Hard Clear", "Beat the Moonlit Pinnacle on Hard Mode"],
        ["Hard Clear (Extra)", "Beat the Reflecting Pool on Hard Mode"],
        ["I Hope You Found a Friend", "See the Reflecting Pool DLC story ending ('I Hope You Found a Friend')."],
        ["Lunar Clear", "Beat the Moonlit Pinnacle on Lunar Mode"],
        ["Lunar Clear (Extra)", "Beat the Reflecting Pool on Lunar Mode"],
        ["Master of Many", "Unlock 20 Master/Spellbreaker Palettes"],
        ["Moonlit Melodies", "Unlock all of the Kingdom music tracks"],
        ["Music For the Heart", "Unlock all of the Extra music tracks"],
        ["Normal Clear", "Beat the Moonlit Pinnacle on Normal Mode"],
        ["Normal Clear (Extra)", "Beat the Reflecting Pool on Normal Mode"],
        ["Rabbit Rabbit Rabbit", "Unlock 10 Master/Spellbreaker Palettes"],
        ["Regret", "Help break the spell on the Dragons (resolve the Dragon character's story)."],
        ["Rise to the Challenge", "Unlock 20 Adept/Challenger Palettes"],
        ["Seeing Red", "Unlock 10 Adept/Challenger Palettes"],
        ["Sisterly Love", "Help break the spell on the Crows (resolve the Crow character's story on a full run)."],
        ["The Churchmouse Streets (Hard)", "Beat the Churchmouse Streets on Hard Mode"],
        ["The Churchmouse Streets (Lunar)", "Beat the Churchmouse Streets on Lunar Mode"],
        ["The Churchmouse Streets (Normal)", "Beat the Churchmouse Streets on Normal Mode"],
        ["The Emerald Lakeside (Hard)", "Beat the Emerald Lakeside on Hard Mode"],
        ["The Emerald Lakeside (Lunar)", "Beat the Emerald Lakeside on Lunar Mode"],
        ["The Emerald Lakeside (Normal)", "Beat the Emerald Lakeside on Normal Mode"],
        ["The King's Arsenal (Hard)", "Beat the King's Arsenal on Hard Mode"],
        ["The King's Arsenal (Lunar)", "Beat the King's Arsenal on Lunar Mode"],
        ["The King's Arsenal (Normal)", "Beat the King's Arsenal on Normal Mode"],
        ["The Moonlight Floofball", "Collect the Moonlight Floofball - a reward for completing a full Lunar-mode run of the base Kingdom (the Moonlit Pinnacle)."],
        ["The Red Darkhouse (Hard)", "Beat the Red Darkhouse on Hard Mode"],
        ["The Red Darkhouse (Lunar)", "Beat the Red Darkhouse on Lunar Mode"],
        ["The Red Darkhouse (Normal)", "Beat the Red Darkhouse on Normal Mode"],
        ["The Scholar's Nest (Hard)", "Beat the Scholar's Nest on Hard Mode"],
        ["The Scholar's Nest (Lunar)", "Beat the Scholar's Nest on Lunar Mode"],
        ["The Scholar's Nest (Normal)", "Beat the Scholar's Nest on Normal Mode"],
        ["The Spellbound Floofball", "Collect the Spellbound Floofball - a reward for completing a full Lunar-mode run of the Reflecting Pool DLC Kingdom."],
        ["The Strongest Mouse I Know", "Help break the spell on the Mice (resolve the Mouse character's story)."],
        ["The Subterra Sanctum (Hard)", "Beat the Subterra Sanctum on Hard Mode"],
        ["The Subterra Sanctum (Lunar)", "Beat the Subterra Sanctum on Lunar Mode"],
        ["The Subterra Sanctum (Normal)", "Beat the Subterra Sanctum on Normal Mode"],
    ];

    assert.strictEqual(officialAchievements.length, 54, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
