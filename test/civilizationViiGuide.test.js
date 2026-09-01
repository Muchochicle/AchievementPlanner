import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/civilization-vii.js";

test("the Civilization VII guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "civilization-vii-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "civilization-vii");

});

test("the Civilization VII guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Win the Modern Age as Every Leader",
            "Triumphs & Deity Difficulty",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 37-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /37 Steam achievements/);

});

test("every one of the 37 official Civilization VII achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Shawnee Deep in Victory.", "Woman-o-war.", "Budding Buddhist.", "Roman of the Hour.", "Postmaster and Commander.", "Lived up to the Name.", "Magne Squeeze.", "Proverbial Wisdom.", "On the Fritz.", "Ground Breaker/Freedom Fighter.", "Suted for Battle.", "Radiance of the Sun.", "Son of a Duck.", "Inquisitor Queen", "Can't Touch This.", "Had the last Lafayette.", "Hit Mach 10.", "Eat, Inca, and be Merry.", "Sisters Before Misters.", "Sailed the Seven Xerxes.", "Xerxing Red.", "Sorry Not Sorrow.", "Enlightened Rule.", "Deep Friedrich.", "One Hit Wonder.", "Trade Secret.", "Pax a Wallop.", "Book Smart.", "Relic Hunter.", "Coin Toss.", "Settled the Score.", "Science in the Suburbs.", "Talk of the Towns.", "Paint the Map.", "Velvet Glove.", "Beyond the Horizon.", "Playing God."];

    assert.strictEqual(officialAchievementNames.length, 37, "sanity check on this test's own reference list");

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
