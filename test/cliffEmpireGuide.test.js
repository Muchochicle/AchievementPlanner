import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/cliff-empire.js";

test("the Cliff Empire guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "cliff-empire-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "cliff-empire");

});

test("the Cliff Empire guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Star Milestones",
            "Completion & Disasters",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 42-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /42 Steam achievements/);

});

test("every one of the 42 official Cliff Empire achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["5!", "10!", "15!", "20!", "25!", "30!", "35!", "40!", "45!", "50!", "55!", "60!", "65!", "70!", "75!", "80!", "85!", "90!", "95!", "100!", "105!", "110!", "115!", "120!", "125!", "130!", "135!", "140!", "145!", "150!", "155!", "160!", "165!", "170!", "175!", "180!", "Hardcore", "The End", "Strike!", "Fire!", "My land!", "Air threat"];

    assert.strictEqual(officialAchievementNames.length, 42, "sanity check on this test's own reference list");

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
