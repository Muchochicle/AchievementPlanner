import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/mountain.js";

test("the Mountain guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "mountain-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "mountain");

});

test("the Mountain guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Life & Weather",
            "Death, Pain & Time",
            "Music, Order & Alone Time",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Mountain achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Hello There", "Welcome, Welcome", "I'm a Living Target", "The Days Keep Coming...", "I'm Still Here", "Is This Normal?", "Is This Cheating?", "Ok, Fine", "It Happens", "Turn the Other Peak", "Getting Used to This", "Not Done Yet", "I Must Go On", "It's Never Over", "Ouch!", "At least I know I'm alive", "I'm Thinking", "I Can't Stop Thinking", "These Thoughts Never End", "Am I Interesting?", "YOU ARE MOUNTAIN", "YOU ARE GOD", "I'm A Musician?", "I am Music!", "Am I Being Organized?", "I Look Beautiful", "I Must Dry Off", "Who's Doing This?", "This Is Me!", "I Can Sing!", "I Love To Sing!"];

    assert.strictEqual(officialAchievementNames.length, 31, "sanity check on this test's own reference list");

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
