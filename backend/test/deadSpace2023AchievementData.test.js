import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dead-space-2023.json - 47 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1693980 (fetched through this app's own services/steamApi.js).
// 37 of 47 ship a real, official Steam description, quoted
// verbatim below. The 10 hidden achievements ship no Steam
// description; their conditions here are curatorial (story markers kept
// spoiler-light), and boss/feat conditions cross-checked against community guides.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dead-space-2023");

test("getPlannerData('dead-space-2023') returns real planner data with 47 curated achievements", () => {

    assert.ok(game, "expected real planner data for dead-space-2023");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 47);

});

test("every Dead Space (2023) achievement has a unique id from 1 to 47 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 47 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 47);
    assert.strictEqual(new Set(apinames).size, 47);

});

test("every Dead Space (2023) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 officially-described Dead Space (2023) achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "ach38",
        "ach39",
        "ach40",
        "ach41",
        "ach42",
        "ach43",
        "ach44",
        "ach45",
        "ach46",
        "ach47",
    ]);

    assert.strictEqual(hiddenApinames.size, 10, "sanity check - Dead Space (2023) has 10 hidden achievements");

    const officialAchievements = [
        ["A Cut Above", "Kill 30 enemies with the Ripper."],
        ["All Systems Go", "Complete Chapter 3 on any difficulty setting."],
        ["Autofire", "Kill 30 enemies with the Pulse Rifle."],
        ["Backbreaker", "Kill 10 enemies with a stomp attack."],
        ["Betrayed", "Complete Chapter 11 on any difficulty setting."],
        ["Built To Order", "Install every weapon upgrade."],
        ["Cannon Fodder", "Complete Chapter 4 on any difficulty setting."],
        ["Eviscerator", "Kill 30 enemies with the Line Gun."],
        ["Exodus", "Complete Chapter 12 on any difficulty setting."],
        ["Final Regeneration", "Discover the Hunter's origins."],
        ["Freeze", "Use Stasis on 50 enemies."],
        ["Full Arsenal", "Own every weapon in the game."],
        ["Full Contact", "Kill 30 enemies with the Contact Beam."],
        ["Greenhouse Effect", "Complete Chapter 6 on any difficulty setting."],
        ["Keeper of the Faith", "Complete Chapter 10 on any difficulty setting."],
        ["Lab Rat", "Complete Chapter 2 on any difficulty setting."],
        ["Legend Teller", "Collect 150 Logs."],
        ["Live with the Hot Ones", "Kill 30 enemies with the Flamethrower."],
        ["Marksman", "Dismember 50 Limbs."],
        ["Maxed Out", "Fully upgrade all weapons and equipment."],
        ["Merchant", "Collect all Schematics."],
        ["One Gun", "Beat the game using only the Plasma Cutter."],
        ["Pack Rat", "Place 25 items in Storage."],
        ["Pusher", "Kill 30 enemies with the Force Gun."],
        ["Raise The Stakes", "Pin an enemy."],
        ["S.O.S.", "Complete Chapter 7 on any difficulty setting."],
        ["Set A Benchmark", "Complete the game on Medium difficulty or above."],
        ["Story Teller", "Collect 75 Logs."],
        ["Strange Transmissions", "Complete Chapter 8 on any difficulty setting."],
        ["Surgeon", "Dismember 500 Limbs."],
        ["True Believer", "Complete Chapter 5 on any difficulty setting."],
        ["Trusted Contractor", "Complete New Game Plus on any difficulty mode."],
        ["Untouchable", "Complete the game in Impossible Mode."],
        ["Welcome Aboard", "Complete Chapter 1 on any difficulty setting."],
        ["Whole Again", "Pursue Nicole's investigation."],
        ["Wishbone", "Rip off a dangling limb using Kinesis."],
        ["Wreckage", "Complete Chapter 9 on any difficulty setting."],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 10 hidden Dead Space (2023) achievements each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["ach38", "Front Toward Enemy"],
        ["ach39", "Z-Baller"],
        ["ach40", "There's Always Peng!"],
        ["ach41", "Full Clearance"],
        ["ach42", "Brute Force"],
        ["ach43", "Exterminator"],
        ["ach44", "Get Off My Ship!"],
        ["ach45", "Mindless Prey"],
        ["ach46", "Marked"],
        ["ach47", "Reunion"],
    ];

    assert.strictEqual(names.length, 10, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
