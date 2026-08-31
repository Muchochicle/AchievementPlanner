import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-case-of-the-golden-idol.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1677770 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-case-of-the-golden-idol");

test("getPlannerData('the-case-of-the-golden-idol') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-case-of-the-golden-idol");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every The Case of the Golden Idol achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every The Case of the Golden Idol achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 The Case of the Golden Idol achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Eight Case Solved", "The Crowning Celebration by The Lighthouse"],
        ["Eleventh Case Solved", "The Slight Delay in the Peaceful March to the King's Castle"],
        ["Fifth Case Solved", "The Intoxicating Dinner Party"],
        ["First Case Solved", "An Abrupt Termination of Contract"],
        ["Fourth Case Solved", "The Murder at the Little Mermaid"],
        ["Ninth Case Solved", "The Interrupted Weekend at the Doctor's Salon"],
        ["Second Case Solved", "The Untimely Passing of a Rural Gentleman"],
        ["Seventh Case Solved", "The Strange Practices of a Secretive Society"],
        ["Sixth Case Solved", "The Explosive Events in the Forest Cabin"],
        ["Tenth Case Solved", "The Triumph of Order"],
        ["The Lemurian Vampire 1st Case Solved", "The Enigmatic Expiration in a Harmonious Island Commune."],
        ["The Lemurian Vampire 2nd Case Solved", "The Lemurian Vampire Strikes!"],
        ["The Lemurian Vampire 3rd Case Solved", "The Less than Amicable Departure of Two Explorers."],
        ["The Spider of Lanka 1st Case Solved", "The Overly Enthusiastic Card Game Tournament in the Yellow Lily."],
        ["The Spider of Lanka 2nd Case Solved", "The Unfortunate Accident in the Raja's Court"],
        ["The Spider of Lanka 3rd Case Solved", "In the Web of the Spider"],
        ["Third Case Solved", "The Dramatic Departure of an Outsider"],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
