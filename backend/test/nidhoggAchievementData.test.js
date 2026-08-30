import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nidhogg.json - 12 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 94400 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 12 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("nidhogg");

test("getPlannerData('nidhogg') returns real planner data with 12 curated achievements", () => {

    assert.ok(game, "expected real planner data for nidhogg");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 12);

});

test("every Nidhogg achievement has a unique id from 1 to 12 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 12 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 12);
    assert.strictEqual(new Set(apinames).size, 12);

});

test("every Nidhogg achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 12 Nidhogg achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["BLOODLUST", "100 total kills in one match"],
        ["COMEBACK KID", "Get eaten by the nidhogg after nearly allowing your opponent to do the same"],
        ["FLESH AND BLOOD", "Beat the singleplayer game"],
        ["GTD", "Finish an 8 player tournament"],
        ["HOGGLIKE", "Dominate every level in one singleplayer game"],
        ["MEMORIES", "Trap your opponent on your sword for a long time while moving it up and down"],
        ["NSA", "Intelligence gathered"],
        ["PERFECT STRIDE", "Win the faceoff and never lose the arrow in a singleplayer match"],
        ["PROMETHEUS", "Run across your final screen in the castle with your sword cocked the whole time"],
        ["SLOW PLAYED", "Let the timer run out in your opponent's last screen and win in sudden death"],
        ["TRAPPED IN DONKEYSPACE", "play a match lasting longer than 20 minutes"],
        ["VALKYRIE", "Win 100 games through matchmaking"],
    ];

    assert.strictEqual(officialAchievements.length, 12, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
