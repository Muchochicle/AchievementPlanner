import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/manor-lords.json - 11 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1363080 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 11 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("manor-lords");

test("getPlannerData('manor-lords') returns real planner data with 11 curated achievements", () => {

    assert.ok(game, "expected real planner data for manor-lords");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 11);

});

test("every Manor Lords achievement has a unique id from 1 to 11 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 11 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 11);
    assert.strictEqual(new Set(apinames).size, 11);

});

test("every Manor Lords achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 11 Manor Lords achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Challenge accepted", "Beat \"Restoring the peace\" on \"Challenging\" difficulty preset."],
        ["Cheerful Metropolis", "Reach 100% approval in a \"large town\"."],
        ["Defeat Hildebolt", "Defeat the baron in the \"Restoring the peace\" scenario."],
        ["For Whom the Bell Tolls", "Change the church bell sound."],
        ["Full Retinue", "Employ 24 retainers."],
        ["Mercenary Captain", "Beat \"Restoring the peace\" with Mercenary units only."],
        ["Restore the Peace", "Finish the \"Restoring the peace\" scenario"],
        ["Start the game", "Big success!"],
        ["Survive the first year", "Face the winter and have your settlers not abandon you."],
        ["The merchant", "Get to a \"small town\" settlement level without hunting or gathering berries."],
        ["The vigilantes", "Destroy a squad of brigands with a squad of militia in a non battle game mode."],
    ];

    assert.strictEqual(officialAchievements.length, 11, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
