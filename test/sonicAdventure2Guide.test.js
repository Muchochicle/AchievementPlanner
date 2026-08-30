import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sonic-adventure-2.js";

test("the Sonic Adventure 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sonic-adventure-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sonic-adventure-2");

});

test("the Sonic Adventure 2 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Mode & Emblems",
            "Chao & Full Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 15-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /15 Steam achievements/);

});

test("every one of the 15 official Sonic Adventure 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hello World", "Chao!", "Chao Raiser", "HERO!", "DARK!", "Boss Attack", "Mission Complete", "Heaven or Hell", "Beyond Good And Evil", "Speedy Racer", "Emblem Collector", "You Are The Legend", "Level 4!", "Karate Master", "Emblem Mania"];

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
