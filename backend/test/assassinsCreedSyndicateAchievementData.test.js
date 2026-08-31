import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-syndicate.json - 56 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 368500 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("assassins-creed-syndicate");

test("getPlannerData('assassins-creed-syndicate') returns real planner data with 56 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-syndicate");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 56);

});

test("every Assassin's Creed Syndicate achievement has a unique id from 1 to 56 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 56 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 56);
    assert.strictEqual(new Set(apinames).size, 56);

});

test("every Assassin's Creed Syndicate achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 56 Assassin's Creed Syndicate achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Broad Base", "Reach Loyalty level 1 with all Associates."],
        ["A Life in Letters", "Collect all of the Royal Letters."],
        ["A Modern Babylon", "Complete Memory Sequence 3."],
        ["A Quarter-Furlong at a Time", "Finish first in 3 different Street Races."],
        ["A Quick and Reliable Remedy", "Complete Memory Sequence 4."],
        ["A Run on the Bank", "Complete Memory Sequence 6."],
        ["A Simple Plan", "Complete Memory Sequence 2."],
        ["A Spanner in the Works", "Complete Memory Sequence 1."],
        ["A well-kept secret", "Jack is dead and his identity will remain hidden forever."],
        ["All Is Fair in Politics", "Complete Memory Sequence 7."],
        ["Are you scared yet?", "Frighten 200 enemies."],
        ["Artisan", "Craft a Level 10 Item."],
        ["Bare-Knuckle Champion", "Win three different Fight Clubs."],
        ["Bartitsu", "Learn every Fight Skill as Jacob."],
        ["Bedfellows, Strange or Otherwise", "Reach maximum Loyalty with any Associate."],
        ["Blade from Above", "Air Assassinate twenty enemies from a zipline."],
        ["Blade in the Crowd", "Assassinate fifty enemies."],
        ["Brutal", "Perform 30 complete Brutal Takedowns."],
        ["Cerevisaphile", "Sample every beer brand in London."],
        ["Children's Aid Society", "Complete five Child Liberation memories."],
        ["Chimney Sweep", "Synchronize every Viewpoint in London."],
        ["Flawless Conqueror", "Secure three Gang Strongholds and complete their optional constraints."],
        ["Friends at My Back", "Recruit a gang of 5 allies."],
        ["Furious", "Destroy twenty vehicles by ramming them."],
        ["Godlike", "Unlock all of the Secrets of London."],
        ["Guardian Angel", "Successfully escort ten friendly cargo shipments."],
        ["Keep calm and carry on", "Kill a Brute while he calms down his panicked allies."],
        ["Keys to the City", "Acquire all of the Gang Upgrades."],
        ["Language of Flowers", "Collect all of the Pressed Flowers."],
        ["Look Out Below", "Kill three enemies with a single stack of hanging barrels."],
        ["Mentor", "Reach 100% Sync in the Main Memories"],
        ["Most Unsporting", "Shoot fifty enemies before they shoot at you."],
        ["Multitalented", "Acquire ten Perks."],
        ["Needle in a Haystack", "Kill five enemies from within the same haystack."],
        ["No Ticket", "Kick fifty enemies off of trains."],
        ["Opium Scourge", "Affect at least four enemies simultaneously with the Hallucinogenic Dart."],
        ["Ordinary Criminal", "Complete twenty Crowd Events."],
        ["Phantom", "Learn every Stealth Skill as Evie."],
        ["Put the fear of you into them", "Scare an enemy and make him kill someone else by mistake."],
        ["Queensbury Rules", "Reach combo level 40."],
        ["Ripperologist", "Achieve 100% synchronization in Jack the Ripper."],
        ["Shall We Dance?", "Complete Memory Sequence 9."],
        ["Street Sweeping", "Conquer all the boroughs in London"],
        ["Student of History", "Collect all of the Historical Posters."],
        ["The Joys of Freedom", "Complete Memory Sequence 8."],
        ["The new terror of Whitechapel", "Unlock 50% of the skills."],
        ["The Perils of Business", "Complete Memory Sequence 5."],
        ["The War at Home", "Complete the World War I simulation."],
        ["Thieftaker", "Bring three Bounty targets back alive."],
        ["Treasure Hunter", "Complete ten Raids of any type with Jacob or Evie."],
        ["Unqualified Success", "Complete three Templar Hunts and their challenges."],
        ["WHAT IS WRONG WITH YOU", "Flip five vehicles by shooting their horses."],
        ["Whirlwind of Death", "Perform fifty Multi-Finishers."],
        ["Without a Grudge", "Destroy 5000 destructibles with your carriage."],
        ["Wonder of the Age", "Reach Level 10."],
        ["You Wouldn't Steal a Policeman's Helmet", "Hijack twenty police vehicles."],
    ];

    assert.strictEqual(officialAchievements.length, 56, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
