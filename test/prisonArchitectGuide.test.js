import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/prison-architect.js";

test("the Prison Architect guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "prison-architect-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "prison-architect");

});

test("the Prison Architect guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Campaign",
            "Sandbox & Economy",
            "Completion & Meta",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 18-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /18 Steam achievements/);

});

test("every one of the 18 official Prison Architect achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Throw The Book At Them", "Crowd Control", "Reformation", "Freedom", "Stone Walls",
        "Iron Bars", "Confined", "D.B. Cooper", "Samuel Norton", "Spare The Rod",
        "Don't Put Me In The Dark", "Wait and Hope", "Get Busy Living", "It's Not What You Know...", "... It's What You Can Prove",
        "I May Have Found A Way Out Of Here", "Architect", "Warden",
    ];

    assert.strictEqual(officialAchievementNames.length, 18, "sanity check on this test's own reference list");

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
