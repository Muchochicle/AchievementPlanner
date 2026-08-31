import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/roguebook.js";

test("the Roguebook guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "roguebook-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "roguebook");

});

test("the Roguebook guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Hero Card Collections",
            "Map Exploration & Progression",
            "Chapters, Bosses & Epilogue",
            "Combat Feats, Fugoro Cards & Tournaments",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 61-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /61 Steam achievements/);

});

test("every one of the 61 official Roguebook achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Studying the Blade", "Sharra Completionist", "Sharra Mastery", "Bulking up", "Sorocco Completionist", "Sorocco Mastery", "Cutting Through", "Seifer Completionist", "Seifer Mastery", "Slowly but Steady", "Aurora Completionist", "Aurora Mastery", "Level Up", "The Full Experience", "Major Embellishment", "Vault Discovery", "Vault Explorer", "Archivist", "Prospector", "Miner", "Excavator", "Archaeologist", "Expert Archaeologist", "Master Archaeologist", "Climbing High", "New Horizons", "I can see my house from here", "Come back here, Frog.", "Happy Little Tiles", "Ink Mastery", "Golden Pinatas", "The Forest of Erianor", "Conquering the Forest", "The Oversky", "Conquering the Oversky", "The Ruins of Heartforge", "Avatar of Mist", "Avatar of Greed", "Neverending Story", "Unmask the Maniac", "Ancient One", "New Game +", "Roguebook Expert", "Roguebook Mastery", "Forbidden Frisbees", "Fire Breath", "Carnage", "Tea Party", "Greed", "Blessed Coin", "Adventuring Party", "Master the Mine", "Twins Chaos", "Contender", "Finalist", "Champion", "Just Borrowing", "Fugoro Completionist", "Fugoro Mastery", "Numismatist", "You Are Known"];

    assert.strictEqual(officialAchievementNames.length, 61, "sanity check on this test's own reference list");

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
