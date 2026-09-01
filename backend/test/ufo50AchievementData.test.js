import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/ufo-50.json - 30 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1147860 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("ufo-50");

test("getPlannerData('ufo-50') returns real planner data with 30 curated achievements", () => {

    assert.ok(game, "expected real planner data for ufo-50");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 30);

});

test("every UFO 50 achievement has a unique id from 1 to 30 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 30 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 30);
    assert.strictEqual(new Set(apinames).size, 30);

});

test("every UFO 50 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 30 UFO 50 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["10 Cherry Disks", "Obtain 10 cherry disks on a single profile."],
        ["10 Gold Disks", "Beat 10 games on a single profile."],
        ["15 Cherry Disks", "Obtain 15 cherry disks on a single profile."],
        ["15 Gold Disks", "Beat 15 games on a single profile."],
        ["2 Cherry Disks", "Obtain 2 cherry disks on a single profile."],
        ["2 Gold Disks", "Beat 2 games on a single profile."],
        ["20 Cherry Disks", "Obtain 20 cherry disks on a single profile."],
        ["20 Gold Disks", "Beat 20 games on a single profile."],
        ["3 Cherry Disks", "Obtain 3 cherry disks on a single profile."],
        ["3 Gold Disks", "Beat 3 games on a single profile."],
        ["30 Cherry Disks", "Obtain 30 cherry disks on a single profile."],
        ["30 Gold Disks", "Beat 30 games on a single profile."],
        ["4 Cherry Disks", "Obtain 4 cherry disks on a single profile."],
        ["4 Gold Disks", "Beat 4 games on a single profile."],
        ["40 Cherry Disks", "Obtain 40 cherry disks on a single profile."],
        ["40 Gold Disks", "Beat 40 games on a single profile."],
        ["5 Cherry Disks", "Obtain 5 cherry disks on a single profile."],
        ["5 Gold Disks", "Beat 5 games on a single profile."],
        ["All You Can Eat", "Dust off all 50 disks on a single profile."],
        ["Arcade Ace", "Obtain a top 3 score on a high score board."],
        ["Cherry Pie", "Obtain 50 cherry disks on a single profile."],
        ["Master of Play", "Obtain all other achievements."],
        ["Points Potentate", "Obtain the top score on a high score board."],
        ["Pure Gold", "Beat all 50 games on a single profile."],
        ["Sampler", "Dust off 25 disks on a single profile."],
        ["Score Lord", "Enter your initials on a high score board."],
        ["Superuser", "Enter a valid code into the in-game Terminal (accessed from the Garden)."],
        ["Taste Test", "Dust off your first game disk."],
        ["The Road to Cherry", "Obtain your first cherry disk."],
        ["The Road to Gold", "Beat your first game."],
    ];

    assert.strictEqual(officialAchievements.length, 30, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
