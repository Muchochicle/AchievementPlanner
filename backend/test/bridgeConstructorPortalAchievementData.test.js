import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bridge-constructor-portal.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 684410 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("bridge-constructor-portal");

test("getPlannerData('bridge-constructor-portal') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for bridge-constructor-portal");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every Bridge Constructor Portal achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every Bridge Constructor Portal achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 Bridge Constructor Portal achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["0% Non-Delivery", "60 Convoys delivered"],
        ["66% Delivery", "40 Convoys delivered"],
        ["66% Loss", "20 Convoys delivered"],
        ["Advanced Tunneling", "Finish every test chamber in Chapter 2 of \"Portal Proficiency\"."],
        ["Aerial Mobility Support System", "Bounced 25 times on the repulsion gel with the same vehicle"],
        ["Centrifugal Convoy Adjustment System", "Passed through the same portal 15 times"],
        ["Condolence Letter Delivery Boom", "Destroy 50 test vehicles in the Portal Proficiency DLC."],
        ["Convoyability 10", "10 convoys delivered in the Portal Proficiency initiative"],
        ["Convoyability 20", "20 convoys delivered in the Portal Proficiency initiative"],
        ["Convoyability 30", "30 convoys delivered in the Portal Proficiency initiative"],
        ["Deliverance from Non-delivery", "Destroy your first test vehicle in the Portal Proficiency DLC ('First job for the Condolence Letter Delivery Fleet')."],
        ["Entry-Exit Relay Repeater System", "30 times back and forth through the same portal"],
        ["Extended Testing Opportunity", "Finish every test chamber in Chapter 1"],
        ["Food and Artificial Sunlight", "Finish every test chamber in Chapter 2"],
        ["For More Science!", "5,000 Portal Transitions"],
        ["For Science!", "1,000 Portal Transitions"],
        ["Full Chief Custodian candidate", "Finish every test chamber in Chapter 5"],
        ["No Hard Feelings", "First turret decommissioned "],
        ["Official Pre-Admittance", "Finish every test chamber in Chapter 4"],
        ["Portal Deficiency Certificate", "In the Portal Proficiency DLC, try to start a test run 10 times with a portal placed on an invalid surface."],
        ["Post-Insignificance", "Finish every test chamber in Chapter 3"],
        ["Principals of Portalability", "Finish every test chamber in Chapter 1 of \"Portal Proficiency\"."],
        ["Profound Portal Proficiency", "Finish every test chamber in Chapter 3 of \"Portal Proficiency\"."],
        ["Spectacularly Lonely", "Finish every test chamber in Chapter 6"],
        ["Tunneling at Full Capacity", "Maximum amount of portals successfully used in a test run."],
        ["You monster.", "100 Test Vehicles destroyed"],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
