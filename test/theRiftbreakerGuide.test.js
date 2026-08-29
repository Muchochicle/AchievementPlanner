import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-riftbreaker.js";

test("the The Riftbreaker guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-riftbreaker-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-riftbreaker");

});

test("the The Riftbreaker guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Mr. Riggs Feats",
            "Base Building & Resources",
            "Campaign & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official The Riftbreaker achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Indecisive ", "Leaving Empty Handed ", "Something Useful ", "Overkill? ", "Beam Me Up ",
        "Ashley Phone Home ", "Get off my Lawn ", "I know Kung-Fu ", "Kaboom! ", "I'll do it myself... ",
        "Strip mining ", "Horrible Person ", "The Treasure Hunter ", "Swiss Bank Account ", "AI driven ",
        "All that Glitters ", "Going Green ", "Inspector Gadget ", "Queen Bee ", "Run Robot Run! ",
        "The Great Wall of Galatea 37 ", "Looking for a Perfect House ", "Investing in Liquid Assets ", "All Seeing Eye ", "Excalibur ",
        "Scientist? ", "Final Form ", "Walk in the Park ", "Forbidden Knowledge ", "Book Worm ",
        "Gold Digger", "Decimation", "Mighty Morphin' Tower Rangers", "No Water? No Problem!", "Death Metal",
        "Excavation Site", "Dig or Die", "Brittle", "Home alone", "Underground Glow",
        "Enter the Exit", "They aren’t that tough.", "Are we the bad guys now?", "For science!", "Tornado season",
        "I am a Superhero now.", "Get out of my swamp!", "For profit! ", "But is it better than mine? ", "I'm SIGMA ",
        "Ask AI, it won't lie. ", "Not enough space ", "It's bigger than I thought ", "Next planet, please ",
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
