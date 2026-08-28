import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/rust.json - 105 real achievements sourced from
// a live ISteamUserStats/GetSchemaForGame/v2 response for appid 252490
// (fetched through this app's own services/steamApi.js) - 93 of 105 ship
// a real, official Steam description. The 12 hidden achievements are
// described publicly nowhere; their descriptions here are curatorial,
// cross-checked against Steam Community hidden-achievement guides and
// Gamepur. difficulty/estimatedTime remain curatorial judgments, same
// convention as every other planner difficulty/time field.
const rust = getPlannerData("rust");

test("getPlannerData('rust') returns real planner data with 105 curated achievements", () => {

    assert.ok(rust, "expected real planner data for rust");
    assert.ok(Array.isArray(rust.achievements));
    assert.strictEqual(rust.achievements.length, 105);

});

test("every Rust achievement has a unique id from 1 to 105 and a unique apiname", () => {

    const ids = rust.achievements.map(a => a.id);
    const apinames = rust.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 105 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 105);
    assert.strictEqual(new Set(apinames).size, 105);

});

test("every Rust achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of rust.achievements) {

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

test("every one of the 93 officially-described Rust achievement name+description pairs matches the live GetSchemaForGame response", () => {

    // The 12 hidden achievements are excluded here - Steam
    // never exposes a public description for them - and covered by their
    // own dedicated test below instead.
    const officialAchievements = [
        ["Place Camp Fire", "Place a camp fire"],
        ["Craft Camp Fire", "Craft a campfire"],
        ["Collect Wood", "Collect 100 Wood"],
        ["Craft Stone Hatchet", "Craft a Stone Hatchet"],
        ["Collect 200 Stone", "Collect 200 Stone"],
        ["Craft Stone Pickaxe", "Craft a Stone Pickaxe"],
        ["Place Sleeping Bag", "Place a sleeping bag"],
        ["Collect 700 Wood", "Collect 700 Wood"],
        ["Craft Spear", "Craft a wooden spear"],
        ["Craft Sleeping Bag", "Craft a Sleeping Bag"],
        ["Collect 30 Cloth", "Collect 30 Cloth"],
        ["Craft Building Plan", "Craft a Building Plan"],
        ["Craft Hammer", "Craft a Hammer"],
        ["Construct Base", "Construct a Base"],
        ["Upgrade Base", "Upgrade your base"],
        ["Craft Wooden Door", "Craft a Wooden Door"],
        ["Craft Lock", "Craft a lock"],
        ["Place Wooden Door", "Place a Wooden Door"],
        ["Place Lock", "Place a Lock"],
        ["Lock the Lock", "Lock the Lock"],
        ["Craft Tool Cupboard", "Craft a Tool Cupboard"],
        ["Place Tool Cupboard", "Place a tool Cupboard"],
        ["Collect 50 Cloth", "Collect 50 Cloth"],
        ["Craft Hunting Bow", "Craft a Hunting Bow"],
        ["Craft Arrows", "Craft some Arrows"],
        ["Kill an Animal", "Kill an Animal"],
        ["Skin an Animal", "Skin an Animal"],
        ["Craft Burlap Headwrap", "Craft a Burlap Headwrap"],
        ["Craft Burlap Shirt", "Craft a Burlap Shirt"],
        ["Craft Burlap Pants", "Craft Burlap Pants"],
        ["Equip Clothing", "Equip 3 pieces of clothing"],
        ["Craft Wooden Box", "Craft a Wooden Box"],
        ["Place Wooden Box", "Place a Wooden Box"],
        ["Acquire 50 Low Grade Fuel", "Acquire 50 Low Grade Fuel"],
        ["Craft a Furnace", "Craft a Furnace"],
        ["Place a Furnace", "Place a Furnace"],
        ["Collect 300 Metal Ore", "Collect 300 Metal Ore"],
        ["Craft a Machete", "Craft a Machete"],
        ["Visit a Road", "Visit a Road"],
        ["Collect 65 Scrap", "Collect 65 Scrap"],
        ["Destroy 10 Barrels", "Destroy 10 Barrels"],
        ["Craft a Workbench", "Craft a Workbench"],
        ["Place a Workbench", "Place a Workbench"],
        ["Craft a Nailgun", "Craft a Nailgun"],
        ["Craft Nailgun Nails", "Craft Nailgun Nails"],
        ["Research an Item", "Research an Item"],
        ["Craft a Research Table", "Craft a Research Table"],
        ["Place a Research Table", "Place a Research Table"],
        ["First Notes", "Play your first instrument"],
        ["Musical Maestro", "Play every instrument"],
        ["Cool Kids Club", "Be in a team where every team member is riding a Boogie Board or Inner Tube (minimum 4 members)"],
        ["Paparazzi", "Take a photo of another player"],
        ["Radical", "Splash another player with a Water Pistol while that player is irradiated"],
        ["Soaked", "Soak another player above the damage threshold using a water gun."],
        ["Liquidator", "Get a kill using a water gun."],
        ["No Pressure", "Get a kill with a super soaker pumped at the lowest pressure."],
        ["Party Boat", "Dance with 2 other players at the front of the Cargo Ship."],
        ["Bad Neighbour", "Use a megaphone while in another player's Tool Cupboard radius."],
        ["On the Record", "Record another player speaking onto a Cassette."],
        ["Like Nobody's Watching", "Dance near a playing Boom Box on an active Disco Floor."],
        ["I can no longer see", "Stare into a laser light for 30 seconds."],
        ["I should buy this Soundtrack", "Listen to the Rust soundtrack from a Boom Box for 30 seconds"],
        ["Full Collection", "Play an instrument while floating in an Inner Tube while listening to a Boom Box play a radio stream"],
        ["Buckle Up", "Start a fully repaired car with a full set of T3 engine parts"],
        ["It's Honest Work", "Plant a different seed in every slot in a Large Planter Box"],
        ["Pro Angler", "Catch one of every fish"],
        ["Terror in the Deep", "Travel to an underwater lab with a submarine"],
        ["Friendly Neighbour", "Wave at 5 different players"],
        ["Thread the Needle", "Land a Minicopter on the Cargo Ship"],
        ["High Roller", "Win 3 rounds of poker at Bandit Camp"],
        ["Mission Accomplished", "Complete 5 missions for NPC's"],
        ["Death from Above", "Kill another player with the MLRS"],
        ["On Track", "Kill 10 Tunnel Dwellers while on a moving work cart"],
        ["Apex Predator", "Kill 3 sharks with a speargun"],
        ["Smooth Sailing", "Travel 3KM with a companion in a Kayak"],
        ["Big Brother", "Watch another player through a CCTV camera"],
        ["Heavy Industry", "Activate the Excavator"],
        ["Waste Not, Want Not", "Recycle 10 cars at Junkyard"],
        ["Rust Air", "Pilot a Scrap Transport Helicopter with 5 passengers"],
        ["Battle Bus", "Drive a modular car with 4 passengers"],
        ["Arctic Speed", "Acquire a snowmobile in an Arctic Research Base"],
        ["Fresh Graduate", "Complete the Tutorial Island"],
        ["Shipshape", "Build your first boat"],
        ["Oceans are now battlefields", "Hit another boat with a cannon"],
        ["New Horizons", "Enter the Deep Sea"],
        ["Stolen Goods", "Kill a player with a weapon on a stolen PT boat"],
        ["Need more fibre", "Eat 10 coconuts"],
        ["Treasure ahoy!", "Open 5 loot containers on Tropical Islands"],
        ["Hostile Waters", "Start opening a locked crate on a Ghost Ship"],
        ["Safe Harbor", "Reach a Floating City"],
        ["Strength in Numbers", "Join a clan"],
        ["New friends", "Be a member of a clan with at least 10 members"],
        ["Working together", "Score points for your clan"]
    ];

    assert.strictEqual(officialAchievements.length, 93, "sanity check on this test's own reference list");

    const hiddenApinames = new Set([
        "GLUTTON",
        "SEALBREAKER",
        "SAVE_THE_PLANET",
        "IM_THE_CAPTAIN_NOW",
        "ON_THE_DECK",
        "GIDDY_UP",
        "KILL_SCIENTIST",
        "TEAM_INSTRUMENTS",
        "SUMMER_SUNGLASSES",
        "TUTORIAL_GUN",
        "DEEPSEA_SWIMMING",
        "HID_SWIM_WITH_FISH"
    ]);

    assert.strictEqual(hiddenApinames.size, 12, "sanity check - Rust has 12 hidden achievements");

    const dataPairs = rust.achievements
        .filter(a => !hiddenApinames.has(a.apiname))
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    const expectedPairs = [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, expectedPairs);

});

test("the 12 hidden Rust achievements each still have their own real name and a non-empty curatorial description", () => {

    const names = [
        ["GLUTTON", "Glutton"],
        ["SEALBREAKER", "Sealbreaker"],
        ["SAVE_THE_PLANET", "Save The Planet"],
        ["IM_THE_CAPTAIN_NOW", "I'm the Captain now"],
        ["ON_THE_DECK", "On The Deck"],
        ["GIDDY_UP", "Giddy Up!"],
        ["KILL_SCIENTIST", "Something of a scientist myself"],
        ["TEAM_INSTRUMENTS", "Getting the band together"],
        ["SUMMER_SUNGLASSES", "Sunglasses at Night"],
        ["TUTORIAL_GUN", "Pew Pew"],
        ["DEEPSEA_SWIMMING", "Dude, where's my boat?"],
        ["HID_SWIM_WITH_FISH", "Swim with the fishes"]
    ];

    assert.strictEqual(names.length, 12, "sanity check on this test's own reference list");

    for (const [apiname, name] of names) {

        const achievement = rust.achievements.find(a => a.apiname === apiname);

        assert.ok(
            achievement && achievement.name === name && achievement.description.length > 0,
            `expected ${apiname} to be named "${name}" with a non-empty curatorial description`
        );

    }

});
