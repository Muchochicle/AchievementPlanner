import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/age-of-empires-1-de.json - 44 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1017900 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 44 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("age-of-empires-1-de");

test("getPlannerData('age-of-empires-1-de') returns real planner data with 44 curated achievements", () => {

    assert.ok(game, "expected real planner data for age-of-empires-1-de");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 44);

});

test("every Age of Empires: Definitive Edition achievement has a unique id from 1 to 44 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 44 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 44);
    assert.strictEqual(new Set(apinames).size, 44);

});

test("every Age of Empires: Definitive Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 44 Age of Empires: Definitive Edition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["21st Century", "Train 21 Centurions"],
        ["Archimedes", "Researched every technology available in a single game"],
        ["Artemis", "Hunt 250 animals"],
        ["Assassin", "Defeated 20 heroes"],
        ["Atlas", "Explore all areas of a single map"],
        ["Axe To Grind", "Train 400 Axemen"],
        ["Big In Japan", "Complete the Yamato Empire of the Rising Sun campaign"],
        ["Coinage", "Collected 50,000 gold"],
        ["Cute Cats", "Build 500 heavy catapults"],
        ["Dancing Chariots", "Train 400 Assyrian Chariot Archers"],
        ["Epic", "Complete the Glory of Greece campaign"],
        ["Eye in the sky", "Win a random map without training any archery units"],
        ["Eye of Horus", "Convert 20 units with Egyptian Priests"],
        ["Feet on the ground", "Win a random map game without training any cavalry"],
        ["Heracles", "Defeat a Lion (Alpha)"],
        ["Hittite Baby One More Time", "Complete the Reign of the Hittites campaign"],
        ["Homes?", "Build 500 houses"],
        ["Hun, is that you?", "Destroy 200 temples"],
        ["Imperial Peace", "Complete the Imperium Romana campaign"],
        ["Losing Your Religion", "Convert an enemy Priest"],
        ["Marvelous", "Won a game by building and holding a wonder"],
        ["Minoan Compies", "Train 100 Minoan Composite Bowman"],
        ["Not that I'm keeping count…", "Defeat 1000 enemy units"],
        ["Parthian Shot", "Train 500 Horse Archers"],
        ["Pegasus", "Advanced first to every age"],
        ["Pepperoni Pizza", "Collected 50,000 food"],
        ["Perseus", "Killed a Medusa"],
        ["Pharaoh", "Complete the Ascent of Egypt learning campaign"],
        ["Punic Attack", "Complete the First Punic War campaign"],
        ["Quarry", "Collected 50,000 stone"],
        ["Res Publica", "Won a ranked Elo game."],
        ["Rise And Wall", "Build 789 Shang wall segments"],
        ["Roma Victrix", "Complete the Rise of Rome campaign"],
        ["Ruin Them All", "Won a game by holding ruins"],
        ["Scytheseeing", "Train 100 Egyptian Scythe Chariots"],
        ["Smoking Ziggurats", "Complete the Voices of Babylon campaign"],
        ["State Of The Artifact", "Won a game by holding all the artifacts"],
        ["Syntagma", "Train 256 Macedonian Hoplites"],
        ["The Choson Ones", "Create 1000 Choson Legions"],
        ["The Elephant In The Rome", "Complete the Enemies of Rome campaign"],
        ["Towers of Babel", "Build 50 Babylonian Towers"],
        ["Veni, Vidi, Vici", "Complete the Ave Caesar campaign"],
        ["Wololo", "Convert 1000 units"],
        ["WoodStock", "Collected 50,000 wood"],
    ];

    assert.strictEqual(officialAchievements.length, 44, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});
