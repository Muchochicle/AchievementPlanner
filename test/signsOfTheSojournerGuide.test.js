import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/signs-of-the-sojourner.js";

test("the Signs of the Sojourner guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "signs-of-the-sojourner-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "signs-of-the-sojourner");

});

test("the Signs of the Sojourner guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Secret Endings & Discoveries",
            "Helping the Cast & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 14-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);

});

test("every one of the 14 official Signs of the Sojourner achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Settle Down", "Ride off into the Sunset", "Spark Revolution", "Visit Hara", "Visit Persarrey", "Visit the Wave Dancer", "Visit the Long Gate", "Pet the Dog", "Repair Oscar", "Play Matchmaker", "Caravaneer", "A Home for Lars", "Reunite the Brothers", "A Somber Day"];

    assert.strictEqual(officialAchievementNames.length, 14, "sanity check on this test's own reference list");

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
