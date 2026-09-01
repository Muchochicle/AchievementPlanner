import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/towa-and-the-guardians-of-the-sacred-tree.js";

test("the Towa and the Guardians of the Sacred Tree guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "towa-and-the-guardians-of-the-sacred-tree-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "towa-and-the-guardians-of-the-sacred-tree");

});

test("the Towa and the Guardians of the Sacred Tree guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Magatsu-hi & Endings",
            "Journeys with Every Tsurugi",
            "Village Life & Crafting",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Towa and the Guardians of the Sacred Tree achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The First Sacred Rite", "The Real Fight Starts Here", "I've Missed You", "At Time's End", "Dawn of a New Age", "Lady Towa's Personal Guard", "Revenge Is Sweet", "Natural-Born Scholar", "Off on an Adventure", "Path to Moniya", "Here I Come!", "For the Village", "Fluffy Fury", "Guardian", "Baby's First Blade", "Master of the Forge", "I've Got It!", "It's a Big One!", "Jump Rope Honcho", "Fuel for the Fight", "Ahhh, Pure Bliss", "Draw Your Weapon!"];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
