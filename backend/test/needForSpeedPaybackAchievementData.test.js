import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/need-for-speed-payback.json - 45 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1262540 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("need-for-speed-payback");

test("getPlannerData('need-for-speed-payback') returns real planner data with 45 curated achievements", () => {

    assert.ok(game, "expected real planner data for need-for-speed-payback");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 45);

});

test("every Need for Speed Payback achievement has a unique id from 1 to 45 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 45 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 45);
    assert.strictEqual(new Set(apinames).size, 45);

});

test("every Need for Speed Payback achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 45 Need for Speed Payback achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["... And All For One", "Reach the top with your crew"],
        ["Above The Law", "Become an Outlaw Icon"],
        ["Basic Bronze", "Win all the Prestige events"],
        ["Beyond Extreme", "Tune a car to max drift or grip settings"],
        ["Building Your stable", "Purchase another car for your garage"],
        ["Can I Get Your Autograph?", "Reach REP Level 50"],
        ["Choo Choo!", "Complete the drift train mission with the Risky Devil crew"],
        ["Climbing the Ranks", "Reach Monthly Rank 10 by Completing Daily Challenges"],
        ["Drag Queen", "Win five Drag Race events"],
        ["Early Days", "Reach REP Level 10"],
        ["Eddie Is Back", "Complete Eddie's Challenge"],
        ["Fanboi", "Put Ken's or Morohoshi's car in your garage"],
        ["Filter Addict", "Take a Snapshot with a Filter in Snapshot Pro Mode"],
        ["Fulfilling The Need", "Become a Speed Icon"],
        ["Full House", "Fill each spot in your garage"],
        ["Full Power", "Equip top end performance parts to each category of a car"],
        ["Getting Noticed", "Reach REP Level 25"],
        ["Gold Plated", "Win Gold on all Prestige events"],
        ["Guidance From Amy", "Compete against Amy's high horsepower contacts"],
        ["Hit The Ceiling", "Reach REP Level 70"],
        ["Home Is Where Your Car Is", "Acquire your spot in the garage"],
        ["I Am Speed", "Beat Magnus' record time"],
        ["Iconic Builder", "Become a Build Icon"],
        ["Iconoclast", "Win events driving Ken's and Morohoshi's cars"],
        ["Kustom Kar", "Buy your first Hot Rod"],
        ["Mental Unblock", "Get a 350000 Drift Score in Mental Block with Ken's car"],
        ["No Filter", "Take your first snapshot"],
        ["One For All...", "Find yourself a crew"],
        ["RWB", "Meet the legendary builder Nakai-San"],
        ["Serious Fun", "Complete 15 daily challenges"],
        ["Single Take Star", "Complete a single-take of Ken's Gymkhana"],
        ["Social Scene", "Get called out by other racers 50 times for your skills"],
        ["Speed Master", "Win all the events in a Speedlist"],
        ["Surprised? Me Neither", "Uncover the truth about the Outlaw"],
        ["That Perfect Moment", "Max out all 5 scoring styles in a single moment"],
        ["The Hoonigan", "Become a Style Icon"],
        ["The Ultimate Icon", "Become the Ultimate Icon"],
        ["Training Wheels Off", "Learn to drive with style"],
        ["Triple Crown", "Win three events in a row"],
        ["Tuned For Excellence", "Win any event with a tuned car"],
        ["Unstoppable", "Beat the Outlaw's \"2 roadblocks in a pursuit\" challenge"],
        ["Urban Outlaw", "Beat Magnus' personal challenge"],
        ["Wrap Artist", "Share a Wrap with the Need for Speed™ Community"],
        ["Wrap It Up", "Download a shared wrap"],
        ["Zero To Hero", "Win an event in Eddie's Car"],
    ];

    assert.strictEqual(officialAchievements.length, 45, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
