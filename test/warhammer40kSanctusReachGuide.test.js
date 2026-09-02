import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/warhammer-40k-sanctus-reach.js";

test("the Warhammer 40,000: Sanctus Reach guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "warhammer-40k-sanctus-reach-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "warhammer-40k-sanctus-reach");

});

test("the Warhammer 40,000: Sanctus Reach guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        ["Overview","Victories & Kill Counters","Heavy Units","Suggested Order"]
    );

});

test("the Overview states the verified 12-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /12 Steam achievements/);

});

test("every one of the 12 official Warhammer 40,000: Sanctus Reach achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Chicken Dinner","All The Toys","Street Fighting","Lupophobia","Ork's Bane","Quis Custodiet Ipsos Custodes?","That’ll Tzeentch You!","Play Freeblade!","Shazbot","That's Heavy Dude...","Not So Thirsty Now!","That's Good Barbecue"];

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
