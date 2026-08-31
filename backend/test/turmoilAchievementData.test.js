import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/turmoil.json - 39 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 361280 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("turmoil");

test("getPlannerData('turmoil') returns real planner data with 39 curated achievements", () => {

    assert.ok(game, "expected real planner data for turmoil");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 39);

});

test("every Turmoil achievement has a unique id from 1 to 39 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 39 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 39);
    assert.strictEqual(new Set(apinames).size, 39);

});

test("every Turmoil achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 39 Turmoil achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["As Good As It Gets", "Sell a treasure for $2,000 or more (The Heat Is On)"],
        ["Big Spender", "Pay $10,000 or more for a piece of land."],
        ["Big Spiller", "Get a spillage fine of over $10,000."],
        ["Boom, boom, boom, boom!!", "Blow up hard rock with dynamite (Deeper Underground)"],
        ["Cake!", "Beat the campaign."],
        ["Cat Whisperer", "Acquaint yourself with the village cat. (The Heat Is On)"],
        ["Chasing Waterfalls", "Do a water map research (Deeper Underground)"],
        ["Digging It", "Complete Anthony’s treasure collection. (The Heat Is On)"],
        ["Dove Hunt", "Practice shooting on the dove. (The Heat Is On)"],
        ["Dubious Deal", "Sell oil at a price below $0.25."],
        ["Empty Milkshake", "Get all the oil in a level above ground."],
        ["Expert", "Beat the campaign in expert mode."],
        ["Factory Man", "Buy all the factory upgrades."],
        ["Filthy Rich", "Beat the campaign and have more than one million in your bank account."],
        ["Gasolina", "Boost a refinery (Deeper Underground)"],
        ["Good Deal", "Boost the oil price above $2.00."],
        ["Great Deal", "Boost the oil price above $2.50."],
        ["Juicy", "Earn a profit of more than $25,000 in a single level."],
        ["Know when to hold 'em", "Win a game of Dice Dice Dice (Deeper Underground)"],
        ["Magmificent", "Convert an oil well to gas and triple its size. (The Heat Is On)"],
        ["Mayor Shareholder", "Own all the shares."],
        ["Methodical", "Buy all the shed upgrades. (The Heat Is On)"],
        ["Millionaire", "Have more than one million in your bank account"],
        ["Oil Tycoon", "Own all the shares and have one million in your bank account."],
        ["On Fire", "Beat the The Heat Is On campaign in expert mode."],
        ["Overbidder", "Overbid someone at the land auction."],
        ["Promising", "Earn a profit of more than $10,000 in a single level."],
        ["Ruby ruby ruby ruby!", "Get a ruby (Deeper Underground)"],
        ["Serious Money", "Earn a profit of more than $50,000 in a single level."],
        ["Shiny", "Get a diamond."],
        ["Stablelized", "Buy all the stable upgrades."],
        ["Taking the Heat", "Beat the The Heat Is On campaign."],
        ["The Big Haul", "Earn a profit of more than $100,000 in a single level."],
        ["There's no more panic in this town", "Beat the Deeper Underground campaign (Deeper Underground)"],
        ["Tip Top", "Read all the Mayor's Tips."],
        ["Tree Fiddy", "Boost the oil price up to $3.50."],
        ["Truly, Madly, Deeply", "Reach a depth of 1000 meters in Deep Mode (Deeper Underground)"],
        ["Workshopper", "Buy all the workshop upgrades."],
        ["You're the Best", "Beat the Deeper Underground campaign in expert mode (Deeper Underground)"],
    ];

    assert.strictEqual(officialAchievements.length, 39, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
