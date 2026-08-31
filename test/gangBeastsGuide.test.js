import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gang-beasts.js";

test("the Gang Beasts guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gang-beasts-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gang-beasts");

});

test("the Gang Beasts guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Hazard Escapes & Stage Feats",
            "Stage Tricks & Trucks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 19-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /19 Steam achievements/);

});

test("every one of the 19 official Gang Beasts achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Safety Warning", "Short Wave", "Drop Kick", "Shutout", "Buoy ‘o buoy", "Sea Legs", "Special Delivery", "Self Storage", "Ground Floor", "Hang Tough", "Big Head", "Bucket List", "Roast Beef", "Welcome to Beef City", "Sit Down", "Long Haul", "Step Down", "Keep on Trucking", "In Transit"];

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
