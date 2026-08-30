import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/muck.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1625450 (fetched through this app's own services/steamApi.js).
// 1 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("muck");

test("getPlannerData('muck') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for muck");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Muck achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Muck achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Muck achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A gamer move", "Beat the game in less than 10 days on Gamer mode"],
        ["Architect", "Build 250 builds"],
        ["Big Mistake", "Play Muck for the first time"],
        ["Bullseye", "Kill 200 enemies using bows"],
        ["Caveman", "Beat the game using only a rock as your weapon / tool. This goes for all players."],
        ["Chief", "Defeat Chief"],
        ["David vs Goliath", "Defeat big chunk"],
        ["Death Wish", "Start 200 battle totems"],
        ["Dream Team", "Beat the game with 2 players, but no one can take any damage (Normal diff or harder)"],
        ["Easy Peasy", "Beat the game on easy difficulty"],
        ["Fearless", "Slay all bosses"],
        ["Go outside", "Survive for 100 days"],
        ["Goblin Slayer", "Slay 1000 goblins"],
        ["Gronk", "Defeat Gronk"],
        ["Guardian", "Defeat Guardian"],
        ["Hardcore gamer", "Beat the game on gamer difficulty"],
        ["I am Inevitable", "Collect all 5 gems"],
        ["Illegal work", "Craft 1,000 coins"],
        ["Irresistible", "Open Chiefs chest"],
        ["Learning the ropes", "Beat the game on normal difficulty"],
        ["Leg day", "Walk 250km"],
        ["Milkman", "Pick up 10 Milk powerups in one game"],
        ["Muck", "Beat the game using only a rock, taking no damage and using no powerups. This goes for all players in lobby. (Normal or harder)"],
        ["Muck off", "Die 50 Times"],
        ["Muck this game", "Die 100 Times"],
        ["Muckinator", "Kill 100 mobs"],
        ["Muckinator 2", "Kill 1,000 mobs"],
        ["Muckinator 3", "Kill 10,000 mobs"],
        ["Muckinator 4", "Kill 100,000 mobs"],
        ["Oh you don't know what Karlson is?", "Find Billy, a small robot with a \":)\" drawn on its TV-shaped head, hidden somewhere on the map, and press E while looking at him. Billy is a nod to the indie FPS prototype Karlson by the same developer community. On seed 931098003, walk south from spawn and check the ground on the minimap; on any other seed, turning off \"Show Grass\" in the Graphics settings makes him much easier to spot."],
        ["Pain and suffering", "Die 10 times"],
        ["Phoon", "Jump 10,000 times"],
        ["Public Enemy", "Kill 100 Woodmen"],
        ["Salty", "Kill a friend on Survival Mode"],
        ["Set sail", "Leave Muck"],
        ["Speedrunner", "Beat the game in less than 8 days"],
        ["Sweat and tears", "Beat the game with 8 players, but no one can take any damage (Normal diff or harder)"],
        ["Team player", "Revive a teammate"],
        ["That's not very milk of you, sir", "Kill 250 cows"],
        ["The Black Swordsman", "Wield the Night Blade"],
        ["The bois", "Beat the game with 4 players, but no one can take any damage (Normal diff or harder)"],
        ["The red plumber man lied", "Eat 50 red shrooms without growing bigger"],
        ["This is fine", "Die 25 times"],
        ["Treasure Hunter", "Open 500 chests"],
        ["Underdog", "Kill 250 buff mobs"],
        ["Untouchable", "Beat the game alone without taking any damage (Normal difficulty or harder)"],
        ["What the muck", "Beat the game without any players picking up a powerup"],
        ["You're a fish", "Swim 25km"],
        ["You're not a fish", "Drown"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 1 hidden Muck achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["Oh you don't know what Karlson is?"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
