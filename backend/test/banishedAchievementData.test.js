import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/banished.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 242920 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 36 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("banished");

test("getPlannerData('banished') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for banished");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Banished achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Banished achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Banished achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Blacksmith", "Equip a population of over 200 adults with steel tools for 4 years."],
        ["Builder", "Build a town that has at least one of every possible structure."],
        ["Built from Stone", "Build a town with 100 stone houses."],
        ["Educated", "Have a fully educated population with 200 adults for 4 years."],
        ["Established", "Build a town that has a population of 300 after 100 years."],
        ["Exports", "Stock the trading post with at least 500 ale, 300 steel tools, and 200 warm coats."],
        ["Farmer", "Acquire 3 livestock types, 8 crop seed types, and 8 orchard seed types."],
        ["Firefighter", "Build 20 wells in a single town."],
        ["Food Variety", "Grow and harvest 8 different plants and 8 different orchard tree types in a single year."],
        ["Foodie", "In a single year, produce at least 2000 food each from hunters, gatherers, fisherman, pastures, fields, and orchards."],
        ["Golden Gate", "Build a bridge that is at least 50 units long."],
        ["Healthy", "Maintain high health for 10 years in a town with at least 100 citizens."],
        ["Highwaymen", "Build a town with 2000 stone paved road tiles."],
        ["Immigrants", "Allow 200 nomads into a single town."],
        ["Isolationist", "Reach 300 citizens without building a trading post."],
        ["Jack of all Trades", "Build a town of over 200 people that has someone working in every profession for at least 5 years."],
        ["Livestock", "Build a town that contains 60 cattle, 75 sheep, and 180 chickens."],
        ["Lumberjack", "Produce 50,000 logs within a 100 year period."],
        ["Mason", "Maintain 2 quarries with 30 workers each for 3 years."],
        ["Master Builder", "Build a town with 3 churches, 5 boarding houses, 4 markets, 5 hospitals, 2 trading posts, 6 taverns, and a town hall."],
        ["Master Trader", "Use trading posts to trade 100,000 units of goods in a single town."],
        ["Miner", "Maintain 2 mines with 30 workers each for 3 years."],
        ["Mountain Men", "Using a harsh climate and a small mountainous map, maintain a population of 50 people for 20 years."],
        ["One with Nature", "Reach 400 citizens without building crops fields, orchards, or pastures."],
        ["Ready for Anything", "Simultaneously store 2000 fuel, 2000 wood, 500 stone, 500 iron, 200 tools, 200 coats, and 30000 food."],
        ["Settlement", "Reach a population of 300 citizens."],
        ["Smelter", "Produce 10,000 iron within a 100 year period."],
        ["Smiles all Around", "Maintain high happiness for 10 years in a town with at least 100 citizens."],
        ["Stonework", "Produce 10,000 stone within a 100 year period."],
        ["Stylish", "Cloth a population of over 200 with warm coats for 4 years."],
        ["Tenure", "Build a town that has a population of 500 after 200 years."],
        ["Tombstone", "Fill graveyards with at least 400 graves."],
        ["Town", "Reach a population of 900 citizens."],
        ["Trader", "Use trading posts to trade 50,000 units of goods in a single town."],
        ["Uneducated", "Reach a population of 300 citizens without building schools."],
        ["Village", "Reach a population of 600 citizens."],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
