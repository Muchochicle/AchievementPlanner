import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/transport-fever-2.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1066780 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("transport-fever-2");

test("getPlannerData('transport-fever-2') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for transport-fever-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Transport Fever 2 achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Transport Fever 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 Transport Fever 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aircraft entrepreneur", "Earn 1 million with airplanes within a month in free game."],
        ["Antique", "Keep a train built before 1900 running until the year 2000 in free game."],
        ["Back to the future", "Travel back and forward in time using the time control in sandbox mode."],
        ["Big spender", "Have a monthly maintenance cost of 200 million in free game."],
        ["Bob Ross", "Use the paint tool to change the terrain in free game."],
        ["Cadet", "Complete the first mission of the campaign."],
        ["Campaign expert", "Complete the first and second era of the campaign."],
        ["Campaign shark", "Complete the entire campaign."],
        ["Campaign tycoon", "Earn all medals of the entire campaign."],
        ["Cannot get enough", "Build a train line with at least 10 trains in motion in free game."],
        ["Cargo hub", "Have at least 300 cargo items waiting at a train station in free game."],
        ["Charles Alton Ellis", "Have 50km of railway bridges in free game."],
        ["City", "Have a town with a population of at least 750 in free game."],
        ["Climate change", "Play a free game in all three climates."],
        ["Crowd in a train", "Have a train filled with at least 100 passengers in free game."],
        ["E.P.E.C.", "Deliver every product to every city that requires it in free game."],
        ["Exemplary student", "Earn all medals in one of the campaign missions."],
        ["First aircraft arrived", "Buy an aircraft and run a line in free game."],
        ["First bus arrived", "Buy a bus and run a line in free game."],
        ["First bus stop", "Build a bus stop in free game."],
        ["First cargo item on board", "Have a cargo item transported with one of your vehicles in free game."],
        ["First cargo item waiting", "Have a cargo item waiting at a terminal in free game."],
        ["First electric train arrived", "Buy an electric train and run a line in free game."],
        ["First industry upgraded", "Let a manufacturing industry upgrade in free game."],
        ["First line", "Create a line with at least two stops in free game."],
        ["First passenger on board", "Have a passenger on a vehicle in free game."],
        ["First passenger waiting", "Setup a line so that town residents use your vehicles in free game."],
        ["First ship arrived", "Buy a ship and run a line in free game."],
        ["First steam train arrived", "Buy a steam train and run a line in free game."],
        ["First train station", "Build a passenger train station in free game."],
        ["Glacier express", "Have a train that reaches higher than 450 meters in free game."],
        ["Heavily loaded", "Have a train filled with at least 250 cargo items in free game."],
        ["High speed", "Reach a speed of at least 120 km/h with a train in free game."],
        ["Industrialist", "Have every industry shipping items using your transport network in free game."],
        ["Louis Favre", "Have 100km of railway tunnels in free game."],
        ["Mass production", "Reach 400 production at a manufacturing industry in free game."],
        ["Metropolis", "Have a town with a population of at least 1500 in free game."],
        ["Museum line", "Have a line with every passenger road vehicle type available from 1850 to 2020 in free game."],
        ["No country for old trains", "Have all tracks electrified and high speed in free game. Have at least 100km of tracks."],
        ["No free seats", "Have a train filled with at least 200 passengers in free game."],
        ["Not in my backyard", "Reach an emission value of 80 in a town in free game."],
        ["Now what?", "Have two trains stuck facing each other in free game."],
        ["Old timer", "Complete the first era of the campaign."],
        ["Penny pincher", "Don't take any additional loan until the year 2050 in free game."],
        ["Sculpturer", "Use the terrain tool to change the terrain in free game."],
        ["Settled down", "Build the company headquarters in free game."],
        ["Speed of light", "Reach a speed of at least 300 km/h with a train in free game."],
        ["The future is now, old man", "Reach the present in free game."],
        ["The king of the sea", "Earn 1 million with ships within a month in free game."],
        ["The ugly smell of success", "Have at least 300 passengers waiting in a train station in free game."],
        ["Train Fever", "Reach the year 2050 using only trains in free game."],
        ["Trans-Siberian Railway", "Have 400km of tracks in free game."],
        ["Transport belt", "Have a train longer than the longest possible station in free game."],
        ["Transport corporation", "Reach the maximum headquarters level in free game."],
        ["Transport master", "Accumulate a fortune of 10 millions (without debt) in free game."],
        ["Transport millionaire", "Accumulate a fortune of 1 million (without debt) in free game."],
        ["Transport shark", "Accumulate a fortune of 100 millions (without debt) in free game."],
        ["Transport shark (Hard mode)", "Accumulate a fortune of 100 millions (without debt) in free game with hard mode."],
        ["Transport tycoon", "Accumulate a fortune of 1 billion (without debt) in free game."],
        ["Transport tycoon (Hard mode)", "Accumulate a fortune of 1 billion (without debt) in free game with hard mode."],
        ["Truck Fever", "Earn 50 millions not using any train in free game."],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
