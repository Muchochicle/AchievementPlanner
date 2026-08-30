import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/spacechem.js";

test("the SpaceChem guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "spacechem-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "spacechem");

});

test("the SpaceChem guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Campaign Challenges & Performance",
            "ResearchNet & 63 Corvi",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official SpaceChem achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Chief Executive Officer", "Junior Permutation Technician", "Environmental Engineer", "Industrial Physicist", "Materials Engineer of the People", "Junior Performance Specialist", "Performance Specialist", "Performance Specialist II", "Senior Performance Specialist", "Efficiency Specialist", "Cost Control Specialist", "Senior Efficiency Specialist", "Moustache Research Assistant", "Moustache Scientist", "Director of Moustache Research", "Science is an Indoor Activity", "Junior Publication Reviewer", "Distinguished Publication Reviewer", "Interstellar Transportation Specialist", "Polar Expedition"];

    assert.strictEqual(officialAchievementNames.length, 20, "sanity check on this test's own reference list");

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
