import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rogue-legacy.js";

test("the Rogue Legacy guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rogue-legacy-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rogue-legacy");

});

test("the Rogue Legacy guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Growing Your Legacy",
            "The Four Kingdoms' Bosses",
            "Beyond the Final Boss",
            "Odd Jobs & Novelties",
            "The No-Death Challenge",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 29-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /29 Steam achievements/);

});

test("every one of the 29 official Rogue Legacy achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/rogue-legacy.json).
    const officialAchievementNames = [
        "Biophobia", "Decidophobia", "Plutophobia", "Aurophilia", "Gymnophobia",
        "Disposophobia", "Rhabdophilia", "Cainotophilia", "Ommetaphobia", "Phasmophobia",
        "Pyrophobia", "Blennophobia", "Paterphobia", "Zoophobia", "Geminiphobia",
        "Bibliophilia", "Alektorophobia", "Barophobia", "Atelophobia", "Somniphobia",
        "Coulrophilia", "Gnosiophilia", "Syngenesophobia", "Chemophobia", "Ostiophobia",
        "Scotomaphobia", "Astrophobia", "Katagelasticism", "Thanatophobia"
    ];

    assert.strictEqual(officialAchievementNames.length, 29, "sanity check on this test's own reference list");

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
