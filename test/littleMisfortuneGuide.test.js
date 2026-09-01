import { test } from "node:test";
import assert from "node:assert";

import { GUIDE } from "../src/data/guides/games/little-misfortune.js";

test("the Little Misfortune guide identifies itself correctly as its Game Guide", () => {

    assert.strictEqual(GUIDE.slug, "little-misfortune-achievement-guide");
    assert.strictEqual(GUIDE.category, "game");
    assert.strictEqual(GUIDE.gameSlug, "little-misfortune");

});

test("the Little Misfortune guide has all 5 proposed sections, in order", () => {

    assert.deepStrictEqual(
        GUIDE.sections.map(section => section.heading),
        [
            "Overview",
            "Minigames & Skill Feats",
            "Collectibles",
            "Story Choices & World Details",
            "Suggested Order",
        ]
    );

});

test("the Overview states the verified 35-achievement fact", () => {

    const overview = GUIDE.sections[0].body.join(" ");

    assert.match(overview, /35 Steam achievements/);

});

test("every one of the 35 official Little Misfortune achievement names is mentioned somewhere in the guide", () => {

    const officialAchievementNames = ["Rich Lady", "The Kraken", "Fox Whacker", "The Returner", "Tomb Lady", "Ninja Lady", "Dance Master", "Too Much Rolling", "Can Kicker", "Sparkling Lady", "Lil' Cutie", "Gamer", "Rotten Fish", "Fortune Teller", "Manual Sparkle", "Runestones", "Somewhere Else", "Hay Doll #1", "Hay Doll #2", "Hay Doll #3", "Hay Doll #4", "Hay Doll #5", "Hay Doll #6", "Hay Doll #7", "Hay Doll #8", "Hay Doll #9", "Feeder", "Music 4 Ever", "The Cause", "The Effect", "The Fortune", "Doggy Treat", "Sniper", "Painter", "Eternal Happiness"];

    assert.strictEqual(officialAchievementNames.length, 35, "sanity check on this test's own reference list");

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
