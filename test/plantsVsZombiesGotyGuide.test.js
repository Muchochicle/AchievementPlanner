import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/plants-vs-zombies-goty.js";

test("the Plants vs. Zombies guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "plants-vs-zombies-goty-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "plants-vs-zombies-goty");

});

test("the Plants vs. Zombies guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Adventure & Endless Modes",
            "Level Challenge Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Plants vs. Zombies achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Home Lawn Security ", "Nobel Peas Prize ", "Better Off Dead ", "China Shop ", "Immortal", "Morticulturalist", "Towering Wisdom ", "Cryptozombologist", "Disco is Undead", "SPUDOW! ", "Explodonator", "Ask Me About Mustache Mode ", "Don't Pea in the Pool", "Roll Some Heads", "Grounded", "Penny Pincher", "Sunny Days", "Popcorn Party", "Good Morning", "No Fungus Among Us", "Beyond the Grave"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
