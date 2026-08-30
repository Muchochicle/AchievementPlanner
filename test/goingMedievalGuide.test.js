import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/going-medieval.js";

test("the Going Medieval guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "going-medieval-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "going-medieval");

});

test("the Going Medieval guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early Survival & Core Loop",
            "Growth & Research",
            "Hunting",
            "Taming",
            "Combat, Fishing & Events",
            "Grand Objectives",
            "Rooms & Endgame",
            "Hidden Achievement",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 94-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /94 Steam achievements/);

});

test("every one of the 94 official Going Medieval achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Having A Field Day", "Green Thumb", "Home Cooked Meal", "Fit For A King", "Novice Researcher",
        "Onward", "Beam Me Up", "Get A Room", "Retribution", "The First Day",
        "The First Week", "...And Don’t Come Back!", "Heating Up", "Winter Is Coming", "Winter Is Here",
        "All Year Round", "A Party Now", "Nothing Wasted", "Reap What You Sow ", "Putting Food on the Table",
        "Feast or Famine", "Studious Researcher", "Adept Researcher", "Luminary Researcher", "Oh Deer!",
        "Deerly Departed", "Food Chain", "Wabbit Season", "Don't Cry Wolf", "Where Wolf?",
        "Disassembled", "In Hog Heaven", "Fowl Play", "Duck, Duck, Juice", "Outfoxed",
        "Squeak & Destroy", "Holey Voleys", "Boar and Peace", "Most Unpheasant", "Quacktical Strike",
        "Zero Fox Given", "Rat-astrophe", "Varmint Violence", "For Deer Life", "Good Hare Day",
        "Man's Best Friend", "Swine & Dine", "Feathered Friend", "Lucky Duck", "Orange Crush",
        "The Rat Pack", "Vole in One", "Tiny Treaty", "Bear With Me", "Den of Thieves",
        "Finders Keepers", "Victorious!", "Casting Call", "Reel Skills", "Fifty Shades of Bait",
        "Feast Mode", "Praise Be", "Blessed Be", "Eureka!", "Know Thy Enemy",
        "Throw Away the Key", "Jailhouse Rock", "Redemption", "Natural Order", "Mind Over Matter",
        "Market Mastery", "The Art of War", "No Rest for the Wicked", "The Greatest", "Kitchen Impossible",
        "Hammer Time", "Shhh...", "House of the Holy", "Temple of Timber", "What's Up, Doc?",
        "Experiential", "Bury the Hatchet", "Conversion", "Full House", "Forging Ahead",
        "Fine Art", "Memento Mori", "Absolute Villainy", "Heavy Artillery", "Bridge Too Far",
        "Gate Expectations", "Go Forth", "Beyond Our Borders", "Not Today",
    ];

    assert.strictEqual(officialAchievementNames.length, 94, "sanity check on this test's own reference list");

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
