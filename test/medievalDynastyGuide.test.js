import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/medieval-dynasty.js";

test("the Medieval Dynasty guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "medieval-dynasty-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "medieval-dynasty");

});

test("the Medieval Dynasty guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Dynasty & Story",
            "Homestead & Skills",
            "Mastery & Gags",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 44-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /44 Steam achievements/);

});

test("every one of the 44 official Medieval Dynasty achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["M'Lady", "Firstborn", "The Dynasty Continues", "Show me the money!", "Closure", "A helping hand", "Village Manager", "I will pay next month, I swear", "Must have been the wind", "It wasn't me!", "I may not be good at it after all...", "A new home", "Hunting Royale", "I... am not... drunk", "I wasn't even looking", "Strider", "Warm-blooded", "Caveman", "My Stumps", "Hermitage", "Camp", "Small Farm", "Farm", "Hamlet", "Settlement", "Village", "Town", "City", "Master of Extraction", "Master of Hunting", "Master of Farming", "Master of Diplomacy", "Master of Survival", "Master of Production", "I wonder how many I can fit...", "Look at my mount", "Harvestin' season", "Dirty Henry", "Hedgehog", "Happy wife, happy life", "Let's break a stick!", "Well earned rest", "Oopsie daisy", "LumberJACKED"];

    assert.strictEqual(officialAchievementNames.length, 44, "sanity check on this test's own reference list");

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
