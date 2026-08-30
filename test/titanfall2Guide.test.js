import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/titanfall-2.js";

test("the Titanfall 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "titanfall-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "titanfall-2");

});

test("the Titanfall 2 guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Story I",
            "Campaign Story II",
            "Campaign Endgame & Titan Core Kills",
            "Campaign Combat Feats",
            "Campaign Completion & Multiplayer",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Titanfall 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Student...", "...Becomes the Master", "The Graduate", "BT Prime", "Hot Mess",
        "Close Shave", "Some Shortcut!", "Incepted", "I'm Not Locked in Here With You", "Dust to Dust",
        "It Was Coming Right For Us", "Following the Footsteps", "Secret Plans", "Unlicensed Nuclear Accelerator", "Calling CQ",
        "4 Bars", "See You at the Party", "Pied Piper", "Precious Cargo", "Defanged",
        "The Ark", "Titanfall!", "The Real Pilot's Gauntlet", "No Salvage", "Excessive Force",
        "Angel of Death", "Fire Everything!", "I have the Power!", "Face Melter", "Aim Bot",
        "Flame On!", "Coup de Grace", "Hat Trick", "Annihilation", "You can be my Wingman anytime",
        "I know Kung Fu", "Power Slide", "Cowboy Up", "Apex Predator", "Robot Army",
        "Certified Pilot", "Renowned Pilot", "Legendary Pilot", "Jack of All Trades", "Off the Beaten Path",
        "Collector", "Every Nook and Cranny", "So It Begins...", "Lock and Load", "Free Association",
    ];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
