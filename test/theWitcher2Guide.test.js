import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-witcher-2.js";

test("the The Witcher 2: Assassins of Kings guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-witcher-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-witcher-2");

});

test("the The Witcher 2: Assassins of Kings guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Difficulty",
            "Character Build",
            "Combat Feats",
            "Side Content & Minigames",
            "Hidden Achievements",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 52-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /52 Steam achievements/);

});

test("every one of the 52 official The Witcher 2: Assassins of Kings achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "The Fugitive", "To Aedirn!", "Alea Iacta Est", "Madman", "To Be Continued...",
        "Oh My God! You Killed the Kayran! You Bastards!", "Fat Man", "Being Witcher George", "Backbone", "Artful Dodger",
        "Guru", "Master Alchemist", "Master of Magic", "Swordmaster", "Journeyman",
        "Craftsman", "Apprentice", "Torn Asunder!", "Taster", "Miser",
        "Mutant!", "The Butcher of Blaviken", "Focus", "Ricochet", "Threesome",
        "Perfectionist", "Eagle Eye", "Man of the Shadows", "Librarian", "Gladiator",
        "Heartbreaker", "Great Potion!", "Tourist", "Reasons of State", "Friend of Trolls",
        "Trollslayer", "Black Ops", "Kingmaker", "Necromancer", "Spellbreaker",
        "Witch Hunter", "Sensitive Guy", "Dragonheart", "Avenger", "Old Friends",
        "Pest Control", "Gambler", "Intimidator", "Poker!", "Once Ain't Enough",
        "Summer Solstice", "Winter Solstice"
    ];

    assert.strictEqual(officialAchievementNames.length, 52, "sanity check on this test's own reference list");

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
