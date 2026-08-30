import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metal-hellsinger.js";

test("the Metal: Hellsinger guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metal-hellsinger-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metal-hellsinger");

});

test("the Metal: Hellsinger guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Red Judge & Campaign",
            "Combat, Hit Streaks & Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Metal: Hellsinger achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Breaking the Law", "For Whom the Bell Tolls", "Dead and Buried", "Rise, Rebel, Resist", "Ain't No Mountain High Enough", "When She Falleth", "Smoke on the Water", "If I Can Make It Here", "This Pounding Heart", "This Pounding Heart II", "This Pounding Heart III", "This Pounding Heart IV", "Heavy Metal Is the Law", "Three of Pentacles", "Queen of the Underworld", "No Rest for the Wicked", "Soaring in the Deep", "Piece of My Heart", "Highway to Hell", "Material Girl", "Kill Your Demons", "Not Shaken, Nor Stirred", "Who Wants to Live Forever", "The Empress", "Raining Blood", "The Ferrywoman", "Pazifist", "The Sword is Sharper"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
