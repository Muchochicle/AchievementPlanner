import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-crew-2.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 646910 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-crew-2");

test("getPlannerData('the-crew-2') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-crew-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every The Crew 2 achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every The Crew 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 The Crew 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Act Like a Game Designer", "Redo the same event at least 3 times in a row"],
        ["Act like a Narrative Designer", "Unlock all the pieces and watch a full narrative reward"],
        ["Act Like an Art Director", "Take a picture outside of any photo op just for fun, because it looks good"],
        ["Are you a God? (Say yes)", "Earn enough followers to reach Icon 50 level"],
        ["BFF", "Drive 50 KM in a row in a crew"],
        ["Binge Watching", "Complete the full season of the Live Xtrem Series"],
        ["Coast to Coast", "Complete the New York Hypercar event"],
        ["Creative Thinker", "Beat Sofia, the Freestyle queen"],
        ["Double Down", "Beat Tucker Morgan, the Offroad  champ"],
        ["Drift Like a Tester", "Score 100.000 PTS or more in any drift event"],
        ["Easy Rider", "Earn 500 Followers through stunts in Freedrive"],
        ["Epic Win", "Upgrade your vehicle with epic parts only"],
        ["First Autograph", "Earn enough followers to reach Popular level"],
        ["Ghost Bustin' 2", "Beat a rival or a friend’s ghost"],
        ["Hard way to hell", "Complete an event on hard difficulty"],
        ["I Must Break You", "Beat a friend's highlight (best score of a friend)"],
        ["Jack of all trades", "Complete one Event in each discipline (Main Game)"],
        ["Leap of Faith, No Straw", "Do a 100 meter jump on a bike"],
        ["Master of the Line", "Beat Clarence Bishop the Third, the Pro Racing heir"],
        ["Max Out Fury Load", "Reach Max Level for One of your Vehicles (Main Game)"],
        ["Paint Don't Hurt", "Change the color of one vehicle in your home"],
        ["Pics or it didn’t Happen", "Complete 40 Photo Ops"],
        ["Press Conference", "Earn enough followers to reach Famous level"],
        ["Reality Check", "You’ve spent 24 whole hours in our virtual world. We thought you should know."],
        ["Ride the Jewels", "Drive more than 2km in a row with the most expensive car (Main Game)"],
        ["Rising Star", "Earn enough followers to reach Star level"],
        ["Ruler of the Streets", "Beat Tio Marquez, The Street Racing king"],
        ["Social Butterfly", "Complete an event while in a crew"],
        ["That's a Wrap!", "Complete The Grand Finale"],
        ["The Collector", "Own 30 different vehicles"],
        ["The End is Nigh", "Go to the far edge of the world"],
        ["The Man, the Myth, the Legend", "Earn enough followers to reach Icon level"],
        ["Virtuoso", "Complete each skill type (Main Game)"],
        ["Welcome to MotorNation", "This time we'll be generous! You have completed the 1st Episode of the Live Xtrem Series."],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
