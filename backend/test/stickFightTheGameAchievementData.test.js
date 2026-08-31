import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/stick-fight-the-game.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 674940 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("stick-fight-the-game");

test("getPlannerData('stick-fight-the-game') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for stick-fight-the-game");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Stick Fight: The Game achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Stick Fight: The Game achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Stick Fight: The Game achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["4d Stickmen", "Win on a match where a black hole appears"],
        ["A poultry meal", "99 total kills"],
        ["Ace", "Kill 3 other players in one round"],
        ["Bounce", "Kill an opponent with the last bounce of the bullet of the bounce weapon"],
        ["Bzuhzzzzzzzuhzzzzzuhzzzz", "Pick up a Light-sabre"],
        ["Conqueror", "Win on every level"],
        ["Dominating", "Kill 6 in a row without dying"],
        ["Double Kill", "Kill 2 other players within a short amount of time"],
        ["Explorer", "Finish a round on each map of the game"],
        ["Genocide", "Kill 8 in a row without dying"],
        ["Godlike", "Kill 9 in a row without dying"],
        ["Headshot", "Headshot"],
        ["Ice Age", "Win the round after all ice is destroyed on an ice-level"],
        ["Killing Spree", "Kill 4 in a row without dying"],
        ["Rampage", "Kill 5 in a row without dying"],
        ["Ricochet", "Win by reflecting a bullet with the block"],
        ["Riposte", "Block your opponent then immediately kill them with fists"],
        ["Royal Ace", "kill 3 other players in one round without taking damage"],
        ["Snake", "Get killed by a snake"],
        ["Stick Irvin", "Become the target of a snake and survive the round"],
        ["Triple Kill", "Kill 3 other players within a short amount of time"],
        ["Unstoppable", "Kill 7 in a row without dying"],
        ["Walkover", "Win a round by every opponent falling off the map"],
        ["White Death", "77 sniper kills"],
        ["Wicked Stick", "Kill 10 in a row without dying"],
        ["Xiao Xiao", "All other achievements"],
        ["Your kung fu is strong", "Kill an opponent with a mid air kick"],
        ["мигающий кинжал", "Win a round by killing 3 opponents using the blink dagger"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
