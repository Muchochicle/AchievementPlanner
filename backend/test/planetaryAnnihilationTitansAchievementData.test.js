import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/planetary-annihilation-titans.json - 19 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 386070 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("planetary-annihilation-titans");

test("getPlannerData('planetary-annihilation-titans') returns real planner data with 19 curated achievements", () => {

    assert.ok(game, "expected real planner data for planetary-annihilation-titans");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 19);

});

test("every Planetary Annihilation: TITANS achievement has a unique id from 1 to 19 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 19 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 19);
    assert.strictEqual(new Set(apinames).size, 19);

});

test("every Planetary Annihilation: TITANS achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 19 Planetary Annihilation: TITANS achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Against All Odds", "Win against three times as many players"],
        ["Architect", "Build every structure in a single game"],
        ["Efficient", "Use more than 95% of the metal and energy you produce in a match"],
        ["Enthusiast", "Watch competitive play for two hours as a spectator"],
        ["Fanatic", "Watch competitive play for eight hours as a spectator"],
        ["Field Commander", "Manage your armies with all ten control groups"],
        ["Fully Operational", "Activate an annihilaser"],
        ["Galactic Annihilation", "Annihilate your opposition throughout the galaxy"],
        ["Him or Me", "Target an incoming planet with an annihilaser"],
        ["Jack of All Trades", "Build every kind of basic factory"],
        ["One Down", "Eliminate a faction in galactic war"],
        ["One of Each", "Build every kind of unit"],
        ["Panopticon", "Keep tabs on your conquest with ten camera anchors"],
        ["Ruthless", "Kill a commander within five minutes, five times"],
        ["Team Player", "Participate in ten team games"],
        ["Technological Terror", "Destroy five enemy planets with annihilasers"],
        ["Technophile", "Discover a new loadout in galactic war"],
        ["World Ender", "Smash five enemy planets"],
        ["Worldbuilder", "Start a game with a custom system"],
    ];

    assert.strictEqual(officialAchievements.length, 19, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
