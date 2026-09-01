import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/children-of-the-sun.js";

test("the Children of the Sun guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "children-of-the-sun-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "children-of-the-sun");

});

test("the Children of the Sun guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Early & Mid Levels",
            "Late Levels & Finale",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official Children of the Sun achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Broken Home", "A Vulture", "Being Stuck", "Removing Evidence", "Hiding Bodies", "Old Home", "Gallery of Heads", "Occupied Village", "Breaking Contact", "Filled with Blood", "Manufacturing Lies", "Losing Track", "Gas Station", "Main Street", "Open Mic Night in Hell", "This is no Paradise", "Bury your Past", "Surveil the Dead", "Enter the Heart", "Valley Path", "Idolatry"];

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
