import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/smalland-survive-the-wilds.js";

test("the Smalland: Survive the Wilds guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "smalland-survive-the-wilds-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "smalland-survive-the-wilds");

});

test("the Smalland: Survive the Wilds guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","NPCs","Survival & Materials","Suggested Order"]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Smalland: Survive the Wilds achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["One VERY small step","Safe!","Getting some shuteye","Stone Age","Forming bonds","Metal Age","Insect hunter","Something Wicked","Vertebrate hunter","Smooth as silk","Mastermind","Hang time","The Key","Fools gold","Moth Man","Trading Time","Dragon Slayer","Ornithomancer","Take Flight","Not Nok, who's there?","Explosive development","Scorpion's shadow","Monster Extraction"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
