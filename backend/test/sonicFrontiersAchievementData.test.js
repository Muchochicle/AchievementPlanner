import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sonic-frontiers.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1237320 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("sonic-frontiers");

test("getPlannerData('sonic-frontiers') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for sonic-frontiers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Sonic Frontiers achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Sonic Frontiers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Sonic Frontiers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Land at Peace", "Defeated the final threat and completed the main story."],
        ["Ancient Defiance", "Defeated the Titan and completed the main story on Ares Island."],
        ["Angler's Club", "Landed all catches at one fishing spot."],
        ["Ares Island Expert", "Viewed all Side Stories on Ares Island."],
        ["Ares Island Explorer", "Completed all Challenges on Ares Island and fully revealed the map."],
        ["Ares Island Memories", "Repaired all Portals on Ares Island."],
        ["Big Encounter", "Completed the fishing tutorial."],
        ["Celestial Rain", "Encountered a starfall for the first time."],
        ["Chaos Island Expert", "Viewed all Side Stories on Chaos Island."],
        ["Chaos Island Explorer", "Completed all Challenges on Chaos Island and fully revealed the map."],
        ["Chaos Island Memories", "Repaired all Portals on Chaos Island."],
        ["Combo Convert", "Performed a Phantom Rush for the first time, outside of the training simulator."],
        ["Combo Crackerjack", "Performed Phantom Rush 50 times, outside of the training simulator."],
        ["Easy Prey", "Defeated all enemy types."],
        ["Elder Koco Encounter", "Spoke with Elder Koco for the first time."],
        ["Expert Historian", "Viewed all Side Stories."],
        ["Futile Resistance", "Defeated the Titan and completed the main story on Chaos Island."],
        ["Hardened Hedgehog", "Raised Defense Level to MAX."],
        ["Hearty Hedgehog", "Raised Ring Level to MAX."],
        ["Herculean Hedgehog", "Raised Power Level to MAX."],
        ["Hermit Koco Encounter", "Spoke with Hermit Koco for the first time."],
        ["Hope Across Ages", "Defeated the Titan and completed the main story on Ouranos Island."],
        ["Hypersonic Hedgehog", "Raised Speed Level to MAX."],
        ["Koco Leader", "Gathered 200 Koco."],
        ["Kronos Island Expert", "Viewed all Side Stories on Kronos Island."],
        ["Kronos Island Explorer", "Completed all Challenges on Kronos Island and fully revealed the map."],
        ["Kronos Island Memories", "Repaired all Portals on Kronos Island."],
        ["Ouranos Island Expert", "Viewed all Side Stories on Ouranos Island."],
        ["Ouranos Island Explorer", "Completed all Challenges on Ouranos Island and fully revealed the map."],
        ["Ouranos Island Memories", "Repaired all Portals on Ouranos Island."],
        ["Perfect Run", "Completed all Missions in one Cyber Space area."],
        ["Speed Demon", "Activated a Power Boost for the first time."],
        ["Superior Ranking", "Achieved Rank S time, for the first time in a Cyber Space area."],
        ["Swath of Destruction", "Destroyed 100 breakable objects."],
        ["The Beginning", "Defeated the Titan and completed the main story on Kronos Island."],
        ["The Journey Begins", "Completed the Kronos Island tutorials."],
        ["Threats Identified", "Defeated all guardian types."],
        ["Ticket to Tranquility", "Earned 100 Purple Coins."],
        ["Unknown Threat", "Defeated a guardian for the first time."],
        ["Unrivaled Aptitude", "Unlocked all Skills."],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
