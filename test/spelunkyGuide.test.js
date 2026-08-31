import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/spelunky.js";

test("the Spelunky guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "spelunky-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "spelunky");

});

test("the Spelunky guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Endings",
            "Journal, Feats & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Spelunky achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["So It Begins", "Mines Shafted", "Jungle Jammed", "Ice Creamed", "Made It", "Big Money", "City of Gold", "Eternal Life", "Ironman", "Speedlunky", "Addicted", "To Hell and Back", "Seen a Lot", "Seen It All", "Casanova", "Public Enemy", "Low Scorer", "Good Teamwork", "Her Favorite", "The Entire Gang"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
