import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/grand-theft-auto-san-andreas-the-definitive-edition.js";

test("the GTA: San Andreas Definitive Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "grand-theft-auto-san-andreas-the-definitive-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "grand-theft-auto-san-andreas-the-definitive-edition");

});

test("the GTA: San Andreas Definitive Edition guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Side Activities & Skills",
            "Completion & Mastery",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official GTA: San Andreas Definitive Edition achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Getting Started", "With Extra Dip", "The End of the Line", "Hoopin' it Up", "A Legitimate Business", "I’ll Have Two Number 9s", "The American Dream", "Pay 'n' Spray", "Bike or Biker", "Who Needs Directions?", "Liberty City State of Mind", "Swiss Army Strife", "School's Out", "Horror of the Santa Maria", "They Can’t Stop All of Us", "Smooth Moves", "What the City Needs", "Saviour", "Rescue a Kitten Too?", "Yes I Speak English", "Lucky Spinner", "What happens in Las Venturas...", "All Dressed Up for San Fierro", "Not a Player", "What are the Odds", "Double or Nothin'", "Assassin", "Original Gangster", "Today Was a Good Day", "Public Enemy No. 1", "Chick Magnet", "Ain’t Nothing But a G Thing", "Remastered", "...Here we go again", "I Ain't No Buster"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
