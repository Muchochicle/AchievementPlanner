import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-trucker.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2380050 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-trucker");

test("getPlannerData('star-trucker') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-trucker");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Star Trucker achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Star Trucker achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Star Trucker achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bear Necessities", "Complete Dusty Bear side jobs"],
        ["Boldly Went", "Complete one last side job for G-Bee"],
        ["Cargo Cowboy", "Complete every type of freight job"],
        ["Cone Connoisseur", "Dislodge all of the hidden golden traffic cones."],
        ["Cosmic Cartographer", "Explore 32 Sectors"],
        ["Cream of the Crop", "Do 5 jobs for Everycrop"],
        ["Expert Hauler", "Earn $50,000 from freight contracts"],
        ["Eyes on the Road", "Complete a freight job without switching to a 3rd person camera"],
        ["First Haul", "Complete your first freight job"],
        ["Fully Certified", "Unlock All Certifications"],
        ["Ghost Busted", "Complete Moon Baby side jobs"],
        ["Heavy Hauler", "Complete 5 jobs with heavy loads"],
        ["Hot Patch", "Unlock the Solar Provinces"],
        ["Human Popsicle", "Eject from the airlock without wearing your spacesuit."],
        ["Hyper Hauler", "Reach Rank 25"],
        ["Lock and Dock", "Dock with your first station"],
        ["Master Hauler", "Earn $250,000 from freight contracts"],
        ["Master Mover", "Reach Rank 50"],
        ["Max Power", "Fully Upgrade all truck components"],
        ["Mile-ificent", "Drive a total of 2000 miles"],
        ["Mile-ologist", "Drive a total of 500 miles"],
        ["Mile-stone", "Drive a total of 100 miles"],
        ["Money On My Mind", "Do 5  jobs for West Coast Galaxy"],
        ["Money Runner", "Complete 5 jobs with valuable loads"],
        ["Moon Merchant", "Make $25,000 from trading"],
        ["My Favourite", "Fully Upgrade a single truck component"],
        ["No Sleep Till Vexmont", "Do 5 jobs for Instagalactic"],
        ["Novice Hauler", "Earn $10,000 from freight contracts"],
        ["Outer Wilds", "Unlock the Enigma Territories"],
        ["Over and Over", "Do 5 jobs for Cloverleaf"],
        ["Playing Among the Stars", "Do 5 jobs for Franks"],
        ["Playing Corporation Games", "Do 5 jobs for Q-Starr"],
        ["Riding With Lady Luck", "Do 5 jobs for Double Five"],
        ["Rogue Trader", "Sell $50,000 worth of contraband."],
        ["Skills to Pay Bills", "Unlock 10 Certifications"],
        ["Space Duster", "Reach Rank 5"],
        ["Space Hustler", "Make $100,000 from trading"],
        ["Spark Central", "Unlock the Mineral Colonies "],
        ["Star Trekker", "Complete 5 long distance jobs"],
        ["Station Hopper", "Explore 8 sectors"],
        ["Transit Trader", "Make $5,000 from trading"],
        ["Twin Triumphs", "Complete Red Eddie and Sour Candy side jobs"],
        ["Violation Virtuoso", "Rack up $25,000 in traffic fines and deductions."],
        ["Void Walker", "Spend a cumulative 12 minutes and 9 seconds on EVA (spacewalking)."],
        ["Warp Jockey", "Explore 16 sectors"],
        ["Watching Lights Blink Below", "Do 5 jobs for Planeto"],
        ["Weld Done", "Repair your truck for the first time"],
        ["Wheeler Dealer", "Complete Barrow side jobs"],
        ["Wiggle Wagoneer", "Complete 5 multi-trailer jobs"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
