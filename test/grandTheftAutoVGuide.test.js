import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grand-theft-auto-v.js";

test("the Grand Theft Auto V guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grand-theft-auto-v-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grand-theft-auto-v");

});

test("the Grand Theft Auto V guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story",
            "Los Santos 100%",
            "GTA Online: General",
            "GTA Online: Heists & Doomsday",
            "Rockstar Editor & Director Mode",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 77-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /77 Steam achievements/);

});

test("every one of the 77 official Grand Theft Auto V achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/grand-theft-auto-v.json).
    const officialAchievementNames = [
        "Welcome to Los Santos", "A Friendship Resurrected", "A Fair Day's Pay", "The Moment of Truth", "To Live or Die in Los Santos",
        "Diamond Hard", "Subversive", "Blitzed", "Small Town, Big Job", "The Government Gimps",
        "The Big One!", "Solid Gold, Baby!", "Career Criminal", "San Andreas Sightseer", "All's Fare in Love and War",
        "TP Industries Arms Race", "Multi-Disciplined", "From Beyond the Stars", "A Mystery, Solved", "Waste Management ",
        "Red Mist", "Show Off", "Kifflom!", "Three Man Army", "Out of Your Depth",
        "Altruist Acolyte", "A Lot of Cheddar", "Trading Pure Alpha", "Pimp My Sidearm", "Wanted: Alive Or Alive",
        "Los Santos Customs", "Close Shave", "Off the Plane", "Three-Bit Gangster", "Making Moves",
        "Above the Law", "Numero Uno", "The Midnight Club", "Unnatural Selection", "Backseat Driver",
        "Run Like The Wind", "Clean Sweep", "Decorated", "Stick Up Kid", "Enjoy Your Stay",
        "Crew Cut", "Full Refund", "Dialling Digits", "American Dream", "A New Perspective",
        "Be Prepared", "In the Name of Science", "Dead Presidents", "Parole Day", "Shot Caller",
        "Four Way", "Live a Little", "Can't Touch This", "Mastermind", "Vinewood Visionary",
        "Majestic", "Humans of Los Santos", "First Time Director", "Animal Lover", "Ensemble Piece",
        "Cult Movie", "Location Scout", "Method Actor", "Cryptozoologist", "Getting Started",
        "The Data Breaches", "The Bogdan Problem", "The Doomsday Scenario", "A World Worth Saving", "Orbital Obliteration",
        "Elitist", "Masterminds"
    ];

    assert.strictEqual(officialAchievementNames.length, 77, "sanity check on this test's own reference list");

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
