import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/duck-detective-the-secret-salami.js";

test("the Duck Detective: The Secret Salami guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "duck-detective-the-secret-salami-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "duck-detective-the-secret-salami");

});

test("the Duck Detective: The Secret Salami guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Solving Deducktions",
            "Case Closed",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 7-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /7 Steam achievements/);

});

test("every one of the 7 official Duck Detective: The Secret Salami achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Early Bird", "Fits the Bill", "Poultry Case", "Ducks in a Row", "Beak Performance", "Rage Uncaged", "Quacked the Case"];

    assert.strictEqual(officialAchievementNames.length, 7, "sanity check on this test's own reference list");

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
