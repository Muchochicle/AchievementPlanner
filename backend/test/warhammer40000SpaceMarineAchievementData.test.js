import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/warhammer-40000-space-marine.json - 60 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 55150 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("warhammer-40000-space-marine");

test("getPlannerData('warhammer-40000-space-marine') returns real planner data with 60 curated achievements", () => {

    assert.ok(game, "expected real planner data for warhammer-40000-space-marine");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 60);

});

test("every Warhammer 40,000: Space Marine achievement has a unique id from 1 to 60 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 60 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 60);
    assert.strictEqual(new Set(apinames).size, 60);

});

test("every Warhammer 40,000: Space Marine achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 60 Warhammer 40,000: Space Marine achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Angel of Death", "Kill 500 enemies using Ranged weapons."],
        ["Armored in Glory", "Complete 10 armor challenges."],
        ["Battle Brother", "Get a Multiplayer character to Lvl 10."],
        ["Blast Radius", "Multi-kill -- 5 enemies with 1 Frag grenade."],
        ["Blood for the Blood God", "Complete Chaos Invasion Arena 2."],
        ["Brute Force...Unleashed  ", "Complete a Chapter of the single-player game using only the Vengeance Launcher and Power Axe."],
        ["Burn Them All", "Complete a Chapter of the single-player campaign using only Plasma weapons."],
        ["But I Am Finished With You", "Kill Warboss Grimskull once and for all. Story-related, unmissable."],
        ["Captain", "Get a Multiplayer character to Lvl 30."],
        ["Chain of Death", "Multi-kill -- Detonate a chain of 5 consecutive Vengeance Launcher rounds, killing 10 enemies."],
        ["Chapter Master", "Get a Multiplayer character to Lvl 40."],
        ["Command Squad", "Reunite with your Space Marine brothers (Chapter 2). Story-related, unmissable."],
        ["Death from Above", "Kill 25 enemies with Ground Pound."],
        ["Death to the False Emperor", "Complete Chaos Invasion Arena 1."],
        ["Defender", "Kill 25 opponents who are capturing your Control Point in Seize Ground."],
        ["Devastation!", "Have 10 times more kills than deaths in a single game of Annihilation."],
        ["Die, Heretics", "Kill 50 Chaos Space Marines."],
        ["Down to Earth", "Kill 50 Assault Marines/Raptors in mid-air."],
        ["Feel My Wrath", "Kill 250 enemies using Melee Fury attacks."],
        ["Finesse and Fury", "Complete a Chapter of the single-player game using only Stalker-Pattern Bolter and Chainsword."],
        ["Firepower", "Kill 250 enemies using Exotic weapons."],
        ["Frugal Spenders", "Complete a Chaos Invasion Arena without your team using any lives."],
        ["Glorious Slaughter", "Kill 75 enemies using Executions."],
        ["Glory to the Dark Gods!", "Achieve a team score of higher than 270,000 in the Chaos Invasion mission."],
        ["Hammer of the Imperium", "Use the Invictus Titan to destroy the Orbital Spire. Story-related, unmissable."],
        ["Here, At the End of All Things", "Kill Daemon Prince Nemeroth, the final boss. Story-related, unmissable."],
        ["Heretic", "Complete a public Co-op game in the Chaos Invasion mission."],
        ["Into the Breach", "Fight your way to the crashed Ork Rok (Chapter 2). Story-related, unmissable."],
        ["Jack of All Trades", "Play 10 Multiplayer games using each class."],
        ["Keeper of the Armory", "Complete all the weapon challenges."],
        ["Kill, for the Sake of Killing", "Complete 3 challenges in one Chaos Invasion Arena."],
        ["Let the Galaxy Burn", "Complete the Chaos Invasion mission."],
        ["Let the Heavens Bleed", "Defeat the Chaos Invasion bonus wave."],
        ["Lexicanum", "Collect 10 Servo Skulls."],
        ["Librarian of Macragge", "Collect all Servo Skulls."],
        ["Master Crafted", "Fully customize a Space Marine and a Chaos Space Marine character."],
        ["Master of Arms", "Complete 5 weapon challenges."],
        ["Master of Sword and Gun", "Complete a Chapter of the single-player campaign using only the Bolt Pistol and Chainsword."],
        ["Master of the Clean Kill", "Get 250 Headshots."],
        ["Nob Down", "Win 10 struggles against the Ork Nob."],
        ["None Can Stand Before You", "Complete the entire game on Hard difficulty."],
        ["Not So Tough", "Kill 10 'Ard Boyz."],
        ["Precision Killer", "Multi-kill -- 2 enemies with 1 Stalker-Pattern bolter shot."],
        ["Put Them Down", "Get 100 Headshots."],
        ["Sector Cleared", "Successfully complete a Space Marine Exterminatus Arena (Kalkys Facility Escape or Hab Center Assault)."],
        ["Shapeshifter", "Play each class in Multiplayer."],
        ["Shock & Awe", "Kill 150 enemies using the Charge attack."],
        ["Silence the Cannon", "Destroy the Orbital Gun (Chapter 3). Story-related, unmissable."],
        ["Skulls for the Skull Throne", "Complete Chaos Invasion Arena 3."],
        ["Success is Measured in Blood", "Kill 500 enemies using Melee weapons."],
        ["The Bigger They Are...", "Kill 25 Ork Nobs."],
        ["The Emperor Protects", "Complete Part 1 of the game on Hard difficulty in a single session without dying or restarting."],
        ["The Emperor's Marksman", "Kill 10 enemies in a row in a single Ranged Fury activation."],
        ["The Might of the Righteous", "Kill 100 enemies."],
        ["True Son of the Emperor", "Kill 40,000 enemies in the game (all game modes combined)."],
        ["Veteran", "Get a Multiplayer character to Lvl 20."],
        ["Visible, Violent Death", "Kill 2500 enemies."],
        ["Warrior of Darkness and Light", "Play 10 Multiplayer games as Space Marine and 10 Multiplayer games as Chaos Marine."],
        ["We Take Our Chances", "Fire the Psychic Scourge (Chapter 11). Story-related, unmissable."],
        ["You Must Carry It", "Retrieve the Power Source (Chapter 6). Story-related, unmissable."],
    ];

    assert.strictEqual(officialAchievements.length, 60, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
