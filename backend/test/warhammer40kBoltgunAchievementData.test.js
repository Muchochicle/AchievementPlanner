import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warhammer-40k-boltgun.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2005010 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 21 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("warhammer-40k-boltgun");

test("getPlannerData('warhammer-40k-boltgun') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for warhammer-40k-boltgun");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every Warhammer 40,000: Boltgun achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every Warhammer 40,000: Boltgun achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 officially-described Warhammer 40,000: Boltgun achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Chapter I - Complete", "Complete all Chapter I Missions"],
        ["Chapter II - Complete", "Complete all Chapter II Missions"],
        ["Chapter III - Complete", "Complete all Chapter III Missions"],
        ["Contempt Maintained", "Complete Forges of Corruption on My Armour Is Contempt Difficulty"],
        ["Defeat a Great Unclean One", "Defeat a Great Unclean One"],
        ["Defeat a Lord of Change", "Defeat a Lord of Change"],
        ["Duty Fulfilled", "Complete Horde Mode on Emperor's Mercy Difficulty"],
        ["Emperor’s Mercy", "Complete all Missions on Emperor’s Mercy Difficulty"],
        ["Exterminatus", "Complete all Missions on Exterminatus Difficulty"],
        ["Find all Secrets - Chapter 1", "Find all Secrets in Chapter 1"],
        ["Find all Secrets - Chapter 2", "Find all Secrets in Chapter 2"],
        ["Find all Secrets - Chapter 3", "Find all Secrets in Chapter 3"],
        ["Find All Secrets - Forges of Corruption", "Find all secrets in Forges of Corruption"],
        ["For the Emperor!", "Complete Horde Mode on Exterminatus Difficulty"],
        ["Let None Survive", "Complete Horde Mode on any difficulty"],
        ["Mercy Extended", "Complete Forges of Corruption on Emperor's Mercy Difficulty"],
        ["My Armour is Contempt", "Complete all Missions on My Armour is Contempt Difficulty"],
        ["Rage Incarnate", "Defeat a Helbrute"],
        ["The Emperor Protects", "Complete all Missions on The Emperor Protects Difficulty"],
        ["The Emperor Still Protects", "Complete Forges of Corruption on The Emperor Protects Difficulty"],
        ["There Is Only War", "Complete Forges of Corruption on Exterminatus Difficulty"],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
