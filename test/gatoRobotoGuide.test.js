import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/gato-roboto.js";

test("the Gato Roboto guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "gato-roboto-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "gato-roboto");

});

test("the Gato Roboto guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story & Bosses","Challenges & Secrets","Suggested Order"]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Gato Roboto achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rats!","Cat Out of Water","Moustache Forever!","Cool it","Fresh Air","Save the Animals","Danger Cat","Sequence Break","Speedrun","Rebba's Little Helper","Rebba's BFF","Purrrrfectionist"];

    assert.strictEqual(officialAchievementNames.length, 12, "sanity check on this test's own reference list");

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
