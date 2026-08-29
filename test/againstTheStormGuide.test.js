import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/against-the-storm.js";

test("the Against the Storm guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "against-the-storm-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "against-the-storm");

});

test("the Against the Storm guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Difficulty & Biomes",
            "Map Modifiers",
            "Species Utopias",
            "Settlement Challenges",
            "Keepers of the Stone (Update)",
            "Nightwatchers (Update)",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 80-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /80 Steam achievements/);

});

test("every one of the 80 official Against the Storm achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "First Real Expedition", "Taking Action", "The Scarlet Orchard", "The Marshlands", "Coral Forest",
        "Cursed Lands", "Overcoming Difficulty", "Fertile Meadows", "Lost Colonies", "Barren Lands",
        "Levitating Monument", "Royal Outpost", "Watchtower", "Bandit Camp", "Ancient Battleground",
        "Dangerous Lands", "Ruined Armory", "Flooded Mines", "Statue of the Forefathers", "Forsaken Gods Temple",
        "Sparkdew Crystals", "Forbidden Lands", "Fishmen Ritual Site", "Corrosive Torrent", "Monastery of the Holy Flame",
        "Haunted Forest", "A Real Challenge", "Serving Ale", "Refinery", "Human Utopia",
        "Beaver Utopia", "Lizard Utopia", "Harpy Utopia", "Treasure", "Ruins",
        "Efficient Explorer", "Trade Baron", "Like a Machine", "Against All Odds", "Victory Through Prosperity",
        "Into the Forest", "Blood Flower Farmer", "Feeding The People", "Higher Needs", "Homesick",
        "Defying the Crown", "Paradise", "No Deaths", "Prestigious Expedition", "The Queen's Chosen",
        "Abandoned Settlement", "Frosts", "Land of Greed", "Overgrown Library", "Petrified Necropolis",
        "Ominous Presence", "Gathering Storm", "Untamed Wilds", "Fox Utopia", "The Coastal Grove",
        "Frog Republic", "Strider Rider", "The Search Continues", "Frog Utopia", "Feeling Lucky",
        "It's Wednesday", "The Ashen Thicket", "The Emberwright", "Bat Utopia", "The Rocky Ravine",
        "The Bamboo Flats", "Exiled", "The Weakest Link", "Shady Dealings", "Living on Credit",
        "Green Thumb", "Peaceful Life", "Drylands", "Silent Dominion", "Riverlands",
    ];

    assert.strictEqual(officialAchievementNames.length, 80, "sanity check on this test's own reference list");

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
