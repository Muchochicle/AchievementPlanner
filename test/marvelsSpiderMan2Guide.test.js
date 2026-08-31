import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/marvels-spider-man-2.js";

test("the Marvel's Spider-Man 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "marvels-spider-man-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "marvels-spider-man-2");

});

test("the Marvel's Spider-Man 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story & Bosses",
            "Side Activities & Districts",
            "Combat Feats, Traversal & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Marvel's Spider-Man 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["You Know What to Do", "Co-Signing", "You're Gonna Need Help", "Dedicated", "Superior", "Heal the World", "To the Max", "Kitted Out", "Behind the Masks", "Amazing", "Data Collector", "Crimson Hour", "Exterminator", "Grains of Sand", "Leave Us Alone", "The Great Hunt", "Seek and Destroy", "Friendly Neighborhood Spider-Man", "Medicine", "Surge", "Foundational", "Evolved", "Armed and Dangerous", "Another Way", "Fully Loaded", "Brooklyn Pride", "My Community", "I Quit", "Funky Wireless Protocols", "Stylish", "Slack Line", "Hang Ten", "Overdrive", "Home Run!", "Just Let Go", "Soar", "Splat", "A New Adventure", "Resourceful", "New York, New York", "Antidote", "A New Suit", "Once More, With Feeling"];

    assert.strictEqual(officialAchievementNames.length, 43, "sanity check on this test's own reference list");

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
