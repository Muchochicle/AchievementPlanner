import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/laysara-summit-kingdom.js";

test("the Laysara: Summit Kingdom guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "laysara-summit-kingdom-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "laysara-summit-kingdom");

});

test("the Laysara: Summit Kingdom guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Scenarios & Challenges",
            "Sandbox, Yaks & Economy",
            "Building Feats & Campaign",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 48-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /48 Steam achievements/);

});

test("every one of the 48 official Laysara: Summit Kingdom achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Conquered Talontop", "Conquered Windslab", "Conquered Demon's Rest", "Conquered Splintered Soul", "Conquered Smothered Flame", "Conquered Mount Plenty", "Conquered Plain Rock", "Conquered Snowfury Summit", "True veteran", "Puzzle-solver", "Expert puzzle-solver", "Maniac puzzle-solver", "Savant", "Believer", "Kingdom builder", "Yak of all trades", "Yak enthusiast", "Yak master", "Yak demiurg", "Human resources", "Midas", "Trade union", "Inflation? What's this?", "Totally not taxes", "Discerning", "Free spirit", "Observer", "Tech-sceptic", "This is the life", "Better safe than sorry", "Miner", "Fanatic", "Because it is hard", "Mole", "Morning walk", "Heavy fumes", "Brilliant management", "On the edge", "Close call", "Rainy close call", "Rough start", "Snowy consequences", "Master disaster", "Mastering the basics", "Follower", "Laysara's saviour", "And lived happily ever after", "Conquered Saltspire Peaks"];

    assert.strictEqual(officialAchievementNames.length, 48, "sanity check on this test's own reference list");

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
