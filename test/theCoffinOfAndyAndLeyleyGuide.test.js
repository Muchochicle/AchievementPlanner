import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-coffin-of-andy-and-leyley.js";

test("the The Coffin of Andy and Leyley guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-coffin-of-andy-and-leyley-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-coffin-of-andy-and-leyley");

});

test("the The Coffin of Andy and Leyley guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Episodes","Endings","Secrets & Missables","Suggested Order"]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official The Coffin of Andy and Leyley achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Episode 1 Clear","Hitman Wins!","Vision Watcher","Present","Unknown Summon","Episode 2 Clear","Warden Wins","Time Capsule","Undetected","No Witnesses","Happy end!","Prophecy Fulfiller","_____ in a Box","Full marks!","Sister Slaughterer","Splat!","Shots and Such","Little Mathematician","Decaying Along","Cleared Burial"];

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
