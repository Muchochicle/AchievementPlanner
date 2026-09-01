import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/little-misfortune.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 714120 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("little-misfortune");

test("getPlannerData('little-misfortune') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for little-misfortune");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Little Misfortune achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Little Misfortune achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Little Misfortune achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Can Kicker", "Kick the can 3 times"],
        ["Dance Master", "Score high in the Club"],
        ["Doggy Treat", "Give Lil' Cutie a treat!"],
        ["Eternal Happiness", "Give Mommy the Eternal Happiness"],
        ["Feeder", "Feed the birds"],
        ["Fortune Teller", "Get all your fortunes told"],
        ["Fox Whacker", "Whack the fox"],
        ["Gamer", "Win all reward tickets"],
        ["Hay Doll #1", "Find the doll #1 "],
        ["Hay Doll #2", "Find the doll #2"],
        ["Hay Doll #3", "Find the doll #3"],
        ["Hay Doll #4", "Find the doll #4"],
        ["Hay Doll #5", "Find the doll #5"],
        ["Hay Doll #6", "Find the doll #6"],
        ["Hay Doll #7", "Find the doll #7"],
        ["Hay Doll #8", "Find the doll #8"],
        ["Hay Doll #9", "Find the doll #9"],
        ["Lil' Cutie", "Learn the name of the Puppy"],
        ["Manual Sparkle", "Sparkle 50 times"],
        ["Music 4 Ever", "Dance the entire song"],
        ["Ninja Lady", "Sneak past The Janitor"],
        ["Painter", "Paint all the pages"],
        ["Rich Lady", "Buy everything "],
        ["Rotten Fish", "Bury Rodrigo "],
        ["Runestones", "See all Runestones"],
        ["Sniper", "Hit the alarm!"],
        ["Somewhere Else", "Win the game"],
        ["Sparkling Lady", "Uncover all Sparkles"],
        ["The Cause", "Fix the vase"],
        ["The Effect", "Don't fix the vase"],
        ["The Fortune", "Read your fortune cookie"],
        ["The Kraken", "Met the Kraken "],
        ["The Returner", "Ride all rides"],
        ["Tomb Lady", "Dig all graves"],
        ["Too Much Rolling", "Ride the Twister until you puke"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
