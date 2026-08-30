import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/life-is-strange-before-the-storm.json - 34 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 554620 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("life-is-strange-before-the-storm");

test("getPlannerData('life-is-strange-before-the-storm') returns real planner data with 34 curated achievements", () => {

    assert.ok(game, "expected real planner data for life-is-strange-before-the-storm");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 34);

});

test("every Life is Strange: Before the Storm achievement has a unique id from 1 to 34 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 34 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 34);
    assert.strictEqual(new Set(apinames).size, 34);

});

test("every Life is Strange: Before the Storm achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 34 Life is Strange: Before the Storm achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Penned Appendage", "Complete the optional graffiti #8 in Episode 3: Hell Is Empty"],
        ["All the Devils are Here", "Complete Episode 3: Hell Is Empty"],
        ["American Graffiti", "Complete the optional graffiti #1 in Episode 3: Hell Is Empty"],
        ["Awake, Dear Heart", "Complete Episode 1: Awake"],
        ["Before the Storm", "Complete Episode 1, Episode 2 and Episode 3 of Life is Strange: Before the Storm"],
        ["Canon Wall", "Complete the optional graffiti #4 in Episode 2: Brave New World"],
        ["Creature Feature", "Complete the optional graffiti #10 in Episode 2: Brave New World"],
        ["Dramatis Personae", "Complete the optional graffiti #6 in Episode 1: Awake"],
        ["Drunk Drawer", "Complete the optional graffiti #9 in Episode 3: Hell Is Empty"],
        ["Extra Credit", "Complete the optional graffiti #2 in Episode 3: Hell Is Empty"],
        ["Face Your Anger", "Complete the optional graffiti #9 in Episode 1: Awake"],
        ["Feels on Wheels", "Complete the optional graffiti #3 in Episode 2: Brave New World"],
        ["Friendly Forest Friends", "Complete the optional graffiti #6 in Episode 2: Brave New World"],
        ["Hello Nurse", "Complete the optional graffiti #7 in Episode 3: Hell Is Empty"],
        ["Home Unimprovement", "Complete the optional graffiti #4 in Episode 1: Awake"],
        ["I See U Saw", "Complete the optional graffiti #2 in Episode 1: Awake"],
        ["Lucid Writing", "Complete the optional graffiti #10 in Episode 1: Awake"],
        ["Messed Up", "Complete the optional graffiti #10 in Episode 3: Hell Is Empty"],
        ["Monthly Masterpiece", "Complete the optional graffiti #4 in Episode 3: Hell Is Empty"],
        ["Mulligan Stew", "Complete the optional graffiti #7 in Episode 1: Awake"],
        ["O, Wonder!", "Complete Episode 2: Brave New World"],
        ["Peer Review", "Complete the optional graffiti #3 in Episode 3: Hell Is Empty"],
        ["Permanent Record", "Complete the optional graffiti #8 in Episode 2: Brave New World"],
        ["Pioneer Spirit", "Complete the optional graffiti #8 in Episode 1: Awake"],
        ["Radical Piratical", "Complete the optional graffiti #2 in Episode 2: Brave New World"],
        ["Recreational Vandalism", "Complete the optional graffiti #1 in Episode 1: Awake"],
        ["Rock Idol", "Complete the optional graffiti #5 in Episode 1: Awake"],
        ["Spit Take", "Complete the optional graffiti #5 in Episode 3: Hell Is Empty"],
        ["Stagehandwriting", "Complete the optional graffiti #1 in Episode 2: Brave New World"],
        ["The Last Unicorn", "Complete the optional graffiti #3 in Episode 1: Awake"],
        ["Tread Harshly", "Complete the optional graffiti #7 in Episode 2: Brave New World"],
        ["Vanity Fare", "Complete the optional graffiti #9 in Episode 2: Brave New World"],
        ["Venting Machine", "Complete the optional graffiti #6 in Episode 3: Hell Is Empty"],
        ["Wishlist", "Complete the optional graffiti #5 in Episode 2: Brave New World"],
    ];

    assert.strictEqual(officialAchievements.length, 34, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
