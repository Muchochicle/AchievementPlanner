import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stellar-blade.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3489700 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("stellar-blade");

test("getPlannerData('stellar-blade') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for stellar-blade");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Stellar Blade achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Stellar Blade achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Stellar Blade achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abaddon", "Defeat Abaddon - an early story boss, described here spoiler-free."],
        ["Abyss Levoire", "Complete the Abyss Levoire area."],
        ["Agile Gladiator", "Perfect Parried 300 enemy attacks."],
        ["Altess Levoire", "Complete the Altess Levoire area."],
        ["Battlefield Martial Artist", "Perfect Dodged 200 enemy attacks."],
        ["Beep!", "Complete the side quest 'Beep!' involving the digger robot."],
        ["Behemoth", "Defeat the Behemoth - a story boss, described here spoiler-free."],
        ["Belial", "Defeat Belial - a story boss, described here spoiler-free."],
        ["Beyond Fate", "Complete the side quest 'Beyond Fate' for Enya."],
        ["Box Hunter", "Opened 200 boxes."],
        ["Brute", "Defeat the Brute - a story boss, described here spoiler-free."],
        ["Camp Preparation", "Activated the first Camp."],
        ["Can Collector", "Collected all cans."],
        ["Cold-blooded Sniper", "Defeated 150 enemies with ranged attacks."],
        ["Corrupter", "Defeat the Corrupter - a story boss, described here spoiler-free."],
        ["Cost of Lost Memories", "Reach the 'Cost of Lost Memories' ending by taking Adam's hand at the final choice without a fully built bond with Lily."],
        ["Cruel Liberator", "Defeated 1,500 enemies."],
        ["Demogorgon", "Defeat the story boss nicknamed Demogorgon, described here spoiler-free."],
        ["EVE Protocol", "You have unlocked all achievements in the main game."],
        ["Gigas", "Defeat Gigas - a story boss, described here spoiler-free."],
        ["Infinite Blade", "Learned all skills in New Game +."],
        ["Juggernaut", "Defeat the Juggernaut - a story boss, described here spoiler-free."],
        ["Karakuri", "Defeat Karakuri - a story boss, described here spoiler-free."],
        ["Lonely Fisherman", "Caught 20 different fish."],
        ["Making New Memories", "Reach the 'Making New Memories' true ending - take Adam's hand with Lily's relationship fully built up through her side missions and Data Bank documents."],
        ["Meticulous Explorer", "Activated all Camps."],
        ["Nano Suit Collector", "Acquired 30 Nano Suits."],
        ["Naytiba Hunter", "Defeated 100 enemies with Beta Skills."],
        ["Naytiba Researcher", "Got information on all Naytibas."],
        ["Perfect Beta Energy Enhancement", "Enhanced Beta Energy to its max."],
        ["Perfect Blood Edge", "Enhanced Blood Edge to its max."],
        ["Perfect Exospine", "Enhanced 10 Exospines to their max."],
        ["Perfect Physical Enhancement", "Enhanced HP to its max."],
        ["Perfect Rechargeable Tumbler", "Enhanced the Rechargeable Tumbler to its max."],
        ["Raven", "Defeat Raven - a story boss, described here spoiler-free."],
        ["Records Collector", "Collected 200 Data Bank entries (Memorysticks, Documents, or Passcodes)."],
        ["Relentless Destroyer", "Defeated 50 enemies with Burst Skills."],
        ["Repeating Protocols", "Completed New Game +."],
        ["Return to the Colony", "Reach the 'Return to the Colony' ending by not taking Adam's hand at the final choice in the Nest."],
        ["Revenging Agent", "Defeat 50 enemies using the Tachy skill, the special combat mode unlocked later in the story."],
        ["Silent Executioner", "Defeated 50 enemies by execution."],
        ["Sisterly Love", "Complete the side quest 'Sisterly Love' for Kaya."],
        ["Stalker", "Defeat the Stalker - a story boss, described here spoiler-free."],
        ["Tachy", "Defeat Tachy - a story boss, described here spoiler-free."],
        ["Thorough Technician", "Learned all skills."],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
