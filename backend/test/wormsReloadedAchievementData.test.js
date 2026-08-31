import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/worms-reloaded.json - 61 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 22600 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("worms-reloaded");

test("getPlannerData('worms-reloaded') returns real planner data with 61 curated achievements", () => {

    assert.ok(game, "expected real planner data for worms-reloaded");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 61);

});

test("every Worms Reloaded achievement has a unique id from 1 to 61 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 61 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 61);
    assert.strictEqual(new Set(apinames).size, 61);

});

test("every Worms Reloaded achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 61 Worms Reloaded achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["12 Days of Winterval", "Deal exactly 12 damage to a worm with 100 health. "],
        ["Ain't Got Time to Speed", "Puzzle Pack: Complete Puzzle 19 before Sudden Death kicks in"],
        ["Ain't No Lap Dog", "Time Attack: Set fastest times on all the lap-based Time Attacks"],
        ["Amateur Puzzler", "Puzzle Pack: Complete Puzzles 1-7"],
        ["An Apple a Day...", "Retro Pack: Complete Retro 6 without picking up a Health Crate"],
        ["Armageddon An Award", "Use the Armageddon weapon 10 times"],
        ["Bridge Burner", "Forts Pack: Collect the vital crate on Fort 13 without using the Bridge Kit"],
        ["Bullet Dodger ", "Time Attack: Complete Time Attack 7 by setting the fastest time and without taking Sentry Gun fire damage"],
        ["Call off the Strike", "Forts Pack: Complete Fort 14 without using the Airstrike"],
        ["Can't Be Rocked", "Retro Pack: Complete Retro 4 without taking damage"],
        ["Cheeky Flocker", "Deploy 25 Sheep in any ranked match"],
        ["Child's Play", "Retro Pack: Complete Retro 11 without the Toy Master taking damage"],
        ["Crate Fishing", "Retro Pack: Collect all the crates on Retro 12"],
        ["Crate Scott", "Forts Pack: Complete any vital crate mission"],
        ["Damage Dodger", "Puzzle Pack: Complete Puzzle 6 without taking damage"],
        ["Death Matched", "Forts Pack: Complete any deathmatch mission"],
        ["Defused", "Time Attack: Complete Time Attack 1 by setting the fastest time and without taking Mine damage"],
        ["Detective", "Puzzle Pack: Complete Puzzles 8-15"],
        ["Done in 20 Seconds", "Puzzle Pack: Complete Puzzle 18 before Sudden Death kicks in"],
        ["Down-to-Earth", "Time Attack: Complete Time Attack 17 by setting the fastest time and without taking Fall damage "],
        ["Dream Team", "Forts Pack: Complete Fort 19 without losing a worm"],
        ["Economical", "Puzzle Pack: Complete Puzzle 3 but have at least 1 item left in your inventory that isn't Skip Go or Surrender"],
        ["Fall Guy", "Time Attack: Complete Time Attack 2 by setting the fastest time and without taking Fall damage"],
        ["Fast, Pink And Hard", "Win a Pro ranked match in under 3 minutes"],
        ["Fire Starter", "Use fire weapons 200 times"],
        ["Get Your Lob On", "Win a game using just the Grenade"],
        ["Gnat's Nostril", "Puzzle Pack: Complete Puzzle 20 but have at least 1 item left in your inventory that isn't Skip Go or Surrender"],
        ["Going Solo", "Complete the single player campaign"],
        ["Gone Bananas", "Forts Pack: Complete Fort 16 by using the Banana Bomb"],
        ["Gun Shy", "Time Attack: Complete Time Attack 3 by setting the fastest time and without taking Sentry Gun fire damage"],
        ["Hallelujah!", "Deploy the fabled Holy Hand Grenade"],
        ["Head Hunter", "Forts Pack: Complete Fort 20 "],
        ["Holy Moly", "Forts Pack: Complete Fort 11 by using the Holy Hand Grenade"],
        ["King's Defender", "Forts Pack: Complete any defend vital worm mission"],
        ["Last Worm Scout", "Retro Pack: Complete Retro 1 without the Mayor taking damage"],
        ["Leave No Worm Behind", "Retro Pack: Complete Retro 10 with all 3 player worms alive"],
        ["Lightfoot", "Puzzle Pack: Complete Puzzle 15 before Sudden Death kicks in"],
        ["Lightning Bolt", "Time Attack: Complete Time Attack 6 in under 70 Seconds"],
        ["Likes The Drink", "Drown 170 enemy worms"],
        ["Me Sane Bolt", "Time Attack: Complete Time Attack 9 in under 50 Seconds"],
        ["Modernist", "Retro Pack: Complete Retro 1-5"],
        ["Nut 'n' Bolt", "Time Attack: Complete Time Attack 4 in under 20 seconds"],
        ["Odynophobiac", "Puzzle Pack: Complete Puzzle 11 without taking damage"],
        ["Oldest Swinger In Town", "Use the Ninja Rope 1000 times"],
        ["Pain Prevention", "Puzzle Pack: Complete Puzzle 5 without taking damage"],
        ["People's Champ!", "Complete all of the community-created missions."],
        ["Prod For Victory", "Win a game by using the Prod"],
        ["Ranked Master", "Achieve 17 wins in all ranked match types"],
        ["Six Pest", "Kill 6 enemy worms in a single turn"],
        ["So Last Year", "Retro Pack: Complete Retro 6-10"],
        ["Soak-Crates", "Forts Pack: Collect the vital crate on Fort 18 before sudden death kicks in"],
        ["Stalwart", "Forts Pack: Complete Fort 17 without vital worm taking damage"],
        ["Stuck in the 90s", "Retro Pack: Complete Retro 11-15"],
        ["Summer of '69", "Deal exactly 31 damage to a worm with 100 health. "],
        ["Super Sleuth", "Puzzle Pack: Complete Puzzles 16-20"],
        ["Swift Exit", "Time Attack: Set fastest times on all the A-to-B (exit point) Time Attacks"],
        ["The Cratest", "Time Attack: Set fastest times on all the Crate Collect Time Attacks"],
        ["Thrifty", "Puzzle Pack: Complete Puzzle 17 but have at least 1 item left in your inventory that isn't Skip Go or Surrender"],
        ["Twinkle Toes", "Time Attack: Complete Time Attack 13 by setting the fastest time and without taking Mine damage"],
        ["Vital Ballistics", "Forts Pack: Complete any kill vital worm mission"],
        ["Worminator", "Retro Pack: Complete Retro 7 and kill all the enemy worms"],
    ];

    assert.strictEqual(officialAchievements.length, 61, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
