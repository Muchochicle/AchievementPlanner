import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-classic.js";

test("the Kingdom: Classic guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-classic-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-classic");

});

test("the Kingdom: Classic guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The Nth Day Challenges",
            "Survival Milestones",
            "Final Challenges & Securing the Crown",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Kingdom: Classic achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["On the First Day I Built an Army", " On the Second Day I Got a Gift", "On the Third Day I Lit a Fire", "On the Fourth Day We Had a Feast", "For Five Days I Turned the Other Cheek", "By Day Six I Was Rich", "On the Eighth Day I Fumbled", "On the Ninth Day I First Ran", "The Tenth Day We Fought Back", "Day V", "Day X", "Day XV", "Day XX", "Day XXV", "Day XXX", "Day XXXV", "Day XL", "Day XLV", "Day L", "Day LV", "Day LX", "Day LXV", "Day LXX", "Day LXXV", "Day LXXX", "Day LXXXV", "Day XC", "Day XCV", "Day C", "By the Seventh Day I Cleared an Acre", "Safe in 25", "Safe in 30", "Safe in 35", "Safe in 40"];

    assert.strictEqual(officialAchievementNames.length, 34, "sanity check on this test's own reference list");

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
