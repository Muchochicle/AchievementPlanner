import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/car-mechanic-simulator-2021.json - 46 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1190000 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("car-mechanic-simulator-2021");

test("getPlannerData('car-mechanic-simulator-2021') returns real planner data with 46 curated achievements", () => {

    assert.ok(game, "expected real planner data for car-mechanic-simulator-2021");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 46);

});

test("every Car Mechanic Simulator 2021 achievement has a unique id from 1 to 46 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 46 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 46);
    assert.strictEqual(new Set(apinames).size, 46);

});

test("every Car Mechanic Simulator 2021 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 46 Car Mechanic Simulator 2021 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Amateur Painter", "Paint 5 cars"],
        ["Artist", "Paint 60 cars"],
        ["Barn finder", "Buy 30 cars from barn"],
        ["Blind shot", "Buy 5 cars from auctions"],
        ["Car flipper", "Renovate and sell 1 car"],
        ["Explorer", "Visit Barn 30 times"],
        ["First time at countryside", "Visit Barn first time"],
        ["Gambler", "Buy 25 cars from auctions"],
        ["Good tip", "Finish order with money bonus"],
        ["Great habit", "Finish path test 25 times"],
        ["Great roll", "Earn 50 000 CR on sell cars"],
        ["Handyman", "Fix 50 car parts"],
        ["Hard worker", "Finish 100 orders"],
        ["Hidden Trasure", "Buy 1 car from barn"],
        ["I like new shiny stuff", "Visit Salon"],
        ["I like scraps", "Earn 500 scrap parts"],
        ["I saw many things", "Reach level 20"],
        ["I think i can fix it", "Reach level 5"],
        ["Job done!", "Finish 1 order"],
        ["Life lesson", "Finish order with experience bonus"],
        ["Like a boss", "Unlock all garage expansions"],
        ["Little Steps", "Earn 5000 CR on sell cars"],
        ["New and shiny", "Buy 100 parts from main shop"],
        ["New heart", "Swap engine"],
        ["Parking boy", "Unlock 10 parking alleys"],
        ["Path full of stops", "Finish path test first time"],
        ["Piece of junk", "Buy 1 car from junkyard"],
        ["Professional vulcanizer", "Balance 50 tires"],
        ["Racer boy", "Finish lap with time under 1:50"],
        ["Reasonable and responsible", "Buy 3000 parts from main shop"],
        ["Regenerator", "Fix 150 car parts"],
        ["Rich guy", "Buy new car in car salon"],
        ["Road tested", "Finish test track"],
        ["Scavenger", "Buy 30 cars from junkyard"],
        ["Scraps are my obsession", "Earn 2000 scrap parts"],
        ["Sculptor", "Fix 150 body parts"],
        ["Slippery floor", "Pour old oil on the floor"],
        ["Smash! Bash!", "Fix 50 body parts"],
        ["So many unneeded parts", "Sell 1000 parts from inventory"],
        ["The Mechanic", "Reach level 50"],
        ["Time for holidays", "Finish all the special missions"],
        ["Trader", "Renovate and sell 50 cars"],
        ["Vulcanizer", "Balance 5 tires"],
        ["Welcome to the world of junk", "Visit a junkyard"],
        ["Well trained", "Unlock all skills"],
        ["Wrench Master", "Unscrew 10 000 bolts"],
    ];

    assert.strictEqual(officialAchievements.length, 46, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
