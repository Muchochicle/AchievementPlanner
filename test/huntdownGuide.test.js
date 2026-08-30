import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/huntdown.js";

test("the Huntdown guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "huntdown-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "huntdown");

});

test("the Huntdown guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & The Shogun",
            "Feats & Easter Eggs",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official Huntdown achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Mercenary", "Contract Killer", "Assassin", "Hunter", "Nose for Easter Eggs", "Play Fetch", "I can do better", "Yippee Ki Yay", "Slap Shot", "Cannonball Run", "Duck Hunt", "I'll be back", "Loyal Customer", "Looks that Kill", "Ain't got time to bleed", "This is my boom-stick!", "Taste of her own medicine", "Baseball Fury", "Everlasting Patience"];

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
