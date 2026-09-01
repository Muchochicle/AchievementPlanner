import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-longing.js";

test("the THE LONGING guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-longing-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-longing");

});

test("the THE LONGING guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Home Comforts & Secrets",
            "Building, Reading & Full Exploration",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official THE LONGING achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["My Favourite Painting", "Birthday", "Wah Wah Wah Waaah", "The Halls of Eternity", "The Map", "The End of Longing", "Secret Tower", "The Library", "A Face", "Running Water", "Head of a Horse", "Colorful Stones", "Becoming Darkness", "Dream", "Bed", "Mattock", "Leaving Darkness", "Disappointing Achievement", "Crystal Glory", "Home Improvement", "Avid Reader", "Neverending Notebook", "Home Sweet Home", "Mushroom Gardener", "The Cave"];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
