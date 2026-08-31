import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/sid-meiers-starships.js";

test("the Sid Meier's Starships guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "sid-meiers-starships-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "sid-meiers-starships");

});

test("the Sid Meier's Starships guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Faction Wins & Empire Basics",
            "Battle Feats & Empire Growth",
            "Victory Types",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 31-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /31 Steam achievements/);

});

test("every one of the 31 official Sid Meier's Starships achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["A new order of intelligence", "That is the sound of inevitability...", "We choose our own path", "Can you turn the tide of war?", "It's dangerous to go alone! Take this.", "It's our time down here.", "Food for the masses", "The trouble with science…", "Light years ahead of the competition!", "I, uh, I've been to another planet, Ma.", "Dodge this", "Building a better today", "Through the wormhole", "The technology of tomorrow", "Of all the wonders that I have heard…", "…Wretched hive of scum and villainy", "They've gone to plaid!", "I am the swarm", "We gotta get outta here", "Women and children first", "They can't shoot what they can't see", "Hit 'em where it hurts", "It's just a flesh wound", "Like rabbits", "Tell me of your homeworld", "…We don't need roads", "Take to the skies", "Span the galaxy", "Knowledge is the key to success", "A wondrous civilization", "Perpetual peace is a futile dream"];

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
