import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tales-from-the-borderlands.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 330830 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("tales-from-the-borderlands");

test("getPlannerData('tales-from-the-borderlands') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for tales-from-the-borderlands");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Tales from the Borderlands achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Tales from the Borderlands achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Tales from the Borderlands achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["…There You Are", "Completed Episode 4"],
        ["2 Fast 2 Fiona", "Completed Chapter 5 of Episode 1"],
        ["A Maze Of Twisty Passages, All Alike", "Completed Chapter 1 of Episode 5"],
        ["A Plan Came Together", "Completed Chapter 3 of Episode 2"],
        ["Ain't Got Time To Bleed", "Completed Chapter 1 of Episode 4"],
        ["Ain't My First Rodeo", "Completed Chapter 3 of Episode 4"],
        ["Alive And Not Afraid", "Completed Chapter 2 of Episode 4"],
        ["Angry Eyes", "Completed Episode 3"],
        ["Blood Money", "Completed Chapter 6 of Episode 1"],
        ["Bro or Bot", "Completed Chapter 6 of Episode 2"],
        ["Classic Reflexes", "Completed Chapter 5 of Episode 2"],
        ["Deal With A Ghost", "Completed Chapter 1 of Episode 2"],
        ["Definition Of Insanity", "Completed Chapter 4 of Episode 5"],
        ["Devil on Your Shoulder", "Completed Episode 1"],
        ["Don't Make Me Wait", "Completed Chapter 1 of Episode 3"],
        ["Funeral Crashers", "Completed Chapter 4 of Episode 2"],
        ["Give And Take (Mostly Take)", "Completed Chapter 3 of Episode 5"],
        ["It's Not The Years, It's The Mileage", "Completed Chapter 4 of Episode 4"],
        ["Light This Candle", "Completed Chapter 5 of Episode 4"],
        ["Maneater", "Completed Chapter 6 of Episode 3"],
        ["Miracle of Atlas Engineering", "Completed Episode 2"],
        ["My Turn To Speak", "Completed Chapter 2 of Episode 1"],
        ["No Matter Where You Go…", "Completed Chapter 6 of Episode 4"],
        ["Not Alone in the Dark", "Completed Chapter 4 of Episode 1"],
        ["Partners In Crime", "Completed Chapter 3 of Episode 1"],
        ["Point Of No Return", "Completed Chapter 3 of Episode 3"],
        ["Rupture", "Completed Chapter 5 of Episode 3"],
        ["So Many Bandits, So Little Time", "Completed Chapter 4 of Episode 3"],
        ["Tales Twice Told", "Completed Episode 5"],
        ["Temptation", "Completed Chapter 2 of Episode 3"],
        ["Till Death Do Us Part", "Completed Chapter 2 of Episode 2"],
        ["Time's A Wastin'", "Completed Chapter 5 of Episode 5"],
        ["Unforseen Consequences", "Completed Chapter 2 of Episode 5"],
        ["Welcome to Pandora, Kiddos", "Completed Chapter 1 of Episode 1"],
        ["What's It Worth?", "Completed Chapter 6 of Episode 5"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
