import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/automation-empire.js";

test("the Automation Empire guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "automation-empire-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "automation-empire");

});

test("the Automation Empire guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Scenario Completions",
            "Medallions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Automation Empire achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Automation Master 1", "Automation Master 2", "Automation Master 3", "Automation Master 4", "Automation Master 5",
        "Automation Master 6", "Automation Master 7", "Automation Master 8", "Automation Master 9", "Automation Master 10",
        "Automation Master 11", "Automation Master 12", "Automation Master 13", "Ultimate Automation Master", "Medallion 1",
        "Medallion 2", "Medallion 3", "Medallion 4", "Medallion 5", "Medallion 6",
        "Medallion 7", "Medallion 8", "Medallion 9", "Medallion 10", "Medallion 11",
        "Medallion 12", "Medallion 13", "Ultimate Medallion Master",
    ];

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
