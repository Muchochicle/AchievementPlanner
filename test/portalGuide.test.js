import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/portal.js";

test("the Portal guide identifies itself correctly as Portal's Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "portal-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "portal");

});

test("the Portal guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progress (Automatic)",
            "The Two Secrets",
            "Advanced Maps (Post-Game)",
            "Challenge Mode (Post-Game)",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 15-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /15 Steam achievements/);

});

test("every one of the 15 official Portal achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from (backend/catalog/games/portal.json),
    // sourced directly from Steam's own achievement schema for appid 400.
    const officialAchievementNames = [
        "Lab Rat", "Fratricide", "Partygoer", "Heartbreaker", "Terminal Velocity",
        "Long Jump", "Cupcake", "Fruitcake", "Vanilla Crazy Cake", "Basic Science",
        "Rocket Science", "Aperture Science", "Camera Shy", "Friendly Fire", "Transmission Received"
    ];

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
