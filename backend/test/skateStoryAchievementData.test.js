import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/skate-story.json - 26 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1263240 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("skate-story");

test("getPlannerData('skate-story') returns real planner data with 26 curated achievements", () => {

    assert.ok(game, "expected real planner data for skate-story");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 26);

});

test("every Skate Story achievement has a unique id from 1 to 26 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 26 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 26);
    assert.strictEqual(new Set(apinames).size, 26);

});

test("every Skate Story achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 26 Skate Story achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["AND YET...", "Put on a brilliant show."],
        ["BLACKEST FIRE", "Finish Chapter 8."],
        ["Deck Collector", "Collect 18 skate decks."],
        ["DEPARTMENT OF DEATH", "Finish Chapter 4."],
        ["Devil's Symmetry", "Perform the diabolical sequence."],
        ["DINNER", "Finish Chapter 7."],
        ["ETERNAL CENTIPEDE", "Finish Chapter 9."],
        ["Eternally Bound", "Break the Chain of Regret."],
        ["GLASS SKATER", "Finish Chapter 1."],
        ["GODHOOK", "Finish Chapter 6."],
        ["HELLSEA", "Finish Chapter 5."],
        ["In the light of the Moon...", "Do 1000 Tricks."],
        ["Infernal Flames", "Stomp a combo over 20,000."],
        ["MADE OF GLASS AND PAIN", "Shatter 100 times at speed."],
        ["Oblivious", "Find a meaning in the void."],
        ["Over Several Eternities", "Do 10000 Tricks."],
        ["Philoskater", "Impart the love of skateboarding."],
        ["Pure Momentum", "Stomp a combo over 99,999."],
        ["SKATE STORY", "Finish the Epilogue."],
        ["Stickerbook", "Place 100 Stickers."],
        ["THE DEVIL'S LAUNDRY", "Finish Chapter 3."],
        ["The Skater performed a trick.", "Do 100 Tricks."],
        ["WARM MILK", "Finish Chapter 2."],
        ["YOU ARE A DEMON", "Shatter 25 times at speed."],
        ["You can't skate here!", "Stomp a combo over 50.000."],
        ["YOU MUST SKATE", "Shatter 500 times at speed."],
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
