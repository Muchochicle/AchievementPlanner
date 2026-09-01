import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/crow-country.js";

test("the Crow Country guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "crow-country-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "crow-country");

});

test("the Crow Country guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Weapons & Items",
            "Secrets, Bosses & Ranks",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 15-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /15 Steam achievements/);

});

test("every one of the 15 official Crow Country achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Secret Map", "Checking in on a friend", "Shotgun", "Flamethrower", "Magnum Revolver", "Running Shoes", "Med Kit Pro", "Quizmaster", "Wishes Granted", "Secret Hunter", "Thorough", "Complete", "B Rank", "A Rank", "S Rank"];

    assert.strictEqual(officialAchievementNames.length, 15, "sanity check on this test's own reference list");

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
