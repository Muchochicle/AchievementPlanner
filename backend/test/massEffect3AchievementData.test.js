import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mass-effect-3.json - 68 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1238020 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mass-effect-3");

test("getPlannerData('mass-effect-3') returns real planner data with 68 curated achievements", () => {

    assert.ok(game, "expected real planner data for mass-effect-3");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 68);

});

test("every Mass Effect 3 achievement has a unique id from 1 to 68 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 68 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 68);
    assert.strictEqual(new Set(apinames).size, 68);

});

test("every Mass Effect 3 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 68 Mass Effect 3 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Personal Touch", "Modify a weapon."],
        ["Almost There", "Reach level 15 in multiplayer or level 50 in single-player."],
        ["Always Prepared", "Obtain two non-customizable suits of armor."],
        ["Arbiter", "Win a political stand-off."],
        ["Battle Scarred", "Promote a multiplayer character to the Galaxy at War or import an ME3 character."],
        ["Bringer of War", "Chase down an assassin."],
        ["Bruiser", "Kill 100 enemies with melee attacks."],
        ["Combined Arms", "Perform any combination of 50 biotic combos or tech bursts."],
        ["Conspiracy Theorist", "Use clues to pinpoint the exact location of an objective."],
        ["Defender", "Attain the highest level of readiness in each theater of war."],
        ["Driven", "Return to active duty."],
        ["Enlisted", "Start a character in multiplayer or customize a character in single-player."],
        ["Executioner", "Defeat an old adversary."],
        ["Explorer", "Complete three multiplayer matches or five N7 missions."],
        ["Eye of the Hurricane", "Kill a brute while it's charging you."],
        ["Fact Finder", "Discover an enemy's monstrous origin."],
        ["Family Matters", "Rescue a civilian from Reaper forces."],
        ["Focused", "Evolve any of your powers to rank 6."],
        ["Freedom Fighter", "Find all required intel to help Eden Prime's colonists."],
        ["Giant Killer", "Defeat a harvester."],
        ["Gunsmith", "Upgrade any weapon to level 10."],
        ["Hard Target", "Call down an orbital strike."],
        ["High Society", "Go undercover to follow a lead."],
        ["Hijacker", "Hijack an Atlas mech."],
        ["Insanity", "Finish the game on Insanity without changing difficulty after leaving Earth."],
        ["King of the Castle", "Win a prize at one of the arcade games."],
        ["Last Resort", "Stop an out-of-control scheme before it's too late."],
        ["Last Witness", "Extract ancient technology."],
        ["Legend", "Mission accomplished."],
        ["Liberator", "Stop a Cerberus kidnapping."],
        ["Long Service Medal", "Complete Mass Effect 3 twice, or once with a Mass Effect 2 import."],
        ["Lost and Found", "Dispatch 10 probes to retrieve people or resources in Reaper territory."],
        ["Mail Slot", "Kill 10 guardians with headshots from the front while their shields are raised."],
        ["Master and Commander", "Deliver most of the Galaxy at War assets to the final conflict."],
        ["Meticulous", "Complete all the Command Center side-missions on Omega."],
        ["Mobilizer", "Bring a veteran officer aboard."],
        ["No Stone Unturned", "Investigate a sinister conspiracy."],
        ["Overload Specialist", "Overload the shields of 100 enemies."],
        ["Paramour", "Establish or rekindle a romantic relationship."],
        ["Party Crasher", "Sabotage a dreadnought."],
        ["Pathfinder", "Explore a lost city."],
        ["Patriot", "Make the final assault."],
        ["Peak Condition", "Reach level 20 in multiplayer or level 60 in single-player."],
        ["Perfect Host", "Throw a party for your friends."],
        ["Priority Target", "Discover a plot against you."],
        ["Problem Solver", "Evacuate a scientific facility."],
        ["Prothean Expert", "Learn more about the Prothean Empire."],
        ["Pyromaniac", "Set 100 enemies on fire with powers."],
        ["Recruit", "Kill 250 enemies."],
        ["Saboteur", "Disable a group of fighter squadrons."],
        ["Savior", "Free Omega from Cerberus Occupation."],
        ["Shopaholic", "Visit a store in the single-player campaign."],
        ["Simulated Hero", "Score 9999 points in the combat simulator on Normal, Hardcore, or Insanity."],
        ["Sky High", "Lift 100 enemies off the ground with powers."],
        ["Soldier", "Kill 1,000 enemies."],
        ["Talon", "Find the Talon leader."],
        ["Team Player", "Infiltrate an enemy stronghold with your crew."],
        ["Technical Issues", "Investigate a strange occurrence in the combat simulator."],
        ["The One and Only", "Defeat a group of Spectre-level opponents on Normal, Hardcore, or Insanity."],
        ["Tour of Duty", "Finish all multiplayer maps or all N7 missions in single-player."],
        ["Tourist", "Complete one multiplayer match or two N7 missions."],
        ["Tunnel Rat", "Survive the swarm."],
        ["Under Pressure", "Uncover an ancient secret."],
        ["Untouchable", "Escape a Reaper in the galaxy map."],
        ["Unwavering", "Finish all multiplayer maps on Gold or all single-player missions on Insanity."],
        ["Veteran", "Kill 5,000 enemies."],
        ["Well Connected", "Send a warning across the galaxy."],
        ["World Shaker", "Destroy an Atlas dropped from orbit."],
    ];

    assert.strictEqual(officialAchievements.length, 68, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
