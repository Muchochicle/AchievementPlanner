import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/circuit-superstars.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1097130 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("circuit-superstars");

test("getPlannerData('circuit-superstars') returns real planner data with 33 curated achievements", () => {

    assert.ok(game, "expected real planner data for circuit-superstars");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 33);

});

test("every Circuit Superstars achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Circuit Superstars achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 33 Circuit Superstars achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2015 KM", "Drive a total of 2015 KM."],
        ["A True Pro", "Win 50 races in any mode."],
        ["Adorable Champion", "Win the Piccino Cup on any difficulty."],
        ["Boxer Legend", "Win the GT Supercup Cup on any difficulty."],
        ["Captain Oversteer", "Win the Muscle Car Legends Cup on any difficulty."],
        ["Career Driver", "Win 10 races in Online Multiplayer."],
        ["Circuit Superstar", "Win 100 races in any mode."],
        ["Endurance Legend", "Win the Prototype World Series Cup on any difficulty."],
        ["Fast like Lightning ", "Get Pole Position for 50 races in any game mode."],
        ["Featherweight Champion", "Win the Superlights Trophy Cup on any difficulty."],
        ["Feel The Thrill", "Score a Pole Position in any game mode. "],
        ["First Time Leader", "Get Pole Position for 1 Online race."],
        ["From Mexico to Vancouver", "Drive a total of 5000 KM."],
        ["Go the Distance", "Drive a total of 10,000 KM."],
        ["Heavyweight Champion", "Win the Euro Truck Meeting Cup on any difficulty."],
        ["Iron Racer", "Win the Super Truck Challenge Cup on any difficulty."],
        ["Leader of the Pack", "Get Pole Position for 25 Online races."],
        ["Look at this Trophy!", "Finish on 1st, 2nd or 3rd in any game mode."],
        ["Make Donuts for the Fans", "Win a race in any game mode."],
        ["Mercurial Racer", "Win the Rallycross World Series Cup on any difficulty."],
        ["Mysterious Challenger", "Win a race in Online Multiplayer."],
        ["Paving the Way", "Get Pole Position for 10 races in any game mode."],
        ["Petrolhead", "Drive a total of 50,000 KM."],
        ["Power and Glory", "Win the 80s GP Legends Cup on any difficulty."],
        ["Promising Amateur", "Win 10 races in any mode."],
        ["Seasoned Leader", "Get Pole Position for 10 Online races."],
        ["Sideways Legend", "Win the 60s GP Revival Cup on any difficulty."],
        ["Speed Superstar", "Get Pole Position for 100 races in any game mode."],
        ["The Journey Begins", "Complete your first race in any game mode."],
        ["The Learner's Path", "Finish a Qualifier in any game mode. "],
        ["Timeless Champion", "Win the 50s GT Memorial Trophy on any difficulty."],
        ["World Champion", "Win the Formula GP World Series Cup on any difficulty."],
        ["Worldwide Superstar", "Win 25 races in Online Multiplayer."],
    ];

    assert.strictEqual(officialAchievements.length, 33, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
