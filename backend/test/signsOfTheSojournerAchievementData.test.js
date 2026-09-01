import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/signs-of-the-sojourner.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1058690 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("signs-of-the-sojourner");

test("getPlannerData('signs-of-the-sojourner') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for signs-of-the-sojourner");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Signs of the Sojourner achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Signs of the Sojourner achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Signs of the Sojourner achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Home for Lars", "Help Lars find a new place to call home."],
        ["A Somber Day", "Attend a funeral."],
        ["Caravaneer", "Complete all caravan routes."],
        ["Pet the Dog", "Become BFFs with Thunder."],
        ["Play Matchmaker", "Introduce Mimi and Theo to each other."],
        ["Repair Oscar", "Help repair Oscar."],
        ["Reunite the Brothers", "Helps the twins reunite and find common ground again."],
        ["Ride off into the Sunset", "Reach the secret ending where you ride off into the sunset with Klaus."],
        ["Settle Down", "Reach the secret ending where you settle down with Oscar in the hills of Rimina."],
        ["Spark Revolution", "Reach the secret ending where you spark revolution alongside Tariq."],
        ["Visit Hara", "Discover the abandoned city of Hara."],
        ["Visit Persarrey", "Discover the coastal enclave of Persarrey."],
        ["Visit the Long Gate", "Discover the mysterious Long Gate."],
        ["Visit the Wave Dancer", "Discover the Wave Dancer."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
