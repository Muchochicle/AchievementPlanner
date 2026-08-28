import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/raft.json - 104 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 648800 (fetched through this app's own services/steamApi.js).
// 85 of 104 ship a real, official Steam description; the
// 19 hidden achievements ship no Steam description and
// their conditions are curatorial.
// difficulty/estimatedTime remain curatorial judgments, same convention
// as every other planner difficulty/time field in this catalog.
const raft = getPlannerData("raft");

test("getPlannerData('raft') returns real planner data with 104 curated achievements", () => {

    assert.ok(raft, "expected real planner data for raft");
    assert.ok(Array.isArray(raft.achievements));
    assert.strictEqual(raft.achievements.length, 104);

});

test("every Raft achievement has a unique id from 1 to 104 and a unique apiname", () => {

    const ids = raft.achievements.map(a => a.id);
    const apinames = raft.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 104 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 104);
    assert.strictEqual(new Set(apinames).size, 104);

});

test("every Raft achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of raft.achievements) {

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

test("every one of the 85 officially-described Raft achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 19 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Beginner Builder!", "Build 10 foundations."],
        ["Teamplay!", "Team up with a friend in multiplayer."],
        ["Dinnertime!", "Craft and place a simple grill."],
        ["It's Better Without The Salt.", "Craft and place a simple purifier."],
        ["Aye Aye Captain!", "Place a sail and a stationary anchor on the same raft."],
        ["Hoarder!", "Have 20 storages on the same raft."],
        ["Farmer!", "Have 20 cropplots on the same raft."],
        ["Bookworm!", "Research everything in the research table."],
        ["Intermediate Builder!", "Build 100 foundations."],
        ["Expert Builder!", "Build 1000 foundations."],
        ["Beginner Shark Hunter!", "Kill 1 shark."],
        ["Intermediate Shark Hunter!", "Kill 10 sharks."],
        ["Expert Shark Hunter!", "Kill 50 sharks."],
        ["Beginner Gatherer!", "Hook 100 items."],
        ["Intermediate Gatherer!", "Hook 500 items."],
        ["Expert Gatherer!", "Hook 5000 items."],
        ["Beginner Bird Hunter!", "Kill 1 bird."],
        ["Intermediate Bird Hunter!", "Kill 10 birds."],
        ["Expert Bird Hunter!", "Kill 50 birds."],
        ["Beginner Painter!", "Paint 50 blocks."],
        ["Intermediate Painter!", "Paint 200 blocks."],
        ["Expert Painter!", "Paint 1000 blocks."],
        ["Beginner Survivor!", "Survive 1 day."],
        ["Intermediate Survivor!", "Survive 7 days."],
        ["Expert Survivor!", "Survive 30 days."],
        ["Master Survivor!", "Survive 365 days."],
        ["Beginner Poison-Puffer Hunter!", "Kill 1 Poison-puffer."],
        ["Intermediate Poison-Puffer Hunter!", "Kill 10 Poison-puffers."],
        ["Expert Poison-Puffer Hunter!", "Kill 50 Poison-puffers."],
        ["Beginner Screecher Hunter!", "Kill 1 Screecher."],
        ["Intermediate Screecher Hunter!", "Kill 10 Screechers."],
        ["Expert Screecher Hunter!", "Kill 50 Screechers."],
        ["Large Landmass Ahoy!", "Discover a large island."],
        ["A More Complex Concoction!", "Cook a meal by following a recipe."],
        ["Beginner Wrangler!", "Capture 1 animal."],
        ["Intermediate Wrangler!", "Capture 10 animals."],
        ["Expert Wrangler!", "Capture 50 animals."],
        ["Some Look Different!", "Capture a rare animal."],
        ["Beginner Warthog Hunter!", "Kill 1 Warthog."],
        ["Intermediate Warthog Hunter!", "Kill 10 Warthogs."],
        ["Expert Warthog Hunter!", "Kill 50 Warthogs."],
        ["Mother Lode!", "Slay the Mama Bear."],
        ["Fix Errol!", "There you go, Errol."],
        ["Radio Tower Historian!", "Find all notes on the Radio Tower!"],
        ["Vasagatan Historian!", "Find all notes on Vasagatan!"],
        ["Balboa Historian!", "Find all notes on Balboa!"],
        ["Beginner Lurker Hunter!", "Kill 1 Lurker."],
        ["Intermediate Lurker Hunter!", "Kill 10 Lurkers."],
        ["Expert Lurker Hunter!", "Kill 50 Lurkers."],
        ["Beginner Bear Hunter!", "Kill 1 Bear."],
        ["Intermediate Bear Hunter!", "Kill 10 Bears."],
        ["Expert Bear Hunter!", "Kill 50 Bears."],
        ["Caravan Town Historian!", "Find all notes on Caravan Town!"],
        ["Tangaroa Historian! ", "Find all notes in Tangaroa!"],
        ["Zip Zap!", "Travel 50 meters on a zipline without disjointing."],
        ["Beginner Ziponaut!", "Travel 100 meters with the zipline tool."],
        ["Intermediate Ziponaut!", "Travel 500 meters with the zipline tool."],
        ["Expert Ziponaut!", "Travel 1500 meters with the zipline tool."],
        ["Beginner Excavator!", "Dig up a treasure."],
        ["Intermediate Excavator!", "Dig up 20 treasures."],
        ["Expert Excavator!", "Dig up 50 treasures."],
        ["Plumber Power!", "Have 30 pipes placed at once."],
        ["Bee Keeper!", "Have 10 beehives placed at once."],
        ["Beginner Bee-nevolent!", "Capture 1 bee."],
        ["Intermediate Bee-nevolent!", "Capture 10 bees."],
        ["Expert Bee-nevolent!", "Capture 25 bees."],
        ["Small Spender! ", "Spend 10 tokens."],
        ["Medium Spender!", "Spend 20 tokens."],
        ["Big Spender!", "Spend 30 tokens."],
        ["Beginner Disruptor!", "Disrupt 1 Butler-Bot."],
        ["Intermediate Disruptor!", "Disrupt 10 Butler-Bots."],
        ["Expert Disruptor!", "Disrupt 20 Butler-Bots."],
        ["Real Fireworks!", "Witness 50 firework explosions."],
        ["Beginner Anglerfish Hunter!", "Kill 1 Anglerfish."],
        ["Intermediate Anglerfish Hunter!", "Kill 10 Anglerfish."],
        ["Expert Anglerfish Hunter!", "Kill 50 Anglerfish."],
        ["All Aboard!", "Unlock all playable characters."],
        ["Beginner Merchant!", "Purchase an item at a trading post."],
        ["Intermediate Merchant!", "Reach tier 2 in the trading post."],
        ["Expert Merchant!", "Reach tier 3 in the trading post."],
        ["Powered Up!", "Have all buffs from meals and drinks active on you at the same time."],
        ["That's Not A Boat...", "Drive a snowmobile into the sea."],
        ["Cache Collector!", "Locate all Grabber caches on Varuna Point."],
        ["Varuna Point Historian!", "Find all notes in Varuna Point."],
        ["Temperance Historian!", "Find all notes in Temperance."],
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "ach_build_reorganizer",
        "ach_cemetary",
        "ach_radiotower",
        "ach_diveDeep",
        "ach_reach_pilotIsland",
        "ach_reach_captainIsland",
        "ach_balboaBicycle",
        "ach_brunosToolboard",
        "ach_tinyLittleMurderer",
        "ach_vasagatan_Bomb",
        "ach_allRBPaintings",
        "ach_tiki_completed",
        "ach_secret_tangaroa_claw",
        "ach_instrument_notes_1",
        "ach_tangaroa_cockpitLaunch",
        "ach_hidden_tangaroa_room",
        "ach_allMysteryLootUnlocked",
        "ach_varunaBossKill",
        "ach_finalCutscene",
    ]);

    assert.strictEqual(hiddenApinames.size, 19, "sanity check - Raft has 19 hidden achievements");

    const dataPairs = raft.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 19 hidden Raft achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["ach_build_reorganizer", "This Goes Here!"],
        ["ach_cemetary", "An Ocean Cemetery!"],
        ["ach_radiotower", "Is There A Utopia?"],
        ["ach_diveDeep", "Exploring The depths!"],
        ["ach_reach_pilotIsland", "Not A Great Landing!"],
        ["ach_reach_captainIsland", "O Captain! My Captain!?"],
        ["ach_balboaBicycle", "Pling!"],
        ["ach_brunosToolboard", "A Revelation!"],
        ["ach_tinyLittleMurderer", "Tiny Little Murderer"],
        ["ach_vasagatan_Bomb", "Bootleg Fireworks!"],
        ["ach_allRBPaintings", "Artistic Collection!"],
        ["ach_tiki_completed", "Former Glory!"],
        ["ach_secret_tangaroa_claw", "Boxed In!"],
        ["ach_instrument_notes_1", "Instrumentalist!"],
        ["ach_tangaroa_cockpitLaunch", "Launch Initiated!"],
        ["ach_hidden_tangaroa_room", "You Should Not Be Here!"],
        ["ach_allMysteryLootUnlocked", "The Renovator!"],
        ["ach_varunaBossKill", "Explosive Force!"],
        ["ach_finalCutscene", "There Is A Utopia!"],
    ];

    assert.strictEqual(names.length, 19, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = raft.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
