import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/adventure-capitalist.js";

test("the AdVenture Capitalist guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "adventure-capitalist-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "adventure-capitalist");

});

test("the AdVenture Capitalist guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Earth",
            "The Moon",
            "Mars",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official AdVenture Capitalist achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Serious Citrus!", "You've Struck Oil!", "The Big Hundsky!", "Grand Standing!", "Frankly Ridiculous!", "The Great AdVenture!", "Earth Overlord!", "Wholy Holy!", "Let's Learn Big Numbers!", "Googolaire!", "Capitalism Classic", "Meta Reference", "Accurate Description", "Life's Manager", "Triumph!", "Ominous...", "Delegation!", "1 Small Step...", "Here We Go Again!", "OVER 9000!", "Moon Walk", "Lucky Ducky", "That Achievement's Name...", "Moonumental Achievement", "Divine Intervention", "One More", "Moogal", "2 Decillion Wings", "Gallery Tour", "Release The Hounds", "Mars Attacks"];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
