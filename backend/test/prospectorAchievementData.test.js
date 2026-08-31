import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/prospector.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1928080 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("prospector");

test("getPlannerData('prospector') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for prospector");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every Prospector achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every Prospector achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 Prospector achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Alien mastery", "Acquire all alien boons"],
        ["Alien Presence", "Find a Rune Gate "],
        ["Archeologist", "Acquire an alien collectable"],
        ["Beastmaster", "Complete contract for Praetoria"],
        ["BEST friends forever!", "Repair O.P.H.E.L.I.A. after she is damaged"],
        ["Big sky theory", "Acquire hovercraft mod"],
        ["Blue marble", "Touchdown on Volaris Prime"],
        ["Broken marble", "Touchdown on abandoned asteroid mine"],
        ["Contact", "Place a Stellaris Array on every planet"],
        ["Cowpoke", "Domesticate a wild animal"],
        ["Daily step count", "Charge your suit 100 times with the Kinetic Suit mod"],
        ["Danger, Will Robinson!", "Defeat the Jelly Momma"],
        ["Family business", "Complete contract for Chrono's Reach"],
        ["Friend in need", "Repair O.P.H.E.L.I.A unit"],
        ["Human touch", "Repair the automated mining facilities on Volaris Prime"],
        ["Lesser evil", "Complete contract for Icaron"],
        ["Like a stone", "Drown in a water hazard"],
        ["Machina Maestro", "Build your first logistics bot"],
        ["Moth Whisperer", "Build a Moth Incubator "],
        ["Mothballs required", "Complete contract for Volaris Prime"],
        ["Mr. Freeze", "Kill a hostile with the Cryo Cannon"],
        ["New beginnings", "Join the Starborne Collective"],
        ["Pack mule", "Ask Ophelia to carry some heavy salvage"],
        ["Prison break", "Free the alien prisoner"],
        ["Purple marble", "Touchdown on Tojo c-2A1"],
        ["Rocket man", "Acquire a jetpack"],
        ["Safe from the storm ", "Hide in Ophelia or your Habitat during a solar storm"],
        ["Shipping master", "Achieve max rank shipping"],
        ["Shocking...", "Attack a hostile with a Tesla Sentry"],
        ["Shreaded ", "Use Agroforge to harvest organics"],
        ["The old gods are watching....", "Sacrifice alien collectables for a boon"],
        ["Time for a star trip", "Complete contract for Starborne Collective"],
        ["To the moon!", "Ship your first order"],
        ["Wind farm", "Build 20 wind turbines "],
        ["Yellow marble", "Touchdown on Praetoria"],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
