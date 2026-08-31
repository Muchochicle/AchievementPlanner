import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/farming-simulator-15.json - 16 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 313160 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("farming-simulator-15");

test("getPlannerData('farming-simulator-15') returns real planner data with 16 curated achievements", () => {

    assert.ok(game, "expected real planner data for farming-simulator-15");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 16);

});

test("every Farming Simulator 15 achievement has a unique id from 1 to 16 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 16 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 16);
    assert.strictEqual(new Set(apinames).size, 16);

});

test("every Farming Simulator 15 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 16 Farming Simulator 15 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Coins on the Streets", "You have found 50 gold coins."],
        ["Financial Folly", "You managed to reach a negative balance on your very first day."],
        ["Fruits of Your Labor", "You have harvested more than 10 hectares."],
        ["Harvest King", "You have harvested more than 100 hectares."],
        ["Longplayer", "Your playing time in a single savegame has reached over 10 hours."],
        ["Mass Production", "The total area sown by you exceeds 100 hectares."],
        ["Mission Master", "You have completed 50 missions."],
        ["Mobile Farmer", "You have covered more than 100 mi with vehicles."],
        ["Nouveau-Riche", "Your account has reached more than 1$ million."],
        ["Numismatist", "You have found all 100 gold coins."],
        ["Out of Debt", "You paid back the entire bank loan."],
        ["Pots of Gold", "Your wealth has surpassed $10 million."],
        ["Something Shiny", "You have found 25 gold coins."],
        ["Sower", "You have sown more than 10 hectares."],
        ["Very Frequent Driver", "Your total driving distance has increased to over 1000 mi."],
        ["Well-Heeled", "There is more than $5 million in your account."],
    ];

    assert.strictEqual(officialAchievements.length, 16, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
