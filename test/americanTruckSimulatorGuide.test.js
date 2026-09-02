import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/american-truck-simulator.js";

test("the American Truck Simulator guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "american-truck-simulator-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "american-truck-simulator");

});

test("the American Truck Simulator guide has all 11 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Base Game: California, Nevada & Arizona",
            "Heavy Cargo Pack & New Mexico",
            "Special Transport & Oregon",
            "Washington & Forest Machinery",
            "Utah, Idaho & Colorado",
            "Wyoming, Montana & Texas",
            "Oklahoma, Kansas, Nebraska, Arkansas & Driving Academy",
            "Missouri, More Driving Academy, Iowa, Louisiana & Illinois",
            "Upcoming Expansions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 140-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /140 Steam achievements/);

});

test("every one of the 140 official American Truck Simulator achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["California Dreamin'", "Sea Dog", "Cheers!", "Warming Up", "Rig Master", "Company Collector", "High Five", "Cha-Ching", "Final Makeover", "Not a Problem", "Like a Boss", "I Think I Like It", "Pimp My Truck", "What's Your BMI?", "Gas Guzzler", "Silver State", "Gold Fever", "Copper State", "Sky Harbor", "Start Your Engine!", "Powell's Trail", "Time for Big Hauling", "How Heavy Am I?!", "Heavy, but Not Bull in a China Shop!", "Bigger Cargo, Bigger Profit", "I Thought This Should Be Heavy?!", "The Land of Enchantment", "Truck Stop Tour", "Forest Shortcut", "1881", "Sky Delivery", "Size Matters", "Go Big or Go Home", "Get (to) the Chopper!", "One, Two, Three - Breathe!", "Big in America!", "Your Dumper Has Arrived!", "Home Sweet Home", "The Beaver State", "Uplifting", "Lumberjack", "Travel Oregon", "Cabbage to Cabbage", "The Evergreen State", "Steel Wings", "Keep Sailing", "Terminal Terminus", "Seattle Mole", "Ferry Tales", "Over the Top", "Travel Washington", "Logged-In", "Leave No Branch Behind!", "Beehive State", "This One Is Mine!", "It's Something", "Some Like It Salty", "Pump It Up", "Gem State", "Grown in Idaho", "Along the Snake River", "The Director", "45th Parallel", "The Centennial State", "Million Dollar Highway", "Cruising High Below", "Energy From Above", "Gold Rush", "Up and Away", "Four Corners", "The Equality State", "Over Plains and Mountains", "Population 1", "Big Boy", "Buffalo Bill", "The Last Best Place", "Big Sky Country", "Zero Waste", "Power On!", "Major Miner", "Parking Challenge", "The Lone Star State", "Big Country Views", "Avid Historian", "Shoreside Delivery", "Farm Away", "Cotton Bloom", "The Sooner State", "Can Do!", "School Bus Capital", "Big Wheels Keep On Turning", "The Sunflower State", "Wheat State Explorer", "Air Capital of the World", "Can you Keep a Secret?", "Grain of Salt", "Cornhusker State", "Nebraska Explorer", "Vehicle Dealer", "Agriculture Expert", "The Natural State", "I Saw Arkansas", "Paper Trail", "Spa City", "Get the Ball Rollin'", "Professional Driver", "Dedicated Student", "One-Shottin' It", "Rowing Through the Gears", "Failure Is Not an Option", "Show-Me State!", "Ozark Explorer", "Subterranean", "What a Blast!", "Advanced Student", "Nerd of the Road", "Shining Star", "The Hawkeye State", "Golden Acres Explorer", "Madison County Bridge", "Piggy Express", "Pelican State", "Parish Explorer", "Over the Bayou", "Shipyard Supplies", "Double Trouble", "The Prairie State", "Between Two Rivers", "Heavy Duty", "Cornfusion", "Mount Rushmore State (Upcoming)", "Great Faces, Great Places (Upcoming)", "Big Muddy Run (Upcoming)", "Who Says You Can’t Go Home? (Upcoming)", "Jack of All Trades (Upcoming)", "Worth the Detour (Upcoming)", "Keys in Hand (Upcoming)", "Interstate Legend (Upcoming)", "Not a Scratch (Upcoming)", "Nowhere to Rush (Upcoming)"];

    assert.strictEqual(officialAchievementNames.length, 140, "sanity check on this test's own reference list");

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
