import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rust.js";

test("the Rust guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rust-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rust");

});

test("the Rust guide has all 9 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival & Building Basics",
            "Mid-Game Tech",
            "Monuments & Vehicles",
            "Music & Party (DLC)",
            "The Seas",
            "Social & Clans",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 105-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /105 Steam achievements/);

});

test("every one of the 105 official Rust achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/rust.json).
    const officialAchievementNames = [
        "Place Camp Fire", "Craft Camp Fire", "Collect Wood", "Craft Stone Hatchet", "Collect 200 Stone",
        "Craft Stone Pickaxe", "Place Sleeping Bag", "Collect 700 Wood", "Craft Spear", "Craft Sleeping Bag",
        "Collect 30 Cloth", "Craft Building Plan", "Craft Hammer", "Construct Base", "Upgrade Base",
        "Craft Wooden Door", "Craft Lock", "Place Wooden Door", "Place Lock", "Lock the Lock",
        "Craft Tool Cupboard", "Place Tool Cupboard", "Collect 50 Cloth", "Craft Hunting Bow", "Craft Arrows",
        "Kill an Animal", "Skin an Animal", "Craft Burlap Headwrap", "Craft Burlap Shirt", "Craft Burlap Pants",
        "Equip Clothing", "Craft Wooden Box", "Place Wooden Box", "Acquire 50 Low Grade Fuel", "Craft a Furnace",
        "Place a Furnace", "Collect 300 Metal Ore", "Craft a Machete", "Visit a Road", "Collect 65 Scrap",
        "Destroy 10 Barrels", "Craft a Workbench", "Place a Workbench", "Craft a Nailgun", "Craft Nailgun Nails",
        "Research an Item", "Craft a Research Table", "Place a Research Table", "Glutton", "Sealbreaker",
        "Save The Planet", "I'm the Captain now", "On The Deck", "Giddy Up!", "Something of a scientist myself",
        "First Notes", "Musical Maestro", "Getting the band together", "Cool Kids Club", "Paparazzi",
        "Sunglasses at Night", "Radical", "Soaked", "Liquidator", "No Pressure",
        "Party Boat", "Bad Neighbour", "On the Record", "Like Nobody's Watching", "I can no longer see",
        "I should buy this Soundtrack", "Full Collection", "Buckle Up", "It's Honest Work", "Pro Angler",
        "Terror in the Deep", "Friendly Neighbour", "Thread the Needle", "High Roller", "Mission Accomplished",
        "Death from Above", "On Track", "Apex Predator", "Smooth Sailing", "Big Brother",
        "Heavy Industry", "Waste Not, Want Not", "Rust Air", "Battle Bus", "Arctic Speed",
        "Fresh Graduate", "Pew Pew", "Shipshape", "Oceans are now battlefields", "New Horizons",
        "Stolen Goods", "Need more fibre", "Treasure ahoy!", "Hostile Waters", "Safe Harbor",
        "Dude, where's my boat?", "Swim with the fishes", "Strength in Numbers", "New friends", "Working together"
    ];

    assert.strictEqual(officialAchievementNames.length, 105, "sanity check on this test's own reference list");

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
