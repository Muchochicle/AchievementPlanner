import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/dawn-of-man.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 858810 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 24 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("dawn-of-man");

test("getPlannerData('dawn-of-man') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for dawn-of-man");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every Dawn of Man achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Dawn of Man achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 Dawn of Man achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ancient Apprentice", "Complete tutorial"],
        ["Ancient Miner", "Have at least 3 mines at one given time in the Neolithic era"],
        ["Challenger", "Complete 1 challenge"],
        ["Completion", "Complete all 30 milestones"],
        ["Continental Settlement", "Achieve a population of 50 in the Continental Dawn scenario"],
        ["Express Evolution", "Research all techs in the tech tree in less than 6 hours of gameplay"],
        ["Hardened Survivor", "Complete 5 milestones in hardcore mode"],
        ["Hyper Challenger", "Complete all 4 challenges"],
        ["Iron Man", "Get to the Iron Age"],
        ["Launch Forth", "Launch the game"],
        ["Massive Hunter", "Hunt a Mammoth"],
        ["Master of Steel", "Produce 10 Steel Swords in one game"],
        ["Megalith Madness", "Build a Menhir, Dolmen, Stone Circle, Statue and Cairn in the same game"],
        ["North Settlement", "Achieve a population of 50 in The Northlands scenario"],
        ["Overpopulation", "Get 200 people in your settlement"],
        ["Paleolithic Overpopulation", "Get 100 people in your settlement in the Paleolithic era"],
        ["Prestigious", "Reach 1000 prestige"],
        ["Siege Overcome", "Unlock the Steelmaking tech in the Ancient Warriors scenario"],
        ["Siege Progress", "Unlock the Bronze Age in the Ancient Warriors scenario"],
        ["Stone Prestige", "Reach 900 prestige in the Stone Age"],
        ["The Deer Hunter", "Hunt 100 deer in one game"],
        ["Ultimate Challenger", "Complete all 4 challenges in hardcore mode"],
        ["Ultimate Completion", "Complete all 30 milestones in hardcore mode"],
        ["Warrior Settlement", "Achieve a population of 50 in the Ancient Warriors scenario"],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
