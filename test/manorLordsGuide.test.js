import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/manor-lords.js";

test("the Manor Lords guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "manor-lords-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "manor-lords");

});

test("the Manor Lords guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Settlement & Economy",
            "Battle & Scenario",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Manor Lords achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Survive the first year", "Defeat Hildebolt", "The merchant", "Full Retinue", "For Whom the Bell Tolls",
        "Cheerful Metropolis", "The vigilantes", "Mercenary Captain", "Start the game", "Challenge accepted",
        "Restore the Peace",
    ];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
