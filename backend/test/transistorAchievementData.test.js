import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/transistor.json - 33 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 237930 (fetched through this app's own services/steamApi.js) - 28 of
// 33 ship a real, official Steam description. Reisz(), Spine(),
// Kendrell(), Bracket(), and Self() are hidden achievements Steam never
// describes publicly (confirmed via the same API call) - their
// descriptions here are curatorial summaries of their real,
// community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const transistor = getPlannerData("transistor");

test("getPlannerData('transistor') returns real planner data with 33 curated achievements", () => {

    assert.ok(transistor, "expected real planner data for transistor");
    assert.ok(Array.isArray(transistor.achievements));
    assert.strictEqual(transistor.achievements.length, 33);

});

test("every Transistor achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = transistor.achievements.map(a => a.id);
    const apinames = transistor.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Transistor achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of transistor.achievements) {

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

test("every one of the 28 officially-described Transistor achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 5 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own
    // dedicated test below instead.
    const officialAchievements = [
        ["Drive()", "Reach the Goldwalk District."],
        ["Sandbox()", "Clear one of each Test."],
        ["Speed()", "Complete each Speed Test."],
        ["Stability()", "Complete each Stability Test."],
        ["Planning()", "Complete each Planning Test."],
        ["Performance()", "Complete each Performance Test."],
        ["Agency()", "Complete each Agency Test"],
        ["Anything()", "Deal at least 1024 damage in one Turn() in the Practice Test."],
        ["Everything()", "Deal at least 2048 damage in one Turn() in the Practice Test."],
        ["Contest()", "Clear every Test."],
        ["Bye()", "Complete the story."],
        ["Goodbye()", "Recurse through the story."],
        ["Bet()", "Complete five encounters with one or more Limiters in use."],
        ["Dare()", "Complete five encounters with five or more Limiters in use."],
        ["Risk()", "Complete five encounters with all 10 Limiters in use."],
        ["Search()", "Inspect five completed Function Files."],
        ["Find()", "Inspect 10 completed Function Files."],
        ["Reveal()", "Inspect all completed Function Files."],
        ["Process()", "Inspect all completed Limiter Files."],
        ["News()", "Use 10 different OVC Terminals."],
        ["Function()", "Unlock every Transistor Function."],
        ["User()", "Unlock every Upgrade Slot and Passive Slot."],
        ["Memory()", "Unlock 32 MEM."],
        ["Align()", "Achieve User Level 8."],
        ["Focus()", "Achieve User Level 16."],
        ["One()", "Achieve User Level 24."],
        ["Limiter()", "Unlock every Process Limiter."],
        ["Stack()", "Create a Function combination requiring 12 MEM."]
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const hiddenNames = new Set(["Reisz()", "Spine()", "Kendrell()", "Bracket()", "Self()"]);

    const dataPairs = transistor.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 5 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const sybil = transistor.achievements.find(a => a.apiname === "AchDefeatSybil");
    const spine = transistor.achievements.find(a => a.apiname === "AchDefeatSpine");
    const asherGrant = transistor.achievements.find(a => a.apiname === "AchDefeatAsherGrant");
    const royce = transistor.achievements.find(a => a.apiname === "AchDefeatRoyce");
    const selfCombo = transistor.achievements.find(a => a.apiname === "AchSelfCombo");

    assert.ok(sybil && sybil.name === "Reisz()" && sybil.description.length > 0);
    assert.ok(spine && spine.name === "Spine()" && spine.description.length > 0);
    assert.ok(asherGrant && asherGrant.name === "Kendrell()" && asherGrant.description.length > 0);
    assert.ok(royce && royce.name === "Bracket()" && royce.description.length > 0);
    assert.ok(selfCombo && selfCombo.name === "Self()" && selfCombo.description.length > 0);

});
