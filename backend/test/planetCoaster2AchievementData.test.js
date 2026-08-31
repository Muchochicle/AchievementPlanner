import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/planet-coaster-2.json - 36 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2688950 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("planet-coaster-2");

test("getPlannerData('planet-coaster-2') returns real planner data with 36 curated achievements", () => {

    assert.ok(game, "expected real planner data for planet-coaster-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 36);

});

test("every Planet Coaster 2 achievement has a unique id from 1 to 36 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 36 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 36);
    assert.strictEqual(new Set(apinames).size, 36);

});

test("every Planet Coaster 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 36 Planet Coaster 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Against the Odds", "Build a 5 Star Park in Sandbox Mode"],
        ["All the Slides", "Have 20 Water Slides or Flumes open in a single park"],
        ["Ancient Achievements", "Earn a Silver Medal on Parks and Restoration"],
        ["Best of the Best", "Build and open a Coaster with 2,500m of Track and Excitement greater than 9"],
        ["Crowd Pleaser", "Build a 4 Star park"],
        ["Down Is Up", "Build and open a Coaster over 500m in length with at least 10 inversions"],
        ["Envy of the Gods", "Earn a Platinum Medal on The Garden of Edith"],
        ["Eugene Would Be Proud", "Unlock all Research in Career Mode"],
        ["Final Plunge", "Unlock Chapter 4's Epilogue"],
        ["First Drop", "Unlock Chapter 1"],
        ["Fully Loaded", "Unlock all 72 Career Medals in the base game"],
        ["Get Your Feet Wet", "Open your first Flume in any park"],
        ["Golden Oldies", "Have 5 Rides achieve \"Classic\" status in a single park"],
        ["In a Word, Whoooosh", "Build and open a Coaster that reaches at least 100 mph / 161 kph"],
        ["Mess Without Stress", "Earn a Gold Medal on Thrills'n'Spills"],
        ["No Track Required", "Have at least 250 Guests on Flat Rides simultaneously"],
        ["Not For The Faint-Hearted", "Build and open a Coaster with Excitement at 7 or above"],
        ["On a Roll", "Open your first Coaster in any park"],
        ["Park Half Full", "Earn a Bronze Medal on Double Trouble"],
        ["People Person's Person People", "Have 10 Hired Staff simultaneously in any park"],
        ["Quite the Crowd", "Have 1,000 Guests in a park simultaneously"],
        ["Ride the Waterfall", "Build and open a Water Slide or Flume with a Drop of at least 100m"],
        ["Rolling With It", "Unlock Chapter 2"],
        ["Satisfaction Guaranteed", "Achieve 70% of Guests in a Positive Mood at the End of a Day With At Least 2,500 Guests In The Park"],
        ["Showstopper", "Build a 3 Star Park"],
        ["Slip 'n Slide", "Have 30 Guests riding Water Slides or Flumes simultaneously"],
        ["Splashing Around", "Have 500 Guests in Pools simultaneously"],
        ["Sunken Pleasures", "Earn a Bronze Medal on Paradise Lost"],
        ["Test of Endurance", "Build and open a Coaster with at least 2,500m of track"],
        ["Time to Ride", "Open your first Flat Ride in any park"],
        ["Twisting Tracks", "Unlock Chapter 4"],
        ["Water Wonderful World", "Earn a Platinum Medal on A Shore Thing"],
        ["What a View!", "Spend $50,000 on Scenery in a single park"],
        ["What Even Is Interest?", "Take out a Loan of at least $20,000"],
        ["What Lurks Beneath", "Earn a Bronze Medal on Labyrinth Secrets"],
        ["Wheel-y Good Time", "Unlock Chapter 3"],
    ];

    assert.strictEqual(officialAchievements.length, 36, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
