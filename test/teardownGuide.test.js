import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/teardown.js";

test("the Teardown guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "teardown-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "teardown");

});

test("the Teardown guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Sandbox & Secrets",
            "Story & Restriction Challenges",
            "Grinds",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 27-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /27 Steam achievements/);

});

test("every one of the 27 official Teardown achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Visit the developers", "Whoops", "Couch potato", "Sharpshooter", "Average looter", "Drive for treasure", "Paintjob", "Above and beyond", "Liftoff", "McFly", "I was on a boat", "The floor is water", "Where's my hammer?", "Swiss cheese", "Big brother", "Runner up", "Summer is over", "Tourist", "Beat it", "Completionist", "Bare bones", "Meticulous planner", "Speedrunner", "Wasn't me", "Now what", "I took a thing", "True looter"];

    assert.strictEqual(officialAchievementNames.length, 27, "sanity check on this test's own reference list");

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
