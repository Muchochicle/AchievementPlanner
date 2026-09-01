import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mutazione.json - 20 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1080750 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("mutazione");

test("getPlannerData('mutazione') returns real planner data with 20 curated achievements", () => {

    assert.ok(game, "expected real planner data for mutazione");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 20);

});

test("every Mutazione achievement has a unique id from 1 to 20 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 20 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 20);
    assert.strictEqual(new Set(apinames).size, 20);

});

test("every Mutazione achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 20 Mutazione achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Apprentice Botanist", "Collect half of the seeds in Mutazione."],
        ["Bloom", "Papu hasn't bloomed in years, they say."],
        ["Bug-a-Bed", "Living close to nature."],
        ["Expert Botanist", "An almost complete collection of seeds."],
        ["Green Fingers", "How does your garden grow?"],
        ["Group Photo", "A fine Mutazione tradition."],
        ["Intermediate Botanist", "Collect three quarters of the seeds in Mutazione."],
        ["N+1", "The velominati speaks."],
        ["Omnivore", "If it's on a plate..."],
        ["Ravenous", "Hungry as heck."],
        ["Rebel Gardener", "It's not right, but it sure looks cool."],
        ["Seasoned Explorer", "Not all who wander are lost."],
        ["Seasoned Sea Dog", "Ahoy m'hearties!"],
        ["Spice Of Life", "Variety has something to do with it..."],
        ["Spirit Guide", "Did you imagine her?"],
        ["Strange Dreams", "Don't eat Biffalo Mozzarella before bed."],
        ["Vegan", "Environmentally BFF."],
        ["Veggie", "Environmentally friendly."],
        ["Welcome To Mutazione", "Arrive at Mutazione."],
        ["Wild Swimmer", "What are you supposed to do without lane ropes?"],
    ];

    assert.strictEqual(officialAchievements.length, 20, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
