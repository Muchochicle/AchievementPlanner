import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bus-simulator-18.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 515180 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("bus-simulator-18");

test("getPlannerData('bus-simulator-18') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for bus-simulator-18");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Bus Simulator 18 achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Bus Simulator 18 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Bus Simulator 18 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["1 Up", "Level up a bus stop."],
        ["All mine!", "Connect all bus stops to your route network."],
        ["Almost...", "Connect 75% of all bus stops to your route network."],
        ["Another Job Well Done", "Finish all Official Map Extension Missions."],
        ["Baby Steps", "Finish your first mission."],
        ["Business Expansion", "Unlock Kerststadt."],
        ["Collectible Five", "Find a collectible."],
        ["Collectible Four", "Find a collectible."],
        ["Collectible One", "Find a collectible."],
        ["Collectible Three", "Find a collectible."],
        ["Collectible Two", "Find a collectible."],
        ["Dirty Dozen", "Own 12 buses."],
        ["Feeling Old Yet?", "Reach level 25."],
        ["Frequent Flier", "Reach level 25 with the Airport stop."],
        ["Gotta Catch 'Em All", "Own each bus."],
        ["Half-full", "Connect 50% of all bus stops to your route network."],
        ["Happily Married", "Find the happily married couple."],
        ["High Five", "Drive a perfect route."],
        ["Interconnected", "Gain access to the Central Bus Station."],
        ["Ka-ching!", "Earn a lot of money with a single journey!"],
        ["Key to the City", "Finish all missions."],
        ["Kilo", "Personally transport a total number of 1000 passengers."],
        ["Lucky 7", "Unlock all areas."],
        ["Praise the Sun", "Unlock Sonnstein."],
        ["The Dream of Flight", "Unlock the Airport."],
        ["They grow up so fast", "Reach level 10."],
        ["Three's a crowd", "Hire 3 drivers."],
        ["Wherever I Please", "Unlock all bus stops."],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
