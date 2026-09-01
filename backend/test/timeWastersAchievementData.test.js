import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/time-wasters.json - 96 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1290330 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("time-wasters");

test("getPlannerData('time-wasters') returns real planner data with 96 curated achievements", () => {

    assert.ok(game, "expected real planner data for time-wasters");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 96);

});

test("every Time Wasters achievement has a unique id from 1 to 96 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 96 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 96);
    assert.strictEqual(new Set(apinames).size, 96);

});

test("every Time Wasters achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 96 Time Wasters achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Azurene Bronze Victory", "Defeat the Bronze Rank Waves with Azurene"],
        ["Azurene Champion Victory", "Defeat the Champion Rank Waves with Azurene"],
        ["Azurene Diamond Victory", "Defeat the Diamond Rank Waves with Azurene"],
        ["Azurene Gold Victory", "Defeat the Gold Rank Waves with Azurene"],
        ["Azurene Loyalty Victory", "Defeat the Caves Challenge with Azurene"],
        ["Azurene Platinum Victory", "Defeat the Platinum Rank Waves with Azurene"],
        ["Azurene Silver Victory", "Defeat the Silver Rank Waves with Azurene"],
        ["Azurene Solo Victory", "Defeat the Solo Challenge with Azurene"],
        ["Corrosia Bronze Victory", "Defeat the Bronze Rank Waves with Corrosia"],
        ["Corrosia Champion Victory", "Defeat the Champion Rank Waves with Corrosia"],
        ["Corrosia Diamond Victory", "Defeat the Diamond Rank Waves with Corrosia"],
        ["Corrosia Gold Victory", "Defeat the Gold Rank Waves with Corrosia"],
        ["Corrosia Loyalty Victory", "Defeat the Slime Planets Challenge with Corrosia"],
        ["Corrosia Platinum Victory", "Defeat the Platinum Rank Waves with Corrosia"],
        ["Corrosia Silver Victory", "Defeat the Silver Rank Waves with Corrosia"],
        ["Corrosia Solo Victory", "Defeat the Solo Challenge with Corrosia"],
        ["Doc Bronze Victory", "Defeat the Bronze Rank Waves with Doc"],
        ["Doc Champion Victory", "Defeat the Champion Rank Waves with Doc"],
        ["Doc Diamond Victory", "Defeat the Diamond Rank Waves with Doc"],
        ["Doc Gold Victory", "Defeat the Gold Rank Waves with Doc"],
        ["Doc Loyalty Victory", "Defeat the Don't Move Challenge with Doc"],
        ["Doc Platinum Victory", "Defeat the Platinum Rank Waves with Doc"],
        ["Doc Silver Victory", "Defeat the Silver Rank Waves with Doc"],
        ["Doc Solo Victory", "Defeat the Solo Challenge with Doc"],
        ["Kat Bronze Victory", "Defeat the Bronze Rank Waves with Kat"],
        ["Kat Champion Victory", "Defeat the Champion Rank Waves with Kat"],
        ["Kat Diamond Victory", "Defeat the Diamond Rank Waves with Kat"],
        ["Kat Gold Victory", "Defeat the Gold Rank Waves with Kat"],
        ["Kat Loyalty Victory", "Defeat the Boss Rush Challenge with Kat"],
        ["Kat Platinum Victory", "Defeat the Platinum Rank Waves with Kat"],
        ["Kat Silver Victory", "Defeat the Silver Rank Waves with Kat"],
        ["Kat Solo Victory", "Defeat the Solo Challenge with Kat"],
        ["Luna Bronze Victory", "Defeat the Bronze Rank Waves with Luna"],
        ["Luna Champion Victory", "Defeat the Champion Rank Waves with Luna"],
        ["Luna Diamond Victory", "Defeat the Diamond Rank Waves with Luna"],
        ["Luna Gold Victory", "Defeat the Gold Rank Waves with Luna"],
        ["Luna Loyalty Victory", "Defeat the Fleet Rescue Challenge with Luna"],
        ["Luna Platinum Victory", "Defeat the Platinum Rank Waves with Luna"],
        ["Luna Silver Victory", "Defeat the Silver Rank Waves with Luna"],
        ["Luna Solo Victory", "Defeat the Solo Challenge with Luna"],
        ["Ram Bronze Victory", "Defeat the Bronze Rank Waves with Ram"],
        ["Ram Champion Victory", "Defeat the Champion Rank Waves with Ram"],
        ["Ram Diamond Victory", "Defeat the Diamond Rank Waves with Ram"],
        ["Ram Gold Victory", "Defeat the Gold Rank Waves with Ram"],
        ["Ram Loyalty Victory", "Defeat the Pinball Challenge with Ram"],
        ["Ram Platinum Victory", "Defeat the Platinum Rank Waves with Ram"],
        ["Ram Silver Victory", "Defeat the Silver Rank Waves with Ram"],
        ["Ram Solo Victory", "Defeat the Solo Challenge with Ram"],
        ["Ravebow Bronze Victory", "Defeat the Bronze Rank Waves with Ravebow"],
        ["Ravebow Champion Victory", "Defeat the Champion Rank Waves with Ravebow"],
        ["Ravebow Diamond Victory", "Defeat the Diamond Rank Waves with Ravebow"],
        ["Ravebow Gold Victory", "Defeat the Gold Rank Waves with Ravebow"],
        ["Ravebow Loyalty Victory", "Defeat the Only Up Challenge with Ravebow"],
        ["Ravebow Platinum Victory", "Defeat the Platinum Rank Waves with Ravebow"],
        ["Ravebow Silver Victory", "Defeat the Silver Rank Waves with Ravebow"],
        ["Ravebow Solo Victory", "Defeat the Solo Challenge with Ravebow"],
        ["Raven Bronze Victory", "Defeat the Bronze Rank Waves with Raven"],
        ["Raven Champion Victory", "Defeat the Champion Rank Waves with Raven"],
        ["Raven Diamond Victory", "Defeat the Diamond Rank Waves with Raven"],
        ["Raven Gold Victory", "Defeat the Gold Rank Waves with Raven"],
        ["Raven Loyalty Victory", "Defeat the Infested Planets Challenge with Raven"],
        ["Raven Platinum Victory", "Defeat the Platinum Rank Waves with Raven"],
        ["Raven Silver Victory", "Defeat the Silver Rank Waves with Raven"],
        ["Raven Solo Victory", "Defeat the Solo Challenge with Raven"],
        ["Rosanova Bronze Victory", "Defeat the Bronze Rank Waves with Rosanova"],
        ["Rosanova Champion Victory", "Defeat the Champion Rank Waves with Rosanova"],
        ["Rosanova Diamond Victory", "Defeat the Diamond Rank Waves with Rosanova"],
        ["Rosanova Gold Victory", "Defeat the Gold Rank Waves with Rosanova"],
        ["Rosanova Loyalty Victory", "Defeat the Mini Elites Challenge with Rosanova"],
        ["Rosanova Platinum Victory", "Defeat the Platinum Rank Waves with Rosanova"],
        ["Rosanova Silver Victory", "Defeat the Silver Rank Waves with Rosanova"],
        ["Rosanova Solo Victory", "Defeat the Solo Challenge with Rosanova"],
        ["TeslAI Bronze Victory", "Defeat the Bronze Rank Waves with TeslAI"],
        ["TeslAI Champion Victory", "Defeat the Champion Rank Waves with TeslAI"],
        ["TeslAI Diamond Victory", "Defeat the Diamond Rank Waves with TeslAI"],
        ["TeslAI Gold Victory", "Defeat the Gold Rank Waves with TeslAI"],
        ["TeslAI Loyalty Victory", "Defeat the City Invaders Challenge with TeslAI"],
        ["TeslAI Platinum Victory", "Defeat the Platinum Rank Waves with TeslAI"],
        ["TeslAI Silver Victory", "Defeat the Silver Rank Waves with TeslAI"],
        ["TeslAI Solo Victory", "Defeat the Solo Challenge with TeslAI"],
        ["The 1.0 Bronze Victory", "Defeat the Bronze Rank Waves with The 1.0"],
        ["The 1.0 Champion Victory", "Defeat the Champion Rank Waves with The 1.0"],
        ["The 1.0 Diamond Victory", "Defeat the Diamond Rank Waves with The 1.0"],
        ["The 1.0 Gold Victory", "Defeat the Gold Rank Waves with The 1.0"],
        ["The 1.0 Loyalty Victory", "Defeat the Green City Challenge with The 1.0"],
        ["The 1.0 Platinum Victory", "Defeat the Platinum Rank Waves with The 1.0"],
        ["The 1.0 Silver Victory", "Defeat the Silver Rank Waves with The 1.0"],
        ["The 1.0 Solo Victory", "Defeat the Solo Challenge with The 1.0"],
        ["Vermillion Bronze Victory", "Defeat the Bronze Rank Waves with Vermillion"],
        ["Vermillion Champion Victory", "Defeat the Champion Rank Waves with Vermillion"],
        ["Vermillion Diamond Victory", "Defeat the Diamond Rank Waves with Vermillion"],
        ["Vermillion Gold Victory", "Defeat the Gold Rank Waves with Vermillion"],
        ["Vermillion Loyalty Victory", "Defeat the Tower Defense Challenge with Vermillion"],
        ["Vermillion Platinum Victory", "Defeat the Platinum Rank Waves with Vermillion"],
        ["Vermillion Silver Victory", "Defeat the Silver Rank Waves with Vermillion"],
        ["Vermillion Solo Victory", "Defeat the Solo Challenge with Vermillion"],
    ];

    assert.strictEqual(officialAchievements.length, 96, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
