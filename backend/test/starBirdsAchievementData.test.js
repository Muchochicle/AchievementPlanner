import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/star-birds.json - 59 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2719750 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("star-birds");

test("getPlannerData('star-birds') returns real planner data with 59 curated achievements", () => {

    assert.ok(game, "expected real planner data for star-birds");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 59);

});

test("every Star Birds achievement has a unique id from 1 to 59 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 59 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 59);
    assert.strictEqual(new Set(apinames).size, 59);

});

test("every Star Birds achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 59 Star Birds achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Atomic Habits", "Complete a sector in free play mode with a Kardashev scale value of 0.6."],
        ["Bloom Boom", "Reach 50  in a medium-sized free play mode sector."],
        ["Branching Out", "Complete a medium-sized free play mode sector at any complexity with 2 features enabled."],
        ["Chickadee", "Reach a score of 85 in sector 6."],
        ["Cold Comfort", "Reach 25  in a small free play mode sector."],
        ["Crater Caterer", "Collect a total of 250  in free play mode."],
        ["Crow", "Reach a score of 40 in sector 5.1."],
        ["Cuckoo", "Reach a score of 70 in sector 11."],
        ["Cuckoo", "Reach a score of 70 in sector 12."],
        ["Cuckoo", "Reach a score of 70 in sector 13."],
        ["Cuckoo", "Reach a score of 70 in sector 14."],
        ["Duck", "Reach a score of 85 in sector 10."],
        ["Earthly Delights", "Complete a sector in free play mode with a Kardashev scale value of 0.7."],
        ["Finch", "Reach a score of 52 in sector 3."],
        ["Fledgling", "Reach a score of 32 in sector 2."],
        ["Fungi Friend", "Complete sector 8 without recalling or moving any Volt Shrooms."],
        ["Gold Finch", "Reach a score of 55 in sector 3.1."],
        ["Green Alula", "Cultivate at least 10 plants in sector 9."],
        ["Hard Melting", "Melt all ice on any fully covered asteroid in sector 6."],
        ["Hatchling", "Reach a score of 20 in sector 1."],
        ["Hummingbird", "Reach 75% of the maximum score in sector 2.1."],
        ["Ice Breaker", "Complete a small free play mode sector at any complexity with one feature enabled."],
        ["Kingfisher", "Reach a score of 64 in sector 4."],
        ["Leg Day", "Complete a medium-sized free play mode sector at medium complexity with 3 features enabled."],
        ["Logistics", "Transport 8 different types of resources between asteroids."],
        ["Melting and Molting", "Complete a large free play mode sector at medium complexity with 4 features enabled."],
        ["Mostly Organic", "Complete sector 10 without using more than 1 extractor."],
        ["On the Shoulders of Dwarves", "Complete sector 11 without using pipes to transport resources to a launch pad."],
        ["Overload", "Create an energy network transmitting at least 40   in sector 5."],
        ["Owl", "Reach a score of 85 in sector 9."],
        ["Prime Slime", "Collect a total of 100  in free play mode."],
        ["Rare Finds", "Complete a large free play mode sector at high complexity with 6 features enabled."],
        ["Resident Bird", "Complete sector 2.1 without claiming more than 3 asteroids."],
        ["Robin", "Reach a score of 76 in sector 5."],
        ["Ruthlessly Efficient", "Reach station level 14   without purchasing more than one of each production building."],
        ["Scorching Star", "Reach 75  in a large free play mode sector."],
        ["Sector 1 completed!", "Complete sector 1."],
        ["Sector 10 completed!", "Complete sector 10."],
        ["Sector 11 completed!", "Complete sector 11."],
        ["Sector 12 completed!", "Complete sector 12."],
        ["Sector 13 completed!", "Complete sector 13."],
        ["Sector 14 completed!", "Complete sector 14."],
        ["Sector 2 completed!", "Complete sector 2."],
        ["Sector 2.1 completed!", "Complete sector 2.1."],
        ["Sector 3 completed!", "Complete sector 3."],
        ["Sector 3.1 completed!", "Complete sector 3.1."],
        ["Sector 4 completed!", "Complete sector 4."],
        ["Sector 5 completed!", "Complete sector 5."],
        ["Sector 5.1 completed!", "Complete sector 5.1."],
        ["Sector 6 completed!", "Complete sector 6."],
        ["Sector 7 completed!", "Complete sector 7."],
        ["Sector 8 completed!", "Complete sector 8."],
        ["Sector 9 completed!", "Complete sector 9."],
        ["Space Falcon", "Complete sector 1 in under 3.5 minutes."],
        ["Sprout Scout", "Collect 100 nuggets with your rover in free play mode."],
        ["Sunny Side Up", "Complete a sector in free play mode with a Kardashev scale value of 0.5."],
        ["Things Are Looking Up", "Collect a total of 10  in free play mode."],
        ["Warbler", "Reach a score of 75 in sector 8."],
        ["Wren", "Reach a score of 70 in sector 7."],
    ];

    assert.strictEqual(officialAchievements.length, 59, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
