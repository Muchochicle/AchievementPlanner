import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/vernal-edge.js";

test("the Vernal Edge guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "vernal-edge-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "vernal-edge");

});

test("the Vernal Edge guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Beating the Game & Minigames",
            "Secrets, Minigames & Story",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Vernal Edge achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Ending", "Vicious", "Unreal", "New Look", "Big Spender", "Parry Master", "Treasure Hunter", "Pacifist", "Deeply Rooted", "Fisher Queen", "Slugger", "Green Thumb", "Pyramid Master", "Slime Time", "Knocked Around The Clock", "Hello George"];

    assert.strictEqual(officialAchievementNames.length, 16, "sanity check on this test's own reference list");

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
