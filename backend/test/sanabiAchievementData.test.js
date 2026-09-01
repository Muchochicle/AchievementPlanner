import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sanabi.json - 21 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1562700 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sanabi");

test("getPlannerData('sanabi') returns real planner data with 21 curated achievements", () => {

    assert.ok(game, "expected real planner data for sanabi");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 21);

});

test("every SANABI achievement has a unique id from 1 to 21 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 21 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 21);
    assert.strictEqual(new Set(apinames).size, 21);

});

test("every SANABI achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 21 SANABI achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["An Ending Marks a New Start", "Cleared the Spin-Off episode."],
        ["City cleaning department", "Encountered a noisy giant mechanical worm."],
        ["Core Keeper", "Escaped from the core guardian."],
        ["Farewell", "Reach the true ending by finishing Chapter 5 (take the other Chapter 4 choice)."],
        ["Fishing", "You need a large bait for a large prey."],
        ["Government-Certified Living Weapon", "Nothing but ashes mark the path scorched by the monster that is you."],
        ["Hovering Hellfire", "Defeated the Firebird."],
        ["In the Factory King’s palace", "Escaped from the Overseer."],
        ["Mutiny", "Defeat Major Song at the end of Chapter 4."],
        ["Organizing Positions", "Had a deep discussion with Mari."],
        ["Pitiful hero", "Defeated Justice."],
        ["Prototype", "Defeated Recommendation of Execution."],
        ["Special Forces Cat", "Received the kitty member’s recognition."],
        ["Supernatural Phenomena", "Defeated the Bulgasal."],
        ["Taking the lead", "Beat Major Song’s record."],
        ["The legend has returned", "The once legend, YOU have returned."],
        ["The unfolding truth", "Encountered every truth."],
        ["There is nowhere to run", "Roleplaying with your daughter is the most sacred duty."],
        ["Undeteriorating Skill", "Beat your own record."],
        ["What’s important is seeing this through to the end.", "Reach the bad ending - at the Chapter 4 ending choice, go right."],
        ["You should have seen who you were attacking", "Defeat Kang Seon."],
    ];

    assert.strictEqual(officialAchievements.length, 21, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
