import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/split-fiction.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2001120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("split-fiction");

test("getPlannerData('split-fiction') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for split-fiction");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Split Fiction achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Split Fiction achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Split Fiction achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friendly Push", "Monkey strong"],
        ["Are We the Baddies?", "No worries, it's just a simulation"],
        ["BFF's", "Finally published"],
        ["Bookworms", "Complete all side stories"],
        ["Chair the Load", "Get off me..."],
        ["Cold Potato", "Complete the Gameshow without the bomb exploding"],
        ["Feed Me", "Take a snack"],
        ["Goin' Whole Hog", "Let it rip"],
        ["Huffing and Puffing", "It's not the big bad wolf you have to worry about"],
        ["Locked Up", "No way out"],
        ["One Bird, Three Stones", "You couldn't have known"],
        ["Potion Chef", "I need your strongest potions"],
        ["Robot Revolution", "Hasta la vista, baby"],
        ["Rose's Best Friend", "In Chapter 2, at the building with an elephant on top, Player 2 whips the elephant twice - once to rip off a leg, once to rip off an arm."],
        ["Sisters: A Tale Of Two Besties", "Relax on all 6 benches"],
        ["Snaaaaaaaaake", "In the Isolation story, while sneaking past the guards in the Prison Courtyard as Zoe, climb into the cardboard box (a Metal Gear reference)."],
        ["Tazed and Confused", "Adding insult to injury"],
        ["The Cake is Not a Lie", "In the Run and Gun section of Final Dawn, at the first vertical purple portal, take the hidden area on the left to find a cake (a Portal reference)."],
        ["We're Gonna Need a Bigger Boat", "Duuuun dun… duuuun dun…"],
        ["You Are Not a Robot", "Completely Automated Public Turing test to tell Computers and Humans Apart"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
