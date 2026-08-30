import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/people-playground.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1118200 (fetched through this app's own services/steamApi.js).
// 4 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("people-playground");

test("getPlannerData('people-playground') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for people-playground");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every People Playground achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every People Playground achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 People Playground achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Black hole", "Create a black hole"],
        ["Creator", "Spawn 1000 items"],
        ["Extinction", "Kill a million people"],
        ["Faraday malfunction", "On the Tower map, spawn a Jukebox and a Metal Pole, place the Metal Pole directly on top of the Jukebox, and connect the two with a wire so the Jukebox's signal reaches the pole."],
        ["Genocide", "Kill 10k people"],
        ["Guardian EMP", "Save a human from a sticky grenade by activating an EMP right before it's too late"],
        ["Inverse teleportation", "Build the \"Inverse Teleportation\" contraption and use it to obtain the Normal Sized Gun."],
        ["Mass murderer", "Kill 100 people"],
        ["Massacre", "Kill 1000 people"],
        ["Murderer", "Kill a person"],
        ["My insides hurt", "Detonate an organism filled with an explosive liquid"],
        ["Pacifist", "Spend a full hour in a single session without killing anything and without going idle (no input) for more than 5 minutes at a stretch."],
        ["Potion seller", "Create exotic liquid"],
        ["Radiant", "Inject a radioactive substance into the bloodstream of a human"],
        ["Serial killer", "Kill at least three people"],
        ["Uncharted territory", "Build the Poortvormer contraption and use it to enter the secret map hidden behind it."],
        ["Volume unclamped", "Use the jukebox to burst heads"],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 4 hidden People Playground achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Pacifist", "Uncharted territory", "Faraday malfunction", "Inverse teleportation"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
