import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nubbys-number-factory.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 3191030 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("nubbys-number-factory");

test("getPlannerData('nubbys-number-factory') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for nubbys-number-factory");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every Nubby's Number Factory achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Nubby's Number Factory achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 Nubby's Number Factory achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Attention Span Issue", "Skip the main tutorial"],
        ["Dopamine Depletion", "Reach round 300 in endless mode while playing on any supervisor."],
        ["Item Skin Maniac", "Unlock all item skins"],
        ["Nubby Adept", "Beat Nubby Trials level 1"],
        ["Nubby Expert", "Beat Nubby Trials level 3"],
        ["Nubby Prodigy", "Beat Nubby Trials level 4"],
        ["Nubby Professional", "Beat Nubby Trials level 2"],
        ["Nubby Skin Maniac", "Unlock all nubby skins"],
        ["Nubmaster", "Beat Nubby Trials level 5"],
        ["Number Factory CEO", "Beat all Nubby Trials levels and all other challenges"],
        ["The Big One", "Get a 10,000x restock"],
        ["Tons of Tonys", "Unlock all supervisors"],
        ["Tony Slayer", "Beat the game at least once on every supervisor"],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
