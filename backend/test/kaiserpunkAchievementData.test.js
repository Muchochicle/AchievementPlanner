import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/kaiserpunk.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2012190 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("kaiserpunk");

test("getPlannerData('kaiserpunk') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for kaiserpunk");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every KAISERPUNK achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every KAISERPUNK achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 KAISERPUNK achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend!", "Secure an alliance with a faction"],
        ["Again?", "Starting in the British Isles region, conquer Deccan, Australia and South Africa"],
        ["Al Norte", "Starting in South America, conquer both North and South America"],
        ["Alignment", "Choose your first social pillar"],
        ["Animal Farm", "Build 10 Ranches"],
        ["Annihilation", "Destroy an enemy army"],
        ["Attention!", "Fill all 8 unit slots in a single army"],
        ["Blitzkrieg", "From the moment you declare war on enemy faction, conquer its home region in 1 in-game month"],
        ["Braving The Winter", "Starting in Central Europe, conquer the whole of Asia"],
        ["Business Conglomerate", "Have a market, a tradeport and an airport at the same time"],
        ["City", "Reach a population of 10000 residents in your city"],
        ["Convincing", "Secure an alliance with a faction that has an opposite political stance"],
        ["Dereliction Of Duty", "Have your people rebel against your rule"],
        ["Downfall", "Lose a game"],
        ["Eating Boots And Belts", "Army supply reaches \"poor\" status"],
        ["Exploitation", "Completely extract a natural resource"],
        ["Farm Boy", "Produce 1,000,000 Wheat"],
        ["Fire It Up!", "Have 50 buildings destroyed by fire"],
        ["Five-Star Governor", "Complete all achievements"],
        ["Flagged", "Change your flag design during a session"],
        ["Gaining Sea Legs", "Deploy your first fleet"],
        ["Graduation", "Finish the tutorial"],
        ["Growing Wings", "Deploy your first air squadron"],
        ["How Tables Have Turned", "Starting in Africa, conquer all of Europe"],
        ["Impetuous", "Conquer the West Balkans region without using any Tank units (lean on Artillery and Bombers instead)."],
        ["Independence!", "Region stability reaches 0 and rebels against you"],
        ["Kaiserpunk FM", "Build a Radio station"],
        ["Land Bridge", "In tutorial chapter 3, conquer Asia Minor without ever loading troops onto a fleet - advance overland around the Black Sea (or through the Balkans by warring your ally)."],
        ["Life Of Leisure", "Produce 1,000,000 of any luxuries"],
        ["Lord Of War", "Successfully conclude a military deal with another faction"],
        ["Lumberjack", "Produce 1,000,000 Wood"],
        ["Master Of The World", "Conquer all regions"],
        ["Mastering The Basics", "Finish the first tutorial episode"],
        ["Megalopolis", "Reach a population of 20000 residents in your city"],
        ["Never-ending War", "Be at war continuously for longer than 1 in-game year"],
        ["Over Troubled Waters", "Build 25 bridges"],
        ["Play With Matches", "Have a fire event destroy a single building"],
        ["Production Line", "Establish a direct resource transport link between two buildings"],
        ["Real Estate Agent", "Build 500 housing units of any kind"],
        ["Rockefeller", "Reach 100,000,000 in Cash"],
        ["Ruins Of A Nation", "Destroy an empire"],
        ["Sea Wolf", "Win 5 naval battles"],
        ["The Closing Play", "Finish the third tutorial episode"],
        ["The Navigator", "Finish the second tutorial episode"],
        ["To The Skies", "Build your first skyscraper"],
        ["Town", "Reach a population of 5000 residents in your city"],
        ["Utopia", "Have Needs, Safety, Education and Morale for all citizen classes in your city at 100"],
        ["Valued Customer", "Trade 100 times in a single playthrough"],
        ["Victor!", "Win a game"],
        ["Village", "Reach a population of 1000 residents in your city"],
        ["White House", "Upgrade your city center to the maximum level"],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
