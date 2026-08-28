import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dark-souls-3.js";

test("the DARK SOULS III guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dark-souls-3-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dark-souls-3");

});

test("the DARK SOULS III guide has all 8 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Three Endings",
            "Lords of Cinder",
            "Bosses",
            "Hidden Areas",
            "Covenants",
            "Collections & Upgrades",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official DARK SOULS III achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dark-souls-3.json).
    const officialAchievementNames = [
        "The Dark Soul", "To Link the First Flame", "The End of Fire", "The Usurpation of Fire", "Lords of Cinder: Abyss Watchers",
        "Lord of Cinder: Yhorm the Giant", "Lord of Cinder: Aldrich, Devourer of Gods", "Lord of Cinder: Lothric, Younger Prince", "Supreme Weapon Reinforcement", "Master of Infusion",
        "Master of Sorceries", "Master of Pyromancies", "Master of Miracles", "Master of Rings", "Master of Expression",
        "Ultimate Bonfire", "Ultimate Estus", "Covenant: Warrior of Sunlight", "Covenant: Way of Blue", "Covenant: Blue Sentinels",
        "Covenant: Blade of the Darkmoon", "Covenant: Rosaria's Fingers", "Covenant: Mound-makers", "Covenant: Watchdogs of Farron", "Covenant: Aldrich Faithful",
        "Untended Graves", "Archdragon Peak", "Iudex Gundyr", "Vordt of the Boreal Valley", "Curse-rotted Greatwood",
        "Crystal Sage", "Deacons of the Deep", "High Lord Wolnir", "Pontiff Sulyvahn", "Dancer of the Boreal Valley",
        "Dragonslayer Armour", "Old Demon King", "Oceiros, the Consumed King", "Champion Gundyr", "Ancient Wyvern",
        "The Nameless King", "Enkindle", "Embrace the Flame"
    ];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
