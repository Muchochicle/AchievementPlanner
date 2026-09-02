import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/directive-8020.js";

test("the Directive 8020 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "directive-8020-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "directive-8020");

});

test("the Directive 8020 guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Episodes & Early Choices",
            "Secrets & Branching Choices",
            "Investigation & Consequences",
            "Endings & Aftermath",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Directive 8020 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Cycle Complete", "Live with the Consequences", "Wake-Up Crew", "Paint The Walls", "Humanitarian", "Thumb on the Last Page", "O Death", "Dear Mum...", "No Stone Left Unturned", "Personality Manifest", "All Possible Futures", "Social Butterfly", "Not Today, Boss", "Always Wear a Seatbelt", "Lost and Found", "Right to Bear Arms", "Organic Waste Disposal", "Is This Decaf?", "This Steak's Raw", "Password1", "Total Party Kill", "Suspect Acquitted", "Human After All", "This is Not a Place of Honor", "Message in a Bottle", "Stealth 100", "Cat's Out the Bag", "We Have Reserves", "Home Free", "NDA Breaker"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
