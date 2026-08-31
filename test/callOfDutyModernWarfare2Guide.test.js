import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/call-of-duty-modern-warfare-2.js";

test("the Call of Duty: Modern Warfare 2 (2009) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "call-of-duty-modern-warfare-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "call-of-duty-modern-warfare-2");

});

test("the Call of Duty: Modern Warfare 2 (2009) guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Missions",
            "Veteran & Campaign Feats",
            "Special Ops",
            "Combat Feats & Intel",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Call of Duty: Modern Warfare 2 (2009) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Back in the Saddle", "Danger Close", "Cold Shoulder", "Tag 'em and bag 'em", "Royale with Cheese", "Soap on a Rope", "Desperate Times", "Whiskey Hotel", "The Pawn", "Out of the Frying Pan…", "For the Record", "The Price of War", "First Day of School", "Black Diamond", "Turistas", "Red Dawn", "Prisoner #627", "Ends Justify the Means", "Homecoming", "Queen takes Rook", "Off the Grid", "Pit Boss", "Ghost", "Colonel Sanderson", "Gold Star", "Hotel Bravo", "Charlie On Our Six", "It Goes to Eleven", "Operational Asset", "Blackjack", "Honor Roll", "Operative", "Specialist", "Professional", "Star 69", "Downed but Not Out", "I'm the Juggernaut…", "Ten plus foot-mobiles", "Unnecessary Roughness", "Knock-knock", "Some Like it Hot", "Two Birds with One Stone", "The Road Less Traveled", "Leave No Stone Unturned", "Drive By", "The Harder They Fall", "Desperado", "Look Ma Two Hands", "No Rest For the Wary", "Three-some"];

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
