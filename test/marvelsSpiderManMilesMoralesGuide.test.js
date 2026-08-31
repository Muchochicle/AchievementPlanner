import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/marvel-s-spider-man-miles-morales.js";

test("the Spider-Man: Miles Morales guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "marvel-s-spider-man-miles-morales-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "marvel-s-spider-man-miles-morales");

});

test("the Spider-Man: Miles Morales guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Training",
            "Story Missions & Side Content",
            "Combat Feats & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Spider-Man: Miles Morales achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Be Yourself", "Just the Beginning", "A New Home", "Urban Explorers", "Memory Lane", "Salvager", "Under Their Noses", "Underground Undone", "Ready for Anything", "Come at the King", "Never Saw It Coming", "100x Combo!!!", "Launch, Swing and Dive", "Punching Pixels", "Dodging Light", "Spider-Training: Complete", "Pete's First Villain", "Kitbash", "Rhino Rodeo", "Deep Cuts", "Hanging by a Thread", "The Core of the Problem", "True Deception", "The Harlem Express", "Veloci-Skates", "Shared History", "Exploding Bulldozer", "Family Drama", "Ultimate Sacrifice", "From the Rafters", "Climbing the Walls", "Invisible Spider", "Overcharge", "Up and Over", "From Downtown", "Like a Rhino in a China Shop", "Competitive Spirit", "Best Fries in Town", "JJJ Would Be Proud", "Trapped", "Five Star Review", "Mod that Suit", "Look with Better Eyes", "Never Give Up", "A Gift From Pete", "Crime Master", "Nowhere to Hide", "I'm on a Boat", "Socially Acceptable", "Plus Plus"];

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
