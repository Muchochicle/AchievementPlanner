import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tricky-towers.json - 29 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 437920 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("tricky-towers");

test("getPlannerData('tricky-towers') returns real planner data with 29 curated achievements", () => {

    assert.ok(game, "expected real planner data for tricky-towers");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 29);

});

test("every Tricky Towers achievement has a unique id from 1 to 29 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 29 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 29);
    assert.strictEqual(new Set(apinames).size, 29);

});

test("every Tricky Towers achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 29 Tricky Towers achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["99 Bricks!", "Build a tower with 99 bricks in Endless Survival Challenge."],
        ["All-round magician", "Use all magic spells once."],
        ["Almost there", "Unlock the master trials."],
        ["Architect", "Get a brick count of 20 or higher in a puzzle match."],
        ["Baby steps", "Unlock the apprentice trials."],
        ["Bare bones", "Complete trial #40 without using any magic."],
        ["Bigger than magic", "Finish trial #21 without using any magic."],
        ["Brick stacker", "Place 66 bricks in endless survival challenge."],
        ["Close call", "Win an online survival match with 1 heart left."],
        ["Cup winner!", "Win an online cup."],
        ["Doing good", "Unlock the pro trials."],
        ["Green fingers", "Connect 7 bricks with 1 ivy spell."],
        ["In the moonlight", "Drop the moon."],
        ["Like a glove…", "Finish trial #6 with 3 hearts left without picking up a spell."],
        ["Master wizard", "Complete all trials."],
        ["Match winner", "Win an online match."],
        ["Mode master", "Win an online game of every mode in every difficulty at least once."],
        ["No need to rotate", "Complete trial #30 without rotating a brick."],
        ["On the right track", "Unlock the expert trials."],
        ["Perfect start", "Build a tower with 99 bricks in endless survival challenge without losing any hearts."],
        ["Save some room", "Finish trial #20 one unit below the zapper."],
        ["Shadow stacker", "Build a tower of 99 bricks in endless puzzle mode."],
        ["Show off", "Win an online normal survival match without using any magic."],
        ["Speed. Precision.", "Win a normal race match within 80 seconds without dropping any bricks."],
        ["Survivor", "Survive the 8th wave in survival special mode or in endless survival challenge."],
        ["Think fast!", "Finish trial #8 with at least 52 seconds left on the clock."],
        ["Trickster", "Do a 180 with the roof in race mode."],
        ["Ultimate Wizard", "Complete trial #50 without losing a heart."],
        ["You stay there!", "Stomp on 5 bubbled bricks without dropping them in the water."],
    ];

    assert.strictEqual(officialAchievements.length, 29, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
