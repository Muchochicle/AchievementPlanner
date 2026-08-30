import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/a-way-out.json - 14 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1222700 (fetched through this app's own services/steamApi.js). 8 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("a-way-out");

test("getPlannerData('a-way-out') returns real planner data with 14 curated achievements", () => {

    assert.ok(game, "expected real planner data for a-way-out");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 14);

});

test("every A Way Out achievement has a unique id from 1 to 14 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 14 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 14);
    assert.strictEqual(new Set(apinames).size, 14);

});

test("every A Way Out achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 14 A Way Out achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Backseat Mechanic", "You helped fix the bike."],
        ["Break From Reality", "You played a videogame with a friend."],
        ["Freedom", "You freed someone from captivity."],
        ["Home Run", "You are clearly good with a bat."],
        ["In Sync", "At the Farmstead, have both players play music together - Vincent on piano, Leo on banjo - hitting 20 notes in a row without a mistake."],
        ["Live the Dream", "During the Preparation - A New Life chapter, have both players sit on the hospital waiting-room couch and watch the TV until one of them dozes off into a moon-landing dream, then run toward the lander."],
        ["Managed Anger", "During the Preparation - Violent Questioning chapter, choose to push back the interrogated man's chair instead of escalating further."],
        ["Mayday!", "You almost took to the skies."],
        ["No Cheating", "You exposed some infidelity."],
        ["Take A Breather", "During the Fugitives - Breather chapter, have both players sit together on the rock to enjoy the view."],
        ["Take It For A Spin", "At the Farmstead, climb the windmill and interact with it to spin it up."],
        ["The Dip", "At the start of the game in the prison yard, have Leo use the pull-up bars to beat the current inmate record."],
        ["Timeless Treasure", "At the Farmstead, have both players push the grandfather clock at the same time to reveal a secret door, then open the treasure chest inside."],
        ["You Started It", "During the Preparation - Reunion chapter, have both players sit on the trailer-park seesaw to trigger an argument over who sat first."],
    ];

    assert.strictEqual(officialAchievements.length, 14, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
