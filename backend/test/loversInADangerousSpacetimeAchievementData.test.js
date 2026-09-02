import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/lovers-in-a-dangerous-spacetime.json - 28 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 252110 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("lovers-in-a-dangerous-spacetime");

test("getPlannerData('lovers-in-a-dangerous-spacetime') returns real planner data with 28 curated achievements", () => {

    assert.ok(game, "expected real planner data for lovers-in-a-dangerous-spacetime");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 28);

});

test("every Lovers in a Dangerous Spacetime achievement has a unique id from 1 to 28 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 28 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 28);
    assert.strictEqual(new Set(apinames).size, 28);

});

test("every Lovers in a Dangerous Spacetime achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 28 Lovers in a Dangerous Spacetime achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["All Creatures Great and Small", "Rescue every captured friend."],
        ["Bear-Knuckle Boxing", "Defeat Ursa Major."],
        ["Belt It Out", "Defeat Orion."],
        ["Clearing the Air", "Finish a level after removing all fog of war."],
        ["Cooties", "Finish a level without crossing paths with your partner."],
        ["Couples Dance Lessons", "Pirouette 15 times in a single level."],
        ["Dressed to the Nines", "Fill up all gem slots in a fully upgraded ship."],
        ["Entrapment", "Kill 20 enemies with security guns in a single level."],
        ["Exposed", "Remove all of King Cepheus's shields."],
        ["Fight With Care, Bear", "Defeat Ursa Major without taking a punch."],
        ["First Date", "Beat any level in two player mode."],
        ["Gemologist", "Have 10 unused gems in your ship at one time."],
        ["Generosity", "Throw a gem into a station that is being used by another player."],
        ["Love Has Prevailed", "Defeat King Cepheus."],
        ["Love Is All You Need", "Play through a campaign without using any gems."],
        ["Missile Kiss", "Make two Power-Metal missiles collide."],
        ["Overprotective", "Have 20 cells at one time on the Metal-Beam shield."],
        ["Perfect Date", "Finish a level without taking damage."],
        ["Rocket Science", "Escape a white dwarf without shooting or ramming it."],
        ["Romantic Getaway", "Finish the tutorial."],
        ["Seat Warmer", "Use every station in a single level."],
        ["Space-man's Best Friend", "Beat any level with the help of your trusty space-pet."],
        ["SPF 1000", "Deliver the final blow to Orion using a solar flare."],
        ["The Spice of Life", "Use three different types of Yamato weapons in a boss fight."],
        ["Token of Affection", "Earn one of each type of ship badge."],
        ["Underwater Expedition", "Defeat Cetus while its head is underwater."],
        ["Warm Embrace", "Survive after being fully enveloped by a bomb trap."],
        ["Wave Goodbye", "Defeat Cetus."],
    ];

    assert.strictEqual(officialAchievements.length, 28, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
