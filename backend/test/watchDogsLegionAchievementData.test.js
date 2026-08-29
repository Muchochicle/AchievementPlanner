import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/watch-dogs-legion.json - 49 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2239550 (fetched through this app's own services/steamApi.js).
// This game has no hidden achievements: all 49 ship a real, official
// Steam description, quoted verbatim below.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("watch-dogs-legion");

test("getPlannerData('watch-dogs-legion') returns real planner data with 49 curated achievements", () => {

    assert.ok(game, "expected real planner data for watch-dogs-legion");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 49);

});

test("every Watch Dogs: Legion achievement has a unique id from 1 to 49 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 49 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 49);
    assert.strictEqual(new Set(apinames).size, 49);

});

test("every Watch Dogs: Legion achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 49 Watch Dogs: Legion achievement name+description pairs matches the live GetSchemaForGame response", () => {

    const officialAchievements = [
        ["A Dish Best Served Cold", "Complete a Revenge Mission"],
        ["A Roof Over Your Head", "Complete \"Royal Treatment\""],
        ["All About Aesthetic", "Buy a Weapon Skin"],
        ["And Stay Down", "Defeat a DedSec Adversary"],
        ["Bottom's Up", "Drink at least once in every Drink location"],
        ["Brave New World", "Complete \"Operation Westminster\""],
        ["Breaking The Ice", "Complete \"Acquisition Target\""],
        ["Bullseye", "Complete a Darts game in every Darts location"],
        ["Community Service", "Complete all Angel Resistance Missions"],
        ["Could've Made National", "Complete Kick-Up intermediate goal 1"],
        ["Death From Above", "Kill 5 Albion guards using Dive Bomb"],
        ["DedSec Delivery", "Complete 20 Parcel Fox Delivery Missions"],
        ["Divided We Fall", "Complete the DedSec Storyline"],
        ["Down to the Wire", "Perform 5 stealth takedowns with a Professional Hitman"],
        ["England for Everyone", "Complete \"Parks and Reclamation\""],
        ["Every Walk of Life", "Have a team of 20 Operatives with different occupations"],
        ["Fresh Threads", "Spend 100 000 ETO on Clothes in Campaign Mode"],
        ["Fully Kitted", "Unlock all Upgrades in Campaign Mode"],
        ["Fully Kitted 2.0", "Unlock all Upgrades in the Bloodline expansion"],
        ["Hack the Planet", "Propagate a hack across 8 targets at once"],
        ["Hacker, Tailor, Soldier, Spy", "Complete the SIRS Storyline"],
        ["In the Nick of Time", "Complete \"Change of Heart\""],
        ["Locked and Loaded", "Purchase all Campaign Weapon Upgrades or all Online Weapon Upgrades"],
        ["Long Live DedSec", "Complete all Campaign Missions on Resistance mode"],
        ["Long Live the Queen", "Complete the Kelley Storyline"],
        ["Magpie", "Collect 15 Relics"],
        ["Making Friends", "Recruit an Operative in Campaign Mode after completing \"Reporting For Duty\""],
        ["Meta-Gaming", "Recruit a Video Game Designer"],
        ["NO NOT THE BEES", "Neutralize 10 Albion guards using Bee Swarms"],
        ["Off The Record", "Complete all Claire Resistance Missions"],
        ["One Big Happy Family", "Complete \"Face 2 Face\""],
        ["Oral History", "Collect 50 Audio Logs"],
        ["Packrat", "Collect 50% of Data Drive files in the Bloodline expansion"],
        ["Paint Me Like One of Your...", "Stun Clan Kelley members 5 times with paintball gun headshots"],
        ["Piece de Resistance", "Complete a Paste Up in every Paste Up location"],
        ["Power to the People", "Have your followers neutralize a total of 3 Albion guards"],
        ["Re-Wrap My Whip", "Buy a Vehicle Paint"],
        ["Rise Up", "Turn one borough into Defiant State"],
        ["Shaken Not Stirred", "Disable weapons of 5 Albion guards at once using the Spy Watch Gadget"],
        ["Supply And Demand", "Complete all Freddie Resistance Missions"],
        ["Switcheroo", "Complete \"Fox Hunt\""],
        ["Take Back London", "Turn all the boroughs into Defiant state"],
        ["The Future Is Bright", "Complete the 404 Storyline"],
        ["The One That Got Away", "Complete \"Finding Bagley\""],
        ["The Royal Tour", "Enter Buckingham Palace's restricted area disguised as a Royal Guard"],
        ["Throw the Book at Them", "Perform 5 arrest takedowns"],
        ["Vive la Résistance", "Complete all Connie Resistance Missions"],
        ["When Good Men Do Nothing", "Complete the Albion Storyline"],
        ["You Don't See Me!", "Escape a Pursuit Level 5 doing a Statue Emote"],
    ];

    assert.strictEqual(officialAchievements.length, 49, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
