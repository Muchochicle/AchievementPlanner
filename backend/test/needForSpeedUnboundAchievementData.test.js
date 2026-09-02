import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/need-for-speed-unbound.json - 41 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1846380 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("need-for-speed-unbound");

test("getPlannerData('need-for-speed-unbound') returns real planner data with 41 curated achievements", () => {

    assert.ok(game, "expected real planner data for need-for-speed-unbound");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 41);

});

test("every Need for Speed Unbound achievement has a unique id from 1 to 41 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 41 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 41);
    assert.strictEqual(new Set(apinames).size, 41);

});

test("every Need for Speed Unbound achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 41 Need for Speed Unbound achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["#Blessed", "Own 10 vehicles in your story mode garage"],
        ["100 Miles and Runnin'", "Drive a total of 100 miles in story mode"],
        ["Access All Areas", "Fully upgrade your Lakeshore Online garage"],
        ["Adbusting", "Break all billboard collectibles"],
        ["B for My Name", "Win a Tier B Lakeshore Online playlist"],
        ["Bring Your A Game", "Win a Tier A Lakeshore Online playlist"],
        ["Cash Money Millionaire", "Earn $1,000,000 in story mode"],
        ["Catch My Drift", "Get 3 stars on all Drift Zone activities"],
        ["Caught On Camera", "Get 3 stars on all Speed Trap activities"],
        ["Cleaning Up", "Collect all collectibles and get 3 stars on all activities"],
        ["Cool Whip", "Apply a custom wrap to your ride"],
        ["Drop the Beat", "Use max Burst Nitrous 5 times during story mode events"],
        ["Escape Artist", "Escape a Heat 5 cop chase in an A+ car"],
        ["Fashion Killa", "Customize your clothing"],
        ["Flow Master", "Score 250,000 during a Takeover event"],
        ["Found Family", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Frequent Flyer", "Get 3 stars on all Long Jump activities"],
        ["Full House", "Complete a Lakeshore Online playlist with 7 other players"],
        ["Heaven Spot", "Collect all street art collectibles"],
        ["Hey Lakeshore", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Hey Speedie!", "Reach 200MPH in story mode"],
        ["In the Flow", "Score 200,000 during a Takeover event"],
        ["In The Zone", "Get 3 stars on all Speed Run activities"],
        ["Kick it", "Use max Burst Nitrous 5 times during Lakeshore Online events"],
        ["Lake Better Watch Out", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Mixtape", "Complete 25 Lakeshore Online playlists"],
        ["Most Wanted", "Escape a Heat 5 cop chase"],
        ["New Crew", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Oh, It's On", "Story progress marker - unlocks at a specific point in the campaign, described here spoiler-free."],
        ["Public Enemy", "Take down 5 cops within a single session"],
        ["Rebel Without a Pause", "Complete 30 street races in story mode"],
        ["Rydell's Rydes", "Fully upgrade your story garage"],
        ["Serious Guap", "Bank $75,000 during one session"],
        ["Style it Out", "Complete 10 Takeover events "],
        ["Superstar", "Win a Tier S Lakeshore Online playlist"],
        ["Teacher's Pet", "Win a Tier A+ Lakeshore Online playlist"],
        ["The Bear Champ", "Smash all bear collectibles"],
        ["The Collector", "Own 10 vehicles in your Lakeshore Online garage"],
        ["Throwing up Tags", "Customize your Driving Effects"],
        ["Top Billin'", "Win a Tier S+ Lakeshore Online playlist"],
        ["Untouchable", "Escape 50 cop chases"],
    ];

    assert.strictEqual(officialAchievements.length, 41, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
