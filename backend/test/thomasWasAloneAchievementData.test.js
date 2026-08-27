import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/thomas-was-alone.json - 35 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 220780 (fetched through this app's own services/steamApi.js) -
// 26 of 35 ship a real, official Steam description. The 9 "startChapN"
// achievements are hidden achievements Steam never describes publicly
// (confirmed via the same API call) - each one is named after, and
// unlocks upon reaching, one specific story chapter; their descriptions
// here are curatorial, simply naming which chapter each one marks,
// cross-checked against independent achievement guides' documentation
// of the exact chapter each one corresponds to. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const thomasWasAlone = getPlannerData("thomas-was-alone");

test("getPlannerData('thomas-was-alone') returns real planner data with 35 curated achievements", () => {

    assert.ok(thomasWasAlone, "expected real planner data for thomas-was-alone");
    assert.ok(Array.isArray(thomasWasAlone.achievements));
    assert.strictEqual(thomasWasAlone.achievements.length, 35);

});

test("every Thomas Was Alone achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = thomasWasAlone.achievements.map(a => a.id);
    const apinames = thomasWasAlone.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Thomas Was Alone achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of thomasWasAlone.achievements) {

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

test("every one of the 26 officially-described Thomas Was Alone achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 9 "startChapN" hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Thomas Was Not Alone", "Finish the game."],
        ["On the Hop", "Jump 800 times."],
        ["Experienced Jumper", "Jump 1600 times."],
        ["Mario", "Jump 2400 times."],
        ["Achievement for One", "Find the first achievement pickup in 'Spawn'."],
        ["Gamification", "Find the second achievement pickup in 'Spawn'."],
        ["Double Act", "Find the first achievement pickup in 'Array'."],
        ["They Seek It Here, They Seek It There...", "Find the second achievement pickup in 'Array'."],
        ["Hidden Depths", "Find the first achievement pickup in 'Origin'."],
        ["Not Exactly a Tesseract", "Find the second achievement pickup in 'Origin'."],
        ["A Token of Love", "Find the first achievement pickup in 'Associations'."],
        ["Shared Hobby", "Find the second achievement pickup in 'Associations'."],
        ["Distractions", "Find the first achievement pickup in 'Purge'."],
        ["Dwindling Capacity", "Find the second achievement pickup in 'Purge'."],
        ["The Last Place You Look", "Find the first achievement pickup in 'Invert'."],
        ["Darwinian Collection", "Find the second achievement pickup in 'Invert'."],
        ["And In the Darkness, Find Them", "Find the first achievement pickup in 'Itterate'."],
        ["Achievements, All the Way Down", "Find the second achievement pickup in 'Itterate'."],
        ["The Breakfast Club", "Find the first achievement pickup in 'Design'."],
        ["A Selfless Act", "Find the second achievement pickup in 'Design'."],
        ["49 Shades of Grey", "Find the first achievement pickup in 'Generation'."],
        ["Needs More Hats", "Find the second achievement pickup in 'Generation'."],
        ["That's What You Gets", "Find the first achievement pickup in 'Y+1, X+1'."],
        ["The Final MacGuffin", "Find the second achievement pickup in 'Y+1, X+1'."],
        ["Huge Success", "Die 100 times."],
        ["Part of the Problem", "Bounce on Laura 100 times."]
    ];

    assert.strictEqual(officialAchievements.length, 26, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Be There or Be...", "The Hero Thomas Needs", "I'm Rubber, You're Glue", "Derezzed",
        "Viridian", "Winter is Coming", "Tighten Up the Graphics on Level 3", "Electric Boogaloo", "Up, and to the Right"
    ]);

    const dataPairs = thomasWasAlone.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 9 Steam-silent chapter-start hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const chapters = [
        ["startChap1", "Be There or Be..."],
        ["startChap2", "The Hero Thomas Needs"],
        ["startChap3", "I'm Rubber, You're Glue"],
        ["startChap4", "Derezzed"],
        ["startChap5", "Viridian"],
        ["startChap6", "Winter is Coming"],
        ["startChap7", "Tighten Up the Graphics on Level 3"],
        ["startChap8", "Electric Boogaloo"],
        ["startChap9", "Up, and to the Right"]
    ];

    for (const [apiname, name] of chapters) {

        const achievement = thomasWasAlone.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be "${name}" with a real curatorial description`);

    }

});
