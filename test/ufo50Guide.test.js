import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ufo-50.js";

test("the UFO 50 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ufo-50-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ufo-50");

});

test("the UFO 50 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Disks & High Scores",
            "Gold Disks",
            "Cherry Disks & Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official UFO 50 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Taste Test", "Sampler", "All You Can Eat", "Score Lord", "Arcade Ace", "Points Potentate", "The Road to Gold", "2 Gold Disks", "3 Gold Disks", "4 Gold Disks", "5 Gold Disks", "10 Gold Disks", "15 Gold Disks", "20 Gold Disks", "30 Gold Disks", "40 Gold Disks", "Pure Gold", "The Road to Cherry", "2 Cherry Disks", "3 Cherry Disks", "4 Cherry Disks", "5 Cherry Disks", "10 Cherry Disks", "15 Cherry Disks", "20 Cherry Disks", "30 Cherry Disks", "40 Cherry Disks", "Cherry Pie", "Superuser", "Master of Play"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
