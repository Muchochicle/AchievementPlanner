import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rise-of-industry.js";

test("the Rise of Industry guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rise-of-industry-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rise-of-industry");

});

test("the Rise of Industry guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Getting Started & Building",
            "Production, Logistics & 2130 DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Rise of Industry achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Well educated", "Hard working", "Master Builder", "City Planner", "Freelancer", "Billionaire", "Entrepreneur", "Engineer", "Excavator", "Landscaper", "Director", "Exporter", "Loan Ranger", "Deforester", "Massive Gains", "Salesman", "Penniless", "Vroom Vroom", "Apprentice Manufacturer", "Big Hauling", "High Flyer", "Railwayman", "Captain", "I would drive 500 tiles...", "[2130] Nature Lover", "[2130] No Quarter Given. ", "[2130] Dumpster Diving"];

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
