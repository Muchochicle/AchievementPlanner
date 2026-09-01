import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/skate-story.js";

test("the Skate Story guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "skate-story-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "skate-story");

});

test("the Skate Story guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Surreal Milestones",
            "Decks, Tricks, Combos & Shatters",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official Skate Story achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["GLASS SKATER", "WARM MILK", "THE DEVIL'S LAUNDRY", "DEPARTMENT OF DEATH", "HELLSEA", "GODHOOK", "DINNER", "BLACKEST FIRE", "ETERNAL CENTIPEDE", "SKATE STORY", "Philoskater", "Eternally Bound", "Devil's Symmetry", "AND YET...", "Oblivious", "Deck Collector", "Stickerbook", "The Skater performed a trick.", "In the light of the Moon...", "Over Several Eternities", "Infernal Flames", "You can't skate here!", "Pure Momentum", "YOU ARE A DEMON", "MADE OF GLASS AND PAIN", "YOU MUST SKATE"];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
