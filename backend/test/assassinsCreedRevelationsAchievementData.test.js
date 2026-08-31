import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/assassins-creed-revelations.json - 48 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 201870 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("assassins-creed-revelations");

test("getPlannerData('assassins-creed-revelations') returns real planner data with 48 curated achievements", () => {

    assert.ok(game, "expected real planner data for assassins-creed-revelations");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 48);

});

test("every Assassin's Creed Revelations achievement has a unique id from 1 to 48 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 48 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 48);
    assert.strictEqual(new Set(apinames).size, 48);

});

test("every Assassin's Creed Revelations achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 48 Assassin's Creed Revelations achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Friend Indeed", "Complete all Faction Creed Challenges from a single faction."],
        ["Almost flying", "Parachute directly from the top of the Galata Tower to the golden horn."],
        ["Are You Desmond Miles?", "Complete Desmond Sequence 5."],
        ["Armchair General", "Control all cities (except Rhodes) simultaneously in the Mediterranian Defense game."],
        ["Best Served Cold", "Complete DNA Sequence 1."],
        ["Breaking the Loop", "Break the loop, escape the cycle"],
        ["Bully", "Find and beat up Duccio."],
        ["Capped", "Collect all animus data fragments."],
        ["Craft Maniac", "Craft 30 bombs."],
        ["Cross Styx without dying", "Make it across the river Styx without failing"],
        ["Enter the Animus", "Enter the Animus simulation"],
        ["Escape To New York", "Complete Desmond Sequence 3."],
        ["Fast Fingers", "Loot 50 dead guards with thief looting."],
        ["Find all Pieces", "Find all of the decipher fragments"],
        ["Fond Memories", "Achieve 100% Synchronization in all Sequences."],
        ["Holy Wisdom", "Complete the Hagia Sofia challenge level."],
        ["I can see you", "Kill 5 guards while under the cover of a smoke screen bomb."],
        ["Impress Warren Vidic", "Complete the Animus testing sequence without failing"],
        ["Iron Curtain", "Perform a perfect den defense without using the cannon."],
        ["Istanbul and Constantinople", "Complete DNA Sequence 2."],
        ["Jump they say", "Reach the Animus memo"],
        ["Lightning Strikes", "Kill 5 guards in 5 seconds using only your hidden blades."],
        ["Meet your maker", "Finish memory five"],
        ["Monster's dance", "Have a guard incapacitate 3 civilians while he's poisoned."],
        ["Mosh Pit", "Have 10 guards poisoned at the same time."],
        ["Mouse Trap", "Kill 5 guards with a scaffold after they have been stunned by caltrops."],
        ["My Protégé", "Have one trainee reach the rank of Master Assassin."],
        ["Old Boss, New Boss", "Complete DNA Sequence 7."],
        ["Overkiller", "Assassinate 50 guards with the hidden blade."],
        ["Part of the Creed", "Take the induction leap of faith"],
        ["Priorities", "Complete DNA Sequence 8."],
        ["Pyromaniac", "Complete all Bomb Missions."],
        ["Revelations", "Complete DNA Sequence 9."],
        ["Sage", "Collect all available books."],
        ["Save yourself", "Land on a block after falling more than 25 meters"],
        ["Seal the Deal", "Complete DNA Sequence 3."],
        ["Show-Off", "Parachute onto a zipline."],
        ["Silent but deadly", "Kill three guards simultaneously with only throwing knives."],
        ["Spider Assassin", "Climb Hagia Sofia, from the ground to the pinnacle, in under 25 seconds."],
        ["Successes and Failures", "Complete DNA Sequence 6."],
        ["Tax Evasion", "Get your money back from a Templar tax collector."],
        ["The Early Years", "Complete Desmond Sequence 1."],
        ["The Loop", "Experience the loop"],
        ["The Mentor", "Have seven trainees reach the rank of Master Assassin."],
        ["The Plot Thickens", "Complete DNA Sequence 5."],
        ["The Prince", "Complete DNA Sequence 4."],
        ["The Reluctant Assassin", "Complete Desmond Sequence 2."],
        ["The Rotten Apple", "Complete Desmond Sequence 4."],
    ];

    assert.strictEqual(officialAchievements.length, 48, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
