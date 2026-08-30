import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/mass-effect-legendary-edition.json - 127 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1328670 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 127 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("mass-effect-legendary-edition");

test("getPlannerData('mass-effect-legendary-edition') returns real planner data with 127 curated achievements", () => {

    assert.ok(game, "expected real planner data for mass-effect-legendary-edition");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 127);

});

test("every Mass Effect Legendary Edition achievement has a unique id from 1 to 127 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 127 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 127);
    assert.strictEqual(new Set(apinames).size, 127);

});

test("every Mass Effect Legendary Edition achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 127 Mass Effect Legendary Edition achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A House Divided", "ME2: Hack a geth collective"],
        ["A Personal Touch", "ME3: Modify a weapon."],
        ["Against All Odds", "ME2: Survive suicide mission"],
        ["Agent", "ME2: Complete 5 missions discovered by scanning unexplored worlds"],
        ["AI Hacking Specialist", "ME1: Use AI Hacking 25 times"],
        ["Always Prepared", "ME3: Obtain two non-customizable suits of armor."],
        ["Arbiter", "ME3: Win a political stand-off."],
        ["Archivist", "ME1: Find all primary Alien: Council Races, Extinct Races and Non-Council Races codex entries"],
        ["Asari Ally", "ME1: Complete 5 missions with the asari squad member"],
        ["Barrier Mastery", "ME1: Use biotic Barrier 25 times"],
        ["Battlemaster", "ME2: Gain the loyalty of the krogan"],
        ["Big Game Hunter", "ME2: Thresher Maw defeated"],
        ["Bringer of War", "ME3: Chase down an assassin."],
        ["Broke, Blind, and Bedlam", "ME2: Gain the loyalty of the thief"],
        ["Bruiser", "Kill 100 enemies with melee attacks in Mass Effect 1, 2 or 3"],
        ["Cat's in the Cradle", "ME2: Gain the loyalty of the Assassin"],
        ["Catharsis", "ME2: Gain the loyalty of the biotic Convict"],
        ["Charismatic", "ME1: Use Charm or Intimidate to resolve an impossible situation in the game."],
        ["Colonial Savior", "ME1: Complete the Bring Down the Sky mission."],
        ["Colony Defense", "ME2: Defend a human colony from attack"],
        ["Combined Arms", "ME3: Perform any combination of 50 biotic combos or tech bursts."],
        ["Completionist", "ME1: Complete the majority of the game"],
        ["Council Legion of Merit", "ME1: Complete Virmire"],
        ["Damping Specialist", "ME1: Use Damping Field 25 times"],
        ["Digital Exorcist", "ME2: Successfully shut down the rogue VI in Project Overlord"],
        ["Distinguished Service Medal", "ME1: Complete Eden Prime"],
        ["Doppelganger", "ME2: Help the Justicar resolve her mission"],
        ["Driven", "ME3: Return to active duty."],
        ["Electronics Specialist", "ME1: Use Shield Overload 25 times"],
        ["Executioner", "ME3: Defeat an old adversary."],
        ["Eye of the Hurricane", "ME3: Kill a brute while it's charging you."],
        ["Fact Finder", "ME3: Discover an enemy's monstrous origin."],
        ["Fade Away", "ME2: Gain the loyalty of Archangel"],
        ["First Aid Specialist", "ME1: Use medi-gel 50 times"],
        ["Focused", "ME3: Evolve any of your powers to rank 6."],
        ["Friend or Foe", "ME2: Obtain geth technology"],
        ["Galactic Explorer", "ME2: Visit 100% of the planets in an unexplored cluster"],
        ["Ghost of the Father", "ME2: Gain the loyalty of the Cerberus Operative"],
        ["Ghost Ship", "ME2: Complete the investigation of a derelict alien vessel"],
        ["Giant Killer", "ME3: Defeat a harvester."],
        ["Gunsmith", "ME3: Upgrade any weapon to level 10."],
        ["Hard Target", "ME3: Call down an orbital strike."],
        ["Head Hunter", "ME2: Perform 30 headshot kills with any weapon on humanoid targets"],
        ["Heart of Darkness", "ME2: Confront the Shadow Broker"],
        ["Hijacker", "ME3: Hijack an Atlas mech."],
        ["Honorarium of Corporate Service", "ME1: Complete Noveria"],
        ["Incineration Specialist", "ME2: Incinerate the armor of 25 enemies"],
        ["Insanity I", "Complete Mass Effect 1, 2 or 3 on Insanity without changing difficulty"],
        ["Insanity II", "Complete two games in Mass Effect Legendary Edition on Insanity without changing difficulty"],
        ["Insanity III", "Complete all three games in Mass Effect Legendary Edition on Insanity without changing difficulty"],
        ["Krogan Ally", "ME1: Complete 5 missions with the krogan squad member"],
        ["Last Resort", "ME3: Stop an out-of-control scheme before it's too late."],
        ["Last Witness", "ME3: Extract ancient technology."],
        ["Legend", "ME3: Mission accomplished."],
        ["Liberator", "ME3: Stop a Cerberus kidnapping."],
        ["Lift Mastery", "ME1: Use biotic Lift 25 times"],
        ["Long Service Medal", "Finish Mass Effect 1, 2 and 3 with the same character"],
        ["Lost and Found", "ME3: Dispatch 10 probes to retrieve people or resources in Reaper territory."],
        ["Mail Slot", "ME3: Kill 10 guardians with headshots from the front while their shields are raised."],
        ["Master and Commander", "ME3: Deliver most of the Galaxy at War assets to the final conflict."],
        ["Medal of Exploration I", "ME1: Land on an uncharted world"],
        ["Medal of Exploration II", "ME1: Land on 4 uncharted worlds"],
        ["Medal of Exploration III", "ME1: Land on 8 uncharted worlds"],
        ["Medal of Heroism", "ME1: Complete Feros"],
        ["Medal of Honor", "ME1: Complete the game on any difficulty"],
        ["Merciless", "ME2: Make 20 enemies scream as they fall or are set on fire"],
        ["Meritorious Service Medal", "ME1: Complete Ilos"],
        ["Missing in Action", "ME2: Save your crew from an overwhelming attack"],
        ["Mission Accomplished", "ME2: Save humanity throughout the galaxy from certain annihilation"],
        ["Mobilizer", "ME3: Bring a veteran officer aboard."],
        ["Neural Shock Specialist", "ME1: Use Neural Shock 25 times"],
        ["No One Left Behind", "ME2: Keep your team alive through the suicide mission"],
        ["Operative", "ME2: Complete a mission discovered by scanning an unexplored world"],
        ["Overload Specialist", "ME2: Disrupt the shields of 25 enemies"],
        ["Paramour I", "Establish a romantic relationship in Mass Effect 1, 2 or 3"],
        ["Paramour II", "Establish or rekindle a romantic relationship in two games in Mass Effect Legendary Edition"],
        ["Paramour III", "Establish or rekindle a romantic relationship in all three games in Mass Effect Legendary Edition"],
        ["Party Crasher", "ME3: Sabotage a dreadnought."],
        ["Pathfinder", "ME3: Explore a lost city."],
        ["Patriot", "ME3: Make the final assault."],
        ["Power Full", "ME2: Evolve any power"],
        ["Principled", "ME1: Accumulate 75% of total possible Paragon or Renegade points"],
        ["Problem Solver", "ME3: Evacuate a scientific facility."],
        ["Pyromaniac", "ME3: Set 100 enemies on fire with powers."],
        ["Quarian Ally", "ME1: Complete 5 missions with the quarian squad member"],
        ["Recruit", "Kill 250 enemies in Mass Effect 1, 2 or 3"],
        ["Revenge!", "ME2: Gain the loyalty of the mercenary"],
        ["Sabotage Specialist", "ME1: Use Sabotage 25 times"],
        ["Saboteur", "ME3: Disable a group of fighter squadrons."],
        ["Savior", "ME3: Free Omega from Cerberus Occupation."],
        ["Scholar", "ME2: Unlock 15 new Mass Effect 2 codex entries"],
        ["Scientist", "ME2: Complete any research project in the Normandy's laboratory"],
        ["Search and Rescue", "ME1: Locate Dr. T'soni in the Artemis Tau cluster"],
        ["Sentinel Ally", "ME1: Complete 5 missions with the Alliance sentinel squad member"],
        ["Shield Breaker", "ME3: Overload the shields of 100 enemies."],
        ["Shopaholic", "ME3: Visit a store in the single-player campaign."],
        ["Singularity Mastery", "ME1: Use biotic Singularity 25 times"],
        ["Sky High", "ME3: Lift 100 enemies off the ground with powers."],
        ["Soldier", "Kill 1,000 enemies in Mass Effect 1, 2 or 3"],
        ["Soldier Ally", "ME1: Complete 5 missions with the Alliance soldier squad member"],
        ["Spectre Inductee", "ME1: Become a Spectre"],
        ["Stasis Mastery", "ME1: Use biotic Stasis 25 times."],
        ["Suicide Mission", "ME2: Use the Omega 4 Relay"],
        ["Tactician", "ME2: Hit 20 different targets with multiple biotic powers to combine the effects"],
        ["The Archangel", "ME2: Successfully recruit Archangel"],
        ["The Assassin", "ME2: Successfully recruit the Assassin"],
        ["The Convict", "ME2: Successfully recruit the biotic Convict"],
        ["The Cure", "ME2: Gain the loyalty of the Professor"],
        ["The Justicar", "ME2: Successfully recruit the Justicar"],
        ["The Krogan", "ME2: Successfully recruit the krogan"],
        ["The One and Only", "ME3: Defeat a group of Spectre-level opponents on Normal, Hardcore, or Insanity."],
        ["The Prodigal", "ME2: Gain the loyalty of the Cerberus Officer"],
        ["The Professor", "ME2: Successfully recruit the Professor"],
        ["The Quarian", "ME2: Successfully recruit the quarian"],
        ["Throw Mastery", "ME1: Use biotic Throw 25 times"],
        ["Treason", "ME2: Gain the loyalty of the quarian"],
        ["Tunnel Rat", "ME3: Survive the swarm."],
        ["Turian Ally", "ME1: Complete 5 missions with the turian squad member"],
        ["Under Pressure", "ME3: Uncover an ancient secret."],
        ["Untouchable", "ME3: Escape a Reaper in the galaxy map."],
        ["Very Elusive", "ME2: Return to active duty"],
        ["Veteran", "Kill 2,000 enemies in Mass Effect 1, 2 or 3"],
        ["Warp Mastery", "ME1: Use biotic Warp 25 times"],
        ["Warp Specialist", "ME2: Warp the barriers of 25 enemies"],
        ["Weapon Specialist", "ME2: Fully upgrade a weapon"],
        ["Well Connected", "ME3: Send a warning across the galaxy."],
        ["World Shaker", "ME3: Destroy an Atlas dropped from orbit."],
    ];

    assert.strictEqual(officialAchievements.length, 127, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
