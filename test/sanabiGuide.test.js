import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sanabi.js";

test("the SANABI guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sanabi-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sanabi");

});

test("the SANABI guide has all 4 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Endings",
            "Challenges & Spin-Off DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 21-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /21 Steam achievements/);

});

test("every one of the 21 official SANABI achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["You should have seen who you were attacking", "City cleaning department", "Fishing", "Organizing Positions", "Pitiful hero", "Core Keeper", "In the Factory King’s palace", "Hovering Hellfire", "Mutiny", "The unfolding truth", "What’s important is seeing this through to the end.", "Farewell", "There is nowhere to run", "Special Forces Cat", "Undeteriorating Skill", "Taking the lead", "The legend has returned", "Prototype", "Supernatural Phenomena", "An Ending Marks a New Start", "Government-Certified Living Weapon"];

    assert.strictEqual(officialAchievementNames.length, 21, "sanity check on this test's own reference list");

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
