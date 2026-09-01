import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/beacon-pines.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1269640 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("beacon-pines");

test("getPlannerData('beacon-pines') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for beacon-pines");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Beacon Pines achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Beacon Pines achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Beacon Pines achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Charmed Life", "Find a Charm"],
        ["Agile Angler", "Catch all the \"fish\""],
        ["Born in a Barn", "Born in a Barn"],
        ["Close the Book", "Close the Book"],
        ["Melon Kicker", "Find a way to kick a melon"],
        ["Nerd!!!", "Poke around the library"],
        ["Play that Funky Music", "Watermelon Bongo"],
        ["Pop goes the Weasel", "At the Warehouse of Horrors Turning Point, choose STRUGGLE; later in Chapter 3, while still carrying Gran's jam-delivery basket, interact with the giant watermelon behind Griffin."],
        ["Riddle Me This", "Solve a Riddle"],
        ["The Big Chill", "Reach one of the story's Turning Point endings where Beacon Pines gets frozen over."],
        ["Yes Chef!", "Satisfy all customers in the cooking minigame."],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
