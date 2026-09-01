import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/layers-of-fear-2016.js";

test("the Layers of Fear (2016) guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "layers-of-fear-2016-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "layers-of-fear-2016");

});

test("the Layers of Fear (2016) guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Painting & Its Endings",
            "Secrets & Time Feats",
            "Inheritance DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Layers of Fear (2016) achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["It's covered up for a reason", "Sketchbook of the damned", "The artist's impression", "You might have a problem", "It rings a bell", "Whispers long forgotten", "Scraps of love", "Immortalized in my heart", "Finishing touch", "I know what I want", "Omniscient", "It was worth a try", "Instinct of self-preservation", "Artist's struggle", "Inspired OCD", "Those eyes can pierce a man's soul", "Art Connoisseur", "Wanderer", "Let Bygones Be Bygones", "Too Little, Too Late", "The Tree and the Apple", "The Big Picture", "I Remember It Like It Was Yesterday", "Once Upon A Time", "Sword Of The Serpent", "Preferred Parent", "This could be important"];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
