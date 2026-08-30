import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/kingdom-new-lands.js";

test("the Kingdom: New Lands guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "kingdom-new-lands-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "kingdom-new-lands");

});

test("the Kingdom: New Lands guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "The First Ten Days",
            "Survival Milestones",
            "Speedruns & Reign Progression",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 34-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /34 Steam achievements/);

});

test("every one of the 34 official Kingdom: New Lands achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["On the First Day I Built an Army.", "On the Second Day I Got a Gift.", "On the Third Day I Lit a Fire.", "On the Fourth Day We Had a Feast.", "For Five Days I Turned the Other Cheek.", "By the Sixth Day I Was Rich.", "By the Seventh Day I Cleared an Acre.", "On the Eighth Day I Fumbled.", "On the Ninth Day I First Ran.", "On The Tenth Day We Fought Back!", "Day V", "Day X", "Day XV", "Day XX", "Day XXV", "Day XXX", "Day XXXV", "Day XL", "Day XLV", "Day L", "Day LX", "Day LXX", "Day LXXX", "Day XC", "Day C", "Maiden Voyage", "Smooth Sailing", "Stormy Waters", "Reef the Main", "All Hands on Deck", "Birth of a Reign", "Interior Decoration", "Heraldic Achievement", "Crowned"];

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
