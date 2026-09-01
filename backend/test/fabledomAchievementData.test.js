import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fabledom.json - 22 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1651560 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("fabledom");

test("getPlannerData('fabledom') returns real planner data with 22 curated achievements", () => {

    assert.ok(game, "expected real planner data for fabledom");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 22);

});

test("every Fabledom achievement has a unique id from 1 to 22 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 22 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 22);
    assert.strictEqual(new Set(apinames).size, 22);

});

test("every Fabledom achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 22 Fabledom achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Advanced diplomat", "Complete a 4-star off-world mission"],
        ["Beautiful", "Get first place in a kingdom beauty contest"],
        ["Diplomat", "Complete an off-world mission"],
        ["Expansion", "Unlock all territories"],
        ["Feast animal", "Throw a feast"],
        ["Getting settled", "Reach a population of 100 fablings"],
        ["Heroic", "Have a hero join the kingdom"],
        ["Impossible kingdom", "Get to 300+ fablings on Cruel difficulty (or higher)"],
        ["Impressive kingdom", "Get to 300+ fablings on Challenge difficulty (or higher)"],
        ["Kingdom", "Get to 300+ fablings on Classic difficulty (or higher)"],
        ["Legend", "Get your hero to level 10"],
        ["Noble", "Build a Palace"],
        ["Popular", "Reach relationship “Friend” with all neighboring rulers"],
        ["Powerful", "Get first place in a kingdom military contest "],
        ["The bard prince", "Marry Ramone, the bard prince"],
        ["The dark knight", "Marry Sir Payne, the dark knight"],
        ["The harvest princess", "Marry Agnes, the harvest princess"],
        ["The merchant prince", "Marry Giovanni, the merchant prince"],
        ["The tinker princess", "Marry Farrah, the tinker princess"],
        ["The warrior princess", "Marry Winifred, the warrior princess"],
        ["Thriving", "Reach a population of 200 fablings"],
        ["Warming up", "Reach a population of 25 fablings"],
    ];

    assert.strictEqual(officialAchievements.length, 22, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
