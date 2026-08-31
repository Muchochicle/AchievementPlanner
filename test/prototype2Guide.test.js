import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/prototype-2.js";

test("the Prototype 2 guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "prototype-2-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "prototype-2");

});

test("the Prototype 2 guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Story Missions",
            "Combat & Traversal Feats",
            "Upgrades, Collectibles & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 43-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /43 Steam achievements/);

});

test("every one of the 43 official Prototype 2 achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["It's an Epidemic", "I Want Some More", "Religious Experience", "This is a Knife", "Project Closed", "The Mad Scientist", "Something to Live For", "What a Bitch", "Murder your Maker?", "Follow Your Nose", "Up to No Good", "Strike, You're Out.", "Compulsive Eater", "Do the Evolution", "Just a Flesh Wound", "All Together Now", "Back Atcha!", "Two for the Price of One", "Lair to Rest", "Hijack Be Nimble", "Road Rage", "Who Watches the Watchers? ", "Hard to Please", "The Floor is Lava", "Cannonball!", "You're the Bomb", "Sic 'em!", "Over-Equipped", "The Best Offense", "Arcade Action", "I Caught a Big One!", "Anger Management", "So Above It All", "Vitamin B-rains", "Eating Your Way to the Top", "Finally Full", "Icarus", "Spindler's Search", "//BLACKNET Hacker", "One by One", "Wanted Man", "All Growed Up", "Master Prototype"];

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
