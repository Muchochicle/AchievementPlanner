import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/gang-beasts.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 285900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("gang-beasts");

test("getPlannerData('gang-beasts') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for gang-beasts");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every Gang Beasts achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every Gang Beasts achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 19 Gang Beasts achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Big Head", "Concuss an enemy with a diving headbutt"],
        ["Bucket List", "Pass through the orange chute on the girders stage"],
        ["Buoy ‘o buoy", "Climb to the highest section of the buoy on the buoy stage"],
        ["Drop Kick", "Concuss an enemy with a diving kick"],
        ["Ground Floor", "Break the cables supporting an elevator without falling on the elevators stage"],
        ["Hang Tough", "Break the cables supporting a gondola without falling on the gondola stage"],
        ["In Transit", "Get inside a truck on the trucks stage"],
        ["Keep on Trucking", "Climb onto the roof of a truck on the trucks stage"],
        ["Long Haul", "Pass through three road signs on the trucks stage"],
        ["Roast Beef", "Escape from the incinerator hazard on the incinerator stage"],
        ["Safety Warning", "Escape from a grinder hazard on the grind stage"],
        ["Sea Legs", "Escape from the water on the buoy stage"],
        ["Self Storage", "Get inside a shipping container on the containers stage"],
        ["Short Wave", "Defeat an enemy wave in the waves game mode"],
        ["Shutout", "Win a game of soccer without the opposition scoring in the soccer game mode"],
        ["Sit Down", "Collide with the seating and the railings on the ring stage"],
        ["Special Delivery", "Break the cables supporting a container without falling on the containers stage"],
        ["Step Down", "Break the stairs on the towers stage"],
        ["Welcome to Beef City", "Customize a character on the character customization screen"],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
