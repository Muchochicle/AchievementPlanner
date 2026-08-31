import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-walking-dead-telltale-definitive-series.json - 23 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1449690 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-walking-dead-telltale-definitive-series");

test("getPlannerData('the-walking-dead-telltale-definitive-series') returns real planner data with 23 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-walking-dead-telltale-definitive-series");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 23);

});

test("every The Walking Dead: Telltale Definitive Series achievement has a unique id from 1 to 23 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 23 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 23);
    assert.strictEqual(new Set(apinames).size, 23);

});

test("every The Walking Dead: Telltale Definitive Series achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 23 The Walking Dead: Telltale Definitive Series achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All The Dead Lie Down", "Completed Season 2 Episode 5"],
        ["Beyond the Trees", "Completed Season 2 Episode 4"],
        ["Bloody Business", "Completed Season 3 Episode 2"],
        ["Defender", "Completed Season 4 Episode 2"],
        ["Everything's Going to be Okay", "Completed Season 1 Episode 1"],
        ["Eye of the Storm", "Completed Season 2 Episode 3"],
        ["Faces in the Crowd", "Completed Season 3 Episode 4"],
        ["Family Road Trip", "Completed Season 3 Episode 1"],
        ["Farewell", "Completed Michonne Episode 3"],
        ["It's not stealing if you need it", "Completed Season 1 Episode 2"],
        ["Landfall", "Completed Michonne Episode 1"],
        ["Leader", "Completed Season 4 Episode 3"],
        ["Lend Me Your Ears", "Completed Season 1 Episode 3"],
        ["Loose Ends", "Completed Season 1 Episode 6"],
        ["Penultimate", "Completed Season 1 Episode 4"],
        ["Protector", "Completed Season 4 Episode 1"],
        ["Quiet Time", "Completed Michonne Episode 2"],
        ["Reunion", "Completed Season 2 Episode 2"],
        ["Savior", "Completed Season 4 Episode 4"],
        ["Sole Survivors", "Completed Season 3 Episode 5"],
        ["Southern Hospitality", "Completed Season 3 Episode 3"],
        ["Split Decision", "Completed Season 2 Episode 1"],
        ["What Remains", "Completed Season 1 Episode 5"],
    ];

    assert.strictEqual(officialAchievements.length, 23, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
