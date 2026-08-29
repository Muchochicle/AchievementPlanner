import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/snowrunner.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1465360 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 37 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("snowrunner");

test("getPlannerData('snowrunner') returns real planner data with 37 curated achievements", () => {

    assert.ok(game, "expected real planner data for snowrunner");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 37);

});

test("every SnowRunner achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every SnowRunner achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 37 SnowRunner achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["\"All Along the Watchtower\"", "Explore all watchtowers in the game"],
        ["\"Stars and Stripes\"", "Own every american vehicle in the game"],
        ["18 Wheels is Not Enough", "Own a Azov 42-20 Antarctic"],
        ["Ain't no rest for the...trucker?", "Complete every task and contest in the game"],
        ["All Starts From a Garage", "Explore all garages in the game"],
        ["Bear Hunt", "Find all upgrades in Taymyr"],
        ["Bering Strait", "Own a TUZ 420 \"Tatarin\" and have it stationed in any garage in Alaska"],
        ["Broken Horse", "Drive 1 km with all wheels broken"],
        ["Convoy", "Transport a winched vehicle with a broken engine from one map to another and put it into a garage"],
        ["Deer Hunt", "Find all upgrades in Michigan"],
        ["Dreams Come True", "Repair all the pipes in Alaska"],
        ["Eat, Sleep, Drill, Repeat", "Deliver all 3 Oil Rigs to their destination points in Alaska"],
        ["Fuel Economy", "Travel through every region on a single tank of fuel"],
        ["Gallo-24", "Buy enough upgrades to hit twice the price of the base vehicle you bought them for"],
        ["Get over here", "Pull yourself with a winch for at least 6 meters"],
        ["Goliath", "Use a telescopic crane to raise a special objective semi-trailer at least 5 meters above the ground"],
        ["Model Collector", "Own every vehicle in the game"],
        ["Moose Hunt", "Find all upgrades in Alaska"],
        ["Once a Farmer always a Farmer", "Smash 500 pumpkins"],
        ["Pedal to the Metal", "Travel from one gateway to another on one map without releasing the accelerator"],
        ["Play Your Way", "Fix 2000 damage points"],
        ["Problem Solved", "Pull a vehicle with a broken engine out of the water with a crane"],
        ["Simply Delivered", "Deliver every type of cargo in the game at least once"],
        ["The Black Shuck", "Drive through 1000 km"],
        ["The Blue Hall", "Drive 1km in the water"],
        ["The Duel", "Driving a red-coloured scout vehicle, collide with any truck and take less damage than that truck"],
        ["Through blood & sweat", "Manually load at least 4 standard cargo units in your truck one after another and pack them "],
        ["Tread Softly", "Recover your vehicle 10 times or more"],
        ["Uncle Scrooge", "Earn 100000 currency"],
        ["Untouchable", "Complete any 10 tasks or contests without taking any damage"],
        ["Victory Parade", "Own every russian vehicle in the game"],
        ["Western Wind", "Use Pacific P12 to deliver at least 10 cargoes in Taymyr"],
        ["What's a mile?", "Use ZiKZ 5368 to deliver at least 10 cargoes in Michigan or Alaska"],
        ["Where are the logs?", "Visit every logging area in the game at least once"],
        ["Workaholic", "Complete every contract in the game"],
        ["Workers Unite", "Find both Lenin statues in Taymyr"],
        ["Yeah, you can drive!", "All main tutorial hints have been activated at least once"],
    ];

    assert.strictEqual(officialAchievements.length, 37, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
