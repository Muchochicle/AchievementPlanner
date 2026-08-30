import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/unravel-two.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1225570 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("unravel-two");

test("getPlannerData('unravel-two') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for unravel-two");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Unravel Two achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Unravel Two achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Unravel Two achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Absquatulate", "Earn the gold medal in Little frogs"],
        ["Airs and graces", "Travel between the two barrels in At the rapids without touching the water"],
        ["At the rapidest", "Earn the gold medal in At the rapids"],
        ["Be safe", "Complete Hideaway"],
        ["Better together", "Complete a level in co-op"],
        ["Bounce back", "Complete At the rapids"],
        ["Decorated", "Earn a medal for achieving a time or not dying on any level"],
        ["Don't conform", "Complete Little frogs"],
        ["Don't go with the flow", "Travel from the island with the tables back up to the lifebuoy in At the rapids"],
        ["Dry as a bone", "Complete At the rapids in one go without dying"],
        ["Fall apart", "Complete Ashes to ashes"],
        ["Falling with style", "Make it between the two moose signs in Ashes to ashes without using any directional inputs"],
        ["Fireproof", "Complete Ashes to ashes in one go without dying"],
        ["Flash fire", "Earn the gold medal in Ashes to ashes"],
        ["Flying fish", "Earn the gold medal in Nightswimming"],
        ["Get crushed", "Complete Is that all there is"],
        ["Go explore", "Complete Nightswimming"],
        ["Hard and fast", "Complete all of the bonus levels in under 45 minutes in one go"],
        ["Like clockwork", "Earn the gold medal in Is that all there is"],
        ["Live bait", "Survive 5 pike attacks in a row without using your lasso in the pike chase"],
        ["New threads", "Customise a character"],
        ["No spanner in the works", "Complete Is that all there is in one go without dying"],
        ["Off the hook", "Complete Nightswimming in one go without dying"],
        ["Party responsibly", "Complete Little frogs in one go without dying"],
        ["Rescuer", "Complete any bonus level"],
        ["Roof runner", "Earn the gold medal in Hideaway"],
        ["Safety rope", "Complete Hideaway in one go without dying"],
        ["Start anew", "Complete Foreign shore"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
