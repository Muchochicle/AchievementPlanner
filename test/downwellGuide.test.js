import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/downwell.js";

test("the Downwell guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "downwell-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "downwell");

});

test("the Downwell guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Area & Boss Clears",
            "Combos & Level Challenges",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Downwell achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Bye Frogs", "Bye Ghosts", "Bye Squids", "Bye Stuff", "Bye Well", "So Many Frogs", "So Many Ghosts", "So Many Squids", "So Much Stuff", "Well Master", "Wow Combo", "Whoa Combo", "Sugoi Combo", "Careful Descent", "Ground Allergy", "Time Never Stops", "Pacifist", "Mottainai", "Saving Up", "Frugality"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
