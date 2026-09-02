import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sludge-life.js";

test("the SLUDGE LIFE guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sludge-life-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sludge-life");

});

test("the SLUDGE LIFE guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Endings & Story","Collectibles","Mischief","Suggested Order"]
    );

});

test("the Overview states the verified 14-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);

});

test("every one of the 14 official SLUDGE LIFE achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["THE GOOD ENDING","THE BAD ENDING","THE WEIRD ENDING","D.R.E.A.M.","BIG POCKETS","ZOOMHEAD","FILL UP THE DECK"," OFF AND ON AGAIN","BINGE","TRIBUTE TO CIGGY","CREEPIN","KISS MY EGGS","TRASH PLAY","PISS FROM ABOVE"];

    assert.strictEqual(officialAchievementNames.length, 14, "sanity check on this test's own reference list");

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
