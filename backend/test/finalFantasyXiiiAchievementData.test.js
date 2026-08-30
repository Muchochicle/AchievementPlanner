import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/final-fantasy-xiii.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 292120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("final-fantasy-xiii");

test("getPlannerData('final-fantasy-xiii') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for final-fantasy-xiii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every FINAL FANTASY XIII achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every FINAL FANTASY XIII achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 FINAL FANTASY XIII achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adamant Will", "Felled a heavyweight of the lowerworld wilds."],
        ["Commando's Seal", "Mastered the Commando role."],
        ["Dorgann's Trophy", "Completed all high-level Cie'th Stone missions."],
        ["Exorcist", "Triumphed over undying lowerworld souls in seven fierce battles."],
        ["Floraphobe", "Toppled a green terror and cut an oversized succulent down to size."],
        ["Galuf's Grail", "Completed all Cie'th Stone missions."],
        ["Gysahl Wreath", "Discovered buried treasure with a little help from a chocobo."],
        ["Instrument of Change", "Witnessed the dawn of a new crystal legend."],
        ["Instrument of Dissent", "Survived the Purge to confront a greater peril."],
        ["Instrument of Faith", "Defied destiny's charge and embarked on a different path."],
        ["Instrument of Fate", "Took the first steps toward challenging an unjust fate."],
        ["Instrument of Flight", "Slipped through the net and lived to fight another day."],
        ["Instrument of Hope", "Traveled to the world below, seeking a way to alter fate."],
        ["Instrument of Rebellion", "Made plans to infiltrate enemy-occupied territory."],
        ["Instrument of Shame", "Carried the burden of guilt to the end of the line."],
        ["Instrument of Survival", "Evaded pursuers, though memories of the past still gave chase."],
        ["Instrument of Tragedy", "Strode into danger's den and paid the consequences."],
        ["Instrument of Truth", "Recognized the true threat to the world's future."],
        ["Instrument of Vengeance", "Resolved to be more than a victim of circumstance."],
        ["Instrument of Wrath", "Took the fight to the enemy's door."],
        ["Kelger's Cup", "Completed all low-level Cie'th Stone missions."],
        ["L'Cie Paragon", "Earned a 5-star rating for all Cie'th Stone missions."],
        ["Limit Breaker", "Dealt 100,000+ damage with a single attack."],
        ["Loremaster", "Discerned the full attributes of 100 enemies."],
        ["Master's Seal", "Fully developed all characters."],
        ["Medic's Seal", "Mastered the Medic role."],
        ["Natural Selector", "Passed Titan's trials."],
        ["Pulsian Pioneer", "Took over 10,000 steps on the lowerworld surface."],
        ["Ravager's Seal", "Mastered the Ravager role."],
        ["Saboteur's Seal", "Mastered the Saboteur role."],
        ["Sentinel's Seal", "Mastered the Sentinel role."],
        ["Superstar", "Earned a 5-star rating in the battle to determine the world's fate."],
        ["Synergist's Seal", "Mastered the Synergist role."],
        ["Treasure Hunter", "Held every weapon and accessory."],
        ["Xezat's Chalice", "Completed all mid-level Cie'th Stone missions."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
