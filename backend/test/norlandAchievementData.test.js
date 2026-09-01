import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/norland.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1857090 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("norland");

test("getPlannerData('norland') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for norland");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Norland achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Norland achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Norland achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big City", "Reach a population of 100 people."],
        ["Big Library", "Collect 50 different books."],
        ["Blind Fury", "A blind lord must win a duel."],
        ["Commonwealth of Cultures", "Your noble family must have lords of all 4 cultures."],
        ["Cruel Tyrant", "Execute 25 innocent characters."],
        ["Dead Bishop", "Kill a bishop, for God's sake!"],
        ["Emperor", "Win the game by becoming the Emperor of Norland."],
        ["Family of Bastards", "Starting from day 20, all lords must be bastards."],
        ["Great Lord", "A lord must reach level 20 in three skills."],
        ["Great Scholar", "A lord must read 10 level 3 books."],
        ["Head of State", "Create your own kingdom or City Alliance."],
        ["Henry VIII", "The king must marry 6 wives and kill 2 of them."],
        ["Horde Hammer", "Defeat the Unholy Horde."],
        ["In the Name of Sophia", "Starting from day 20, all your peasants in the city are fanatics."],
        ["Lone Genius", "Become an emperor while playing only as one king."],
        ["Lone Hero", "Destroy a forest bandit camp with a single king."],
        ["Long Live the King", "Starting from day 20, all your peasants in the city are loyalists."],
        ["Long-liver", "Survive for 50 days."],
        ["Nectar Paradise", "Starting from day 20, all your peasants in the city are nectar addicts."],
        ["RUTABAGA!", "Collect 1000 Rutabagas."],
        ["Survivor with Scars", "Survive a smallpox epidemic."],
        ["Trader", "Earn 500 gold in a day from trade contracts."],
        ["Unlucky Hunter", "The king died while hunting."],
        ["Winner", "Win 10 battles."],
        ["Wolf Hammer", "Survive a wolf pack attack."],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
