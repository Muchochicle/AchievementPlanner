import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/art-of-rally.js";

test("the art of rally guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "art-of-rally-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "art-of-rally");

});

test("the art of rally guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Career: Groups & Collectibles",
            "Conditions, Stunts & Milestones",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official art of rally achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["podium", "grocery-getter", "rwd only", "turbo", "monster", "parallel universe", "antilag", "perkele", "espresso", "eurobeat", "viking", "oktoberfest", "in like a lamb, out like a lion", "real roads, real fast", "parking lot", "night ride", "snorkel", "where is the stage?", "mittens", "car wash", "the artist", "barely keeping it together", "keep it tidy", "to finish first, first you must finish", "comfy seats", "if everything seems under control, you're not going fast enough", "samir", "brail", "light attack", "medium attack", "maximum attack", "autopilot", "good drivers have dead flies on the side windows", "simulator", "bicycle race", "group b", "you can't treat a car like a human being. a car requires love", "absolute drift", "food tour: pretzel", "food tour: pasta", "you're here for a good time, not a long time", "if in doubt, flat out!", "master of rally"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
