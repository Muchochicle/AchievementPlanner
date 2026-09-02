import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nour-play-with-your-food.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1141050 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nour-play-with-your-food");

test("getPlannerData('nour-play-with-your-food') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for nour-play-with-your-food");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every Nour: Play with Your Food achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Nour: Play with Your Food achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 Nour: Play with Your Food achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Catharsis", "Smash 30 plates"],
        ["Chef du Flambe", "Ignite more than 100 objects"],
        ["Chef du Vent", "Blow a gust of wind"],
        ["Combo!", "Hit a rhythm combo"],
        ["Cornucopia", "Feed the Jellyfish every food"],
        ["Egg Finesse", "Complete the egg maze without breaking your first egg"],
        ["Extra Salt", "Salt popped popcorn"],
        ["Fastest Food", "Activate the speed time combo 5 consecutive times"],
        ["Food for Gerbils", "Smallify 50 food objects"],
        ["Food for Giants", "Biggify 50 food objects"],
        ["Food is Back", "Discover the colors that make you hungry"],
        ["Food is Over", "Complete the tutorial"],
        ["Hamborger", "Get to space"],
        ["Ideal Breakfast", "Pour syrup over a pancake with butter on it"],
        ["Jelly Thief", "Witness The Jellyfish successfully steal a piece of your meal"],
        ["Just Zap It", "Microwave foods for 5 minutes"],
        ["Love to Share", "Fit 15 straws in the boba cup"],
        ["Perfect Pitch", "Levitate your creation"],
        ["Pineapple on pizza", "Add a very controversial topping to your pizza"],
        ["Precision Magician", "Enchant a single food"],
        ["Shhhhh", "Activate the silencing combo"],
        ["Sous Vide Vuitton", "Rack up a dinner bill of $1,000,000"],
        ["Speed Grinder", "Grind 10 objects within 30 seconds"],
        ["Starry Dominion", "Activate the diurnal combo"],
        ["Take it Escargot", "Activate the slow time combo 5 consecutive times"],
        ["Taste the Rainbow", "Have a food dyed for each available color in the dropper"],
        ["Thanks for the meal", "Get both chopsticks in bowl"],
        ["Toast Hazard", "Explode all Toasters"],
        ["WARP", "Activate warp mode"],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
