import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-slormancer.js";

test("the The Slormancer guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-slormancer-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-slormancer");

});

test("the The Slormancer guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Progression",
            "Endgame Activities & Reapers",
            "Equipment, Classes & Affinities",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 83-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /83 Steam achievements/);

});

test("every one of the 83 official The Slormancer achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Funny Recipe", "From Zero to Hero", "Monster Slayer", "Elite Slayer", "Pockets Full", "A Beautiful Day for Pedro", "The Chain Breaker", "School Vacations", "Well-Trimmed Hedges", "Castle Renovations", "Always Two There Are", "Another Magical Rock!", "Ancestral Rock Lover", "The First Trial", "The Second Trial", "The Last Trial", "The End of the Slormancer", "Slorm Feast", "Upgraded Upgrade", "Galvanized Legacy", "Battlefield Veteran", "First-Class Annihilator", "Negotiating with Crows", "Behind Bars", "Wizarding School of Witchcraft", "Raking the Lawn", "Carpet Cleaner", "The New Temple Guardian", "A Forgotten Treasure", "Artifact Hunter", "Lift the Siege", "Never Enough", "Rune Raider", "Slorm Reaper Runes", "The Lord of Chests", "The Weapon of Champions", "A Pleasant Surprise!", "Infinite Power!", "Master of Arms", "Ultimate Perfectionist", "Master of the Arsenal", "Master of the Primordial Arsenal", "The First of Many", "Equipment Finder", "Excellence or Nothing", "Novice Slormitologist", "Amateur Slormitologist", "Confirmed Slormitologist", "Gather Pieces", "The Almighty Knight", "A Sharpened Sword is Worth Two", "The Guillotine Falls", "Sword Collection", "Primordial Sword Collection", "Master of Power", "Serenity and Torment", "Bullseye", "Breach Predator", "Bow Collection", "Primordial Bow Collection", "Master of Ferocity", "Spell Class", "Putting into Practice", "Drawn to the Light", "Staff Collection", "Primordial Staff Collection", "Master of Trickery", "It Can Always Be Useful", "Heat the Hammer!", "Break and Recycle", "Legendary Object Collection", "Slormitologist Member Card", "Reinforce! It's Stronger!", "Perfection Achieved", "These Rocks Are Really Shiny", "Adreart's Best Runist", "Astorias' Chaos", "Adrianne's War", "Beigarth's Vigilance", "Cory Ironbender's Journey", "Smaloron's Betrayal", "Fulgurorn's Silence", "Hagan's Exile"];

    assert.strictEqual(officialAchievementNames.length, 83, "sanity check on this test's own reference list");

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
