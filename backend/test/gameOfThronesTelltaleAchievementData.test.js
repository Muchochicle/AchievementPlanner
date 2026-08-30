import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/game-of-thrones-telltale.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 330840 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("game-of-thrones-telltale");

test("getPlannerData('game-of-thrones-telltale') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for game-of-thrones-telltale");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Game of Thrones (Telltale) achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Game of Thrones (Telltale) achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Game of Thrones (Telltale) achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Long Road Ahead", "Complete Chapter 3 of Episode 1"],
        ["A Lord's Depute", "Complete Chapter 6 of Episode 1"],
        ["A Lord's Judgement", "Complete Chapter 5 of Episode 1"],
        ["A Lord's Reception", "Complete Chapter 7 of Episode 1"],
        ["A Ransom's Reward", "Complete Chapter 1 of Episode 2"],
        ["As High as Honor", "Complete Chapter 5 of Episode 5"],
        ["Brothers", "Complete Chapter 2 of Episode 3"],
        ["Castellan", "Complete Episode 4."],
        ["Defiance or Diplomacy?", "Complete Chapter 4 of Episode 1"],
        ["Ever Vigilant", "Complete Chapter 5 of Episode 4"],
        ["Family, Duty, Honor", "Complete Chapter 7 of Episode 5"],
        ["Fight for Life", "Complete Chapter 2 of Episode 2"],
        ["Fire and Blood", "Complete Chapter 5 of Episode 6"],
        ["Garrisons", "Complete Chapter 3 of Episode 3"],
        ["Grand Maester", "Complete Episode 5"],
        ["Growing Strong", "Complete Chapter 3 of Episode 6"],
        ["Hear Me Roar!", "Complete Chapter 4 of Episode 6"],
        ["Here We Stand", "Complete Chapter 2 of Episode 5"],
        ["Honed and Ready", "Complete Chapter 4 of Episode 4"],
        ["Initiation Completed", "Complete Chapter 7 of Episode 2"],
        ["Intentions Known", "Complete Chapter 6 of Episode 3"],
        ["Iron from Ice", "Complete Chapter 7 of Episode 6"],
        ["Justice or Mercy?", "Complete Chapter 2 of Episode 1"],
        ["Knight", "Complete Episode 2"],
        ["Love and Hostility", "Complete Chapter 6 of Episode 2"],
        ["Master of Arms", "Complete Episode 3"],
        ["None so Wise", "Complete Chapter 2 of Episode 4"],
        ["Our Blades are Sharp", "Complete Chapter 2 of Episode 6"],
        ["Ours is the Fury", "Complete Chapter 1 of Episode 6"],
        ["Pride and Purpose", "Complete Chapter 3 of Episode 4"],
        ["Relief for the Parched", "Complete Chapter 5 of Episode 3"],
        ["Rendezvous", "Complete Chapter 4 of Episode 3"],
        ["Righteous in Wrath", "Complete Chapter 6 of Episode 4"],
        ["Sentinel", "Complete Episode 6"],
        ["Set Down Our Deeds", "Complete Chapter 1 of Episode 5"],
        ["Squire", "Complete Episode 1"],
        ["Storied Sights", "Complete Chapter 1 of Episode 3"],
        ["Strength of Mind", "Complete Chapter 4 of Episode 2"],
        ["The Old, the True, the Brave", "Complete Chapter 1 of Episode 4"],
        ["The Pressures of Family", "Complete Chapter 5 of Episode 2"],
        ["The Sun of Winter", "Complete Chapter 7 of Episode 4"],
        ["Through the Night", "Complete Chapter 1 of Episode 1"],
        ["Unbowed, Unbent, Unbroken", "Complete Chapter 6 of Episode 5"],
        ["Unfamiliar Faces", "Complete Chapter 3 of Episode 2"],
        ["We Do Not Sow", "Complete Chapter 4 of Episode 5"],
        ["We Light the Way", "Complete Chapter 3 of Episode 5"],
        ["Winter is Coming", "Complete Chapter 6 of Episode 6"],
        ["Your Grace", "Complete Chapter 7 of Episode 3"],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
