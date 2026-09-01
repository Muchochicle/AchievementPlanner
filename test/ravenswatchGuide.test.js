import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ravenswatch.js";

test("the Ravenswatch guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ravenswatch-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ravenswatch");

});

test("the Ravenswatch guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Basics, Chapters & Memoirs",
            "Single-Run Challenges",
            "Romeo & Juliet, Merlin & Endgame",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 45-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /45 Steam achievements/);

});

test("every one of the 45 official Ravenswatch achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Once upon a time ", "Secret Technique ", "Fulfillment ", "Chapter 2 ", "Chapter 3 ", "The House of Nightmares ", "The Ogress's Lair ", "A Diary of Days ", "Tale of Frightful Fife ", "The Curse of a Drake's Mother ", "The Annals of the Reign of Queen Nyss ", "The Thief Who Married a Princess ", "A Mermaid's Lullaby ", "A Memoir of Dire Mirth ", "The Epic Tragic Tale of Immortal Demise ", "Letters to Laura - Diary of a Dhampire ", "The Ravenswatch Oath ", "Master of Challenges ", "The Three Little Pigs ", "No one left behind ", "The Thirst for Knowledge ", "The Cleansing of Reverie ", "Three Wishes ", "Giant Slayer ", "A Reinvigorating Journey ", "Mercy of the Ravens ", "Loot Hoarder ", "Legendary Hero ", "Savior of the Day ", "All is well that ends well ", "Open sesame! ", "Socialization ", "The Thirst for Power ", "A Tale of Woe", "Thy Letters to Thine Self", "The Cursed Lovers", "The Leprechaun Treasure", "Overpowered Nightmare", "A Swift Victory", "The Curse of Merlin Farseer", "Object Compendium ", "Predestined Fate ", "Jack O'Lantern", "Intense Shimmers", "Symphony of Reverie"];

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
