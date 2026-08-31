import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/yu-gi-oh-master-duel.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1449850 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("yu-gi-oh-master-duel");

test("getPlannerData('yu-gi-oh-master-duel') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for yu-gi-oh-master-duel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Yu-Gi-Oh! Master Duel achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Yu-Gi-Oh! Master Duel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Yu-Gi-Oh! Master Duel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Beginner No More", "Duel in Standard 30 times or more in Ranked Duels"],
        ["Burn It All", "Deal a total of 100K or more damage with card effects in Ranked/Event Duels"],
        ["Chain Blazer", "Make a Chain of 5 or more effects (activated by either player) in a Ranked/Event Duel "],
        ["Come Forth...", "Tribute Summon a total of 20 or more monsters in Ranked/Event Duels"],
        ["Let's Duel!", "Declare an attack on a monster 100 or more times in Ranked/Event Duels"],
        ["Master of Special Summoning", "Special Summon a total of 50 or more monsters in Ranked/Event Duels"],
        ["Master of Spells ＆ Traps", "Activate 100 or more Spell/Trap Cards in Ranked/Event Duels"],
        ["Necromancer", "Special Summon 50 or more monsters from the Graveyard in Ranked/Event Duels"],
        ["To Greater Heights", "Reach the Platinum rank or higher in Standard"],
        ["Ultra Burst", "Defeat your opponent by dealing more than 4000 damage at a time in a Ranked/Event Duel"],
        ["Welcome to MASTER DUEL", "Register your player name"],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
