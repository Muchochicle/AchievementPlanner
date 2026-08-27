import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/enter-the-gungeon.js";

test("the Enter the Gungeon guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "enter-the-gungeon-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "enter-the-gungeon");

});

test("the Enter the Gungeon guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Characters' Pasts & The Sixth Chamber",
            "Floor Progression",
            "Hidden Areas & Unlockable Characters",
            "NPC Quests & Challenges",
            "Combat Feats",
            "Special Playthroughs",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 54-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /54 Steam achievements/);

});

test("every one of the 54 official Enter the Gungeon achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/enter-the-gungeon.json).
    const officialAchievementNames = [
        "Lead God", "Patron", "Gun Game", "Gungeon Master", "Gunsmith",
        "Historian", "Wingman", "Double Jeopardy", "Squad Captain", "Deadliest Game",
        "Slayer", "Castle Crasher", "Dungeon Diver", "Mine Master", "Hollowed Out",
        "Forger", "Biggest Wallet", "Cartographer's Assistant", "Grate Hall", "Reverence for the Dead",
        "Re-Armed", "Weird Tale", "Trickshot", "Hedge Slinger", "Case Closed",
        "Beep", "Going Down", "Going Downer", "Going Downest", "Last Stop",
        "Sworn Gun", "Gungeon Acolyte", "Great Hall", "Not Just A Box", "Demolition Man",
        "I Knew Someone Would Do It", "Woodsie Lord", "Day Ruiner", "Lion Leap", "Money Pit",
        "Rider", "Pit Lord", "Time Paradox", "Exorcist", "The Password",
        "Jammed", "Terminated", "Hero of Gun", "Challenger", "Rage Mode",
        "Beast Master", "Advanced Slayer", "Resourceful", "Sledge-Dog"
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
