import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/forza-motorsport-2023.json - 57 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2440510 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("forza-motorsport-2023");

test("getPlannerData('forza-motorsport-2023') returns real planner data with 57 curated achievements", () => {

    assert.ok(game, "expected real planner data for forza-motorsport-2023");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 57);

});

test("every Forza Motorsport achievement has a unique id from 1 to 57 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 57 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 57);
    assert.strictEqual(new Set(apinames).size, 57);

});

test("every Forza Motorsport achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 57 Forza Motorsport achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Aficionado", "Reach Car Level 50 in 10 cars"],
        ["Amateur Rival", "Beat 5 Rivals"],
        ["American Challenger", "Complete a race in a 2023 Cadillac Cadillac Racing V-Series.R on Le Mans Full Circuit"],
        ["Body Builder", "Apply a Wide Body conversion to any car"],
        ["Brand Ambassador", "Reach max brand discount by owning 5 level 50 cars from a manufacturer"],
        ["Built Not Bought", "Complete 1 Series in Career Mode"],
        ["Clean Driving", "Complete a clean Qualifying lap in Featured Multiplayer"],
        ["Competitor", "Complete 300 laps in Multiplayer"],
        ["Contender", "Complete 100 laps in Multiplayer"],
        ["Endurance Legacy", "Complete a race in the 2021 Porsche 911 GT3 on the Kyalami Grand Prix Circuit"],
        ["Enthusiastic Rival", "Beat 10 Rivals"],
        ["Excellence", "Finish with no penalty with full Forza Race Regulations enabled"],
        ["Experienced Rival", "Beat 20 Rivals"],
        ["Express Yourself", "Change your Driver Suit"],
        ["Flying", "Maintain a speed of 180mph or higher for 3 seconds"],
        ["Free as a Bird", "Complete a race in the 1973 Pontiac Firebird Trans Am SD-455 on the Eaglerock Club Circuit"],
        ["Freedom!", "Complete a Quick Race in Free Play"],
        ["Garage Royalty", "Reach Car Level 50 in 30 cars"],
        ["Getting Familiar", "Reach Car Level 25 in any car"],
        ["Heart Transplant", "Swap an engine in any car"],
        ["Highlight Reel", "Share a Replay"],
        ["In the Big Leagues", "Complete your first Featured Multiplayer Event"],
        ["Influencer", "Earn 10,000 credits from the community using your Design"],
        ["It’s not the car...", "Finish in top three of a series with a stock car in Builders Cup"],
        ["Journeyman Builder", "Complete 2 Tours in Career Mode"],
        ["Just Getting Started", "Complete 1 Tour in Career Mode"],
        ["Legendary Builder", "Complete 4 Tours in Career Mode"],
        ["Leisure Cruise", "Complete a lap at sunset at Spa Francorchamps"],
        ["Make it Yours", "Buy your first car"],
        ["My First Art Show", "Share one of your Designs"],
        ["New Rival", "Post a lap time on any track in Rivals Time Attack"],
        ["Night Owl", "Complete 50 laps at night"],
        ["On the House", "Receive your first gift car"],
        ["Paparazzi", "Share a Photo"],
        ["Podium Prodigy", "Earn a spot on the podium in Featured Multiplayer"],
        ["Pole Position", "Post the best Qualifying Lap Time in a Featured Multiplayer event"],
        ["Pride and Joy", "Reach Car Level 50 in any car"],
        ["Pro Builder", "Complete 3 Tours in Career Mode"],
        ["Race Engineer", "Share one of your Tunes"],
        ["Racecraft", "Gain at least 12 positions in any Multiplayer race"],
        ["Rain Meister", "Complete 50 laps in the rain"],
        ["Rain or Shine", "Create and complete a race in the rain in Free Play"],
        ["Running on Fumes", "Finish a race with no more than one Fuel Lap left in your car"],
        ["Safety Star", "Hold an S Safety Rating across 5 consecutive Featured Multiplayer events"],
        ["Safety Superstar", "Hold an S Safety Rating across 10 consecutive Featured Multiplayer events"],
        ["Self-Improvement", "Score a perfect 10 on any Track Segment"],
        ["Setting the Standard", "Earn 10,000 credits from the community using your Tune"],
        ["Sightseeing", "Complete a race in the 2020 Toyota GR Supra on the Hakone Club Circuit"],
        ["Stiff Competition", "Complete 10 races with AI set to the fastest difficulty"],
        ["Strategist", "Change your Fuel and Tire setup for the first time"],
        ["Technique", "Score a 9 or better on any Track Segment"],
        ["Time Traveler", "Win a Timed Race in Free Play"],
        ["Tinkerer", "Make an upgrade to any car"],
        ["Welcome to Builders Cup", "Complete the Builders Cup Intro Series"],
        ["Welcome to Forza", "Complete your first race"],
        ["Well Rounded", "Change your tires during a race to use a different tire compound"],
        ["When in Rome…", "Complete a race in the 2020 Ferrari Roma on the Mugello Full Circuit"],
    ];

    assert.strictEqual(officialAchievements.length, 57, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
