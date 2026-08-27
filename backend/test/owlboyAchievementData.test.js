import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/owlboy.json - 12 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid 115800
// (fetched through this app's own services/steamApi.js) - 6 of 12 ship
// a real, official Steam description. Hot Spring Mastery, Good boy,
// Reminiscing, Music Master, Oops..., and Bad boy are hidden
// achievements Steam never describes publicly (confirmed via the same
// API call) - their descriptions here are curatorial summaries of their
// real, community-documented unlock conditions. difficulty/estimatedTime
// remain curatorial judgments, same convention as every other planner
// difficulty/time field in this catalog.
const owlboy = getPlannerData("owlboy");

test("getPlannerData('owlboy') returns real planner data with 12 curated achievements", () => {

    assert.ok(owlboy, "expected real planner data for owlboy");
    assert.ok(Array.isArray(owlboy.achievements));
    assert.strictEqual(owlboy.achievements.length, 12);

});

test("every Owlboy achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = owlboy.achievements.map(a => a.id);
    const apinames = owlboy.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Owlboy achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of owlboy.achievements) {

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

test("every one of the 6 officially-described Owlboy achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 6 hidden achievements are excluded here - Steam never exposes a
    // public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Trinket Master", "Mastering trinket collection at Buccanary's!"],
        ["Trinket Grand Master", "Unlocked every trinket from Buccanary's shop."],
        ["Flight of the Boguin", "Cleared the Boguins' Cannon challenge."],
        ["Treasure Seeker", "Collected Buccanary coins."],
        ["Treasure Seeker Grand Master", "Collected all Buccanary coins."],
        ["Ancient Memories", "Collected the Golden disks."]
    ];

    assert.strictEqual(officialAchievements.length, 6, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Hot Spring Mastery", "Good boy", "Reminiscing", "Music Master", "Oops...", "Bad boy"
    ]);

    const dataPairs = owlboy.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 6 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hotSpring = owlboy.achievements.find(a => a.apiname === "AchievedHotSpringMastery");
    const goodBoy = owlboy.achievements.find(a => a.apiname === "TriedToReportToAsio");
    const shell = owlboy.achievements.find(a => a.apiname === "ListenedToShell");
    const music = owlboy.achievements.find(a => a.apiname === "PlayedBombomanTheme");
    const sadist = owlboy.achievements.find(a => a.apiname === "Sadist");
    const badBoy = owlboy.achievements.find(a => a.apiname === "ThrewGeddyIntoClouds");

    assert.ok(hotSpring && hotSpring.name === "Hot Spring Mastery" && hotSpring.description.length > 0);
    assert.ok(goodBoy && goodBoy.name === "Good boy" && goodBoy.description.length > 0);
    assert.ok(shell && shell.name === "Reminiscing" && shell.description.length > 0);
    assert.ok(music && music.name === "Music Master" && music.description.length > 0);
    assert.ok(sadist && sadist.name === "Oops..." && sadist.description.length > 0);
    assert.ok(badBoy && badBoy.name === "Bad boy" && badBoy.description.length > 0);

});
