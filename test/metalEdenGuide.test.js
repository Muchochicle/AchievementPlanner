import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/metal-eden.js";

test("the METAL EDEN guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "metal-eden-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "metal-eden");

});

test("the METAL EDEN guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Combat & Bosses",
            "Upgrades, Exploration & Discipline Runs",
            "Difficulty Clears & Final Secrets",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 26-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /26 Steam achievements/);

});

test("every one of the 26 official METAL EDEN achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rip & Tear", "The Beekeeper", "KILL BOSS!!", "What a mess!", "KILL BOSS!!!", "Dominating!", "KILL BOSS!", "One Punch Aśka", "Keep rollin', rollin', rollin', rollin'", "Consumer", "Impulse 101", "Weapons Expert", "Hoarder", "Fly high", "Traveler", "AŚKA", "Design with Architect", "God Mode", "I don't need it", "Let's do this!", "Live Long", "METAL EDEN: Brutal", "METAL EDEN: Completed", "METAL EDEN: Hard", "Operate with Operator", "Untouchable"];

    assert.strictEqual(officialAchievementNames.length, 26, "sanity check on this test's own reference list");

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
