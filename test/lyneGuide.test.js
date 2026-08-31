import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/lyne.js";

test("the LYNE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "lyne-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "lyne");

});

test("the LYNE guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progress & Dailies",
            "Set Completions A-M",
            "Set Completions N-Z",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official LYNE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["All Sets Complete", "???", "Daily - 1", "Daily - 3", "Daily - 5", "Daily - 10", "A new look", "Complete A", "Complete B", "Complete C", "Complete D", "Complete E", "Complete F", "Complete G", "Complete H", "Complete I", "Complete J", "Complete K", "Complete L", "Complete M", "Complete N", "Complete O", "Complete P", "Complete Q", "Complete R", "Complete S", "Complete T", "Complete U", "Complete V", "Complete W", "Complete X", "Complete Y", "Complete Z"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
