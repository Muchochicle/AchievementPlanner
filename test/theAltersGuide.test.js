import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/the-alters.js";

test("the The Alters guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "the-alters-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "the-alters");

});

test("the The Alters guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Progression & Alter Storylines",
            "Lessons & Base Building",
            "Endings, Secrets & DLC",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 63-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /63 Steam achievements/);

});

test("every one of the 63 official The Alters achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["The survivor ", "Two of us", "Dig Deeper", "Let's roll", "The Bridge", "Nothing's gonna stop us", "Into the storm", "Time to go home", "I Found You", "Corporate Plug", "Bold Science", "Her last wish", "Hidden truth", "Keeping him safe", "Remaking Himself", "The Other Man", "You gotta be smart", "Happy Sisyphus", "Take it easy, Dude", "A place in people's hearts", "Assertiveness", "Reliance", "Vulnerability", "Charisma", "Optimism", "Integrity", "Chill", "Shrewdness", "Joy of life", "Pragmatism ", "Awareness", "Who else is there?", "The Ultimate Builder", "Reunited ", "Not Just An Object ", "All by myselves ", "Provide more", "We needed that", "The mission comes first", "Exceed all expectations", "Jan Complete", "Smart Management", "Look at all this new space!", "Jan's Moving Village", "Baaa!", "The Corporate Way", "Maxwell's Path", "Advanced industry", "In shield I trust", "The things we do for love", "It ends in flames", "We Made It Together", "New perspective", "I deserved this more", "All By Myself", "A Quantum Singularity", "Space Gardener", "Mastering Rapidium", "Mix and match", "Substance Genius", "Wait, you can do that?", "Caring after all", "The reason I stayed"];

    assert.strictEqual(officialAchievementNames.length, 63, "sanity check on this test's own reference list");

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
