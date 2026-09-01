import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/betrayal-at-club-low.json - 24 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1885750 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("betrayal-at-club-low");

test("getPlannerData('betrayal-at-club-low') returns real planner data with 24 curated achievements", () => {

    assert.ok(game, "expected real planner data for betrayal-at-club-low");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 24);

});

test("every Betrayal At Club Low achievement has a unique id from 1 to 24 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 24 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 24);
    assert.strictEqual(new Set(apinames).size, 24);

});

test("every Betrayal At Club Low achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 24 Betrayal At Club Low achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Spiked-Fruit Pizza", "It's an acquired taste."],
        ["Big Mo!", "You reached Ending #6"],
        ["Completionist", "You experienced all 11 endings."],
        ["Couched", "You reached Ending #7"],
        ["Deep Exhaustion", "You reached Ending #10"],
        ["DJ Master", "You really are a great DJ... somehow."],
        ["Eight Sides To Every Story", "You reached Ending #9"],
        ["Fancy Jacket acquired.", "Of course you needed to wear that coat."],
        ["Fooled Mo", "Mo had no idea you just said the Escape Phrase right to his face."],
        ["Frugal Patron", "Find yourself with $200 in unspent cash."],
        ["Iron Pizza Chef", "Complete the game without losing all your Health or Nerve in Iron Pizza mode."],
        ["Mortified By Bad Faith", "It really was that bad."],
        ["Nerve Burned", "You reached Ending #11"],
        ["Seeing Emotions", "Your \"sixth eye\" or whatever is now open."],
        ["Solid Game Night", "One playthrough of this game ran for at least three hours total."],
        ["The Beast Mobile", "You breathed new life into that old car."],
        ["The Bridge", "You reached Ending #3"],
        ["The Circus Rides Again", "You reached Ending #2"],
        ["The DJ Dome", "You reached Ending #4"],
        ["The Gig", "You reached Ending #5"],
        ["The Inner Game", "You reached Ending #8"],
        ["Twilight Diner", "You reached Ending #1"],
        ["Twilight Warrior", "Complete the game without losing all your Health or Nerve in 4AM mode."],
        ["Wearing the Fierce Mask", "Amazing this thing even fits."],
    ];

    assert.strictEqual(officialAchievements.length, 24, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
