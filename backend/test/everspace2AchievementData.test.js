import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/everspace-2.json - 58 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1128920 (fetched through this app's own services/steamApi.js).
// 12 of them are hidden and ship no official Steam description;
// those keep their real name with a curatorial (researched) description.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("everspace-2");

test("getPlannerData('everspace-2') returns real planner data with 58 curated achievements", () => {

    assert.ok(game, "expected real planner data for everspace-2");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 58);

});

test("every EVERSPACE 2 achievement has a unique id from 1 to 58 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 58 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 58);
    assert.strictEqual(new Set(apinames).size, 58);

});

test("every EVERSPACE 2 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 58 EVERSPACE 2 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend In Need", "A main-story beat: save Tareen from the G&B Elite Squad."],
        ["A New Home", "Revive an old hideout."],
        ["A New Ride", "Buy a new ship."],
        ["A Taste Of Their Own Medicine", "Kill a Cloudgrazer with a weapon similar to the creature’s fiery breath."],
        ["Against All Outlaws", "Destroy 1000 Outlaw units."],
        ["Altar Boy", "Upgrade an item at an Ancient Altar."],
        ["Ancient History", "In the Wrath of the Ancients DLC: avert another crisis."],
        ["Backup Plan", "Obtain the Entropy Anchor device."],
        ["Beam There, Done That", "Have 3 Tactical Artillery Beams active at the same time."],
        ["Bean There, Done That", "Buy the Wraith."],
        ["Been There, Done That", "Complete 25 Location Challenges"],
        ["Bend it like Roslin", "Use a Thermo Gun to destroy an enemy that is behind an obstacle."],
        ["Catch Of The Day", "In the Titans DLC: break open your first Leviathan Pearl, found at the end of a Leviathan's digestive tract after being swallowed (see Inner Space) and brought to Dr. Kapadia at BRI BioPlant."],
        ["Challenge Accepted", "Complete a master challenge."],
        ["Credits Where Credits Are Due", "Earn at least 5000 credits by selling one stack of commodities."],
        ["Device Master", "Master a device."],
        ["Didn't Hurt A Bit", "Obtain a Leviathan Pearl while agitation is below 20%."],
        ["Elite Eliminator", "Destroy 100 Elite units."],
        ["Gone Kayaking", "In the Wrath of the Ancients DLC: give a friend a second chance."],
        ["Gotta Find 'Em All", "Find all devices"],
        ["Home Is Where The Ace Is", "Park the Golden Ace in Ceto."],
        ["I Don't Like Bullies", "Use the Front Shield Generator to block two Sniper Drone shots in a single activation."],
        ["I Got You Fam", "Protect your wingman from getting immobilized while fending off the Dreadnought."],
        ["I Heart Horags", "A main-story beat: take in Elek."],
        ["In Good Company", "A main-story beat: find a HIVE unit."],
        ["Inner Space", "In the Titans DLC: get swallowed by a Leviathan creature."],
        ["Internal Combustion", "Explode one of XR’s panzer bombs inside a Leviathan."],
        ["It's A Sabotage", "In the Titans DLC: destroy the first of the Dreadnought's two interstellar drives."],
        ["Legendary Lunatic", "Complete a Rift at Lunacy 500 or higher"],
        ["Ludicrous Speed!", "Finish all racing tracks with platinum rank."],
        ["Maxed Out", "Have two attributes maxed out at the same time using Mainframe Expansions"],
        ["My Precious!", "Equip a legendary item."],
        ["No Asteroid Unturned", "Complete all locations 100%"],
        ["No Place Like Home", "A main-story beat: escape the Khione System."],
        ["Now We Can Finally Play The Game!", "Unlock the full set bonus of the Ascendancy item set."],
        ["Perky Personnel", "Fully upgrade all Companion Perks"],
        ["Power Fantasy? Power Reality!", "Own a rank 8 equipment item of Ascendant rarity."],
        ["Press F To Pay Respects", "Visit a final resting place."],
        ["Rift Runner", "Complete a Rift"],
        ["Rock And Stone!", "Mine 2000 resources"],
        ["Sidetracked", "Finish all side missions"],
        ["Spaceship of Theseus", "Change the front, rear and wings of a ship."],
        ["Spin Me Right 'Round", "Keep the Fusion Hook tethered for 10 seconds during a single activation."],
        ["Stasis Smash", "Use the Magnetic Repulsor to smash an EMP'ed enemy to death."],
        ["Still In One Piece", "A main-story beat: survive an Ancient Rift."],
        ["Stop Hitting Yourself", "Use one decoy to guide at least 10 missiles into the Dreadnought's launcher system."],
        ["Stop! Hammer Time!", "In the Titans DLC: disrupt the Dreadnought auction."],
        ["That Belongs In A Museum", "Obtain the Tactical Artillery Beam device."],
        ["That's All You Got?", "Complete all challenge collections"],
        ["The Catalyst Catalog", "Find all Catalyst Blueprints"],
        ["The World Is Your Oyster", "Break 20 Leviathan Pearls."],
        ["There Can Be Only One", "The main campaign's finale: prevent a new war from breaking out."],
        ["Top Tier", "Buy a Tier 4 ship"],
        ["Tower Defense", "Use a Sticky Turret to destroy an enemy."],
        ["Under Pressure", "Use the Energized Boost's High-Pressure mode to destroy 3 enemies in one go."],
        ["Unlimited Power", "Have the Sentinel's ULT \"Static Overload\" span electricity arcs to at least 5 enemies."],
        ["What A Legend!", "Reach the highest level of renown."],
        ["Work For Hire", "Complete 10 Jobs"],
    ];

    assert.strictEqual(officialAchievements.length, 58, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});

test("the 12 hidden EVERSPACE 2 achievement(s) each keep their real name and a non-empty curatorial description", () => {

    const hiddenNames = ["In Good Company", "I Heart Horags", "A Friend In Need", "Still In One Piece", "No Place Like Home", "There Can Be Only One", "It's A Sabotage", "Stop! Hammer Time!", "Inner Space", "Catch Of The Day", "Gone Kayaking", "Ancient History"];

    for (const name of hiddenNames) {
        const achievement = game.achievements.find(a => a.name === name);
        assert.ok(achievement, `expected to find hidden achievement "${name}"`);
        assert.ok(achievement.description?.length > 0, `${name} is missing its curatorial description`);
    }

});
