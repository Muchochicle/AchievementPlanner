import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/new-world-aeternum.js";

test("the New World: Aeternum guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "new-world-aeternum-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "new-world-aeternum");

});

test("the New World: Aeternum guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Crafting, Refining & Gathering",
            "Trade Skill Mastery",
            "PvP, Prey Hunts & Expeditions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 133-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /133 Steam achievements/);

});

test("every one of the 133 official New World: Aeternum achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Repairs I: Handy With A Bit Of Tape", "Arcana I: Making Potions And Prods", "Arcana II: A Mastery Over Magic", "Armoring I: Patching Parts Together", "Armoring II: This Is Amazing Work", "Cooking I: Well, It's No Cheese Sandwich", "Cooking II: This Bread Is So Flaky And Buttery!", "Engineering I: Tools Of The Trade", "Engineering II: An Hourglass With A Garrote Wire?", "Furnishing I: Basic, Functional Items For The Home", "Furnishing II: It All Starts With Using Good Wood", "Jewelcrafting I: A Little Crude, But It's Real Silver", "Jewelcrafting II: Crafting The Best In Enhancement Jewelry", "Weaponsmithing I: For Your Cutting And Smashing Needs", "Weaponsmithing II: Making The Best Of The Best", "Just Trying To Keep Things Tidy", "Death I: Now, What Have We Learned?", "Death II: Destroyed But Not Defeated", "Teamwork!", "Leatherworking I: Of Course It's Coarse", "Leatherworking II: Imbuing The Leather", "Smelter I: Learning To Stand The Heat", "Smelter II: Using Dangerous Metals", "Stonecutting I: Grasping The Basic Facets", "Stonecutting II: Competitive Gemwork", "Weaving I: Learning The Warp And The Weft", "Weaving II: Arachne Approved", "Woodworking I: Know My Way Around A Woodshop", "Woodworking II: Working With Enchantments", "Supplies Looted I: These Look Lonely. I'll Take Them With Me", "Supplies Looted II: Aeternum Is Truly A Land Of Opportunities", "Progress I: Getting To Know My Way Around", "Progress II: Coming Into My Own", "Progress III: Showing What I'm Made Of", "Progress IV: Making A Name For Myself", "Progress V: No One Is Pushing Me Around", "Progress VI: That It? What Else You Got?!", "Time Played I: Time Well Spent", "Time Played II: Just Another 15 Minutes...", "Time Played III: It's Morning? Already?!!", "Time Played IV: I'll Sleep Next Week", "Master Arcanist", "Master Armorer", "Master Cook", "Master Engineer", "Master Woodworker", "Master Jeweler", "Master Weaponsmith", "Master Tanner", "Master Metallurgist", "Master Stonemason", "Master Weaver", "Master Carpenter", "Master Reaper", "Master Lumberjack", "Master Miner", "Master Hunter", "Fishing Master", "Maximum Caliber", "House I: First Time Homeowner", "Brightwood: When Everyone Knows Your Name", "Cutlass Keys: When Everyone Knows Your Name", "Ebonscale Reach: When Everyone Knows Your Name", "Everfall: When Everyone Knows Your Name", "First Light: When Everyone Knows Your Name", "Monarch's Bluffs: When Everyone Knows Your Name", "Mourningdale: When Everyone Knows Your Name", "Reekwater: When Everyone Knows Your Name", "Restless Shores: When Everyone Knows Your Name", "Weaver's Fen: When Everyone Knows Your Name", "Windsward: When Everyone Knows Your Name", "Covenant Initiate: It Starts", "Covenant Adjudicator: An Arm Of The Spark", "Marauder Soldier: Recognized Prowess", "Marauder Commander: Dealing In Hope", "Syndicate Adept: Embracing Science", "Syndicate Alchemist: Universal Solvents", "Oh, I'm More Than Worthy Of Any Hammer", "Through The Eye Of A Needle", "Char-Broiling", "Where The Offense Is, Let The Great Axe Fall", "Toss It, Dice It, Any Way You Slice It", "A Staff Of Near Immortality", "And Now: Shooting Blindfolded!", "With The Blessing Of Horus", "And Then A Step To the Right", "Inconceivable!", "The Coldest Steel", "Faction Missions I: On My Way Up", "Faction Missions II: Help Thy Neighbor", "Faction Missions III: Adding The 'I' Into Team", "Faction Missions IV: Working Class Hero", "Faction Missions V: Don't Say I'm Not A Team Player", "I Be A Fisherman, I Be", "Quests I: On A Quest To Do Quests", "Quests II: I Was Totally Expecting A Grail Quest", "War Wins I: My First Rodeo", "War Wins II: Gets Tiring, All This Winning", "War Wins III: Winning Streak", "War Wins IV: We Will Be Legends", "PvP Kills I: Vengeance Granted", "PvP Kills II: Target-rich Environment", "PvP Kills III: No Hard Feelings, I Hope", "Rush I: One Little Victory", "Rush II: Finding My Way", "Rush III: Marathon", "Rush IV: Rush Tactician", "Gobble Gobble", "Be Very, Very Quiet!", "Udderly Brutal", "Breakfasting With Some Boars", "Invasion I: Invasion Defender", "Invasion II: Home Turf", "Breach III: Local Renovations", "Harvesting I: I Sickle", "Harvesting II: Aeternian Harvester", "Logging I: Increased Skill Means Faster Speed", "Logging II: Ready For The Logging Festival", "Mining I: So Many To Pick", "Mining II: I Can Smell The Ore, At This Point", "Tracking & Skinning I: Following The Beaten Path", "Tracking & Skinning II: I Can Also Make Pelt Rugs", "I Was Expecting More Of A Menhir", "Master And Commander", "Problem Child", "Bullseye", "Dynasty Demolition", "Invasion III: Official Deniability", "Invasion IV: Invasion Aeternum", "Quad Squad", "Breach I: Into The Breach!", "Breach II: Quarantine Breach", "House II: Houses For All My Stuff"];

    assert.strictEqual(officialAchievementNames.length, 133, "sanity check on this test's own reference list");

    const fullText = GUIDE.sections.map(section => section.body.join(" ")).join(" ");

    const missing = officialAchievementNames.filter(name => !fullText.includes(name));

    assert.deepStrictEqual(missing, [], "every official achievement name must be mentioned somewhere in the guide");

});

test("Tip: paragraphs (strategy) are distinguishable from the surrounding factual paragraphs", () => {

    const tipParagraphs = GUIDE.sections
        .flatMap(section => section.body)
        .filter(paragraph => paragraph.startsWith("Tip:"));

    assert.ok(tipParagraphs.length > 0, "expected at least one clearly-labeled strategy paragraph");

});
