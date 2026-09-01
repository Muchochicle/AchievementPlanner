import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/wizardry-proving-grounds-of-the-mad-overlord.js";

test("the Wizardry: Proving Grounds guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "wizardry-proving-grounds-of-the-mad-overlord-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "wizardry-proving-grounds-of-the-mad-overlord");

});

test("the Wizardry: Proving Grounds guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Character Building",
            "The Maze & Its Guardians",
            "Combat, Spells & Bestiary",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 28-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /28 Steam achievements/);

});

test("every one of the 28 official Wizardry: Proving Grounds achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Act of Creation", "Class Act", "Personal Growth", "Stats All, Folks", "Novice Adventurer", "Experienced Adventurer", "Master Adventurer", "It's All Down From Here", "Secret Admirer", "Tricky", "Permanent Resident", "Rod & Ring", "The Overlord's Honor Guard", "All Access", "Tithe is Money", "Sleep for a Year", "Boltac's Summer Home", "Baker's Dozen", "Centurion", "Heal Thyself", "Supportive", "TKO", "Begone!", "Welcome Back", "To Fight Another Day", "Better Know a Monster", "Gotta Catch 'Em All", "Meet and Beat"];

    assert.strictEqual(officialAchievementNames.length, 28, "sanity check on this test's own reference list");

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
