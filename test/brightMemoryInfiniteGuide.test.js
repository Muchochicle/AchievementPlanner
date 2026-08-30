import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/bright-memory-infinite.js";

test("the Bright Memory: Infinite guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "bright-memory-infinite-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "bright-memory-infinite");

});

test("the Bright Memory: Infinite guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Difficulty",
            "Combat & Weapon Mastery",
            "Collectibles & Skills",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 30-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /30 Steam achievements/);

});

test("every one of the 30 official Bright Memory: Infinite achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Power Balance", "Fallen General", "Battlefield Veteran", "Burning Bridges", "Restoration", "Bitter Rivals", "Infinite", "Battle-hardened", "Matchless Warrior", "The Heat is On", "None Shall Survive", "Extreme Skills", "Invulnerable", "Eagle-eye", "Peerless Warrior", "Herculean Strength", "AR Silver", "AR Gold", "SG Silver", "SG Gold", "HG Silver", "HG Gold", "SR Silver", "SR Gold", "Bullseye", "Get Rich", "Get Richer", "Get Richest", "Auto-Tracking", "Flames in the Sky"];

    assert.strictEqual(officialAchievementNames.length, 30, "sanity check on this test's own reference list");

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
