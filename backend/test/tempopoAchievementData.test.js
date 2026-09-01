import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/tempopo.json - 25 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 318840 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("tempopo");

test("getPlannerData('tempopo') returns real planner data with 25 curated achievements", () => {

    assert.ok(game, "expected real planner data for tempopo");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 25);

});

test("every Tempopo achievement has a unique id from 1 to 25 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 25 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 25);
    assert.strictEqual(new Set(apinames).size, 25);

});

test("every Tempopo achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 25 Tempopo achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Foolproof Plan", "Complete any island without using the reset button"],
        ["Autumn Challenge Champion", "Complete all the Autumn challenge islands"],
        ["Beautiful Bouquet", "Carry 4 flowers into the portal on one Tempopo"],
        ["Blooming Roses", "Watch Hana's Spring performance"],
        ["Contrarian", "Complete Old Giants Cottage without using the block or smash instructions"],
        ["Crucial Cargo", "Move a portal 4 spaces away from its starting position"],
        ["Dancing Fireflies", "Watch Hana's Summer performance"],
        ["Falling Leaves", "Watch Hana's Autumn performance"],
        ["Free Thinker", "Switch to Creative mode"],
        ["Green Thumb", "Place or move more than 300 flowers"],
        ["Keep the Beat", "Place drums on each beat across the Melody Garden"],
        ["Matched Momentum", "Hop twice atop a sliding block"],
        ["Misdirection", "Complete Tunnel Vision using only direction instructions"],
        ["Ostinato", "Use the reset button over 500 times"],
        ["Overengineered", "Complete Cleff Cliff after collecting 31 instructions"],
        ["Pushing Through", "Push a block Tempopo into a Chomper"],
        ["Redirected Force", "Push a chomper"],
        ["Shimmering Lights", "Watch Hana's Winter performance"],
        ["Solo Performance", "Complete Up and Down with one Tempopo rescuing all flowers"],
        ["Spring Challenge Champion", "Complete all the Spring challenge islands"],
        ["Summer Challenge Champion", "Complete all the Summer challenge islands"],
        ["Tandem Teamwork", "Use an instruction on top of a block Tempopo"],
        ["The Only Way Is Up", "Complete Archipelago using only uplift instructions"],
        ["Tiiimber", "Collect an instruction dropped from a smashed tree"],
        ["Winter Challenge Champion", "Complete all the Winter challenge islands"],
    ];

    assert.strictEqual(officialAchievements.length, 25, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
