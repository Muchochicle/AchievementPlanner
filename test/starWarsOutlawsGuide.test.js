import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/star-wars-outlaws.js";

test("the Star Wars Outlaws guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "star-wars-outlaws-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "star-wars-outlaws");

});

test("the Star Wars Outlaws guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Reputation, Gear & Open-World Feats",
            "Combat, Space & Traversal Feats",
            "Story: Planets & Main Quests",
            "Story: Side Content & Expansions",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 59-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /59 Steam achievements/);

});

test("every one of the 59 official Star Wars Outlaws achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["It wasn't me", "They live up to the name", "Shoot first", "No match for a good blaster", "Got you something", "Galactic gourmet", "Good listener", "Experience outranks everything", "Adventure and excitement", "Give me the good stuff", "Old school cool", "Honest work", "Cut-throat politics", "Cloak and dagger", "What you see is what you get", "The Queen's word is law", "Think I had a choice?", "It's mine now", "Stay on target", "Easy pickings", "Against all odds", "No such thing as luck", "There is no try", "Right back at you", "How rude!", "Punching up", "Might want to buckle up", "I'll bet you have", "The heavier they fall", "Sometimes I amaze even myself", "Never tell me the odds", "Into darkness", "Like a bantha", "Galaxy drift", "Don't get cocky", "Into the main frame", "Slice like you", "Now you see me, now you don't", "Get rhythm", "Made it somehow", "Tip the scales", "One job at a time", "Making friends", "Rare friends", "Spiked", "Best of the best", "The Director", "Eye on the score", "Calling in some favors", "All in", "All out", "Take your own advice", "A moon in your hand", "Stranger Tides", "Price of Loyalty", "Pirate's Honor", "Together", "First Voyage", "Wordsmith"];

    assert.strictEqual(officialAchievementNames.length, 59, "sanity check on this test's own reference list");

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
