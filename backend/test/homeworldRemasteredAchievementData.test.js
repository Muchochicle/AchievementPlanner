import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/homeworld-remastered.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 244160 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("homeworld-remastered");

test("getPlannerData('homeworld-remastered') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for homeworld-remastered");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Homeworld Remastered Collection achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Homeworld Remastered Collection achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Homeworld Remastered Collection achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Angel Moon Completed", "Completed Homeworld 2 Remastered Mission 2"],
        ["Balcora Complete", "Completed Homeworld 2 Remastered Mission 14"],
        ["Balcora Gate Complete", "Completed Homeworld 2 Remastered Mission 13"],
        ["Bridge of Sighs Completed", "Completed Homeworld Remastered Mission 14"],
        ["Chapel Perilous Completed", "Completed Homeworld Remastered Mission 15"],
        ["Counter Attack Complete", "Completed Homeworld 2 Remastered Mission 9"],
        ["Derelicts Complete", "Completed Homeworld 2 Remastered Mission 7"],
        ["Diamond Shoals Completed", "Completed Homeworld Remastered Mission 6"],
        ["Dreadnaught Berth Complete", "Completed Homeworld 2 Remastered Mission 8"],
        ["Galactic Core Completed", "Completed Homeworld Remastered Mission 12"],
        ["Gehenna Completed", "Completed Homeworld 2 Remastered Mission 5"],
        ["Gehenna Outskirts Completed", "Completed Homeworld 2 Remastered Mission 4"],
        ["Graduated Cadet School", "All Homeworld Classic Tutorial Missions Completed"],
        ["Graduated Command School", "All Homeworld 2 Remastered Tutorial Missions Completed"],
        ["Great Wastelands (part 2) Completed", "Completed Homeworld Remastered Mission 5"],
        ["Great Wastelands Completed", "Completed Homeworld Remastered Mission 4"],
        ["Hiigara Completed", "Completed Homeworld Remastered Mission 16"],
        ["Keepers of Sajuuk Complete", "Completed Homeworld 2 Remastered Mission 10"],
        ["Kharak System Completed", "Completed Homeworld Remastered Mission 1"],
        ["Outskirts of Kharak System Completed", "Completed Homeworld Remastered Mission 2"],
        ["Raiders Retreat Complete", "Intercept the Turanic carriers and prevent them from reaching the safety of their planetary defenses."],
        ["Return to Hiigara Complete", "Completed Homeworld 2 Remastered Mission 15"],
        ["Return to Kharak", "Completed Homeworld Remastered Mission 3"],
        ["Sacrifice Complete", "Completed Homeworld 2 Remastered Mission 11"],
        ["Sarum Completed", "Completed Homeworld 2 Remastered Mission 3"],
        ["Sea of Lost Souls Completed", "Completed Homeworld Remastered Mission 9"],
        ["Super Nova Station Completed", "Completed Homeworld Remastered Mission 10"],
        ["Tanis Completed", "Completed Homeworld 2 Remastered Mission 1"],
        ["Tenhauser Gate Completed", "Completed Homeworld Remastered Mission 11"],
        ["Thaddis Sabbah Complete", "Completed Homeworld 2 Remastered Mission 12"],
        ["The Cathedral of Kadesh Completed", "Completed Homeworld Remastered Mission 8"],
        ["The Gardens of Kadesh Completed", "Completed Homeworld Remastered Mission 7"],
        ["The Karos Graveyard Complete", "Completed Homeworld 2 Remastered Mission 6"],
        ["The Karos Graveyard Completed", "Completed Homeworld Remastered Mission 13"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
