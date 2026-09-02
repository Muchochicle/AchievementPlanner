import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/supermarket-together.json - 51 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2709570 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("supermarket-together");

test("getPlannerData('supermarket-together') returns real planner data with 51 curated achievements", () => {

    assert.ok(game, "expected real planner data for supermarket-together");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 51);

});

test("every Supermarket Together achievement has a unique id from 1 to 51 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 51 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 51);
    assert.strictEqual(new Set(apinames).size, 51);

});

test("every Supermarket Together achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 51 Supermarket Together achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Good Wares Selection", "Unlock all manufacturing recipes available so far"],
        ["A Responsible Owner", "Pay 25 invoices [Collective]"],
        ["A Wider Array Of Products", "Acquire all manufacturing departments"],
        ["Advanced Cashier", "Checked out a total of 2500 products [Collective]"],
        ["Advanced Cleaner", "Cleaned 200 trash [Collective]"],
        ["Advanced Decorator", "Have 100 or more decorations in your store"],
        ["Advanced Recycler", "Recycled a total of 500 boxes [Collective]"],
        ["Advanced Restocker", "Placed a total of 10000 products in shelves [Collective]"],
        ["Basic Cashier", "Checked out a total of 500 products [Collective]"],
        ["Basic Cleaner", "Cleaned 50 trash [Collective]"],
        ["Basic Decorator", "Have 50 or more decorations in your store (lights do count)"],
        ["Basic Recycler", "Recycled a total of 50 boxes [Collective]"],
        ["Basic Restocker", "Placed a total of 1000 products in shelves [Collective]"],
        ["Better, Prettier, Cheaper", "Do at least 50 sales [Collective]"],
        ["Can't Someone Else Do It?", "Recover 500 dropped products"],
        ["Careful Cashier", "Return the correct change 100 times in a row while being a cashier"],
        ["Caught Red Handed", "Catch 10 thieves with the surveillance desk [Collective]"],
        ["Condensed Recycling", "Recycle 40 cardboard bales [Collective]"],
        ["Defaulter", "Suffer the consequences of not paying a bank loan"],
        ["Expert Cashier", "Checked out a total of 10000 products [Collective]"],
        ["Expert Cleaner", "Cleaned 500 trash [Collective]"],
        ["Expert Recycler", "Recycled a total of 2000 boxes [Collective]"],
        ["Feed The Machine", "Insert 500 boxes in the cardboard baler [Collective]"],
        ["Gaining Traction!", "Achieve $25.000 or more in earnings in a single day"],
        ["Good Morning Dear Customers", "Place an announcement desk in your store"],
        ["Good, Pretty, Cheap", "Do at least 10 sales [Collective]"],
        ["How Is This Still Standing Again?", "Demolish every possible pillar and beam in the plaza layout"],
        ["How Is This Still Standing? (A)", "Demolish every possible pillar and beam in the classic layout"],
        ["KA-CHING!", "Have a customer pay more than 700 dollars"],
        ["Let's Get To Work", "Repair your first device"],
        ["Master Decorator", "Have 200 or more decorations in your store"],
        ["Master Restocker", "Placed a total of 100000 products in shelves [Collective]"],
        ["Might Need Two Ladders", "Find the missing cat in the classic layout"],
        ["Might Need Two Ladders... Or More", "Find the missing cat in the plaza layout"],
        ["Millionaire's Holiday", "Reach one million dollars in funds"],
        ["Not On My Guard", "Hit a thief  with the broom 500 times"],
        ["Observation Duty?", "Analyzed 500 customers with the surveillance desk [Collective]"],
        ["Please Check My Prices!!", "'Convince' 10 bystanders to become customers by pushing them inside your store with the fire extinguiser in the classic layout (Double transit door needed)"],
        ["Sky High", "10000 customers have gone through the store [Collective]"],
        ["Some Success", "500 customers have gone through the store [Collective]"],
        ["Still Connected", "Complete 25 online orders."],
        ["Superfood", "Manufacture a recipe with at least 7 extra ingredients"],
        ["Taxes? In my store?", "Pay your first invoice [Collective]"],
        ["This Is Rolling", "2000 customers have gone through the store [Collective]"],
        ["Tool Of Chaos", "Get your hands on a fire extinguiser"],
        ["Turning The Router On", "Pack your first online order."],
        ["Virtual Benefits", "Earn more than 25.000$ with online orders."],
        ["Welcome Mr. Whiskers", "Pet the cat outside 100 times"],
        ["What is this?", "Build the enigma cube in the plaza layout"],
        ["Who Could Resist?", "Sell 1000 extra products thanks to sales [Collective]"],
        ["Wrench Specialist", "Repair 30 devices [Collective]"],
    ];

    assert.strictEqual(officialAchievements.length, 51, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
