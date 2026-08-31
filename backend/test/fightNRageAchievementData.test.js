import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fight-n-rage.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 674520 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("fight-n-rage");

test("getPlannerData('fight-n-rage') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for fight-n-rage");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Fight'N Rage achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Fight'N Rage achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Fight'N Rage achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Child's Play", "Finish the game at Easy Difficulty."],
        ["Complement Completionist", "Get All Complements."],
        ["Ending Completionist 100%", "Discover All the Endings."],
        ["Ending Completionist 25%", "Discover the 25% of the Endings."],
        ["Ending Completionist 50%", "Discover the 50% of the Endings."],
        ["F.Norris Completionist", "Get all F.Norris' Costumes."],
        ["Faster!", "Finish the game playing at any Extra Speed."],
        ["Gal Completionist", "Get all Gal's Costumes."],
        ["Good Enough", "Finish the game at Normal Difficulty."],
        ["Hardcore Player", "Finish the game at Hardest Difficulty."],
        ["Mastered F.Norris", "Get the F.Norris' Black Belt."],
        ["Mastered Gal", "Get the Gal's Black Belt."],
        ["Mastered Ricardo", "Get the Ricardo's Black Belt."],
        ["More Than Good", "Finish the game at Hard Difficulty."],
        ["One Credit Clear", "Finish the game without use continues at Normal Difficulty or Harder."],
        ["Recruiter", "Get All Characters."],
        ["Ricardo Completionist", "Get all Ricardo's Costumes."],
        ["Score Attack Master", "Get Rank S with All Characters at Score Attack Mode."],
        ["Survival Master", "Get Rank S with All Characters at Survival Mode."],
        ["Time Attack Master", "Get Rank S with All Characters at Time Attack Mode."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
