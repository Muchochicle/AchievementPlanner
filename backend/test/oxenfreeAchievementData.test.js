import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/oxenfree.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 388880 (fetched through this app's own services/steamApi.js) - 8 of
// 13 ship a real, official Steam description. The Strong, Silent Type,
// Thicker than Water, New Beginnings, Matchmaker, and You'd just end up
// hating each other. are hidden achievements Steam never describes
// publicly (confirmed via the same API call) - their descriptions here
// are curatorial summaries of their real, community-documented unlock
// conditions (cross-checked against multiple independent Steam
// Community 100% achievement guides). difficulty/estimatedTime remain
// curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const oxenfree = getPlannerData("oxenfree");

test("getPlannerData('oxenfree') returns real planner data with 13 curated achievements", () => {

    assert.ok(oxenfree, "expected real planner data for oxenfree");
    assert.ok(Array.isArray(oxenfree.achievements));
    assert.strictEqual(oxenfree.achievements.length, 13);

});

test("every Oxenfree achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = oxenfree.achievements.map(a => a.id);
    const apinames = oxenfree.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Oxenfree achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of oxenfree.achievements) {

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

test("every one of the 8 officially-described Oxenfree achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 5 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["\"This House is Clear\"", "Complete the story."],
        ["Adler Letters, Pt. 1", "Collect 4 of Maggie's letters."],
        ["Adler Letters, Pt. 2", "Collect 8 of Maggie's letters."],
        ["Adler Letters, Pt. 3", "Collect all of Maggie's letters."],
        ["Ghost Stories", "Find all hidden frequencies."],
        ["I'm the Firestarter", "Make enemies with all of your friends."],
        ["Renjamin Spanklin", "Slap Ren in the face."],
        ["It's A Me", "Jump the crazy chasm in the woods."]
    ];

    assert.strictEqual(officialAchievements.length, 8, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "The Strong, Silent Type", "Thicker than Water", "New Beginnings", "Matchmaker", "You'd just end up hating each other."
    ]);

    const dataPairs = oxenfree.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const silent = oxenfree.achievements.find(a => a.apiname === "NO_DIALOGUE");
    const michael = oxenfree.achievements.find(a => a.apiname === "MICHAEL_SAVED");
    const jonas = oxenfree.achievements.find(a => a.apiname === "JONAS_BROTHER");
    const together = oxenfree.achievements.find(a => a.apiname === "REN_NONA_TOGETHER");
    const alone = oxenfree.achievements.find(a => a.apiname === "REN_NONA_ALONE");

    assert.ok(silent && silent.name === "The Strong, Silent Type" && silent.description.length > 0);
    assert.ok(michael && michael.name === "Thicker than Water" && michael.description.length > 0);
    assert.ok(jonas && jonas.name === "New Beginnings" && jonas.description.length > 0);
    assert.ok(together && together.name === "Matchmaker" && together.description.length > 0);
    assert.ok(alone && alone.name === "You'd just end up hating each other." && alone.description.length > 0);

});
