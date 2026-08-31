import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/prospector.js";

test("the Prospector guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "prospector-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "prospector");

});

test("the Prospector guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Building & Systems",
            "Contracts, Aliens & Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Prospector achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Friend in need", "Rocket man", "Moth Whisperer", "Alien Presence", "Machina Maestro", "Daily step count", "Safe from the storm ", "Wind farm", "Pack mule", "To the moon!", "Purple marble", "Blue marble", "Yellow marble", "Broken marble", "Mothballs required", "Family business", "Beastmaster", "Lesser evil", "Time for a star trip", "Danger, Will Robinson!", "Prison break", "Human touch", "Contact", "New beginnings", "Shipping master", "Shocking...", "The old gods are watching....", "BEST friends forever!", "Like a stone", "Archeologist", "Alien mastery", "Shreaded ", "Mr. Freeze", "Big sky theory", "Cowpoke"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
