import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/keep-talking-and-nobody-explodes.js";

test("the Keep Talking and Nobody Explodes guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "keep-talking-and-nobody-explodes-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "keep-talking-and-nobody-explodes");

});

test("the Keep Talking and Nobody Explodes guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Section Clears",
            "Module & Bomb Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 10-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /10 Steam achievements/);

});

test("every one of the 10 official Keep Talking and Nobody Explodes achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Action Hero", "Bomb Defusing 101", "All in Moderation", "Multitasker", "Challenge Accepted", "To the Extreme!", "Seasoned Traveller", "Experience is the Best Teacher", "Trust the Expert", "Bomb Squad"];

    assert.strictEqual(officialAchievementNames.length, 10, "sanity check on this test's own reference list");

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
