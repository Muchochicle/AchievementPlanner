import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sea-of-solitude.js";

test("the Sea of Solitude guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sea-of-solitude-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sea-of-solitude");

});

test("the Sea of Solitude guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Story","Collectibles","Suggested Order"]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official Sea of Solitude achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Uncorked","Bottled","Shoo!","Flock of Seagulls","Fire!","Connected","Comfy","Raver","Deep Dive","Seeker","Human Bait","Mermaid","Runaway","Sailor","Danger Swimmer","School's out","Moses","Sunny","Lonely at the top","Mama and Papa","Breakdown","Resolve"];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
