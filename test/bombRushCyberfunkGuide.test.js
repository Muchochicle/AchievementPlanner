import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bomb-rush-cyberfunk.js";

test("the Bomb Rush Cyberfunk guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bomb-rush-cyberfunk-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bomb-rush-cyberfunk");

});

test("the Bomb Rush Cyberfunk guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Style, Skill & Story",
            "Every District: Score Combos & Full Bombing",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 23-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /23 Steam achievements/);

});

test("every one of the 23 official Bomb Rush Cyberfunk achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["State of the art", "Baller", "Photo Generic", "In the flow", "Iron legs", "Nice", "Now go outside", "Flying rats begone", "Versum Hill Tricked", "Hideout tricked", "Millennium Mall Tricked", "Mataan Tricked", "Pyramid Island Tricked", "Millennium Square Tricked", "Brink Terminal Tricked", "Funk Star", "Versum Hill Bombed", "Hideout Bombed", "Millennium Mall Bombed", "Mataan Bombed", "Pyramid Island Bombed", "Millennium Square Bombed", "Brink Terminal Bombed"];

    assert.strictEqual(officialAchievementNames.length, 23, "sanity check on this test's own reference list");

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
