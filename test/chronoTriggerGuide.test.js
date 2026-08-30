import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/chrono-trigger.js";

test("the Chrono Trigger guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "chrono-trigger-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "chrono-trigger");

});

test("the Chrono Trigger guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The First Half: 1000 AD to Prehistory",
            "The Second Half: The Magic Kingdom to the Epilogue",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 13-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /13 Steam achievements/);

});

test("every one of the 13 official Chrono Trigger achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Beyond Time", "Reunion", "The Dream Project", "The Successor of Guardia", "Good Night", "The Legendary Hero", "The Unknown Past", "People of the Times", "The Oath", "Dino Age", "What the Prophet Seeks", "Memory Lane", "Dream's Epilogue"];

    assert.strictEqual(officialAchievementNames.length, 13, "sanity check on this test's own reference list");

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
