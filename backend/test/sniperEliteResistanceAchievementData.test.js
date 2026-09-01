import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/sniper-elite-resistance.json - 70 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2169200 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("sniper-elite-resistance");

test("getPlannerData('sniper-elite-resistance') returns real planner data with 70 curated achievements", () => {

    assert.ok(game, "expected real planner data for sniper-elite-resistance");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 70);

});

test("every Sniper Elite: Resistance achievement has a unique id from 1 to 70 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 70 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 70);
    assert.strictEqual(new Set(apinames).size, 70);

});

test("every Sniper Elite: Resistance achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 70 Sniper Elite: Resistance achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Always Greener", "While in Tall Grass, kill 50 Soldiers."],
        ["B-Movie", "Lights, Camera, ACHTUNG! - Complete the mission with a 2 star rating."],
        ["Blast from the Past", "Complete Mission 6: infiltrate Fort Rouge and escape before the Allied bombers strike."],
        ["Blaze of Gory", "Kill 50 enemies with Traps."],
        ["Blockbuster", "Lights, Camera, ACHTUNG! - Complete the mission on Authentic difficulty."],
        ["Bomb Squad", "Ensure Allied secrets remain unknown and confirm the location of Site D."],
        ["Brothers in Arms", "Play one team-based PVP match."],
        ["Climbing the Ranks", "Reach rank 40."],
        ["Communication Breakdown", "Striking Range - Complete the mission with a 2 star rating."],
        ["Crème de la Crème", "Complete the entire campaign on Authentic difficulty."],
        ["Dam Buster", "Sabotage the Dam and destroy the AA guns."],
        ["Das Nuts!", "Get a testicle shot with a Rifle from a distance of 100 meters or more."],
        ["Eyes on the Prize", "Kill 150 enemies with any weapon while in Iron Sights."],
        ["Fast and Fuhrer-less", "Lights, Camera, ACHTUNG! - Kill only Hitler and exfiltrate."],
        ["File O' Facts", "Recover all evidence implicating Resistance members within the Library in Dead Drop."],
        ["Finders Keepers", "Kill 50 enemy soldiers with Found Weapons."],
        ["Full English", "Complete 11 Optional objectives."],
        ["Going the Distance", "Total kill distance of 100,000 meters."],
        ["Grapes of Wrath", "Complete Mission 7: infiltrate the V1 rocket site and destroy the Zugwerfer."],
        ["Gunslinger", "Kill 150 enemies with a Pistol."],
        ["He did Nazi-it Coming", "Lights, Camera, ACHTUNG! - Kill Hitler at a distance of 250 meters or more."],
        ["Hold the Line", "Defeat an invading Sniper Jager."],
        ["Hostile Takeover", "Win one Axis Invasion as an Invader."],
        ["In The Dead Of Reich", "Lights, Camera, ACHTUNG! - Kill Hitler and exfiltrate without ever being detected."],
        ["Industrial Action", "Complete Mission 5: destroy the underground chemical weapons plant and stop Kleine Blume production."],
        ["Innovator", "Interact with 22 Workbenches."],
        ["Jack of All Trades", "Get a kill with 20 different Weapons."],
        ["Jailbreak", "Striking Range - Complete the mission on Authentic difficulty."],
        ["Just a Scratch", "Complete any mission, excluding Mission 1 and Mission 9, on any difficulty without healing."],
        ["Knives for a Pro", "Perform 100 lethal Takedowns."],
        ["Le Fantôme", "Achieve 250 Ghost Kills."],
        ["Lethal Love letter", "Mud and Thunder - Complete the mission with a 2 star rating."],
        ["Lost its way Gnome", "Find the French Resistance Gnome and take a Picture."],
        ["Master-at-arms", "Become the Master of each Weapon."],
        ["Mastermind", "Headshot Kruger."],
        ["Mein Juewel", "Lights, Camera, ACHTUNG! - Kill Hitler with a testicle shot."],
        ["Mis-guided-missile", "Mud and Thunder - Complete the mission."],
        ["Mortar Combat", "Vercors Vendetta - Complete the mission."],
        ["Nein-a Blume", "Vercors Vendetta - Complete the mission with a 2 star rating."],
        ["Open Surgery", "Hit every Organ at least once with a Rifle."],
        ["Pen Pal", "Collect 35 Personal Letters."],
        ["Pistol Perfectionist", "Obtain Six Pistol-related Mastery Medals."],
        ["Propaganda Machine", "Complete all Propaganda missions with a 3 star rating on Authentic difficulty."],
        ["Propagandist", "Complete all Propaganda missions with a 3 star rating."],
        ["Revered with Rifles", "Obtain Seven Rifle-related Mastery Medals."],
        ["Scoping Mechanism", "Kill 150 enemies with a Rifle while in Iron Sights."],
        ["Secondary Supremacy", "Obtain Eight Secondary-related Mastery Medals."],
        ["Set to Blow", "Kill 20 soldiers using Booby traps."],
        ["Sharpshooter", "Kill 350 enemies with a Rifle."],
        ["Silent but Deadly", "Kill 50 enemies during a Sound Mask."],
        ["Skirmisher", "Kill 300 enemies with a Secondary Weapon."],
        ["Spread Your Wings", "Destroy 21 Dead-eye Targets."],
        ["Sprung a Leak", "Sabotage the Dam's pump room in Collision Course."],
        ["Stopping Traffic", "Destroy the Trucks carrying Kleine Blume ingredients in Devil's Cauldron."],
        ["Survivalist", "Complete an entire Survival mission."],
        ["Tactician", "Make a Tank shoot and destroy another enemy Vehicle."],
        ["Take 5, and... ACHTUNG!", "Lights, Camera, ACHTUNG! - Kill Hitler 5 times."],
        ["Tanks for Nothing!", "Destroy the Panzer Tank in End of the Line."],
        ["That’s a Wrap!", "Lights, Camera, ACHTUNG! - Complete the mission."],
        ["The Big Guns", "Kill 50 soldiers with Heavy weapons."],
        ["The Path of Most Resistance", "Mud and Thunder - Complete the mission on Authentic difficulty."],
        ["Three Birds, One Stone", "Kill 3 on-foot soldiers with one Grenade."],
        ["Top Secret", "Collect 35 Classified Documents."],
        ["Trainwreck", "Raid the Hotel Terminus and sabotage the Sonderzüge."],
        ["Treasure Hunter", "Collect 22 Hidden Items."],
        ["Vercors' Vengeance", "Vercors Vendetta - Complete the mission on Authentic difficulty."],
        ["Vergeltungswaffe", "Striking Range - Complete the mission."],
        ["Vive La Résistance", "Complete the campaign."],
        ["Welcome to the Resistance", "Find the Mole and uncover the Superweapon plot."],
        ["Whatever it Takes", "Complete Mission 8: stop the Zugwerfers from launching and disrupting the D-Day landings."],
    ];

    assert.strictEqual(officialAchievements.length, 70, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
