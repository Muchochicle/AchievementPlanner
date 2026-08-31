import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/fight-n-rage.js";

test("the Fight'N Rage guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "fight-n-rage-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "fight-n-rage");

});

test("the Fight'N Rage guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Difficulty & Mastery",
            "1CC, Rankings & Endings",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 20-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /20 Steam achievements/);

});

test("every one of the 20 official Fight'N Rage achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Child's Play", "Good Enough", "More Than Good", "Hardcore Player", "Mastered Gal", "Mastered Ricardo", "Mastered F.Norris", "Gal Completionist", "Ricardo Completionist", "F.Norris Completionist", "Complement Completionist", "Recruiter", "Faster!", "One Credit Clear", "Score Attack Master", "Ending Completionist 25%", "Ending Completionist 50%", "Ending Completionist 100%", "Time Attack Master", "Survival Master"];

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
