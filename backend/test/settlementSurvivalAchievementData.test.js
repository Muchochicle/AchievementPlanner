import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/settlement-survival.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1509510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("settlement-survival");

test("getPlannerData('settlement-survival') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for settlement-survival");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Settlement Survival achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Settlement Survival achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Settlement Survival achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Welcoming Settlement", "Accept immigrants for 5 times (Unreachable on Sandbox Mode)."],
        ["Administrator", "Reappoint a Administrator once (Unreachable on Sandbox Mode)."],
        ["Advanced Technology", "Unlock a Lv 3 technology on standard mode."],
        ["Against the Cold", "No settler is frozen to death for more than 10 years (Unreachable on Sandbox Mode)."],
        ["Agriculture Tycoon", "Harvest three kinds of crops in a year (Unreachable on Sandbox Mode)."],
        ["Animal Imports", "Purchase more than two kinds of animals (Unreachable on Sandbox Mode)."],
        ["Architect", "Build more than 40 kinds of buildings (Unreachable on Sandbox Mode)."],
        ["Builder", "No buildings are destroyed in 10 years (Unreachable on Sandbox Mode)."],
        ["Building Expert", "Unlock all blueprints (Unreachable on Sandbox Mode)."],
        ["Business Mind", "Any faction reached Reputation Lv.5 in Standard Mode."],
        ["Carefree Life", "Keep the overall stress less than 20 for more than 5 years with over 500 population (Unreachable on Sandbox Mode)."],
        ["City Center", "Build a Town Hall (Unreachable on Sandbox Mode)."],
        ["Civilized Land", "More than 200 students graduate in one game (Unreachable on Sandbox Mode)."],
        ["Clear Road", "Build a road longer than 50 grids in one game (Unreachable on Sandbox Mode)."],
        ["Cozy Houses", "All citizens live in Luxury House or Garden Villa with over 100 population (Unreachable on Sandbox Mode)."],
        ["Developed Economy", "Get 1,000,000 coins (Unreachable on Sandbox Mode)."],
        ["Efficient Heating", "Do not use Domestic Fuel for more than 20 years (Unreachable on Sandbox Mode)."],
        ["Efficient Tools", "Have 200 adults with steel tools (Unreachable on Sandbox Mode)."],
        ["Full Load", "Have at least 10 processing buildings and no vacant positions in all processing buildings (Unreachable on Sandbox Mode)."],
        ["Goof-off Hero", "Trigger all the debuffs of Goof-off Hero (Unreachable on Sandbox Mode)."],
        ["Great Castle", "All citizens live in the Great Castle (Unreachable on Sandbox Mode)."],
        ["Handcart", "Have 200 adults with handcarts (Unreachable on Sandbox Mode)."],
        ["Happiness", "Keep citizens' happiness over 100% for more than 5 years (Unreachable on Sandbox Mode)."],
        ["Happiness Maintainer", "Keep your City Happiness over 60% for more than 10 years (Unreachable on Sandbox Mode)."],
        ["Hard-Drinking", "Consume more than 1000 alcohol (Unreachable on Sandbox Mode)."],
        ["House Remodel", "Have 50 remodeled houses that can not be destroyed (Unreachable on Sandbox Mode)."],
        ["Infrastructure", "Build a Tailor, Smithy and Chopping House in the first year (Unreachable on Sandbox Mode)."],
        ["Integrated Development", "Technology level reaches 100 before Year 30 (Unreachable on Sandbox Mode)."],
        ["Keep Ordering", "Order goods for more than 10 times in one game (Unreachable on Sandbox Mode)."],
        ["Knowledge is Infinite", "Keep the educated rate at 100% for more than 10 years with over 300 population (Unreachable on Sandbox Mode)."],
        ["Luxury Clothes", "Produce 100 Custom Gown in a year (Unreachable on Sandbox Mode)."],
        ["Mineral-Rich", "Build a Deep Mine and a Deep Quarry (Unreachable on Sandbox Mode)."],
        ["Practice Makes Perfect", "Any proficiency level reaches 3 (Unreachable on Sandbox Mode)."],
        ["Prosperity", "Keep the population over 100 for more than 10 year (Unreachable on Sandbox Mode)."],
        ["Road Planning", "Have more than 2000 grids of roads (Unreachable on Sandbox Mode)."],
        ["Robust Settlers", "Keep citizens' health over 100% for more than 5 years (Unreachable on Sandbox Mode)."],
        ["Saving Lives", "Cure more than 500 patients (Unreachable on Sandbox Mode)."],
        ["Seeds Collector", "Obtain all kinds of seeds in one game (Unreachable on Sandbox Mode)."],
        ["Skilled Workers", "Use up more than 500 tools in one game (Unreachable on Sandbox Mode)."],
        ["Snowstorm", "Go through a snowstorm without anyone frozen to death (Unreachable on Sandbox Mode)."],
        ["Tasty Food", "Produce more than 10,000 simple food in a year (Unreachable on Sandbox Mode)."],
        ["Technology Town", "Unlock all technologies on standard mode."],
        ["The Sacrifice", "Build the Great Temple (Unreachable on Sandbox Mode)."],
        ["Thorough Cleaning", "Clean up all the stones and ore on the map (Unreachable on Sandbox Mode)."],
        ["Treasure Resources", "Produce 10,000 jade and gold sand (Unreachable on Sandbox Mode)."],
        ["Treatment of plague", "No settlers die from the plague during an outbreak (Unreachable on Sandbox Mode)."],
        ["Urban Construction", "Build all kinds of roads, bridges and tunnel in one game (Unreachable on Sandbox Mode)."],
        ["Waterpower", "Build all kinds of water-powered buildings (Unreachable on Sandbox Mode)."],
        ["Weather-Beaten", "Went through all the disasters (fire, snowstorm, tornado, drought, animal plague, great harvest, sandstorm, flood and earthquake) once (Unreachable on Sandbox Mode)."],
        ["Well-Read", "Use 1000 books (Unreachable on Sandbox Mode)."],
        ["World-Renowned", "Miao, Lorenzo, Rania and Carlo all reached Reputation Lv.5 in Standard Mode."],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
