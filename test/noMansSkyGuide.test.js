import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/no-mans-sky.js";

test("the No Man's Sky guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "no-mans-sky-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "no-mans-sky");

});

test("the No Man's Sky guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Scanning & Exploration Tiers",
            "Wealth, Language & Contact Tiers",
            "Combat & Survival Tiers",
            "Build & Social Achievements",
            "Reaching the Galaxy Centre",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official No Man's Sky achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/no-mans-sky.json).
    const officialAchievementNames = [
        "A Scanner Darkly", "The Stars, Like Dust", "Foundation", "Babel-17", "Contact",
        "Use of Weapons", "The Star Beast", "The Longest Voyage", "The Space Merchants", "The Languages of Pao",
        "Who Goes There?", "Pattern for Conquest", "Stranger in a Strange Land", "Symphony For A Lost Traveler", "Galapagos",
        "A Space Odyssey", "The Diamond Age", "Citizen of the Galaxy", "What Mad Universe", "The Forever War",
        "The Sentinel", "Have Spacesuit - Will Travel", "Cradle", "Navigators", "Reunion",
        "Take a Deep Breath", "To Live Forever"
    ];

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
