import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/madison.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1670870 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("madison");

test("getPlannerData('madison') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for madison");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every MADiSON achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every MADiSON achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 32 MADiSON achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["500X Zoom", "Take 500 photos."],
        ["666", "Finish the game under 6 hrs."],
        ["Blinded", "Blind Blue Knees five times by taking a camera photo within a few metres of him as he approaches."],
        ["BLOODIOUS", "Make the four virgins cry."],
        ["Blue", "Find every blue collectible."],
        ["Blue Knees?", "Find the hidden message on the mirror."],
        ["Do not waste", "Complete the game taking 75 or fewer pictures."],
        ["Elizabeth's memoirs", "Find Elizabeth's diary lost page."],
        ["Extra pockets", "Store an item for the very first time."],
        ["Follow me", "Complete the tunnels section under 3 minutes."],
        ["Found it!", "Complete the shelves section under 5 minutes."],
        ["Fully loaded", "Reach Luca's storage limit."],
        ["Grandma was right", "Let Blue Knees catch and kill you during his section of the house."],
        ["Grandpa's tools", "Break the shovel."],
        ["He is here", "Let Hans catch and kill you in the 1951 church section - for example, by taking too long."],
        ["Hunger", "Survive through the entire Blue Knees section."],
        ["Lived to tell the tale", "Complete the game in hard mode or higher."],
        ["MAD SON", "Unlock every achievement of the game."],
        ["No more smiles, please", "Take 100 photos."],
        ["No time to die", "Survive through the entire Cathedral section."],
        ["Out of film", "Complete the game taking 40 or fewer pictures."],
        ["Professional photographer", "Find every collectible in the game."],
        ["Red", "Find every red collectible."],
        ["Say cheese!", "Take 50 photos."],
        ["The nightmare is over", "Complete the game."],
        ["The struggle within", "Finish the game under 2.5 hrs."],
        ["Welcome back", "Get back to the main house for the first time."],
        ["Welcome back, once again", "Get back to the main house a second time."],
        ["You are possessed", "Complete the game in possession mode."],
        ["You know what to do", "Find a collectible."],
        ["You shouldn't have listened", "Play the \"Do not listen\" tape."],
        ["You...", "Complete the mausoleum section under 5 minutes."],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
