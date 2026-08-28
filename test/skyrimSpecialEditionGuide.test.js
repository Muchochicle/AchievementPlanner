import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/skyrim-special-edition.js";

test("the The Elder Scrolls V: Skyrim Special Edition guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "skyrim-special-edition-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "skyrim-special-edition");

});

test("the The Elder Scrolls V: Skyrim Special Edition guide has all 10 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Main Quest",
            "The Factions",
            "The Civil War",
            "Shouts & Dragons",
            "Character Progression",
            "Life in Skyrim",
            "Dawnguard",
            "Dragonborn",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 75-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /75 Steam achievements/);

});

test("every one of the 75 official The Elder Scrolls V: Skyrim Special Edition achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/skyrim-special-edition.json).
    const officialAchievementNames = [
        "Unbound", "Bleak Falls Barrow", "The Way of the Voice", "Diplomatic Immunity", "Alduin's Wall",
        "Elder Knowledge", "The Fallen", "Dragonslayer", "Take Up Arms", "Blood Oath",
        "Glory of the Dead", "Gatekeeper", "Revealing the Unseen", "The Eye of Magnus", "Taking Care of Business",
        "Darkness Returns", "One with the Shadows", "With Friends Like These…", "Bound Until Death", "Hail Sithis!",
        "Taking Sides", "War Hero", "Hero of Skyrim", "Sideways", "Hero of the People",
        "Hard Worker", "Thief", "Snake Tongue", "Blessed", "Standing Stones",
        "Citizen", "Wanted", "Married", "Artificer", "Master Criminal",
        "Golden Touch", "Delver", "Skill Master", "Explorer", "Reader",
        "Daedric Influence", "Oblivion Walker", "Dragon Soul", "Dragon Hunter", "Words of Power",
        "Thu'um Master", "Apprentice", "Adept", "Expert", "Master",
        "Awakening", "Beyond Death", "Kindred Judgement", "Lost to the Ages", "Soul Tear",
        "Auriel's Bow", "Werewolf Mastered", "Vampire Mastered", "A New You", "Legend",
        "Proud Parent", "Landowner", "Architect", "Land Baron", "Master Architect",
        "Outlander", "The Temple of Miraak", "The Path of Knowledge", "At the Summit of Apocrypha", "Dragon Aspect",
        "Hidden Knowledge", "Stalhrim Crafter", "Dragonrider", "Raven Rock Owner", "Solstheim Explorer"
    ];

    assert.strictEqual(officialAchievementNames.length, 75, "sanity check on this test's own reference list");

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
