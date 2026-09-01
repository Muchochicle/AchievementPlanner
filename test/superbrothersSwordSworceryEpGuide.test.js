import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/superbrothers-sword-sworcery-ep.js";

test("the Sword & Sworcery EP guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "superbrothers-sword-sworcery-ep-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "superbrothers-sword-sworcery-ep");

});

test("the Sword & Sworcery EP guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Scythian's Journey",
            "Secrets & Ending",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 14-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /14 Steam achievements/);

});

test("every one of the 14 official Sword & Sworcery EP achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["We Got the Megatome", "The Ballad of the Space Babies", "The Gold Trigon", "The Dark Moon Trigon", "Assemble the Trigon Trifecta", "#honest", "Monster Hunter", "The Grizzled Boor", "The Mushroom Kingdom", "Cheating Cheater", "#moar", "The Moon Grotto", "The Bright Moon Trigon", "Now We Are Cosmic Friends Forever"];

    assert.strictEqual(officialAchievementNames.length, 14, "sanity check on this test's own reference list");

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
