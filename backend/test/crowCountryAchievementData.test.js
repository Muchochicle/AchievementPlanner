import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/crow-country.json - 15 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1996010 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("crow-country");

test("getPlannerData('crow-country') returns real planner data with 15 curated achievements", () => {

    assert.ok(game, "expected real planner data for crow-country");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 15);

});

test("every Crow Country achievement has a unique id from 1 to 15 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 15 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 15);
    assert.strictEqual(new Set(apinames).size, 15);

});

test("every Crow Country achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 15 Crow Country achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Rank", "Complete the game with an A rank or higher."],
        ["B Rank", "Complete the game with a B rank or higher (rank is driven mainly by how few heals you use)."],
        ["Checking in on a friend", "Talk to Arthur when he's waiting in the car"],
        ["Complete", "Complete the Game"],
        ["Flamethrower", "Find the flamethrower"],
        ["Magnum Revolver", "Find the magnum revolver"],
        ["Med Kit Pro", "Upgrade the potency of the med kits"],
        ["Quizmaster", "Get a score of 5 or more on the Mermaid Quiz arcade game"],
        ["Running Shoes", "Find the secret running shoes"],
        ["S Rank", "Complete the game with an S rank - needs all 15 secrets and very few heals; easier with Extra Lives disabled and on Survival Mode. Unlocks the Crow Wings."],
        ["Secret Hunter", "Find all 15 hidden secrets scattered around Crow Country."],
        ["Secret Map", "Find the secrets map"],
        ["Shotgun", "Find the shotgun"],
        ["Thorough", "Defeat all four optional mini-bosses - the fourth appears when you try to leave, and must be beaten."],
        ["Wishes Granted", "Upgrade all four weapons (one flamethrower-range upgrade needs the code CAGE on the Haunted Manor piano to open a painting)."],
    ];

    assert.strictEqual(officialAchievements.length, 15, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
