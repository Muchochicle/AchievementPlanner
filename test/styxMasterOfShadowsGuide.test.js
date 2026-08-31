import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/styx-master-of-shadows.js";

test("the Styx: Master of Shadows guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "styx-master-of-shadows-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "styx-master-of-shadows");

});

test("the Styx: Master of Shadows guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Combat & Stealth Feats",
            "Challenges & Collectibles",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 33-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /33 Steam achievements/);

});

test("every one of the 33 official Styx: Master of Shadows achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Reminiscences", "Akenash's Atrium", "Master key", "Deliverance", "The creator", "The architect", "Conflagration", "Renaissance", "Indigestion", "Goblin snack", "Watch out below! ", "Like looking through a wall", "Great power...", "Goblin-tossing", "Wrong turn", "Dodge this", "Suicide mission", "My precious", "Dose of his own medicine", "Tidy up your room!", "Outstanding duelist", "Sticky-fingered", "Army of clones", "Sharpshooter", "Passkey", "Unquenched thirst", "Pretentious", "Born in the shadow", "Sudden silence…", "Expendable", "Serial killer", "Unseen, unknown", "Music Lover"];

    assert.strictEqual(officialAchievementNames.length, 33, "sanity check on this test's own reference list");

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
