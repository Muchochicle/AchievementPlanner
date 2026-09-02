import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wytchwood.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 729000 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("wytchwood");

test("getPlannerData('wytchwood') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for wytchwood");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every Wytchwood achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every Wytchwood achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 Wytchwood achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["First Things First", "Remember your contract with the Goat."],
        ["The Bear", "Collect the soul of the Bear in the Forest."],
        ["The Cat", "Collect the soul of the Cat in the Market."],
        ["The Fish", "Collect the soul of the Fish in the Docks."],
        ["The Goat", "Collect all twelve wicked souls to complete the Goat's contract."],
        ["The Hawk", "Collect the soul of the Hawk in the Fields."],
        ["The Hog", "Collect  the souls of the Hogs in the Market."],
        ["The Leech", "Collect the soul of the Leech in the Swamp."],
        ["The Ox", "Collect the Soul of the Ox in the Fields."],
        ["The Ram", "Collect the soul of the Ram in the Village."],
        ["The Rat", "Collect the soul of the Rat in the Graveyard."],
        ["The Snake", "Collect the soul of the Snake in the Forest."],
        ["The Stag", "Collect the soul of the Stag in the Mountains."],
        ["The Wolf", "Collect the soul of the Wolf in the Village."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
