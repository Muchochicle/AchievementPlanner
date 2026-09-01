import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mutazione.js";

test("the Mutazione guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mutazione-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mutazione");

});

test("the Mutazione guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Meeting Mutazione",
            "Gardens, Dreams & Community",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Mutazione achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Welcome To Mutazione", "Wild Swimmer", "Seasoned Sea Dog", "Spirit Guide", "Apprentice Botanist", "Intermediate Botanist", "Expert Botanist", "Spice Of Life", "Rebel Gardener", "Omnivore", "Veggie", "Vegan", "Ravenous", "Seasoned Explorer", "N+1", "Bug-a-Bed", "Strange Dreams", "Bloom", "Green Fingers", "Group Photo"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
