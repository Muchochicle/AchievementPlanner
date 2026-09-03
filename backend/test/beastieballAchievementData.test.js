import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/beastieball.json - 27 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1864950 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("beastieball");

test("getPlannerData('beastieball') returns real planner data with 27 curated achievements", () => {

    assert.ok(game, "expected real planner data for beastieball");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 27);

});

test("every Beastieball achievement has a unique id from 1 to 27 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 27 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 27);
    assert.strictEqual(new Set(apinames).size, 27);

});

test("every Beastieball achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 27 Beastieball achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["[Early Access]", "We're still working on the game. This is a placeholder for future achievements to be added."],
        ["A Real Team", "Pick out a team name"],
        ["ACHIEVEMENT OF SHAME", "Reach an ending of the game (a tongue-in-cheek 'achievement of shame')."],
        ["Big Leagues", "Register for the Crown Series"],
        ["Draft Challenge", "Get a 15-win streak in the Draft Challenge"],
        ["Expedition Summit", "Summit the Mountain Expedition"],
        ["Go Pro", "Become a Ranked Coach"],
        ["Golden Gods", "Defeat the Golden Gods"],
        ["Hello Freaks", "Defeat the Hello Freaks"],
        ["It's Canon!", "Have a rival named Barnes McBride"],
        ["King's Pet", "Learn a thing or two from a genius"],
        ["Magic Moons", "Defeat the Magic Moons team."],
        ["Mythic Dreamers", "Defeat the Mythic Dreamers"],
        ["Nobody Cares But OK Good Job!", "Fully research 100 Beasties"],
        ["Now THAT'S Beastieball!", "Be interesting"],
        ["Party Pirates", "Defeat the Party Pirates"],
        ["Platinum Sponsor", "Get a Platinum Sponsor"],
        ["Raging Blazes", "Defeat the Raging Blazes"],
        ["Rank Defender", "Invite Rank Defense challengers and defeat all 3"],
        ["Silent Warriors", "Defeat the Silent Warriors"],
        ["Staying Power", "Get sponsored by Staying Power Fitness"],
        ["Straight to the Top!", "Become high-Ranked"],
        ["Street Wise", "Get a streak of 5 or more in the Pickup Court"],
        ["Super Tower Tourney", "Get a 30-win streak in the Super Tower Tourney"],
        ["Tower Tourney", "Complete the Tower Tourney"],
        ["Wild Flowers", "Defeat the Wild Flowers"],
        ["You got Staying Power!", "Get a gold-level sponsorship from Staying Power Fitness"],
    ];

    assert.strictEqual(officialAchievements.length, 27, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
