import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/unravel-two.js";

test("the Unravel Two guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "unravel-two-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "unravel-two");

});

test("the Unravel Two guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Chapter Completion & No-Death Runs",
            "Gold Medals & Bonus Levels",
            "Co-op, Customisation & Trick Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Unravel Two achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Start anew", "Be safe", "Don't conform", "Go explore", "Get crushed", "Fall apart", "Bounce back", "Safety rope", "Party responsibly", "Off the hook", "No spanner in the works", "Fireproof", "Dry as a bone", "Roof runner", "Absquatulate", "Flying fish", "Like clockwork", "Flash fire", "At the rapidest", "Decorated", "Rescuer", "Hard and fast", "Better together", "New threads", "Don't go with the flow", "Airs and graces", "Falling with style", "Live bait"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
