import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/rivals-of-aether.js";

test("the Rivals of Aether guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "rivals-of-aether-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "rivals-of-aether");

});

test("the Rivals of Aether guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Mode",
            "Abyss Mode",
            "Rival Milestones",
            "Character KO Techniques",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 36-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /36 Steam achievements/);

});

test("every one of the 36 official Rivals of Aether achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = [
        "A Fiery Tale", "A Slippery Saga", "An Adverse Adventure", "A Rocky Start", "A Smoldering Plot",
        "A Maypul Story", "Open the Gates", "Into the Depths", "The Endless Abyss", "The Seasoned Rival",
        "The Apprentice Rival", "The Master Rival", "The Skeptical Rival", "The Swift Rival", "The Opulent Rival",
        "The Ardent Rival", "The Lone Rival", "The Reckless Flame", "The Watery Trap", "The Terrible Tempest",
        "The Boulder Barrage", "The Deadly Deception", "The Vicious Vine", "The Calculated Strike", "The Icy Plummet",
        "The Light of Nibel", "The Poisonous Storm", "The Unlimited Reach", "The Relentless Seed", "The Steampunk Sniper",
        "The Deadly Catch", "Endless Creativity", "The Rebel's Strike", "The Sweaty Smackdown", "The Glamorous Showstopper",
        "The Flawless Fist",
    ];

    assert.strictEqual(officialAchievementNames.length, 36, "sanity check on this test's own reference list");

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
