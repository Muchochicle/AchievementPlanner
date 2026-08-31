import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/megaquarium.js";

test("the Megaquarium guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "megaquarium-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "megaquarium");

});

test("the Megaquarium guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Levels",
            "Milestones & Sandbox Trials",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 25-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /25 Steam achievements/);

});

test("every one of the 25 official Megaquarium achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Complete 1. Sunnyside", "Complete 2. North Woods", "Complete 3. Elmshorn", "Complete 4. Valberg", "Complete 5. Napalos", "Complete 6. Hartcliff", "Complete 7. Myra", "Complete 8. Le Dufont", "Complete 9. Carbon City", "Complete 10. Megalopolis", "Grower", "Popular", "Trader", "Collector", "Name an animal", "Sandbox Trials - Standard", "Sandbox Trials - Limited", "Sandbox Trials - Completionist", "Decorator", "Sell sell sell!", "Helpful", "Sandbox Trials - Limited Veteran", "Sandbox Trials - Quick Start Veteran", "Sandbox Trials - Species time trial", "Sandbox Trials - Prestige time trial"];

    assert.strictEqual(officialAchievementNames.length, 25, "sanity check on this test's own reference list");

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
