import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/order-of-battle-world-war-ii.json - 38 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 312450 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("order-of-battle-world-war-ii");

test("getPlannerData('order-of-battle-world-war-ii') returns real planner data with 38 curated achievements", () => {

    assert.ok(game, "expected real planner data for order-of-battle-world-war-ii");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 38);

});

test("every Order of Battle: World War II achievement has a unique id from 1 to 38 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 38 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 38);
    assert.strictEqual(new Set(apinames).size, 38);

});

test("every Order of Battle: World War II achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 38 Order of Battle: World War II achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" Tank Specialist", " Accumulate 8 tank class units during a campaign game, each with at least 2 kills. Difficulty level III or higher."],
        ["Air Ace Bronze", "Destroy 5 aircraft with a single unit in a campaign game."],
        ["Air Ace Gold", "Destroy 15 aircraft with a single unit in a campaign game."],
        ["Air Ace Silver", "Destroy 10 aircraft with a single unit in a campaign game."],
        ["Architect of War", "Using the scenario editor, launch a custom scenario with as least 2 units for each player."],
        ["Elite Anti-Air", "Gain 5 experience stars on an Anti-Air class unit during a campaign game"],
        ["Elite Anti-Tank", "Gain 5 experience stars on an Anit-Tank class unit during a campaign game"],
        ["Elite Artillery", "Gain 5 experience stars on an Artillery class unit during a campaign game"],
        ["Elite Battleship", "Gain 5 experience stars on a Battleship class unit during a campaign game"],
        ["Elite Cruiser", "Gain 5 experience stars on a Cruiser class unit during a campaign game"],
        ["Elite Destroyer", "Gain 5 experience stars on a Destroyer class unit during a campaign game"],
        ["Elite Fighter", "Gain 5 experience stars on a Fighter class unit during a campaign game"],
        ["Elite infantry", "Gain 5 experience stars on an Infantry class unit during a campaign game"],
        ["Elite Recon", "Gain 5 experience stars on a Reconaissance class unit during a campaign game"],
        ["Elite Strategic Bomber", "Gain 5 experience stars on a Strategic Bomber class unit during a campaign game"],
        ["Elite Submarine", "Gain 5 experience stars on a Submarine class unit during a campaign game"],
        ["Elite Tactical Bomber", "Gain 5 experience stars on a Tactical Bomber class unit during a campaign game"],
        ["Elite Tank", "Gain 5 experience stars on a Tank class unit during a campaign game"],
        ["Ghost Ship", "Reform a single naval unit 5 times during a campaign game."],
        ["Graduated for War", "Complete the tutorial campaign."],
        ["Grim Reaper Bronze", "Destroy 5 infantry units with a single unit in a campaign game."],
        ["Grim Reaper Gold", "Destroy 15 infantry units with a single unit in a campaign game."],
        ["Grim Reaper Silver", "Destroy 10 infantry units with a single unit in a campaign game."],
        ["Hero of the Rising Sun", "Complete the Japanese campaign."],
        ["Hoarder", "Accumulate a reserve of 1000 Resource Points in a campaign game."],
        ["Imperial Trinity", "Accumulate 3 Yamato class battleships during a campaign game, each with at least 2 kills. Difficulty level III or higher."],
        ["Naval Legend Bronze", "Destroy 5 ships with a single unit in a campaign game."],
        ["Naval Legend Gold", "Destroy 15 ships with a single unit in a campaign game."],
        ["Naval Legend Silver", "Destroy 10 ships with a single unit in a campaign game."],
        ["Order of the Rising Sun", "Use the Banzai Charge ability to destroy an enemy unit, dealing at least 5 points of damage."],
        ["Pax Americana", "Complete the US campaign."],
        ["Purple Heart", "Accumulate over 100 points of damage taken on a single land unit during a campaign game."],
        ["Semper Fi", "Accumulate 5 US Marines during a campaign game, each with at least 2 kills. Difficulty level III or higher."],
        ["Summa Cum Laude", "Complete the tutorial campaign without losing any unit. Difficulty level III or higher."],
        ["Taken by Force", "Capture a Victory Point with an advance move."],
        ["Tank Buster Bronze", "Destroy 5 tanks with a single unit in a campaign game."],
        ["Tank Buster Gold", "Destroy 15 tanks with a single unit in a campaign game."],
        ["Tank Buster Silver", "Destroy 10 tanks with a single unit in a campaign game."],
    ];

    assert.strictEqual(officialAchievements.length, 38, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
