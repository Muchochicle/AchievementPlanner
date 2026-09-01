import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/new-world-aeternum.json - 133 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1063730 (fetched through this app's own services/steamApi.js).
// Hidden achievements have no Steam description; where present, their
// description here is researched from community 100% guides and cited in
// the frontend guide header. difficulty/estimatedTime/missable are curatorial.
const game = getPlannerData("new-world-aeternum");

test("getPlannerData('new-world-aeternum') returns real planner data with 133 curated achievements", () => {

    assert.ok(game, "expected real planner data for new-world-aeternum");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 133);

});

test("every New World: Aeternum achievement has a unique id from 1 to 133 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 133 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 133);
    assert.strictEqual(new Set(apinames).size, 133);

});

test("every New World: Aeternum achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 133 New World: Aeternum achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["A Staff Of Near Immortality", "Reach Life Staff Mastery level 20."],
        ["And Now: Shooting Blindfolded!", "Reach Musket Mastery level 20."],
        ["And Then A Step To the Right", "Reach Straight Sword Mastery level 20."],
        ["Arcana I: Making Potions And Prods", "Craft 100 Arcana items."],
        ["Arcana II: A Mastery Over Magic", "Craft 6,000 Arcana items."],
        ["Armoring I: Patching Parts Together", "Craft 100 Armoring items."],
        ["Armoring II: This Is Amazing Work", "Craft 4,000 Armoring items."],
        ["Be Very, Very Quiet!", "Kill 100 rabbits."],
        ["Breach I: Into The Breach!", "Dispel 25 Corruption Breaches."],
        ["Breach II: Quarantine Breach", "Dispel 500 Corruption Breaches."],
        ["Breach III: Local Renovations", "Dispel 5,000 Corruption Breaches."],
        ["Breakfasting With Some Boars", "Kill 100 boars."],
        ["Brightwood: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Bullseye", "Defeat the boss of the Lazarus Instrumentality Expedition."],
        ["Char-Broiling", "Reach Fire Staff Mastery level 20."],
        ["Cooking I: Well, It's No Cheese Sandwich", "Craft 100 Cooking items."],
        ["Cooking II: This Bread Is So Flaky And Buttery!", "Craft 8,000 Cooking items."],
        ["Covenant Adjudicator: An Arm Of The Spark", "Reach a Covenant rank of 5."],
        ["Covenant Initiate: It Starts", "Join the Covenant."],
        ["Cutlass Keys: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Death I: Now, What Have We Learned?", "Die for the first time."],
        ["Death II: Destroyed But Not Defeated", "Die 50 times."],
        ["Dynasty Demolition", "Defeat the boss of the Dynasty Shipyard Expedition."],
        ["Ebonscale Reach: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Engineering I: Tools Of The Trade", "Craft 100 Engineering items."],
        ["Engineering II: An Hourglass With A Garrote Wire?", "Craft 4,000 Engineering items."],
        ["Everfall: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Faction Missions I: On My Way Up", "Fulfill 50 Faction Missions, any type, anywhere."],
        ["Faction Missions II: Help Thy Neighbor", "Fulfill 200 Faction Missions, any type, anywhere."],
        ["Faction Missions III: Adding The 'I' Into Team", "Fulfill 500 Faction Missions, any type, anywhere."],
        ["Faction Missions IV: Working Class Hero", "Fulfill 1,000 Faction Missions, any type, anywhere."],
        ["Faction Missions V: Don't Say I'm Not A Team Player", "Fulfill 4,000 Faction Missions, any type, anywhere."],
        ["First Light: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Fishing Master", "Reach Fishing skill level 200."],
        ["Furnishing I: Basic, Functional Items For The Home", "Craft 25 Furnishing items."],
        ["Furnishing II: It All Starts With Using Good Wood", "Craft 500 Furnishing items."],
        ["Gobble Gobble", "Kill 100 turkeys."],
        ["Harvesting I: I Sickle", "Harvest 1,000 items using a harvesting sickle."],
        ["Harvesting II: Aeternian Harvester", "Harvest 50,000 items using a harvesting sickle."],
        ["House I: First Time Homeowner", "Purchase your first home."],
        ["House II: Houses For All My Stuff", "Own 3 houses you can travel between."],
        ["I Be A Fisherman, I Be", "Complete the fishing quest arc that starts with 'Fishing With Shields'."],
        ["I Was Expecting More Of A Menhir", "Defeat the boss of the Starstone Barrows Expedition."],
        ["Inconceivable!", "Reach Rapier Mastery level 20."],
        ["Invasion I: Invasion Defender", "Win your first Invasion."],
        ["Invasion II: Home Turf", "Win 10 Invasions."],
        ["Invasion III: Official Deniability", "Win 50 Invasions."],
        ["Invasion IV: Invasion Aeternum", "Win 100 Invasions."],
        ["Jewelcrafting I: A Little Crude, But It's Real Silver", "Craft 75 Jewelcrafting items."],
        ["Jewelcrafting II: Crafting The Best In Enhancement Jewelry", "Craft 3,000 Jewelcrafting items."],
        ["Just Trying To Keep Things Tidy", "Collect 175,000 Gathering type items."],
        ["Leatherworking I: Of Course It's Coarse", "Refine 500 leather items at the Tannery."],
        ["Leatherworking II: Imbuing The Leather", "Refine 15,000 leather items at the Tannery."],
        ["Logging I: Increased Skill Means Faster Speed", "Collect 1,000 wood using a logging axe."],
        ["Logging II: Ready For The Logging Festival", "Collect 24,000 wood using a logging axe."],
        ["Marauder Commander: Dealing In Hope", "Reach a Marauder rank of 5."],
        ["Marauder Soldier: Recognized Prowess", "Join the Marauders."],
        ["Master And Commander", "Defeat the boss of The Depths Expedition."],
        ["Master Arcanist", "Reach Arcana skill level 200."],
        ["Master Armorer", "Reach Armoring skill level 200."],
        ["Master Carpenter", "Reach Woodworking skill level 200."],
        ["Master Cook", "Reach Cooking skill level 200."],
        ["Master Engineer", "Reach Engineering skill level 200."],
        ["Master Hunter", "Reach Tracking & Skinning skill level 200."],
        ["Master Jeweler", "Reach Jewelcrafting skill level 200."],
        ["Master Lumberjack", "Reach Logging skill level 200."],
        ["Master Metallurgist", "Reach Smelting skill level 200."],
        ["Master Miner", "Reach Mining skill level 200."],
        ["Master Reaper", "Reach Harvesting skill level 200."],
        ["Master Stonemason", "Reach Stonecutting skill level 200."],
        ["Master Tanner", "Reach Leatherworking skill level 200."],
        ["Master Weaponsmith", "Reach Weaponsmithing skill level 200."],
        ["Master Weaver", "Reach Weaving skill level 200."],
        ["Master Woodworker", "Reach Furnishing skill level 200."],
        ["Maximum Caliber", "Get all Trade Skills up to 200."],
        ["Mining I: So Many To Pick", "Mine 1,000 items using a mining pick."],
        ["Mining II: I Can Smell The Ore, At This Point", "Mine 32,000 items using a mining pick."],
        ["Monarch's Bluffs: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Mourningdale: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Oh, I'm More Than Worthy Of Any Hammer", "Reach War Hammer Mastery level 20."],
        ["Problem Child", "Defeat the boss of the Garden of Genesis Expedition."],
        ["Progress I: Getting To Know My Way Around", "Reach character level 10."],
        ["Progress II: Coming Into My Own", "Reach character level 20."],
        ["Progress III: Showing What I'm Made Of", "Reach character level 30."],
        ["Progress IV: Making A Name For Myself", "Reach character level 40."],
        ["Progress V: No One Is Pushing Me Around", "Reach character level 50."],
        ["Progress VI: That It? What Else You Got?!", "Reach character level 60."],
        ["PvP Kills I: Vengeance Granted", "Personally defeat 500 other players."],
        ["PvP Kills II: Target-rich Environment", "Personally defeat 5,000 other players."],
        ["PvP Kills III: No Hard Feelings, I Hope", "Personally defeat 10,000 other players."],
        ["Quad Squad", "Defeat 10,000 Aeternum enemies while in groups."],
        ["Quests I: On A Quest To Do Quests", "Complete 200 quests."],
        ["Quests II: I Was Totally Expecting A Grail Quest", "Complete 525 quests."],
        ["Reekwater: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Repairs I: Handy With A Bit Of Tape", "Repair 25 inventory items."],
        ["Restless Shores: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Rush I: One Little Victory", "Win your first Outpost Rush teamplay battle."],
        ["Rush II: Finding My Way", "Win 25 Outpost Rush teamplay battles."],
        ["Rush III: Marathon", "Win 100 Outpost Rush teamplay battles."],
        ["Rush IV: Rush Tactician", "Win 200 Outpost Rush teamplay battles."],
        ["Smelter I: Learning To Stand The Heat", "Refine 300 items in Smelters."],
        ["Smelter II: Using Dangerous Metals", "Refine 14,000 items in Smelters."],
        ["Stonecutting I: Grasping The Basic Facets", "Refine 500 items on Stonecutter Tables."],
        ["Stonecutting II: Competitive Gemwork", "Refine 14,000 items on Stonecutter Tables."],
        ["Supplies Looted I: These Look Lonely. I'll Take Them With Me", "Search your first supplies container."],
        ["Supplies Looted II: Aeternum Is Truly A Land Of Opportunities", "Search 10,000 supplies containers."],
        ["Syndicate Adept: Embracing Science", "Join the Syndicate."],
        ["Syndicate Alchemist: Universal Solvents", "Reach a Syndicate rank of 5."],
        ["Teamwork!", "Revive 200 allies."],
        ["The Coldest Steel", "Reach Ice Gauntlet Mastery level 20."],
        ["Through The Eye Of A Needle", "Reach Bow Mastery level 20."],
        ["Time Played I: Time Well Spent", "Play for 80 hours."],
        ["Time Played II: Just Another 15 Minutes...", "Play for 160 hours."],
        ["Time Played III: It's Morning? Already?!!", "Play for 320 hours."],
        ["Time Played IV: I'll Sleep Next Week", "Play for 720 hours."],
        ["Toss It, Dice It, Any Way You Slice It", "Reach Hatchet Mastery level 20."],
        ["Tracking & Skinning I: Following The Beaten Path", "Get 1,000 items using a skinning knife."],
        ["Tracking & Skinning II: I Can Also Make Pelt Rugs", "Get 32,000 items using a skinning knife."],
        ["Udderly Brutal", "Kill 100 cows."],
        ["War Wins I: My First Rodeo", "Win your first War."],
        ["War Wins II: Gets Tiring, All This Winning", "Win 10 Wars."],
        ["War Wins III: Winning Streak", "Win 50 Wars."],
        ["War Wins IV: We Will Be Legends", "Win 100 Wars."],
        ["Weaponsmithing I: For Your Cutting And Smashing Needs", "Craft 100 Weaponsmithing items."],
        ["Weaponsmithing II: Making The Best Of The Best", "Craft 4,000 Weaponsmithing items."],
        ["Weaver's Fen: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["Weaving I: Learning The Warp And The Weft", "Refine 250 items with Looms."],
        ["Weaving II: Arachne Approved", "Refine 14,000 items with Looms."],
        ["Where The Offense Is, Let The Great Axe Fall", "Reach Great Axe Mastery level 20."],
        ["Windsward: When Everyone Knows Your Name", "Have a Territory Standing of 300."],
        ["With The Blessing Of Horus", "Reach Spear Mastery level 20."],
        ["Woodworking I: Know My Way Around A Woodshop", "Refine 500 items at Woodshops."],
        ["Woodworking II: Working With Enchantments", "Refine 14,000 items at Woodshops."],
    ];

    assert.strictEqual(officialAchievements.length, 133, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
