import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/metal-hellsinger.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1061910 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("metal-hellsinger");

test("getPlannerData('metal-hellsinger') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for metal-hellsinger");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Metal: Hellsinger achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Metal: Hellsinger achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Metal: Hellsinger achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Ain't No Mountain High Enough", "Destroyed the Red Judge aspect in Nihil"],
        ["Breaking the Law", "Destroyed the Red Judge aspect in Voke"],
        ["Dead and Buried", "Destroyed the Red Judge aspect in Gehenna"],
        ["For Whom the Bell Tolls", "Destroyed the Red Judge aspect in Acheron"],
        ["Heavy Metal Is the Law", "Completed a Torment"],
        ["Highway to Hell", "Got 666 kills (game total)"],
        ["If I Can Make It Here", "Destroyed the Red Judge aspect in Stygia"],
        ["Kill Your Demons", "Multi-killed 2 enemies"],
        ["Material Girl", "Obtained all weapons"],
        ["No Rest for the Wicked", "Completed all Torments"],
        ["Not Shaken, Nor Stirred", "Never hit off-beat in a Hell"],
        ["Pazifist", "Cleared a Hell using only Paz"],
        ["Piece of My Heart", "Died in a Chaos Crystal explosion"],
        ["Queen of the Underworld", "Killed 50 Behemoths"],
        ["Raining Blood", "Killed two Seraphs in one attack"],
        ["Rise, Rebel, Resist", "Destroyed the Red Judge aspect in Incaustis"],
        ["Smoke on the Water", "Destroyed the Red Judge aspect in Yhelm"],
        ["Soaring in the Deep", "Soared (Dash + jump) 100 times"],
        ["The Empress", "Killed 25 enemies while maintaining a Hit Streak"],
        ["The Ferrywoman", "Killed 8 enemies in 4 seconds"],
        ["The Sword is Sharper", "Killed a Judge's Aspect with Terminus"],
        ["This Pounding Heart", "Reached Hit Streak: 10"],
        ["This Pounding Heart II", "Reached Hit Streak: 20"],
        ["This Pounding Heart III", "Reached Hit Streak: 35"],
        ["This Pounding Heart IV", "Reached Hit Streak: 50"],
        ["Three of Pentacles", "Achieved the top result in a Torment"],
        ["When She Falleth", "Destroyed the Red Judge"],
        ["Who Wants to Live Forever", "Died 20 times"],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
