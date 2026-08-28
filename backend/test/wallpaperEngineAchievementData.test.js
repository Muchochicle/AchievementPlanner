import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wallpaper-engine.json - 17 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 431960 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 17 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("wallpaper-engine");

test("getPlannerData('wallpaper-engine') returns real planner data with 17 curated achievements", () => {

    assert.ok(game, "expected real planner data for wallpaper-engine");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 17);

});

test("every Wallpaper Engine achievement has a unique id from 1 to 17 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 17 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 17);
    assert.strictEqual(new Set(apinames).size, 17);

});

test("every Wallpaper Engine achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 17 Wallpaper Engine achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Creativity according to instructions", "Use a 2D scene template."],
        ["Fair collection", "Favorite 30 different Workshop wallpapers."],
        ["Found some good ones", "Favorite 20 different Workshop wallpapers."],
        ["Getting the hang of it", "Use 25 different wallpapers from the Workshop."],
        ["Hard to pick just one", "Use 50 different wallpapers from the Workshop."],
        ["High aspirations", "Post a scene wallpaper to the Workshop."],
        ["k0n4m1", "30 lives"],
        ["Keeping an eye on this one", "Favorite 10 different wallpapers from the Workshop."],
        ["Out of disk space", "Use 100 different wallpapers from the Workshop."],
        ["Pest", "Cause 1 fatal error or trigger 128 warnings in the editor."],
        ["Press any key", "Create a local application-type wallpaper."],
        ["Sharing is caring", "Post a Steam screenshot with a Workshop wallpaper open."],
        ["The internet on a disk", "Post a web wallpaper to the Workshop."],
        ["Trying something new", "Use 10 different wallpapers from the Workshop."],
        ["Video makers", "Post a video wallpaper to the Workshop."],
        ["Wallpaper Connoisseur", "Favorite 50 different Workshop wallpapers."],
        ["Working with 3D models", "Use a 3D scene template."],
    ];

    assert.strictEqual(officialAchievements.length, 17, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
