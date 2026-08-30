import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/viscera-cleanup-detail.json - 85 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 246900 (fetched through this app's own services/steamApi.js). None are
// hidden; every description is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("viscera-cleanup-detail");

test("getPlannerData('viscera-cleanup-detail') returns real planner data with 85 curated achievements", () => {

    assert.ok(game, "expected real planner data for viscera-cleanup-detail");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 85);

});

test("every Viscera Cleanup Detail achievement has a unique id from 1 to 85 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 85 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 85);
    assert.strictEqual(new Set(apinames).size, 85);

});

test("every Viscera Cleanup Detail achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

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

test("every one of the 85 Viscera Cleanup Detail achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["\"Red Keycard\"", "Unlock Bob's super secret secret stash room"],
        ["Anti-Virus", "Complete Caduceus Level"],
        ["Audacious Oddities", "Find all the unique Collectibles in the Vulcan Affair and return them to your office"],
        ["Back From Whence It Came", "Destroy the Bad Banger"],
        ["Bad Dreams on Helm Street", "Collect the clawed glove and return it to your office"],
        ["Ballistic Weaponry", "Collect the different Ballistic Weapons toys and bring them back to your office"],
        ["Big Banger Burnout", "Tame the uncontrollable fury of the Big Banger by incinerating it"],
        ["Bins? Limbs!", "Suffer the wrath of the Bin machine 75 times"],
        ["Biomassive Breakdown", "Complete Incubation Emergency Level"],
        ["Blaze of Glory", "Incinerate 2000 items"],
        ["Bleach and Clear", "Complete Penumbra Level"],
        ["Blood in the Water", "Go for a swim with Sharks"],
        ["Blood Soaked", "Spill 100 dirty buckets"],
        ["Bloody Hell!", "Mop up 10,000 splats"],
        ["Bloody Incompetent", "Prove your incompetence by leaving a worse mess in Santa's Workshop and clock off"],
        ["Bob's Legacy", "Find Bob"],
        ["Bring the Thunder", "Take the Big Banger Supernova out of Unearthly Excavation and into another work-site and turn it on"],
        ["Brushed Steel", "Complete Revolutionary Robotics Level"],
        ["Bushwhacked", "Complete Overgrowth Level"],
        ["Cat-astrophe", "Using an orbital beam weapon, destroy the symbol of your most hated overlord; cats!"],
        ["Chew on This!", "Throw 100 items into sand traps"],
        ["Christmas Crisis Corrected", "Completely clean Santa's Workshop without breaking any Christmas items and clock off"],
        ["Clean Freak", "Cleanup your own personal Office by removing any Trash, Viscera and Blood; excluding trophies, then leave"],
        ["Cleanliness is Godliness", "Completely clean all mess in Santa's Workshop and clock off"],
        ["Cold Storage", "Complete Frostbite Level"],
        ["Crystal Clear", "Complete Core Sample Level"],
        ["Death From Above", "Get turned into mist by an orbital beam weapon"],
        ["Deep-Sea Dry-cleaning", "Complete Paintenance Level"],
        ["Disintegrator", "Fry 500 items with the plasma welder"],
        ["Double-Oh Dumbass", "Foolishly activate the Death Ray"],
        ["Eggregious", "Find all the hidden painted eggs and return them to your office"],
        ["Employee of the Month", "Get the Employee of the Month reward for your office"],
        ["Employee of the Year", "Receive 12 Employee of the Month awards"],
        ["First Aid", "Restock a total of 50 medkits over your cleaning career by punching out of levels with medkits"],
        ["Harroween", "Collect the white mask and butcher knife and return them to your office"],
        ["Head Hunter", "Collect a head from each species in cleaned levels and take them to your office"],
        ["Head Hunter", "Collect elf heads and bring them back to your office, you freakin' psycho!"],
        ["House of Honor", "Clean the entire House of Horror level"],
        ["Ice-Cold Cleana", "Complete Cryogenesis Level"],
        ["Identity Theft", "Steal 30 or more Personal Identification Devices (P.I.Ds) from cleaned levels and take them to your office"],
        ["Janicide", "Blow up a fellow worker with the help of an ominously bright-red explosive charge"],
        ["Keep It Secret, Keep It Safe", "Find all the unique and hidden collectibles and return them to your office"],
        ["Lair Care", "Clean the entire Vulcan Affair level"],
        ["Locked In", "Lock another player inside a holding cell where they belong"],
        ["Lost in Space and Time", "Get consumed by an inter-dimensional crack in space-time"],
        ["Louis and Clean", "Complete Gravity Drive Level"],
        ["Master of the Beats", "Turn off the Big Banger while it's playing loudly(keep your music volume up too) in zero-gravity during a Solo game"],
        ["Mr. Two Million Dollars", "Collect the two million dollars of cold hard cash from the Shadow Warrior level all at once and bring it back to your office"],
        ["Need a Hand?", "Receive a total of 35 helping hands from the Slosh-O-Matic"],
        ["Never Put It On", "Collect the ring and return it to your office"],
        ["Not Quite a Lumberjack", "Destroy 200 items in the woodchipper"],
        ["One Mop To Rule Them All", "Complete All major Official Levels"],
        ["Operation Brownwash", "Complete Waste Disposal Level"],
        ["Orbital Bang-bardment", "Allow the Banger to ascend to its rightful place among the heavens through the use of an orbital beam weapon"],
        ["Pass The Torch", "Take a lit flare from a fellow Janitor"],
        ["Pedestrian", "Track over 20,000 footprints"],
        ["Pest Control", "Complete Pestilent Penitentiary Level"],
        ["Pine Fresh", "Complete Hydroponic Hell Level"],
        ["Plague Bearer", "Transfer a Goo-Jar to another work-site and infect something"],
        ["Refined", "Complete Unrefinery Level"],
        ["Rooks Kept", "Collect the different Rooks Keep figurines and take them back to your office"],
        ["Sandblasted", "Complete Unearthly Excavation Level"],
        ["Sanitary Supremacy", "Completely clean the entire Shadow Warrior temple level"],
        ["Sanitized Earth", "Completely clean all mess and destroy every item in Santa's Workshop and clock off"],
        ["Santa Hats Must Die!", "Incinerate 50 Santa hats, the symbol of everything you hate"],
        ["Spring Fresh", "Clean any map adequately"],
        ["St. Nick's Boomstick", "Collect Santa's shotgun and bring it back to your office"],
        ["Surgical Sweeper", "Complete Evil Science Level"],
        ["Swept Under The Carpet", "Complete Uprinsing Level"],
        ["Taking Out the Trash", "Pick up 1000 pieces of trash"],
        ["Teeth for Tunes", "Bring about the unfortunate meeting of Double-Oh Banger and Shark"],
        ["The Day the Funk Died", "Bring about the sad meeting of Ice-Cold Banger and fire"],
        ["The Mops Of Wrath", "Complete Athena's Wrath Level"],
        ["The Nose Knows", "Use the Sniffer for a total of 2 hours"],
        ["The Red Nose Knows", "Collect the iconic reindeer nose and bring it back to your office"],
        ["The Shimmering", "Collect the axe and return it to your office"],
        ["Thunder Candle", "Requisition a new replacement janitor through the use of TNT"],
        ["Thursday the 12th", "Collect the mask and machete and return them to your office"],
        ["Top Brass", "Pick up 800 casings"],
        ["Tower of Babel", "Build a stack of 10 stools"],
        ["Ubermensch", "Speedrun a map with at least %25 par time to spare"],
        ["We're Gonna Need a Bigger Tank", "Feed the ever hungry Sharks 500 items they can either devour or destroy"],
        ["Who's for Dinner?", "Get eaten"],
        ["Wicked Unliving", "Collect the chainsaw, boomstick, cursed hand and the evil book and return them to your office"],
        ["You're Fired!", "Get fired!"],
    ];

    assert.strictEqual(officialAchievements.length, 85, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
