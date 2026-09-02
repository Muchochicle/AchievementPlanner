import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/duck-detective-the-ghost-of-glamping.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2714620 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("duck-detective-the-ghost-of-glamping");

test("getPlannerData('duck-detective-the-ghost-of-glamping') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for duck-detective-the-ghost-of-glamping");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Duck Detective: The Ghost of Glamping achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Duck Detective: The Ghost of Glamping achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Duck Detective: The Ghost of Glamping achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Profound Waste of Time", "Kick the beachball into the VIP area"],
        ["An Ugly Mistress", "Solve the mystery"],
        ["Bird Brain Brilliance", "Solve 10 deducktions"],
        ["Duck to Water", "Take a dip in the jacuzzi"],
        ["Elementary, my dear Frederson", "Solve 5 deducktions"],
        ["Feather Fingers", "Unlock the camouflage bag"],
        ["Judgemental", "Complete 5 inspections"],
        ["Kicking bins, and taking names", "Fill out all suspects' names"],
        ["Scaredy Croc", "Enter the sanatorium"],
        ["Scream Therapy", "Quack"],
        ["Warming Up", "Solve a deducktion"],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
