import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/beacon-pines.js";

test("the Beacon Pines guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "beacon-pines-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "beacon-pines");

});

test("the Beacon Pines guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Exploring Beacon Pines",
            "Turning Points, Secrets & Minigames",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 11-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /11 Steam achievements/);

});

test("every one of the 11 official Beacon Pines achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A Charmed Life", "Riddle Me This", "Play that Funky Music", "Nerd!!!", "The Big Chill", "Pop goes the Weasel", "Agile Angler", "Close the Book", "Melon Kicker", "Born in a Barn", "Yes Chef!"];

    assert.strictEqual(officialAchievementNames.length, 11, "sanity check on this test's own reference list");

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
