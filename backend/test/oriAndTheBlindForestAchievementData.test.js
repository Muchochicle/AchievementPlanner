import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ori-and-the-blind-forest.json - 50 real
// achievements sourced from a live ISteamUserStats/GetSchemaForGame/v2
// response for appid 261570 (fetched through this app's own
// services/steamApi.js) - every name, apiname, AND description here
// matches that response exactly; all 50 ship a real, non-hidden Steam
// description. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field in this
// catalog.
const ori = getPlannerData("ori-and-the-blind-forest");

test("getPlannerData('ori-and-the-blind-forest') returns real planner data with 50 curated achievements", () => {

    assert.ok(ori, "expected real planner data for ori-and-the-blind-forest");
    assert.ok(Array.isArray(ori.achievements));
    assert.strictEqual(ori.achievements.length, 50);

});

test("every Ori achievement has a unique id from 1 to 50 and a unique apiname", () => {

    const ids = ori.achievements.map(a => a.id);
    const apinames = ori.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 50 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 50);
    assert.strictEqual(new Set(apinames).size, 50);

});

test("every Ori achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of ori.achievements) {

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

test("every one of the 50 official Ori achievement name+description pairs is present, matching the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["The Journey Begins", "Complete the Prologue"],
        ["The Ancient Being", "Meet the Ancient Being"],
        ["Get Back Here!", "Discover the character in the shadows"],
        ["Let's be Friends", "Make an unexpected friend"],
        ["Rotten Inside", "Enter the Ginso Tree"],
        ["Run for Your Life", "Cleanse the Ginso Tree's Heart"],
        ["Close Call", "Escape a dangerous situation"],
        ["Obtaining Clarity", "Clear the haze from the Misty Woods"],
        ["Solid Ground", "Restore the winds of Nibel"],
        ["Fight to Live Another Day", "Have a close encounter"],
        ["Top of the world", "Climb to the top of Nibel"],
        ["Into the Fire", "Enter Mt. Horu"],
        ["Rekindle", "Fan the flames"],
        ["Love", "A beloved bond"],
        ["The Journey Ends", "Complete the game"],
        ["Life Saver", "Create 50 Soul Links"],
        ["Choices Choices", "Use your first ability point"],
        ["Soul Master", "Earn all Efficiency Skills in the Ability Tree"],
        ["Utility Master", "Earn all Utility Skills in the Ability Tree"],
        ["Combat Master", "Earn all Combat Skills in the Ability Tree"],
        ["Phenom", "Earn all skills in the Ability Tree"],
        ["So Many Secrets", "Find your first secret"],
        ["Seasoned Explorer", "Find 50% of all secrets"],
        ["No Stone Unturned", "Find all secrets"],
        ["Marking the way", "Restore your first Map Stone"],
        ["Halfway There", "Restore 50% of all Map Stones"],
        ["World at Your Feet", "Restore all Map Stones"],
        ["Good Eye", "Find the lost corridor in the Misty Woods"],
        ["Safe and Sound", "Save at every Spirit Portal"],
        ["Master of the Forest", "Visit 100% of the map"],
        ["Power Player", "Collect 200 Energy Shards"],
        ["Powerhouse", "Collect all Energy Cells"],
        ["Master Guardian", "Collect all Health Cells"],
        ["Deadly Detonation", "Kill 4 enemies simultaneously using Charge Flame."],
        ["Deadly Deflection", "Kill 25 enemies using Bash to reflect projectiles"],
        ["A New Path", "Break open 5 shortcuts using the Charge Flame"],
        ["Deadly Dash", "Kill 5 enemies with Charge Jump"],
        ["Juggle Master", "Juggle a rock 5 times without it hitting the ground"],
        ["Bash Master", "Bash off enemies 10 times in a row without touching the ground"],
        ["Deadly Dodge", "Trick 5 enemies into killing another enemy"],
        ["Flying Fury", "Kill 3 enemies without touching the ground"],
        ["Self Destruction", "Cause an enemy to destroy itself"],
        ["Crushing Blow", "Crush a Ram with a Stomper"],
        ["Stomp Master", "Kill 50 enemies with Stomp"],
        ["Blast Master", "Kill 100 enemies with Charge Flame"],
        ["Flame Master", "Kill 500 enemies with Spirit Flame"],
        ["Airborne", "Double Jump 5 times consecutively without touching the ground"],
        ["Supersonic", "Finish the game in under 3 hours"],
        ["Immortal", "Complete whole game without dying"],
        ["Elite", "Complete the whole game without using an Ability Point"]
    ];

    assert.strictEqual(officialAchievements.length, 50, "sanity check on this test's own reference list");

    const dataPairs = ori.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
