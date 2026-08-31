import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/patricks-parabox.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1260520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("patricks-parabox");

test("getPlannerData('patricks-parabox') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for patricks-parabox");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Patrick's Parabox achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Patrick's Parabox achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Patrick's Parabox achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["200 solved", "Solve 200 puzzles"],
        ["Alternate universes", "Solve all non-challenge puzzles in the appendix area"],
        ["Bottom of the rabbit hole", "Reach the end"],
        ["Challenge puzzle", "Solve a red challenge puzzle"],
        ["Cycle", "Cause a cycle"],
        ["Double", "Reach the puzzle 'Clone 1' - the first puzzle in the box-cloning area."],
        ["Epsilon", "Cause another paradox"],
        ["Even", "Solve the Even side puzzles"],
        ["Friend", "Solve the Friend side puzzles"],
        ["Infinity", "Cause a paradox"],
        ["Inverse", "Reach the puzzle 'Flip 3' in the flip-mechanic area."],
        ["Level select select", "Use the area select in the hub"],
        ["Oblong", "Solve the Oblong side puzzles"],
        ["Oh dear", "Reach the puzzle 'Player 18'."],
        ["One", "Solve the One side puzzles"],
        ["Paradox paradox", "Cause a chain of paradoxes"],
        ["Perfect Parabox", "Solve all puzzles"],
        ["Push against yourself", "Reach the puzzle 'Clone 6' in the box-cloning area."],
        ["Recurse", "Experience recursion"],
        ["Side puzzle", "Solve a blue side puzzle"],
        ["Solid", "Reach the puzzle 'Wall 1' - the first puzzle in the solid-box area."],
        ["Tidy", "Solve all puzzles in 4 different areas"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
