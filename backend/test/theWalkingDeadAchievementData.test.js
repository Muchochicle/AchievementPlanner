import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-walking-dead.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 207610 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-walking-dead");

test("getPlannerData('the-walking-dead') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-walking-dead");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every The Walking Dead achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every The Walking Dead achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 The Walking Dead achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Abandoner", "Completed Wyatt's Chapter."],
        ["Adventures in Babysitting", "Complete chapter 2 of episode 1."],
        ["Bad Blood", "Completed chapter 2 of episode 3."],
        ["Bedside Manor", "Completed chapter 4 of episode 4."],
        ["Chain Gang", "Completed Vince's Chapter."],
        ["Conversation Killer", "Complete chapter 2 of episode 2."],
        ["Down By The River", "Completed chapter 2 of episode 4."],
        ["Everything's Going to be Okay", "Complete Episode 1: A New Day."],
        ["For Whom The Bell Tolls", "Completed chapter 6 of episode 4."],
        ["Friends Like These", "Completed Russell's Chapter."],
        ["Georgia's First City", "Completed chapter 1 of episode 4."],
        ["Georgia's Last City", "Completed chapter 5 of episode 4."],
        ["Going Hungry", "Complete chapter 1 of episode 2."],
        ["Goodbye, She Quietly Says", "Completed chapter 1 of episode 3."],
        ["Guess Who's Coming to Dinner", "Complete chapter 4 of episode 2."],
        ["Handle It", "Completed chapter 5 of episode 3."],
        ["Hey, Bud", "Complete chapter 6 of episode 1."],
        ["Hit the Road", "Completed chapter 3 of episode 3."],
        ["In Your Charge", "Complete chapter 3 of episode 1."],
        ["Into The Fire", "Completed chapter 1 of episode 5."],
        ["It's Just One Bullet", "Complete chapter 5 of episode 1."],
        ["It's Not Stealing If You Need It", "Complete Episode 2: \"Starved For Help\""],
        ["Lend Me Your Ears", "Completed Episode 3: \"Long Road Ahead\""],
        ["Look Behind You", "Completed chapter 7 of episode 3."],
        ["Loose Ends", "Completed the Epilogue."],
        ["Mercy", "Completed chapter 4 of episode 5."],
        ["Out of the Frying Pan", "Complete chapter 1 of episode 1."],
        ["Paradise Lost", "Completed Shel's Chapter."],
        ["Penultimate", "Completed chapter 8 of episode 4."],
        ["Reunited", "Found an old friend."],
        ["Rock and a Hard Place", "Complete chapter 4 of episode 1."],
        ["Stay Close To Me", "Completed chapter 7 of episode 5."],
        ["Support Group", "Completed chapter 3 of episode 4."],
        ["Taking Charlotte", "Complete chapter 6 of episode 2."],
        ["Thank you for shopping at Save Lots!", "Complete chapter 3 of episode 2."],
        ["The Marsh House", "Completed chapter 5 of episode 5."],
        ["The Morning After", "Completed chapter 7 of episode 4."],
        ["There Ain't No Way", "Completed chapter 3 of episode 5."],
        ["Too Much Salt Will Kill You", "Complete chapter 5 of episode 2."],
        ["Twice Shy", "Completed chapter 2 of episode 5."],
        ["Two Enter, One Leaves", "Complete chapter 7 of episode 1."],
        ["Two out of Three", "Won a game of Rock/Paper/Scissors."],
        ["Unexpected Delay", "Completed chapter 6 of episode 3."],
        ["What now?", "Completed chapter 4 of episode 3."],
        ["What Remains", "Completed chapter 8 of episode 5."],
        ["What's in the bag? ", "Completed chapter 6 of episode 5."],
        ["Who Goes There?", "Completed Bonnie's Chapter."],
        ["You Fight Like A Dairy Farmer", "Complete chapter 7 of episode 2."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
