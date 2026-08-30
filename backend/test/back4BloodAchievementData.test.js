import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/back-4-blood.json - 93 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 924970 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("back-4-blood");

test("getPlannerData('back-4-blood') returns real planner data with 93 curated achievements", () => {

    assert.ok(game, "expected real planner data for back-4-blood");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 93);

});

test("every Back 4 Blood achievement has a unique id from 1 to 93 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 93 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 93);
    assert.strictEqual(new Set(apinames).size, 93);

});

test("every Back 4 Blood achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 93 Back 4 Blood achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Can Of Worms", "Play Trial of the Worm for the first time."],
        ["A Humerus Weapon", "Kill 10 Ridden with Bob's Arm."],
        ["Act 1 Cleaner", "Complete all Act 1 maps on Nightmare difficulty."],
        ["Act 1 Recruit", "Complete all Act 1 maps on Recruit difficulty or higher."],
        ["Act 1 Veteran", "Complete all Act 1 maps on Veteran difficulty or higher."],
        ["Act 2 Cleaner", "Complete all Act 2 maps on Nightmare difficulty."],
        ["Act 2 Recruit", "Complete all Act 2 maps on Recruit difficulty or higher."],
        ["Act 2 Veteran", "Complete all Act 2 maps on Veteran difficulty or higher."],
        ["Act 3 Cleaner", "Complete all Act 3 maps on Nightmare difficulty."],
        ["Act 3 Recruit", "Complete all Act 3 maps on Recruit difficulty or higher."],
        ["Act 3 Veteran", "Complete all Act 3 maps on Veteran difficulty or higher."],
        ["Act 4 Cleaner", "Complete Act 4 on Nightmare difficulty."],
        ["Act 4 Recruit", "Complete Act 4 on Recruit difficulty or higher."],
        ["Act 4 Veteran", "Complete Act 4 on Veteran difficulty or higher."],
        ["Act 5 Ace", "Complete all Act 5 maps on No Hope difficulty."],
        ["Act 5 Cleaner", "Complete all Act 5 maps on Nightmare difficulty or higher."],
        ["Act 5 Recruit", "Complete all Act 5 maps on Recruit difficulty or higher."],
        ["Act 5 Veteran", "Complete all Act 5 maps on Veteran difficulty or higher."],
        ["Act 6 Ace", "Complete all Act 6 maps on No Hope difficulty."],
        ["Act 6 Cleaner", "Complete all Act 6 maps on Nightmare difficulty or higher."],
        ["Act 6 Recruit", "Complete all Act 6 maps on Recruit difficulty or higher."],
        ["Act 6 Veteran", "Complete all Act 6 maps on Veteran difficulty or higher."],
        ["And The LAW Won", "Land a final blow on a Boss Mutation with the LAW."],
        ["Apocalypse Pacifist", "Complete a map without any players on the team killing a single Ridden."],
        ["Backtrack", "Find the Secret in 300 Below."],
        ["Balanced Meal", "Have at least five different Food Buffs active at one time."],
        ["Barely Made It", "Jump over a Cultist Bear Trap without triggering it."],
        ["Bell Hop", "Find the secret in Search & Rescue."],
        ["Bob's Your Uncle", "Complete The Armory."],
        ["Breakfast Can Wait", "Complete The Dark Before The Dawn."],
        ["Breakfest", "Kill a Monstrous Breaker after removing all of its armor."],
        ["Brought a Knife to a Gunfight", "Complete a level while getting at least 50 kills with melee weapons."],
        ["Brute Force", "Kill an Ogre with the Howitzer."],
        ["Cleanup Crew", "Complete a mission without any players being incapacitated or killed."],
        ["Constant Vigilance", "Kill all variants of the Sentinel."],
        ["Cooped Up", "Find the secret in The Armory."],
        ["Cryptozoologist", "Find the secret in Job 10:22."],
        ["Dangerous To Go Alone", "Find the secret in Plan B."],
        ["Dead Quiet", "Complete a map without ever triggering a horde from Reekers, Birds, Snitches, or alarms."],
        ["Don't Ask…", "Rescue a teammate from a cocoon."],
        ["Don't You Eat My Neighbor", "Complete Dr. Rogers' Neighborhood."],
        ["Down the Drain", "Complete Plan B."],
        ["Down, But Not Out", "Kill 15 enemies while downed."],
        ["Duffel Brothers", "Bring 11 Duffel Bags to Saferooms."],
        ["Easily Mist", "Find the secret in Blue Dog Hollow."],
        ["Enemy of Mine", "Complete Blue Dog Hollow."],
        ["Expanding the Arsenal", "Spend your first Supply Point."],
        ["Extra Credit", "Find the secret in Remnants."],
        ["Force Majeure Claws", "Kill a Slasher with Iron Claws."],
        ["Going For Broke", "Earn a score of at least 100,000 in Trial of the Worm."],
        ["Good Riddence!", "Kill 53,600 Ridden over your career."],
        ["Grateful Eight", "Complete a mission with each of the original Cleaners."],
        ["Hard-Boiled", "Defeat The Harbinger without using the LAW."],
        ["Hippocrates Would be Proud", "Heal a teammate."],
        ["Jar Jar Bonks", "Hit a Pusflinger with a Bait Jar."],
        ["Jugger-not", "Make a Breaker hurt itself."],
        ["Jukebox Hero", "Defend the jukebox in Bar Room Blitz without it breaking."],
        ["LAW and Hors D'oeuvres", "Blow up a Food Item with the LAW."],
        ["Left Fork Dead End", "Find the Secret in Act 5."],
        ["Left Ventricle", "Find the Secret in The Nursery."],
        ["Master Spelunker", "Complete All Ridden Hives."],
        ["Mind Your Step", "Find the secret in The Abomination."],
        ["Nemesis", "Safely descend the ladder in the construction zone in Resurgence."],
        ["Night of the Living Hedge", "Find the secret in Dr. Rogers' Neighborhood."],
        ["No Time for a Nap", "Revive a fallen teammate."],
        ["Nook, or Cranny?", "Find the Secret in Sunken Passages."],
        ["Of Biblical Proportions", "Complete Job 10:22."],
        ["Overwhelming Power", "Get a kill with a Legendary Weapon."],
        ["Paid the Toll", "Complete The Devil's Return."],
        ["Pallet Cleanser", "Find the secret in The Dark Before the Dawn."],
        ["Paved With Good Intestines", "Complete Remnants."],
        ["Pipe Dream", "Find the Secret in Caustic Cesspool."],
        ["Port Man Toe?", "Find the secret in The Devil's Return."],
        ["Precarious Perch", "Find the Secret in Brood Lair."],
        ["Round the Riverbend", "Find the Secret in Blood Stream."],
        ["Share the Load", "Drop some ammo for a teammate."],
        ["Smoke And Mirrors, But Without The Mirrors", "Use a Smoke Grenade to become hidden while at Critical Health."],
        ["Smörgåsbord", "Kill at least one of each non-boss Mutation."],
        ["Snitches Get Stitches", "Kill a Snitch without it alerting the horde."],
        ["Squad Up", "Form a party in Fort Hope."],
        ["Stacked Deck", "Play 25 cards in a single match."],
        ["Swarmed", "Win a game in Swarm Mode."],
        ["Take A Bow", "Kill a Crone with the Bow."],
        ["The Path To Glory", "Complete a map in Trial of the Worm with a total modifier of at least x20."],
        ["This Is Fine", "Set an enemy on fire with the Flamethrower, while also being on fire."],
        ["This Round's On Me", "Complete Search & Rescue."],
        ["Totem Toter", "Earn some Skull Totems."],
        ["TR's Secret Stash", "Find the Secret in Act 6."],
        ["Unholy Grail", "Find the Secret in The Cut."],
        ["Unnatural Selection", "Kill each of the Warped Ridden."],
        ["Using Your Noggin", "Kill 10 Ridden with a Skull Totem."],
        ["Welcome to the Apocalypse", "Good luck out there, you're gunna need it."],
        ["Who Snipes The Snipers?", "Kill a Sniper with a Sniper Rifle."],
    ];

    assert.strictEqual(officialAchievements.length, 93, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
