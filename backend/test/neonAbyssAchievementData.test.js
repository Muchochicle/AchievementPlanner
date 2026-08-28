import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/neon-abyss.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 788100 (fetched through this app's own services/steamApi.js) - 31 of
// 35 ship a real, official Steam description. The four hidden
// achievements (The Real Game, Acrobatic, Ultimate Challenge, Saturday
// Night Fever) are described publicly nowhere; their descriptions here
// are curatorial summaries cross-checked against Steam Community
// achievement guides. difficulty/estimatedTime remain curatorial
// judgments, same convention as every other planner difficulty/time
// field in this catalog.
const neonAbyss = getPlannerData("neon-abyss");

test("getPlannerData('neon-abyss') returns real planner data with 35 curated achievements", () => {

    assert.ok(neonAbyss, "expected real planner data for neon-abyss");
    assert.ok(Array.isArray(neonAbyss.achievements));
    assert.strictEqual(neonAbyss.achievements.length, 35);

});

test("every Neon Abyss achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = neonAbyss.achievements.map(a => a.id);
    const apinames = neonAbyss.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Neon Abyss achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of neonAbyss.achievements) {

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

test("every one of the 31 officially-described Neon Abyss achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 4 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["First Blood", "Death is another beginning."],
        ["Don't Panic", "Get killed by your bombs."],
        ["Sovereign of Eggs", "Get 50 eggs in a single run."],
        ["Mom's Love", "Successfully hatch eggs 5 times in a row."],
        ["Sad Eggs", "Failed to hatch eggs 5 times in a row."],
        ["Mind Your Steps", "Get killed by environment damage 9 times."],
        ["Grim Squad", "Unlock 6 Characters."],
        ["Hi Death!", "Died in the Abyss 99 times."],
        ["Demolition Expert", "Found 99 secret rooms."],
        ["Rugged Tenacity", "Acquire 8 heart containers in a single run."],
        ["Shields Up!", "Acquire 8 shields in a single run."],
        ["Abyss Veteran", "Entered the abyss for the 999th times."],
        ["First Light", "Defeat God of Darknet."],
        ["Natural Products", "Defeat God of Machines."],
        ["Stay Clam", "Defeat God of Violence."],
        ["Seek the Truth", "Defeat Goddess of Illusion."],
        ["Shutdown", "Defeat the God of Electricity."],
        ["Key Master", "Opened 999 locked chests."],
        ["Bug Squisher", "Stepped on worms 999 times."],
        ["Burning Ground", "Jumped 9999 times."],
        ["Piano Virtuoso", "Completes the Piano challenge 10 times."],
        ["Fishing Joy", "Fished 10 times in fishing room."],
        ["Dark trade", "Made deals with Smirk Co. 99 times."],
        ["Born Gambler", "Played the Roulette machine 99 times."],
        ["I believe I can fly", "Jump in the air for 10 times before landing."],
        ["Sherlock", "Found 5 secret rooms in a row."],
        ["Pro Gamer", "Defeat God of Machines without getting hurt."],
        ["Safety First", "Complete a run without getting hurt."],
        ["I'm Fine", "Complete a run without recovering any hearts."],
        ["Shopping Maniac", "Empty 4 shops in a single run."],
        ["Action Supremacist", "Defeat Argus without picking up any items."]
    ];

    assert.strictEqual(officialAchievements.length, 31, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "achi_d_12",
        "achi_a_03",
        "achi_d_08",
        "achi_d_16"
    ]);

    assert.strictEqual(hiddenApinames.size, 4, "sanity check - Neon Abyss has 4 hidden achievements");

    const dataPairs = neonAbyss.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the four hidden Neon Abyss achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["achi_d_12", "The Real Game"],
        ["achi_a_03", "Acrobatic"],
        ["achi_d_08", "Ultimate Challenge"],
        ["achi_d_16", "Saturday Night Fever"]
    ];

    assert.strictEqual(names.length, 4, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = neonAbyss.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
