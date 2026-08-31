import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cook-serve-delicious.json - 52 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 247020 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("cook-serve-delicious");

test("getPlannerData('cook-serve-delicious') returns real planner data with 52 curated achievements", () => {

    assert.ok(game, "expected real planner data for cook-serve-delicious");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 52);

});

test("every Cook, Serve, Delicious! achievement has a unique id from 1 to 52 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 52 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 52);
    assert.strictEqual(new Set(apinames).size, 52);

});

test("every Cook, Serve, Delicious! achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 52 Cook, Serve, Delicious! achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10k Customers Served", "Served over 10,000 customers"],
        ["15k Customers Served", "Served over 15,000 customers"],
        ["1k Customers Served", "Served over 1,000 customers"],
        ["2.5k Customers Served", "Served over 2,500 customers"],
        ["5k Customers Served", "Served over 5,000 customers"],
        ["7.5k Customers Served", "Served over 7,500 customers"],
        ["Amazing Cameo Appearances", "(Battle Kitchen) Unlock Three Special Guests"],
        ["American Foods Pin", "Served over 1,500 dishes of delicious American Cuisine"],
        ["Breakfast Foods Pin", "Served over 1,500 dishes of delicious Breakfast foods"],
        ["ClicknStart Investor", "Successfully funded all ClicknStart projects"],
        ["Exotic Foods Pin", "Served over 1,500 dishes of Japanese, Chinese and Asian Cuisine "],
        ["Five Star Burger", "Upgraded the Hamburger to maximum"],
        ["Five Star Kabob", "Upgraded the Shish Kabob to maximum"],
        ["Five Star Lobster", "Upgraded the Lobster to maximum"],
        ["Five Star Pizza", "Upgraded the Pizza to maximum"],
        ["Five Star Restaurant", "Earn your Five Star Restaurant"],
        ["Five Star Soup", "Upgraded the Soup to maximum"],
        ["Five Star Steak", "Upgraded the Steak to maximum"],
        ["Five Star Sushi", "Upgraded the Sushi to maximum"],
        ["Five Star Wine", "Upgraded your Wine Collection to maximum"],
        ["Forever Remembered", "Served a Ryan Davis burger, named after the greatest man of our time"],
        ["Four Star Baked Potato", "Upgraded the Baked Potato to maximum"],
        ["Four Star Chicken", "Upgraded the Chicken Breast to maximum"],
        ["Four Star Fish", "Upgraded the Fish to maximum"],
        ["Four Star Fosters", "Upgraded the Bananas Foster to maximum"],
        ["Four Star Fried Rice", "Upgraded the Fried Rice to maximum"],
        ["Four Star Lasagna", "Upgraded the Lasagna to maximum"],
        ["Four Star Nachos", "Upgraded the Nachos to maximum"],
        ["Four Star Pasta", "Upgraded the Pasta to maximum"],
        ["Four Star Restaurant", "Earn your Four Star Restaurant"],
        ["Hungry Fest Champion", "Win the Hungry Festivities - the game's competitive cooking event."],
        ["Impossible Perfect Day", "(Extreme Difficulty) Achieve a Perfect Day with six items on your active menu"],
        ["Iron Cook Master", "Complete all Iron Cook Challenges"],
        ["Italian/Mexican Foods Pin", "Served over 1,500 dishes of delicious Italian and/or Mexican Cuisine"],
        ["Liquid Pin", "Served over 1,500 drinks from your restaurant"],
        ["Oceanic Foods Pin", "Served over 1,500 dishes straight from the oceans"],
        ["One Star Restaurant", "Earn your One Star Restaurant"],
        ["Perfect Day", "Achieve a Perfect Day"],
        ["Platinum Star Restaurant", "Reach a Platinum Star restaurant - complete the full progression checklist (enough days played, every food upgraded to maximum) and win the Hungry Festivities."],
        ["Quick Challenge", "(Battle Kitchen) Complete the Quick Challenge"],
        ["Rare Perfect Day", "Achieve a Perfect Day with a Four Star Restaurant or higher"],
        ["Robbery", "Successfully stopped a robbery during a workday"],
        ["Special Guest Star", "(Battle Kitchen) Unlock a Special Guest"],
        ["Super Rush Hour", "(Extreme Difficulty) Survive a Super Rush Hour"],
        ["Superb Lineup of Awesome", "(Battle Kitchen) Unlock Six Special Guests"],
        ["The Love Chef", "Date the entire pool of people from Cook4Luv"],
        ["The VIP Treatment", "Successfully serve a VIP guest"],
        ["Three Star Food Upgrade", "Upgraded all three star foods to maximum"],
        ["Three Star Restaurant", "Earn your Three Star Restaurant"],
        ["Two Star Food Upgrade", "Upgraded all two star foods to maximum"],
        ["Two Star Restaurant", "Earn your Two Star Restaurant"],
        ["When It's Ready", "(Extreme Difficulty) Receive and read a peculiar email"],
    ];

    assert.strictEqual(officialAchievements.length, 52, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
