import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rusty-lake-hotel.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 435120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("rusty-lake-hotel");

test("getPlannerData('rusty-lake-hotel') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for rusty-lake-hotel");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every Rusty Lake Hotel achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every Rusty Lake Hotel achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 Rusty Lake Hotel achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Albert's Way ", "Mr. Deer - 4"],
        ["Blackberries", "Mrs. Pigeon - 3"],
        ["Boar Ribs", "Mr. Boar - 1"],
        ["Can't catch me!", "Mrs. Pigeon - 4"],
        ["Carrot", "Mr. Rabbit - 2"],
        ["Deer Meat", "Mr. Deer - 1"],
        ["Just Hanging", "Mr. Owl - 2"],
        ["Mushrooms", "Mr. Deer - 2"],
        ["Need a hand?", "Ms. Pheasant - 4"],
        ["Pheasant Breast", "Ms. Pheasant - 1"],
        ["Pigeon Wing", "Mrs. Pigeon - 1"],
        ["Potatoes", "Mrs. Pigeon - 2"],
        ["Rabbit Leg", "Mr. Rabbit - 1"],
        ["Red Wine", "Mr. Boar - 2"],
        ["Rosemary", "Mr. Deer - 3"],
        ["Secret Rusty Lake Specialty", "Mr. Owl - 1"],
        ["The Elevator", "Mr. Owl - 3"],
        ["Thyme", "Ms. Pheasant - 3"],
        ["Tomatoes", "Mr. Boar - 3"],
        ["Watch Closely!", "Mr. Rabbit - 4"],
        ["White Beans", "Mr. Rabbit - 3"],
        ["White Wine", "Ms. Pheasant - 2"],
        ["You know what to do!", "Mr. Boar - 4"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
