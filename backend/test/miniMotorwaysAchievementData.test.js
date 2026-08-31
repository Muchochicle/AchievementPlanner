import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mini-motorways.json - 165 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1127500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mini-motorways");

test("getPlannerData('mini-motorways') returns real planner data with 165 curated achievements", () => {

    assert.ok(game, "expected real planner data for mini-motorways");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 165);

});

test("every Mini Motorways achievement has a unique id from 1 to 165 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 165 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 165);
    assert.strictEqual(new Set(apinames).size, 165);

});

test("every Mini Motorways achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 165 Mini Motorways achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Bridge to Everywhere", "Build 100 bridges over multiple games."],
        ["A Tile a Minute", "Use 100 road tiles over multiple games."],
        ["A Ton of Tunnels", "Build 25 tunnels over multiple games."],
        ["Are We There Yet?", "Complete 1 milestone in endless mode."],
        ["Back At It", "Post a score in a daily challenge 14 times."],
        ["Beijing Challenger", "Complete 600 trips in any challenge in Beijing."],
        ["Beijing Commuter", "Complete 1000 trips in Beijing."],
        ["Beijing Driver", "Complete 2000 trips in Beijing."],
        ["Beijing Expert", "Complete 500 trips in expert mode in Beijing."],
        ["Beijing Tourist", "Complete 200 trips in Beijing."],
        ["Boogie Lights", "Place 25 traffic lights over multiple games."],
        ["Bridge the Gap", "Build 25 bridges over multiple games."],
        ["Busan Challenger", "Complete 600 trips in any challenge in Busan."],
        ["Busan Commuter", "Complete 1000 trips in Busan."],
        ["Busan Driver", "Complete 2000 trips in Busan."],
        ["Busan Expert", "Complete 500 trips in expert mode in Busan."],
        ["Busan Tourist", "Complete 400 trips in Busan."],
        ["Cairns Challenger.", "Complete 600 trips in any challenge in Cairns."],
        ["Cairns Commuter", "Complete 1000 trips in Cairns."],
        ["Cairns Driver", "Complete 2000 trips in Cairns."],
        ["Cairns Expert", "Complete 500 trips in expert mode in Cairns."],
        ["Cairns Tourist", "Complete 400 trips in Cairns."],
        ["Cape Town Challenger", "Complete 600 trips in any challenge in Cape Town."],
        ["Cape Town Commuter", "Complete 1000 trips in Cape Town."],
        ["Cape Town Driver", "Complete 2000 trips in Cape Town."],
        ["Cape Town Expert", "Complete 500 trips in expert mode in Cape Town."],
        ["Cape Town Tourist", "Complete 400 trips in Cape Town."],
        ["Chiang Mai Challenger", "Complete 600 trips in any challenge in Chiang Mai."],
        ["Chiang Mai Commuter", "Complete 1000 trips in Chiang Mai."],
        ["Chiang Mai Driver", "Complete 2000 trips in Chiang Mai."],
        ["Chiang Mai Expert", "Complete 500 trips in expert mode in Chiang Mai."],
        ["Chiang Mai Tourist", "Complete 400 trips in Chiang Mai."],
        ["Copenhagen Challenger", "Complete 600 trips in any challenge in Copenhagen."],
        ["Copenhagen Commuter", "Complete 1000 trips in Copenhagen."],
        ["Copenhagen Driver", "Complete 2000 trips in Copenhagen."],
        ["Copenhagen Expert", "Complete 500 trips in expert mode in Copenhagen."],
        ["Copenhagen Tourist", "Complete 400 trips in Copenhagen."],
        ["Daily Commute", "Post a score in a daily challenge."],
        ["Dar es Salaam Challenger", "Complete 600 trips in any challenge in Dar es Salaam."],
        ["Dar es Salaam Commuter", "Complete 1000 trips in Dar es Salaam."],
        ["Dar es Salaam Driver", "Complete 2000 trips in Dar es Salaam."],
        ["Dar es Salaam Expert", "Complete 500 trips in expert mode in Dar es Salaam."],
        ["Dar Es Salaam Tourist", "Complete 300 trips in Dar es Salaam."],
        ["Driver's License", "Complete the tutorial."],
        ["Dubai Challenger", "Complete 600 trips in any challenge in Dubai."],
        ["Dubai Commuter", "Complete 1000 trips in Dubai."],
        ["Dubai Driver", "Complete 2000 trips in Dubai."],
        ["Dubai Expert", "Complete 500 trips in expert mode in Dubai."],
        ["Dubai Tourist", "Complete 400 trips in Dubai."],
        ["Fifty Rich", "Use 50 motorways over multiple games."],
        ["Go The Extra Mile", "Build a motorway over 25 tiles."],
        ["Going in Circles", "Use 50 roundabouts over multiple games."],
        ["Highway to Hell", "Use 666 road tiles over multiple games."],
        ["Hitting All the Lights", "Place 100 traffic lights over multiple games."],
        ["Hong Kong Challenger", "Complete 600 trips in any challenge in Hong Kong."],
        ["Hong Kong Commuter", "Complete 1000 trips in Hong Kong."],
        ["Hong Kong Driver", "Complete 2000 trips in Hong Kong."],
        ["Hong Kong Expert", "Complete 500 trips in expert mode in Hong Kong."],
        ["Hong Kong Tourist", "Complete 400 trips in Hong Kong."],
        ["I See the Lights", "Place 50 traffic lights over multiple games."],
        ["Istanbul Challenger", "Complete 600 trips in any challenge in Istanbul."],
        ["Istanbul Commuter", "Complete 1000 trips in Istanbul."],
        ["Istanbul Driver", "Complete 2000 trips in Istanbul."],
        ["Istanbul Expert", "Complete 500 trips in expert mode in Istanbul."],
        ["Istanbul Tourist", "Complete 400 trips in Istanbul."],
        ["Let's Build Bridges", "Build 50 bridges over multiple games."],
        ["Lisbon Challenger", "Complete 600 trips in any challenge in Lisbon."],
        ["Lisbon Commuter", "Complete 1000 trips in Lisbon."],
        ["Lisbon Driver", "Complete 2000 trips in Lisbon."],
        ["Lisbon Expert", "Complete 500 trips in expert mode in Lisbon."],
        ["Lisbon Tourist", "Complete 400 trips in Lisbon."],
        ["London Challenger", "Complete 600 trips in any challenge in London."],
        ["London Commuter", "Complete 1000 trips in London."],
        ["London Driver", "Complete 2000 trips in London."],
        ["London Expert", "Complete 500 trips in expert mode in London."],
        ["London Tourist", "Complete 300 trips in London."],
        ["Los Angeles Challenger", "Complete 600 trips in any challenge in Los Angeles."],
        ["Los Angeles Commuter", "Complete 1000 trips in Los Angeles."],
        ["Los Angeles Driver", "Complete 2000 trips in Los Angeles."],
        ["Los Angeles Expert", "Complete 500 trips in expert mode in Los Angeles."],
        ["Los Angeles Tourist", "Complete 200 trips in Los Angeles."],
        ["Manila Challenger", "Complete 600 trips in any challenge in Manila."],
        ["Manila Commuter", "Complete 1000 trips in Manila."],
        ["Manila Driver", "Complete 2000 trips in Manila."],
        ["Manila Expert", "Complete 500 trips in expert mode in Manila."],
        ["Manila Tourist", "Complete 400 trips in Manila."],
        ["Many, Many Motorways", "Use 25 motorways over multiple games."],
        ["Mass Transit", "Complete 50,000 trips across multiple games."],
        ["Mexico City Challenger", "Complete 600 trips in any challenge in Mexico City."],
        ["Mexico City Commuter", "Complete 1000 trips in Mexico City."],
        ["Mexico City Driver", "Complete 2000 trips in Mexico City."],
        ["Mexico City Expert", "Complete 500 trips in expert mode in Mexico City."],
        ["Mexico City Tourist", "Complete 400 trips in Mexico City."],
        ["Mom's Spaghetti", "Use all 9 motorways in one game."],
        ["Moscow Challenger", "Complete 600 trips in any challenge in Moscow."],
        ["Moscow Commuter", "Complete 1000 trips in Moscow."],
        ["Moscow Driver", "Complete 2000 trips in Moscow."],
        ["Moscow Expert", "Complete 500 trips in expert mode in Moscow."],
        ["Moscow Tourist", "Complete 300 trips in Moscow."],
        ["Mumbai Challenger", "Complete 600 trips in any challenge in Mumbai."],
        ["Mumbai Commuter", "Complete 1000 trips in Mumbai."],
        ["Mumbai Driver", "Complete 2000 trips in Mumbai."],
        ["Mumbai Expert", "Complete 500 trips in expert mode in Mumbai."],
        ["Mumbai Tourist", "Complete 400 trips in Mumbai."],
        ["Munich Challenger", "Complete 600 trips in any challenge in Munich."],
        ["Munich Commuter", "Complete 1000 trips in Munich."],
        ["Munich Driver", "Complete 2000 trips in Munich."],
        ["Munich Expert", "Complete 500 trips in expert mode in Munich."],
        ["Munich Tourist", "Complete 300 trips in Munich."],
        ["New York City Challenger", "Complete 600 trips in any challenge in New York City."],
        ["New York City Commuter", "Complete 1000 trips in New York City."],
        ["New York City Driver", "Complete 2000 trips in New York City."],
        ["New York City Expert", "Complete 500 trips in expert mode in New York City."],
        ["New York City Tourist", "Complete 400 trips in New York City."],
        ["One of Everything", "Use at least 1 of each available upgrade on a map."],
        ["Rapid Transit", "Use 100 motorways over multiple games."],
        ["Reykjavík Challenger", "Complete 600 trips in any challenge in Reykjavík."],
        ["Reykjavík Commuter", "Complete 1000 trips in Reykjavík."],
        ["Reykjavík Driver", "Complete 2000 trips in Reykjavík."],
        ["Reykjavík Expert", "Complete 500 trips in expert mode in Reykjavík."],
        ["Reykjavík Tourist", "Complete 400 trips in Reykjavík."],
        ["Rio de Janeiro Challenger", "Complete 600 trips in any challenge in Rio de Janeiro."],
        ["Rio de Janeiro Commuter", "Complete 1000 trips in Rio de Janeiro."],
        ["Rio de Janeiro Driver", "Complete 2000 trips in Rio de Janeiro."],
        ["Rio de Janeiro Expert", "Complete 500 trips in expert mode in Rio de Janeiro."],
        ["Rio de Janeiro Tourist", "Complete 400 trips in Rio de Janeiro."],
        ["Road-incarnation", "Delete 250 road tiles, counted across multiple games."],
        ["Roundabout City", "Use 100 roundabouts over multiple games."],
        ["Seven is a Place on Earth", "Post a score in a daily challenge 7 times."],
        ["So Four, So Good", "Post a score in a weekly challenge 4 times."],
        ["The Dark Side of the Road", "Build a tunnel that is 10 tiles or longer."],
        ["The Long Way Home", "Use 1200 road tiles over multiple games."],
        ["The Roundabout Way", "Use 25 roundabouts over multiple games."],
        ["Tokyo Challenger", "Complete 600 trips in any challenge in Tokyo."],
        ["Tokyo Commuter", "Complete 1000 trips in Tokyo."],
        ["Tokyo Driver", "Complete 2000 trips in Tokyo."],
        ["Tokyo Expert", "Complete 500 trips in expert mode in Tokyo."],
        ["Tokyo Tourist", "Complete 200 trips in Tokyo."],
        ["Troll Town", "Build a bridge that is 10 tiles or longer."],
        ["Try, Try Again", "Delete 500 road tiles, counted across multiple games."],
        ["Tunnel Through", "Build 100 tunnels over multiple games."],
        ["Tunnel Vision", "Build 50 tunnels over multiple games."],
        ["Vancouver Challenger.", "Complete 600 trips in any challenge in Vancouver."],
        ["Vancouver Commuter", "Complete 1000 trips in Vancouver."],
        ["Vancouver Driver", "Complete 2000 trips in Vancouver."],
        ["Vancouver Expert", "Complete 500 trips in expert mode in Vancouver."],
        ["Vancouver Tourist", "Complete 400 trips in Vancouver."],
        ["Vanish Into Pin Air", "Clear a big pin from a destination."],
        ["Warsaw Challenger", "Complete 600 trips in any challenge in Warsaw."],
        ["Warsaw Commuter", "Complete 1000 trips in Warsaw."],
        ["Warsaw Driver", "Complete 2000 trips in Warsaw."],
        ["Warsaw Expert", "Complete 500 trips in expert mode in Warsaw."],
        ["Warsaw Tourist", "Complete 400 trips in Warsaw."],
        ["Weekly Commute", "Post a score in a weekly challenge."],
        ["Wellington Challenger", "Complete 600 trips in any challenge in Wellington."],
        ["Wellington Commuter", "Complete 1000 trips in Wellington."],
        ["Wellington Driver", "Complete 2000 trips in Wellington."],
        ["Wellington Expert", "Complete 500 trips in expert mode in Wellington."],
        ["Wellington Tourist", "Complete 400 trips in Wellington."],
        ["Wood Riddance", "Destroy a tree by building a road over it."],
        ["Zurich Challenger", "Complete 600 trips in any challenge in Zurich."],
        ["Zurich Commuter", "Complete 1000 trips in Zurich."],
        ["Zurich Driver", "Complete 2000 trips in Zurich."],
        ["Zurich Expert", "Complete 500 trips in expert mode in Zurich."],
        ["Zurich Tourist", "Complete 300 trips in Zurich."],
    ];

    assert.strictEqual(officialAchievements.length, 165, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
