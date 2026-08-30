import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/nova-drift.json - 40 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 858210 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("nova-drift");

test("getPlannerData('nova-drift') returns real planner data with 40 curated achievements", () => {

    assert.ok(game, "expected real planner data for nova-drift");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 40);

});

test("every Nova Drift achievement has a unique id from 1 to 40 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 40 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 40);
    assert.strictEqual(new Set(apinames).size, 40);

});

test("every Nova Drift achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 40 Nova Drift achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["'Tis But A Scratch", "Destroy all of Warbringer's components"],
        ["A Bold Strategy", "Trigger Retribution without being damaged by an enemy or hazard"],
        ["Boop Noodle", "Be a Leviathan with at least a -35% size modifier"],
        ["Bullet Sponge", "End a game having sustained 12,000 total damage from any source"],
        ["Chaos Is A Ladder", "Control 30 orbs of discord"],
        ["Divide by Zero", "Trigger 40 or more Warp Shield explosions at once"],
        ["Don't Play Dice with The Universe", "Defeat a wave 100 boss without ever rerolling"],
        ["Filled with Determination", "Score 200,000 points under the effects of Last Stand"],
        ["Gaze Into the Abyss", "Discover The Void: Exhaust the random mod pool"],
        ["I Get By With A Little Help From My Friends", "Achieve an Ally construct limit of 4"],
        ["I Regret Everything", "With Omnishield, die with your shields protecting your hull"],
        ["I Want It All", "Get a score of 250,000+ while owning 9 Super Mods"],
        ["It Was At That Moment He Knew...", "Have a shield that powerfully sucks enemies toward you"],
        ["Joust", "As a Hullbreaker, defeat Seraph with crash damage during its charge phase"],
        ["Ludicrous Speed", "Deal at least 25,000 crash damage in one hit"],
        ["Malfunction", "Create a build where your Bastion shield detonates and deals burn damage the instant it deploys"],
        ["Missile Massacre", "Fire Salvo with at least 300 missiles in reserve"],
        ["No, You", "Reflect an enemy projectile with your weapon construct"],
        ["NOT THE BEES", "Control 50 Swarm Constructs"],
        ["Planet Buster", "Deal over 30,000 damage in one hit"],
        ["Pure of Mod and Body", "Finish a game scoring at least 200,000 points while possessing Ataraxia and at most 7 other mods"],
        ["Restraining Order", "Sacrifice half of your defenses to Obsession"],
        ["Savor The Void", "Be offered 7 of THE VOID while upgrading"],
        ["Secret Weapon", "Convert Reflexive Shields into a rapid-fire weapon"],
        ["Serenity Now", "Reach +150% global damage from the Ataraxia Super Mod without Draft Mode"],
        ["Shock and Awe", "Make Discharge your primary weapon"],
        ["Shouldn’t Have Been Standing There", "Penetrate 20 or more targets with one Railgun projectile"],
        ["Social Distancing", "Achieve +75% battlefield size"],
        ["Sonic Rainboom", "Self-trigger Volatile Shields with Celestial Lance while under the effects of a Hyper Boost power-up"],
        ["Steady... Steady...", "Charge your weapon for a full minute"],
        ["Still Alive", "Keep your Turret alive for 4 minutes"],
        ["The Best Defense", "Using the Architect, self-destruct your Bastion Shield triggering Volatile Shields, Self Destruction, and Tempest Break"],
        ["The Hard Way", "Destroy Station Omega without breaking any of its nodes"],
        ["This is Fine", "End a game having sustained 6,000 or more damage from Dying Star"],
        ["Trolley Problem", "Die to a Cargo Train"],
        ["Turbo Tortoise", "Achieve a Bastion assembly time of 3.5 seconds or less"],
        ["Ultra Chaos", "Reach level 40 in non-Draft Mode having only chosen the central mod"],
        ["Volatile Projectile", "Trigger Volatile Shields on a Blade Drone"],
        ["World Serpent", "Become 80 segments long as a Leviathan"],
        ["Ya Basic", "Defeat a wave 100 boss with the starting gear"],
    ];

    assert.strictEqual(officialAchievements.length, 40, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
