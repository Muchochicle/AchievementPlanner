import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/ark-survival-ascended.js";

test("the ARK: Survival Ascended guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "ark-survival-ascended-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "ark-survival-ascended");

});

test("the ARK: Survival Ascended guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Survival & Progression Milestones",
            "Explorer Notes & Full Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 32-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /32 Steam achievements/);

});

test("every one of the 32 official ARK: Survival Ascended achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Veteran Paleontologist", "Veteran Survivor", "Artifact Archaeologist", "Expert Survivor", "Master Survivor", "Survivor Evolved", "Your first day...", "Your first Dino...", "Your first Ride...", "Maximum Survivor", "Maximum Dinosaur", "Rex Rider", "Giga Rider", "Map Maker", "Highest Peak", "Lowest Depth", "Cure-All", "Gamma Ascension", "Beta Ascension", "Alpha Ascension", "Beginner Explorer", "Experienced Explorer", "Adventurous Explorer", "Studious Explorer", "Veteran Explorer", "Adept Explorer", "Professional Explorer", "Expert Explorer", "Master Explorer", "Perfect Explorer", "Master Zoologist", "Survivor of The Center"];

    assert.strictEqual(officialAchievementNames.length, 32, "sanity check on this test's own reference list");

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
