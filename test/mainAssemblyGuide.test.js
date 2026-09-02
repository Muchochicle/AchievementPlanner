import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/main-assembly.js";

test("the Main Assembly guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "main-assembly-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "main-assembly");

});

test("the Main Assembly guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Dummy Physics","Bot Feats","Programming & World","Suggested Order"]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Main Assembly achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A small step for a dummy, a future of an engineer","Will it float?","Riding the Rails","Sacrificed to the fire god","Well deserved rest.","Oops... It was an accident.","All dressed up.","They see me rollin' Wheeless","360","Better than the Wright brothers","Make some noise!","Pop!","Top of the mountain","Treasure hunter","Coconut Shy","Programming level 1","Programming level 2","Programming level 3","Programming level 4","Swiss Army Knife","Fight fire with... Axe?"];

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
