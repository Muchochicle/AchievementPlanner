import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/trine-4.js";

test("the Trine 4 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "trine-4-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "trine-4");

});

test("the Trine 4 guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Level Completions",
            "Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 39-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /39 Steam achievements/);

});

test("every one of the 39 official Trine 4 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Wizard's Quest", "A Knightly Quest", "An Enterprising Quest", "Across the Moors", "Through the Thorns", "Running in Ruins", "A Castle in a Dream", "Moths in Moonlight", "A Badger's Journal", "A Hedgehog's Seeds", "A Dip in the Lake", "Bogged Down", "Suddenly a Bear", "The Potion of Light", "Everything is Fine", "Darker Depths", "Chasing Shadows", "To Recover a Prince", "The Morning Hunt", "The Cursed Hunt", "The Masquerade Hunt", "The Craghill Hunt", "The Thorny Hunt", "Looting Ruins", "Sweeping Dreams", "The Moonlit Hunt", "The Underground Hunt", "The Golden Hunt", "The Lakeside Hunt", "The Mired Hunt", "The Blueberry Hunt", "The Gossamer Hunt", "The Snowbound Hunt", "The Nightmare Hunt", "The Haunted Hunt", "Experienced Hunter", "First Class Delivery", "Treasure Seeker", "Bits and Pieces"];

    assert.strictEqual(officialAchievementNames.length, 39, "sanity check on this test's own reference list");

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
