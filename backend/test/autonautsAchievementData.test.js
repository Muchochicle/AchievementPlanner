import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/autonauts.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 979120 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 26 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("autonauts");

test("getPlannerData('autonauts') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for autonauts");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every Autonauts achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every Autonauts achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 Autonauts achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Autobanquety", "Banquet Plan Completed (Enlightenment)"],
        ["Autobotty", "200 Bots Made"],
        ["Autocommunity", "First Full Settlement"],
        ["Autodressy", "1 000 Clothes Made"],
        ["Autoefficiency", "First Full Settlement: 300 Bot Limit"],
        ["Autoeggy", "1 000 Henhouse Eggs Laid"],
        ["Autoexplory", "200 Plots Uncovered"],
        ["Autofishy", "2 000 Fish Caught (Enlightenment)"],
        ["Autofruity", "2 000 Berries Collected"],
        ["Autograiny", "2 000 Cereal Crops Cut"],
        ["Autohoney", "1 000 Honey Made"],
        ["Autolumberjacky", "2 000 Trees Chopped Down"],
        ["Autolunchy", "Lunch Plan Completed (Enlightenment)"],
        ["Automilky", "1 000 Cows Milked"],
        ["Autominey", "2 000 Minerals Mined"],
        ["Autonoshy", "1 000 Food Cooked"],
        ["Autopotty", "500 Pottery Made"],
        ["Autoshroomy", "2 000 Mushrooms Collected (Enlightenment)"],
        ["Autosmörgåsbordy", "Smörgåsbord Plan Completed (Enlightenment)"],
        ["Autospawny", "50 Folk Created"],
        ["Autostory", "5 000 Anything Stored"],
        ["Autotooly", "1 000 Tools Made"],
        ["Autotransporty", "500 Mobile Storage Used"],
        ["Autowoolly", "1 000 Sheep Shorn"],
        ["Mummy's Special Little Autonaut", "Tutorial Completed"],
        ["Real Autonaut", "First World Evolved (Enlightenment)"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
