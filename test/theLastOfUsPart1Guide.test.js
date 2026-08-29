import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-last-of-us-part-1.js";

test("the The Last of Us Part I guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-last-of-us-part-1-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-last-of-us-part-1");

});

test("the The Last of Us Part I guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Collectibles",
            "Crafting, Upgrades & Exploration",
            "Moments & Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official The Last of Us Part I achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "It Can't Be For Nothing", "No Matter What", "Don't Go", "Look for the Light", "Endure and Survive",
        "Chronicles", "Getting to Know You", "That's All I Got", "Something to Fight For", "Combat Ready",
        "Master of Unlocking", "Prepared For the Worst", "Sticky Fingers", "Sharpest Tool in the Shed", "Build Em Up, Break Em Down",
        "Fallen Firefly", "Self-Help", "Savage Starlight Fan", "Geared Up", "In Memoriam",
        "Lights Out", "Waterlogged", "Left Hanging", "Who's A Good Boy?", "Nobody's Perfect",
        "Brick Master", "Angel Knives", "Skillz", "Live Bait",
    ];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
