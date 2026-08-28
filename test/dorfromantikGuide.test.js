import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/dorfromantik.js";

test("the Dorfromantik guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "dorfromantik-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "dorfromantik");

});

test("the Dorfromantik guide has all 7 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "One-Off & Placement Achievements",
            "Cumulative Milestone Families",
            "Single-Group Size Families",
            "Streak Families",
            "Score Families",
            "Suggested Order"
        ]
    );

});

test("the Overview states the verified 85-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /85 Steam achievements/);

});

test("every one of the 85 official Dorfromantik achievement names is mentioned somewhere in the guide", () => {

    // The full, official list this guide is built from
    // (backend/catalog/games/dorfromantik.json). Dorfromantik has no
    // Steam-hidden achievements at all.
    const officialAchievementNames = [
        "True Fan I", "True Fan II", "True Fan III", "True Fan IV", "Champion I",
        "Champion II", "Champion III", "Champion IV", "Champion V", "Landscaper I",
        "Landscaper II", "Landscaper III", "Engineer I", "Engineer II", "Engineer IV",
        "Engineer III", "Ocean I", "Ocean II", "Ocean III", "Ocean IV",
        "Farmer I", "Farmer II", "Farmer III", "Farmer IV", "Perfectionist I",
        "Perfectionist II", "Perfectionist III", "Perfectionist IV", "Perfectionist V", "Villager I",
        "Villager II", "Villager III", "Villager IV", "Puzzler I", "Puzzler II",
        "Puzzler III", "Puzzler IV", "Puzzler V", "Green Thumb I", "Green Thumb II",
        "Green Thumb III", "Green Thumb IV", "Green Thumb V", "Self-Sufficiency I", "Self-Sufficiency II",
        "Self-Sufficiency III", "First Steps", "Landscaper IV", "Puzzler VI", "Explorer I",
        "Explorer II", "Explorer III", "Explorer IV", "Planner I", "Planner II",
        "Planner III", "Planner IV", "Planner V", "Planner VI", "Quest Master I",
        "Quest Master II", "Quest Master III", "Quest Master IV", "Quest Master V", "Quest Master VI",
        "Heavy Weight I", "Heavy Weight II", "Heavy Weight III", "Heavy Weight IV", "Heavy Weight V",
        "Heavy Weight VI", "Analyst I", "Analyst II", "Analyst III", "Analyst IV",
        "Analyst V", "Analyst VI", "Overachiever I", "Overachiever II", "Overachiever III",
        "Overachiever IV", "Landscaper V", "Puzzler VII", "Heavy Weight VII", "Landscaper VI"
    ];

    assert.strictEqual(officialAchievementNames.length, 85, "sanity check on this test's own reference list");

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
