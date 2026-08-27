import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/va11-hall-a.js";

test("the VA-11 Hall-A guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "va11-hall-a-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "va11-hall-a");

});

test("the VA-11 Hall-A guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progression",
            "Regulars & Specific Drinks",
            "Jill's Choices",
            "Bartending Skill",
            "Hidden & Endings",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official VA-11 Hall-A achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/va11-hall-a.json).
    const officialAchievementNames = [
        "Welcome to Valhalla!", "G'evening", "Coming right up", "Time to mix drinks and change lives", "Please come again",
        "Welcome back!", "Caci… que?", "An old friend", "A different breed of cat", "On a hacking pilgrimage",
        "Deep breaths", "Don't call me Becky!", "I feel like an adult", "Focus!", "Cozy hell",
        "Dorothinquisition!", "Tim's Curry", "Listen to my song!", "Sisterly bonding", "And now, for something completely different…",
        "Cyberfunk", "Hey Jules", "In the name of beauty!", "Underappreciated drink", "I know what I said",
        "Flawless Service", "Employee of the month", "(´・ω・`) ", "I like it, okay?", "So unnecessary",
        "Living with style", "Hit the jukebox", "Did you miss me?", "Jill of all trades"
    ];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
