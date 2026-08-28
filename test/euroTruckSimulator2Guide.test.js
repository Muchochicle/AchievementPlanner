import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/euro-truck-simulator-2.js";

test("the Euro Truck Simulator 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "euro-truck-simulator-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "euro-truck-simulator-2");

});

test("the Euro Truck Simulator 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game",
            "Northern & Baltic Map DLCs",
            "Western & Southern Map DLCs",
            "South-Eastern Map DLCs",
            "Cargo Packs & Driving Academy",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 106-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /106 Steam achievements/);

});

test("every one of the 106 official Euro Truck Simulator 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "I Am a GPS", "Pathfinder", "Choo-Choo", "Sardine", "Head Hunter",
        "Successfully Docked", "From the Comfort of Your Home", "My Precious", "Test Drive Limited", "Just in Time!",
        "Long Hauler", "Reliable Contractor", "Profit Hunter", "Experience Beats All!", "Job Is Only Worth It If It's Done Well!",
        "Careerist", "Friends Are Always Here to Help You", "All Is Possible", "Minimaxer", "Honey, I'm Home",
        "National Company", "Property Magnate", "Working with the Elite", "Swimming in Success", "Performance Optimizer",
        "Aspects of Professionalism", "Zzzzz", "Diesel, No Petrol!", "Volvo Trucks Lover", "Scania Trucks Lover",
        "Sailor", "Whatever Floats Your Boat", "Cattle Drive", "Sightseer", "Miner",
        "Aquaphobia", "Bon Voyage!", "Landmark Tour", "Go Nuclear!", "Check-in, Check-out",
        "Gas Must Flow!", "Time for Big Hauling", "Keep Calm and Haul Heavy", "You Bet I Can Park It!", "No Pain No Gain",
        "I Thought This Should Be Heavy?!", "Imperator", "True Sicilian", "Captain", "Mind the Lava",
        "Many Roads Lead to Rome", "Michelangelo", "Size Matters", "The Bigger the Better", "Driver Exceptionnel",
        "Not a Big Problem", "Giant", "Big Brother", "Not a Canoe", "Mass-to-don",
        "Baltic Tourist", "Grand Tour", "Exclave Transit", "Concrete Jungle", "Industry Standard",
        "Like a Farmer", "All Around the Blue Island", "All Around the Isle of Beauty", "Balkan Explorer", "Ranger",
        "Ferryman", "Taking the Scenic Route", "Turkish Delight", "Along the Black Sea", "Orient Express",
        "Conquistador", "Let's Get Shipping", "Taste the Sun", "Fleet Builder", "Iberian Pilgrimage",
        "Grand Tour Guide", "Parking Challenge", "Road to the Adriatics", "Grand Adventurer", "Through the Serpentines",
        "Holiday Coastline", "Going Camping", "Get the Ball Rollin'", "Professional Driver", "Dedicated Student",
        "One-Shottin' It", "Rowing Through the Gears", "Failure Is Not an Option", "Odyssean Voyager", "Sights and Legends",
        "All Inclusive", "Gift of Athena", "Temple Worthy", "Advanced Student", "Nerd of the Road",
        "Shining Star", "Polar Explorer", "Northern Secrets", "Salmon Run", "Above the Arctic Circle",
        "Double Trouble"
    ];

    assert.strictEqual(officialAchievementNames.length, 106, "sanity check on this test's own reference list");

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
