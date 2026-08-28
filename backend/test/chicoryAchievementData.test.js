import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/chicory.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1123450 (fetched through this app's own services/steamApi.js) - 20 of
// 33 ship a real, official Steam description. The 13 hidden achievements
// are described publicly nowhere; seven are automatic main-story markers
// (apiname story_2..story_8) and are summarised only as story-point
// markers with no plot detail, the other six (the four Wielder Trials,
// Lost and Found, Such Great Heights) cross-checked against
// PlayStationTrophies' and TrueAchievements' trophy guides.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const chicory = getPlannerData("chicory");

test("getPlannerData('chicory') returns real planner data with 33 curated achievements", () => {

    assert.ok(chicory, "expected real planner data for chicory");
    assert.ok(Array.isArray(chicory.achievements));
    assert.strictEqual(chicory.achievements.length, 33);

});

test("every Chicory: A Colorful Tale achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = chicory.achievements.map(a => a.id);
    const apinames = chicory.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Chicory: A Colorful Tale achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of chicory.achievements) {

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

test("every one of the 20 officially-described Chicory: A Colorful Tale achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 13 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Helpful", "Pick up Chicory's brush"],
        ["Clothing Curious", "Collect 25% of clothing items"],
        ["Clothing Collector", "Collect 50% of clothing items"],
        ["Clothing Hunter", "Collect all clothing items"],
        ["Trash Mammal", "Pick up 25% of litter"],
        ["Good Samaritan", "Pick up 50% of litter"],
        ["Ultimate Samaritan", "Pick up all litter"],
        ["Casual Decorator", "Collect 25% of decor"],
        ["Serious Decorator", "Collect 50% of decor"],
        ["Master Decorator", "Collect all decor"],
        ["Stylist", "Discover 50% of Brush Styles"],
        ["Style Pro", "Discover all Brush Styles"],
        ["Kitten Caboodle", "Return Beans' kids to her"],
        ["Graduate", "Complete all art classes"],
        ["Postal Service", "Deliver mail for Artichoke"],
        ["Explorer", "Reveal 50% of the map"],
        ["Cartographer", "Reveal 100% of the map"],
        ["Picture Perfect", "Fill in Gelato's photo gallery"],
        ["Turnabout Squeeze", "Solve the mystery of stolen furniture"],
        ["Passion for Fashion", "Solve all of Oats' outfit riddles"]
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "story_2",
        "story_3",
        "story_4",
        "story_5",
        "story_6",
        "story_trial_mtn",
        "story_trial_rainforest",
        "story_trial_island",
        "story_trial_canyon",
        "story_7",
        "story_8",
        "kids_2",
        "mail_2"
    ]);

    assert.strictEqual(hiddenApinames.size, 13, "sanity check - Chicory: A Colorful Tale has 13 hidden achievements");

    const dataPairs = chicory.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 13 hidden Chicory achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["story_2", "Meet Your Hero"],
        ["story_3", "Phone Call"],
        ["story_4", "Muse"],
        ["story_5", "Ancient Beast of the Darkness"],
        ["story_6", "Apprenticeship"],
        ["story_trial_mtn", "Standing on the Mountain Top"],
        ["story_trial_rainforest", "Honored History"],
        ["story_trial_island", "More Than Myself"],
        ["story_trial_canyon", "Respect"],
        ["story_7", "Something New"],
        ["story_8", "End of an Era"],
        ["kids_2", "Lost and Found"],
        ["mail_2", "Such Great Heights"]
    ];

    assert.strictEqual(names.length, 13, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = chicory.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
