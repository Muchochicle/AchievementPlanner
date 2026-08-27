import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-short-hike.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1055540 (fetched through this app's own services/steamApi.js) - 8 of
// 12 ship a real, official Steam description. Crispy, Remember This Day
// Forever, Photo Friends, and Only You Can Prevent Campfires are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of their
// real, community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const aShortHike = getPlannerData("a-short-hike");

test("getPlannerData('a-short-hike') returns real planner data with 12 curated achievements", () => {

    assert.ok(aShortHike, "expected real planner data for a-short-hike");
    assert.ok(Array.isArray(aShortHike.achievements));
    assert.strictEqual(aShortHike.achievements.length, 12);

});

test("every A Short Hike achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = aShortHike.achievements.map(a => a.id);
    const apinames = aShortHike.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every A Short Hike achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of aShortHike.achievements) {

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

test("every one of the 8 officially-described A Short Hike achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 4 hidden achievements (Crispy, Remember This Day Forever, Photo
    // Friends, Only You Can Prevent Campfires) are excluded here - Steam
    // never exposes a public description for them.
    const officialAchievements = [
        ["Hawk Peak", "You made it to the top!"],
        ["The End", "Take a nice long nap."],
        ["Feathers Forever", "Find every feather."],
        ["The Fish Are Biting Today", "Trade every species of fish from the journal."],
        ["Parkour Master", "Beat each parkour race once."],
        ["Feather Finder", "Collect 10 golden feathers."],
        ["Not A Scratch", "Complete the boating challenge in under 45 seconds."],
        ["Green Thumb", "Water every sprout."]
    ];

    assert.strictEqual(officialAchievements.length, 8, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Crispy", "Remember This Day Forever", "Photo Friends", "Only You Can Prevent Campfires"]);

    const dataPairs = aShortHike.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 4 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const crispy = aShortHike.achievements.find(a => a.apiname === "AteToast");
    const stickball = aShortHike.achievements.find(a => a.apiname === "BeachstickballChamp");
    const photo = aShortHike.achievements.find(a => a.apiname === "PhotoTaken");
    const campfires = aShortHike.achievements.find(a => a.apiname === "ExtinguishCampfires");

    assert.ok(crispy && crispy.name === "Crispy" && crispy.description.length > 0);
    assert.ok(stickball && stickball.name === "Remember This Day Forever" && stickball.description.length > 0);
    assert.ok(photo && photo.name === "Photo Friends" && photo.description.length > 0);
    assert.ok(campfires && campfires.name === "Only You Can Prevent Campfires" && campfires.description.length > 0);

});
