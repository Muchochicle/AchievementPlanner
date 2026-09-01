import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/el-hijo-a-wild-west-tale.js";

test("the El Hijo - A Wild West Tale guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "el-hijo-a-wild-west-tale-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "el-hijo-a-wild-west-tale");

});

test("the El Hijo - A Wild West Tale guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Inspiring Children",
            "Stealth Challenges",
            "Distraction & Traversal Feats",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 22-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /22 Steam achievements/);

});

test("every one of the 22 official El Hijo - A Wild West Tale achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Truant", "Escape Artist", "Survivor", "El Hombre", "El Primero", "El Cuarto", "El Heroe", "Adventurer", "Eel Hijo", "El Fantasma", "No Stones", "Broad Daylight", "Air Freshener", "Fool me Once", "Hole Up", "Riding the Rails", "El Muerto", "Pitch Black", "Hunter", "Daredevil", "Two Birds", "Flashbang"];

    assert.strictEqual(officialAchievementNames.length, 22, "sanity check on this test's own reference list");

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
