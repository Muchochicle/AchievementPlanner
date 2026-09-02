import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/new-cycle.json - 55 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2198510 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("new-cycle");

test("getPlannerData('new-cycle') returns real planner data with 55 curated achievements", () => {

    assert.ok(game, "expected real planner data for new-cycle");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 55);

});

test("every New Cycle achievement has a unique id from 1 to 55 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 55 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 55);
    assert.strictEqual(new Set(apinames).size, 55);

});

test("every New Cycle achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 55 New Cycle achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Center of Rebirth", "Have 100 completed structures in settlement"],
        ["A Palmful", "5 new people join the community at once"],
        ["Acceptants", "Welcome outsiders into your community"],
        ["All roads lead to us", "Use every type of road"],
        ["Awakening of Power", "Generate 1,000 electricity"],
        ["Beacon of the Broken World", "Reach a population of 350 inhabitants"],
        ["Belter", "Complete Conveyor System development"],
        ["Big Rig Dreams", "Produce 20 trucks"],
        ["Birth of Skyscrapers", "Build 20 units of Low- or Mid-Rise Block housing"],
        ["Bringer of light", "Generate 20,000 electricity"],
        ["Cauldron of Attraction", "20 new people join the community at once"],
        ["Cement Roots", "Survive 20 Years"],
        ["Chubby Chef", "Permanently change the Ration (food) formula."],
        ["City of Second Chances", "Reach a population of 200 inhabitants"],
        ["Coating Artisan", "Use the structure coating feature"],
        ["Core Power", "Generate 40,000 electricity"],
        ["Crossing Into the Last Hope", "Place any pedestrian crossing"],
        ["Dynamo", "Generate 5,000 electricity"],
        ["Extra Limbs", "Complete Basic Machinery development"],
        ["Fashions of the Final Frontier", "Produce 1000 Fine Clothing"],
        ["Fence Knitter", "Build every type of fence"],
        ["First Cycle", "Survive 1 Year"],
        ["First Ignition", "Produce 10 trucks"],
        ["Five Years Forward", "Survive 5 Years"],
        ["High ratio", "15 new people join the community at once"],
        ["Hope's Hamlet", "Reach a population of 100 inhabitants"],
        ["Iron Horse", "Produce your first locomotive"],
        ["Manufacturing Workforce", "Train 50 Craftsmen using auto-training"],
        ["Melting the Waste Mountain", "Process 3000  Organic Waste from residential buildings"],
        ["Metropolis of Mankind's Might", "Reach a population of 600 inhabitants"],
        ["Muted Mortality", "Go 5 years without anyone dying"],
        ["Non-modern Expansionism", "Settled in a regional for the first time"],
        ["Old World Tradition", "Trade in barter for the first time"],
        ["One Squad", "10 new people join the community at once"],
        ["Onward to Delphi", "Respond positively to the request for paper distribution when the event comes up."],
        ["Persistence Symbol", "Survive 15 Years"],
        ["Post Academia", "First time Specialists appear in your community"],
        ["Pressure Point", "Produce 5000 water by purifying water"],
        ["Quarter-Century Mortar", "Survive 25 Years"],
        ["Reflexive", "Activate 1 action"],
        ["Regular interventionist", "Activate 10 actions"],
        ["Rising House", "Reach a population of 70 inhabitants"],
        ["Rural Nest", "Have 25 completed structures in settlement"],
        ["Say No to Death", "Go 3 years without anyone dying"],
        ["Shoreline Sanctuary", "Build 5 Coastal structures"],
        ["Superior Community Servant", "Build one of each Tier-III service structure"],
        ["Surveyor of the Future", "Survey in 3 advanced mining towers"],
        ["Ten Years of Fortitude", "Survive 10 Years"],
        ["The City of Class", "Place 20 Aesthetic assets in your city"],
        ["The Last Supply Line", "Build 3 District Freight Depots"],
        ["The Return of Mastery", "First time Craftsman appear in your community"],
        ["Town-like Density", "Have 50 completed structures in settlement"],
        ["Warehouse Wonderland", "Build 5 District Freight Depots"],
        ["Where All Roads Lead", "Have 200 completed structures in settlement"],
        ["Wrapper", "Activate the improved (better) clothing production formula."],
    ];

    assert.strictEqual(officialAchievements.length, 55, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
