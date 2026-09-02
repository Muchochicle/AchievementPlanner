import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/planet-coaster.json - 32 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 493340 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("planet-coaster");

test("getPlannerData('planet-coaster') returns real planner data with 32 curated achievements", () => {

    assert.ok(game, "expected real planner data for planet-coaster");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 32);

});

test("every Planet Coaster achievement has a unique id from 1 to 32 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 32 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 32);
    assert.strictEqual(new Set(apinames).size, 32);

});

test("every Planet Coaster achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 32 Planet Coaster achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Head for Heights", "Create a coaster with an 80m drop."],
        ["A Star is born", "Gain a bronze star in career mode."],
        ["Air Miles", "Wow guests with a coaster with 15 moments of airtime."],
        ["Air Raising", "Create a coaster with 10 moments of airtime."],
        ["Brightest Star in the Sky", "Gain a gold star in career mode."],
        ["Challenge Experience", "Complete five challenges."],
        ["Challenge Veteran", "Complete ten challenges."],
        ["Coasting Along", "Build a 750m long coaster."],
        ["Crashing the Party", "Deliberately crash a coaster train into a crowd of guests."],
        ["Dex-R's Science Shenanigans", "Unlock DexR's Science Shenanigans."],
        ["Doing Your Homework", "Complete a research project."],
        ["Don't Stop Me Now", "Build a coaster 1500m long."],
        ["Faster than Lightning", "Get a coaster up to 200mph."],
        ["Hang Time", "Create a coaster with 5 moments of airtime."],
        ["Investing in People", "Train a member of staff to the highest level."],
        ["Jaw Dropping", "Create a coaster with a 150m drop."],
        ["King Coaster's Royal Decree", "Unlock King Coaster's Royal Decree."],
        ["Loan Survivor", "Repay a loan of $20,000."],
        ["Marketing Mogul", "Spend $10,000 on marketing in one month."],
        ["Money Spinner", "Achieve a monthly profit of $10,000."],
        ["Princess Amelie's Fairy Tale", "Unlock Princess Amelie's Fairy Tale."],
        ["Rise to the Challenge", "Complete a challenge."],
        ["Rising Star", "Gain a silver star in career mode."],
        ["Salt on the Senses ", "Max out the salt on a Monsieur Frites fries stand's sales-tab extras."],
        ["Scream if You Want to Go Faster!", "Get a coaster up to 100mph."],
        ["Speed Freak ", "Get a coaster up to 150mph."],
        ["Star Studded Career", "Gain all the stars in career mode!"],
        ["The Ratings Are Through the Roof!", "Achieve a Park Rating of 1000."],
        ["The Ride of Your Life", "Build a coaster 2500m long."],
        ["Welcome to Planet Coaster.", "Create your avatar and place them on the globe.."],
        ["You're a winner!", "Win a go-kart race while personally driving the kart (build a go-kart track named 'Bollard' to unlock first-person driving before the race starts)."],
        ["You're Fired!", "Fire a member of staff."],
    ];

    assert.strictEqual(officialAchievements.length, 32, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
