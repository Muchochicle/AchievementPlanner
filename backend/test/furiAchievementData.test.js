import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/furi.json - 33 real achievements sourced from a
// live ISteamUserStats/GetSchemaForGame/v2 response for appid 423230
// (fetched through this app's own services/steamApi.js) - 19 of 33 ship
// a real, official Steam description. The 9 Guardian-defeat
// achievements, the 3 ending achievements, and the 2 "meet The Voice"
// achievements are hidden achievements Steam never describes publicly
// (confirmed via the same API call) - their descriptions here are
// curatorial summaries of their real, community-documented unlock
// conditions. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field in this
// catalog.
const furi = getPlannerData("furi");

test("getPlannerData('furi') returns real planner data with 33 curated achievements", () => {

    assert.ok(furi, "expected real planner data for furi");
    assert.ok(Array.isArray(furi.achievements));
    assert.strictEqual(furi.achievements.length, 33);

});

test("every Furi achievement has a unique id from 1 to 33 and a unique apiname", () => {

    const ids = furi.achievements.map(a => a.id);
    const apinames = furi.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 33 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 33);
    assert.strictEqual(new Set(apinames).size, 33);

});

test("every Furi achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of furi.achievements) {

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

test("every one of the 19 officially-described Furi achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 14 hidden achievements (9 Guardians, 3 endings, 2 "meet The
    // Voice") are excluded here - Steam never exposes a public
    // description for them - and covered by their own dedicated test
    // below instead.
    const officialAchievements = [
        ["Light It Up", "Turn your armor's light ON during a path"],
        ["Give It a Real Try", "Rise from a K.O. 20 times"],
        ["What a Thrill", "Get an A rank in Furi difficulty (story mode)"],
        ["It Gives Me Hope", "Get a S rank in Furi difficulty (story mode)"],
        ["Furier than Ever", "Complete the game in Furier difficulty"],
        ["That Was Intense", "Get a S rank in Furier difficulty (story mode)"],
        ["Neon Swagger", "Keep the armor glowing at maximum level for one full phase"],
        ["So Fresh", "Grab 10 heal pickups during a fight"],
        ["Perfect Parrier", "Achieve 5 perfect parries during one fight against a guardian"],
        ["Boost Master", "Hit one guardian 10 times with a boost hit in one fight without game over"],
        ["Ping Pong", "Parry the same bullet 3 times after it bounces back from The Hand's shield"],
        ["Let's Brawl", "Hit a guardian 10 times with a melee attack in one fight without game over"],
        ["Take It Back", "Parry 20 bullets against a guardian in one fight without game over"],
        ["Jedi Master", "Parry 20 consecutive hits against a guardian without getting hit"],
        ["Speedrunner", "Defeat a guardian within 5 minutes"],
        ["Untouchable", "Defeat a guardian without taking any hits"],
        ["Faster than M", "Beat Furi’s designer’s best speedrun time: 2:12:42"],
        ["Faster than B", "Beat Furi's combat designer’s best speedrun time: 1:29:56"],
        ["Breakout", "Break all of The Line's shields before hitting him"]
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Kill the Jailer", "A Prison within a Prison", "Master of Time", "Single Impact", "Can You Feel It?",
        "Don't Listen to Her", "She's an 11", "All That Nonsense", "Amateur. Pushover.",
        "Welcome Back, Rider", "Who Will Protect Them Next Time?", "There Is Kindness in You",
        "My Only Chance", "Lucky for You"
    ]);

    const dataPairs = furi.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 14 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["beat_law", "Kill the Jailer"],
        ["beat_nemesis", "A Prison within a Prison"],
        ["beat_wise", "Master of Time"],
        ["beat_scale", "Single Impact"],
        ["beat_father", "Can You Feel It?"],
        ["beat_wing", "Don't Listen to Her"],
        ["beat_maze", "She's an 11"],
        ["beat_challenger", "All That Nonsense"],
        ["beat_horn", "Amateur. Pushover."],
        ["ending_invasion", "Welcome Back, Rider"],
        ["ending_defense", "Who Will Protect Them Next Time?"],
        ["ending_wing", "There Is Kindness in You"],
        ["meet_voice_free_world", "My Only Chance"],
        ["meet_voice_law_jail", "Lucky for You"]
    ];

    assert.strictEqual(names.length, 14, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = furi.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `expected ${apiname} to be named "${name}" with a non-empty curatorial description`);

    }

});
