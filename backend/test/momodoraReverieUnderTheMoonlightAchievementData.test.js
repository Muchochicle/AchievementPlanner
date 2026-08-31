import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/momodora-reverie-under-the-moonlight.json - 9 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 428550 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("momodora-reverie-under-the-moonlight");

test("getPlannerData('momodora-reverie-under-the-moonlight') returns real planner data with 9 curated achievements", () => {

    assert.ok(game, "expected real planner data for momodora-reverie-under-the-moonlight");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 9);

});

test("every Momodora: Reverie Under the Moonlight achievement has a unique id from 1 to 9 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 9 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 9);
    assert.strictEqual(new Set(apinames).size, 9);

});

test("every Momodora: Reverie Under the Moonlight achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 9 Momodora: Reverie Under the Moonlight achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Bug Collector", "Find all Ivory Bugs and bring them to the bunny florist."],
        ["Don't even try this.", "Finish a playthrough on \"Insane\" difficulty."],
        ["Explorer", "Complete 100% of the map."],
        ["Faithful", "Defeat the secret boss Archpriestess Choir in Forlorn Monastery - bring a Soft Tissue (reached in cat form) and fight her on the same screen as the area's save bell."],
        ["Healthy!", "Find all Vitality Fragments."],
        ["Imperishable", "Finish a playthrough without dying."],
        ["P-pleasegiveittome!", "Give the Dirty Shroom (found by the Subterranean Grave save point, reached in cat form through the small crawlspace) to the imp girl in that room."],
        ["Pacifist", "Finish a playthrough without killing any common enemies."],
        ["True Ending", "Reach the true ending: use Sealed Wind on the Karst City windmill to open the hidden passage, enter it in cat form to upgrade your charm, and defeat the final boss with the upgrade equipped."],
    ];

    assert.strictEqual(officialAchievements.length, 9, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
