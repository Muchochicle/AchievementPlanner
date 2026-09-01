import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/frog-detective-1-the-haunted-island.js";

test("the Frog Detective 1: The Haunted Island guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "frog-detective-1-the-haunted-island-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "frog-detective-1-the-haunted-island");

});

test("the Frog Detective 1: The Haunted Island guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Starting the Case",
            "Solving the Mystery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 6-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /6 Steam achievements/);

});

test("every one of the 6 official Frog Detective 1: The Haunted Island achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["PICKED IT UP", "TRIED TO LEAVE", "HUSTLED HARD", "GOT SPOOKED", "PICKED A WINNER", "ANSWERED THE CALL"];

    assert.strictEqual(officialAchievementNames.length, 6, "sanity check on this test's own reference list");

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
