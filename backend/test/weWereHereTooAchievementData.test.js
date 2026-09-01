import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/we-were-here-too.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 677160 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("we-were-here-too");

test("getPlannerData('we-were-here-too') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for we-were-here-too");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every We Were Here Too achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every We Were Here Too achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 We Were Here Too achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Another way..", "Reach the secret third ending ('Another way..')."],
        ["Ascending Acuity", "Assisted in escaping the Dark Stairwell"],
        ["Astriction Constriction", "Escaped the Royal Promenade"],
        ["Big Hit", "Escape from the Royal Tomb"],
        ["Conundrum Comrades", "Invite a friend who is good at solving puzzles!"],
        ["Esoteric Etymology", "Assisted in escaping the Ritual Chamber"],
        ["Gordian Knight", "Assisted in escaping the Battlefield"],
        ["Layer Illustrator", "Succesfully installed Windows"],
        ["Maze Jogger", "Escaped the Arena"],
        ["Medium-Rare", "Assisted in escaping the Incinerator"],
        ["Occultist Culling", "Escape from the Ritual Chamber"],
        ["Parallel Peril", "Escaped the Battlefield"],
        ["Payline", "Escape from the Crypts"],
        ["Relation Elevation", "Was this sacrifice neccessary?"],
        ["Step by Step", "Escape from the Dark Stairwell"],
        ["The Joy of Puzzling", "Assisted in installing Windows"],
        ["The Pointy End", "Assisted in escaping the Royal Promenade"],
        ["The Runner Games", "Assisted in escaping the Arena"],
        ["Too Hot To Handle", "Escaped the Incinerator"],
        ["Ups and Downs", "Was there another way?"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
