import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/supermarket-simulator.js";

test("the Supermarket Simulator guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "supermarket-simulator-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "supermarket-simulator");

});

test("the Supermarket Simulator guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Running the Store",
            "Growth & Staff",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 15-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /15 Steam achievements/);

});

test("every one of the 15 official Supermarket Simulator achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hardworking Cashier", "You need a cashier", "The greatest!", "Good for Eye", "These Floors Are Made For Walking", "That's a Big Change", "Looking Good", "And the best store in town is...", "You Want It? We Got It!", "CEO of Organization", "Elevator", "Don't Get Tired", "They Know How To Count", "Economy 101", "Finally"];

    assert.strictEqual(officialAchievementNames.length, 15, "sanity check on this test's own reference list");

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
