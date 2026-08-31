import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/momodora-reverie-under-the-moonlight.js";

test("the Momodora: Reverie Under the Moonlight guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "momodora-reverie-under-the-moonlight-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "momodora-reverie-under-the-moonlight");

});

test("the Momodora: Reverie Under the Moonlight guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Challenge Runs",
            "Collectibles & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 9-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /9 Steam achievements/);

});

test("every one of the 9 official Momodora: Reverie Under the Moonlight achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Faithful", "Explorer", "Don't even try this.", "Imperishable", "Pacifist", "Bug Collector", "Healthy!", "True Ending", "P-pleasegiveittome!"];

    assert.strictEqual(officialAchievementNames.length, 9, "sanity check on this test's own reference list");

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
