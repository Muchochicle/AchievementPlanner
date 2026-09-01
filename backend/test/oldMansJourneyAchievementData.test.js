import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/old-mans-journey.json - 13 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 581270 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("old-mans-journey");

test("getPlannerData('old-mans-journey') returns real planner data with 13 curated achievements", () => {

    assert.ok(game, "expected real planner data for old-mans-journey");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 13);

});

test("every Old Man's Journey achievement has a unique id from 1 to 13 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 13 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 13);
    assert.strictEqual(new Set(apinames).size, 13);

});

test("every Old Man's Journey achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 13 Old Man's Journey achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adeline the Village Gossiper", "Adeline likes to think she is always in the know of the latest events in the little village."],
        ["Albert the Gardener", "Albert worked an office job in finance before he dared to fulfill his dream and became a gardener."],
        ["Enjoy the Ride", "Drive the truck for one mile."],
        ["Frogs' Chorus", "A small group of frogs with big vocal ambitions."],
        ["Georges the Lighthouse Keeper", "Georges spends most of his time indulging in his passion for fishing."],
        ["Hugo the Vagabond", "Hugo likes to invite passing hikers for a pause and a game of Canasta."],
        ["Kassiopeia the Tortoise", "Kassiopeia is an elusive creature, but will reveal herself for those with patience."],
        ["Sheep Whisperer", "Guide the sheep in a level with the minimal amount of interactions."],
        ["Smooth Ride", "Ride the train without an emergency break."],
        ["The Beginning", "Now you’ve got the hang of shaping hills and you're all set to help the old man on his journey."],
        ["The End", "Watched the credits to the end."],
        ["Tilda the Whiz Kid", "Tilda developed an uncanny talent to repair things after she discovered her dad's toolbox."],
        ["Window Piano", "As a strange consequence of erosion, the hotel window shutters create a harmonic range of squeaks."],
    ];

    assert.strictEqual(officialAchievements.length, 13, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
