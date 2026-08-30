import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wingspan.js";

test("the Wingspan guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wingspan-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wingspan");

});

test("the Wingspan guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "High Scores & Card Synergies",
            "Playstyle Challenges",
            "Endgame Conditions",
            "Advanced Combos",
            "Regional Expansions & Deep Cuts",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 64-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /64 Steam achievements/);

});

test("every one of the 64 official Wingspan achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Better Luck Nest Time", "ILL EAGLE", "What the Flock", "Beak Performance", "A Real Know-it-owl",
        "Fully Fledged", "Attempted Murder", "This Present Caw-st a Fortune", "Toucan of My Appreciation", "Investing in the Stork Market",
        "A Bird’s Best Subject? Owl-jay-bra", "Here's My Number, so Caw Me Maybe", "Clutch Performance", "Free-for-owl", "Owl of a Sudden",
        "Wild Goose Chase", "Egg-streme Measures", "Early Bird Gets the Worm", "Money for Nothin' and Chicks for Free", "Pheasant Diversion",
        "Wake Me up Before You Dodo", "Fly Like an Eagle", "By the Pricking of My Thumbs, Something Winged This Way Comes", "Birds of a Feather", "Fair-feather Friends",
        "Build Two Birds with One Stone", "A Bird in the Hand", "Bird Brained", "Once Bittern, Twice Shy", "Quacking under Pressure",
        "The Eagle Has Landed", "Passenger 57", "Eggs-istential crisis", "A Real Know-it-owl: Europe", "Birdnado",
        "Doomsday Prepper", "European Union", "Full Tuck!", "Rat Bird", "Robin Crow",
        "There's always a bigger bird!", "Wait, one more thing!", "Nectar of Life", "Nectar Jackpot", "All Birds, Aligned!",
        "Fly me to the Moor", "Unflappable", "Global Analyst", "The Tuckinator", "Mellow Yellow",
        "By Our Powers Combined", "Sweet Tooth", "A Real Know-it-owl: Oceania", "Tailored Fit", "Devoted to Duet",
        "Jackpot Cache", "Like Your Birds, But Better", "Owl Hands On Deck", "We're SO Back", "Swan Song, Solo",
        "To Egg-Finity and Beyond!", "Flying International", "Double Agent", "A Real Know-it-owl: Asia",
    ];

    assert.strictEqual(officialAchievementNames.length, 64, "sanity check on this test's own reference list");

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
