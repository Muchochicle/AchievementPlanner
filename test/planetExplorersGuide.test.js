import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/planet-explorers.js";

test("the Planet Explorers guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "planet-explorers-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "planet-explorers");

});

test("the Planet Explorers guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Exploration & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 16-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /16 Steam achievements/);

});

test("every one of the 16 official Planet Explorers achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Old and Sick", "The Forest", "Rest in Piece", "The Barrens", "Your Own Colony", "World Peace", "Newton Continental", "Survive", "Take a Flight", "Incredible Wealth", "Knight on the Monster", "Follower", "Dung Beetle", "Planet Explorer", "Destroy Everything", "Peace Ambassador"];

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
