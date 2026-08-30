import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-wolf-among-us.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 250320 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("the-wolf-among-us");

test("getPlannerData('the-wolf-among-us') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-wolf-among-us");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every The Wolf Among Us achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every The Wolf Among Us achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 The Wolf Among Us achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        [" Journeyman Librarian", "Unlocked all Book of Fables entries in Episode 3."],
        ["A Light Snowfall", "Completed Episode 1: \"Faith\""],
        ["A Silver Bullet", "Completed Chapter 3 of Episode 5."],
        ["And All Were Happy", "Completed Episode 4: \"In Sheep's Clothing\""],
        ["Apprentice Librarian", "Unlocked all Book of Fables entries in Episode 2."],
        ["Beginning of the End", "Completed Chapter 1 of Episode 5."],
        ["Belly Full of Stones", "Completed Chapter 2 of Episode 3."],
        ["Breaking Point", "Completed Chapter 2 of Episode 2."],
        ["But Soon He Mended His Evil Ways", "Completed Chapter 5 of Episode 4."],
        ["Can I Get a Fresh Set of Towels?", "Completed Chapter 5 of Episode 2."],
        ["Grand Master Librarian", "Unlocked all Book of Fables entries in Episode 5."],
        ["Happily Ever After", "Completed Episode 5: \"Cry Wolf\""],
        ["He Was Much Feared", "Completed Chapter 4 of Episode 4."],
        ["Huff and Puff", "Completed Chapter 4 of Episode 3."],
        ["Made Them Cry", "Completed Chapter 4 of Episode 2."],
        ["Master Librarian", "Unlocked all Book of Fables entries in Episode 4."],
        ["My Last Cigarette", "Completed Chapter 4 of Episode 5."],
        ["No Respect for the Dead", "Completed Episode 2: \"Smoke and Mirrors\""],
        ["Novice Librarian", "Unlocked all Book of Fables entries in Episode 1."],
        ["Once Upon a Time", "Completed Chapter 1 of Episode 4."],
        ["Panic in the Parlours", "Completed Chapter 5 of Episode 1."],
        ["Promising Leads", "Completed Chapter 1 of Episode 3."],
        ["Right to an Attorney", "Completed Chapter 1 of Episode 2."],
        ["Severe Case of Lycanthropy", "Completed Chapter 5 of Episode 3."],
        ["Sisters", "Completed Chapter 3 of Episode 2."],
        ["The Enchanted Land of New York City", "Completed Episode 3: \"A Crooked Mile\""],
        ["The Frog or the Prince?", "Completed Chapter 4 of Episode 1."],
        ["The Long Goodbye", "Completed Chapter 3 of Episode 1."],
        ["The North Wind Blows", "Completed Chapter 5 of Episode 5."],
        ["There Was a Wolf", "Completed Chapter 2 of Episode 4."],
        ["This House of Straw", "Completed Chapter 2 of Episode 5."],
        ["Welcome to Fabletown", "Completed Chapter 1 of Episode 1."],
        ["What Big Eyes You Have", "Completed Chapter 3 of Episode 3."],
        ["Who Ruled The Land", "Completed Chapter 3 of Episode 4."],
        ["Wolf in Sheriff's Clothing", "Completed Chapter 2 of Episode 1."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
