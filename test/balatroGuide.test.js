import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/balatro.js";

test("the Balatro guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "balatro-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "balatro");

});

test("the Balatro guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Progression & Wins",
            "Scoring & Poker Hands",
            "Deck Size & Economy",
            "Challenges & Collection",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Balatro achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Ante Up!", "Ante Upper!", "Heads Up", "Low Stakes", "Mid Stakes",
        "High Stakes", "Card Player", "Card Discarder", "Nest Egg", "Flushed",
        "Speedrunner", "ROI", "Shattered", "Royale", "Retrograde",
        "10K", "1,000K", "100,000K", "Tiny Hands", "Big Hands",
        "You Get What You Get", "Rule Bender", "Rule Breaker", "Legendary", "Astronomy",
        "Cartomancy", "Clairvoyance", "Extreme Couponer", "Completionist", "Completionist+",
        "Completionist++"
    ];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
