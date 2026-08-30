import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/it-takes-two.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1426210 (fetched through this app's own services/steamApi.js).
// 2 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("it-takes-two");

test("getPlannerData('it-takes-two') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for it-takes-two");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every It Takes Two achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every It Takes Two achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 It Takes Two achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Daring Devil", "Put on a show and die trying."],
        ["Break the Bank", "Guess it was time to cash out."],
        ["Bug Sized Relaxation", "Release that tension at the root level."],
        ["Faraway Frequencies", "The truth was out there all along!"],
        ["Force Triangulated", "In the \"Gates Of Time\" section of the Cuckoo Clock chapter, take the boat waiting to the left of the small bridge, ride it through the door, then enter the small building on the dock. Just walking in unlocks the achievement; the jars inside break with a chime lifted straight from The Legend of Zelda."],
        ["Fried Friendship", "It takes two to… torture."],
        ["It Took Two", "You did it! CO-LLA-BO-RATION!"],
        ["Look At Him Go", "Shoot for the stars, literally."],
        ["Lost And Found", "Again? Keep track of your kids!"],
        ["Meditation Maestro", "You reached a higher state of mind. Or at least some peace and quiet."],
        ["Minigame Megalomania", "All minigames found!"],
        ["Mood Swing", "Took things a bit too far, didn't you?"],
        ["On Rails Experience", "Choo Choo!"],
        ["Plastic Prison Breakers", "In the Rose's Room \"Pillow Fort\" chapter, veer off the main path across the pillow platforms to find a hidden tunnel with a red-and-white polka-dot cushion. Inside is a secret jail cell holding two action-figure prisoners - Leo and Vincent, the two heroes of Hazelight's previous game A Way Out. Both players slam the two buttons at once to free them and pop the achievement."],
        ["Platforming Prodigy", "Helltower? More like hello-from-up-here-tower!"],
        ["Realize Your Art", "Isn't it pretty? That's going on the fridge."],
        ["Snackosaurus", "Now look who's extinct!"],
        ["Something Fishy", "Don't feed the animals! Or do, they're adorable."],
        ["Struck A Pose", "Self-inflicted paparazzi."],
        ["Terror Of The Seven Seas", "Scurvy! Ye look smashing, captain!"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 2 hidden It Takes Two achievements each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Plastic Prison Breakers", "Force Triangulated"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
