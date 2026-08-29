import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/enshrouded.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1203620 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 52 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("enshrouded");

test("getPlannerData('enshrouded') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for enshrouded");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every Enshrouded achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Enshrouded achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 Enshrouded achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A place to call home", "Create a flame altar."],
        ["Albaneve Summits secret keeper", "Read all obelisks in the Albaneve Summits."],
        ["Albaneve Summits stargazer", "Reached the ancient spire in the Albaneve Summits."],
        ["Albaneve Summits weeding", "Clear the Albaneve Summits of all shroud roots."],
        ["Climbing to new heights", "Reach level 30."],
        ["Dethroned", "Defeat the shroud wyvern."],
        ["Doing something right", "Reach level 2."],
        ["Erudite", "Unlocked the first skill."],
        ["Freefall", "Craft or obtain a glider."],
        ["Getting a feel for it", "Reach level 15."],
        ["How far we have come", "Reach level 20."],
        ["Impressive journey", "Reach level 25."],
        ["Kindlewastes secret keeper", "Read all obelisks in the Kindlewastes."],
        ["Kindlewastes stargazer", "Reached the ancient spire in the Kindlewastes."],
        ["Kindlewastes weeding", "Clear the Kindlewastes of all shroud roots."],
        ["King of the mountain", "Defeat the dragon."],
        ["Leave a mark", "Mine terrain for the first time."],
        ["Mole of the Albaneve Summits", "Mine every valuable material in the Albaneve Summits."],
        ["Mole of the Kindlewastes", "Mine every valuable material in the Kindlewastes."],
        ["Mole of the Nomad Highlands", "Mine every valuable material in the Nomad Highlands."],
        ["Mole of the Revelwoods", "Mine every valuable material in the Revelwoods."],
        ["Mole of the Springlands", "Mine every valuable material in the Springlands."],
        ["Mole of the Veilwater Basin", "Mine every valuable material in the Veilwater Basin."],
        ["Nomad Highlands secret keeper", "Read all obelisks in the Nomad Highlands."],
        ["Nomad Highlands stargazer", "Reached the ancient spire in the Nomad Highlands."],
        ["Nomad Highlands weeding", "Clear the Nomad Highlands from all shroud roots."],
        ["On the way", "Reach level 5."],
        ["Onto new horizons", "Reach level 45."],
        ["Pieces of the past", "Find all forgotten \"guard of the north\" armor pieces."],
        ["Reaching the top", "Reach level 35."],
        ["Ready for new lands", "Reach level 40."],
        ["Revelwood weeding", "Clear the Revelwood of all shroud roots."],
        ["Revelwoods secret keeper", "Read all obelisks in the Revelwoods."],
        ["Revelwoods stargazer", "Reached the ancient spire in the Revelwoods."],
        ["Shortcut", "Craft or obtain a grappling hook."],
        ["Spark of the Albaneve Summits", "Find all flame shrines and sanctums in the Albaneve Summits."],
        ["Spark of the Kindlewastes", "Find all flame shrines and sanctums in the Kindlewastes."],
        ["Spark of the Nomad Highlands", "Find all flame shrines and sanctums in the Nomad Highlands."],
        ["Spark of the Revelwoods", "Find all flame shrines and sanctums in the Revelwoods."],
        ["Spark of the Springlands", "Find all flame shrines and sanctums in the Springlands."],
        ["Spark of the Veilwater Basin", "Find all flame shrines and sanctums in the Veilwater Basin."],
        ["Springland weeding", "Clear the Springlands of all shroud roots."],
        ["Springlands secret keeper", "Read all obelisks in the Springlands."],
        ["Springlands stargazer", "Reached an ancient spire in the Springlands."],
        ["Things come together", "Reach level 10."],
        ["Thundering success", "Defeat the guardian of the first elixir well."],
        ["Thus it begins", "Craft a simple item."],
        ["Veilwater Basin secret keeper", "Read all obelisks in the Veilwater Basin."],
        ["Veilwater Basin stargazer", "Reached the ancient spire in the Veilwater Basin."],
        ["Veilwater Basin weeding", "Clear the Veilwater Basin of all shroud roots."],
        ["Well done!", "Cleared the first elixir well."],
        ["Winged Victory", "Obtain a ghost glider."],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
