import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/marvel-cosmic-invasion.json - 35 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2753970 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched and cited in the frontend guide header.
// difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("marvel-cosmic-invasion");

test("getPlannerData('marvel-cosmic-invasion') returns real planner data with 35 curated achievements", () => {

    assert.ok(game, "expected real planner data for marvel-cosmic-invasion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 35);

});

test("every MARVEL Cosmic Invasion achievement has a unique id from 1 to 35 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 35 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 35);
    assert.strictEqual(new Set(apinames).size, 35);

});

test("every MARVEL Cosmic Invasion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 35 MARVEL Cosmic Invasion achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Adamantium Fury!", "Perform 100 hits combo as Wolverine"],
        ["Board Bash!", "Knock down 3 enemies affected by cosmic damage with a single Silver Surfer tackle"],
        ["Bug Repelled!", "Defeat Annihilus."],
        ["Clearing out Cobwebs!", "Rescue Venom."],
        ["Cosmic Cubist!", "Find every Cosmic Cube hidden within each stage."],
        ["Cosmic Ghost Blaster!", "Defeat 50 enemies using Cosmic Ghost Rider's blasters"],
        ["Cosmic Rescue!", "Rescue the Silver Surfer."],
        ["Dark Phoenix No More!", "Rescue Phoenix from her Dark Phoenix corruption."],
        ["Electric Trap!", "Trap 50 enemies with Iron Man's Electro-Charge attack"],
        ["Full of Photons!", "Defeat 50 enemies with Nova's photon blasts"],
        ["Fuzzy Grenadier!", "Defeat 50 enemies with Rocket's grenades"],
        ["Galactic Challenger!", "Complete all Stage Challenges"],
        ["Ground Pound!", "Knock down 3 enemies while using Venom's smashing grab on another adversary"],
        ["Hammer Time!", "Defeat 50 enemies with Beta Ray Bill's Stormbreaker"],
        ["Hits Parade!", "Perform a 200 Hits combo"],
        ["Knock'em down!", "Hit 4 enemies while throwing a single opponent with She-Hulk"],
        ["Mad Titan Thwarted!", "Defeat Thanos."],
        ["Matrix Maven!", "Unlock all rewards from the Matrix"],
        ["Maxed out Superhero!", "Maxed out a Superhero's Level"],
        ["Mighty Marvel Team-Up!", "Perform 50 successful Team Assist"],
        ["Mighty Shield!", "Deflect 50 projectiles with Captain America's shield"],
        ["Mindcontrol Meltdown!", "Rescue the mind-controlled Phyla-Vell."],
        ["Mutants United!", "Perform a Wolverine-and-Storm Team Assist on Dark Phoenix."],
        ["Panther Parry!", "Perform 50 kinetic parries as Black Panther"],
        ["Perfect Storm!", "Absorbed 10 electric attacks and dealt it back to an enemy as Storm"],
        ["Phoenix Flame!", "Defeat 15 enemies with Phoenix's Fire Dash and Air Attack"],
        ["Quantum Strike!", "Perform 50 successful teleport strikes as Phyla-Vell"],
        ["Roll Call!", "Complete the game with all characters"],
        ["Special Attack Assemble!", "Trigger a complete Team Special Attack together with 3 other players."],
        ["Superhero Squad!", "Complete the game in Multiplayer (local or online)"],
        ["Swinging Spider!", "Knock down 5 enemies in a single swinging kick with Spider-Man"],
        ["Teamwork Tussle!", "Complete a stage in Multiplayer (local or online)"],
        ["The Battle Begins!", "Complete the Prologue"],
        ["Ultimate Alliance!", "Reached Ultimate Team Level"],
        ["Variant Fighter!", "Defeat a hero while playing as that same hero."],
    ];

    assert.strictEqual(officialAchievements.length, 35, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
