import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/god-of-war.json - 37 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1593500 (fetched through this app's own services/steamApi.js) - 23 of
// 37 ship a real, official Steam description. The 14 hidden achievements
// are all automatic story-progression markers (apiname ACHIEVEMENT_1..13
// plus ACHIEVEMENT_28), summarised here only as story-point markers with
// no plot detail. difficulty/estimatedTime remain curatorial judgments,
// same convention as every other planner difficulty/time field.
const godOfWar = getPlannerData("god-of-war");

test("getPlannerData('god-of-war') returns real planner data with 37 curated achievements", () => {

    assert.ok(godOfWar, "expected real planner data for god-of-war");
    assert.ok(Array.isArray(godOfWar.achievements));
    assert.strictEqual(godOfWar.achievements.length, 37);

});

test("every God of War achievement has a unique id from 1 to 37 and a unique apiname", () => {

    const ids = godOfWar.achievements.map(a => a.id);
    const apinames = godOfWar.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 37);
    assert.strictEqual(new Set(apinames).size, 37);

});

test("every God of War achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of godOfWar.achievements) {

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

test("every one of the 23 officially-described God of War achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 14 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Father and Son", "Obtain all other achievements"],
        ["Trilingual", "Learn the languages of Muspelheim and Niflheim"],
        ["Dwarven Ingenuity", "Upgrade a piece of armor"],
        ["Nice Moves", "Obtain a Runic Attack Gem"],
        ["Iðunn’s Orchard", "Fully upgrade your Health"],
        ["Quick Tempered", "Fully upgrade your rage"],
        ["Best Dressed", "Craft an outfit for Atreus"],
        ["Enchanted", "Slot an Enchantment into your armor"],
        ["All Will Fall", "Kill 1,000 Enemies"],
        ["Dangerous Skies", "Free all of the Dragons"],
        ["Like Oil and Water", "Complete all of Brok and Sindri’s Favors"],
        ["Curator", "Collect all of the Artifacts"],
        ["Allfather Blinded", "Kill all of Odin’s Ravens"],
        ["The Best Moves", "Fully upgrade a Runic Attack"],
        ["Worthy", "Fully upgrade the Leviathan Axe"],
        ["Path of the Zealot", "Obtain Traveler armor set"],
        ["Primordial", "Obtain Ancient armor set"],
        ["Unfinished Business", "Assist all of the wayward spirits"],
        ["Treasure Hunter", "Use treasure maps to find all of the dig spots"],
        ["The Truth", "Read all of the Jötnar shrines"],
        ["Fire and Brimstone", "Complete all of the Trials of Muspelheim"],
        ["Darkness and Fog", "Retrieve all treasure from the Workshop’s center chamber"],
        ["Chooser of the Slain", "Defeat the nine Valkyries"]
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ACHIEVEMENT_1",
        "ACHIEVEMENT_2",
        "ACHIEVEMENT_3",
        "ACHIEVEMENT_4",
        "ACHIEVEMENT_5",
        "ACHIEVEMENT_6",
        "ACHIEVEMENT_7",
        "ACHIEVEMENT_8",
        "ACHIEVEMENT_9",
        "ACHIEVEMENT_10",
        "ACHIEVEMENT_11",
        "ACHIEVEMENT_12",
        "ACHIEVEMENT_13",
        "ACHIEVEMENT_28"
    ]);

    assert.strictEqual(hiddenApinames.size, 14, "sanity check - God of War has 14 hidden achievements");

    const dataPairs = godOfWar.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 14 hidden God of War achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ACHIEVEMENT_1", "The Journey Begins"],
        ["ACHIEVEMENT_2", "A New Friend"],
        ["ACHIEVEMENT_3", "Feels Like Home"],
        ["ACHIEVEMENT_4", "Dragon Slayer"],
        ["ACHIEVEMENT_5", "Troubling Consequences"],
        ["ACHIEVEMENT_6", "Hello, Old Friend"],
        ["ACHIEVEMENT_7", "Promise Fulfilled"],
        ["ACHIEVEMENT_8", "Round 2"],
        ["ACHIEVEMENT_9", "Past Haunts"],
        ["ACHIEVEMENT_10", "Twilight Beckons"],
        ["ACHIEVEMENT_11", "Last Wish"],
        ["ACHIEVEMENT_12", "Beneath the Surface"],
        ["ACHIEVEMENT_13", "Death Happened Here"],
        ["ACHIEVEMENT_28", "Why Fight It?"]
    ];

    assert.strictEqual(names.length, 14, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = godOfWar.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
