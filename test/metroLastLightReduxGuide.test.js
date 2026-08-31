import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metro-last-light-redux.js";

test("the Metro: Last Light Redux guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metro-last-light-redux-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metro-last-light-redux");

});

test("the Metro: Last Light Redux guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat, Stealth & the Ranger Ending",
            "Moral Choices, Endings & One-Off Feats",
            "Difficulty & Chapter Completions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 49-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /49 Steam achievements/);

});

test("every one of the 49 official Metro: Last Light Redux achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Air!", "Antibiotic", "Back to the Past", "Big Momma", "C'est la vie", "Clean Escape", "Commando", "Derailed", "Edison", "Engineer", "Ever Vigilant", "Forest Guardian", "Freedom!", "Invisible Intruder", "Invisible Savior", "Invisible Soldier", "Cheers!", "Mouse", "No shooting allowed", "Not A Rabbit", "Patron of the Arts", "Published", "Pyromaniac", "Rabbit", "Rain Man", "Redemption", "Reunion", "Revelation", "Revenge", "Savior", "Scram", "Secret", "Shadow", "Soldier", "Tortoise", "Veteran", "Within a Hair of Death", "Survivor 2034", "Spartan 2034", "Master Thief", "Saboteur", "Kshatriya", "Hail Reich!", "Test Complete", "Through the Fire", "Developer", "Heads Up!", "No Way Out", "The Sunset of Hope"];

    assert.strictEqual(officialAchievementNames.length, 49, "sanity check on this test's own reference list");

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
