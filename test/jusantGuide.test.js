import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/jusant.js";

test("the Jusant guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "jusant-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "jusant");

});

test("the Jusant guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","The Climb","Listening to the Tower","Counters","Suggested Order"]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Jusant achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["First contact","Back in motion","An ear to the past","First stone","Echo from the past","Water piper","Angel's carabiner","Adventure buddies","Restored connection","Awakened memory","A faint glimmer","Avid reader","Final ascent","Sound archeologist","Cycle celebration","Antique gallery manager","Common ground","Acrobat","Bogeychoco","Fresh air","Collective climb"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
