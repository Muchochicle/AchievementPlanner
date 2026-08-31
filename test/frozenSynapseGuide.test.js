import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/frozen-synapse.js";

test("the Frozen Synapse guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "frozen-synapse-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "frozen-synapse");

});

test("the Frozen Synapse guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Single Player & Campaign",
            "Multiplayer & Extras",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Frozen Synapse achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Breaking the 4th Wall", "The 10th Circle", "True Focus Means Ignoring That Which is Irrelevant", "Old Stancher", "Master of Clicking on Stuff", "If at First You Don't Succeed, You Have Failed", "Die in a Fire", "He Has a Better Beard Than You, Though", "Exterminator!", "Charger!", "Disput....er!", "Hostage Situationalist!", "SO MANY LEVELINGS!!", "The Lament of the Noob", "Tinkerings", "Now I Have A Machine Gun. Ho Ho Ho."];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

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
