import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-forgotten-city.json - 40 real achievements
// sourced from a live ISteamUserStats/GetSchemaForGame/v2 response for
// appid 874260 (fetched through this app's own services/steamApi.js) -
// 28 of 40 ship a real, official Steam description. Dead Shot,
// Bloodless Shadow, Italian Plumber, Psycho, Striker, Underworld
// Explorer, Kleptomaniac, High Diver, Nimble, Allergic, The Oracle, and
// Callous are hidden achievements Steam never describes publicly
// (confirmed via the same API call) - their descriptions here are
// curatorial summaries of their real, community-documented unlock
// conditions (cross-checked against gamepressure.com and PSNProfiles),
// kept deliberately light on the game's real mystery-solving content.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const theForgottenCity = getPlannerData("the-forgotten-city");

test("getPlannerData('the-forgotten-city') returns real planner data with 40 curated achievements", () => {

    assert.ok(theForgottenCity, "expected real planner data for the-forgotten-city");
    assert.ok(Array.isArray(theForgottenCity.achievements));
    assert.strictEqual(theForgottenCity.achievements.length, 40);

});

test("every The Forgotten City achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = theForgottenCity.achievements.map(a => a.id);
    const apinames = theForgottenCity.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every The Forgotten City achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of theForgottenCity.achievements) {

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

test("every one of the 28 officially-described The Forgotten City achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 12 hidden achievements are excluded here - Steam never exposes
    // a public description for them - and covered by their own dedicated
    // test below instead.
    const officialAchievements = [
        ["Looper", "Loop through time once"],
        ["The Many Shall Suffer", "Reach Ending 1 of 4"],
        ["The One That Got Away", "Reach Ending 2 of 4"],
        ["The Ones That Got Away", "Reach Ending 3 of 4"],
        ["The Canon Ending", "Reach Ending 4 of 4"],
        ["Grave Robber", "Steal 2000 coins after the Golden Rule is broken"],
        ["Super Looper", "Loop through time ten times"],
        ["Herculean", "Confront the creator of The Golden Rule"],
        ["Archaeologist", "Discover what lies beneath the city"],
        ["Sleuth", "Find all three missing persons"],
        ["Survivor", "Survive the Palace"],
        ["Law Abiding Citizen", "Finish the game without looping through time once"],
        ["Minimalist", "Reach the best ending with the smallest number of loops"],
        ["Silver Tongue", "Talk your way through every possible confrontation"],
        ["Avid Reader", "Read 10 different grafitti"],
        ["Unhygenic", "Pick up the sponge on a stick"],
        ["Smooth Talker", "Get rejected by Aurelia"],
        ["Golden Archer", "Gild your first thing"],
        ["Maverick", "Skip the city tour"],
        ["Fibber", "Lie 10 times"],
        ["Medic", "Save Iulia's life"],
        ["Counsellor", "Save Ulpius's life"],
        ["Trickster", "Save Fabia's life"],
        ["Lion Tamer", "Solve Vergil's problem"],
        ["Liberator", "Have Duli released from his cell"],
        ["Match-maker", "Help Galerius romance Equitia"],
        ["Tourist", "Use Photo Mode"],
        ["Treasure Hunter", "Find treasure using the golden bow"]
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const hiddenNames = new Set([
        "Dead Shot", "Bloodless Shadow", "Italian Plumber", "Psycho", "Striker",
        "Underworld Explorer", "Kleptomaniac", "High Diver", "Nimble", "Allergic",
        "The Oracle", "Callous"
    ]);

    const dataPairs = theForgottenCity.achievements
        .filter(a => !hiddenNames.has(a.name))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 12 Steam-silent hidden achievements each still have their own real name and a non-empty curatorial description", () => {

    const hidden = [
        ["Ach_07_Shoot_face", "Dead Shot"],
        ["Ach_09_Identify_Charon", "Bloodless Shadow"],
        ["Ach_13_Get_up_cistern", "Italian Plumber"],
        ["Ach_15_Intimidate_Pluto", "Psycho"],
        ["Ach_18_Strike", "Striker"],
        ["Ach_20_Underworld_statues", "Underworld Explorer"],
        ["Ach_21_Steal_5", "Kleptomaniac"],
        ["Ach_22_Mal_villa", "High Diver"],
        ["Ach_25_Boulders", "Nimble"],
        ["Ach_28_Hornets_death", "Allergic"],
        ["Ach_30_Perfect_ending", "The Oracle"],
        ["Ach_31_Callous", "Callous"]
    ];

    for (const [apiname, name] of hidden) {

        const achievement = theForgottenCity.achievements.find(a => a.apiname === apiname);

        assert.ok(achievement && achievement.name === name && achievement.description.length > 0, `${apiname} (${name}) should have a real curatorial description`);

    }

});
