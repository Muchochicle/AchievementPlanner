import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fall-guys.js";

test("the Fall Guys guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fall-guys-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fall-guys");

});

test("the Fall Guys guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Basics & Episode Wins",
            "Racing & Skill",
            "Cosmetics & Fame",
            "Messing Around",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Fall Guys achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Fall Bae", "One small trip", "Victory!", "Face First", "Fall Guy Fashionista",
        "Shopping Spree", "Snowflake", "Bargain Bucket", "Mad Trendy", "Head Turner",
        "Catwalk Model", "One to Watch", "Household Name", "Star of the Show", "Flawless Victory",
        "Ahead of the Pack", "Quite Dashing", "Track Star", "Infallible", "Top Tier",
        "Golden Guy", "One giant leap", "Veteran Status", "Show Off", "Squad Goals",
        "Down to the Wire", "Low Baller", "Big Tease", "Big Air", "Stumble Chums",
        "Style Points", "Big Bully", "Troublemaker", "Fall Throttle"
    ];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
