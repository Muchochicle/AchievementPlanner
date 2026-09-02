import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/the-legend-of-heroes-trails-through-daybreak.json - 53 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 2138610 (fetched through this app's own services/steamApi.js).
// Hidden achievements ship no Steam description; their description here is
// researched from community 100% guides and cited in the frontend guide
// header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("the-legend-of-heroes-trails-through-daybreak");

test("getPlannerData('the-legend-of-heroes-trails-through-daybreak') returns real planner data with 53 curated achievements", () => {

    assert.ok(game, "expected real planner data for the-legend-of-heroes-trails-through-daybreak");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 53);

});

test("every The Legend of Heroes: Trails through Daybreak achievement has a unique id from 1 to 53 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 53 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 53);
    assert.strictEqual(new Set(apinames).size, 53);

});

test("every The Legend of Heroes: Trails through Daybreak achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 53 The Legend of Heroes: Trails through Daybreak achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Mysterious Tale in Longlai", "Completed the Chapter 4 Intermission: A Mysterious Tale in Longlai."],
        ["AAA-rkride Solutions", "Raised the Arkride Solutions rank to AAA."],
        ["Aftermarket Modder", "Changed holo core for the first time."],
        ["Arts Virtuoso", "Set an Arts Plugin to any Arts Driver."],
        ["Bear the Nightmare", "Completed the game on nightmare difficulty."],
        ["Bright Star of the Dazzling City", "Completed Chapter 2: Bright Star of the Dazzling City."],
        ["Carving a New Trail", "Completely filled the battle section in the notebook."],
        ["Caught 'Em Off Shard", "Activated a preemptive shard strike 150 times."],
        ["Chain Smoker", "Activated Chain Hit over 100 times."],
        ["Chaos Bringer", "Reached Chaos alignment level 3 or above."],
        ["Chatterbox", "Used over 15 Topics."],
        ["Chestiny", "Opened 150 treasure chests."],
        ["Disaster Protocol", "Completed Chapter 4: Disaster Protocol."],
        ["Enlightened Centrist", "Reached Law, Gray, and Chaos alignment level 5."],
        ["Fervent Bibliophile", "Completely filled the books section in the notebook."],
        ["For you, Upon Your Return", "Completed Chapter 6: For you, Upon Your Return - the finale, described here spoiler-free."],
        ["Gourmaniac", "Raised the gourmet rank to its maximum level."],
        ["HOLO 9000", "Raised a holo core to its maximum level."],
        ["Holostar", "Acquired all holo cores."],
        ["Hotshot Spriggan", "Achieved an S-rank on any chapter except the Prologue."],
        ["Law-Abiding Spriggan", "Reached Law alignment level 3 or above."],
        ["Legendary Champion", "Defeated 1,000 or more enemies in Command Battle or Field Battle."],
        ["Let's Go, Spriggan!", "Started the game."],
        ["Master Driver", "Acquired all Arts Drivers."],
        ["Master of Orbments", "Opened all orbment slots for the entire party."],
        ["Morally Gray", "Reached Gray alignment level 3 or above."],
        ["My Way or the Heiyue", "Cleared one of the branching Chapter 5 routes (the Heiyue path), described here spoiler-free."],
        ["Partners in Crime", "Cleared one of the branching Chapter 5 routes, described here spoiler-free."],
        ["Pleasure in Delirium", "Completed Chapter 3: Pleasure in Delirium."],
        ["Rookie Warrior", "Defeated 300 enemies or more in Field Battle."],
        ["S-Crutch", "Used 50 S-Crafts in battle."],
        ["SCLM Addict", "Used SCLM Chain and SCLM Support a combined total of 200 times."],
        ["Solitary Spa Fanatic", "Entered the sauna in Edith every chapter, entered the Hamam in Tharbad, and entered the hot springs in Longlai outside of events."],
        ["Spriggan of the Slums", "Completed the Prologue: Spriggan of the Slums."],
        ["Taking Up the Gauntlet", "Cleared one of the branching Chapter 5 routes (the Law-aligned path), described here spoiler-free."],
        ["Talented Spriggan", "Defeated 500 or more enemies in Command Battle or Field Battle."],
        ["The Fast and the S-Boosted", "Made over 100 moves while in S-Boost mode."],
        ["The Legend of Heroes", "Acquired all achievements."],
        ["The Restless Carnival", "Completed Chapter 5: The Restless Carnival."],
        ["The Silver Lining", "Cleared one of the branching Chapter 5 routes, described here spoiler-free."],
        ["The Young Flame Departs", "Completed Chapter 1: The Young Flame Departs."],
        ["Time For Sweets", "Completed all quests."],
        ["Time Lord", "Completed all 4SPGs that could be done with specific timing, acquiring additional Free Time."],
        ["Unbreakable Bonds", "Raised all Connection Stages to their maximum level."],
        ["Unlimited Power", "Created an Onyx Steel weapon."],
        ["Unmatched Cinephile", "Watched all movies."],
        ["Unrivaled Connection", "Raised a Connection Stage to its maximum level."],
        ["Van the Stampede", "Did a total of 10,000 damage or more."],
        ["Vanta Claus", "Gave over 20 gift items."],
        ["Virtual Vanguard", "Cleared the entire Beta version of the Virtual Combat Simulator."],
        ["Virtually Victorious", "Cleared the Beta version of the Virtual Combat Simulator once."],
        ["W-W-Wombo Combo", "Won a battle with a tactical bonus of x4.0 or higher."],
        ["Working Overtime", "Unlocked all in-game achievements. (Other than EX)"],
    ];

    assert.strictEqual(officialAchievements.length, 53, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
