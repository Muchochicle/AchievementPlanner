import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/strange-horticulture.json - 18 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1574580 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("strange-horticulture");

test("getPlannerData('strange-horticulture') returns real planner data with 18 curated achievements", () => {

    assert.ok(game, "expected real planner data for strange-horticulture");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 18);

});

test("every Strange Horticulture achievement has a unique id from 1 to 18 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 18 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 18);
    assert.strictEqual(new Set(apinames).size, 18);

});

test("every Strange Horticulture achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 18 Strange Horticulture achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Mystery Solved", "Find a Bryer's Disc location"],
        ["Apprentice", "Identify 10 plants"],
        ["Back from the Brink", "Recover from Rising Dread"],
        ["Banished", "Reach the 'Banished' ending - go with Verona Green beneath the Great Tree and place Devil's Nightcap, Swiftsnare, Widow's Woe, Long Verecund and Elderphinium in the circle."],
        ["Beginnings", "Handle your first customer"],
        ["Cat Lover", "Pet Hellebore 13 times"],
        ["Ending", "Complete the game"],
        ["Experienced Horticulturist", "Identify all the plants"],
        ["Explorer", "Visit 20 map locations"],
        ["Extreme Consequences", "Murder Burbidge"],
        ["Guardian of the Forest", "Save the Sisterhood"],
        ["Hidden Texts", "Activate the viewing device"],
        ["Horticulturist", "Complete a full playthrough without using the hint button"],
        ["I am the Dendrew", "Reach the 'I am the Dendrew' ending - go with Faye Swift to the Daughter's stone circle, use Swiftsnare on Faye, then use the Elixir of Control on yourself."],
        ["Master Brewer", "Create an Elixir"],
        ["On the Map", "Solve your first clue card"],
        ["Praise the Dendrew", "Reach the 'Praise the Dendrew' ending - go with the Seeds of Redemption to Swinside Stone Circle and use Embersoul as the offering on Day 10."],
        ["Secrets", "Open the secret desk drawer by assembling the five paper slips - the one on the desk at the start plus the four Amos brings on Day 8."],
    ];

    assert.strictEqual(officialAchievements.length, 18, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
