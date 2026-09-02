import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/astroneer.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 361420 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("astroneer");

test("getPlannerData('astroneer') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for astroneer");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every ASTRONEER achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every ASTRONEER achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 ASTRONEER achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["...And Beyond", "Complete the final objective after every Gateway Engine is active - the end of the game, described here spoiler-free."],
        ["A Little Byte Goes a Long Way", "Scan a Research Sample of any type."],
        ["A Little Gassy", "Collect a gas with the Atmospheric Condenser."],
        ["Atrox Awakened", "Activate the Gateway Engine at the core of Atrox."],
        ["Baby You're a Firework", "Launch 10 fireworks in 10 seconds."],
        ["Barrier Buster", "Use a drill to deform a harder type of terrain."],
        ["Blast Off", "Use a shuttle to leave Sylva."],
        ["Calidor Awakened", "Activate the Gateway Engine at the core of Calidor."],
        ["Chop Shop", "Scrap 50 objects in a Shredder."],
        ["Cool As Ice", "Visit Glacio."],
        ["Delve Greedily and Deep", "Travel to the Mantle depth of any planet."],
        ["Desolo Awakened", "Activate the Gateway Engine at the core of Desolo."],
        ["Dirt Don't Hurt", "Extract a resource using the Soil Centrifuge."],
        ["Do Science To It", "Synthesize a composite material with the Chemistry Lab."],
        ["Encounter With the Infinite", "Reach the Gateway Engine at the core of a planet for the first time."],
        ["EXO Dynamics Outreach Advocate", "Spend more than 4 total hours in multiplayer sessions."],
        ["EXO Dynamics Outreach Participant", "Join or host a multiplayer game session."],
        ["EXO Dynamics Solar System Mastery", "Obtain every Achievement in Astroneer."],
        ["EXO Dynamics Training Seal of Approval", "Complete the training missions."],
        ["First Step Into a Larger World", "Supply enough power to a Gateway Chamber to activate its Odd Stone."],
        ["Galactic Boogaloo", "Dance on every planet."],
        ["Gas Giant", "Use the Atmospheric Condenser to collect every type of gas."],
        ["Glacio Awakened", "Activate the Gateway Engine at the core of Glacio."],
        ["Hang 10-Squared", "Slide uninterrupted for at least 10 seconds."],
        ["I Feel Sick", "Visit Atrox."],
        ["In An Astroneer's Garden", "Plant a Spinelily, Lashleaf, Bouncevine, Wheezeweed, Thistlewhip, Popcoral and Daggeroot seed."],
        ["Information Dump", "Reach more than 150 Bytes-Per-Minute of concurrent research."],
        ["Interplanetary Road Trip", "Travel to another planet with another player in the same shuttle."],
        ["Into the Woods", "Visit Vesania."],
        ["It's a Dry Heat", "Visit Calidor."],
        ["Journey to the Center of the Thing", "Travel to the center of any planet in a multiplayer game."],
        ["Junk Trader", "Use the Trade Platform to exchange Scrap for another resource."],
        ["Lab Rat", "Use the Chemistry Lab to synthesize each composite material."],
        ["Let Me Borrow This Just A Second", "Use a Research Chamber to research something in another Astroneer's game."],
        ["Making a New Friend", "Plant a seed."],
        ["Novus Awakened", "Activate the Gateway Engine at the core of Novus."],
        ["Now You See Me...", "Teleport from one activated Gateway Chamber to another."],
        ["One Small Step", "Visit Desolo."],
        ["Pursuit of Knowledge", "Research an item in the Research Chamber."],
        ["Research Scientist", "Gain 100,000 Bytes across all games."],
        ["Resources in the Rough", "Use the Terrain Tool to harvest every type of raw material."],
        ["Scrap for the Scrapper", "Scrap an object in a Shredder."],
        ["Secrets of the Universe", "Activate every Gateway Chamber on every planet in the solar system."],
        ["Shapes and Other Shapes", "Discover your first Gateway Chamber, one of the glassy scaffold structures on a planet's surface."],
        ["Sweet New Ride", "Build a rover of any type."],
        ["Sylva Awakened", "Activate the Gateway Engine at the core of Sylva with its Geometric Triptych."],
        ["Thank You For Your Continued Assistance", "Solve an EXO Dynamics Research Aid."],
        ["The First Discovery", "Use the Probe Scanner to find one of the mysterious Vintage Probes."],
        ["The Wanderer's Way", "Use the Probe Scanner to find every one of the mysterious Vintage Probes scattered across the solar system."],
        ["They Who Smelt It", "Use the Smelter to craft every type of refined resource."],
        ["To Infinity...", "Activate the Gateway Engine at the core of all seven planets."],
        ["To the Forest Moon", "Visit Novus."],
        ["Up By the Roots", "Dig up a hazard."],
        ["Vesania Awakened", "Activate the Gateway Engine at the core of Vesania."],
        ["Well Hello There, Fancypants", "Change into a different suit."],
        ["Where We're Going, We Don't Need Roads", "Drive an airborne rover for at least 10 seconds."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
