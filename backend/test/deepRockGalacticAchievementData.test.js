import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/deep-rock-galactic.json - 69 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 548430 (fetched through this app's own services/steamApi.js) - 47 of 69 ship a real, official Steam description. The 22
// hidden achievements ship no Steam description; their conditions here
// are curatorial, sourced from the official Deep Rock Galactic wiki and
// cross-checked against community guides.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const deepRockGalactic = getPlannerData("deep-rock-galactic");

test("getPlannerData('deep-rock-galactic') returns real planner data with 69 curated achievements", () => {

    assert.ok(deepRockGalactic, "expected real planner data for deep-rock-galactic");
    assert.ok(Array.isArray(deepRockGalactic.achievements));
    assert.strictEqual(deepRockGalactic.achievements.length, 69);

});

test("every Deep Rock Galactic achievement has a unique id from 1 to 69 and a unique apiname", () => {

    const ids = deepRockGalactic.achievements.map(a => a.id);
    const apinames = deepRockGalactic.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 69 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 69);
    assert.strictEqual(new Set(apinames).size, 69);

});

test("every Deep Rock Galactic achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of deepRockGalactic.achievements) {

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

test("every one of the 47 officially-described Deep Rock Galactic achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 22 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Approved Greenbeard", "Complete your first assignment."],
        ["If Only I Got Paid For This...", "In the Barrel Hoop game, achieve a score of 3000 or more in less than 100 kicks."],
        ["Barrel Rider", "Ride a barrel in the spacerig for three seconds."],
        ["Mini Fixer", "Fix 50 Mini M.U.L.E.s."],
        ["Now We Have  A BET-C", "Defeat and fix a BET-C."],
        ["Big Game Hunter", "Participate in killing 40 Dreadnoughts."],
        ["See You Later, Detonator!", "Participate in killing 20 Bulk Detonators."],
        ["Pest Control", "Participate in killing two Dreadnoughts within five minutes on Hazard Level 3 or higher."],
        ["Just Another Bug Hunt", "Participate in killing two Dreadnoughts within 30 seconds on Hazard Level 3 or higher."],
        ["Jeweler", "Collect 10 Bittergems."],
        ["Prospector", "Collect 20 Compressed Gold Chunks."],
        ["Hi Ho, Silver - Away!", "Ride Molly for 15 seconds."],
        ["Farmer", "Ride the Silicate Harvester for 30 seconds."],
        ["Car Pool", "Ride the Silicate Harvester with three other dwarves and kill five enemies each without leaving."],
        ["Miner", "Complete your first mission."],
        ["Expert Miner", "Complete 100 missions."],
        ["Legendary Miner", "Complete 500 missions."],
        ["Stepping It Up", "Survive a Hazard Level 3 mission from start to finish."],
        ["Consistent Performance", "Successfully complete three Hazard Level 3 missions from start to finish in a row."],
        ["Thick-Skinned", "Survive a Hazard Level 4 mission from start to finish."],
        ["Employee Of The Month", "Successfully complete four Hazard Level 4 missions from start to finish in a row."],
        ["Going Lethal", "Successfully complete a Hazard Level 5 mission from start to finish."],
        ["Rock Solid", "Successfully complete five Hazard Level 5 missions from start to finish in a row."],
        ["Bring Your A-Game", "Successfully complete a Hazard Level 3 mission from start to finish where no dwarf goes down and without ordering a resupply."],
        ["Like A Well-Oiled Machine", "Successfully complete a Hazard Level 4 mission from start to finish where no dwarf goes down and without ordering a resupply."],
        ["Karl Would Be Proud", "Successfully complete a Hazard Level 5 mission from start to finish where no dwarf goes down and without ordering a resupply."],
        ["Mutated Scavenger", "Successfully complete 20 missions tagged with Warnings from start to finish."],
        ["Good Shepherd", "Successfully complete 25 missions where at least 1 player is 10 player ranks lower than you."],
        ["Performance Matters", "Complete 10 Milestones."],
        ["Management Approves", "Complete 25 Milestones."],
        ["Feelin' Perky", "Unlock 10 Perk Nodes."],
        ["Movin' On Up", "Promote any Dwarf at least once."],
        ["Corporate Climber", "Promote any two Dwarves at least once."],
        ["Hat Trick", "Promote any three Dwarves at least once."],
        ["Full Team Ahead", "Promote all four Dwarves at least once."],
        ["Silver-Tier Employee", "Earn a Silver promotion."],
        ["Gold-Tier Employee", "Earn a Gold promotion."],
        ["Pro-Team", "Earn Silver Promotions for all four dwarves."],
        ["Legendary-Team", "Earn Gold Promotions for all four dwarves."],
        ["Mustacho", "Purchase five moustaches for one character."],
        ["Total Makeover", "Customize each accessory slot of a character."],
        ["Going Deeper", "Complete A Deep Dive"],
        ["Elite Diver", "Complete An Elite Deep Dive"],
        ["Deep For Speed", "Complete Any Deep Dive Under 45 Minutes"],
        ["Veteran Diver", "Complete Any 5 Deep Dives"],
        ["Drill-by Shooting", "Ride the Drilldozer with three other dwarves and kill 15 enemies each without leaving."],
        ["Roller Coaster", "Grind on a pipe for 120 seconds without stopping."]
    ];

    assert.strictEqual(officialAchievements.length, 47, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "BARRELKICKER",
        "NOTHOWYOUPLAY",
        "DARWINAWARD",
        "HAPPYFEET",
        "BIGSPENDER",
        "PARTYTIME",
        "DISCJOCKEY",
        "THEATEAM",
        "TIMEWELLSPENT",
        "FOREIGNOBJECT",
        "SELFCONTROL",
        "HITWHEREITHURTS",
        "WHATISTHIS",
        "DESIGNATEDDECOY",
        "WITHOUTAPADDLE",
        "ILIKEITDOWNHERE",
        "ITSMYPARTY",
        "LONEWOLF",
        "BESTBOSCO",
        "EXPLORINGMYOPTIONS",
        "STATEOFTHEART",
        "ADVANCEDROBOTICS"
    ]);

    assert.strictEqual(hiddenApinames.size, 22, "sanity check - Deep Rock Galactic has 22 hidden achievements");

    const dataPairs = deepRockGalactic.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 22 hidden Deep Rock Galactic achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["BARRELKICKER", "Barrel Kicker"],
        ["NOTHOWYOUPLAY", "That's Not How You Play This Game"],
        ["DARWINAWARD", "Darwin Award"],
        ["HAPPYFEET", "Happy Feet"],
        ["BIGSPENDER", "Big Spender"],
        ["PARTYTIME", "Party Time!"],
        ["DISCJOCKEY", "Disc Jockey"],
        ["THEATEAM", "The A-Team"],
        ["TIMEWELLSPENT", "Time Well Spent"],
        ["FOREIGNOBJECT", "Foreign Objects In The Launch Bay"],
        ["SELFCONTROL", "Self Control"],
        ["HITWHEREITHURTS", "Hit 'em Where It Hurts"],
        ["WHATISTHIS", "What Are These Things?"],
        ["DESIGNATEDDECOY", "Designated Decoy"],
        ["WITHOUTAPADDLE", "Without A Paddle"],
        ["ILIKEITDOWNHERE", "I Like It Down Here"],
        ["ITSMYPARTY", "It's My Party"],
        ["LONEWOLF", "Lone Wolf"],
        ["BESTBOSCO", "Bosco, You're The Best"],
        ["EXPLORINGMYOPTIONS", "Exploring My Options"],
        ["STATEOFTHEART", "State Of The Art"],
        ["ADVANCEDROBOTICS", "Advanced Robotics"]
    ];

    assert.strictEqual(names.length, 22, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = deepRockGalactic.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
