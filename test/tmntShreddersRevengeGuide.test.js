import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/tmnt-shredders-revenge.js";

test("the TMNT: Shredder's Revenge guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "tmnt-shredders-revenge-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "tmnt-shredders-revenge");

});

test("the TMNT: Shredder's Revenge guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Mode & Endings",
            "Arcade, Multiplayer & Combat Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official TMNT: Shredder's Revenge achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Buffoons!", "Special Report", "Piped Piper! ", "Empire Strikes Out", "Clean Up in Aisle 4", "Complete Season", "Complete Cast!", "Classic Couch Memories", "Like the Old Days!", "Master of One Quarter", "Most Fearsome Fighting Team!", "Teamwork", "Kind Brother", "Sharing is Caring!", "Biggest Fan!", "Multitasker", "Beware Lawbreakers!", "Breaking Out!", "INEFFECTIVE!", "Button Masher", "A + B", "Mode 7 ", "Cowabunga It Is", "Come On!", "Who Needs A Dock?", "Pizza Time! ", "Opening an Antique Store?", "No need for Mutagen!", "Finally Getting Along!", "Return to Sender"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
