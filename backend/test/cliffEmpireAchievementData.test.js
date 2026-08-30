import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/cliff-empire.json - 42 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 895570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("cliff-empire");

test("getPlannerData('cliff-empire') returns real planner data with 42 curated achievements", () => {

    assert.ok(game, "expected real planner data for cliff-empire");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 42);

});

test("every Cliff Empire achievement has a unique id from 1 to 42 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 42 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 42);
    assert.strictEqual(new Set(apinames).size, 42);

});

test("every Cliff Empire achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 42 Cliff Empire achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10!", "Get 10 stars"],
        ["100!", "Get 100 stars"],
        ["105!", "Get 105 stars"],
        ["110!", "Get 110 stars"],
        ["115!", "Get 115 stars"],
        ["120!", "Get 120 stars"],
        ["125!", "Get 125 stars"],
        ["130!", "Get 130 stars"],
        ["135!", "Get 135 stars"],
        ["140!", "Get 140 stars"],
        ["145!", "Get 145 stars"],
        ["15!", "Get 15 stars"],
        ["150!", "Get 150 stars"],
        ["155!", "Get 155 stars"],
        ["160!", "Get 160 stars"],
        ["165!", "Get 165 stars"],
        ["170!", "Get 170 stars"],
        ["175!", "Get 175 stars"],
        ["180!", "Get 180 stars"],
        ["20!", "Get 20 stars"],
        ["25!", "Get 25 stars"],
        ["30!", "Get 30 stars"],
        ["35!", "Get 35 stars"],
        ["40!", "Get 40 stars"],
        ["45!", "Get 45 stars"],
        ["5!", "Get 5 stars"],
        ["50!", "Get 50 stars"],
        ["55!", "Get 55 stars"],
        ["60!", "Get 60 stars"],
        ["65!", "Get 65 stars"],
        ["70!", "Get 70 stars"],
        ["75!", "Get 75 stars"],
        ["80!", "Get 80 stars"],
        ["85!", "Get 85 stars"],
        ["90!", "Get 90 stars"],
        ["95!", "Get 95 stars"],
        ["Air threat", "Get hit by dragon"],
        ["Fire!", "Get burnt"],
        ["Hardcore", "Complete level on hardcore mode"],
        ["My land!", "Get hit by ogre"],
        ["Strike!", "Get stroked by lightning"],
        ["The End", "Complete all levels"],
    ];

    assert.strictEqual(officialAchievements.length, 42, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
