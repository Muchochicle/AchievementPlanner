import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/need-for-speed-payback.js";

test("the Need for Speed Payback guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "need-for-speed-payback-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "need-for-speed-payback");

});

test("the Need for Speed Payback guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story: The Icon Path",
            "Racing Feats & Progression",
            "Endgame & Community",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Need for Speed Payback achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Home Is Where Your Car Is", "Early Days", "Getting Noticed", "Can I Get Your Autograph?", "Guidance From Amy", "RWB", "Iconic Builder", "I Am Speed", "Urban Outlaw", "Fulfilling The Need", "The Hoonigan", "Single Take Star", "Unstoppable", "Surprised? Me Neither", "Above The Law", "One For All...", "Choo Choo!", "... And All For One", "The Ultimate Icon", "Tuned For Excellence", "Beyond Extreme", "Triple Crown", "Social Scene", "Full House", "Building Your stable", "Serious Fun", "No Filter", "That Perfect Moment", "Full Power", "Training Wheels Off", "Fanboi", "Iconoclast", "Mental Unblock", "Hit The Ceiling", "Eddie Is Back", "Zero To Hero", "Wrap Artist", "Climbing the Ranks", "Filter Addict", "Kustom Kar", "Wrap It Up", "Drag Queen", "Basic Bronze", "Gold Plated", "Speed Master"];

    assert.strictEqual(officialAchievementNames.length, 45, "sanity check on this test's own reference list");

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
