import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dark-souls-remastered.js";

test("the DARK SOULS: REMASTERED guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dark-souls-remastered-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dark-souls-remastered");

});

test("the DARK SOULS: REMASTERED guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Endings, Collections & Covenants",
            "Weapon Reinforcement Paths",
            "World Progression & Boss Kills",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 41-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /41 Steam achievements/);

});

test("every one of the 41 official DARK SOULS: REMASTERED achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The Dark Soul", "To Link the Fire", "Dark Lord", "Knight's Honor", "Wisdom of a Sage", "Bond of a Pyromancer", "Prayer of a Maiden", "Covenant: Way of White", "Covenant: Princess's Guard", "Covenant: Blade of the Darkmoon", "Covenant: Warrior of Sunlight", "Covenant: Forest Hunter", "Covenant: Darkwraith", "Covenant: Path of the Dragon", "Covenant: Gravelord Servant", "Covenant: Chaos Servant", "Strongest Weapon", "Crystal Weapon", "Lightning Weapon", "Raw Weapon", "Magic Weapon", "Enchanted Weapon", "Divine Weapon", "Occult Weapon", "Fire Weapon", "Chaos Weapon", "Enkindle", "Estus Flask", "Reach Lordran", "Ring the Bell (Undead Church)", "Ring the Bell (Quelaag's Domain)", "Rite of Kindling", "Art of Abysswalking", "Reach Anor Londo", "Lordvessel", "Defeat Gravelord Nito", "Defeat Bed of Chaos", "Defeat the Four Kings", "Defeat Seath the Scaleless", "Defeat the Dark Sun Gwyndolin", "Defeat Crossbreed Priscilla"];

    assert.strictEqual(officialAchievementNames.length, 41, "sanity check on this test's own reference list");

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
