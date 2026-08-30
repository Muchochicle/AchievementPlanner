import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/planetary-annihilation-titans.js";

test("the Planetary Annihilation: TITANS guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "planetary-annihilation-titans-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "planetary-annihilation-titans");

});

test("the Planetary Annihilation: TITANS guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Galactic War & Competitive Play",
            "Command & Full Build",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official Planetary Annihilation: TITANS achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Galactic Annihilation", "Worldbuilder", "Team Player", "Fully Operational", "Technological Terror", "World Ender", "Him or Me", "Technophile", "One Down", "Enthusiast", "Fanatic", "Efficient", "Ruthless", "Against All Odds", "Field Commander", "Panopticon", "Architect", "One of Each", "Jack of All Trades"];

    assert.strictEqual(officialAchievementNames.length, 19, "sanity check on this test's own reference list");

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
