import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dark-souls-ii-scholar-of-the-first-sin.js";

test("the Dark Souls II: Scholar of the First Sin guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dark-souls-ii-scholar-of-the-first-sin-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dark-souls-ii-scholar-of-the-first-sin");

});

test("the Dark Souls II: Scholar of the First Sin guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Bosses, Bonfires & the Ending",
            "Covenants & Spell Masteries",
            "NPC Quests & Inheritances",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 38-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /38 Steam achievements/);

});

test("every one of the 38 official Dark Souls II: Scholar of the First Sin achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Dark Soul", "Self Recollection", "King's Ring", "Ancient Dragon", "The Heir", "Last Giant", "Sinner's Bonfire", "Iron Keep Bonfire", "Gulch Bonfire", "Brightstone Bonfire", "Looking Glass Knight", "Vendrick", "Supreme Weapon", "Gesture Maestro", "Master of Sorcery", "Master of Miracles", "Master of Pyromancy", "Master of Hexes", "Brilliant Covenant", "Protector Covenant", "Sanguinary Covenant", "Covenant of the Meek", "Gnawing Covenant", "Clangorous Covenant", "Covenant of Ancients", "Covenant of the Fittest", "Abysmal Covenant", "Selfless Giver", "Curious Map", "Change of Clothes", "Gathering of Exiles", "Moonlight Greatsword", "Holder of the Fort", "Lucatiel", "Smith for Life", "Garrulous Miser", "Reflections on Disembodiment", "This is Dark Souls"];

    assert.strictEqual(officialAchievementNames.length, 38, "sanity check on this test's own reference list");

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
