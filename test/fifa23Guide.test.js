import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fifa-23.js";

test("the FIFA 23 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fifa-23-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fifa-23");

});

test("the FIFA 23 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "VOLTA Football",
            "On-Pitch Skills",
            "FIFA Ultimate Team",
            "Pro Clubs",
            "Career Mode & Kick Off",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official FIFA 23 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Volta's best", "Teamwork works", "Fresh Fit", "Full wardrobe", "Shop till you drop", "On the way up", "Sharing is Caring", "Dead-ball specialist", "Intuition and Execution", "Training Addict", "Power Shot", "Bring it on", "Squad Building Connoisseur", "The Winning Formula", "Tactical Tinkerer", "Safe House", "Parking the Bus", "In Cahoots", "A Moment of Your Time", "Momentous Achievement", "I Played Them All", "Let the Games Begin", "Tune Your Club", "The Chosen One", "Becoming Unplayable", "First of Many", "Full-House", "Specialist", "Make the Grade", "Dazzling Personality", "Balanced Path", "Girl Power", "Multitasking", "Life-Like", "High Grades", "Aiming High", "European Legend", "Best of Five", "Football is Everything"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
