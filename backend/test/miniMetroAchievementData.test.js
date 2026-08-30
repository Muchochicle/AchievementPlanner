import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mini-metro.json - 73 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 287980 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mini-metro");

test("getPlannerData('mini-metro') returns real planner data with 73 curated achievements", () => {

    assert.ok(game, "expected real planner data for mini-metro");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 73);

});

test("every Mini Metro achievement has a unique id from 1 to 73 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 73 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 73);
    assert.strictEqual(new Set(apinames).size, 73);

});

test("every Mini Metro achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 73 Mini Metro achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["106 miles", "Deliver 1400 passengers in Chicago with no more than eight stations per line."],
        ["ATTO", "Deliver 500 passengers in Tashkent."],
        ["Baguette Tradition", "Deliver 1000 passengers in Paris."],
        ["Bean there done that", "Deliver 1800 passengers in Addis Ababa using only loops."],
        ["Bilhete Único", "Deliver 500 passengers in São Paulo."],
        ["Bip!", "Deliver 500 passengers in Santiago."],
        ["Centralen", "Reach week eight in Stockholm with at least one station connected to all lines."],
        ["CharlieCard", "Deliver 400 passengers in Boston."],
        ["Circle Line", "Deliver 1600 passengers in Singapore using no more than one loop."],
        ["City of Lines", "Deliver 1300 passengers in Paris using no more than three lines."],
        ["City of Rams", "Deliver 1500 passengers in Guangzhou with tunnels on no more than one line."],
        ["Clipper", "Deliver 500 passengers in San Francisco."],
        ["Commuter", "Post a score in the daily challenge every weekday for one week."],
        ["Day trip", "Post a score in a daily challenge."],
        ["Don't Have a Cow, Man", "Reach week nine in San Francisco."],
        ["Earl Grey", "Deliver 1000 passengers in London."],
        ["Elaborate Dance Number", "Reach week nine in Mumbai."],
        ["Elektra", "Deliver 400 passengers in Budapest."],
        ["EZ-Link", "Deliver 500 passengers in Singapore."],
        ["Fog City", "Deliver 1800 passengers in Chongqing using no more than one loop."],
        ["Four ways to Fenway", "Deliver 1600 passengers in Boston using no more than four lines."],
        ["From Buda to Pest and back again", "Deliver 1200 passengers in Budapest using no more than two tunnels."],
        ["Green and orange and yellow and blue", "Deliver 1600 passengers in Montréal using no more than four lines."],
        ["Hong Kong Eights", "Deliver 1100 passengers in Hong Kong with no more than eight stations per line."],
        ["Hook Turn", "Deliver 1000 passengers in Melbourne with at least one station connected to all lines."],
        ["Hop", "Deliver 600 passengers in Auckland."],
        ["Istanbulkart", "Deliver 500 passengers in Istanbul."],
        ["It's about the journey", "Deliver 1600 passengers in Tashkent with tunnels on no more than one line."],
        ["Lagos Connect", "Deliver 500 passengers in Lagos."],
        ["Lisbon Tourist", "Deliver 1400 passengers in Lisbon using no more than four lines."],
        ["Mainland to Island", "Deliver 1200 passengers in Lagos with tunnels on no more than one line."],
        ["Mapu chuco", "Deliver 1500 passengers in Santiago using no more than one tunnel."],
        ["Marmaray", "Deliver 1500 passengers in Istanbul using no more than one tunnel."],
        ["MetroCard", "Deliver 200 passengers in New York."],
        ["Monatskarten", "Deliver 200 passengers in Berlin."],
        ["Money Train", "Deliver 2100 passengers in Washington, D.C."],
        ["Mustard and Sauerkraut", "Deliver 1000 passengers in New York City."],
        ["myki", "Deliver 300 passengers in Melbourne."],
        ["Navegante", "Deliver 400 passengers in Lisbon."],
        ["Navigo", "Deliver 200 passengers in Paris."],
        ["Neva the Great", "Deliver 1500 passengers in Saint Petersburg with tunnels on no more than one line."],
        ["Octopus", "Deliver 200 passengers in Hong Kong."],
        ["OPUS", "Deliver 500 passengers in Montréal."],
        ["Oyster", "Deliver 200 passengers in London."],
        ["Pasmo", "Deliver 500 passengers in Tokyo."],
        ["São Paulo Grand Prix", "Deliver 1200 passengers in São Paulo using only loops."],
        ["Second Harbor Crossing", "Deliver 1500 passengers in Auckland using no more than two tunnels."],
        ["Seoul Train", "Deliver 1400 passengers in Seoul with tunnels on no more than one line."],
        ["Shanglow? Shanghai!", "Deliver 1200 passengers in Shanghai with at least one station connected to all lines."],
        ["SL Access", "Deliver 500 passengers in Stockholm."],
        ["SmarTrip", "Deliver 500 passengers in Washington, D.C."],
        ["Square Times", "Deliver 1600 passengers in New York City with square stations on no more than two lines."],
        ["T-Mobilitat", "Deliver 500 passengers in Barcelona."],
        ["T-money", "Deliver 500 passengers in Seoul."],
        ["Ten weeks in Osaka", "Reach week ten in Osaka."],
        ["Thames Tunnel", "Deliver 1000 passengers in London using no more than one tunnel."],
        ["The City of Six Carriages", "Deliver 1400 passengers in Cairo using no more than one carriage per line."],
        ["The Grey Lokomotive", "Deliver 1000 passengers in Berlin using no more than one locomotive per line."],
        ["This perfect dream", "Deliver 1200 passengers in Barcelona with tunnels on no more than one line."],
        ["Tokyo Tourist", "Deliver 1200 passengers in Tokyo with at least one station connected to all lines."],
        ["Ventra", "Deliver 500 passengers in Chicago."],
        ["Warsaw Tourist", "Deliver 1600 passengers in Warsaw using no more than one loop."],
        ["WKM", "Deliver 300 passengers in Warsaw."],
        ["Zijin Shan", "Deliver 1600 passengers in Nanjing using no more than one loop."],
        ["Подорожник", "Deliver 500 passengers in Saint Petersburg."],
        ["ركاب", "Deliver 500 passengers in Cairo."],
        ["የአዲስ አበባ ቀላል ባቡር", "Deliver 500 passengers in Addis Ababa."],
        ["स्मार्टकार्ड", "Deliver 500 passengers in Mumbai."],
        ["イコカ", "Deliver 500 passengers in Osaka."],
        ["交通一卡通", "Deliver 500 passengers in Shanghai."],
        ["宜居畅通卡", "Deliver 500 passengers in Chongqing."],
        ["羊城通", "Deliver 500 passengers in Guangzhou."],
        ["金陵通", "Deliver 500 passengers in Nanjing."],
    ];

    assert.strictEqual(officialAchievements.length, 73, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
