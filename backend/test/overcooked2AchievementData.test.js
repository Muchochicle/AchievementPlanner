import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/overcooked-2.json - 54 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 728880 (fetched through this app's own services/steamApi.js).
// 53 of 54 ship a real, official Steam description, quoted
// verbatim below. The 1 hidden achievement ship no Steam description;
// its condition here is curatorial, cross-checked against the game's
// wiki plus community 100% guides, and kept spoiler-light.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("overcooked-2");

test("getPlannerData('overcooked-2') returns real planner data with 54 curated achievements", () => {

    assert.ok(game, "expected real planner data for overcooked-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 54);

});

test("every Overcooked! 2 achievement has a unique id from 1 to 54 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 54 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 54);
    assert.strictEqual(new Set(apinames).size, 54);

});

test("every Overcooked! 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 officially-described Overcooked! 2 achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const hiddenApinames = new Set([
        "Complete all hidden levels with 3 stars",
    ]);

    assert.strictEqual(hiddenApinames.size, 1, "sanity check - Overcooked! 2 has 1 hidden achievement");

    const officialAchievements = [
        ["A Grand Dining Experience", "Deliver 1000 Meals"],
        ["And Suet Begins", "Complete the tutorial level"],
        ["Backpack Hijack", "Take 500 items from a backpack"],
        ["Bangers And Trash", "Put 99 items in the bin"],
        ["Battered!", "Win 10 games in versus mode"],
        ["Big Topping", "Get 3 stars on every level in Carnival of Chaos World 3"],
        ["Cannoned Goods", "Fire a Chef from a Cannon 100 times"],
        ["Carnival of Chaos", "Get 3 stars on all Carnival of Chaos levels"],
        ["Carte Blanched", "Get 3 stars on every level in Surf 'n' Turf World 3"],
        ["Chef de Partie", "Get 3 stars on every level in World 3"],
        ["Clockwork Kitchen", "Complete a level by doing all the recipes in order"],
        ["Coal of Duty", "Burn 300 buckets of coal in the furnace"],
        ["Commis Chef", "Get 3 stars on every level in World 2"],
        ["Condiment Connoisseur", "Add mustard or ketchup to a recipe 100 times"],
        ["Cooked Off!", "Get 3 stars on all Campfire Cook Off levels"],
        ["Dinner Party Posse", "Finish 15 Arcade games"],
        ["Dishwasher", "Wash 300 plates"],
        ["Executive Chef", "Get 3 stars on every level in World 6"],
        ["Fast Foodie", "Deliver every type of meal in Carnival of Chaos"],
        ["Full Mashings", "Deliver every type of meal in Campfire Cook Off"],
        ["Get Roasted", "Get 3 stars on every level in Night of the Hangry Horde World 1"],
        ["Get To The Chopper", "Chop 800 items"],
        ["Head Chef", "Get 3 stars on every level in World 5"],
        ["Heads Will Roll", "Chop 500 ingredients using the guillotine"],
        ["Heat and Greet", "Use the Bellows on BBQs 500 times"],
        ["Hot Pot Shot", "Throw 100 ingredients into a cooking pot"],
        ["I Ain't No Butterfingers", "Catch 250 items"],
        ["If You Can't Stand the Heat", "Extinguish a burning kitchen"],
        ["It's A Cook-Off!", "Finish 15 versus games"],
        ["It's Bean Emotional", "Use every emote"],
        ["Jelly-Porter", "Go through portals 75 times"],
        ["Kitchen Porter", "Get 3 stars on every level in World 1"],
        ["Mealer Dealer", "Get 3 stars on every level in Carnival of Chaos World 1"],
        ["Pie Me a River", "Get 3 stars on every level in Night of the Hangry Horde World 2"],
        ["S'more Than a Feeling", "Get 3 stars on every level in Campfire Cook Off World 1"],
        ["Skewer Rat", "Get 3 stars on every level in Surf 'n' Turf World 2"],
        ["Smoothie Criminal", "Get 3 stars on every level in Surf 'n' Turf World 1"],
        ["Soaker Cola", "Wash 150 dirty plates or glasses with the water gun"],
        ["Sous Chef", "Get 3 stars on every level in World 4"],
        ["Specials Board", "Get 3 stars on every level in Campfire Cook Off World 3"],
        ["Star Braiser", "Get 3 stars on all Night of the Hangry Horde levels with a star rating"],
        ["Surf 'n' Turf", "Get 3 stars on all Surf 'n' Turf levels"],
        ["Switch It Up", "Hit all the switches on the world map"],
        ["The Breaded Lady", "Get 3 stars on every level in Carnival of Chaos World 2"],
        ["The Greasy Spoon", "Get 3 stars on every level in Campfire Cook Off World 2"],
        ["The Spice of Life", "Deliver every type of meal in the game"],
        ["The Unbread", "Complete the main story campaign"],
        ["Too Many Cooks", "Unlock all the chefs"],
        ["Toss Lightly", "Throw 500 items"],
        ["Tree Hater", "Burn 300 pieces of wood"],
        ["Wrap Artist", "Get 3 stars on every level in Night of the Hangry Horde World 3"],
        ["You Got Served", "Deliver every type of meal in Surf 'n' Turf"],
        ["You Shallot Pass!", "Survive all horde stages in Night of the Hangry Horde with full kitchen health"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Overcooked! 2 achievement each keep their real name and a non-empty curatorial description", () => {

    const names = [
        ["Complete all hidden levels with 3 stars", "The Secret Ingredient"],
    ];

    assert.strictEqual(names.length, 1, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = game.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
