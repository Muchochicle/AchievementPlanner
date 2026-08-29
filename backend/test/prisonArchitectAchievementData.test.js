import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/prison-architect.json - 18 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 233450 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 18 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("prison-architect");

test("getPlannerData('prison-architect') returns real planner data with 18 curated achievements", () => {

    assert.ok(game, "expected real planner data for prison-architect");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 18);

});

test("every Prison Architect achievement has a unique id from 1 to 18 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 18 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 18);
    assert.strictEqual(new Set(apinames).size, 18);

});

test("every Prison Architect achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 18 Prison Architect achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["... It's What You Can Prove", "Unlocked all game bible pages"],
        ["Architect", "Shared a prison via Steam Workshop"],
        ["Confined", "Build a sandbox prison with 1000 prisoners"],
        ["Crowd Control", "Complete all optional objectives on Riot"],
        ["D.B. Cooper", "Sell your prison and make over $1,000,000 profit"],
        ["Don't Put Me In The Dark", "Executed a prisoner on death row"],
        ["Freedom", "Complete optional objective on Bootstraps"],
        ["Get Busy Living", "Achieve a re-offending rate of 25%"],
        ["I May Have Found A Way Out Of Here", "Escape from a decent prison in escape mode"],
        ["Iron Bars", "Build a sandbox prison with 500 prisoners"],
        ["It's Not What You Know...", "Unlocked all polaroids"],
        ["Reformation", "Complete all optional objectives on Conviction"],
        ["Samuel Norton", "Have a cashflow of $50,000 or more"],
        ["Spare The Rod", "Stopped a riot of 50 or more prisoners"],
        ["Stone Walls", "Build a sandbox prison with 100 prisoners"],
        ["Throw The Book At Them", "Complete the story"],
        ["Wait and Hope", "Unlock entire tech tree"],
        ["Warden", "Loaded a prison from Steam Workshop"],
    ];

    assert.strictEqual(officialAchievements.length, 18, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
