import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/fall-guys.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1097150 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 34 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("fall-guys");

test("getPlannerData('fall-guys') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for fall-guys");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Fall Guys achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Fall Guys achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Fall Guys achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["Ahead of the Pack", "Get first place in a racing round"],
        ["Bargain Bucket", "Equip an uncommon or better Body Colour, Pattern, Upper and Lower Costume piece"],
        ["Big Air", "Clock up 1 hour total time falling"],
        ["Big Bully", "Knock someone over"],
        ["Big Tease", "Perform an emote just before coming first in a race round"],
        ["Catwalk Model", "Equip your first legendary customization item"],
        ["Down to the Wire", "Qualify after a round goes to overtime"],
        ["Face First", "Qualify from a racing round despite falling over more than 10 times"],
        ["Fall Bae", "Share a hug with a Fall Guy"],
        ["Fall Guy Fashionista", "Unlock 50 cosmetic items from the store"],
        ["Fall Throttle", "Reach terminal velocity "],
        ["Flawless Victory", "Qualify from a round without falling over even once"],
        ["Golden Guy", "Win 20 Episodes"],
        ["Head Turner", "Equip a legendary Body Colour, Pattern, Upper and Lower Costume piece"],
        ["Household Name", "Reach lvl 25 fame during a season"],
        ["Infallible", "Win 5 Episodes in a row"],
        ["Low Baller", "Qualify from a team game with a score of 1"],
        ["Mad Trendy", "Equip a rare or legendary Body Colour, Pattern, Upper and Lower Costume piece"],
        ["One giant leap", "Qualify from 100 rounds"],
        ["One small trip", "Qualify from your first round"],
        ["One to Watch", "Reach lvl 10 fame during a season"],
        ["Quite Dashing", "Get first place in a racing round 5 times"],
        ["Shopping Spree", "Unlock 10 cosmetic items from the store"],
        ["Show Off", "Win an Episode with a custom Celebration equipped"],
        ["Snowflake", "Equip your first cosmetic item"],
        ["Squad Goals", "Win an Episode as part of a party of 3 or more players"],
        ["Star of the Show", "Reach lvl 40 fame during a season"],
        ["Stumble Chums", "Bump into other Fall Guys 1000 times in total"],
        ["Style Points", "Fall for at least 3 seconds before landing on your head"],
        ["Top Tier", "Win 7 Episodes"],
        ["Track Star", "Get first place in a racing round 20 times"],
        ["Troublemaker", "Bump into 3 people while rolling on the ground before getting up"],
        ["Veteran Status", "Qualify from 500 rounds"],
        ["Victory!", "Win your first Episode"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
