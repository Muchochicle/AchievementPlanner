import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/backpack-hero.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1970580 (fetched through this app's own services/steamApi.js).
// 2 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("backpack-hero");

test("getPlannerData('backpack-hero') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for backpack-hero");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Backpack Hero achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Backpack Hero achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

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

test("every one of the 35 Backpack Hero achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Archer", "Carry at least 5 arrows"],
        ["Backpack Hero", "Defeat Disorder, Story Mode's final boss, to complete the story. Reaching Disorder needs finishing every character's Story Mode arc to level 9 first, then reaching level 9 with Purse in a Standard Run, which triggers the finale sequence and opens the door to the fight - a two-phase battle where phase 2 spawns fragments you must collect into your backpack rather than damage directly."],
        ["Bird Hero", "Unlock Satchel"],
        ["Builder", "Carry at least 5 structures"],
        ["CR-8 Hero", "Win a Quick Run as CR-8"],
        ["Cursed Run", "Carry at least 4 cursed items"],
        ["Deep Explorer", "Discover the Deep Caves"],
        ["Discoverer", "Discover at least 200 items"],
        ["Expert", "Discover at least 400 items"],
        ["Fully Armored", "Carry a helmet, clothing, two gloves, and footwear"],
        ["Glutton", "Carry at least 7 consumables"],
        ["Haggler", "Give a Tasty Fly to a merchant"],
        ["Hero", "Discover at least 700 items"],
        ["Mage", "Carry at least 5 manastones"],
        ["Multipurpose", "Wear a shoehat on your head and one on your feet at the same time"],
        ["Pochette Hero", "Win a Quick Run as Pochette"],
        ["Poison Stack", "Stack at least 50 poison"],
        ["Popular", "Attract at least 40 residents to Haversack Hill"],
        ["Porcupine Hero", "Unlock Pochette"],
        ["Prada's Locket", "Find Prada's Locket"],
        ["Purse Hero", "Win a Quick Run as Purse"],
        ["Quick Hero", "Win a Quick Run"],
        ["Resilient Town", "Progress Story Mode's main quest line until you build a home for Purse and her father - the village is raided on your next completed run afterward, and surviving that story-triggered raid unlocks the achievement automatically. It is marked secret to avoid spoiling the story beat, not because it is difficult."],
        ["Robotic Hero", "Unlock CR-8"],
        ["Satchel Hero", "Win a Quick Run as Satchel"],
        ["Shiv Master", "Carry at least 5 shivs"],
        ["Shivers", "Discover the Frozen Heart"],
        ["Status Master", "Have at least 5 status effects at the same time"],
        ["Swampland", "Discover the Enchanted Swamp"],
        ["Thorny", "Discover the Bramble"],
        ["Toad Hero", "Unlock Tote"],
        ["Toasty", "Discover the Magma Core"],
        ["Tote Hero", "Win a Quick Run as Tote"],
        ["Tough Times", "Win a Run in Hardmode"],
        ["Town Hall", "Unlock the Town Hall"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 2 hidden Backpack Hero achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Resilient Town", "Backpack Hero"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
