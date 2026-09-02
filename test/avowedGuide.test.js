import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/avowed.js";

test("the Avowed guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "avowed-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "avowed");

});

test("the Avowed guide has all 6 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Completion & Secrets I",
            "Abilities & Exploration",
            "Story Choices & More Secrets",
            "Roleplay & Completion",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 50-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /50 Steam achievements/);

});

test("every one of the 50 official Avowed achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Avowed", "A Cistern Warning", "A Proper Introduction", "You've Got It From Here", "Fior Extinguisher", "Spectral Evidence", "It'll Cost Ya", "Allochory", "Parasitoid", "Two Bears High-Fiving", "Everyone Disliked That", "Luckier Than They Know", "A Little Power Goes a Long Way", "Bullseye", "Slay!", "Pantheon Purist", "Peak Performance", "Pathfinder", "Pillars of Eternity", "We Remember", "Gotta Cache 'Em All", "Bounty Hunter", "Kith Lord", "Dungeon Siege", "Alpha Strike Protocol", "Jingle, Jangle, Jingle", "Tyranny", "Pentiment", "Big Iron On Your Hip", "Grounded", "The Outer Worlds", "A Test of Your Reflexes", "Get in the Statue, Envoy", "We're All In This Together", "Dream Fungi Rotation", "Skeyt Digger", "Reverse Card", "Retirement Plan", "Hawkeye", "That Sign Can't Stop Me Because I Can't Read", "Tired Of Being Nice", "Can't We All Get Along?", "A Well Overflowing", "Pants on Fire", "Training Arc", "Now Riposte!", "Cooking By The Book", "Historian", "Explorer", "Play Dead"];

    assert.strictEqual(officialAchievementNames.length, 50, "sanity check on this test's own reference list");

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
