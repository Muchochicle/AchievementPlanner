import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/bopl-battle.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1686940 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("bopl-battle");

test("getPlannerData('bopl-battle') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for bopl-battle");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Bopl Battle achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Bopl Battle achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Bopl Battle achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["2 birds 1 stone", "Get 2 kills with 1 use of Rock"],
        ["Begun, the blink war has", "Play a game where everyone only picked blink guns"],
        ["Better luck next time, Jakob!", "Win a game against a player with 3 dashes"],
        ["Big brain", "Win a game with no offensive abilities"],
        ["BOOOOOMMM!", "create 10 consecutive smoke explosions"],
        ["Boring master", "Stay in Drill form for 10 seconds"],
        ["Built different", "Win a 1v3"],
        ["But my lord, there is no such force", "Clone yourself 16 times"],
        ["Crunchy!", "Eat another player"],
        ["Dominator", "Reach 100 wins"],
        ["Double!!", "Kill two players at once"],
        ["Embrace the chaos", "Play a game where every player selected only RANDOM"],
        ["GET IN MY BELLY!!", "Eat 3 slimes in a single round"],
        ["gg ez", "Win a game without doing anything"],
        ["I AM BECOME JAKOB, DESTROYER OF FUN", "Win a game with 3 Dashes"],
        ["I'm a big boy now", "Growth ray yourself"],
        ["LET'S FRICKIN' GOOOOO!!", "Clear the tutorial in less than 9 seconds"],
        ["Moonwalker", "Moonwalk like a boss"],
        ["NOICE", "Gust a grenade into a player"],
        ["Rocket science", "Get a kill with the \"Engine\" ability"],
        ["Scientist", "Create a white hole"],
        ["Sniper", "Land a long range arrow"],
        ["Totem pole!", "Build a tower of Macho-slime"],
        ["Triple!!", "Kill three players at once"],
        ["What happened there?", "Have a game end in a 4 player draw"],
        ["Whoops!", "Hold a grenade until it explodes"],
        ["World ender", "Create a very big black hole"],
        ["You're already dead.", "Get 2 kills right after a time stop has ended"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
