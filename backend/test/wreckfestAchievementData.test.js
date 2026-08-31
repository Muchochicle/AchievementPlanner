import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/wreckfest.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 228380 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("wreckfest");

test("getPlannerData('wreckfest') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for wreckfest");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Wreckfest achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Wreckfest achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Wreckfest achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Cash For Crashes", "Earn 50 000 Credits."],
        ["Challengers Champion", "Complete Challengers Championship."],
        ["Dirty Roller", "Reach Player Rank 10."],
        ["Garden Variety", "Drive a total of 1 hour with the Lawn Mower vehicle - a no-opponent custom event is the easy way."],
        ["Glutton For Punishment", "Get wrecked (taken out of a race or derby) by opponents 100 times."],
        ["Hating Them Tin Cans", "Wreck 100 Opponents."],
        ["Highballer", "Complete All Career Challenges."],
        ["Human Lover", "Win 20 Events In Multiplayer."],
        ["Junk Collector", "Collect 20 Vehicles."],
        ["Look Mom, I Can Fly", "Spend a total of 5 minutes airborne across all events - big derby-arena ramps rack it up fastest."],
        ["Maniac Driver", "Wreck 50 Opponents With School Bus."],
        ["National Amateurs Champion", "Complete National Amateurs Championship."],
        ["Pro Internationals Champion", "Complete Pro Internationals Championship."],
        ["Regional Juniors Champion", "Complete Regional Juniors Championship."],
        ["Rocketeer", "Reach 210 Km/h (130 Mph) With Rocket."],
        ["Showing Some Dedication", "Reach Player Rank 50."],
        ["Storm Warning", "Win Your First Career Race."],
        ["Trashing Around", "Reach Player Rank 25."],
        ["Wheeler Dealer", "Collect 10 Vehicles."],
        ["World Masters Champion", "Complete World Masters Championship."],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
