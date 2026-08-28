import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/baldurs-gate-3.js";

test("the Baldur's Gate 3 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "baldurs-gate-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "baldurs-gate-3");

});

test("the Baldur's Gate 3 guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Endings",
            "Difficulty Runs",
            "Companions & Camp",
            "Act 1 Deeds",
            "Act 2 & 3 Deeds",
            "Playful Challenges",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Baldur's Gate 3 achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/baldurs-gate-3.json).
    const officialAchievementNames = [
        "Descent From Avernus", "The Plot Thickens", "The City Awaits", "All's Well That Ends Well", "Absolute Power Corrupts",
        "Hero of the Forgotten Realms", "Sins of the Father", "Ceremorphosis", "Roleplayer", "Bedrolls and Breakfast",
        "Expand Your Mind", "Dig for Victory", "No Penny Required", "Escapologist", "Outsourcing",
        "Jack-of-all-Trades", "Homebrewer", "You Have Two Hands for a Reason", "Rude, Crude, and Full of Attitude", "Forged in Blood and Fire",
        "Under Lock and Key", "She Cannot Be Caged!", "Taking Blood", "Leave No One Behind", "Murder in Baldur's Gate",
        "Mind Blown", "Kill Two Birds With One Gnome", "Busker", "Action Surge", "Fists of Fury",
        "Devil's in the Details ", "Pest Control", "A Grym Fate", "Non-Invasive Procedure", "Penny Pincher",
        "No Free Lunches", "Fancy Footwork", "First Blood", "Interfectorem Draconis", "Crash Landing",
        "Bottoms Up", "Shove Off", "Bookworm", "Punch Drunk", "Fetch Quest",
        "Repairing the Weave", "The Lich-Queen's Wrath", "To Bloom in Darkest Night", "Hot Date", "Just a Nibble",
        "Loophole", "Embrace Your Urge", "Critical Hit", "Foehammer"
    ];

    assert.strictEqual(officialAchievementNames.length, 54, "sanity check on this test's own reference list");

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
