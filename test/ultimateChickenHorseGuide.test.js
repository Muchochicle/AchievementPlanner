import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ultimate-chicken-horse.js";

test("the Ultimate Chicken Horse guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ultimate-chicken-horse-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ultimate-chicken-horse");

});

test("the Ultimate Chicken Horse guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Play Time & Unlocks",
            "Deaths & Traversal",
            "Scoring & Special Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Ultimate Chicken Horse achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "Gettin' the Hang of It", "Seasoned Vet", "Ultimate Expert", "Techie", "Showoff",
        "Takin' On the World!", "Trappist", "Threat to Public Security", "Young Explorer", "Magellan",
        "A New Friend Appears", "Building A Community", "Gettin' Fancy", "Full Wardrobe", "Wilhelm Audition",
        "Animal Cruelty", "Archer", "Goon", "Not So Sharp", "Neat and Nimble",
        "Craftsperson", "Engineer", "Necromancer Dancer", "Space-Time Cadet", "Clutch Performer",
        "Greedy McGreedster", "Droppin' Bills", "Comeback Kid", "Solo Master", "Spaghetti Award",
        "Back to the Basics",
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
